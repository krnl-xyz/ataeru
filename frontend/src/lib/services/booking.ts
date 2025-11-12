// Booking service for managing appointment bookings

export interface CreateBookingRequest {
  hospitalId: string;
  date: string; // dd/mm/yyyy format
  time: string; // HH:mm 24-hour format
  duration?: number; // minutes, default: 30
  purpose: string;
  additionalNotes?: string;
}

export interface UpdateBookingRequest {
  date?: string; // dd/mm/yyyy format
  time?: string; // HH:mm 24-hour format
  duration?: number; // minutes
  purpose?: string;
  additionalNotes?: string;
  status?: 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED';
}

export interface Hospital {
  id: string;
  name: string;
  location: string;
  rating: number;
  specialties: string[];
  imageUrl: string;
  verified: boolean;
}

export interface User {
  id: string;
  fullname: string;
  email: string;
  phone: string;
  address?: string;
}

export interface Booking {
  id: string;
  hospitalId: string;
  userId: string;
  appointmentDate: string; // ISO 8601 format
  duration: number; // minutes
  purpose: string;
  additionalNotes?: string;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED';
  createdAt: string;
  updatedAt: string;
  hospital?: Hospital;
  user?: User;
}

export interface CreateBookingResponse {
  message: string;
  booking: Booking;
}

export interface UpdateBookingResponse {
  message: string;
  booking: Booking;
}

export interface CancelBookingResponse {
  message: string;
  booking: Booking;
}

export interface DeleteBookingResponse {
  message: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

// Get auth token from localStorage
const getAuthToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('authToken');
};

// Make authenticated API request
const apiRequest = async <T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> => {
  const token = getAuthToken();
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
      credentials: 'include',
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'An error occurred' }));
      throw new Error(error.message || `HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error: any) {
    if (error.message === 'Failed to fetch' || error.name === 'TypeError') {
      const origin = typeof window !== 'undefined' ? window.location.origin : 'unknown';
      throw new Error(
        `Cannot connect to server at ${API_BASE_URL}${endpoint}`
      );
    }
    throw error;
  }
};

export const bookingService = {
  /**
   * Create a new booking
   */
  async createBooking(data: CreateBookingRequest): Promise<CreateBookingResponse> {
    return apiRequest<CreateBookingResponse>('/api/bookings', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  /**
   * Get all bookings for the authenticated user
   */
  async getMyBookings(): Promise<Booking[]> {
    return apiRequest<Booking[]>('/api/bookings/me');
  },

  /**
   * Get all bookings for hospitals owned by the authenticated user
   */
  async getMyHospitalBookings(): Promise<Booking[]> {
    return apiRequest<Booking[]>('/api/bookings/my-hospitals');
  },

  /**
   * Get bookings for a specific hospital
   */
  async getHospitalBookings(hospitalId: string): Promise<Booking[]> {
    return apiRequest<Booking[]>(`/api/bookings/hospital/${hospitalId}`);
  },

  /**
   * Get a specific booking by ID
   */
  async getBookingById(bookingId: string): Promise<Booking> {
    return apiRequest<Booking>(`/api/bookings/${bookingId}`);
  },

  /**
   * Update an existing booking
   */
  async updateBooking(bookingId: string, data: UpdateBookingRequest): Promise<UpdateBookingResponse> {
    return apiRequest<UpdateBookingResponse>(`/api/bookings/${bookingId}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  /**
   * Cancel a booking (sets status to CANCELLED)
   */
  async cancelBooking(bookingId: string): Promise<CancelBookingResponse> {
    return apiRequest<CancelBookingResponse>(`/api/bookings/${bookingId}/cancel`, {
      method: 'PATCH',
    });
  },

  /**
   * Delete a booking permanently
   */
  async deleteBooking(bookingId: string): Promise<DeleteBookingResponse> {
    return apiRequest<DeleteBookingResponse>(`/api/bookings/${bookingId}`, {
      method: 'DELETE',
    });
  },
};

