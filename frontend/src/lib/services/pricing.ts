// Pricing service for managing subscriptions, plans, and credits

export interface Plan {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  interval: 'month' | 'year';
  features: string[];
  credits: number; // Monthly credits included
  isPopular?: boolean;
}

export interface Subscription {
  id: string;
  planId: string;
  planName: string;
  status: 'active' | 'cancelled' | 'expired' | 'past_due';
  currentPeriodStart: string;
  currentPeriodEnd: string;
  cancelAtPeriodEnd: boolean;
  credits: number;
  creditsUsed: number;
  creditsRemaining: number;
}

export interface PaymentMethod {
  id: string;
  type: 'card' | 'bank_account' | 'crypto';
  last4?: string;
  brand?: string;
  expiryMonth?: number;
  expiryYear?: number;
  isDefault: boolean;
}

export interface CreateSubscriptionRequest {
  planId: string;
  paymentMethodId?: string;
}

export interface UpdateSubscriptionRequest {
  planId?: string;
  cancelAtPeriodEnd?: boolean;
}

export interface AddPaymentMethodRequest {
  type: 'card' | 'bank_account' | 'crypto';
  token?: string; // For card tokenization
  walletAddress?: string; // For crypto payments
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

export const pricingService = {
  /**
   * Get all available plans
   */
  async getPlans(): Promise<Plan[]> {
    return apiRequest<Plan[]>('/api/pricing/plans');
  },

  /**
   * Get current user's subscription
   */
  async getSubscription(): Promise<Subscription | null> {
    try {
      return await apiRequest<Subscription>('/api/pricing/subscription');
    } catch (error: any) {
      // If 404, user has no subscription
      if (error.message?.includes('404') || error.message?.includes('not found')) {
        return null;
      }
      throw error;
    }
  },

  /**
   * Create a new subscription
   */
  async createSubscription(data: CreateSubscriptionRequest): Promise<Subscription> {
    return apiRequest<Subscription>('/api/pricing/subscription', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  /**
   * Update subscription (upgrade/downgrade or cancel)
   */
  async updateSubscription(data: UpdateSubscriptionRequest): Promise<Subscription> {
    return apiRequest<Subscription>('/api/pricing/subscription', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  /**
   * Cancel subscription
   */
  async cancelSubscription(): Promise<Subscription> {
    return apiRequest<Subscription>('/api/pricing/subscription/cancel', {
      method: 'POST',
    });
  },

  /**
   * Get payment methods
   */
  async getPaymentMethods(): Promise<PaymentMethod[]> {
    return apiRequest<PaymentMethod[]>('/api/pricing/payment-methods');
  },

  /**
   * Add a payment method
   */
  async addPaymentMethod(data: AddPaymentMethodRequest): Promise<PaymentMethod> {
    return apiRequest<PaymentMethod>('/api/pricing/payment-methods', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  /**
   * Set default payment method
   */
  async setDefaultPaymentMethod(paymentMethodId: string): Promise<void> {
    return apiRequest<void>(`/api/pricing/payment-methods/${paymentMethodId}/default`, {
      method: 'PUT',
    });
  },

  /**
   * Delete a payment method
   */
  async deletePaymentMethod(paymentMethodId: string): Promise<void> {
    return apiRequest<void>(`/api/pricing/payment-methods/${paymentMethodId}`, {
      method: 'DELETE',
    });
  },

  /**
   * Get credit usage history
   */
  async getCreditHistory(): Promise<Array<{
    id: string;
    amount: number;
    type: 'earned' | 'used' | 'purchased';
    description: string;
    createdAt: string;
  }>> {
    return apiRequest('/api/pricing/credits/history');
  },

  /**
   * Purchase additional credits
   */
  async purchaseCredits(amount: number, paymentMethodId?: string): Promise<{
    credits: number;
    transactionId: string;
  }> {
    return apiRequest('/api/pricing/credits/purchase', {
      method: 'POST',
      body: JSON.stringify({ amount, paymentMethodId }),
    });
  },
};

