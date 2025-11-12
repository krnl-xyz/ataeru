// Hospital service for managing hospital registrations and searches

export interface RegisterHospitalRequest {
  name: string;
  location: string;
  rating: number;
  specialties: string[];
  imageUrl: string;
  walletAddress: string;
}

export interface RegisteredHospital {
  id: string;
  name: string;
  location: string;
  rating: number;
  specialties: string[];
  imageUrl: string;
  walletAddress: string;
  isVerified?: boolean;
  verificationDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface SearchHospitalsParams {
  query?: string;
  location?: string;
  specialty?: string;
  minRating?: number;
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

export const hospitalService = {
  /**
   * Register a new hospital (only for MEDICAL_FACILITY users)
   */
  async registerHospital(data: RegisterHospitalRequest): Promise<RegisteredHospital> {
    return apiRequest<RegisteredHospital>('/api/hospitals/register', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  /**
   * Get my registered hospital
   */
  async getMyHospital(): Promise<RegisteredHospital | null> {
    try {
      return await apiRequest<RegisteredHospital>('/api/hospitals/me/hospital');
    } catch (error: any) {
      // If 404, user hasn't registered a hospital yet
      if (error.message?.includes('404') || error.message?.includes('not found')) {
        return null;
      }
      throw error;
    }
  },

  /**
   * Search hospitals
   */
  async searchHospitals(params: SearchHospitalsParams): Promise<RegisteredHospital[]> {
    const queryParams = new URLSearchParams();

    if (params.query) queryParams.append('query', params.query);
    if (params.location) queryParams.append('location', params.location);
    if (params.specialty) queryParams.append('specialty', params.specialty);
    if (params.minRating !== undefined) queryParams.append('minRating', params.minRating.toString());

    const queryString = queryParams.toString();
    const endpoint = `/api/hospitals/search${queryString ? `?${queryString}` : ''}`;

    return apiRequest<RegisteredHospital[]>(endpoint);
  },

  /**
   * Verify hospital using Self Protocol
   */
  async verifyHospital(hospitalId: string, verificationData: {
    selfVerificationId?: string;
    verificationProof?: string;
  }): Promise<RegisteredHospital> {
    return apiRequest<RegisteredHospital>(`/api/hospitals/${hospitalId}/verify`, {
      method: 'POST',
      body: JSON.stringify(verificationData),
    });
  },

  /**
   * Get verification status
   */
  async getVerificationStatus(hospitalId: string): Promise<{
    isVerified: boolean;
    verificationDate?: string;
    verificationMethod?: string;
  }> {
    return apiRequest(`/api/hospitals/${hospitalId}/verification-status`);
  },

  /**
   * Update hospital details
   */
  async updateHospital(hospitalId: string, data: Partial<{
    name: string;
    location: string;
    rating: number;
    specialties: string[];
    imageUrl: string;
  }>): Promise<RegisteredHospital> {
    return apiRequest<RegisteredHospital>(`/api/hospitals/${hospitalId}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },
};

