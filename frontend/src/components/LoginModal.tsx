'use client';

import { useState } from 'react';
import { useAuth } from '@/app/contexts/use-auth';

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginModal() {
  const { isLoginModalOpen, closeLoginModal, login, isLoading, openRegistrationModal } = useAuth();
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await login(formData);
      // Reset form
      setFormData({
        email: '',
        password: '',
      });
    } catch (error) {
      // Error is already handled in the auth context
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSwitchToRegister = () => {
    closeLoginModal();
    openRegistrationModal();
  };

  if (!isLoginModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-6 w-full max-w-md shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Login</h2>
          <button onClick={closeLoginModal} className="text-gray-400 hover:text-gray-200 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input
              type="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
            <input
              type="password"
              value={formData.password}
              placeholder="Enter your password"
              onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={isSubmitting || isLoading}
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
            >
              {isSubmitting || isLoading ? 'Logging in...' : 'Login'}
            </button>
          </div>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-400">
              Don&apos;t have an account?{' '}
              <button
                type="button"
                onClick={handleSwitchToRegister}
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                Sign up
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

