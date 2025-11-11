export interface SignupRequest {
  fullname: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  about: string;
  hospitalId: string;
  userType: 'USER' | 'MEDICAL_FACILITY';
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface Hospital {
  facilityId: string;
  facilityName: string;
  address: string;
  city: string;
  zip: string;
  state: string;
  country: string;
  telephone: string;
  hospitalType: string;
  hospitalOwnership: string;
  hospitalOverallRating: string;
  hospitalOverallRatingFootnote: string | null;
  emergencyServices: string;
}

export interface User {
  id: string;
  fullname: string;
  email: string;
  witnesshash: string;
  phone: string;
  address: string;
  about: string;
  userType: 'USER' | 'MEDICAL_FACILITY';
  hospitalId: string;
  createdAt: string;
  updatedAt: string;
  hospital?: Hospital;
}

export interface AuthResponse extends User {
  token?: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

// Get auth token from localStorage
const getAuthToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('authToken');
};

// Set auth token in localStorage
const setAuthToken = (token: string): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('authToken', token);
};

// Remove auth token from localStorage
const removeAuthToken = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('authToken');
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
      credentials: 'include', // Include cookies for cookie-based auth
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'An error occurred' }));
      throw new Error(error.message || `HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error: any) {
    // Provide more helpful error messages for network issues
    if (error.message === 'Failed to fetch' || error.name === 'TypeError') {
      const origin = typeof window !== 'undefined' ? window.location.origin : 'unknown';


      console.error('Error in API request:', {
        endpoint,
        url: `${API_BASE_URL}${endpoint}`,
        error: error.message,
        origin,
      });

      throw new Error(`Cannot connect to server at ${API_BASE_URL}${endpoint}`);
    }
    throw error;
  }
};

export const authService = {
  /**
   * Sign up a new user
   */
  async signup(data: SignupRequest): Promise<AuthResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include', // Include cookies for cookie-based auth
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({ message: 'Signup failed' }));
        throw new Error(error.message || `HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      // Store token if provided (for token-based auth)
      if (result.token) {
        setAuthToken(result.token);
      }
      // If no token, assume cookie-based auth (cookies are set automatically by the server)

      return result;
    } catch (error: any) {
      console.error('Signup error details:', {
        message: error.message,
        name: error.name,
        stack: error.stack,
        url: `${API_BASE_URL}/api/auth/signup`,
      });

      // Provide more helpful error messages
      if (error.message === 'Failed to fetch' || error.name === 'TypeError') {
        const origin = typeof window !== 'undefined' ? window.location.origin : 'your-frontend-origin';
        const errorMessage =
          `Cannot connect to server at ${API_BASE_URL}/api/auth/signup`;

        console.error('Error in API request:', errorMessage);
        throw new Error(errorMessage);
      }
      throw error;
    }
  },

  /**
   * Log in a user
   */
  async login(data: LoginRequest): Promise<AuthResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include', // Include cookies for cookie-based auth
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({ message: 'Login failed' }));
        throw new Error(error.message || `HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      // Store token if provided (for token-based auth)
      if (result.token) {
        setAuthToken(result.token);
      }
      // If no token, assume cookie-based auth (cookies are set automatically by the server)

      return result;
    } catch (error: any) {
      console.error('Login error details:', {
        message: error.message,
        name: error.name,
        stack: error.stack,
        url: `${API_BASE_URL}/api/auth/login`,
      });

      // Provide more helpful error messages
      if (error.message === 'Failed to fetch' || error.name === 'TypeError') {
        const origin = typeof window !== 'undefined' ? window.location.origin : 'your-frontend-origin';
        const errorMessage =
          `Cannot connect to server at ${API_BASE_URL}/api/auth/login`;

        console.error('Error in API request:', errorMessage);
        throw new Error(errorMessage);
      }
      throw error;
    }
  },

  /**
   * Get current user information
   */
  async getMe(): Promise<User> {
    return apiRequest<User>('/api/auth/me');
  },

  /**
   * Update user profile
   */
  async updateProfile(data: Partial<{
    fullname: string;
    email: string;
    phone: string;
    address: string;
    about: string;
    hospitalId: string;
  }>): Promise<User> {
    return apiRequest<User>('/api/auth/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  /**
   * Change user password
   */
  async changePassword(data: {
    currentPassword: string;
    newPassword: string;
  }): Promise<void> {
    return apiRequest<void>('/api/auth/change-password', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  /**
   * Log out the current user
   */
  logout(): void {
    removeAuthToken();
  },

  /**
   * Check if user is authenticated
   * For cookie-based auth, we can't check cookies directly (they're httpOnly)
   * So we'll rely on the auth context to check by attempting to fetch user data
   */
  isAuthenticated(): boolean {
    // If we have a token, we're authenticated
    if (getAuthToken()) {
      return true;
    }
    // For cookie-based auth, we can't check directly, so return false
    // The auth context will handle checking by calling getMe()
    return false;
  },

  /**
   * Get auth token
   */
  getToken(): string | null {
    return getAuthToken();
  },
};

