export interface SignupRequest {
  fullname?: string;
  email?: string;
  password: string; // Required for regular signup, 'SSO_AUTH' for SSO
  phone?: string;
  address?: string;
  about?: string;
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

// Use Next.js API proxy to avoid CORS issues
// If NEXT_PUBLIC_USE_PROXY is true, use the proxy route, otherwise use direct API URL
const USE_PROXY = process.env.NEXT_PUBLIC_USE_PROXY !== 'false'; // Default to true
const API_BASE_URL = USE_PROXY
  ? (typeof window !== 'undefined' ? window.location.origin : '')
  : (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001');
const API_PREFIX = USE_PROXY ? '/api/proxy' : '';

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

// Store SSO idToken in sessionStorage (temporary, for signup flow)
const setSSOIdToken = (provider: 'google' | 'apple', idToken: string): void => {
  if (typeof window === 'undefined') return;
  sessionStorage.setItem(`sso_${provider}_idToken`, idToken);
};

// Get SSO idToken from sessionStorage
const getSSOIdToken = (provider: 'google' | 'apple'): string | null => {
  if (typeof window === 'undefined') return null;
  return sessionStorage.getItem(`sso_${provider}_idToken`);
};

// Remove SSO idToken from sessionStorage
const removeSSOIdToken = (provider: 'google' | 'apple'): void => {
  if (typeof window === 'undefined') return;
  sessionStorage.removeItem(`sso_${provider}_idToken`);
};

// Type declarations for Google Identity Services
declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: {
            client_id: string;
            callback: (response: { credential: string }) => void;
            ux_mode?: 'popup' | 'redirect';
            auto_select?: boolean;
            cancel_on_tap_outside?: boolean;
          }) => void;
          prompt: (callback?: (notification: any) => void) => void;
          renderButton: (element: HTMLElement, config: any) => void;
        };
        oauth2: {
          initTokenClient: (config: any) => {
            requestAccessToken: () => void;
          };
        };
      };
    };
  }
}

// Make authenticated API request
export const apiRequest = async <T>(
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
    const url = `${API_BASE_URL}${endpoint}`;
    const response = await fetch(url, {
      ...options,
      headers,
      credentials: 'include', // Include cookies for cookie-based auth
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'An error occurred' }));
      const errorObj: any = new Error(error.message || `HTTP error! status: ${response.status}`);
      errorObj.status = response.status;
      errorObj.statusCode = response.status;
      // Preserve any additional error properties from the response
      if (error.email) errorObj.email = error.email;
      if (error.fullname) errorObj.fullname = error.fullname;
      throw errorObj;
    }

    return response.json();
  } catch (error: any) {
    // Provide more helpful error messages for network issues
    if (error.message === 'Failed to fetch' || error.name === 'TypeError') {
      const backendUrl = USE_PROXY
        ? 'via Next.js proxy'
        : (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001');

      console.error('Error in API request:', {
        endpoint,
        url: `${API_BASE_URL}${endpoint}`,
        error: error.message,
        backendUrl,
        useProxy: USE_PROXY,
      });

      const errorMessage = USE_PROXY
        ? `Cannot connect to backend server. Please ensure the backend server is running at ${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}`
        : `Cannot connect to server at ${API_BASE_URL}${endpoint}`;

      throw new Error(errorMessage);
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
      const response = await fetch(`${API_BASE_URL}${API_PREFIX}/auth/signup`, {
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
        url: `${API_BASE_URL}${API_PREFIX}/auth/signup`,
      });

      // Provide more helpful error messages
      if (error.message === 'Failed to fetch' || error.name === 'TypeError') {
        const backendUrl = USE_PROXY
          ? (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001')
          : API_BASE_URL;
        const errorMessage = USE_PROXY
          ? `Cannot connect to backend server. Please ensure the backend server is running at ${backendUrl}`
          : `Cannot connect to server at ${API_BASE_URL}${API_PREFIX}/auth/signup`;

        console.error('Error in API request:', errorMessage);
        throw new Error(errorMessage);
      }
      throw error;
    }
  },

  /**
   * Sign up a new user with SSO (uses stored idToken)
   * This should be used when user has an active SSO session
   */
  async signupWithSSO(provider: 'google' | 'apple', data: Partial<SignupRequest>): Promise<AuthResponse> {
    try {
      // Get stored idToken from sessionStorage
      const idToken = getSSOIdToken(provider);

      if (!idToken) {
        throw new Error(`No ${provider} ID token found. Please sign in with ${provider} again.`);
      }

      // Use the same endpoint as login, but with signup data + idToken
      const requestBody: any = {
        idToken,
        ...data,
      };

      const response = await fetch(`${API_BASE_URL}${API_PREFIX}/auth/${provider}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
        credentials: 'include', // Include cookies for SSO session
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({ message: 'SSO signup failed' }));
        const errorObj: any = new Error(error.message || `HTTP error! status: ${response.status}`);
        errorObj.status = response.status;
        errorObj.statusCode = response.status;
        throw errorObj;
      }

      const result = await response.json();

      // Store token if provided (for token-based auth)
      if (result.token) {
        setAuthToken(result.token);
        // Clear SSO idToken after successful signup
        removeSSOIdToken(provider);
      }
      // If no token, assume cookie-based auth (cookies are set automatically by the server)

      return result;
    } catch (error: any) {
      console.error('SSO signup error details:', {
        message: error.message,
        name: error.name,
        stack: error.stack,
        url: `${API_BASE_URL}${API_PREFIX}/auth/${provider}`,
      });

      // Provide more helpful error messages
      if (error.message === 'Failed to fetch' || error.name === 'TypeError') {
        const backendUrl = USE_PROXY
          ? (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001')
          : API_BASE_URL;
        const errorMessage = USE_PROXY
          ? `Cannot connect to backend server. Please ensure the backend server is running at ${backendUrl}`
          : `Cannot connect to server at ${API_BASE_URL}${API_PREFIX}/auth/${provider}`;

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
      const response = await fetch(`${API_BASE_URL}${API_PREFIX}/auth/login`, {
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
        url: `${API_BASE_URL}${API_PREFIX}/auth/login`,
      });

      // Provide more helpful error messages
      if (error.message === 'Failed to fetch' || error.name === 'TypeError') {
        const backendUrl = USE_PROXY
          ? (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001')
          : API_BASE_URL;
        const errorMessage = USE_PROXY
          ? `Cannot connect to backend server. Please ensure the backend server is running at ${backendUrl}`
          : `Cannot connect to server at ${API_BASE_URL}${API_PREFIX}/auth/login`;

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
    return apiRequest<User>(`${API_PREFIX}/auth/me`);
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
    return apiRequest<User>(`${API_PREFIX}/auth/profile`, {
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
    return apiRequest<void>(`${API_PREFIX}/auth/change-password`, {
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
   * Check if user is authenticaoted
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

  /**
   * Initiate Google OAuth login
   * Uses Google Identity Services to get idToken and sends it to backend
   */
  async loginWithGoogle(): Promise<AuthResponse> {
    return new Promise((resolve, reject) => {
      if (typeof window === 'undefined') {
        reject(new Error('Google login is only available in the browser'));
        return;
      }

      const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
      if (!clientId) {
        reject(new Error('Google Client ID is not configured. Please set NEXT_PUBLIC_GOOGLE_CLIENT_ID'));
        return;
      }

      // Load Google Identity Services script if not already loaded
      const loadGoogleScript = () => {
        return new Promise<void>((resolve, reject) => {
          if (window.google?.accounts?.id) {
            resolve();
            return;
          }

          const script = document.createElement('script');
          script.src = 'https://accounts.google.com/gsi/client';
          script.async = true;
          script.defer = true;
          script.onload = () => {
            // Wait a bit for the script to fully initialize
            setTimeout(() => resolve(), 200);
          };
          script.onerror = () => reject(new Error('Failed to load Google Identity Services'));
          document.head.appendChild(script);
        });
      };

      loadGoogleScript()
        .then(() => {
          if (!window.google?.accounts?.id) {
            reject(new Error('Google Identity Services failed to load'));
            return;
          }

          // Store resolve/reject for the callback
          (window as any).__googleAuthResolve = resolve;
          (window as any).__googleAuthReject = reject;
          (window as any).__googleAuthService = this;

          // Get current origin
          const origin = window.location.origin;

          // Initialize Google Sign-In with explicit origin
          window.google.accounts.id.initialize({
            client_id: clientId,
            callback: async (response: { credential: string }) => {
              try {
                // Send idToken to backend
                const service = (window as any).__googleAuthService;
                const result = await service.sendGoogleIdToken(response.credential);
                const resolveFn = (window as any).__googleAuthResolve;
                if (resolveFn) {
                  resolveFn(result);
                }
                // Cleanup
                delete (window as any).__googleAuthResolve;
                delete (window as any).__googleAuthReject;
                delete (window as any).__googleAuthService;
              } catch (error) {
                const rejectFn = (window as any).__googleAuthReject;
                if (rejectFn) {
                  rejectFn(error);
                }
                // Cleanup
                delete (window as any).__googleAuthResolve;
                delete (window as any).__googleAuthReject;
                delete (window as any).__googleAuthService;
              }
            },
            ux_mode: 'popup',
            auto_select: false,
            cancel_on_tap_outside: true,
          });

          // Trigger Google Sign-In flow directly
          // Render button in a visible container to ensure origin is detected
          const google = window.google;
          if (!google?.accounts?.id) {
            reject(new Error('Google Identity Services not available'));
            return;
          }

          // Create a minimal visible container for the button
          // Google needs to detect the origin, so the element must be in the DOM and visible
          const tempContainer = document.createElement('div');
          tempContainer.style.position = 'fixed';
          tempContainer.style.top = '0';
          tempContainer.style.left = '0';
          tempContainer.style.width = '1px';
          tempContainer.style.height = '1px';
          tempContainer.style.opacity = '0';
          tempContainer.style.pointerEvents = 'none';
          tempContainer.style.overflow = 'hidden';
          tempContainer.id = 'temp-google-signin-container';
          document.body.appendChild(tempContainer);

          // Render Google button
          try {
            google.accounts.id.renderButton(tempContainer, {
              type: 'standard',
              theme: 'outline',
              size: 'large',
              text: 'signin_with',
            });

            // Wait for button to render, then click it automatically
            setTimeout(() => {
              const button = tempContainer.querySelector('div[role="button"]') as HTMLElement;
              if (button) {
                // Make button visible temporarily for click
                button.style.position = 'fixed';
                button.style.top = '50%';
                button.style.left = '50%';
                button.style.transform = 'translate(-50%, -50%)';
                button.style.zIndex = '10000';

                button.click();

                // Clean up after a delay
                setTimeout(() => {
                  if (tempContainer.parentNode) {
                    tempContainer.remove();
                  }
                }, 1000);
              } else {
                tempContainer.remove();
                reject(new Error('Failed to initialize Google Sign-In. Please ensure your origin is registered in Google Cloud Console.'));
              }
            }, 500);
          } catch (error: any) {
            tempContainer.remove();
            const errorMsg = error?.message || 'Failed to render Google Sign-In button';
            reject(new Error(`${errorMsg}. Please ensure your origin (${origin}) is registered in Google Cloud Console under Authorized JavaScript origins.`));
          }
        })
        .catch(reject);
    });
  },

  /**
   * Check if error indicates missing required fields for signup
   */
  isMissingRequiredFieldsError(error: any): boolean {
    if (!error) return false;

    const errorMessage = (error.message || '').toLowerCase();
    const errorString = JSON.stringify(error).toLowerCase();

    // Check for common required field errors
    const requiredFieldPatterns = [
      'phone',
      'address',
      'hospitalid',
      'hospital id',
    ];

    // Check if error message contains any required field pattern
    const hasRequiredField = requiredFieldPatterns.some(pattern =>
      errorMessage.includes(pattern) || errorString.includes(pattern)
    );

    // Also check for 400 status code (bad request) which often indicates validation errors
    const isBadRequest = error.status === 400 || error.statusCode === 400 || error.status === '400';

    // If we have a required field mentioned and it's a bad request, it's likely a validation error
    if (hasRequiredField && isBadRequest) {
      return true;
    }

    // Also check if the error message explicitly mentions "required" along with field names
    if (hasRequiredField && (errorMessage.includes('required') || errorString.includes('required'))) {
      return true;
    }

    return false;
  },

  /**
   * Send Google idToken to backend for authentication
   */
  async sendGoogleIdToken(idToken: string): Promise<AuthResponse> {
    try {
      // Store idToken in sessionStorage for potential signup flow
      setSSOIdToken('google', idToken);

      const result = await apiRequest<AuthResponse>(`${API_PREFIX}/auth/google`, {
        method: 'POST',
        body: JSON.stringify({ idToken }),
      });

      if (result.token) {
        setAuthToken(result.token);
        // Clear SSO idToken after successful authentication
        removeSSOIdToken('google');
      }

      return result;
    } catch (error: any) {
      console.error('Google idToken authentication error:', error);
      // Don't clear idToken on error - user might need it for signup
      throw error;
    }
  },

  /**
   * Initiate Apple OAuth login
   */
  async loginWithApple(): Promise<void> {
    const BACKEND_URL = USE_PROXY
      ? (typeof window !== 'undefined' ? window.location.origin : '')
      : (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001');
    const redirectUri = typeof window !== 'undefined'
      ? `${window.location.origin}/auth/apple/callback`
      : '';

    // Redirect to backend OAuth endpoint (always use direct URL for OAuth redirects)
    const oauthUrl = USE_PROXY
      ? `${BACKEND_URL}${API_PREFIX}/auth/apple?redirect_uri=${encodeURIComponent(redirectUri)}`
      : `${BACKEND_URL}/api/auth/apple?redirect_uri=${encodeURIComponent(redirectUri)}`;

    window.location.href = oauthUrl;
  },

  /**
   * Handle OAuth callback (called after OAuth redirect)
   * This is kept for backward compatibility but may not be used if using idToken flow
   */
  async handleOAuthCallback(provider: 'google' | 'apple', code: string, state?: string): Promise<AuthResponse> {
    try {
      // For Google, if we have an idToken in the code parameter, use it directly
      if (provider === 'google' && code && code.length > 100) {
        // Likely an idToken (JWT tokens are long)
        return this.sendGoogleIdToken(code);
      }

      const response = await fetch(`${API_BASE_URL}${API_PREFIX}/auth/${provider}/callback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, state }),
        credentials: 'include',
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({ message: 'OAuth authentication failed' }));
        const errorObj: any = new Error(error.message || `HTTP error! status: ${response.status}`);
        errorObj.status = response.status;
        errorObj.statusCode = response.status;
        // Preserve any additional error properties from the response
        if (error.email) errorObj.email = error.email;
        if (error.fullname) errorObj.fullname = error.fullname;
        throw errorObj;
      }

      const result = await response.json();

      // Store token if provided
      if (result.token) {
        setAuthToken(result.token);
      }

      return result;
    } catch (error: any) {
      console.error(`${provider} OAuth error:`, error);
      throw error;
    }
  },
};

