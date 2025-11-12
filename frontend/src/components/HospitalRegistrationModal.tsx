'use client';

import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { useAuth } from '@/app/contexts/use-auth';
import { hospitalService, RegisterHospitalRequest, RegisteredHospital } from '@/lib/services/hospital';
import { toast } from 'sonner';
import { X, Building2, CheckCircle, Shield, ShieldCheck } from 'lucide-react';
import HospitalVerificationModal from './HospitalVerificationModal';

interface HospitalRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

const COMMON_SPECIALTIES = [
  'IVF',
  'ICSI',
  'Egg Donation',
  'Sperm Donation',
  'Surrogacy',
  'IUI',
  'Fertility Testing',
  'Genetic Testing',
  'Fertility Preservation',
  'Egg Freezing',
  'Embryo Transfer',
  'Reproductive Surgery',
];

export default function HospitalRegistrationModal({
  isOpen,
  onClose,
  onSuccess,
}: HospitalRegistrationModalProps) {
  const { user } = useAuth();
  const { address } = useAccount();
  const [formData, setFormData] = useState<RegisterHospitalRequest>({
    name: '',
    location: '',
    rating: 4.0,
    specialties: [],
    imageUrl: '',
    walletAddress: address || '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [myHospital, setMyHospital] = useState<RegisteredHospital | null>(null);
  const [isLoadingHospital, setIsLoadingHospital] = useState(false);
  const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);

  // Update wallet address when account changes
  useEffect(() => {
    if (address) {
      setFormData(prev => ({ ...prev, walletAddress: address }));
    }
  }, [address]);

  // Check if user is MEDICAL_FACILITY
  useEffect(() => {
    if (user && user.userType !== 'MEDICAL_FACILITY') {
      toast.error('Access Denied', {
        description: 'Only medical facilities can register hospitals',
      });
      onClose();
    }
  }, [user, onClose]);

  // Load existing hospital when modal opens
  useEffect(() => {
    if (isOpen && user?.userType === 'MEDICAL_FACILITY') {
      loadMyHospital();
    } else if (!isOpen) {
      // Reset form when modal closes
      setFormData({
        name: '',
        location: '',
        rating: 4.0,
        specialties: [],
        imageUrl: '',
        walletAddress: address || '',
      });
      setSelectedSpecialty('');
      setMyHospital(null);
      setIsVerificationModalOpen(false);
    }
  }, [isOpen, user, address]);

  const handleVerificationSuccess = async () => {
    // Reload hospital data to get updated verification status
    await loadMyHospital();
    toast.success('Verification completed successfully');
  };

  const loadMyHospital = async () => {
    setIsLoadingHospital(true);
    try {
      const hospital = await hospitalService.getMyHospital();
      setMyHospital(hospital);
      if (hospital) {
        // Pre-fill form with existing hospital data
        setFormData({
          name: hospital.name,
          location: hospital.location,
          rating: hospital.rating,
          specialties: hospital.specialties,
          imageUrl: hospital.imageUrl,
          walletAddress: hospital.walletAddress,
        });
      }
    } catch (error) {
      console.error('Error loading hospital:', error);
    } finally {
      setIsLoadingHospital(false);
    }
  };

  if (!isOpen) return null;

  // Don't show modal if user is not a medical facility
  if (!user || user.userType !== 'MEDICAL_FACILITY') {
    return null;
  }

  // Show existing hospital info if already registered
  if (isLoadingHospital) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl p-6 w-full max-w-md text-center">
          <div className="text-gray-500">Loading hospital information...</div>
        </div>
      </div>
    );
  }

  if (myHospital) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl p-6 w-full max-w-2xl shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">

              <h2 className="text-xl font-bold text-gray-900">Hospital Already Registered</h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-green-800">
                You have already registered a hospital. Here are the details:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Hospital Name</label>
                <div className="mt-1 text-sm text-gray-900 font-semibold">{myHospital.name}</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <div className="mt-1 text-sm text-gray-900">{myHospital.location}</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Rating</label>
                <div className="mt-1 text-sm text-gray-900">{myHospital.rating.toFixed(1)}</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Verification Status</label>
                <div className="mt-1 flex items-center gap-2">
                  {myHospital.isVerified ? (
                    <>
                      <ShieldCheck className="h-5 w-5 text-green-600" />
                      <span className="text-sm text-green-700 font-semibold">Verified</span>
                      {myHospital.verificationDate && (
                        <span className="text-xs text-gray-500">
                          ({new Date(myHospital.verificationDate).toLocaleDateString()})
                        </span>
                      )}
                    </>
                  ) : (
                    <>
                      <Shield className="h-5 w-5 text-gray-400" />
                      <span className="text-sm text-gray-600">Not Verified</span>
                    </>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Wallet Address</label>
                <div className="mt-1 text-sm text-gray-900 font-mono">{myHospital.walletAddress}</div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Specialties</label>
                <div className="flex flex-wrap gap-2">
                  {myHospital.specialties.map(specialty => (
                    <span
                      key={specialty}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
              {myHospital.imageUrl && (
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Image</label>
                  <img
                    src={myHospital.imageUrl}
                    alt={myHospital.name}
                    className="h-48 w-full object-cover rounded-lg border border-gray-200"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            {!myHospital.isVerified && (
              <button
                onClick={() => setIsVerificationModalOpen(true)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2 w-full justify-center"
              >
                Verify Hospital
              </button>
            )}
          </div>
        </div>

        {/* Verification Modal */}
        <HospitalVerificationModal
          isOpen={isVerificationModalOpen}
          onClose={() => setIsVerificationModalOpen(false)}
          onSuccess={handleVerificationSuccess}
          hospitalId={myHospital.id}
        />
      </div>
    );
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseFloat(value) || 0 : value,
    }));
  };

  const handleAddSpecialty = () => {
    if (selectedSpecialty && !formData.specialties.includes(selectedSpecialty)) {
      setFormData(prev => ({
        ...prev,
        specialties: [...prev.specialties, selectedSpecialty],
      }));
      setSelectedSpecialty('');
    }
  };

  const handleRemoveSpecialty = (specialty: string) => {
    setFormData(prev => ({
      ...prev,
      specialties: prev.specialties.filter(s => s !== specialty),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!address) {
      toast.error('Wallet Required', {
        description: 'Please connect your wallet to register a hospital',
      });
      return;
    }

    if (formData.specialties.length === 0) {
      toast.error('Specialties Required', {
        description: 'Please add at least one specialty',
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const registeredHospital = await hospitalService.registerHospital({
        ...formData,
        walletAddress: address,
      });
      toast.success('Hospital registered successfully');

      // Reload hospital data
      await loadMyHospital();

      // Optionally open verification modal after registration
      // setIsVerificationModalOpen(true);

      onSuccess?.();
      // Don't close modal immediately - let user see success and optionally verify
      // onClose();
      // Reset form
      setFormData({
        name: '',
        location: '',
        rating: 4.0,
        specialties: [],
        imageUrl: '',
        walletAddress: address,
      });
    } catch (error: any) {
      console.error('Registration error:', error);
      toast.error('Registration failed', {
        description: error.message || 'Please check your information and try again',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
              <Building2 className="h-5 w-5 text-blue-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Register Hospital</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
            <div className="md:col-span-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Hospital Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="e.g., Genesis Fertility Institute"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location *
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="e.g., Boston, MA"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
                Rating *
              </label>
              <input
                type="number"
                id="rating"
                name="rating"
                min="0"
                max="5"
                step="0.1"
                value={formData.rating}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <p className="mt-1 text-xs text-gray-500">Rating from 0.0 to 5.0</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Wallet Address
              </label>
              <input
                type="text"
                value={address || 'Not connected'}
                disabled
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 font-mono text-sm"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
                Image URL
              </label>
              <input
                type="url"
                id="imageUrl"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleInputChange}
                placeholder="https://images.unsplash.com/photo-..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {formData.imageUrl && (
                <div className="mt-2">
                  <img
                    src={formData.imageUrl}
                    alt="Preview"
                    className="h-32 w-full object-cover rounded-lg border border-gray-200"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Specialties *
              </label>
              <div className="flex gap-2 mb-2">
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select a specialty</option>
                  {COMMON_SPECIALTIES.filter(s => !formData.specialties.includes(s)).map(specialty => (
                    <option key={specialty} value={specialty}>{specialty}</option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={handleAddSpecialty}
                  disabled={!selectedSpecialty}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Add
                </button>
              </div>
              {formData.specialties.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {formData.specialties.map(specialty => (
                    <span
                      key={specialty}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                      {specialty}
                      <button
                        type="button"
                        onClick={() => handleRemoveSpecialty(specialty)}
                        className="hover:text-blue-900"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
              {formData.specialties.length === 0 && (
                <p className="text-xs text-gray-500 mt-1">Add at least one specialty</p>
              )}
            </div>
          </div>

          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !address}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Registering...' : 'Register Hospital'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

