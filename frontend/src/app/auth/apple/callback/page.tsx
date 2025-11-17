'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { authService } from '@/lib/services/auth';
import { useAuth } from '@/app/contexts/use-auth';
import { toast } from 'sonner';

export default function AppleCallbackPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { refreshUser } = useAuth();
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    const handleCallback = async () => {
      try {
        const code = searchParams.get('code');
        const error = searchParams.get('error');
        const state = searchParams.get('state');
        const id_token = searchParams.get('id_token');

        if (error) {
          toast.error('Apple authentication failed', {
            description: error || 'An error occurred during authentication',
          });
          router.push('/');
          return;
        }

        // Apple Sign In can return either code or id_token
        if (!code && !id_token) {
          toast.error('Invalid authentication response', {
            description: 'No authorization code or token received',
          });
          router.push('/');
          return;
        }

        // Exchange code for token (or use id_token directly if available)
        const authCode = code || id_token || '';
        const result = await authService.handleOAuthCallback('apple', authCode, state || undefined);
        
        // Refresh user data
        await refreshUser();
        
        toast.success('Successfully signed in with Apple');
        router.push('/');
      } catch (error: any) {
        console.error('Apple callback error:', error);
        toast.error('Authentication failed', {
          description: error.message || 'Failed to complete Apple authentication',
        });
        router.push('/');
      } finally {
        setIsProcessing(false);
      }
    };

    handleCallback();
  }, [searchParams, router, refreshUser]);

  if (isProcessing) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Completing Apple authentication...</p>
        </div>
      </div>
    );
  }

  return null;
}

