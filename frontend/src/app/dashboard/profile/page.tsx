'use client';

import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { useAuth } from '@/app/contexts/use-auth';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

interface UserProfile {
  fullname: string;
  email: string;
  phone: string;
  address: string;
  about: string;
  hospitalId: string;
}

export default function ProfilePage() {
  const router = useRouter();
  const { address } = useAccount();
  const { user, isLoading, isAuthenticated, updateProfile, changePassword } = useAuth();
  const [profile, setProfile] = useState<UserProfile>({
    fullname: '',
    email: '',
    phone: '',
    address: '',
    about: '',
    hospitalId: '',
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [activeSection, setActiveSection] = useState('personal');

  // Redirect if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, isLoading, router]);

  // Load user data into profile form
  useEffect(() => {
    if (user) {
      setProfile({
        fullname: user.fullname || '',
        email: user.email || '',
        phone: user.phone || '',
        address: user.address || '',
        about: user.about || '',
        hospitalId: user.hospitalId || '',
      });
    }
  }, [user]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    // Reset to original user data
    if (user) {
      setProfile({
        fullname: user.fullname || '',
        email: user.email || '',
        phone: user.phone || '',
        address: user.address || '',
        about: user.about || '',
        hospitalId: user.hospitalId || '',
      });
    }
    setIsEditing(false);
  };

  const handleSaveProfile = async () => {
    if (!user) return;

    setIsSaving(true);
    try {
      await updateProfile(profile);
      setIsEditing(false);
    } catch (error) {
      // Error is already handled in the auth context
      console.error('Failed to update profile:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangePassword = async () => {
    // Validate passwords match
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error('Passwords do not match', {
        description: 'Please make sure your new password and confirm password match',
      });
      return;
    }

    // Validate password length
    if (passwordData.newPassword.length < 6) {
      toast.error('Password too short', {
        description: 'Password must be at least 6 characters long',
      });
      return;
    }

    setIsChangingPassword(true);
    try {
      await changePassword({
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword,
      });
      // Reset password form after successful change
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
    } catch (error) {
      // Error is already handled in the auth context
      console.error('Failed to change password:', error);
    } finally {
      setIsChangingPassword(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-500">Loading profile...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-500">Please log in to view your profile</div>
      </div>
    );
  }

  return (
    <div>
      <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
        <div className="mt-3 flex sm:mt-0 sm:ml-4">
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Edit Profile
            </button>
          ) : (
            <div className="flex space-x-3">
              <button
                onClick={handleCancel}
                type="button"
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveProfile}
                type="button"
                disabled={isSaving}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {isSaving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="border-b border-gray-200">
          <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">User Information</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">Manage your personal information and settings</p>
            </div>
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-800 font-semibold text-lg">
                  {profile?.fullname?.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) || 'U'}
                </span>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 border-t border-b border-gray-200">
            <nav className="flex">
              <button
                onClick={() => setActiveSection('personal')}
                className={`px-4 py-3 text-sm font-medium ${activeSection === 'personal' ? 'text-blue-600 border-b-2 border-blue-600 bg-white' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Personal Info
              </button>
              {user.userType === 'MEDICAL_FACILITY' && (
                <button
                  onClick={() => setActiveSection('hospital')}
                  className={`px-4 py-3 text-sm font-medium ${activeSection === 'hospital' ? 'text-blue-600 border-b-2 border-blue-600 bg-white' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  Hospital Info
                </button>
              )}
              <button
                onClick={() => setActiveSection('password')}
                className={`px-4 py-3 text-sm font-medium ${activeSection === 'password' ? 'text-blue-600 border-b-2 border-blue-600 bg-white' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Change Password
              </button>
            </nav>
          </div>
        </div>

        <div className="px-4 py-5 sm:p-6">
          {activeSection === 'personal' && (
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
              <div>
                <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  value={profile.fullname}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className={`mt-1 block w-full border text-black ${isEditing ? 'border-gray-300' : 'border-transparent bg-gray-50'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={profile.email}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className={`mt-1 block w-full border text-black ${isEditing ? 'border-gray-300' : 'border-transparent bg-gray-50'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={profile.phone}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  placeholder="+1234567890"
                  className={`mt-1 block w-full border text-black ${isEditing ? 'border-gray-300' : 'border-transparent bg-gray-50'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                />
              </div>
              <div>
                <label htmlFor="hospitalId" className="block text-sm font-medium text-gray-700">
                  Hospital ID
                </label>
                <input
                  type="text"
                  name="hospitalId"
                  id="hospitalId"
                  value={profile.hospitalId}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className={`mt-1 block w-full border text-black ${isEditing ? 'border-gray-300' : 'border-transparent bg-gray-50'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <textarea
                  name="address"
                  id="address"
                  rows={3}
                  value={profile.address}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className={`mt-1 block w-full border text-black ${isEditing ? 'border-gray-300' : 'border-transparent bg-gray-50'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                  About
                </label>
                <textarea
                  name="about"
                  id="about"
                  rows={4}
                  value={profile.about}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  placeholder="Tell us about yourself..."
                  className={`mt-1 block w-full border text-black ${isEditing ? 'border-gray-300' : 'border-transparent bg-gray-50'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                />
              </div>
              <div className="sm:col-span-2 pt-4 mt-2 border-t border-gray-200">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Connected Wallet Address
                </label>
                <div className="flex items-center text-sm">
                  <div className="bg-blue-100 text-blue-800 px-3 py-2 rounded-md font-mono">
                    {address ? `${address.substring(0, 8)}...${address.substring(address.length - 6)}` : 'No wallet connected'}
                  </div>
                  {user.userType && (
                    <span className="ml-3 px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                      {user.userType === 'USER' ? 'User Account' : 'Medical Facility'}
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeSection === 'hospital' && user.userType === 'MEDICAL_FACILITY' && user.hospital && (
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Facility Name</label>
                <div className="mt-1 text-sm text-gray-900">{user.hospital.facilityName}</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Facility ID</label>
                <div className="mt-1 text-sm text-gray-900">{user.hospital.facilityId}</div>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <div className="mt-1 text-sm text-gray-900">
                  {user.hospital.address}, {user.hospital.city}, {user.hospital.state} {user.hospital.zip}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <div className="mt-1 text-sm text-gray-900">{user.hospital.telephone}</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Hospital Type</label>
                <div className="mt-1 text-sm text-gray-900">{user.hospital.hospitalType}</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Ownership</label>
                <div className="mt-1 text-sm text-gray-900">{user.hospital.hospitalOwnership}</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Overall Rating</label>
                <div className="mt-1 text-sm text-gray-900">{user.hospital.hospitalOverallRating || 'N/A'}</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Emergency Services</label>
                <div className="mt-1 text-sm text-gray-900">{user.hospital.emergencyServices}</div>
              </div>
            </div>
          )}

          {activeSection === 'password' && (
            <div className="max-w-md">
              <div className="space-y-6">
                <div>
                  <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">
                    Current Password
                  </label>
                  <input
                    type="password"
                    name="currentPassword"
                    id="currentPassword"
                    value={passwordData.currentPassword}
                    onChange={handlePasswordChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Enter your current password"
                  />
                </div>
                <div>
                  <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                    New Password
                  </label>
                  <input
                    type="password"
                    name="newPassword"
                    id="newPassword"
                    value={passwordData.newPassword}
                    onChange={handlePasswordChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Enter your new password"
                    minLength={6}
                  />
                  <p className="mt-1 text-xs text-gray-500">Password must be at least 6 characters long</p>
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={passwordData.confirmPassword}
                    onChange={handlePasswordChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Confirm your new password"
                    minLength={6}
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={handleChangePassword}
                    disabled={isChangingPassword || !passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isChangingPassword ? 'Changing Password...' : 'Change Password'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
