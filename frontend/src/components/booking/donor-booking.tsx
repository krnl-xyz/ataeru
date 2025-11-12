"use client"

import React, { useState, useEffect, useCallback } from 'react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { format } from 'date-fns';
import { bookingService } from '@/lib/services/booking';
import { hospitalService, RegisteredHospital } from '@/lib/services/hospital';
import { cn, toPascalCase } from '@/lib/utils';
import { useAuth } from '@/app/contexts/use-auth';

interface TimeSlot {
  start: Date;
  end: Date;
  available: boolean;
}

interface DonorBookingFormProps {
  donorId?: string;
  hospitalId?: string;
  isAuthenticated?: boolean;
}

const DonorBookingForm: React.FC<DonorBookingFormProps> = ({
  donorId,
  hospitalId: initialHospitalId,
  isAuthenticated,
}) => {
  const router = useRouter();
  const { isAuthenticated: userAuthenticated, user } = useAuth();
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [selectedHospitalId, setSelectedHospitalId] = useState<string>(initialHospitalId || '');
  const [hospitals, setHospitals] = useState<RegisteredHospital[]>([]);
  const [selectedHospital, setSelectedHospital] = useState<RegisteredHospital | null>(null);
  const [purpose, setPurpose] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingHospitals, setIsLoadingHospitals] = useState(false);
  const [aiRecommendation, setAiRecommendation] = useState<string | null>(null);

  // Fetch hospitals on mount
  useEffect(() => {
    const loadHospitals = async () => {
      setIsLoadingHospitals(true);
      try {
        const hospitalList = await hospitalService.searchHospitals({});
        setHospitals(hospitalList);

        // If initial hospitalId is provided, set it as selected
        if (initialHospitalId) {
          const hospital = hospitalList.find(h => h.id === initialHospitalId);
          if (hospital) {
            setSelectedHospital(hospital);
            setSelectedHospitalId(hospital.id);
          }
        } else if (hospitalList.length > 0) {
          // Auto-select first hospital if none provided
          setSelectedHospital(hospitalList[0]);
          setSelectedHospitalId(hospitalList[0].id);
        }
      } catch (error) {
        console.error('Error loading hospitals:', error);
        toast.error('Failed to load hospitals', {
          description: 'Please try again later.',
        });
      } finally {
        setIsLoadingHospitals(false);
      }
    };

    if (userAuthenticated) {
      loadHospitals();
    }
  }, [userAuthenticated, initialHospitalId]);

  const fetchAvailableSlots = useCallback(async (date: Date) => {
    setIsLoading(true);
    try {
      // Generate default time slots (9 AM to 5 PM, hourly)
      const defaultSlots = generateDefaultTimeSlots(date);
      setAvailableSlots(defaultSlots);

      if (defaultSlots.length > 0) {
        // Show recommendation for first available slot
        const firstAvailableSlot = defaultSlots.find(slot => slot.available);
        if (firstAvailableSlot) {
          setAiRecommendation(
            `Recommended time slot: ${format(firstAvailableSlot.start, 'h:mm a')} based on availability.`
          );
        }
      }
    } catch (error) {
      console.error('Error generating time slots:', error);
      // Generate default slots as fallback
      const defaultSlots = generateDefaultTimeSlots(date);
      setAvailableSlots(defaultSlots);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Helper function to generate default time slots
  const generateDefaultTimeSlots = (date: Date): TimeSlot[] => {
    const slots: TimeSlot[] = [];
    const startHour = 9; // 9 AM
    const endHour = 17; // 5 PM

    for (let hour = startHour; hour < endHour; hour++) {
      const slotStart = new Date(date);
      slotStart.setHours(hour, 0, 0, 0);

      const slotEnd = new Date(date);
      slotEnd.setHours(hour + 1, 0, 0, 0);

      slots.push({
        start: slotStart,
        end: slotEnd,
        available: true
      });
    }

    return slots;
  };

  // Check authentication on mount
  useEffect(() => {
    if (!userAuthenticated) {
      toast.error('Authentication Required', {
        description: 'Please log in to book an appointment.',
      });
      router.push('/');
    }
  }, [userAuthenticated, router]);

  useEffect(() => {
    if (selectedDate) {
      fetchAvailableSlots(selectedDate);
    }
  }, [selectedDate, fetchAvailableSlots]);

  // Update selected hospital when hospitalId changes
  useEffect(() => {
    if (selectedHospitalId) {
      const hospital = hospitals.find(h => h.id === selectedHospitalId);
      if (hospital) {
        setSelectedHospital(hospital);
      }
    }
  }, [selectedHospitalId, hospitals]);

  const handleSlotSelect = (slot: TimeSlot) => {
    setSelectedSlot(slot);
  };

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setSelectedSlot(null);
  };

  // Format date to dd/mm/yyyy
  const formatDateForAPI = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Format time to HH:mm
  const formatTimeForAPI = (date: Date): string => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedHospitalId) {
      toast.error('Hospital Required', {
        description: 'Please select a hospital',
      });
      return;
    }

    if (!selectedSlot || !selectedDate) {
      toast.error('Selection Required', {
        description: 'Please select a date and time slot',
      });
      return;
    }

    if (!purpose) {
      toast.error('Purpose Required', {
        description: 'Please select a purpose for the appointment',
      });
      return;
    }

    if (!agreedToTerms) {
      toast.error('Terms Required', {
        description: 'Please agree to the terms and conditions',
      });
      return;
    }

    setIsLoading(true);
    try {
      // Calculate duration in minutes
      const duration = Math.round((selectedSlot.end.getTime() - selectedSlot.start.getTime()) / (1000 * 60));

      const bookingRequest = {
        hospitalId: selectedHospitalId,
        date: formatDateForAPI(selectedDate),
        time: formatTimeForAPI(selectedSlot.start),
        duration: duration || 30, // Default to 30 minutes if calculation fails
        purpose: purpose,
        additionalNotes: additionalNotes || undefined,
      };

      const result = await bookingService.createBooking(bookingRequest);

      toast.success('Booking Confirmed', {
        description: `Your appointment has been scheduled for ${format(selectedSlot.start, 'MMMM d, yyyy')} at ${format(selectedSlot.start, 'h:mm a')}`,
      });

      router.push(`/booking/confirmation/${result.booking.id}`);
    } catch (error: any) {
      console.error('Error booking appointment:', error);
      toast.error('Booking Failed', {
        description: error.message || 'Failed to book appointment. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const nextStep = () => {
    if (step === 1) {
      if (!selectedHospitalId) {
        toast.error('Hospital Required', {
          description: 'Please select a hospital',
        });
        return;
      }
      if (!selectedDate) {
        toast.error('Selection Required', {
          description: 'Please select a date',
        });
        return;
      }
    }

    if (step === 2 && !selectedSlot) {
      toast.error('Selection Required', {
        description: 'Please select a time slot',
      });
      return;
    }

    if (step === 3 && !purpose) {
      toast.error('Purpose Required', {
        description: 'Please select a purpose for the appointment',
      });
      return;
    }

    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  if (!userAuthenticated) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Authentication Required</CardTitle>
          <CardDescription>
            Please log in to book an appointment.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>You need to be authenticated to book an appointment.</p>
        </CardContent>
        <CardFooter>
          <Button onClick={() => router.push('/')} className="w-full">
            Go to Home
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Schedule Your Appointment</CardTitle>
        <CardDescription>
          Book an appointment at your convenience
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="space-y-8">
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="hospital" className="mb-2 block">Select Hospital</Label>
                  {isLoadingHospitals ? (
                    <div className="text-center py-4">Loading hospitals...</div>
                  ) : (
                    <Select
                      value={selectedHospitalId}
                      onValueChange={setSelectedHospitalId}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a hospital..." />
                      </SelectTrigger>
                      <SelectContent>
                        {hospitals.map((hospital) => (
                          <SelectItem key={hospital.id} value={hospital.id}>
                            {hospital.name} - {hospital.location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                  {selectedHospital && (
                    <div className="mt-2 text-sm text-gray-600">
                      <p>Location: {selectedHospital.location}</p>
                      {selectedHospital.specialties && selectedHospital.specialties.length > 0 && (
                        <p>Specialties: {selectedHospital.specialties.join(', ')}</p>
                      )}
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4">Select a Date</h3>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={handleDateSelect}
                    disabled={(date: Date) =>
                      date < new Date(new Date().setHours(0, 0, 0, 0))
                    }
                    className="mx-auto"
                    classNames={{
                      day_selected: "bg-blue-800 text-white hover:bg-blue-900 hover:text-white focus:bg-blue-800 focus:text-white",
                      day_today: "bg-gray-100 text-gray-900 font-bold",
                      day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-gray-100 rounded-md",
                      day_disabled: "text-gray-300 opacity-50 hover:bg-transparent",
                      day_range_middle: "aria-selected:bg-blue-50",
                      day_hidden: "invisible",
                      caption: "flex justify-center py-2 mb-4 relative items-center",
                      caption_label: "text-base font-medium",
                      nav: "space-x-1 flex items-center",
                      nav_button: "h-8 w-8 bg-blue-50 hover:bg-blue-100 p-0 rounded-md",
                      table: "w-full border-collapse space-y-1",
                      head_row: "flex justify-between mb-2",
                      head_cell: "text-gray-500 rounded-md w-9 font-medium text-xs",
                      row: "flex w-full justify-between mt-2",
                    }}
                  />
                  {aiRecommendation && (
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-md text-sm mt-4">
                      <span className="font-medium">AI Recommendation: </span>
                      {aiRecommendation}
                    </div>
                  )}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Select a Time Slot</h3>
                {isLoading ? (
                  <div className="text-center py-8">Loading available times...</div>
                ) : availableSlots.length === 0 ? (
                  <div className="text-center py-8">
                    <p>No available slots on this date.</p>
                    <Button variant="outline" onClick={() => setStep(1)} className="mt-4">
                      Select Another Date
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {availableSlots.map((slot, index) => (
                      <Button
                        key={index}
                        type="button"
                        variant={selectedSlot === slot ? "default" : "outline"}
                        onClick={() => handleSlotSelect(slot)}
                        className={cn("h-auto py-3 px-4 bg-blue-800 hover:bg-blue-900 hover:text-white text-white", selectedSlot === slot ? "bg-green-600 hover:bg-green-700" : "")}
                      >
                        <div className="text-center">
                          <div>{format(slot.start, 'h:mm a')}</div>
                          <div className="text-xs opacity-70">to {format(slot.end, 'h:mm a')}</div>
                        </div>
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium">Donation Details</h3>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="purpose" className='mb-4'>Purpose of Donation</Label>
                    <Select value={purpose} onValueChange={setPurpose} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select purpose" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fertility-treatment">Fertility Treatment</SelectItem>
                        <SelectItem value="research">Medical Research</SelectItem>
                        <SelectItem value="sperm-banking">Personal Sperm Banking</SelectItem>
                        <SelectItem value="open-donation">Donate for others</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      placeholder="Any special requirements or information we should know"
                      value={additionalNotes}
                      onChange={(e) => setAdditionalNotes(e.target.value)}
                      className="min-h-[100px] resize-none mt-4"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium">Review & Confirm</h3>

                <div className="space-y-4 border rounded-md p-4 bg-gray-50">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Date</p>
                      <p>{selectedDate ? format(selectedDate, 'MMMM d, yyyy') : '-'}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Time</p>
                      <p>{selectedSlot ? `${format(selectedSlot.start, 'h:mm a')} - ${format(selectedSlot.end, 'h:mm a')}` : '-'}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Purpose</p>
                      <p>{toPascalCase(purpose) || '-'}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Hospital</p>
                      <p>{selectedHospital?.name || '-'}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Location</p>
                      <p>{selectedHospital?.location || '-'}</p>
                    </div>
                  </div>

                  {additionalNotes && (
                    <div>
                      <p className="text-sm font-medium text-gray-500">Additional Notes</p>
                      <p className="text-sm">{additionalNotes}</p>
                    </div>
                  )}
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={agreedToTerms}
                    onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                    className='data-[state=checked]:border-purple-500 data-[state=checked]:bg-gray-300 data-[state=checked]:text-purple-800 scale-110'
                  />
                  <div className="grid gap-1.5 leading-none">
                    <Label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the terms and conditions
                    </Label>
                    <p className="text-sm text-gray-500">
                      By scheduling this appointment, you agree to our donation guidelines and privacy policy.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-between mt-8">
            {step > 1 && (
              <Button type="button" className='bg-white hover:bg-white' variant="outline" onClick={prevStep}>
                Back
              </Button>
            )}

            {step < 4 ? (
              <Button type="button" className='bg-blue-800 hover:bg-blue-900' onClick={nextStep} disabled={isLoading}>
                Next
              </Button>
            ) : (
              <Button type="submit" className='bg-blue-800 hover:bg-blue-600' disabled={isLoading || !agreedToTerms}>
                {isLoading ? 'Booking...' : 'Confirm Booking'}
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default DonorBookingForm;