'use client';

import { useEffect } from 'react';
import { toast } from 'sonner';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/app/contexts/use-auth';
import DonorBookingForm from '@/components/booking/donor-booking';

export default function BookingPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isAuthenticated, isLoading } = useAuth();
  const hospitalId = searchParams.get('hospitalId');

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      toast.error('Authentication Required', {
        description: 'Please log in to book an appointment',
      });
      router.push('/');
      return;
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <main className='bg-white'>
        <div className="container mx-auto p-4">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="text-center">
              <p>Loading...</p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <main className='bg-white min-h-screen'>
      <div className="container mx-auto p-4 py-8">
        <DonorBookingForm
          hospitalId={hospitalId || undefined}
        />
      </div>
    </main>
  );
}
