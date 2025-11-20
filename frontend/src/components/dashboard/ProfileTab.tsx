'use client';

import { useState, useEffect } from 'react';
import { Loader } from 'lucide-react';
import { useAuth } from '@/app/contexts/use-auth';
import { useAccount } from 'wagmi';
import Image from 'next/image';

export default function ProfileTab() {
  const { user, isLoading: authLoading, updateProfile, changePassword } = useAuth();
  const { address } = useAccount();
  const [profile, setProfile] = useState({
    fullname: '',
    email: '',
    phone: '',
    address: '',
    about: '',
    hospitalId: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [activeSection, setActiveSection] = useState('personal');
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [isChangingPassword, setIsChangingPassword] = useState(false);

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
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      return;
    }
    if (passwordData.newPassword.length < 6) {
      return;
    }
    setIsChangingPassword(true);
    try {
      await changePassword({
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword,
      });
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error('Failed to change password:', error);
    } finally {
      setIsChangingPassword(false);
    }
  };

  return (
    <div className="bg-[#0b0b0d] border border-gray-800 rounded-lg overflow-hidden">
      {/* Profile Header */}
      <div className="border-b border-gray-800 px-6 py-4 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold text-white">My Profile</h2>
          <p className="text-sm text-gray-400 mt-1">Manage your personal information</p>
        </div>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Edit Profile
          </button>
        ) : (
          <div className="flex gap-3">
            <button
              onClick={handleCancel}
              className="px-4 py-2 border border-gray-700 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveProfile}
              disabled={isSaving}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium disabled:opacity-50 transition-colors"
            >
              {isSaving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        )}
      </div>

      {/* Profile Tabs */}
      <div className="border-b border-gray-800 bg-gray-900/50">
        <nav className="flex">
          <button
            onClick={() => setActiveSection('personal')}
            className={`px-6 py-3 text-sm font-medium ${
              activeSection === 'personal'
                ? 'text-blue-400 border-b-2 border-blue-500 bg-[#1a1a1a]'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            Personal Info
          </button>
          {user?.userType === 'MEDICAL_FACILITY' && (
            <button
              onClick={() => setActiveSection('hospital')}
              className={`px-6 py-3 text-sm font-medium ${
                activeSection === 'hospital'
                  ? 'text-blue-400 border-b-2 border-blue-500 bg-[#1a1a1a]'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              Hospital Info
            </button>
          )}
          <button
            onClick={() => setActiveSection('password')}
            className={`px-6 py-3 text-sm font-medium ${
              activeSection === 'password'
                ? 'text-blue-400 border-b-2 border-blue-500 bg-[#1a1a1a]'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            Change Password
          </button>
        </nav>
      </div>

      {/* Profile Content */}
      <div className="p-6">
        {authLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader className="w-6 h-6 animate-spin text-blue-500" />
            <span className="ml-3 text-gray-400">Loading profile...</span>
          </div>
        ) : !user ? (
          <div className="text-center py-12">
            <p className="text-gray-400">Please log in to view your profile</p>
          </div>
        ) : activeSection === 'personal' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
              <input
                type="text"
                name="fullname"
                value={profile.fullname}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`w-full bg-transparent border rounded-lg px-4 py-2 text-white ${
                  isEditing ? 'border-gray-700' : 'border-none'
                } focus:outline-none focus:ring-1 focus:ring-blue-500`}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`w-full bg-transparent border rounded-lg px-4 py-2 text-white ${
                  isEditing ? 'border-gray-700' : 'border-none'
                } focus:outline-none focus:ring-1 focus:ring-blue-500`}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={profile.phone}
                onChange={handleInputChange}
                disabled={!isEditing}
                placeholder="+1234567890"
                className={`w-full bg-transparent border rounded-lg px-4 py-2 text-white ${
                  isEditing ? 'border-gray-700' : 'border-none'
                } focus:outline-none focus:ring-1 focus:ring-blue-500`}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Hospital ID</label>
              <input
                type="text"
                name="hospitalId"
                value={profile.hospitalId}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`w-full bg-transparent border rounded-lg px-4 py-2 text-white ${
                  isEditing ? 'border-gray-700' : 'border-none'
                } focus:outline-none focus:ring-1 focus:ring-blue-500`}
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">Address</label>
              <textarea
                name="address"
                rows={3}
                value={profile.address}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`w-full bg-transparent border rounded-lg px-4 py-2 text-white ${
                  isEditing ? 'border-gray-700' : 'border-none'
                } focus:outline-none focus:ring-1 focus:ring-blue-500`}
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">About</label>
              <textarea
                name="about"
                rows={4}
                value={profile.about}
                onChange={handleInputChange}
                disabled={!isEditing}
                placeholder="Tell us about yourself..."
                className={`w-full bg-transparent border rounded-lg px-4 py-2 text-white ${
                  isEditing ? 'border-gray-700' : 'border-none'
                } focus:outline-none focus:ring-1 focus:ring-blue-500`}
              />
            </div>
            <div className="md:col-span-2 pt-4 border-t border-gray-800">
              <label className="block text-sm font-medium text-gray-300 mb-2">Connected Wallet</label>
              <div className="flex items-center gap-3">
                <div className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-lg font-mono text-sm">
                  {address ? `${address.substring(0, 8)}...${address.substring(address.length - 6)}` : 'No wallet connected'}
                </div>
                {user.userType && (
                  <span className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full">
                    {user.userType === 'USER' ? 'User Account' : 'Medical Facility'}
                  </span>
                )}
              </div>
            </div>
          </div>
        ) : activeSection === 'hospital' && user.userType === 'MEDICAL_FACILITY' && user.hospital ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Facility Name</label>
              <div className="text-white">{user.hospital.facilityName}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Facility ID</label>
              <div className="text-white">{user.hospital.facilityId}</div>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">Address</label>
              <div className="text-white">
                {user.hospital.address}, {user.hospital.city}, {user.hospital.state} {user.hospital.zip}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
              <div className="text-white">{user.hospital.telephone}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Hospital Type</label>
              <div className="text-white">{user.hospital.hospitalType}</div>
            </div>
          </div>
        ) : activeSection === 'password' ? (
          <div className="max-w-md">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Current Password</label>
                <input
                  type="password"
                  name="currentPassword"
                  value={passwordData.currentPassword}
                  onChange={handlePasswordChange}
                  className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter your current password"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">New Password</label>
                <input
                  type="password"
                  name="newPassword"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                  className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter your new password"
                  minLength={6}
                />
                <p className="mt-1 text-xs text-gray-500">Password must be at least 6 characters long</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Confirm New Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={passwordData.confirmPassword}
                  onChange={handlePasswordChange}
                  className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Confirm your new password"
                  minLength={6}
                />
              </div>
              <div className="flex justify-end">
                <button
                  onClick={handleChangePassword}
                  disabled={isChangingPassword || !passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isChangingPassword ? 'Changing Password...' : 'Change Password'}
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

