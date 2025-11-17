import { apiRequest } from './auth';

export interface TreatmentPreference {
  id: string;
  treatmentId: string;
  userId: string;
  preferences: Record<string, any>;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTreatmentPreferenceRequest {
  treatmentId: string;
  preferences: Record<string, any>;
}

export interface UpdateTreatmentPreferenceRequest {
  preferences: Record<string, any>;
}

export interface Preference {
  id: string;
  userId: string;
  category: string;
  key: string;
  value: any;
  metadata?: Record<string, any>;
  createdAt: string;
  updatedAt: string;
}

export interface CreatePreferenceRequest {
  category: string;
  key: string;
  value: any;
  metadata?: Record<string, any>;
}

export interface UpdatePreferenceRequest {
  value?: any;
  metadata?: Record<string, any>;
}

export interface CreateTreatmentPreferenceResponse {
  preference: TreatmentPreference;
  message: string;
}

export interface UpdateTreatmentPreferenceResponse {
  preference: TreatmentPreference;
  message: string;
}

export interface DeleteTreatmentPreferenceResponse {
  message: string;
}

export interface CreatePreferenceResponse {
  preference: Preference;
  message: string;
}

export interface UpdatePreferenceResponse {
  preference: Preference;
  message: string;
}

export interface DeletePreferenceResponse {
  message: string;
}

const USE_PROXY = process.env.NEXT_PUBLIC_USE_PROXY !== 'false';
const API_PREFIX = USE_PROXY ? '/api/proxy' : '';

export const preferencesService = {
  /**
   * Add treatment preference
   */
  async addTreatmentPreference(
    data: CreateTreatmentPreferenceRequest
  ): Promise<CreateTreatmentPreferenceResponse> {
    return apiRequest<CreateTreatmentPreferenceResponse>(`${API_PREFIX}/api/treatment-preferences`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  /**
   * Get preferences for a specific treatment
   */
  async getTreatmentPreferences(treatmentId: string): Promise<TreatmentPreference> {
    return apiRequest<TreatmentPreference>(`${API_PREFIX}/api/treatment-preferences/${treatmentId}`);
  },

  /**
   * Update treatment preference
   */
  async updateTreatmentPreference(
    preferenceId: string,
    data: UpdateTreatmentPreferenceRequest
  ): Promise<UpdateTreatmentPreferenceResponse> {
    return apiRequest<UpdateTreatmentPreferenceResponse>(
      `${API_PREFIX}/api/treatment-preferences/${preferenceId}`,
      {
        method: 'PUT',
        body: JSON.stringify(data),
      }
    );
  },

  /**
   * Remove treatment preference
   */
  async removeTreatmentPreference(preferenceId: string): Promise<DeleteTreatmentPreferenceResponse> {
    return apiRequest<DeleteTreatmentPreferenceResponse>(
      `${API_PREFIX}/api/treatment-preferences/${preferenceId}`,
      {
        method: 'DELETE',
      }
    );
  },

  /**
   * Add a general preference
   */
  async addPreference(data: CreatePreferenceRequest): Promise<CreatePreferenceResponse> {
    return apiRequest<CreatePreferenceResponse>(`${API_PREFIX}/api/preferences`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  /**
   * Get all preferences for the current user
   */
  async getMyPreferences(): Promise<Preference[]> {
    return apiRequest<Preference[]>(`${API_PREFIX}/api/preferences/me`);
  },

  /**
   * Update a preference
   */
  async updatePreference(
    preferenceId: string,
    data: UpdatePreferenceRequest
  ): Promise<UpdatePreferenceResponse> {
    return apiRequest<UpdatePreferenceResponse>(`${API_PREFIX}/api/preferences/${preferenceId}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  /**
   * Remove a preference
   */
  async removePreference(preferenceId: string): Promise<DeletePreferenceResponse> {
    return apiRequest<DeletePreferenceResponse>(`${API_PREFIX}/api/preferences/${preferenceId}`, {
      method: 'DELETE',
    });
  },
};

