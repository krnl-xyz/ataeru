'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/contexts/use-auth';
import { toast } from 'sonner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreditCard, Loader2 } from 'lucide-react';

interface SubscriptionGuardProps {
  children: React.ReactNode;
  redirectTo?: string;
  showMessage?: boolean;
}

/**
 * Component that protects routes requiring an active subscription
 * Redirects to subscription page if user doesn't have an active subscription
 */
export default function SubscriptionGuard({
  children,
  redirectTo = '/subscription',
  showMessage = true,
}: SubscriptionGuardProps) {
  const router = useRouter();
  const { isAuthenticated, hasActiveSubscription, isLoading, isLoadingSubscription } = useAuth();

  useEffect(() => {
    // Wait for auth and subscription to load
    if (isLoading || isLoadingSubscription) {
      return;
    }

    // If not authenticated, don't check subscription (auth guard should handle this)
    if (!isAuthenticated) {
      return;
    }

    // If authenticated but no active subscription, redirect
    if (!hasActiveSubscription) {
      if (showMessage) {
        toast.error('Subscription Required', {
          description: 'Please subscribe to access this feature.',
        });
      }
      router.push(redirectTo);
    }
  }, [isAuthenticated, hasActiveSubscription, isLoading, isLoadingSubscription, router, redirectTo, showMessage]);

  // Show loading state
  if (isLoading || isLoadingSubscription) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto text-blue-600" />
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // If not authenticated, don't render children (auth guard should handle this)
  if (!isAuthenticated) {
    return null;
  }

  // If no active subscription, show message
  if (!hasActiveSubscription) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <Card className="max-w-md w-full">
          <CardHeader className="text-center">
            <CreditCard className="h-16 w-16 mx-auto text-blue-600 mb-4" />
            <CardTitle className="text-2xl">Subscription Required</CardTitle>
            <CardDescription>
              You need an active subscription to access this feature
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800 text-center">
                Subscribe to unlock all premium features and access to our services.
              </p>
            </div>
            <Button
              onClick={() => router.push(redirectTo)}
              className="w-full"
              size="lg"
            >
              <CreditCard className="mr-2 h-4 w-4" />
              View Subscription Plans
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // User has active subscription, render children
  return <>{children}</>;
}

