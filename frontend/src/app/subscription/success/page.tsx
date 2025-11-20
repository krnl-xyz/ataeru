'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { CheckCircle, Loader2, ArrowRight } from 'lucide-react';
import { subscriptionService } from '@/lib/services/subscription';
import { useAuth } from '@/app/contexts/use-auth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function SubscriptionSuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, isAuthenticated } = useAuth();
  const [isVerifying, setIsVerifying] = useState(true);
  const [isVerified, setIsVerified] = useState(false);
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
      return;
    }

    if (sessionId) {
      verifySubscription();
    } else {
      // If no session_id, still try to check subscription status
      checkSubscription();
    }
  }, [sessionId, isAuthenticated, router]);

  const verifySubscription = async () => {
    setIsVerifying(true);
    try {
      // Wait a moment for Stripe webhook to process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const response = await subscriptionService.getMySubscription();
      
      if (response?.subscription) {
        const { subscription } = response;
        const activeStatuses = ['ACTIVE', 'TRIALING'];
        if (activeStatuses.includes(subscription.status)) {
          setIsVerified(true);
        }
      }
    } catch (error) {
      console.error('Error verifying subscription:', error);
      // Still show success page, subscription might be processing
      setIsVerified(true);
    } finally {
      setIsVerifying(false);
    }
  };

  const checkSubscription = async () => {
    setIsVerifying(true);
    try {
      const response = await subscriptionService.getMySubscription();
      if (response?.subscription) {
        setIsVerified(true);
      }
    } catch (error) {
      console.error('Error checking subscription:', error);
    } finally {
      setIsVerifying(false);
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          {isVerifying ? (
            <>
              <Loader2 className="h-16 w-16 animate-spin mx-auto text-blue-600 mb-4" />
              <CardTitle className="text-2xl">Verifying Subscription...</CardTitle>
              <CardDescription>
                Please wait while we confirm your subscription
              </CardDescription>
            </>
          ) : (
            <>
              <CheckCircle className="h-16 w-16 mx-auto text-green-500 mb-4" />
              <CardTitle className="text-2xl">Subscription Successful!</CardTitle>
              <CardDescription>
                Your subscription has been activated successfully
              </CardDescription>
            </>
          )}
        </CardHeader>
        <CardContent className="space-y-4">
          {isVerified && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm text-green-800 text-center">
                You now have full access to all premium features. Your subscription is active and ready to use.
              </p>
            </div>
          )}

          <div className="flex flex-col gap-3">
            <Button
              onClick={() => router.push('/dashboard')}
              className="w-full"
              size="lg"
            >
              Go to Dashboard
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              onClick={() => router.push('/dashboard/settings')}
              variant="outline"
              className="w-full"
            >
              Manage Subscription
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

