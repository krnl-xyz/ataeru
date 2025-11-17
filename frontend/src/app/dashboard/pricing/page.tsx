'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { Check, CreditCard, Sparkles, Zap, Crown, Loader2, Plus, Trash2, Calendar, TrendingUp, TrendingDown } from 'lucide-react';
import { pricingService, Plan, Subscription, PaymentMethod } from '@/lib/services/pricing';
import { useAuth } from '@/app/contexts/use-auth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { format } from 'date-fns';

export default function PricingPage() {
  const router = useRouter();
  const { isAuthenticated, isLoading: authLoading } = useAuth();
  const [plans, setPlans] = useState<Plan[]>([]);
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'plans' | 'subscription' | 'payment'>('plans');
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      toast.error('Authentication Required', {
        description: 'Please log in to view pricing',
      });
      router.push('/');
      return;
    }

    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated, authLoading, router]);

  const loadData = async () => {
    setIsLoading(true);
    try {
      // Try to fetch from API, fallback to default plans if API is not available
      let plansData: Plan[] = [];
      let subscriptionData: Subscription | null = null;
      let paymentMethodsData: PaymentMethod[] = [];

      try {
        [plansData, subscriptionData, paymentMethodsData] = await Promise.all([
          pricingService.getPlans(),
          pricingService.getSubscription().catch(() => null),
          pricingService.getPaymentMethods().catch(() => []),
        ]);
      } catch (apiError) {
        console.log('API not available, using default plans');
        // Use default plans if API is not available
        plansData = [
          {
            id: 'free',
            name: 'Free',
            description: 'Perfect for getting started',
            price: 0,
            currency: 'USD',
            interval: 'month',
            features: [
              'Basic AI consultations',
              '5 credits per month',
              'Access to hospital directory',
              'Basic booking features',
            ],
            credits: 5,
          },
          {
            id: 'pro',
            name: 'Pro',
            description: 'For power users and professionals',
            price: 29.99,
            currency: 'USD',
            interval: 'month',
            features: [
              'Unlimited AI consultations',
              '100 credits per month',
              'Priority booking',
              'Advanced analytics',
              '24/7 support',
              'Early access to new features',
            ],
            credits: 100,
            isPopular: true,
          },
          {
            id: 'enterprise',
            name: 'Enterprise',
            description: 'For hospitals and large organizations',
            price: 99.99,
            currency: 'USD',
            interval: 'month',
            features: [
              'Everything in Pro',
              'Unlimited credits',
              'Custom integrations',
              'Dedicated account manager',
              'SLA guarantee',
              'Custom training',
            ],
            credits: -1, // Unlimited
          },
        ];
      }

      setPlans(plansData);
      setSubscription(subscriptionData);
      setPaymentMethods(paymentMethodsData);
    } catch (error: any) {
      console.error('Error loading pricing data:', error);
      toast.error('Failed to load pricing information', {
        description: error.message || 'Please try again later.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubscribe = async (planId: string) => {
    if (!isAuthenticated) {
      toast.error('Authentication Required', {
        description: 'Please log in to subscribe',
      });
      return;
    }

    setIsProcessing(true);
    setSelectedPlan(planId);

    try {
      // Check if user has payment methods
      if (paymentMethods.length === 0) {
        toast.info('Payment Method Required', {
          description: 'Please add a payment method first',
        });
        setActiveTab('payment');
        return;
      }

      const defaultPaymentMethod = paymentMethods.find(pm => pm.isDefault) || paymentMethods[0];

      const newSubscription = await pricingService.createSubscription({
        planId,
        paymentMethodId: defaultPaymentMethod.id,
      });

      setSubscription(newSubscription);
      toast.success('Subscription activated!', {
        description: 'Your plan has been successfully activated.',
      });

      // Refresh data
      await loadData();
    } catch (error: any) {
      console.error('Error subscribing:', error);
      toast.error('Subscription failed', {
        description: error.message || 'Please try again later.',
      });
    } finally {
      setIsProcessing(false);
      setSelectedPlan(null);
    }
  };

  const handleCancelSubscription = async () => {
    if (!confirm('Are you sure you want to cancel your subscription? You will continue to have access until the end of your billing period.')) {
      return;
    }

    setIsProcessing(true);
    try {
      const updatedSubscription = await pricingService.cancelSubscription();
      setSubscription(updatedSubscription);
      toast.success('Subscription cancelled', {
        description: 'Your subscription will remain active until the end of the billing period.',
      });
      await loadData();
    } catch (error: any) {
      console.error('Error cancelling subscription:', error);
      toast.error('Failed to cancel subscription', {
        description: error.message || 'Please try again later.',
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleAddPaymentMethod = async () => {
    // This would typically open a payment method form or Stripe Elements
    toast.info('Payment method integration', {
      description: 'Payment method integration will be implemented with Stripe or similar service.',
    });
  };

  const handleSetDefaultPaymentMethod = async (paymentMethodId: string) => {
    try {
      await pricingService.setDefaultPaymentMethod(paymentMethodId);
      toast.success('Default payment method updated');
      await loadData();
    } catch (error: any) {
      console.error('Error setting default payment method:', error);
      toast.error('Failed to update payment method', {
        description: error.message || 'Please try again.',
      });
    }
  };

  const handleDeletePaymentMethod = async (paymentMethodId: string) => {
    if (!confirm('Are you sure you want to delete this payment method?')) {
      return;
    }

    try {
      await pricingService.deletePaymentMethod(paymentMethodId);
      toast.success('Payment method deleted');
      await loadData();
    } catch (error: any) {
      console.error('Error deleting payment method:', error);
      toast.error('Failed to delete payment method', {
        description: error.message || 'Please try again.',
      });
    }
  };

  if (authLoading || isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading pricing information...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const currentPlan = subscription ? plans.find(p => p.id === subscription.planId) : null;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Pricing & Plans</h1>
        <p className="text-gray-600 mt-2">Choose the plan that works best for you</p>
      </div>

      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'plans' | 'subscription' | 'payment')}>
        <TabsList className="mb-6">
          <TabsTrigger value="plans">Plans</TabsTrigger>
          <TabsTrigger value="subscription">My Subscription</TabsTrigger>
          <TabsTrigger value="payment">Payment Methods</TabsTrigger>
        </TabsList>

        <TabsContent value="plans">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {plans.map((plan) => {
              const isCurrentPlan = subscription?.planId === plan.id;
              const isPopular = plan.isPopular;

              return (
                <Card
                  key={plan.id}
                  className={`relative ${isPopular ? 'border-blue-500 border-2' : ''} ${isCurrentPlan ? 'bg-blue-50' : ''}`}
                >
                  {isPopular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-blue-600 text-white">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      {isCurrentPlan && (
                        <Badge variant="outline" className="bg-green-100 text-green-800">
                          Current Plan
                        </Badge>
                      )}
                    </div>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-gray-600">/{plan.interval}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        {plan.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-4 border-t">
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                          <Sparkles className="h-4 w-4" />
                          <span>
                            {plan.credits === -1
                              ? 'Unlimited credits/month'
                              : `${plan.credits} credits/month included`}
                          </span>
                        </div>
                        {isCurrentPlan ? (
                          <Button variant="outline" className="w-full" disabled>
                            Current Plan
                          </Button>
                        ) : (
                          <Button
                            className="w-full"
                            onClick={() => handleSubscribe(plan.id)}
                            disabled={isProcessing && selectedPlan === plan.id}
                          >
                            {isProcessing && selectedPlan === plan.id ? (
                              <>
                                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                Processing...
                              </>
                            ) : (
                              'Subscribe'
                            )}
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="subscription">
          {subscription ? (
            <div className="space-y-6">
              {/* Current Subscription Card */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl">{subscription.planName}</CardTitle>
                      <CardDescription>Your current subscription plan</CardDescription>
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
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Credits Display */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                          <Sparkles className="h-5 w-5 text-blue-600" />
                          Available Credits
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">Credits remaining this period</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-blue-600">
                          {subscription.credits === -1 ? '∞' : subscription.creditsRemaining}
                        </div>
                        <div className="text-sm text-gray-600">
                          {subscription.credits === -1
                            ? 'Unlimited'
                            : `of ${subscription.credits} total`}
                        </div>
                      </div>
                    </div>
                    {subscription.credits !== -1 && (
                      <>
                        <div className="w-full bg-gray-200 rounded-full h-2">
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

                  {/* Subscription Details */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">Billing Period</h4>
                      <p className="text-gray-900">
                        {format(new Date(subscription.currentPeriodStart), 'MMM d, yyyy')} -{' '}
                        {format(new Date(subscription.currentPeriodEnd), 'MMM d, yyyy')}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">Next Billing Date</h4>
                      <p className="text-gray-900">
                        {format(new Date(subscription.currentPeriodEnd), 'MMM d, yyyy')}
                      </p>
                    </div>
                    {subscription.cancelAtPeriodEnd && (
                      <div className="md:col-span-2">
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                          <p className="text-sm text-yellow-800">
                            <strong>Subscription will cancel</strong> on{' '}
                            {format(new Date(subscription.currentPeriodEnd), 'MMM d, yyyy')}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-4 border-t">
                    {subscription.cancelAtPeriodEnd ? (
                      <Button
                        variant="outline"
                        onClick={async () => {
                          try {
                            await pricingService.updateSubscription({ cancelAtPeriodEnd: false });
                            toast.success('Subscription reactivated');
                            await loadData();
                          } catch (error: any) {
                            toast.error('Failed to reactivate subscription', {
                              description: error.message || 'Please try again.',
                            });
                          }
                        }}
                      >
                        Reactivate Subscription
                      </Button>
                    ) : (
                      <Button
                        variant="destructive"
                        onClick={handleCancelSubscription}
                        disabled={isProcessing}
                      >
                        Cancel Subscription
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      onClick={() => setActiveTab('plans')}
                    >
                      Change Plan
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <Card>
              <CardContent className="py-12 text-center">
                <Crown className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Active Subscription</h3>
                <p className="text-gray-600 mb-6">
                  Subscribe to a plan to unlock premium features and credits
                </p>
                <Button onClick={() => setActiveTab('plans')}>
                  View Plans
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="payment">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Payment Methods</h2>
                <p className="text-sm text-gray-600 mt-1">Manage your payment methods</p>
              </div>
              <Button onClick={handleAddPaymentMethod}>
                <Plus className="h-4 w-4 mr-2" />
                Add Payment Method
              </Button>
            </div>

            {paymentMethods.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <CreditCard className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No Payment Methods</h3>
                  <p className="text-gray-600 mb-6">
                    Add a payment method to subscribe to a plan
                  </p>
                  <Button onClick={handleAddPaymentMethod}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Payment Method
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4">
                {paymentMethods.map((method) => (
                  <Card key={method.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                            <CreditCard className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold text-gray-900">
                                {method.type === 'card'
                                  ? `${method.brand || 'Card'} •••• ${method.last4 || '****'}`
                                  : method.type === 'crypto'
                                    ? `Crypto Wallet`
                                    : 'Bank Account'}
                              </h3>
                              {method.isDefault && (
                                <Badge variant="outline" className="bg-green-100 text-green-800">
                                  Default
                                </Badge>
                              )}
                            </div>
                            {method.type === 'card' && method.expiryMonth && method.expiryYear && (
                              <p className="text-sm text-gray-600 mt-1">
                                Expires {method.expiryMonth}/{method.expiryYear}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          {!method.isDefault && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleSetDefaultPaymentMethod(method.id)}
                            >
                              Set as Default
                            </Button>
                          )}
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDeletePaymentMethod(method.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

