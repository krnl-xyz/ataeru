'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';
import DonorRequestModal from '@/components/DonorRequestModal';
import HospitalVerificationModal from '@/components/HospitalVerificationModal';
import { useAccount, useReadContract } from 'wagmi';
import { entryPointABI, entryPointAddress } from '@/contract/web3';
import { hospitalRequestABI } from '@/contract/web3';
import { hospitalService, RegisteredHospital } from '@/lib/services/hospital';
import { useAuth } from '@/app/contexts/use-auth';
import { toast } from 'sonner';
import { Shield, ShieldCheck, Building2, MapPin, Star, X, Loader2 } from 'lucide-react';


interface DonorRequest {
  donorType: number;
  rules: string;
  date: bigint;
  time: bigint;
  maxDonors: bigint;
  minAmontpayment: bigint;
  maxAmountPayment: bigint;
  status: number;
  requestDescription: string;
  isActive: boolean;
}

interface HospitalInfo {
  about: string;
  contact: string;
  email: string;
  hospitalAddress: string;
  location: string;
  witnessHash: string;
  requests: string;
  name: string;
}
// This component is shown when hospital is not verified
// function VerificationRequired() {
//   const { setIsHospitalVerified } = useAuth();
//   const { address: account } = useAccount();
//   const { data: hospitalRequest } = useReadContract({
//     address: contractAddresses.hospitalRequestContractAddress as `0x${string}`,
//     account: account as `0x${string}`,
//     abi: hospitalRequestABI,
//     functionName: 'getRequest',
//     args: ["1"],
//   });
//   console.log(hospitalRequest);



//   const handleVerifyNow = () => {
//     // This would normally be an API call or verification process
//     // For demo purposes, we'll just set the verification status to true
//     setIsHospitalVerified(true);
//     localStorage.setItem('isHospitalVerified', 'true');
//   };

//   return (
//     <div className="max-w-3xl mx-auto text-center py-16 px-4">
//       <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100">
//         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-600">
//           <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
//           <line x1="12" y1="9" x2="12" y2="13"></line>
//           <line x1="12" y1="17" x2="12.01" y2="17"></line>
//         </svg>
//       </div>
//       <h2 className="text-2xl font-bold text-gray-900 mb-3">Verification Required</h2>
//       <p className="text-gray-600 mb-6">
//         {`Your hospital account is currently pending verification. Once verified, 
//         you'll be able to access all features and services.`}
//       </p>
//       <div className="bg-blue-50 rounded-xl p-6 mb-8 max-w-lg mx-auto">
//         <h3 className="font-medium text-gray-900 mb-2">Verification Process:</h3>
//         <ol className="text-left text-gray-600 space-y-2">
//           <li className="flex items-start gap-2">
//             <span className="text-blue-600 font-bold">1.</span>
//             <span>Our team is reviewing your submitted documents</span>
//           </li>
//           <li className="flex items-start gap-2">
//             <span className="text-blue-600 font-bold">2.</span>
//             <span>We may contact you for additional information</span>
//           </li>
//           <li className="flex items-start gap-2">
//             <span className="text-blue-600 font-bold">3.</span>
//             <span>{`Once approved, you'll receive a confirmation email`}</span>
//           </li>
//         </ol>
//       </div>
//       <div className="flex gap-4 justify-center">
//         <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
//           Contact Support
//         </button>
//         <button
//           onClick={handleVerifyNow}
//           className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
//         >
//           Verify Now (Demo)
//         </button>
//       </div>
//     </div>
//   );
// }

export default function HospitalDashboard() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isDonorRequestModalOpen, setIsDonorRequestModalOpen] = useState(false);
  const [donorRequests, setDonorRequests] = useState<DonorRequest[]>([]);
  const { address: account } = useAccount();
  const [hospital, setHospital] = useState<RegisteredHospital | null>(null);
  const [isLoadingHospital, setIsLoadingHospital] = useState(true);
  const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editFormData, setEditFormData] = useState<Partial<RegisteredHospital>>({});
  const [isSaving, setIsSaving] = useState(false);

  const { data: hospitalInfo } = useReadContract({
    abi: entryPointABI,
    address: entryPointAddress as `0x${string}`,
    account: account as `0x${string}`,
    functionName: 'gethospitalinfo',
    args: [account],
  })
  console.log(hospitalInfo);
  // Fetch donor requests
  const { data: totalId } = useReadContract({
    address: (hospitalInfo as HospitalInfo)?.requests as `0x${string}`,
    account: account as `0x${string}`,
    abi: hospitalRequestABI,
    functionName: 'id',
  });
  console.log(totalId);
  const { data: currentRequest } = useReadContract({
    address: (hospitalInfo as HospitalInfo)?.requests as `0x${string}`,
    account: account as `0x${string}`,
    abi: hospitalRequestABI,
    functionName: 'getRequest',
    args: [totalId],
  });

  useEffect(() => {
    setDonorRequests((prev) => [...prev, currentRequest as DonorRequest]);
  }, [currentRequest]);

  // Load hospital data
  useEffect(() => {
    if (user?.userType === 'MEDICAL_FACILITY') {
      loadHospital();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const loadHospital = async () => {
    setIsLoadingHospital(true);
    try {
      const hospitalData = await hospitalService.getMyHospital();
      setHospital(hospitalData);
      if (hospitalData) {
        setEditFormData({
          name: hospitalData.name,
          location: hospitalData.location,
          rating: hospitalData.rating,
          specialties: hospitalData.specialties,
          imageUrl: hospitalData.imageUrl,
        });
      }
    } catch (error: any) {
      console.error('Error loading hospital:', error);
      toast.error('Failed to load hospital data', {
        description: error.message || 'Please try again later',
      });
    } finally {
      setIsLoadingHospital(false);
    }
  };

  const handleSaveChanges = async () => {
    if (!hospital) return;

    setIsSaving(true);
    try {
      const updated = await hospitalService.updateHospital(hospital.id, {
        name: editFormData.name,
        location: editFormData.location,
        rating: editFormData.rating,
        specialties: editFormData.specialties,
        imageUrl: editFormData.imageUrl,
      });
      setHospital(updated);
      setIsEditing(false);
      toast.success('Hospital details updated successfully');
    } catch (error: any) {
      console.error('Error updating hospital:', error);
      toast.error('Failed to update hospital details', {
        description: error.message || 'Please try again',
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleVerificationSuccess = async () => {
    await loadHospital();
    toast.success('Verification completed successfully');
  };

  console.log(currentRequest);
  // const { data: currentRequest } = useReadContract({
  //   address: contractAddresses.hospitalRequestContractAddress as `0x${string}`,
  //   account: account as `0x${string}`,
  //   abi: hospitalRequestABI,
  //   functionName: 'getRequest',
  //   args: [currentId],
  // });

  // console.log(donorRequests);

  const formatDate = (timestamp: bigint) => {
    return new Date(Number(timestamp) * 1000).toLocaleDateString();
  };

  // Helper function to get donor type label
  const getDonorTypeLabel = (type: number) => {
    switch (type) {
      case 0: return 'Sperm Donor';
      case 1: return 'Egg Donor';
      case 2: return 'Surrogate';
      default: return 'Unknown';
    }
  };

  // Helper function to get status label
  const getStatusLabel = (status: number) => {
    switch (status) {
      case 0: return 'Pending';
      case 1: return 'Accepted';
      case 2: return 'Rejected';
      case 3: return 'Completed';
      default: return 'Unknown';
    }
  };

  // For demonstration purposes - this would normally come from a database
  const donorStats = {
    total: 125,
    active: 87,
    pending: 12,
    new: 8
  };

  const customerStats = {
    total: 310,
    active: 178,
    new: 24
  };

  const recentDonations = [
    { id: 'DON-2025-042', donor: 'John D.', date: 'April 24, 2025', status: 'Completed' },
    { id: 'DON-2025-041', donor: 'Michael R.', date: 'April 22, 2025', status: 'Processing' },
    { id: 'DON-2025-039', donor: 'Robert K.', date: 'April 20, 2025', status: 'Completed' },
    { id: 'DON-2025-038', donor: 'David S.', date: 'April 19, 2025', status: 'Completed' },
  ];

  const recentCustomers = [
    { id: 'CUS-2025-088', name: 'Sarah & James M.', date: 'April 23, 2025', treatment: 'IVF' },
    { id: 'CUS-2025-087', name: 'Lisa T.', date: 'April 22, 2025', treatment: 'Donor Sperm' },
    { id: 'CUS-2025-086', name: 'Rachel & Emma P.', date: 'April 21, 2025', treatment: 'Surrogacy' },
    { id: 'CUS-2025-084', name: 'Thomas B.', date: 'April 20, 2025', treatment: 'Donor Sperm' },
  ];

  // This would normally be a real function to add a new donor to the database
  const handleAddDonor = () => {
    setIsDonorRequestModalOpen(true);
  };

  // if (!isHospitalVerified) {
  //   return (
  //     <div className="min-h-screen bg-white text-gray-800 flex flex-col">
  //       <Header />
  //       <main className="flex-grow">
  //         <VerificationRequired />
  //       </main>
  //       <Footer />
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Hospital Dashboard</h1>
              {hospital && (
                <p className="text-sm text-gray-500 mt-1">{hospital.name}</p>
              )}
            </div>
            <div className="flex items-center gap-2">
              {hospital?.isVerified ? (
                <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full flex items-center gap-1">
                  <ShieldCheck className="h-3 w-3" />
                  Verified
                </span>
              ) : (
                <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full flex items-center gap-1">
                  <Shield className="h-3 w-3" />
                  Not Verified
                </span>
              )}
              {hospital?.imageUrl ? (
                <Image
                  src={hospital.imageUrl}
                  alt={hospital.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-blue-600" />
                </div>
              )}
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-gray-200 mb-8">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`px-4 py-2 font-medium text-sm ${activeTab === 'dashboard' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('donors')}
              className={`px-4 py-2 font-medium text-sm ${activeTab === 'donors' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Donors
            </button>
            <button
              onClick={() => setActiveTab('customers')}
              className={`px-4 py-2 font-medium text-sm ${activeTab === 'customers' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Customers
            </button>
            <button
              onClick={() => setActiveTab('treatments')}
              className={`px-4 py-2 font-medium text-sm ${activeTab === 'treatments' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Treatments
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`px-4 py-2 font-medium text-sm ${activeTab === 'settings' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Settings
            </button>
          </div>

          {activeTab === 'dashboard' && (
            <div>
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Total Donors</h3>
                  <p className="text-2xl font-bold text-gray-900">{donorStats.total}</p>
                  <div className="mt-2 flex items-center text-sm">
                    <span className="text-green-600 font-medium">+{donorStats.new} new</span>
                    <span className="text-gray-500 ml-2">this week</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Active Donors</h3>
                  <p className="text-2xl font-bold text-gray-900">{donorStats.active}</p>
                  <div className="mt-2 flex items-center text-sm">
                    <span className="text-yellow-600 font-medium">{donorStats.pending} pending</span>
                    <span className="text-gray-500 ml-2">verification</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Total Customers</h3>
                  <p className="text-2xl font-bold text-gray-900">{customerStats.total}</p>
                  <div className="mt-2 flex items-center text-sm">
                    <span className="text-green-600 font-medium">+{customerStats.new} new</span>
                    <span className="text-gray-500 ml-2">this month</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Active Customers</h3>
                  <p className="text-2xl font-bold text-gray-900">{customerStats.active}</p>
                  <div className="mt-2 flex items-center text-sm">
                    <span className="text-blue-600 font-medium">{Math.round(customerStats.active / customerStats.total * 100)}%</span>
                    <span className="text-gray-500 ml-2">activity rate</span>
                  </div>
                </div>
              </div>

              {/* Recent Activity Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Donations */}
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                    <h3 className="font-medium text-gray-900">Recent Donations</h3>
                    <button className="text-blue-600 text-sm font-medium hover:text-blue-700">View All</button>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {recentDonations.map(donation => (
                      <div key={donation.id} className="px-6 py-4 flex justify-between items-center">
                        <div>
                          <p className="font-medium text-gray-900">{donation.donor}</p>
                          <p className="text-sm text-gray-500">{donation.date}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`text-xs px-2 py-1 rounded-full ${donation.status === 'Completed'
                            ? 'bg-green-100 text-green-600'
                            : 'bg-yellow-100 text-yellow-600'
                            }`}>
                            {donation.status}
                          </span>
                          <button className="text-gray-400 hover:text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="1"></circle>
                              <circle cx="19" cy="12" r="1"></circle>
                              <circle cx="5" cy="12" r="1"></circle>
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
                    <button
                      onClick={handleAddDonor}
                      className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                      Add New Donor
                    </button>
                  </div>
                </div>

                {/* Recent Customers */}
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                    <h3 className="font-medium text-gray-900">Recent Customers</h3>
                    <button className="text-blue-600 text-sm font-medium hover:text-blue-700">View All</button>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {recentCustomers.map(customer => (
                      <div key={customer.id} className="px-6 py-4 flex justify-between items-center">
                        <div>
                          <p className="font-medium text-gray-900">{customer.name}</p>
                          <p className="text-sm text-gray-500">{customer.date}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-600">
                            {customer.treatment}
                          </span>
                          <button className="text-gray-400 hover:text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="1"></circle>
                              <circle cx="19" cy="12" r="1"></circle>
                              <circle cx="5" cy="12" r="1"></circle>
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
                    <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                      Add New Customer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'donors' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900">Donor Requests</h2>
                <button
                  onClick={() => setIsDonorRequestModalOpen(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                  New Request
                </button>
              </div>

              {/* Active Requests */}
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <h3 className="font-medium text-gray-900">Active Requests</h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {donorRequests && donorRequests
                    .filter(request => request?.isActive)
                    .map((request, index) => (
                      <div key={index} className="px-6 py-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-gray-900">{getDonorTypeLabel(request.donorType)}</h4>
                            <p className="text-sm text-gray-500 mt-1">{request.requestDescription}</p>
                            <div className="mt-2 flex flex-wrap gap-2">
                              <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-600">
                                Max Donors: {request.maxDonors.toString()}
                              </span>
                              <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-600">
                                Amount: {request.minAmontpayment.toString()} - {request.maxAmountPayment.toString()} ETH
                              </span>
                              <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-600">
                                Date: {formatDate(request.date)}
                              </span>
                            </div>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded-full ${request.status === 0 ? 'bg-yellow-100 text-yellow-600' :
                            request.status === 1 ? 'bg-green-100 text-green-600' :
                              request.status === 2 ? 'bg-red-100 text-red-600' :
                                'bg-blue-100 text-blue-600'
                            }`}>
                            {getStatusLabel(request.status)}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Inactive Requests */}
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <h3 className="font-medium text-gray-900">Inactive Requests</h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {donorRequests
                    .filter(request => request?.isActive)
                    .map((request, index) => (
                      <div key={index} className="px-6 py-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-gray-900">{getDonorTypeLabel(request.donorType)}</h4>
                            <p className="text-sm text-gray-500 mt-1">{request.requestDescription}</p>
                            <div className="mt-2 flex flex-wrap gap-2">
                              <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-600">
                                Max Donors: {request.maxDonors.toString()}
                              </span>
                              <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-600">
                                Amount: {request.minAmontpayment.toString()} - {request.maxAmountPayment.toString()} ETH
                              </span>
                              <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-600">
                                Date: {formatDate(request.date)}
                              </span>
                            </div>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded-full ${request.status === 0 ? 'bg-yellow-100 text-yellow-600' :
                            request.status === 1 ? 'bg-green-100 text-green-600' :
                              request.status === 2 ? 'bg-red-100 text-red-600' :
                                'bg-blue-100 text-blue-600'
                            }`}>
                            {getStatusLabel(request.status)}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              {isLoadingHospital ? (
                <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
                  <Loader2 className="h-8 w-8 animate-spin text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-600">Loading hospital information...</p>
                </div>
              ) : !hospital ? (
                <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
                  <Building2 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No Hospital Registered</h3>
                  <p className="text-gray-600 mb-6">
                    Please register your hospital first to access settings.
                  </p>
                </div>
              ) : (
                <div className="bg-white rounded-xl overflow-hidden">
                  {/* Verification Status */}
                  <div className="rounded-lg border bg-gray-200 mx-4 px-4 py-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">Verification Status</h3>
                        <p className="text-sm text-gray-600">
                          {hospital.isVerified
                            ? 'Your hospital has been verified and is trusted by patients.'
                            : 'Verify your hospital to build trust and credibility with patients.'}
                        </p>
                        {hospital.verificationDate && (
                          <p className="text-xs text-gray-500 mt-1">
                            Verified on {new Date(hospital.verificationDate).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                      {!hospital.isVerified && (
                        <button
                          onClick={() => setIsVerificationModalOpen(true)}
                          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2"
                        >
                          Verify Now
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="px-6 py-4 flex justify-between items-center">
                    <div></div>
                    {!isEditing ? (
                      <button
                        onClick={() => setIsEditing(true)}
                        className="px-4 py-2 text-black underline rounded-lg text-sm"
                      >
                        Edit Details
                      </button>
                    ) : (
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setIsEditing(false);
                            setEditFormData({
                              name: hospital.name,
                              location: hospital.location,
                              rating: hospital.rating,
                              specialties: hospital.specialties,
                              imageUrl: hospital.imageUrl,
                            });
                          }}
                          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleSaveChanges}
                          disabled={isSaving}
                          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm disabled:opacity-50"
                        >
                          {isSaving ? 'Saving...' : 'Save Changes'}
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="p-6 space-y-6">

                    <div className="md:col-span-2">

                      {hospital.imageUrl && (
                        <div className="mb-2">
                          <Image
                            src={hospital.imageUrl}
                            alt={hospital.name}
                            width={100}
                            height={100}
                            className="rounded-lg border border-gray-200 w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Image URL
                      </label>
                      {isEditing ? (
                        <input
                          type="url"
                          value={editFormData.imageUrl || ''}
                          onChange={(e) => setEditFormData({ ...editFormData, imageUrl: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="https://..."
                        />
                      ) : (
                        <div className="text-gray-900 text-sm break-all">{hospital.imageUrl || 'No image URL set'}</div>
                      )}
                    </div>
                    {/* Hospital Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Hospital Name
                        </label>
                        {isEditing ? (
                          <input
                            type="text"
                            value={editFormData.name || ''}
                            onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        ) : (
                          <div className="text-gray-900 font-medium">{hospital.name}</div>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Location
                        </label>
                        {isEditing ? (
                          <input
                            type="text"
                            value={editFormData.location || ''}
                            onChange={(e) => setEditFormData({ ...editFormData, location: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="e.g., Boston, MA"
                          />
                        ) : (
                          <div className="text-gray-900 flex items-center gap-1">
                            {hospital.location}
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Rating
                        </label>
                        {isEditing ? (
                          <input
                            type="number"
                            min="0"
                            max="5"
                            step="0.1"
                            value={editFormData.rating || 0}
                            onChange={(e) => setEditFormData({ ...editFormData, rating: parseFloat(e.target.value) || 0 })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        ) : (
                          <div className="text-gray-900 flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            {hospital.rating.toFixed(1)} / 5.0
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Wallet Address
                        </label>
                        <div className="text-gray-900 font-mono text-sm">{hospital.walletAddress}</div>
                      </div>


                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Specialties
                        </label>
                        {isEditing ? (
                          <div className="space-y-2">
                            <div className="flex flex-wrap gap-2">
                              {editFormData.specialties?.map((specialty, index) => (
                                <span
                                  key={index}
                                  className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                                >
                                  {specialty}
                                  <button
                                    onClick={() => {
                                      const newSpecialties = editFormData.specialties?.filter((_, i) => i !== index) || [];
                                      setEditFormData({ ...editFormData, specialties: newSpecialties });
                                    }}
                                    className="hover:text-blue-900"
                                  >
                                    <X className="h-3 w-3" />
                                  </button>
                                </span>
                              ))}
                            </div>
                            <input
                              type="text"
                              placeholder="Add specialty and press Enter"
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                  e.preventDefault();
                                  const value = e.currentTarget.value.trim();
                                  if (value && !editFormData.specialties?.includes(value)) {
                                    setEditFormData({
                                      ...editFormData,
                                      specialties: [...(editFormData.specialties || []), value],
                                    });
                                    e.currentTarget.value = '';
                                  }
                                }
                              }}
                            />
                          </div>
                        ) : (
                          <div className="flex flex-wrap gap-2">
                            {hospital.specialties.length > 0 ? (
                              hospital.specialties.map((specialty, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                                >
                                  {specialty}
                                </span>
                              ))
                            ) : (
                              <span className="text-gray-500 text-sm">No specialties listed</span>
                            )}
                          </div>
                        )}
                      </div>

                      <div className="md:col-span-2 pt-4 border-t border-gray-200">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-500">Created:</span>
                            <span className="ml-2 text-gray-900">
                              {new Date(hospital.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-500">Last Updated:</span>
                            <span className="ml-2 text-gray-900">
                              {new Date(hospital.updatedAt).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab !== 'dashboard' && activeTab !== 'donors' && activeTab !== 'settings' && (
            <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Coming Soon</h3>
              <p className="text-gray-600 mb-6">
                The {activeTab} management section is currently under development.
              </p>
              <button
                onClick={() => setActiveTab('dashboard')}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Return to Dashboard
              </button>
            </div>
          )}
        </div>

        {/* Add the DonorRequestModal */}
        <DonorRequestModal
          isOpen={isDonorRequestModalOpen}
          onClose={() => setIsDonorRequestModalOpen(false)}
        />

        {/* Verification Modal */}
        {hospital && (
          <HospitalVerificationModal
            isOpen={isVerificationModalOpen}
            onClose={() => setIsVerificationModalOpen(false)}
            onSuccess={handleVerificationSuccess}
            hospitalId={hospital.id}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}