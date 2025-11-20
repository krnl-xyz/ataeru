// Subscription service for managing user subscriptions via Stripe

export type SubscriptionPlanId = 'USER_MONTHLY' | 'USER_YEARLY' | 'HOSPITAL_MONTHLY' | 'HOSPITAL_YEARLY';
export type SubscriptionStatus = 'ACTIVE' | 'TRIALING' | 'CANCELED' | 'PAST_DUE' | 'UNPAID' | 'INCOMPLETE' | 'INCOMPLETE_EXPIRED';

export interface SubscriptionPlan {
  id: SubscriptionPlanId;
  priceId: string;
  userType: 'USER' | 'MEDICAL_FACILITY';
  credits: number; // Credits allocated per billing period
}

export interface Subscription {
  id: string;
  userId: string;
  stripeCustomerId: string;
  stripeSubscriptionId: string;
  plan: SubscriptionPlanId;
  status: SubscriptionStatus;
  currentPeriodStart: string;
  currentPeriodEnd: string;
  cancelAtPeriodEnd: boolean;
  canceledAt: string | null;
  trialEnd: string | null;
  priceId: string;
  createdAt: string;
  updatedAt: string;
  user: {
    id: string;
    email: string;
    userType: 'USER' | 'MEDICAL_FACILITY';
  };
  stripeDetails?: any;
}

export interface GetPlansResponse {
  plans: SubscriptionPlan[];
}

export interface GetSubscriptionResponse {
  subscription: Subscription;
}

export interface CreateCheckoutRequest {
  plan: SubscriptionPlanId;
}

export interface CreateCheckoutResponse {
  sessionId: string;
  url: string;
}

export interface CancelSubscriptionResponse {
  message: string;
  subscription: any;
}

export interface ReactivateSubscriptionResponse {
  message: string;
  subscription: any;
}

export interface UpdatePlanRequest {
  plan: SubscriptionPlanId;
}

export interface UpdatePlanResponse {
  message: string;
}

const USE_PROXY = process.env.NEXT_PUBLIC_USE_PROXY !== 'false';
const API_BASE_URL = USE_PROXY
  ? (typeof window !== 'undefined' ? window.location.origin : '')
  : (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001');
const API_PREFIX = USE_PROXY ? '/api/proxy' : '';

// Get auth token from localStorage
const getAuthToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('authToken');
};

// Make authenticated API request
const apiRequest = async <T>(
  endpoint: string,
  options: RequestInit = {},
  requireAuth: boolean = true
): Promise<T> => {
  const token = getAuthToken();
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  // Check if authentication is required but token is missing
  if (requireAuth && !token) {
    const error: any = new Error('Authentication required. Please log in to continue.');
    error.status = 401;
    error.statusCode = 401;
    throw error;
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    const url = `${API_BASE_URL}${API_PREFIX}${endpoint}`;
    const response = await fetch(url, {
      ...options,
      headers,
      credentials: 'include',
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'An error occurred' }));
      const errorObj: any = new Error(error.message || `HTTP error! status: ${response.status}`);
      errorObj.status = response.status;
      errorObj.statusCode = response.status;
      
      // Provide more helpful error message for 401 errors
      if (response.status === 401) {
        errorObj.message = error.message || 'Authentication required. Please log in to continue.';
      }
      
      throw errorObj;
    }

    return response.json();
  } catch (error: any) {
    if (error.message === 'Failed to fetch' || error.name === 'TypeError') {
      const backendUrl = USE_PROXY
        ? 'via Next.js proxy'
        : (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001');

      console.error('Error in subscription API request:', {
        endpoint,
        url: `${API_BASE_URL}${API_PREFIX}${endpoint}`,
        error: error.message,
        backendUrl,
        useProxy: USE_PROXY,
        hasToken: !!token,
      });

      const errorMessage = USE_PROXY
        ? `Cannot connect to backend server. Please ensure the backend server is running at ${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}`
        : `Cannot connect to server at ${API_BASE_URL}${API_PREFIX}${endpoint}`;

      throw new Error(errorMessage);
    }
    throw error;
  }
};

export const subscriptionService = {
  /**
   * Get all available subscription plans
   * This is a public endpoint and doesn't require authentication
   */
  async getPlans(): Promise<GetPlansResponse> {
    // This endpoint doesn't require authentication, so use direct fetch
    const url = `${API_BASE_URL}${API_PREFIX}/api/subscriptions/plans`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'An error occurred' }));
      const errorObj: any = new Error(error.message || `HTTP error! status: ${response.status}`);
      errorObj.status = response.status;
      errorObj.statusCode = response.status;
      throw errorObj;
    }

    return response.json();
  },

  /**
   * Get current user's subscription
   */
  async getMySubscription(): Promise<GetSubscriptionResponse | null> {
    try {
      return await apiRequest<GetSubscriptionResponse>('/api/subscriptions/me');
    } catch (error: any) {
      if (error.status === 404) {
        return null;
      }
      throw error;
    }
  },

  /**
   * Create a checkout session for subscribing to a plan
   */
  async createCheckout(plan: SubscriptionPlanId): Promise<CreateCheckoutResponse> {
    return await apiRequest<CreateCheckoutResponse>('/api/subscriptions/checkout', {
      method: 'POST',
      body: JSON.stringify({ plan }),
    });
  },

  /**
   * Cancel subscription (at end of billing period)
   */
  async cancel(): Promise<CancelSubscriptionResponse> {
    return await apiRequest<CancelSubscriptionResponse>('/api/subscriptions/cancel', {
      method: 'POST',
    });
  },

  /**
   * Reactivate a canceled subscription
   */
  async reactivate(): Promise<ReactivateSubscriptionResponse> {
    return await apiRequest<ReactivateSubscriptionResponse>('/api/subscriptions/reactivate', {
      method: 'POST',
    });
  },

  /**
   * Update subscription plan (e.g., monthly to yearly)
   */
  async updatePlan(plan: SubscriptionPlanId): Promise<UpdatePlanResponse> {
    return await apiRequest<UpdatePlanResponse>('/api/subscriptions/plan', {
      method: 'PUT',
      body: JSON.stringify({ plan }),
    });
  },

  /**
   * Check if subscription is active
   */
  hasActiveSubscription(subscription: Subscription | null): boolean {
    if (!subscription) return false;

    const activeStatuses: SubscriptionStatus[] = ['ACTIVE', 'TRIALING'];
    const isActive = activeStatuses.includes(subscription.status);

    if (!isActive) return false;

    // Check if period has ended
    if (subscription.currentPeriodEnd) {
      return new Date(subscription.currentPeriodEnd) > new Date();
    }

    return true;
  },
};

