'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { Check, Loader2, CreditCard, Calendar, Shield, Zap, Crown } from 'lucide-react';
import { subscriptionService, SubscriptionPlan, SubscriptionPlanId } from '@/lib/services/subscription';
import { useAuth } from '@/app/contexts/use-auth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function SubscriptionPage() {
  const router = useRouter();
  const { user, isAuthenticated, isLoading: authLoading } = useAuth();
  const [plans, setPlans] = useState<SubscriptionPlan[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlanId | null>(null);

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      toast.error('Authentication Required', {
        description: 'Please log in to view subscription plans',
      });
      router.push('/');
      return;
    }

    if (isAuthenticated) {
      loadPlans();
    }
  }, [isAuthenticated, authLoading, router, user]);

  const loadPlans = async () => {
    setIsLoading(true);
    try {
      const response = await subscriptionService.getPlans();
      // Filter plans based on user type
      const userPlans = response.plans.filter(
        plan => plan.userType === user?.userType
      );
      setPlans(userPlans);
    } catch (error: any) {
      console.error('Error loading plans:', error);
      toast.error('Failed to load subscription plans', {
        description: error.message || 'Please try again later',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubscribe = async (planId: SubscriptionPlanId) => {
    if (!isAuthenticated) {
      toast.error('Please log in to subscribe');
      router.push('/');
      return;
    }

    setIsProcessing(true);
    setSelectedPlan(planId);

    try {
      const { url } = await subscriptionService.createCheckout(planId);
      // Redirect to Stripe checkout
      window.location.href = url;
    } catch (error: any) {
      console.error('Error creating checkout:', error);
      toast.error('Failed to start checkout', {
        description: error.message || 'Please try again later',
      });
      setSelectedPlan(null);
    } finally {
      setIsProcessing(false);
    }
  };

  const getPlanDisplayName = (planId: SubscriptionPlanId): string => {
    const isMonthly = planId.includes('MONTHLY');
    const isUser = planId.includes('USER');
    const period = isMonthly ? 'Monthly' : 'Yearly';
    const type = isUser ? 'User' : 'Hospital';
    return `${type} - ${period}`;
  };

  const getPlanFeatures = (planId: SubscriptionPlanId): string[] => {
    const isMonthly = planId.includes('MONTHLY');
    const isUser = planId.includes('USER');
    
    if (isUser) {
      return [
        'Unlimited AI health consultations',
        'Access to all health services',
        'Priority booking',
        '24/7 customer support',
        'Secure blockchain storage',
        isMonthly ? 'Cancel anytime' : 'Save 20% with yearly billing',
      ];
    } else {
      return [
        'Hospital management dashboard',
        'Unlimited patient bookings',
        'Advanced analytics',
        'Priority support',
        'Blockchain-verified records',
        'Multi-user access',
        isMonthly ? 'Cancel anytime' : 'Save 20% with yearly billing',
      ];
    }
  };

  if (authLoading || isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto text-blue-600" />
          <p className="mt-4 text-gray-600">Loading subscription plans...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Subscription Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the perfect plan for your needs. All plans include AI-powered health intelligence
            and blockchain-secured data storage.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => {
            const isYearly = plan.id.includes('YEARLY');
            const isPopular = isYearly; // Yearly plans are typically better value
            const features = getPlanFeatures(plan.id);

            return (
              <Card
                key={plan.id}
                className={`relative ${isPopular ? 'border-blue-500 shadow-lg scale-105' : ''}`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">
                      Best Value
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-2xl">
                      {getPlanDisplayName(plan.id)}
                    </CardTitle>
                    {isYearly && (
                      <Crown className="h-6 w-6 text-yellow-500" />
                    )}
                  </div>
                  <CardDescription>
                    {isYearly
                      ? 'Billed annually - Save 20%'
                      : 'Billed monthly - Cancel anytime'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Features */}
                    <ul className="space-y-3">
                      {features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Subscribe Button */}
                    <Button
                      onClick={() => handleSubscribe(plan.id)}
                      disabled={isProcessing}
                      className={`w-full ${
                        isPopular
                          ? 'bg-blue-600 hover:bg-blue-700'
                          : 'bg-gray-900 hover:bg-gray-800'
                      }`}
                      size="lg"
                    >
                      {isProcessing && selectedPlan === plan.id ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <CreditCard className="mr-2 h-4 w-4" />
                          Subscribe Now
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Why Choose Our Subscription?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start">
                <Shield className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Secure & Private</h4>
                  <p className="text-sm text-gray-600">
                    Your health data is secured with blockchain technology
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Zap className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">AI-Powered</h4>
                  <p className="text-sm text-gray-600">
                    Get intelligent health insights powered by advanced AI
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Calendar className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Flexible Billing</h4>
                  <p className="text-sm text-gray-600">
                    Cancel anytime, no long-term commitments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

