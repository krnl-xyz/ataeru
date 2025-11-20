import { NextFunction, Request, Response } from "express";
import { prisma } from "../config/db";

// Middleware to check if user has an active subscription
export const requireSubscription = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const userId = req.userId;

    if (!userId) {
      res.status(401).json({
        message: "Authentication required",
      });
      return;
    }

    const subscription = await prisma.subscription.findUnique({
      where: { userId },
    });

    if (!subscription) {
      res.status(403).json({
        message: "Subscription required. Please subscribe to access this feature.",
        code: "SUBSCRIPTION_REQUIRED",
      });
      return;
    }

    // Check if subscription is active
    const activeStatuses = ["ACTIVE", "TRIALING"];
    if (!activeStatuses.includes(subscription.status)) {
      res.status(403).json({
        message: "Active subscription required. Your subscription is not active.",
        code: "SUBSCRIPTION_INACTIVE",
        status: subscription.status,
      });
      return;
    }

    // Check if subscription period has ended
    if (subscription.currentPeriodEnd && new Date() > subscription.currentPeriodEnd) {
      // Update subscription status
      await prisma.subscription.update({
        where: { userId },
        data: {
          status: "INCOMPLETE_EXPIRED",
        },
      });

      res.status(403).json({
        message: "Your subscription has expired. Please renew your subscription.",
        code: "SUBSCRIPTION_EXPIRED",
      });
      return;
    }

    // Subscription is valid, continue
    next();
  } catch (error) {
    next(error);
  }
};

