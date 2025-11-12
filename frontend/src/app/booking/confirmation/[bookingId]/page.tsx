'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { toast } from 'sonner';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, Clock, MapPin, FileText, AlertCircle, CheckCircle2, Building2, User, Mail, Phone } from 'lucide-react';
import { bookingService, Booking } from '@/lib/services/booking';
import { useAuth } from '@/app/contexts/use-auth';
import Image from 'next/image';

export default function BookingConfirmationPage() {
  const router = useRouter();
  const params = useParams();
  const bookingId = params?.bookingId as string;
  const { isAuthenticated, isLoading: authLoading } = useAuth();
  const [booking, setBooking] = useState<Booking | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      toast.error('Authentication Required', {
        description: 'Please log in to view booking details',
      });
      router.push('/');
      return;
    }

    if (bookingId && isAuthenticated) {
      fetchBookingDetails();
    }
  }, [bookingId, isAuthenticated, authLoading, router]);

  const fetchBookingDetails = async () => {
    if (!bookingId) return;

    setIsLoading(true);
    setError(null);

    try {
      const bookingData = await bookingService.getBookingById(bookingId);
      setBooking(bookingData);
    } catch (err: any) {
      console.error('Error fetching booking details:', err);
      setError(err.message || 'Failed to fetch booking details');
      toast.error('Error', {
        description: err.message || 'Failed to load booking details',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'CONFIRMED':
        return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'PENDING':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      case 'CANCELLED':
        return 'bg-red-500/20 text-red-400 border-red-500/50';
      case 'COMPLETED':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  const handleCancelBooking = async () => {
    if (!bookingId) return;

    if (!confirm('Are you sure you want to cancel this booking?')) {
      return;
    }

    try {
      setIsLoading(true);
      await bookingService.cancelBooking(bookingId);
      toast.success('Booking Cancelled', {
        description: 'Your booking has been cancelled successfully',
      });
      // Refresh booking data
      await fetchBookingDetails();
    } catch (err: any) {
      console.error('Error cancelling booking:', err);
      toast.error('Error', {
        description: err.message || 'Failed to cancel booking',
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading || authLoading) {
    return (
      <div className="container mx-auto p-4 max-w-3xl min-h-screen flex items-center justify-center">
        <div className="space-y-3 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
          <p>Loading booking details...</p>
        </div>
      </div>
    );
  }

  if (error || !booking) {
    return (
      <div className="container mx-auto p-4 max-w-3xl min-h-screen flex items-center justify-center">
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {error || 'Booking details not found'}
          </AlertDescription>
        </Alert>
        <div className="flex justify-center w-full">
          <Button onClick={() => router.push('/dashboard')}>
            Return to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  const appointmentDate = new Date(booking.appointmentDate);
  const endDate = new Date(appointmentDate.getTime() + booking.duration * 60000);

  return (
    <div className="container mx-auto p-4 max-w-3xl min-h-screen py-8">
      <div className="text-center mb-8">
        <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-green-100 mb-4">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Booking {booking.status === 'CONFIRMED' ? 'Confirmed' : booking.status === 'PENDING' ? 'Pending' : booking.status}</h1>
        <p className="text-gray-500">
          Your appointment has been {booking.status === 'CONFIRMED' ? 'confirmed' : booking.status === 'PENDING' ? 'scheduled' : booking.status.toLowerCase()}
        </p>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>Appointment Details</CardTitle>
              <CardDescription>
                Booking ID: {booking.id}
              </CardDescription>
            </div>
            <Badge className={getStatusColor(booking.status)}>
              {booking.status}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Hospital Information */}
          {booking.hospital && (
            <>
              <div className="flex items-start gap-4">
                {booking.hospital.imageUrl ? (
                  <Image
                    src={booking.hospital.imageUrl}
                    alt={booking.hospital.name}
                    width={64}
                    height={64}
                    className="rounded-lg object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-lg bg-blue-600/20 flex items-center justify-center border border-blue-500/50">
                    <Building2 className="h-8 w-8 text-blue-400" />
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="font-medium text-lg">{booking.hospital.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                    <MapPin className="h-4 w-4" />
                    <p>{booking.hospital.location}</p>
                  </div>
                  {booking.hospital.specialties && booking.hospital.specialties.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {booking.hospital.specialties.map((specialty, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <Separator />
            </>
          )}

          {/* User Information (for hospital owners) */}
          {booking.user && (
            <>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center border border-purple-500/50">
                  <User className="h-6 w-6 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{booking.user.fullname}</h3>
                  <div className="flex flex-col gap-1 text-sm text-gray-500 mt-1">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <p>{booking.user.email}</p>
                    </div>
                    {booking.user.phone && (
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        <p>{booking.user.phone}</p>
                      </div>
                    )}
                    {booking.user.address && (
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <p>{booking.user.address}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <Separator />
            </>
          )}

          {/* Appointment Details */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <div className="flex items-center text-gray-500 text-sm">
                <CalendarIcon className="h-4 w-4 mr-2" />
                Date
              </div>
              <p className="font-medium">{format(appointmentDate, 'EEEE, MMMM d, yyyy')}</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center text-gray-500 text-sm">
                <Clock className="h-4 w-4 mr-2" />
                Time
              </div>
              <p className="font-medium">
                {format(appointmentDate, 'h:mm a')} - {format(endDate, 'h:mm a')}
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center text-gray-500 text-sm">
                <FileText className="h-4 w-4 mr-2" />
                Purpose
              </div>
              <p className="font-medium">{booking.purpose}</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center text-gray-500 text-sm">
                <Clock className="h-4 w-4 mr-2" />
                Duration
              </div>
              <p className="font-medium">{booking.duration} minutes</p>
            </div>
          </div>

          {booking.additionalNotes && (
            <>
              <Separator />
              <div className="space-y-1">
                <h3 className="text-sm font-medium">Additional Notes</h3>
                <p className="text-sm text-gray-600">{booking.additionalNotes}</p>
              </div>
            </>
          )}

          {/* Action Buttons */}
          <Separator />
          <div className="flex flex-col gap-3">
            {booking.status === 'PENDING' && (
              <Button
                variant="outline"
                onClick={handleCancelBooking}
                disabled={isLoading}
                className="w-full"
              >
                Cancel Booking
              </Button>
            )}
            {booking.status === 'CONFIRMED' && (
              <Button
                variant="destructive"
                onClick={handleCancelBooking}
                disabled={isLoading}
                className="w-full"
              >
                Cancel Booking
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Preparation Instructions */}
      {booking.status !== 'CANCELLED' && booking.status !== 'COMPLETED' && (
        <Alert className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Preparation Instructions</AlertTitle>
          <AlertDescription>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
              <li>Please arrive 15 minutes early to complete paperwork</li>
              <li>Bring a valid photo ID</li>
              <li>Follow any specific preparation instructions provided by the hospital</li>
              <li>Contact the hospital if you need to reschedule or have questions</li>
            </ul>
          </AlertDescription>
        </Alert>
      )}

      {/* Navigation */}
      <div className="flex justify-between gap-4">
        <Button variant="outline" onClick={() => router.push('/dashboard')}>
          Return to Dashboard
        </Button>
        <Button onClick={() => router.push('/dashboard/booking')}>
          View All Bookings
        </Button>
      </div>
    </div>
  );
}
