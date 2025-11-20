import { Request, Response, NextFunction } from "express";
import Stripe from "stripe";
import { prisma } from "../config/db";
import config from "../config/config";

// Initialize Stripe
const stripe = new Stripe(config.stripeSecretKey, {
  apiVersion: "2025-11-17.clover",
});

// Subscription plan configuration (Price IDs from Stripe Payment Link)
// IMPORTANT: You MUST create a Stripe Payment Link in Stripe Dashboard.
// The Payment Link URL must be set in STRIPE_PAYMENT_LINK environment variable.
// 
// To create a Payment Link in Stripe:
// 1. Go to Stripe Dashboard > Products > Payment Links
// 2. Create a new Payment Link
// 3. Add all your subscription plans (User Monthly, User Yearly, Hospital Monthly, Hospital Yearly)
// 4. Copy the Payment Link URL (e.g., https://buy.stripe.com/test_xxx) and set it in your .env file
//
// Price mapping: Map each Price ID from your Payment Link to a plan type
// This mapping is used to allocate credits and manage subscriptions
// You can get the Price IDs from your Stripe Payment Link products or from webhook events
//
// Required environment variables:
// - STRIPE_PAYMENT_LINK (e.g., https://buy.stripe.com/test_8x24gy4OX195cJ3cgl7ss00)
// - STRIPE_PRICE_USER_MONTHLY (e.g., price_1ABC...) - Price ID from the Payment Link
// - STRIPE_PRICE_USER_YEARLY (e.g., price_1DEF...) - Price ID from the Payment Link
// - STRIPE_PRICE_HOSPITAL_MONTHLY (e.g., price_1GHI...) - Price ID from the Payment Link
// - STRIPE_PRICE_HOSPITAL_YEARLY (e.g., price_1JKL...) - Price ID from the Payment Link
const SUBSCRIPTION_PLANS: Record<string, { priceId: string; userType: string; credits: number }> = {
  USER_MONTHLY: {
    priceId: process.env.STRIPE_PRICE_USER_MONTHLY || "", // Price ID from Price Table (e.g., price_1234567890abcdef)
    userType: "USER",
    credits: Number(process.env.CREDITS_USER_MONTHLY) || 120000, // Credits per month (e.g., 20/month = 120,000 credits)
  },
  USER_YEARLY: {
    priceId: process.env.STRIPE_PRICE_USER_YEARLY || "", // Price ID from Price Table (e.g., price_1234567890abcdef)
    userType: "USER",
    credits: Number(process.env.CREDITS_USER_YEARLY) || 1440000, // Credits per year (12 months worth)
  },
  HOSPITAL_MONTHLY: {
    priceId: process.env.STRIPE_PRICE_HOSPITAL_MONTHLY || "", // Price ID from Price Table (e.g., price_1234567890abcdef)
    userType: "MEDICAL_FACILITY",
    credits: Number(process.env.CREDITS_HOSPITAL_MONTHLY) || 500000, // More credits for hospitals
  },
  HOSPITAL_YEARLY: {
    priceId: process.env.STRIPE_PRICE_HOSPITAL_YEARLY || "", // Price ID from Price Table (e.g., price_1234567890abcdef)
    userType: "MEDICAL_FACILITY",
    credits: Number(process.env.CREDITS_HOSPITAL_YEARLY) || 6000000, // Credits per year for hospitals
  },
};

// Helper function to map a Price ID to a plan
function getPlanFromPriceId(priceId: string): string | null {
  for (const [plan, config] of Object.entries(SUBSCRIPTION_PLANS)) {
    if (config.priceId === priceId) {
      return plan;
    }
  }
  return null;
}

// Helper function to allocate credits to a user
async function allocateCredits(userId: string, amount: number, plan: string, referenceId?: string, description?: string): Promise<void> {
  try {
    // Get or create credit account
    let credit = await prisma.credit.findUnique({
      where: { userId },
    });

    if (!credit) {
      credit = await prisma.credit.create({
        data: {
          userId,
          balance: 0,
          totalAllocated: 0,
          totalUsed: 0,
        },
      });
    }

    // Update credit balance
    const newBalance = credit.balance + amount;

    await prisma.credit.update({
      where: { userId },
      data: {
        balance: newBalance,
        totalAllocated: credit.totalAllocated + amount,
      },
    });

    // Create transaction record
    await prisma.creditTransaction.create({
      data: {
        creditId: credit.id,
        type: "ALLOCATION",
        amount,
        balanceAfter: newBalance,
        description: description || `Credits allocated from ${plan} subscription`,
        referenceId: referenceId || null,
        metadata: JSON.stringify({ plan }),
      },
    });
  } catch (error) {
    console.error(`Error allocating credits for user ${userId}:`, error);
    // Don't throw - we don't want credit allocation failure to break subscription
  }
}

// Create checkout session - Generates a unique checkout session for each request
export const createCheckoutSession = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const userId = req.userId;
    if (!userId) {
      res.status(401).json({ message: "Authentication required" });
      return;
    }

    const { plan } = req.body; // USER_MONTHLY, USER_YEARLY, HOSPITAL_MONTHLY, HOSPITAL_YEARLY

    if (!plan || !SUBSCRIPTION_PLANS[plan]) {
      res.status(400).json({ message: "Invalid subscription plan. Plan is required." });
      return;
    }

    // Get user for validation and customer mapping
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { subscription: true },
    });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    // Check if user already has an active subscription
    if (user.subscription) {
      const activeStatuses = ["ACTIVE", "TRIALING"];
      const isActive = activeStatuses.includes(user.subscription.status);

      // Check if subscription period has not ended
      const periodValid = !user.subscription.currentPeriodEnd ||
        new Date(user.subscription.currentPeriodEnd) > new Date();

      if (isActive && periodValid) {
        res.status(409).json({
          message: "You already have an active subscription. Please cancel your current subscription before starting a new one.",
          code: "DUPLICATE_SUBSCRIPTION",
          subscription: {
            plan: user.subscription.plan,
            status: user.subscription.status,
            currentPeriodEnd: user.subscription.currentPeriodEnd,
          },
        });
        return;
      }
    }

    // Validate userType matches plan
    const planConfig = SUBSCRIPTION_PLANS[plan];
    if (user.userType !== planConfig.userType) {
      res.status(400).json({
        message: `Plan ${plan} is only available for ${planConfig.userType} users`,
      });
      return;
    }

    // Validate priceId is configured for the plan
    if (!planConfig.priceId || !planConfig.priceId.startsWith('price_')) {
      res.status(500).json({
        message: `Price ID not configured for plan ${plan}. Please configure the appropriate environment variable with a valid Stripe Price ID.`,
        error: "Missing or invalid Price ID configuration",
      });
      return;
    }

    // Get or create Stripe customer for this user
    // This ensures one user = one Stripe customer (prevents duplicate subscriptions)
    let customerId: string;
    let customer: Stripe.Customer;

    if (user.subscription?.stripeCustomerId) {
      // User already has a Stripe customer - use existing one
      customerId = user.subscription.stripeCustomerId;

      // Verify customer still exists in Stripe and update metadata if needed
      try {
        customer = await stripe.customers.retrieve(customerId) as Stripe.Customer;

        // Ensure metadata is up to date
        if (customer.metadata?.userId !== userId) {
          await stripe.customers.update(customerId, {
            metadata: {
              userId: userId,
              userEmail: user.email,
            },
          });
        }
      } catch (error: any) {
        // Customer might have been deleted in Stripe - create new one
        customer = await stripe.customers.create({
          email: user.email,
          name: user.fullname,
          metadata: {
            userId: userId,
            userEmail: user.email,
          },
        });
        customerId = customer.id;

        // Update subscription record with new customer ID
        if (user.subscription) {
          await prisma.subscription.update({
            where: { userId },
            data: { stripeCustomerId: customerId },
          });
        }
      }
    } else {
      // Create new Stripe customer for this user
      // First check if a customer with this email already exists
      const existingCustomers = await stripe.customers.list({
        email: user.email,
        limit: 1,
      });

      if (existingCustomers.data.length > 0) {
        // Customer with this email exists - use it and update metadata
        customer = existingCustomers.data[0];
        customerId = customer.id;

        await stripe.customers.update(customerId, {
          metadata: {
            userId: userId,
            userEmail: user.email,
          },
        });
      } else {
        // Create new customer
        customer = await stripe.customers.create({
          email: user.email,
          name: user.fullname,
          metadata: {
            userId: userId,
            userEmail: user.email,
          },
        });
        customerId = customer.id;
      }

      // Create subscription record if it doesn't exist
      if (!user.subscription) {
        await prisma.subscription.create({
          data: {
            userId: userId,
            stripeCustomerId: customerId,
            plan: plan as any,
            status: "TRIALING",
          },
        });
      } else {
        // Update existing subscription with customer ID
        await prisma.subscription.update({
          where: { userId },
          data: { stripeCustomerId: customerId },
        });
      }
    }

    // Check if customer already has an active subscription in Stripe
    const existingSubscriptions = await stripe.subscriptions.list({
      customer: customerId,
      status: 'active',
      limit: 1,
    });

    if (existingSubscriptions.data.length > 0) {
      const activeSubscription = existingSubscriptions.data[0];

      // Check if this subscription is linked to our database
      const dbSubscription = await prisma.subscription.findUnique({
        where: { stripeSubscriptionId: activeSubscription.id },
      });

      if (!dbSubscription || dbSubscription.userId !== userId) {
        res.status(409).json({
          message: "This Stripe customer already has an active subscription. Please contact support if you believe this is an error.",
          code: "STRIPE_SUBSCRIPTION_EXISTS",
        });
        return;
      }
    }

    // Create a new checkout session for this request
    try {
      const session = await stripe.checkout.sessions.create({
        customer: customerId,
        payment_method_types: ["card"],
        line_items: [
          {
            price: planConfig.priceId,
            quantity: 1,
          },
        ],
        mode: "subscription",
        success_url: `${config.frontendUrl}/subscription/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${config.frontendUrl}/subscription/cancel`,
        metadata: {
          userId: userId,
          userEmail: user.email,
          plan: plan,
        },
        // Allow users to update their subscription after checkout
        allow_promotion_codes: true,
        // Collect billing address for tax calculation
        billing_address_collection: "auto",
      });

      res.status(200).json({
        sessionId: session.id,
        url: session.url,
        message: "Redirect user to this URL to complete subscription",
      });
      return;
    } catch (stripeError: any) {
      if (stripeError.type === 'StripeInvalidRequestError') {
        res.status(400).json({
          message: `Error creating checkout session: ${stripeError.message}`,
          error: stripeError.message,
        });
        return;
      }
      throw stripeError;
    }
  } catch (error: any) {
    next(error);
  }
};

// Get current subscription
export const getMySubscription = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const userId = req.userId;
    if (!userId) {
      res.status(401).json({ message: "Authentication required" });
      return;
    }

    const subscription = await prisma.subscription.findUnique({
      where: { userId },
      include: { user: { select: { id: true, email: true, userType: true } } },
    });

    if (!subscription) {
      res.status(404).json({ message: "No subscription found" });
      return;
    }

    // Get subscription details from Stripe if we have a subscription ID
    let stripeSubscription = null;
    if (subscription.stripeSubscriptionId) {
      try {
        stripeSubscription = await stripe.subscriptions.retrieve(subscription.stripeSubscriptionId);
      } catch (error) {
        // Subscription might be deleted in Stripe
      }
    }

    res.status(200).json({
      subscription: {
        ...subscription,
        stripeDetails: stripeSubscription,
      },
    });
  } catch (error: any) {
    next(error);
  }
};

// Cancel subscription
export const cancelSubscription = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const userId = req.userId;
    if (!userId) {
      res.status(401).json({ message: "Authentication required" });
      return;
    }

    const subscription = await prisma.subscription.findUnique({
      where: { userId },
    });

    if (!subscription || !subscription.stripeSubscriptionId) {
      res.status(404).json({ message: "No active subscription found" });
      return;
    }

    // Cancel subscription in Stripe (at period end)
    const stripeSubscription = await stripe.subscriptions.update(subscription.stripeSubscriptionId, {
      cancel_at_period_end: true,
    });

    // Update subscription in database
    await prisma.subscription.update({
      where: { userId },
      data: {
        cancelAtPeriodEnd: true,
        status: stripeSubscription.status.toUpperCase() as any,
      },
    });

    res.status(200).json({
      message: "Subscription will be canceled at the end of the billing period",
      subscription: stripeSubscription,
    });
  } catch (error: any) {
    next(error);
  }
};

// Reactivate canceled subscription
export const reactivateSubscription = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const userId = req.userId;
    if (!userId) {
      res.status(401).json({ message: "Authentication required" });
      return;
    }

    const subscription = await prisma.subscription.findUnique({
      where: { userId },
    });

    if (!subscription || !subscription.stripeSubscriptionId) {
      res.status(404).json({ message: "No subscription found" });
      return;
    }

    // Reactivate subscription in Stripe
    const stripeSubscription = await stripe.subscriptions.update(subscription.stripeSubscriptionId, {
      cancel_at_period_end: false,
    });

    // Update subscription in database
    await prisma.subscription.update({
      where: { userId },
      data: {
        cancelAtPeriodEnd: false,
        status: stripeSubscription.status.toUpperCase() as any,
      },
    });

    res.status(200).json({
      message: "Subscription reactivated",
      subscription: stripeSubscription,
    });
  } catch (error: any) {
    next(error);
  }
};

// Update subscription plan
export const updateSubscriptionPlan = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const userId = req.userId;
    if (!userId) {
      res.status(401).json({ message: "Authentication required" });
      return;
    }

    const { plan } = req.body; // USER_MONTHLY, USER_YEARLY, HOSPITAL_MONTHLY, HOSPITAL_YEARLY

    if (!plan || !SUBSCRIPTION_PLANS[plan]) {
      res.status(400).json({ message: "Invalid subscription plan" });
      return;
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { subscription: true },
    });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    // Verify userType matches plan
    const planConfig = SUBSCRIPTION_PLANS[plan];
    if (user.userType !== planConfig.userType) {
      res.status(400).json({
        message: `Plan ${plan} is only available for ${planConfig.userType} users`,
      });
      return;
    }

    // Note: With Price Tables, we don't need to validate individual price IDs here
    // The price selection happens in the Price Table UI, and we map it back in webhooks

    if (!user.subscription || !user.subscription.stripeSubscriptionId) {
      res.status(404).json({ message: "No active subscription found" });
      return;
    }

    // Update subscription in Stripe
    // Note: When using Price Tables, plan updates should be done through the Price Table UI
    // or by creating a new checkout session. This endpoint can still update our database record.
    try {
      if (!planConfig.priceId || !planConfig.priceId.startsWith('price_')) {
        res.status(500).json({
          message: `Price ID not configured for plan ${plan}. Please configure the appropriate environment variable.`,
          error: "Missing price ID configuration",
        });
        return;
      }

      const stripeSubscription = await stripe.subscriptions.retrieve(user.subscription.stripeSubscriptionId);

      await stripe.subscriptions.update(user.subscription.stripeSubscriptionId, {
        items: [
          {
            id: stripeSubscription.items.data[0].id,
            price: planConfig.priceId,
          },
        ],
        proration_behavior: "create_prorations",
      });

      // Update subscription in database
      await prisma.subscription.update({
        where: { userId },
        data: {
          plan: plan as any,
          priceId: planConfig.priceId,
        },
      });

      res.status(200).json({
        message: "Subscription plan updated successfully",
      });
      return;
    } catch (stripeError: any) {
      if (stripeError.type === 'StripeInvalidRequestError' && stripeError.param?.includes('price')) {
        res.status(400).json({
          message: `Invalid Stripe Price ID for plan ${plan}. Please ensure the Stripe Price ID is correctly configured.`,
          error: stripeError.message,
        });
        return;
      }
      throw stripeError;
    }
  } catch (error: any) {
    next(error);
  }
};

// Get available plans
export const getAvailablePlans = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const plans = Object.keys(SUBSCRIPTION_PLANS).map((key) => ({
      id: key,
      ...SUBSCRIPTION_PLANS[key],
    }));

    res.status(200).json({ plans });
  } catch (error: any) {
    next(error);
  }
};

// Stripe webhook handler
export const handleStripeWebhook = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const sig = req.headers["stripe-signature"] as string;

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(req.body, sig, config.stripeWebhookSecret);
    } catch (err: any) {
      res.status(400).send(`Webhook signature verification failed: ${err.message}`);
      return;
    }

    // Handle the event
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        if (session.mode === "subscription") {
          const subscriptionId = session.subscription as string;

          // Try to get userId from metadata (if set via client_reference_id)
          let userId = session.metadata?.userId || session.client_reference_id as string;

          // If no userId in metadata, try to find user by customer email
          if (!userId && session.customer_email) {
            const user = await prisma.user.findUnique({
              where: { email: session.customer_email },
              select: { id: true },
            });
            if (user) {
              userId = user.id;
            }
          }

          if (userId && subscriptionId) {
            const subscription = await stripe.subscriptions.retrieve(subscriptionId);
            const priceId = subscription.items.data[0].price.id;
            // Map the selected price ID to our plan type
            const plan = getPlanFromPriceId(priceId) || session.metadata?.plan;

            if (plan && SUBSCRIPTION_PLANS[plan]) {
              const planConfig = SUBSCRIPTION_PLANS[plan];

              // Get or create subscription record
              let dbSubscription = await prisma.subscription.findUnique({
                where: { userId },
              });

              const customerId = typeof subscription.customer === 'string'
                ? subscription.customer
                : subscription.customer.id;

              if (!dbSubscription) {
                // Create subscription record if it doesn't exist
                dbSubscription = await prisma.subscription.create({
                  data: {
                    userId,
                    stripeCustomerId: customerId,
                    stripeSubscriptionId: subscriptionId,
                    plan: plan as any,
                    status: subscription.status.toUpperCase() as any,
                    priceId: priceId,
                    currentPeriodStart: new Date((subscription as any).current_period_start * 1000),
                    currentPeriodEnd: new Date((subscription as any).current_period_end * 1000),
                  },
                });
              } else {
                // Update existing subscription
                await prisma.subscription.update({
                  where: { userId },
                  data: {
                    stripeSubscriptionId: subscriptionId,
                    stripeCustomerId: customerId,
                    plan: plan as any,
                    status: subscription.status.toUpperCase() as any,
                    priceId: priceId,
                    currentPeriodStart: new Date((subscription as any).current_period_start * 1000),
                    currentPeriodEnd: new Date((subscription as any).current_period_end * 1000),
                  },
                });
              }

              // Allocate credits for new subscription (only if this is a new subscription)
              const isNewSubscription = !dbSubscription.stripeSubscriptionId ||
                dbSubscription.stripeSubscriptionId !== subscriptionId;

              if (isNewSubscription && planConfig && planConfig.credits) {
                await allocateCredits(
                  userId,
                  planConfig.credits,
                  plan,
                  subscriptionId,
                  `Initial credits from ${plan} subscription`
                );
              }
            }
          }
        }
        break;
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;
        const customerId = typeof subscription.customer === 'string' ? subscription.customer : subscription.customer.id;
        const customerIdString = customerId as string;

        const dbSubscription = await prisma.subscription.findUnique({
          where: { stripeCustomerId: customerIdString },
        });

        if (dbSubscription) {
          const priceId = subscription.items.data[0].price.id;
          // Map the price ID to our plan type
          const plan = getPlanFromPriceId(priceId);

          await prisma.subscription.update({
            where: { id: dbSubscription.id },
            data: {
              stripeSubscriptionId: subscription.id,
              status: subscription.status.toUpperCase() as any,
              currentPeriodStart: new Date((subscription as any).current_period_start * 1000),
              currentPeriodEnd: new Date((subscription as any).current_period_end * 1000),
              cancelAtPeriodEnd: (subscription as any).cancel_at_period_end || false,
              ...(plan && { plan: plan as any, priceId: priceId }),
            },
          });
        }
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        const customerId = subscription.customer as string;

        const dbSubscription = await prisma.subscription.findUnique({
          where: { stripeCustomerId: customerId },
        });

        if (dbSubscription) {
          await prisma.subscription.update({
            where: { id: dbSubscription.id },
            data: {
              status: "CANCELED",
              canceledAt: new Date(),
              cancelAtPeriodEnd: false,
            },
          });
        }
        break;
      }

      case "invoice.payment_succeeded": {
        const invoice = event.data.object as Stripe.Invoice;
        const subscriptionId = (invoice as any).subscription
          ? (typeof (invoice as any).subscription === 'string' ? (invoice as any).subscription : (invoice as any).subscription.id)
          : null;

        if (subscriptionId) {
          const subscription = await stripe.subscriptions.retrieve(subscriptionId);
          const customerId = typeof subscription.customer === 'string' ? subscription.customer : subscription.customer.id;

          const dbSubscription = await prisma.subscription.findUnique({
            where: { stripeCustomerId: customerId },
          });

          if (dbSubscription) {
            // Check if this is a renewal (not the first payment)
            const isRenewal = dbSubscription.currentPeriodEnd &&
              new Date(dbSubscription.currentPeriodEnd) < new Date((subscription as any).current_period_start * 1000);

            await prisma.subscription.update({
              where: { id: dbSubscription.id },
              data: {
                status: "ACTIVE",
                currentPeriodStart: new Date((subscription as any).current_period_start * 1000),
                currentPeriodEnd: new Date((subscription as any).current_period_end * 1000),
              },
            });

            // Allocate credits on renewal
            if (isRenewal) {
              // Try to get plan from current price ID, fallback to stored plan
              const priceId = subscription.items.data[0].price.id;
              const planFromPrice = getPlanFromPriceId(priceId);
              const plan = planFromPrice || dbSubscription.plan;

              const planConfig = SUBSCRIPTION_PLANS[plan];
              if (planConfig && planConfig.credits) {
                // For monthly plans, allocate monthly credits on each renewal
                // For yearly plans, allocate yearly credits on renewal
                await allocateCredits(
                  dbSubscription.userId,
                  planConfig.credits,
                  plan,
                  subscriptionId,
                  `Credits renewed from ${plan} subscription`
                );
              }
            }
          }
        }
        break;
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice;
        const subscriptionId = (invoice as any).subscription
          ? (typeof (invoice as any).subscription === 'string' ? (invoice as any).subscription : (invoice as any).subscription.id)
          : null;

        if (subscriptionId) {
          const subscription = await stripe.subscriptions.retrieve(subscriptionId);
          const customerId = typeof subscription.customer === 'string' ? subscription.customer : subscription.customer.id;

          const dbSubscription = await prisma.subscription.findUnique({
            where: { stripeCustomerId: customerId },
          });

          if (dbSubscription) {
            await prisma.subscription.update({
              where: { id: dbSubscription.id },
              data: {
                status: subscription.status === "past_due" ? "PAST_DUE" : "UNPAID",
              },
            });
          }
        }
        break;
      }

      default:
        // Unhandled event type
        break;
    }

    res.status(200).json({ received: true });
  } catch (error: any) {
    next(error);
  }
};

