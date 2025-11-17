'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/contexts/use-auth';

export default function RegistrationModal() {
  const router = useRouter();
  const { isRegistrationModalOpen, closeRegistrationModal } = useAuth();

  // Redirect to signup page when modal is opened
  useEffect(() => {
    if (isRegistrationModalOpen) {
      router.push('/signup');
      closeRegistrationModal();
    }
  }, [isRegistrationModalOpen, router, closeRegistrationModal]);

  // Return null since we're redirecting
  return null;
}
