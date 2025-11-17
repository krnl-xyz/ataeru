import { apiRequest } from './auth';

export type RequestType = 'DONOR_REQUEST' | 'BLOOD_REQUEST' | 'ORGAN_REQUEST' | 'OTHER';
export type RequestPriority = 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
export type RequestStatus = 'PENDING' | 'ACTIVE' | 'FULFILLED' | 'CANCELLED' | 'EXPIRED';

export interface CreateRequestRequest {
  hospitalId: string;
  requestType: RequestType;
  title: string;
  description: string;
  priority?: RequestPriority;
  requestedDate?: string; // ISO 8601 format
  metadata?: Record<string, any>;
}

export interface UpdateRequestRequest {
  title?: string;
  description?: string;
  priority?: RequestPriority;
  requestedDate?: string;
  metadata?: Record<string, any>;
}

export interface UpdateRequestStatusRequest {
  status: RequestStatus;
  notes?: string;
}

export interface Request {
  id: string;
  hospitalId: string;
  userId?: string;
  requestType: RequestType;
  title: string;
  description: string;
  priority: RequestPriority;
  status: RequestStatus;
  requestedDate?: string;
  fulfilledDate?: string;
  metadata?: Record<string, any>;
  createdAt: string;
  updatedAt: string;
  hospital?: {
    id: string;
    name: string;
    location?: string;
  };
  user?: {
    id: string;
    fullname: string;
    email: string;
  };
}

export interface CreateRequestResponse {
  request: Request;
  message: string;
}

export interface UpdateRequestResponse {
  request: Request;
  message: string;
}

export interface UpdateRequestStatusResponse {
  request: Request;
  message: string;
}

export interface DeleteRequestResponse {
  message: string;
}

const USE_PROXY = process.env.NEXT_PUBLIC_USE_PROXY !== 'false';
const API_PREFIX = USE_PROXY ? '/api/proxy' : '';

export const requestsService = {
  /**
   * Create a new hospital request
   */
  async createRequest(data: CreateRequestRequest): Promise<CreateRequestResponse> {
    return apiRequest<CreateRequestResponse>(`${API_PREFIX}/api/requests`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  /**
   * Get all requests for the current user
   */
  async getMyRequests(): Promise<Request[]> {
    return apiRequest<Request[]>(`${API_PREFIX}/api/requests/me`);
  },

  /**
   * Get all requests for a specific hospital
   */
  async getHospitalRequests(hospitalId: string): Promise<Request[]> {
    return apiRequest<Request[]>(`${API_PREFIX}/api/requests/hospital/${hospitalId}`);
  },

  /**
   * Get a specific request by ID
   */
  async getRequestById(requestId: string): Promise<Request> {
    return apiRequest<Request>(`${API_PREFIX}/api/requests/${requestId}`);
  },

  /**
   * Update a request
   */
  async updateRequest(requestId: string, data: UpdateRequestRequest): Promise<UpdateRequestResponse> {
    return apiRequest<UpdateRequestResponse>(`${API_PREFIX}/api/requests/${requestId}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  /**
   * Update request status
   */
  async updateRequestStatus(
    requestId: string,
    data: UpdateRequestStatusRequest
  ): Promise<UpdateRequestStatusResponse> {
    return apiRequest<UpdateRequestStatusResponse>(`${API_PREFIX}/api/requests/${requestId}/status`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  },

  /**
   * Delete a request
   */
  async deleteRequest(requestId: string): Promise<DeleteRequestResponse> {
    return apiRequest<DeleteRequestResponse>(`${API_PREFIX}/api/requests/${requestId}`, {
      method: 'DELETE',
    });
  },

  /**
   * Get requests by type
   */
  async getRequestsByType(type: RequestType): Promise<Request[]> {
    return apiRequest<Request[]>(`${API_PREFIX}/api/requests/type/${type}`);
  },

  /**
   * Get requests by status
   */
  async getRequestsByStatus(status: RequestStatus): Promise<Request[]> {
    return apiRequest<Request[]>(`${API_PREFIX}/api/requests/status/${status}`);
  },
};

