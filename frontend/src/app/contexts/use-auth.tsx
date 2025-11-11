'use client';

import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { authService, User, SignupRequest, LoginRequest } from '@/lib/services/auth';
import { toast } from 'sonner';

type UserType = 'USER' | 'MEDICAL_FACILITY' | null;

interface AuthContextType {
  // User data
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;

  // Legacy properties for backward compatibility
  isOnboarded: boolean;
  userType: 'user' | 'hospital' | null;
  isRegistrationModalOpen: boolean;
  isLoginModalOpen: boolean;
  isHospitalVerified: boolean;

  // Auth methods
  login: (data: LoginRequest) => Promise<void>;
  signup: (data: SignupRequest) => Promise<void>;
  logout: () => void;
  refreshUser: () => Promise<void>;
  updateProfile: (data: Partial<{
    fullname: string;
    email: string;
    phone: string;
    address: string;
    about: string;
    hospitalId: string;
  }>) => Promise<void>;
  changePassword: (data: {
    currentPassword: string;
    newPassword: string;
  }) => Promise<void>;

  // Modal controls
  openRegistrationModal: () => void;
  closeRegistrationModal: () => void;
  openLoginModal: () => void;
  closeLoginModal: () => void;

  // Legacy methods
  setIsOnboarded: (value: boolean) => void;
  setUserType: (type: 'user' | 'hospital' | null) => void;
  setIsHospitalVerified: (value: boolean) => void;
  completeOnboarding: (type: 'user' | 'hospital') => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState<boolean>(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [isHospitalVerified, setIsHospitalVerified] = useState<boolean>(false);

  // Check if user is authenticated and fetch user data
  const refreshUser = useCallback(async () => {
    try {
      setIsLoading(true);
      // Try to fetch user data - this will work if we have valid auth (token or cookie)
      const userData = await authService.getMe();
      setUser(userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
      // If fetch fails, user is not authenticated
      authService.logout();
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Fetch user data on mount
  useEffect(() => {
    refreshUser();
  }, [refreshUser]);

  // Login function
  const login = useCallback(async (data: LoginRequest) => {
    try {
      setIsLoading(true);
      const response = await authService.login(data);
      // Response is the user object (or contains user property)
      const userData = (response as any).user || response;
      setUser(userData);
      setIsLoginModalOpen(false);
      toast.success('Login successful');
      // Refresh user data to get full profile with hospital info
      await refreshUser();
    } catch (error: any) {
      console.error('Login error:', error);
      toast.error('Login failed', {
        description: error.message || 'Invalid email or password',
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [refreshUser]);

  // Signup function
  const signup = useCallback(async (data: SignupRequest) => {
    try {
      setIsLoading(true);
      const response = await authService.signup(data);
      // Response is the user object (or contains user property)
      const userData = (response as any).user || response;
      setUser(userData);
      setIsRegistrationModalOpen(false);
      toast.success('Registration successful');
      // Refresh user data to get full profile with hospital info
      await refreshUser();
    } catch (error: any) {
      console.error('Signup error:', error);
      toast.error('Registration failed', {
        description: error.message || 'Please check your information and try again',
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [refreshUser]);

  // Logout function
  const logout = useCallback(() => {
    authService.logout();
    setUser(null);
    toast.success('Logged out successfully');
  }, []);

  // Update profile function
  const updateProfile = useCallback(async (data: Partial<{
    fullname: string;
    email: string;
    phone: string;
    address: string;
    about: string;
    hospitalId: string;
  }>) => {
    try {
      setIsLoading(true);
      const updatedUser = await authService.updateProfile(data);
      setUser(updatedUser);
      toast.success('Profile updated successfully');
      // Refresh user data to get full profile
      await refreshUser();
    } catch (error: any) {
      console.error('Update profile error:', error);
      toast.error('Failed to update profile', {
        description: error.message || 'Please check your information and try again',
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [refreshUser]);

  // Change password function
  const changePassword = useCallback(async (data: {
    currentPassword: string;
    newPassword: string;
  }) => {
    try {
      setIsLoading(true);
      await authService.changePassword(data);
      toast.success('Password changed successfully');
    } catch (error: any) {
      console.error('Change password error:', error);
      toast.error('Failed to change password', {
        description: error.message || 'Please check your current password and try again',
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Modal controls
  const openRegistrationModal = () => setIsRegistrationModalOpen(true);
  const closeRegistrationModal = () => setIsRegistrationModalOpen(false);
  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  // Legacy methods for backward compatibility
  const setIsOnboarded = (value: boolean) => {
    // This is now derived from user state, but we keep it for compatibility
  };

  const setUserType = (type: 'user' | 'hospital' | null) => {
    // This is now derived from user state, but we keep it for compatibility
  };

  const completeOnboarding = (type: 'user' | 'hospital') => {
    // Legacy method - now handled by signup
    setIsRegistrationModalOpen(false);
  };

  // Derived values
  const isAuthenticated = !!user;
  const isOnboarded = isAuthenticated;

  // Map backend userType to legacy format
  const userType: 'user' | 'hospital' | null = user?.userType === 'USER'
    ? 'user'
    : user?.userType === 'MEDICAL_FACILITY'
      ? 'hospital'
      : null;

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated,
        isOnboarded,
        userType,
        isRegistrationModalOpen,
        isLoginModalOpen,
        isHospitalVerified,
        login,
        signup,
        logout,
        refreshUser,
        updateProfile,
        changePassword,
        openRegistrationModal,
        closeRegistrationModal,
        openLoginModal,
        closeLoginModal,
        setIsOnboarded,
        setUserType,
        setIsHospitalVerified,
        completeOnboarding,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};