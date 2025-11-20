'use client';

import { useState, useEffect, useCallback } from 'react';
import { Check, Loader2, CreditCard, Sparkles, Plus, Trash2, Crown } from 'lucide-react';
import { format } from 'date-fns';
import { toast } from 'sonner';
import { pricingService, Plan, Subscription, PaymentMethod } from '@/lib/services/pricing';
import { subscriptionService, Subscription as NewSubscription, SubscriptionPlan } from '@/lib/services/subscription';
import { useAuth } from '@/app/contexts/use-auth';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function PricingTab() {
  const { user, isAuthenticated } = useAuth();
  const [plans, setPlans] = useState<Plan[]>([]);
  const [subscriptionPlans, setSubscriptionPlans] = useState<SubscriptionPlan[]>([]);
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [newSubscription, setNewSubscription] = useState<NewSubscription | null>(null);
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
  const [isLoadingPricing, setIsLoadingPricing] = useState(false);
  const [pricingTab, setPricingTab] = useState<'plans' | 'subscription' | 'payment'>('plans');
  const [isProcessingPricing, setIsProcessingPricing] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  // Load pricing data from backend
  const loadPricingData = useCallback(async () => {
    setIsLoadingPricing(true);
    try {
      let newSubscriptionData: NewSubscription | null = null;
      let subscriptionPlansData: SubscriptionPlan[] = [];

      // Load from new subscription service (backend)
      try {
        const subscriptionPlansResponse = await subscriptionService.getPlans();
        subscriptionPlansData = subscriptionPlansResponse.plans.filter(
          plan => plan.userType === user?.userType
        );

        if (subscriptionPlansData.length === 0) {
          console.warn('No plans found for user type:', user?.userType);
        }
      } catch (e: any) {
        console.error('Error loading subscription plans:', e);
        toast.error('Failed to load plans', {
          description: e.message || 'Please try again later.',
        });
      }

      // Load current subscription
      try {
        const newSubResponse = await subscriptionService.getMySubscription();
        if (newSubResponse?.subscription) {
          newSubscriptionData = newSubResponse.subscription;
        }
      } catch (e: any) {
        // 404 is expected if user has no subscription
        if (e.status !== 404) {
          console.error('Error loading subscription:', e);
        }
      }

      // Set the plans from backend
      setSubscriptionPlans(subscriptionPlansData);
      setNewSubscription(newSubscriptionData);

      // Clear old plans - we're only using the new subscription service
      setPlans([]);
      setSubscription(null);
      setPaymentMethods([]);
    } catch (error: any) {
      console.error('Error loading pricing data:', error);
      toast.error('Failed to load pricing information', {
        description: error.message || 'Please try again later.',
      });
    } finally {
      setIsLoadingPricing(false);
    }
  }, [user?.userType]);

  useEffect(() => {
    if (isAuthenticated && user) {
      loadPricingData();
    }
  }, [isAuthenticated, user, loadPricingData]);

  const handleSubscribe = async (planId: string) => {
    if (!isAuthenticated) {
      toast.error('Authentication Required', {
        description: 'Please log in to subscribe',
      });
      return;
    }

    if (!user) {
      toast.error('User information not available', {
        description: 'Please refresh the page and try again',
      });
      return;
    }

    // Validate plan exists
    const selectedPlan = subscriptionPlans.find(p => p.id === planId);
    if (!selectedPlan) {
      toast.error('Invalid plan selected', {
        description: 'Please select a valid plan',
      });
      return;
    }

    // Validate user type matches plan
    if (selectedPlan.userType !== user.userType) {
      toast.error('Plan mismatch', {
        description: `This plan is for ${selectedPlan.userType === 'USER' ? 'users' : 'medical facilities'}, but your account is ${user.userType === 'USER' ? 'a user' : 'a medical facility'}`,
      });
      return;
    }

    setIsProcessingPricing(true);
    setSelectedPlan(planId);

    try {
      // Create checkout session and redirect to Stripe payment page
      const { url } = await subscriptionService.createCheckout(planId as any);

      if (!url) {
        throw new Error('No checkout URL received from server');
      }

      // Redirect to Stripe checkout page
      window.location.href = url;
      // Note: setIsProcessingPricing(false) won't be called because we're redirecting
    } catch (error: any) {
      console.error('Error creating checkout session:', error);
      toast.error('Failed to start checkout', {
        description: error.message || 'Please try again later.',
      });
      setIsProcessingPricing(false);
      setSelectedPlan(null);
    }
  };

  const handleCancelSubscription = async () => {
    if (!confirm('Are you sure you want to cancel your subscription? You will continue to have access until the end of your billing period.')) {
      return;
    }

    setIsProcessingPricing(true);
    try {
      // Try new subscription service first
      if (newSubscription) {
        await subscriptionService.cancel();
        toast.success('Subscription cancelled', {
          description: 'Your subscription will remain active until the end of your billing period.',
        });
        await loadPricingData();
      } else if (subscription) {
        // Fall back to old pricing service
        const updatedSubscription = await pricingService.cancelSubscription();
        setSubscription(updatedSubscription);
        toast.success('Subscription cancelled', {
          description: 'Your subscription will remain active until the end of your billing period.',
        });
        await loadPricingData();
      }
    } catch (error: any) {
      console.error('Error cancelling subscription:', error);
      toast.error('Failed to cancel subscription', {
        description: error.message || 'Please try again later.',
      });
    } finally {
      setIsProcessingPricing(false);
    }
  };

  return (
    <div className="bg-[#0b0b0d] border border-gray-800 rounded-lg overflow-hidden">
      <div className="border-b border-gray-800 px-6 py-4">
        <h2 className="text-xl font-semibold text-white">Pricing & Plans</h2>
        <p className="text-sm text-gray-400 mt-1">Choose the plan that works best for you</p>
      </div>

      <div className="p-6">
        <Tabs value={pricingTab} onValueChange={(value) => setPricingTab(value as 'plans' | 'subscription' | 'payment')}>
          <TabsList className="mb-6 bg-[#0a0a0a] border border-gray-800">
            <TabsTrigger value="plans" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Plans</TabsTrigger>
            <TabsTrigger value="subscription" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">My Subscription</TabsTrigger>
            <TabsTrigger value="payment" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Payment Methods</TabsTrigger>
          </TabsList>

          <TabsContent value="plans">
            {isLoadingPricing ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-6 h-6 animate-spin text-blue-500" />
                <span className="ml-3 text-gray-400">Loading plans...</span>
              </div>
            ) : subscriptionPlans.length > 0 || plans.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {/* Show new subscription plans if available */}
                {subscriptionPlans.length > 0 ? subscriptionPlans.map((plan) => {
                  const isYearly = plan.id.includes('YEARLY');
                  const isCurrentPlan = newSubscription?.plan === plan.id;
                  const planName = plan.id.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());

                  // Format credits for display
                  const formatCredits = (credits: number) => {
                    if (credits >= 1000000) {
                      return `${(credits / 1000000).toFixed(1)}M`;
                    } else if (credits >= 1000) {
                      return `${(credits / 1000).toFixed(0)}K`;
                    }
                    return credits.toLocaleString();
                  };

                  return (
                    <div
                      key={plan.id}
                      className={`relative bg-[#0a0a0a] border rounded-lg p-6 ${isYearly ? 'border-blue-500 border-2' : 'border-gray-800'} ${isCurrentPlan ? 'bg-blue-500/10' : ''}`}
                    >
                      {isYearly && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <Badge className="bg-blue-600 text-white">Best Value</Badge>
                        </div>
                      )}
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-2xl font-bold text-white">{planName}</h3>
                          {isCurrentPlan && (
                            <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-500/50">
                              Current Plan
                            </Badge>
                          )}
                        </div>
                        <p className="text-gray-400 text-sm mb-4">
                          {isYearly ? 'Billed annually - Save 20%' : 'Billed monthly - Cancel anytime'}
                        </p>
                        {/* Credits Display */}
                        <div className="mb-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Sparkles className="h-5 w-5 text-blue-400" />
                              <span className="text-sm font-medium text-gray-300">Credits Included</span>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-blue-400">
                                {formatCredits(plan.credits)}
                              </div>
                              <div className="text-xs text-gray-400">
                                per {isYearly ? 'year' : 'month'}
                              </div>
                            </div>
                          </div>
                          <div className="mt-2 text-xs text-gray-500">
                            {plan.credits.toLocaleString()} credits total
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2 mb-6">
                        {plan.id.includes('USER') ? (
                          <>
                            <div className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-300">Unlimited AI health consultations</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-300">Access to all health services</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-300">Priority booking</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-300">24/7 customer support</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-300">Secure blockchain storage</span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-300">Hospital management dashboard</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-300">Unlimited patient bookings</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-300">Advanced analytics</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-300">Priority support</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-300">Blockchain-verified records</span>
                            </div>
                          </>
                        )}
                      </div>
                      <div className="pt-4 border-t border-gray-800">
                        {isCurrentPlan ? (
                          <button
                            className="w-full px-4 py-2 border border-gray-700 text-gray-400 rounded-lg text-sm font-medium cursor-not-allowed"
                            disabled
                          >
                            Current Plan
                          </button>
                        ) : (
                          <button
                            className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium disabled:opacity-50 transition-colors"
                            onClick={() => handleSubscribe(plan.id)}
                            disabled={isProcessingPricing && selectedPlan === plan.id}
                          >
                            {isProcessingPricing && selectedPlan === plan.id ? (
                              <span className="flex items-center justify-center gap-2">
                                <Loader2 className="h-4 w-4 animate-spin" />
                                Processing...
                              </span>
                            ) : (
                              'Subscribe Now'
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  );
                }) : plans.map((plan) => {
                  const isCurrentPlan = subscription?.planId === plan.id;
                  const isPopular = plan.isPopular;

                  return (
                    <div
                      key={plan.id}
                      className={`relative bg-[#0a0a0a] border rounded-lg p-6 ${isPopular ? 'border-blue-500 border-2' : 'border-gray-800'} ${isCurrentPlan ? 'bg-blue-500/10' : ''}`}
                    >
                      {isPopular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <Badge className="bg-blue-600 text-white">Most Popular</Badge>
                        </div>
                      )}
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                          {isCurrentPlan && (
                            <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-500/50">
                              Current Plan
                            </Badge>
                          )}
                        </div>
                        <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                        <div className="mb-4">
                          <span className="text-4xl font-bold text-white">${plan.price}</span>
                          <span className="text-gray-400">/{plan.interval}</span>
                        </div>
                      </div>
                      <div className="space-y-2 mb-6">
                        {plan.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-4 border-t border-gray-800">
                        <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                          <Sparkles className="h-4 w-4" />
                          <span>
                            {plan.credits === -1
                              ? 'Unlimited credits/month'
                              : `${plan.credits} credits/month included`}
                          </span>
                        </div>
                        {isCurrentPlan ? (
                          <button
                            className="w-full px-4 py-2 border border-gray-700 text-gray-400 rounded-lg text-sm font-medium cursor-not-allowed"
                            disabled
                          >
                            Current Plan
                          </button>
                        ) : (
                          <button
                            className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium disabled:opacity-50 transition-colors"
                            onClick={() => handleSubscribe(plan.id)}
                            disabled={isProcessingPricing && selectedPlan === plan.id}
                          >
                            {isProcessingPricing && selectedPlan === plan.id ? (
                              <span className="flex items-center justify-center gap-2">
                                <Loader2 className="h-4 w-4 animate-spin" />
                                Processing...
                              </span>
                            ) : (
                              'Subscribe'
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-12 text-center">
                <Crown className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-white mb-2">No Plans Available</h3>
                <p className="text-gray-400 mb-6">
                  Plans are currently unavailable. Please try again later or contact support.
                </p>
                <button
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium"
                  onClick={() => loadPricingData()}
                >
                  Retry
                </button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="subscription">
            {newSubscription || subscription ? (
              newSubscription ? (
                // New subscription format
                <div className="space-y-6">
                  <div className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {newSubscription.plan.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </h3>
                        <p className="text-gray-400 text-sm">Your current subscription plan</p>
                      </div>
                      <Badge
                        className={
                          newSubscription.status === 'ACTIVE' || newSubscription.status === 'TRIALING'
                            ? 'bg-green-500/20 text-green-400 border-green-500/50'
                            : newSubscription.status === 'CANCELED'
                              ? 'bg-red-500/20 text-red-400 border-red-500/50'
                              : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50'
                        }
                      >
                        {newSubscription.status}
                      </Badge>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="text-sm font-medium text-gray-400 mb-1">Current Period Start</h4>
                        <p className="text-white">
                          {format(new Date(newSubscription.currentPeriodStart), 'MMM d, yyyy')}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-400 mb-1">Current Period End</h4>
                        <p className="text-white">
                          {format(new Date(newSubscription.currentPeriodEnd), 'MMM d, yyyy')}
                        </p>
                      </div>
                    </div>
                    {newSubscription.cancelAtPeriodEnd && (
                      <div className="bg-yellow-500/20 border border-yellow-500/50 rounded-lg p-4 mb-6">
                        <p className="text-sm text-yellow-400">
                          Your subscription will be canceled at the end of the current billing period ({format(new Date(newSubscription.currentPeriodEnd), 'MMM d, yyyy')}).
                        </p>
                      </div>
                    )}
                    <div className="flex gap-3 pt-4 border-t border-gray-800">
                      {newSubscription.cancelAtPeriodEnd ? (
                        <button
                          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium disabled:opacity-50 transition-colors"
                          onClick={async () => {
                            try {
                              await subscriptionService.reactivate();
                              toast.success('Subscription reactivated');
                              await loadPricingData();
                            } catch (error: any) {
                              toast.error('Failed to reactivate subscription', {
                                description: error.message || 'Please try again.',
                              });
                            }
                          }}
                        >
                          Reactivate Subscription
                        </button>
                      ) : (
                        <button
                          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium disabled:opacity-50 transition-colors"
                          onClick={handleCancelSubscription}
                          disabled={isProcessingPricing}
                        >
                          Cancel Subscription
                        </button>
                      )}
                      <button
                        className="px-4 py-2 border border-gray-700 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                        onClick={() => setPricingTab('plans')}
                      >
                        Change Plan
                      </button>
                    </div>
                  </div>
                </div>
              ) : subscription ? (
                // Old subscription format
                <div className="space-y-6">
                  <div className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white">{subscription.planName}</h3>
                        <p className="text-gray-400 text-sm">Your current subscription plan</p>
                      </div>
                      <Badge
                        className={
                          subscription.status === 'active'
                            ? 'bg-green-500/20 text-green-400 border-green-500/50'
                            : subscription.status === 'cancelled'
                              ? 'bg-red-500/20 text-red-400 border-red-500/50'
                              : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50'
                        }
                      >
                        {subscription.status.toUpperCase()}
                      </Badge>
                    </div>
                    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-6 border border-blue-500/20 mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                            <Sparkles className="h-5 w-5 text-blue-400" />
                            Available Credits
                          </h4>
                          <p className="text-sm text-gray-400 mt-1">Credits remaining this period</p>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-blue-400">
                            {subscription.credits === -1 ? '∞' : subscription.creditsRemaining}
                          </div>
                          <div className="text-sm text-gray-400">
                            {subscription.credits === -1
                              ? 'Unlimited'
                              : `of ${subscription.credits} total`}
                          </div>
                        </div>
                      </div>
                      {subscription.credits !== -1 && (
                        <>
                          <div className="w-full bg-gray-800 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full transition-all"
                              style={{
                                width: `${Math.min((subscription.creditsRemaining / subscription.credits) * 100, 100)}%`,
                              }}
                            />
                          </div>
                          <div className="flex justify-between text-xs text-gray-500 mt-2">
                            <span>{subscription.creditsUsed} used</span>
                            <span>{subscription.creditsRemaining} remaining</span>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="text-sm font-medium text-gray-400 mb-1">Billing Period</h4>
                        <p className="text-white">
                          {format(new Date(subscription.currentPeriodStart), 'MMM d, yyyy')} -{' '}
                          {format(new Date(subscription.currentPeriodEnd), 'MMM d, yyyy')}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-400 mb-1">Next Billing Date</h4>
                        <p className="text-white">
                          {format(new Date(subscription.currentPeriodEnd), 'MMM d, yyyy')}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 pt-4 border-t border-gray-800">
                      {subscription.cancelAtPeriodEnd ? (
                        <button
                          className="px-4 py-2 border border-gray-700 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                          onClick={async () => {
                            try {
                              await pricingService.updateSubscription({ cancelAtPeriodEnd: false });
                              toast.success('Subscription reactivated');
                              await loadPricingData();
                            } catch (error: any) {
                              toast.error('Failed to reactivate subscription', {
                                description: error.message || 'Please try again.',
                              });
                            }
                          }}
                        >
                          Reactivate Subscription
                        </button>
                      ) : (
                        <button
                          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium disabled:opacity-50 transition-colors"
                          onClick={handleCancelSubscription}
                          disabled={isProcessingPricing}
                        >
                          Cancel Subscription
                        </button>
                      )}
                      <button
                        className="px-4 py-2 border border-gray-700 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                        onClick={() => setPricingTab('plans')}
                      >
                        Change Plan
                      </button>
                    </div>
                  </div>
                </div>
              ) : null
            ) : (
              <div className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-12 text-center">
                <Crown className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-white mb-2">No Active Subscription</h3>
                <p className="text-gray-400 mb-6">
                  Subscribe to a plan to unlock premium features and credits
                </p>
                <button
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium"
                  onClick={() => setPricingTab('plans')}
                >
                  View Plans
                </button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="payment">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-white">Payment Methods</h3>
                  <p className="text-sm text-gray-400 mt-1">Manage your payment methods</p>
                </div>
                <button
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium flex items-center gap-2"
                  onClick={() => {
                    toast.info('Payment method integration', {
                      description: 'Payment method integration will be implemented with Stripe or similar service.',
                    });
                  }}
                >
                  <Plus className="h-4 w-4" />
                  Add Payment Method
                </button>
              </div>

              {paymentMethods.length === 0 ? (
                <div className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-12 text-center">
                  <CreditCard className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-white mb-2">No Payment Methods</h3>
                  <p className="text-gray-400 mb-6">
                    Add a payment method to subscribe to a plan
                  </p>
                  <button
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium flex items-center gap-2 mx-auto"
                    onClick={() => {
                      toast.info('Payment method integration', {
                        description: 'Payment method integration will be implemented with Stripe or similar service.',
                      });
                    }}
                  >
                    <Plus className="h-4 w-4" />
                    Add Payment Method
                  </button>
                </div>
              ) : (
                <div className="grid gap-4">
                  {paymentMethods.map((method) => (
                    <div key={method.id} className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                            <CreditCard className="h-6 w-6 text-blue-400" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-semibold text-white">
                                {method.type === 'card'
                                  ? `${method.brand || 'Card'} •••• ${method.last4 || '****'}`
                                  : method.type === 'crypto'
                                    ? `Crypto Wallet`
                                    : 'Bank Account'}
                              </h4>
                              {method.isDefault && (
                                <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-500/50">
                                  Default
                                </Badge>
                              )}
                            </div>
                            {method.type === 'card' && method.expiryMonth && method.expiryYear && (
                              <p className="text-sm text-gray-400 mt-1">
                                Expires {method.expiryMonth}/{method.expiryYear}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          {!method.isDefault && (
                            <button
                              className="px-3 py-1.5 border border-gray-700 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                              onClick={async () => {
                                try {
                                  await pricingService.setDefaultPaymentMethod(method.id);
                                  toast.success('Default payment method updated');
                                  await loadPricingData();
                                } catch (error: any) {
                                  toast.error('Failed to update payment method', {
                                    description: error.message || 'Please try again.',
                                  });
                                }
                              }}
                            >
                              Set as Default
                            </button>
                          )}
                          <button
                            className="px-3 py-1.5 border border-gray-700 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                            onClick={async () => {
                              if (!confirm('Are you sure you want to delete this payment method?')) {
                                return;
                              }
                              try {
                                await pricingService.deletePaymentMethod(method.id);
                                toast.success('Payment method deleted');
                                await loadPricingData();
                              } catch (error: any) {
                                toast.error('Failed to delete payment method', {
                                  description: error.message || 'Please try again.',
                                });
                              }
                            }}
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

