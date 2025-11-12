'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarIcon, Clock, MapPin, Building2, User, Phone, Mail, Trash2, X, CheckCircle2, AlertCircle } from 'lucide-react';
import { bookingService, Booking } from '@/lib/services/booking';
import { useAuth } from '@/app/contexts/use-auth';
import Image from 'next/image';
import Link from 'next/link';

export default function BookingDashboardPage() {
  const router = useRouter();
  const { isAuthenticated, isLoading: authLoading, user } = useAuth();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [hospitalBookings, setHospitalBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'my-bookings' | 'hospital-bookings'>('my-bookings');
  const [cancellingId, setCancellingId] = useState<string | null>(null);

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      toast.error('Authentication Required', {
        description: 'Please log in to view bookings',
      });
      router.push('/');
      return;
    }

    if (isAuthenticated) {
      fetchBookings();
    }
  }, [isAuthenticated, authLoading, router]);

  const fetchBookings = async () => {
    setIsLoading(true);
    try {
      // Fetch user bookings
      const myBookings = await bookingService.getMyBookings();
      setBookings(myBookings);

      // Fetch hospital bookings if user is a medical facility
      if (user?.userType === 'MEDICAL_FACILITY') {
        try {
          const hospitalBookingsData = await bookingService.getMyHospitalBookings();
          setHospitalBookings(hospitalBookingsData);
        } catch (error) {
          // If user doesn't own hospitals, this will fail - that's okay
          console.log('No hospital bookings found');
        }
      }
    } catch (error: any) {
      console.error('Error fetching bookings:', error);
      toast.error('Error', {
        description: error.message || 'Failed to load bookings',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelBooking = async (bookingId: string) => {
    if (!confirm('Are you sure you want to cancel this booking?')) {
      return;
    }

    setCancellingId(bookingId);
    try {
      await bookingService.cancelBooking(bookingId);
      toast.success('Booking Cancelled', {
        description: 'Your booking has been cancelled successfully',
      });
      // Refresh bookings
      await fetchBookings();
    } catch (error: any) {
      console.error('Error cancelling booking:', error);
      toast.error('Error', {
        description: error.message || 'Failed to cancel booking',
      });
    } finally {
      setCancellingId(null);
    }
  };

  const handleDeleteBooking = async (bookingId: string) => {
    if (!confirm('Are you sure you want to delete this booking? This action cannot be undone.')) {
      return;
    }

    setCancellingId(bookingId);
    try {
      await bookingService.deleteBooking(bookingId);
      toast.success('Booking Deleted', {
        description: 'Your booking has been deleted successfully',
      });
      // Refresh bookings
      await fetchBookings();
    } catch (error: any) {
      console.error('Error deleting booking:', error);
      toast.error('Error', {
        description: error.message || 'Failed to delete booking',
      });
    } finally {
      setCancellingId(null);
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'CONFIRMED':
        return <CheckCircle2 className="h-4 w-4" />;
      case 'PENDING':
        return <AlertCircle className="h-4 w-4" />;
      case 'CANCELLED':
        return <X className="h-4 w-4" />;
      case 'COMPLETED':
        return <CheckCircle2 className="h-4 w-4" />;
      default:
        return null;
    }
  };

  if (authLoading || isLoading) {
    return (
      <div className="container mx-auto p-4 max-w-7xl min-h-screen flex items-center justify-center">
        <div className="space-y-3 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
          <p>Loading bookings...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const displayBookings = activeTab === 'my-bookings' ? bookings : hospitalBookings;
  const isHospitalView = activeTab === 'hospital-bookings';

  return (
    <div className="container mx-auto p-4 max-w-7xl min-h-screen py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">My Bookings</h1>
          <p className="text-gray-500">
            Manage your appointments and bookings
          </p>
        </div>
        <Button onClick={() => router.push('/booking')}>
          Book New Appointment
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'my-bookings' | 'hospital-bookings')}>
        <TabsList className="mb-6">
          <TabsTrigger value="my-bookings">My Bookings</TabsTrigger>
          {user?.userType === 'MEDICAL_FACILITY' && (
            <TabsTrigger value="hospital-bookings">Hospital Bookings</TabsTrigger>
          )}
        </TabsList>

        <TabsContent value={activeTab}>
          {displayBookings.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <CalendarIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">No bookings found</h3>
                <p className="text-gray-500 mb-4">
                  {isHospitalView
                    ? 'You don\'t have any bookings for your hospitals yet.'
                    : 'You don\'t have any bookings yet.'}
                </p>
                {!isHospitalView && (
                  <Button onClick={() => router.push('/booking')}>
                    Book an Appointment
                  </Button>
                )}
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {displayBookings.map((booking) => {
                const appointmentDate = new Date(booking.appointmentDate);
                const endDate = new Date(appointmentDate.getTime() + booking.duration * 60000);

                return (
                  <Card key={booking.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <CardTitle className="text-lg">
                              {booking.purpose}
                            </CardTitle>
                            <Badge className={getStatusColor(booking.status)}>
                              <span className="flex items-center gap-1">
                                {getStatusIcon(booking.status)}
                                {booking.status}
                              </span>
                            </Badge>
                          </div>
                          <CardDescription>
                            Booking ID: {booking.id}
                          </CardDescription>
                        </div>
                        <div className="flex gap-2">
                          {(booking.status === 'PENDING' || booking.status === 'CONFIRMED') && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleCancelBooking(booking.id)}
                              disabled={cancellingId === booking.id}
                            >
                              <X className="h-4 w-4 mr-2" />
                              Cancel
                            </Button>
                          )}
                          {booking.status === 'CANCELLED' && (
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => handleDeleteBooking(booking.id)}
                              disabled={cancellingId === booking.id}
                            >
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </Button>
                          )}
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => router.push(`/booking/confirmation/${booking.id}`)}
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Hospital Information */}
                        {booking.hospital && (
                          <div className="space-y-3">
                            <h3 className="font-medium flex items-center gap-2">
                              <Building2 className="h-4 w-4" />
                              Hospital
                            </h3>
                            <div className="flex items-start gap-3">
                              {booking.hospital.imageUrl ? (
                                <Image
                                  src={booking.hospital.imageUrl}
                                  alt={booking.hospital.name}
                                  width={48}
                                  height={48}
                                  className="rounded-lg object-cover"
                                />
                              ) : (
                                <div className="w-12 h-12 rounded-lg bg-blue-600/20 flex items-center justify-center border border-blue-500/50">
                                  <Building2 className="h-6 w-6 text-blue-400" />
                                </div>
                              )}
                              <div>
                                <p className="font-medium">{booking.hospital.name}</p>
                                <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                                  <MapPin className="h-3 w-3" />
                                  <p>{booking.hospital.location}</p>
                                </div>
                                {booking.hospital.rating && (
                                  <p className="text-sm text-gray-500 mt-1">
                                    Rating: {booking.hospital.rating}/5
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* User Information (for hospital owners) */}
                        {booking.user && (
                          <div className="space-y-3">
                            <h3 className="font-medium flex items-center gap-2">
                              <User className="h-4 w-4" />
                              Patient
                            </h3>
                            <div>
                              <p className="font-medium">{booking.user.fullname}</p>
                              <div className="flex flex-col gap-1 text-sm text-gray-500 mt-1">
                                <div className="flex items-center gap-2">
                                  <Mail className="h-3 w-3" />
                                  <p>{booking.user.email}</p>
                                </div>
                                {booking.user.phone && (
                                  <div className="flex items-center gap-2">
                                    <Phone className="h-3 w-3" />
                                    <p>{booking.user.phone}</p>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Appointment Details */}
                        <div className="space-y-3">
                          <h3 className="font-medium flex items-center gap-2">
                            <CalendarIcon className="h-4 w-4" />
                            Appointment
                          </h3>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                              <CalendarIcon className="h-4 w-4 text-gray-400" />
                              <p>{format(appointmentDate, 'EEEE, MMMM d, yyyy')}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-gray-400" />
                              <p>
                                {format(appointmentDate, 'h:mm a')} - {format(endDate, 'h:mm a')}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-gray-400" />
                              <p>Duration: {booking.duration} minutes</p>
                            </div>
                          </div>
                        </div>

                        {/* Additional Information */}
                        {booking.additionalNotes && (
                          <div className="space-y-3">
                            <h3 className="font-medium">Additional Notes</h3>
                            <p className="text-sm text-gray-600">{booking.additionalNotes}</p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
