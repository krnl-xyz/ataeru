'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/app/contexts/use-auth';
import { authService } from '@/lib/services/auth';
import { toast } from 'sonner';

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginModal() {
  const { isLoginModalOpen, closeLoginModal, login, isLoading, openRegistrationModal, refreshUser } = useAuth();
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [emailConfirmed, setEmailConfirmed] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email) {
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Invalid email', {
        description: 'Please enter a valid email address',
      });
      return;
    }

    // Show password field after email is confirmed
    setEmailConfirmed(true);
    setShowPassword(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!emailConfirmed) {
      // If email not confirmed yet, handle email submission
      handleEmailSubmit(e);
      return;
    }

    if (!formData.password) {
      toast.error('Password required', {
        description: 'Please enter your password',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await login(formData);
      // Reset form
      setFormData({
        email: '',
        password: '',
      });
      setShowPassword(false);
      setEmailConfirmed(false);
    } catch (error) {
      // Error is already handled in the auth context
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackToEmail = () => {
    setShowPassword(false);
    setEmailConfirmed(false);
    setFormData(prev => ({ ...prev, password: '' }));
  };

  // Reset state when modal closes
  const handleClose = () => {
    setShowPassword(false);
    setEmailConfirmed(false);
    setFormData({
      email: '',
      password: '',
    });
    closeLoginModal();
  };

  const handleGoogleLogin = async () => {
    try {
      setIsSubmitting(true);
      await authService.loginWithGoogle();
      // Refresh user data after successful login
      await refreshUser();
      closeLoginModal();
      toast.success('Successfully signed in with Google');
    } catch (error: any) {
      console.error('Google login error:', error);
      toast.error('Google login failed', {
        description: error.message || 'Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAppleLogin = async () => {
    try {
      setIsSubmitting(true);
      await authService.loginWithApple();
    } catch (error: any) {
      console.error('Apple login error:', error);
      toast.error('Apple login failed', {
        description: error.message || 'Please try again later.',
      });
      setIsSubmitting(false);
    }
  };

  if (!isLoginModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-6 w-full max-w-md shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Login</h2>
          <button onClick={handleClose} className="text-gray-400 hover:text-gray-200 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* SSO Buttons */}
          <div className="space-y-3">
            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={isSubmitting || isLoading}
              className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-700 rounded-lg text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span>Continue with Google</span>
            </button>

            <button
              type="button"
              onClick={handleAppleLogin}
              disabled={isSubmitting || isLoading}
              className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-700 rounded-lg text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              <span>Continue with Apple</span>
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#1a1a1a] text-gray-400">Or continue with email</span>
            </div>
          </div>

          <div>
            <input
              type="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
              disabled={emailConfirmed}
            />
          </div>

          {showPassword && (
            <div className="space-y-2">
              {emailConfirmed && (
                <button
                  type="button"
                  onClick={handleBackToEmail}
                  className="text-[12px] text-blue-400 hover:text-blue-300 flex items-center gap-1"
                >
                  Change email
                </button>
              )}
              <div>
                <input
                  type="password"
                  value={formData.password}
                  placeholder="Enter your password"
                  onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                  autoFocus
                />
              </div>
            </div>
          )}

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={isSubmitting || isLoading || !formData.email}
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
            >
              {isSubmitting || isLoading
                ? (emailConfirmed ? 'Logging in...' : 'Checking...')
                : emailConfirmed
                  ? 'Login'
                  : 'Signin with email'
              }
            </button>
          </div>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-400">
              Don&apos;t have an account?{' '}
              <Link
                href="/signup"
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
