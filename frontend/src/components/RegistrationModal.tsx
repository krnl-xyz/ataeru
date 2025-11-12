'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useAuth } from '@/app/contexts/use-auth';

interface RegistrationFormData {
  fullname: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  about: string;
  hospitalId: string;
  userType: 'USER' | 'MEDICAL_FACILITY';
}

export default function RegistrationModal() {
  const { isRegistrationModalOpen, closeRegistrationModal, signup, isLoading } = useAuth();
  const [selectedType, setSelectedType] = useState<'user' | 'hospital' | null>(null);
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullname: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    about: '',
    hospitalId: '10001',
    userType: 'USER',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await signup({
        ...formData,
        userType: selectedType === 'user' ? 'USER' : 'MEDICAL_FACILITY',
      });
      // Reset form
      setFormData({
        fullname: '',
        email: '',
        password: '',
        phone: '',
        address: '',
        about: '',
        hospitalId: '10001',
        userType: 'USER',
      });
      setSelectedType(null);
    } catch (error) {
      // Error is already handled in the auth context
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isRegistrationModalOpen) return null;

  if (!selectedType) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-[#1a1a1a] rounded-2xl p-6 w-full max-w-lg shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-foreground">Select Account Type</h2>
            <button onClick={closeRegistrationModal} className="text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button
              onClick={() => setSelectedType('user')}
              className="rounded-xl hover:border-blue-500 transition-all text-left group overflow-hidden bg-background"
            >
              <div className="relative aspect-[4/3] rounded-t-xl overflow-hidden bg-background">
                <Image
                  src="https://i.imgur.com/qXaBeHO.png"
                  alt="User Registration"
                  width={300}
                  height={225}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent"></div>
              </div>
              <div className="p-4 bg-[#1a1a1a] from-gray-50 to-blue-50 rounded-b-xl border border-t-0 border-gray-800 group-hover:border-blue-300">
                <h3 className="font-bold text-lg mb-2 text-foreground">Individual User</h3>
                <p className="text-gray-300 text-sm">
                  Access fertility services, find donors, or become a donor yourself.
                </p>
              </div>
            </button>

            <button
              onClick={() => setSelectedType('hospital')}
              className="rounded-xl hover:border-blue-500 transition-all text-left group overflow-hidden"
            >
              <div className="relative aspect-[4/3] rounded-t-xl overflow-hidden">
                <Image
                  src="https://i.imgur.com/IU8uOO8.png"
                  alt="Hospital Registration"
                  width={300}
                  height={225}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent"></div>
              </div>
              <div className="p-4 bg-[#1a1a1a] from-gray-50 to-blue-50 rounded-b-xl border border-t-0 border-gray-800 group-hover:border-blue-300">
                <h3 className="font-bold text-lg mb-2 text-foreground">Medical Facility</h3>
                <p className="text-gray-300 text-sm">
                  Offer fertility services to patients and manage donor programs.
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (isRegistrationModalOpen) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-[#0a0a0a] rounded-2xl p-6 w-full max-w-lg shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-foreground">
              {selectedType === 'user' ? 'User Registration' : 'Hospital Registration'}
            </h2>
            <button onClick={closeRegistrationModal} className="text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {selectedType === 'user' ? 'Full Name' : 'Facility Name'}
              </label>
              <input
                type="text"
                value={formData.fullname}
                placeholder={selectedType === 'user' ? "Enter your full name" : "Enter facility name"}
                onChange={(e) => setFormData(prev => ({ ...prev, fullname: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={formData.email}
                placeholder="Enter email address"
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={formData.password}
                placeholder="Enter password"
                onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
                minLength={6}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                value={formData.phone}
                placeholder="+1234567890"
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Hospital Id</label>
              <input
                type="text"
                value={formData.hospitalId}
                placeholder="10001"
                onChange={(e) => setFormData(prev => ({ ...prev, hospitalId: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <textarea
                value={formData.address}
                onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                placeholder={selectedType === 'user' ? "Enter your address" : "Enter facility address"}
                className="w-full px-3 py-2 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows={3}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">About</label>
              <textarea
                value={formData.about}
                onChange={(e) => setFormData(prev => ({ ...prev, about: e.target.value }))}
                placeholder={selectedType === 'user' ? "A short description about yourself" : "About the facility"}
                className="w-full px-3 py-2 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows={3}
                required
              />
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                disabled={isSubmitting || isLoading}
                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
              >
                {isSubmitting || isLoading ? 'Registering...' : 'Register'}
              </button>
              {/* <button
                type="button"
                onClick={() => setSelectedType(null)}
                className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50"
              >
                Back
              </button> */}
            </div>
          </form>
        </div>

      </div>
    );
  }
}