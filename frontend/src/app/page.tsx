'use client';

import { useState, useEffect } from 'react';
import { Search, Settings, HelpCircle, Plus, MessageSquare, Sparkles, FileText, LayoutDashboard, Users, Building2, Calendar, Image as ImageIcon, Upload, Link as LinkIcon, X, ChevronDown, ChevronLeft, ChevronRight, Menu, User, Bell, Shield, Globe, Loader, CheckCircle, ShieldCheck, MapPin, Star, Loader2 } from 'lucide-react';
import { format } from 'date-fns';
import { useAuth } from '@/app/contexts/use-auth';
import { useAccount, useReadContract } from 'wagmi';
import Image from 'next/image';
import { toast } from 'sonner';
import DonorRequestModal from '@/components/DonorRequestModal';
import HospitalVerificationModal from '@/components/HospitalVerificationModal';
import LoginModal from '@/components/LoginModal';
import RegistrationModal from '@/components/RegistrationModal';
import { entryPointABI, entryPointAddress, hospitalRequestABI } from '@/contract/web3';
import { hospitalService, RegisteredHospital } from '@/lib/services/hospital';
import { bookingService, Booking } from '@/lib/services/booking';
import SidebarUserDropdown from '@/components/app/SidebarUserDropdown';
import AppTabsNavigation from '@/components/app/AppTabsNavigation';
import ConsultationManager from '@/components/consultations/ConsultationManager';

export default function AppPage() {
  const { user, isLoading: authLoading, isAuthenticated, updateProfile, changePassword, openLoginModal } = useAuth();
  const { address } = useAccount();
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeView, setActiveView] = useState<'agents' | 'dashboard' | string>('agents');
  const [openAppTabs, setOpenAppTabs] = useState<string[]>([]); // Track open app tabs
  const [inputValue, setInputValue] = useState('');
  const [ideaDescription, setIdeaDescription] = useState('');
  const [explainerCount, setExplainerCount] = useState('1 (quick explainer)');
  const [language, setLanguage] = useState('English (English)');
  const [showBanner, setShowBanner] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Auto-collapsed by default
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [dashboardTab, setDashboardTab] = useState<'profile' | 'settings'>('profile');

  // Hospital Manager state
  const [hospitalManagerTab, setHospitalManagerTab] = useState('dashboard');
  const [isDonorRequestModalOpen, setIsDonorRequestModalOpen] = useState(false);
  const [donorRequests, setDonorRequests] = useState<any[]>([]);
  const [hospital, setHospital] = useState<RegisteredHospital | null>(null);
  const [isLoadingHospital, setIsLoadingHospital] = useState(true);
  const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);
  const [isEditingHospital, setIsEditingHospital] = useState(false);
  const [editFormData, setEditFormData] = useState<Partial<RegisteredHospital>>({});
  const [isSavingHospital, setIsSavingHospital] = useState(false);
  const [hospitalBookings, setHospitalBookings] = useState<any[]>([]);
  const [isLoadingBookings, setIsLoadingBookings] = useState(false);

  // Profile state
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

  // Settings state
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      sms: false,
      browser: true,
      appointments: true,
      marketing: false,
      updates: true,
    },
    privacy: {
      shareProfile: true,
      showDonationHistory: false,
      anonymizeData: true,
      allowResearch: false,
    },
    security: {
      twoFactorEnabled: false,
      loginNotifications: true,
      allowMultipleDevices: true,
      sessionTimeout: '4h' as '30m' | '1h' | '4h' | '1d' | 'never',
    },
    preferences: {
      theme: 'system' as 'light' | 'dark' | 'system',
      language: 'en' as 'en' | 'es' | 'fr' | 'zh',
      dateFormat: 'MM/DD/YYYY' as 'MM/DD/YYYY' | 'DD/MM/YYYY' | 'YYYY-MM-DD',
      timeZone: 'America/New_York',
    },
  });
  const [settingsTab, setSettingsTab] = useState<'notifications' | 'privacy' | 'security' | 'preferences'>('notifications');
  const [isSavingSettings, setIsSavingSettings] = useState(false);
  const [showSavedMessage, setShowSavedMessage] = useState(false);

  // Mock agents/apps list
  const agents = [
    { id: 'fertility-ai', name: 'AI Assistant', icon: Sparkles, description: 'AI-powered fertility guidance', color: 'bg-blue-500' },
    { id: 'hospital-manager', name: 'Hospital Manager', icon: Building2, description: 'Manage hospital operations', color: 'bg-green-500' },
    { id: 'consultations', name: 'Consultations', icon: Calendar, description: 'Book and manage consultations', color: 'bg-orange-500' },
    { id: 'patient-portal', name: 'Patient Portal', icon: Users, description: 'Patient management system', color: 'bg-purple-500' },
    { id: 'document-manager', name: 'Document Manager', icon: FileText, description: 'Medical records management', color: 'bg-pink-500' },
  ];

  // Hospital contract data - only fetch when hospital manager is active
  const shouldFetchHospitalData = activeView === 'hospital-manager' && !!address;
  const { data: hospitalInfo } = useReadContract({
    abi: entryPointABI,
    address: shouldFetchHospitalData ? (entryPointAddress as `0x${string}`) : undefined,
    account: address as `0x${string}`,
    functionName: 'gethospitalinfo',
    args: address ? [address] : undefined,
  });

  const { data: totalId } = useReadContract({
    address: shouldFetchHospitalData && hospitalInfo ? ((hospitalInfo as any)?.requests as `0x${string}`) : undefined,
    account: address as `0x${string}`,
    abi: hospitalRequestABI,
    functionName: 'id',
  });

  const { data: currentRequest } = useReadContract({
    address: shouldFetchHospitalData && hospitalInfo ? ((hospitalInfo as any)?.requests as `0x${string}`) : undefined,
    account: address as `0x${string}`,
    abi: hospitalRequestABI,
    functionName: 'getRequest',
    args: totalId !== undefined ? [totalId] : undefined,
  });

  // Handle app selection from sidebar
  const handleAppSelect = (appId: string) => {
    setSelectedAgent(appId);
    if (appId === 'hospital-manager') {
      // Load hospital data when hospital manager is opened
      if (user?.userType === 'MEDICAL_FACILITY') {
        loadHospital();
      }
    }
    // Add to open tabs if not already open
    if (!openAppTabs.includes(appId)) {
      setOpenAppTabs([...openAppTabs, appId]);
    }
    // Switch to the app view
    setActiveView(appId);
  };

  // Handle closing an app tab
  const handleCloseAppTab = (appId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenAppTabs(openAppTabs.filter(id => id !== appId));
    // If closing the active view, switch to Apps
    if (activeView === appId) {
      setActiveView('agents');
      setSelectedAgent(null);
    }
  };

  // Load hospital data
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

  // Load hospital when hospital manager is opened
  useEffect(() => {
    if (activeView === 'hospital-manager' && user?.userType === 'MEDICAL_FACILITY') {
      loadHospital();
      loadHospitalBookings();
    }
  }, [activeView, user]);

  // Load hospital bookings
  const loadHospitalBookings = async () => {
    setIsLoadingBookings(true);
    try {
      const bookings = await bookingService.getMyHospitalBookings();
      setHospitalBookings(bookings);
    } catch (error: any) {
      console.error('Error loading hospital bookings:', error);
      // If user doesn't own hospitals, this will fail - that's okay
      setHospitalBookings([]);
    } finally {
      setIsLoadingBookings(false);
    }
  };

  // Update donor requests when currentRequest changes
  useEffect(() => {
    if (currentRequest) {
      setDonorRequests((prev) => [...prev, currentRequest as any]);
    }
  }, [currentRequest]);

  const handleSaveHospitalChanges = async () => {
    if (!hospital) return;
    setIsSavingHospital(true);
    try {
      const updated = await hospitalService.updateHospital(hospital.id, {
        name: editFormData.name,
        location: editFormData.location,
        rating: editFormData.rating,
        specialties: editFormData.specialties,
        imageUrl: editFormData.imageUrl,
      });
      setHospital(updated);
      setIsEditingHospital(false);
      toast.success('Hospital details updated successfully');
    } catch (error: any) {
      console.error('Error updating hospital:', error);
      toast.error('Failed to update hospital details', {
        description: error.message || 'Please try again',
      });
    } finally {
      setIsSavingHospital(false);
    }
  };

  const handleVerificationSuccess = async () => {
    await loadHospital();
    toast.success('Verification completed successfully');
  };

  const formatDate = (timestamp: bigint) => {
    return new Date(Number(timestamp) * 1000).toLocaleDateString();
  };

  const getDonorTypeLabel = (type: number) => {
    switch (type) {
      case 0: return 'Sperm Donor';
      case 1: return 'Egg Donor';
      case 2: return 'Surrogate';
      default: return 'Unknown';
    }
  };

  const getStatusLabel = (status: number) => {
    switch (status) {
      case 0: return 'Pending';
      case 1: return 'Accepted';
      case 2: return 'Rejected';
      case 3: return 'Completed';
      default: return 'Unknown';
    }
  };

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

  const filteredAgents = agents.filter(agent =>
    agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    agent.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = () => {
    if (!ideaDescription.trim() && !inputValue.trim()) return;
    const message = ideaDescription.trim() || inputValue.trim();
    // Handle message sending logic here
    console.log('Sending message:', message);
    setIdeaDescription('');
    setInputValue('');
  };

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
      toast.error('Passwords do not match');
      return;
    }
    if (passwordData.newPassword.length < 6) {
      toast.error('Password must be at least 6 characters long');
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

  const handleNotificationChange = (field: keyof typeof settings.notifications) => {
    setSettings({
      ...settings,
      notifications: {
        ...settings.notifications,
        [field]: !settings.notifications[field],
      },
    });
  };

  const handlePrivacyChange = (field: keyof typeof settings.privacy) => {
    setSettings({
      ...settings,
      privacy: {
        ...settings.privacy,
        [field]: !settings.privacy[field],
      },
    });
  };

  const handleSecurityChange = (field: keyof typeof settings.security, value: boolean | string) => {
    setSettings({
      ...settings,
      security: {
        ...settings.security,
        [field]: value,
      },
    });
  };

  const handlePreferenceChange = (field: keyof typeof settings.preferences, value: string) => {
    setSettings({
      ...settings,
      preferences: {
        ...settings.preferences,
        [field]: value,
      } as typeof settings.preferences,
    });
  };

  const saveSettings = async () => {
    setIsSavingSettings(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSavingSettings(false);
    setShowSavedMessage(true);
    setTimeout(() => setShowSavedMessage(false), 3000);
  };

  return (
    <div className="h-screen flex overflow-hidden bg-[#0a0a0a] text-gray-100">
      {/* Left Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-16'} hidden md:flex transition-all duration-300 ease-in-out flex-shrink-0`}>
        <div className="flex flex-col w-full bg-[#0b0b0d] border-gray-800 relative">
          {/* Toggle Button */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="absolute -right-3 top-4 z-10 w-6 h-6 bg-[#1a1a1a] border border-gray-800 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
          >
            {isSidebarOpen ? (
              <ChevronLeft className="w-4 h-4 text-gray-400" />
            ) : (
              <ChevronRight className="w-4 h-4 text-gray-400" />
            )}
          </button>

          {/* Header */}
          {isSidebarOpen && (
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-900">
              <div className="flex items-center gap-2">
                <select
                  className="bg-transparent text-gray-300 text-sm font-medium border-none outline-none cursor-pointer"
                  value={selectedAgent || ''}
                  onChange={(e) => setSelectedAgent(e.target.value || null)}
                >
                  <option value="">Select App</option>
                  {agents.map(agent => (
                    <option key={agent.id} value={agent.id}>{agent.name}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-1.5 hover:bg-gray-800 rounded text-gray-400 hover:text-gray-200 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="p-1.5 hover:bg-gray-800 rounded text-gray-400 hover:text-gray-200 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {!isSidebarOpen && (
            <div className="px-2 py-3 border-b border-gray-800 flex justify-center">
              <Menu className="w-5 h-5 text-gray-400" />
            </div>
          )}

          {/* Search */}
          {isSidebarOpen ? (
            <div className="px-4 py-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search apps..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#0a0a0a] border border-gray-800 rounded-lg pl-9 pr-3 py-2 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
          ) : (
            <div className="px-2 py-3 border-b border-gray-800 flex justify-center">
              <button className="p-2 hover:bg-gray-800 rounded text-gray-400 hover:text-gray-200 transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* New Agent Button */}
          {isSidebarOpen ? (
            <div className="px-4 py-3">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 text-sm font-medium transition-colors">
                <Plus className="w-4 h-4" />
                New App
              </button>
            </div>
          ) : (
            <div className="px-2 py-3 flex justify-center">
              <button className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                <Plus className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Agents List */}
          <div className="flex-1 overflow-y-auto py-2">
            {isSidebarOpen && (
              <div className="text-xs text-gray-500 px-3 py-2 uppercase tracking-wider">Apps</div>
            )}
            <div className="space-y-1">
              {filteredAgents.map((agent) => {
                const Icon = agent.icon;
                return (
                  <button
                    key={agent.id}
                    onClick={() => handleAppSelect(agent.id)}
                    title={!isSidebarOpen ? agent.name : undefined}
                    className={`w-full flex items-center px-0 ${isSidebarOpen ? 'gap-3 px-3' : 'justify-center'} py-2 rounded-lg text-sm transition-colors ${selectedAgent === agent.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
                      }`}
                  >
                    {/* //  ${agent.color}  */}
                    <div className={`w-8 h-8 rounded-lg bg-blue-600/90
                       flex items-center justify-center shrink-0`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    {isSidebarOpen && (
                      <div className="flex-1 text-left min-w-0">
                        <div className="font-medium truncate">{agent.name}</div>
                        <div className="text-xs opacity-75 truncate">{agent.description}</div>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <div className={`border-t border-gray-900 p-4 flex ${isSidebarOpen ? 'items-center justify-between' : 'flex-col items-center gap-2'}`}>
            {isAuthenticated && user ? (
              <div className={`w-full ${isSidebarOpen ? '' : 'flex justify-center'}`}>
                <SidebarUserDropdown isSidebarOpen={isSidebarOpen} />
              </div>
            ) : (
              <button
                title={!isSidebarOpen ? 'Settings' : undefined}
                className="p-2 hover:bg-gray-800 rounded text-gray-400 hover:text-gray-200 transition-colors"
              >
                <Settings className="w-5 h-5" />
              </button>
            )}
            <button
              title={!isSidebarOpen ? 'Help' : undefined}
              className="p-2 hover:bg-gray-800 rounded text-gray-400 hover:text-gray-200 transition-colors"
            >
              <HelpCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden bg-[#0a0a0a] w-full ">
        {/* Top Navigation */}
        <div className="border-b border-gray-800 px-6 py-4 flex gap-4 items-center w-full">
          {/* Mobile Sidebar Toggle */}
          <div>
          </div>
          {/* Centered Tabs */}
          <div className="flex-1 flex justify-center">
            <AppTabsNavigation
              activeView={activeView}
              openAppTabs={openAppTabs}
              agents={agents}
              onViewChange={setActiveView}
              onCloseTab={handleCloseAppTab}
            />
          </div>
          {/* Right Side - User Avatar or Login Button */}
          <div className="flex items-center gap-4">
            {isAuthenticated && user ? (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-medium">
                  {user.fullname?.charAt(0).toUpperCase() || 'U'}
                </div>
              </div>
            ) : (
              <button
                onClick={openLoginModal}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
              >
                Login
              </button>
            )}
          </div>
        </div>

        {/* Promotional Banner */}
        {showBanner && (
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-2 flex items-center justify-between text-sm">
            <span className="text-white">
              New pricing plans are here ✨ Subscribe today to unlock more credits and continue your learning journey →
            </span>
            <button
              onClick={() => setShowBanner(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Main Panel */}
        <div className="flex-1 flex flex-col overflow-y-auto relative" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}>
          <div className="flex-1 flex flex-col items-center justify-center p-8 max-w-full mx-auto w-full scale-[0.95] -mt-12">
            {activeView === 'agents' ? (
              <>
                <div className="max-w-4xl mx-auto w-full">
                  {/* Main Title */}
                  <div className="text-center mb-50 mt-20">
                    <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
                      Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Health</span> questions answered
                      {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Understanding</span> */}
                    </h1>
                  </div>

                  {/* Input Options */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <button className="bg-[#1a1a1a]/60 border border-gray-800 rounded-lg py-4 px-4 hover:border-purple-500 transition-colors group h-26 flex items-center justify-start">
                      <div className="flex flex-col items-left justify-center gap-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                          <Upload className="w-4 h-4 text-blue-400" />
                        </div>
                        <div className="text-left">
                          <div className="text-white font-medium">Upload</div>
                          <p className="text-gray-400 text-sm">PDF, or image</p>
                        </div>
                      </div>
                    </button>
                    <button className="bg-[#1a1a1a]/60 border border-gray-800 rounded-lg py-4 px-4 hover:border-purple-500 transition-colors group h-26 flex items-center justify-start">
                      <div className="flex flex-col items-left justify-center gap-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                          <LinkIcon className="w-6 h-6 text-blue-400" />
                        </div>
                        <div className="text-left">
                          <div className="text-white font-medium">Paste Blog, website, url</div>
                          <p className="text-gray-400 text-sm">Paste blog, website, or url</p>
                        </div>
                      </div>
                    </button>

                  </div>

                  {/* Idea Description Input */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-400 mb-2">Describe your idea</label>
                    <textarea
                      value={ideaDescription}
                      onChange={(e) => setIdeaDescription(e.target.value)}
                      placeholder="Type your question or describe what you'd like to learn..."
                      className="w-full bg-[#1a1a1a] border border-gray-800 rounded-lg px-4 py-4 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 min-h-[120px] resize-none"
                    />
                  </div>

                  {/* Action Bar */}
                  {/* <div className="flex items-center gap-3 mb-8 flex-wrap">
                  <button className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                    <Plus className="w-5 h-5" />
                  </button>
                  <div className="relative">
                    <select
                      value={explainerCount}
                      onChange={(e) => setExplainerCount(e.target.value)}
                      className="appearance-none bg-[#1a1a1a] border border-gray-800 rounded-lg px-4 py-2 pr-8 text-gray-300 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 cursor-pointer"
                    >
                      <option>1 (quick explainer)</option>
                      <option>2 (detailed)</option>
                      <option>3 (comprehensive)</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                  <div className="relative">
                    <select
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="appearance-none bg-[#1a1a1a] border border-gray-800 rounded-lg px-4 py-2 pr-8 text-gray-300 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 cursor-pointer"
                    >
                      <option>English (English)</option>
                      <option>Spanish (Español)</option>
                      <option>French (Français)</option>
                      <option>German (Deutsch)</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                  <button
                    onClick={() => {
                      if (ideaDescription.trim()) {
                        handleSendMessage();
                      }
                    }}
                    disabled={!ideaDescription.trim()}
                    className="ml-auto bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-2 rounded-lg flex items-center gap-2 font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    <Sparkles className="w-5 h-5" />
                    Generate
                  </button>
                </div> */}

                  {/* Suggested Questions */}
                  <div className="mb-8">
                    <div className="text-sm text-gray-400 mb-3">Try these examples:</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[12px]">
                      {[
                        "Explain black holes like I'm 12",
                        "How does sleep deprivation impact the immune system?",
                        "How does sharding work in databases?",
                        "How is SIP different from lump-sum investing?"
                      ].map((question, index) => (
                        <button
                          key={index}
                          onClick={() => setIdeaDescription(question)}
                          className="bg-[#1a1a1a] border border-gray-800 rounded-lg px-3 py-1 text-left text-gray-300 hover:border-purple-500 hover:text-white transition-colors text-[13px]"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </div>


                </div>
                {/* From the Community */}
                <div className="border-t border-gray-800 pt-8 bg-[#101011] px-6 rounded-xl w-full max-w-5xl mx-auto pb-10">
                  <h3 className="text-xl font-bold text-white mb-6">From the Community</h3>

                  {/* Category Filters */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {['All', 'Health NFTs', 'Hospitals', 'Fertility', 'Medical Research', 'Patient Care'].map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category === 'All' ? null : category)}
                        className={`px-4 py-2 rounded-lg text-[12px] font-medium transition-colors ${(selectedCategory === null && category === 'All') || selectedCategory === category
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                          }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>

                  {/* Content Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      {
                        id: 1,
                        title: "Understanding Health NFTs: A Complete Guide",
                        thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
                        videoCount: 3,
                        tags: ["Health NFTs", "Blockchain", "Digital Health"],
                        author: "Dr. Sarah Chen",
                        date: "9/27/2025",
                        category: "Health NFTs"
                      },
                      {
                        id: 2,
                        title: "Hospital Management in the Digital Age",
                        thumbnail: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
                        videoCount: 1,
                        tags: ["Hospitals", "Healthcare Technology", "Management"],
                        author: "Michael Rodriguez",
                        date: "9/27/2025",
                        category: "Hospitals"
                      },
                      {
                        id: 3,
                        title: "IVF Treatment Explained: From Start to Finish",
                        thumbnail: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&h=300&fit=crop",
                        videoCount: 5,
                        tags: ["Fertility", "IVF", "Reproductive Health"],
                        author: "Dr. Emily Watson",
                        date: "9/26/2025",
                        category: "Fertility"
                      },
                      {
                        id: 4,
                        title: "How Blockchain Secures Medical Records",
                        thumbnail: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=400&h=300&fit=crop",
                        videoCount: 2,
                        tags: ["Health NFTs", "Blockchain", "Data Security"],
                        author: "James Park",
                        date: "9/25/2025",
                        category: "Health NFTs"
                      },
                      {
                        id: 5,
                        title: "Patient-Centered Care: Best Practices",
                        thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
                        videoCount: 1,
                        tags: ["Patient Care", "Healthcare", "Best Practices"],
                        author: "Dr. Lisa Thompson",
                        date: "9/24/2025",
                        category: "Patient Care"
                      },
                      {
                        id: 6,
                        title: "Surrogacy Process: A Comprehensive Overview",
                        thumbnail: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
                        videoCount: 4,
                        tags: ["Fertility", "Surrogacy", "Family Planning"],
                        author: "Dr. Robert Kim",
                        date: "9/23/2025",
                        category: "Fertility"
                      },
                      {
                        id: 7,
                        title: "AI in Medical Diagnosis: Current Applications",
                        thumbnail: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop",
                        videoCount: 3,
                        tags: ["Medical Research", "AI", "Diagnostics"],
                        author: "Dr. Amanda Foster",
                        date: "9/22/2025",
                        category: "Medical Research"
                      },
                      {
                        id: 8,
                        title: "Hospital Accreditation: What You Need to Know",
                        thumbnail: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
                        videoCount: 1,
                        tags: ["Hospitals", "Accreditation", "Quality"],
                        author: "Patricia Martinez",
                        date: "9/21/2025",
                        category: "Hospitals"
                      }
                    ]
                      .filter(item => !selectedCategory || item.category === selectedCategory)
                      .map((item) => (
                        <div
                          key={item.id}
                          className="bg-black border border-gray-800 rounded-lg overflow-hidden hover:border-purple-500 transition-colors cursor-pointer group"
                        >
                          {/* Thumbnail */}
                          <div className="relative w-full h-48 bg-gray-800 overflow-hidden">
                            <Image
                              src={item.thumbnail}
                              alt={item.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                              {item.videoCount} {item.videoCount === 1 ? 'video' : 'videos'}
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-4">
                            <h4 className="text-white font-semibold text-sm mb-2 line-clamp-2 group-hover:text-purple-400 transition-colors">
                              {item.title}
                            </h4>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1 mb-3">
                              {item.tags.slice(0, 2).map((tag, idx) => (
                                <span
                                  key={idx}
                                  className="text-xs px-2 py-0.5 bg-gray-800 text-gray-300 rounded"
                                >
                                  {tag}
                                </span>
                              ))}
                              {item.tags.length > 2 && (
                                <span className="text-xs px-2 py-0.5 text-gray-500">
                                  +{item.tags.length - 2} more
                                </span>
                              )}
                            </div>

                            {/* Author and Date */}
                            <div className="flex items-center justify-between text-xs text-gray-400">
                              <span>by {item.author}</span>
                              <span>{item.date}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>

                  {/* Load More Button */}
                  <div className="mt-8 text-center">
                    <button className="text-white underline">
                      Load More
                    </button>
                  </div>
                </div>
              </>
            ) : activeView === 'consultations' ? (
              <ConsultationManager />
            ) : activeView === 'hospital-manager' ? (
              <div className="w-full max-w-7xl mx-auto">
                {/* Hospital Manager Header */}
                <div className="mb-6 flex justify-between items-center">
                  <div>
                    <h1 className="text-2xl font-bold text-white">Hospital Dashboard</h1>
                    {hospital && (
                      <p className="text-sm text-gray-400 mt-1">{hospital.name}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {hospital?.isVerified ? (
                      <span className="bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full flex items-center gap-1 border border-green-500/50">
                        <ShieldCheck className="h-3 w-3" />
                        Verified
                      </span>
                    ) : (
                      <span className="bg-gray-800 text-gray-400 text-xs px-3 py-1 rounded-full flex items-center gap-1 border border-gray-700">
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
                      <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center border border-blue-500/50">
                        <Building2 className="h-5 w-5 text-blue-400" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Hospital Manager Tabs */}
                <div className="border-b border-gray-800 mb-6 ">
                  <nav className="flex space-x-8">
                    {['dashboard', 'bookings', 'donors', 'customers', 'treatments', 'settings'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setHospitalManagerTab(tab)}
                        className={`px-4 py-2 font-medium text-sm capitalize transition-colors ${hospitalManagerTab === tab
                          ? 'text-white border-b-2 border-blue-500'
                          : 'text-gray-400 hover:text-gray-300'
                          }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Hospital Manager Content */}
                <div className='min-h-160'>
                  {hospitalManagerTab === 'dashboard' && (
                    <div>
                      {/* Stats Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                          <h3 className="text-sm font-medium text-gray-400 mb-1">Total Donors</h3>
                          <p className="text-2xl font-bold text-white">{donorStats.total}</p>
                          <div className="mt-2 flex items-center text-sm">
                            <span className="text-green-400 font-medium">+{donorStats.new} new</span>
                            <span className="text-gray-500 ml-2">this week</span>
                          </div>
                        </div>
                        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                          <h3 className="text-sm font-medium text-gray-400 mb-1">Active Donors</h3>
                          <p className="text-2xl font-bold text-white">{donorStats.active}</p>
                          <div className="mt-2 flex items-center text-sm">
                            <span className="text-yellow-400 font-medium">{donorStats.pending} pending</span>
                            <span className="text-gray-500 ml-2">verification</span>
                          </div>
                        </div>
                        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                          <h3 className="text-sm font-medium text-gray-400 mb-1">Total Customers</h3>
                          <p className="text-2xl font-bold text-white">{customerStats.total}</p>
                          <div className="mt-2 flex items-center text-sm">
                            <span className="text-green-400 font-medium">+{customerStats.new} new</span>
                            <span className="text-gray-500 ml-2">this month</span>
                          </div>
                        </div>
                        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                          <h3 className="text-sm font-medium text-gray-400 mb-1">Active Customers</h3>
                          <p className="text-2xl font-bold text-white">{customerStats.active}</p>
                          <div className="mt-2 flex items-center text-sm">
                            <span className="text-blue-400 font-medium">{Math.round(customerStats.active / customerStats.total * 100)}%</span>
                            <span className="text-gray-500 ml-2">activity rate</span>
                          </div>
                        </div>
                      </div>

                      {/* Recent Activity */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Recent Donations */}
                        <div className="bg-[#0b0b0d] border border-gray-800 rounded-lg overflow-hidden">
                          <div className="bg-gray-900/50 px-6 py-4 border-b border-gray-800 flex justify-between items-center">
                            <h3 className="font-medium text-white">Recent Donations</h3>
                            <button className="text-blue-400 text-sm font-medium hover:text-blue-300">View All</button>
                          </div>
                          <div className="divide-y divide-gray-800">
                            {recentDonations.map(donation => (
                              <div key={donation.id} className="px-6 py-4 flex justify-between items-center">
                                <div>
                                  <p className="font-medium text-white">{donation.donor}</p>
                                  <p className="text-sm text-gray-400">{donation.date}</p>
                                </div>
                                <span className={`text-xs px-2 py-1 rounded-full ${donation.status === 'Completed'
                                  ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                                  : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50'
                                  }`}>
                                  {donation.status}
                                </span>
                              </div>
                            ))}
                          </div>
                          <div className="bg-gray-900/50 px-6 py-3 border-t border-gray-800">
                            <button
                              onClick={() => setIsDonorRequestModalOpen(true)}
                              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
                            >
                              <Plus className="w-4 h-4" />
                              Add New Donor
                            </button>
                          </div>
                        </div>

                        {/* Recent Customers */}
                        <div className="bg-[#0b0b0d] border border-gray-800 rounded-lg overflow-hidden">
                          <div className="bg-gray-900/50 px-6 py-4 border-b border-gray-800 flex justify-between items-center">
                            <h3 className="font-medium text-white">Recent Customers</h3>
                            <button className="text-blue-400 text-sm font-medium hover:text-blue-300">View All</button>
                          </div>
                          <div className="divide-y divide-gray-800">
                            {recentCustomers.map(customer => (
                              <div key={customer.id} className="px-6 py-4 flex justify-between items-center">
                                <div>
                                  <p className="font-medium text-white">{customer.name}</p>
                                  <p className="text-sm text-gray-400">{customer.date}</p>
                                </div>
                                <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/50">
                                  {customer.treatment}
                                </span>
                              </div>
                            ))}
                          </div>
                          <div className="bg-gray-900/50 px-6 py-3 border-t border-gray-800">
                            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2">
                              <Plus className="w-4 h-4" />
                              Add New Customer
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {hospitalManagerTab === 'bookings' && (
                    <div className="space-y-6">
                      <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold text-white">Hospital Bookings</h2>
                        <button
                          onClick={() => loadHospitalBookings()}
                          className="text-blue-400 text-sm font-medium hover:text-blue-300"
                        >
                          Refresh
                        </button>
                      </div>

                      {isLoadingBookings ? (
                        <div className="flex justify-center items-center py-12">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                        </div>
                      ) : hospitalBookings.length === 0 ? (
                        <div className="bg-[#0b0b0d] border border-gray-800 rounded-lg p-12 text-center">
                          <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                          <h3 className="text-lg font-medium text-white mb-2">No bookings found</h3>
                          <p className="text-gray-400">
                            You don&apos;t have any bookings for your hospitals yet.
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {hospitalBookings.map((booking: Booking) => {
                            const appointmentDate = new Date(booking.appointmentDate);
                            const endDate = new Date(appointmentDate.getTime() + booking.duration * 60000);

                            const getStatusColor = (status: string) => {
                              switch (status) {
                                case 'CONFIRMED':
                                  return 'bg-green-500/20 text-green-400 border-green-500/50';
                                case 'PENDING':
                                  return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
                                case 'CANCELLED':
                                  return 'bg-red-500/20 text-red-400 border-red-500/50';
                                case 'COMPLETED':
                                  return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
                                default:
                                  return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
                              }
                            };

                            return (
                              <div key={booking.id} className="bg-[#0b0b0d] border border-gray-800 rounded-lg p-6">
                                <div className="flex justify-between items-start mb-4">
                                  <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                      <h3 className="text-lg font-medium text-white">{booking.purpose}</h3>
                                      <span className={`text-xs px-2 py-1 rounded-full border ${getStatusColor(booking.status)}`}>
                                        {booking.status}
                                      </span>
                                    </div>
                                    <p className="text-sm text-gray-400">Booking ID: {booking.id}</p>
                                  </div>
                                  <button
                                    onClick={() => window.location.href = `/booking/confirmation/${booking.id}`}
                                    className="text-blue-400 text-sm font-medium hover:text-blue-300"
                                  >
                                    View Details
                                  </button>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                  {/* Patient Information */}
                                  {booking.user && (
                                    <div className="space-y-2">
                                      <h4 className="text-sm font-medium text-gray-400 flex items-center gap-2">
                                        <User className="h-4 w-4" />
                                        Patient
                                      </h4>
                                      <div className="space-y-1">
                                        <p className="text-white font-medium">{booking.user.fullname}</p>
                                        <p className="text-sm text-gray-400">{booking.user.email}</p>
                                        {booking.user.phone && (
                                          <p className="text-sm text-gray-400">{booking.user.phone}</p>
                                        )}
                                      </div>
                                    </div>
                                  )}

                                  {/* Appointment Details */}
                                  <div className="space-y-2">
                                    <h4 className="text-sm font-medium text-gray-400 flex items-center gap-2">
                                      <Calendar className="h-4 w-4" />
                                      Appointment
                                    </h4>
                                    <div className="space-y-1">
                                      <p className="text-white">
                                        {format(appointmentDate, 'EEEE, MMMM d, yyyy')}
                                      </p>
                                      <p className="text-sm text-gray-400">
                                        {format(appointmentDate, 'h:mm a')} - {format(endDate, 'h:mm a')}
                                      </p>
                                      <p className="text-sm text-gray-400">
                                        Duration: {booking.duration} minutes
                                      </p>
                                    </div>
                                  </div>
                                </div>

                                {booking.additionalNotes && (
                                  <div className="mt-4 pt-4 border-t border-gray-800">
                                    <h4 className="text-sm font-medium text-gray-400 mb-1">Additional Notes</h4>
                                    <p className="text-sm text-gray-300">{booking.additionalNotes}</p>
                                  </div>
                                )}

                                {/* Action Buttons */}
                                <div className="mt-4 flex gap-2">
                                  {booking.status === 'PENDING' && (
                                    <button
                                      onClick={async () => {
                                        try {
                                          await bookingService.updateBooking(booking.id, { status: 'CONFIRMED' });
                                          toast.success('Booking confirmed');
                                          loadHospitalBookings();
                                        } catch (error: any) {
                                          toast.error(error.message || 'Failed to confirm booking');
                                        }
                                      }}
                                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm"
                                    >
                                      Confirm
                                    </button>
                                  )}
                                  {(booking.status === 'PENDING' || booking.status === 'CONFIRMED') && (
                                    <button
                                      onClick={async () => {
                                        if (confirm('Are you sure you want to cancel this booking?')) {
                                          try {
                                            await bookingService.cancelBooking(booking.id);
                                            toast.success('Booking cancelled');
                                            loadHospitalBookings();
                                          } catch (error: any) {
                                            toast.error(error.message || 'Failed to cancel booking');
                                          }
                                        }
                                      }}
                                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm"
                                    >
                                      Cancel
                                    </button>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}

                  {hospitalManagerTab === 'donors' && (
                    <div className="space-y-6">
                      <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold text-white">Donor Requests</h2>
                        <button
                          onClick={() => setIsDonorRequestModalOpen(true)}
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
                        >
                          <Plus className="w-4 h-4" />
                          New Request
                        </button>
                      </div>

                      {/* Active Requests */}
                      <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg overflow-hidden">
                        <div className="bg-gray-900/50 px-6 py-4 border-b border-gray-800">
                          <h3 className="font-medium text-white">Active Requests</h3>
                        </div>
                        <div className="divide-y divide-gray-800">
                          {donorRequests && donorRequests
                            .filter(request => request?.isActive)
                            .map((request, index) => (
                              <div key={index} className="px-6 py-4">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h4 className="font-medium text-white">{getDonorTypeLabel(request.donorType)}</h4>
                                    <p className="text-sm text-gray-400 mt-1">{request.requestDescription}</p>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                      <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/50">
                                        Max Donors: {request.maxDonors?.toString()}
                                      </span>
                                      <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/50">
                                        Amount: {request.minAmontpayment?.toString()} - {request.maxAmountPayment?.toString()} ETH
                                      </span>
                                      <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/50">
                                        Date: {request.date ? formatDate(request.date) : 'N/A'}
                                      </span>
                                    </div>
                                  </div>
                                  <span className={`text-xs px-2 py-1 rounded-full ${request.status === 0 ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50' :
                                    request.status === 1 ? 'bg-green-500/20 text-green-400 border border-green-500/50' :
                                      request.status === 2 ? 'bg-red-500/20 text-red-400 border border-red-500/50' :
                                        'bg-blue-500/20 text-blue-400 border border-blue-500/50'
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

                  {hospitalManagerTab === 'settings' && (
                    <div className="space-y-6">
                      {isLoadingHospital ? (
                        <div className="bg-[#0b0b0d] border border-gray-800 rounded-lg p-8 text-center">
                          <Loader2 className="h-8 w-8 animate-spin text-blue-500 mx-auto mb-4" />
                          <p className="text-gray-400">Loading hospital information...</p>
                        </div>
                      ) : !hospital ? (
                        <div className="bg-[#0b0b0d] border border-gray-800 rounded-lg p-8 text-center">
                          <Building2 className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                          <h3 className="text-lg font-medium text-white mb-2">No Hospital Registered</h3>
                          <p className="text-gray-400 mb-6">
                            Please register your hospital first to access settings.
                          </p>
                        </div>
                      ) : (
                        <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
                          {/* Verification Status */}
                          <div className="bg-gray-900/50 rounded-lg border border-gray-800 mx-4 mt-4 px-4 py-2">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="font-medium text-white mb-1">Verification Status</h3>
                                <p className="text-sm text-gray-400">
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
                                  <Shield className="h-4 w-4" />
                                  Verify Now
                                </button>
                              )}
                            </div>
                          </div>

                          <div className="px-6 py-4 flex justify-between items-center">
                            <div></div>
                            {!isEditingHospital ? (
                              <button
                                onClick={() => setIsEditingHospital(true)}
                                className="px-4 py-2 text-blue-400 underline rounded-lg text-sm hover:text-blue-300"
                              >
                                Edit Details
                              </button>
                            ) : (
                              <div className="flex gap-2">
                                <button
                                  onClick={() => {
                                    setIsEditingHospital(false);
                                    setEditFormData({
                                      name: hospital.name,
                                      location: hospital.location,
                                      rating: hospital.rating,
                                      specialties: hospital.specialties,
                                      imageUrl: hospital.imageUrl,
                                    });
                                  }}
                                  className="px-4 py-2 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800 text-sm"
                                >
                                  Cancel
                                </button>
                                <button
                                  onClick={handleSaveHospitalChanges}
                                  disabled={isSavingHospital}
                                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm disabled:opacity-50"
                                >
                                  {isSavingHospital ? 'Saving...' : 'Save Changes'}
                                </button>
                              </div>
                            )}
                          </div>

                          <div className="p-6 space-y-6">
                            {hospital.imageUrl && (
                              <div className="mb-2">
                                <Image
                                  src={hospital.imageUrl}
                                  alt={hospital.name}
                                  width={200}
                                  height={200}
                                  className="rounded-lg border border-gray-800 w-full max-w-xs h-48 object-cover"
                                />
                              </div>
                            )}
                            <div>
                              <label className="block text-sm font-medium text-gray-300 mb-1">Image URL</label>
                              {isEditingHospital ? (
                                <input
                                  type="url"
                                  value={editFormData.imageUrl || ''}
                                  onChange={(e) => setEditFormData({ ...editFormData, imageUrl: e.target.value })}
                                  className="w-full px-3 py-2 bg-[#0a0a0a] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                  placeholder="https://..."
                                />
                              ) : (
                                <div className="text-gray-300 text-sm break-all">{hospital.imageUrl || 'No image URL set'}</div>
                              )}
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Hospital Name</label>
                                {isEditingHospital ? (
                                  <input
                                    type="text"
                                    value={editFormData.name || ''}
                                    onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                                    className="w-full px-3 py-2 bg-[#0a0a0a] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                  />
                                ) : (
                                  <div className="text-white font-medium">{hospital.name}</div>
                                )}
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Location</label>
                                {isEditingHospital ? (
                                  <input
                                    type="text"
                                    value={editFormData.location || ''}
                                    onChange={(e) => setEditFormData({ ...editFormData, location: e.target.value })}
                                    className="w-full px-3 py-2 bg-[#0a0a0a] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="e.g., Boston, MA"
                                  />
                                ) : (
                                  <div className="text-white flex items-center gap-1">{hospital.location}</div>
                                )}
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Rating</label>
                                {isEditingHospital ? (
                                  <input
                                    type="number"
                                    min="0"
                                    max="5"
                                    step="0.1"
                                    value={editFormData.rating || 0}
                                    onChange={(e) => setEditFormData({ ...editFormData, rating: parseFloat(e.target.value) || 0 })}
                                    className="w-full px-3 py-2 bg-[#0a0a0a] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                  />
                                ) : (
                                  <div className="text-white flex items-center gap-1">
                                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                    {hospital.rating.toFixed(1)} / 5.0
                                  </div>
                                )}
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Wallet Address</label>
                                <div className="text-gray-300 font-mono text-sm">{hospital.walletAddress}</div>
                              </div>
                              <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-300 mb-2">Specialties</label>
                                {isEditingHospital ? (
                                  <div className="space-y-2">
                                    <div className="flex flex-wrap gap-2">
                                      {editFormData.specialties?.map((specialty, index) => (
                                        <span
                                          key={index}
                                          className="inline-flex items-center gap-1 px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/50"
                                        >
                                          {specialty}
                                          <button
                                            onClick={() => {
                                              const newSpecialties = editFormData.specialties?.filter((_, i) => i !== index) || [];
                                              setEditFormData({ ...editFormData, specialties: newSpecialties });
                                            }}
                                            className="hover:text-blue-300"
                                          >
                                            <X className="h-3 w-3" />
                                          </button>
                                        </span>
                                      ))}
                                    </div>
                                    <input
                                      type="text"
                                      placeholder="Add specialty and press Enter"
                                      className="w-full px-3 py-2 bg-[#0a0a0a] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                                          className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/50"
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
                              <div className="md:col-span-2 pt-4 border-t border-gray-800">
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                  <div>
                                    <span className="text-gray-500">Created:</span>
                                    <span className="ml-2 text-gray-300">
                                      {new Date(hospital.createdAt).toLocaleDateString()}
                                    </span>
                                  </div>
                                  <div>
                                    <span className="text-gray-500">Last Updated:</span>
                                    <span className="ml-2 text-gray-300">
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

                  {(hospitalManagerTab === 'customers' || hospitalManagerTab === 'treatments') && (
                    <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-8 text-center">
                      <h3 className="text-lg font-medium text-white mb-2">Coming Soon</h3>
                      <p className="text-gray-400 mb-6">
                        The {hospitalManagerTab} management section is currently under development.
                      </p>
                      <button
                        onClick={() => setHospitalManagerTab('dashboard')}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                      >
                        Return to Dashboard
                      </button>
                    </div>
                  )}

                  {/* Modals */}
                  <DonorRequestModal
                    isOpen={isDonorRequestModalOpen}
                    onClose={() => setIsDonorRequestModalOpen(false)}
                  />
                  {hospital && (
                    <HospitalVerificationModal
                      isOpen={isVerificationModalOpen}
                      onClose={() => setIsVerificationModalOpen(false)}
                      onSuccess={handleVerificationSuccess}
                      hospitalId={hospital.id}
                    />
                  )}
                </div>
              </div>
            ) : (
              <div className="w-full max-w-6xl mx-auto">
                {/* Dashboard Header */}
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
                  <p className="text-gray-400">Manage your profile and settings</p>
                </div>

                {/* Horizontal Tabs */}
                <div className="border-b border-gray-800 mb-6">
                  <nav className="flex space-x-8" aria-label="Tabs">
                    <button
                      onClick={() => setDashboardTab('profile')}
                      className={`${dashboardTab === 'profile'
                        ? 'border-blue-500 text-white'
                        : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-700'
                        } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2`}
                    >
                      <User className="w-4 h-4" />
                      Profile
                    </button>
                    <button
                      onClick={() => setDashboardTab('settings')}
                      className={`${dashboardTab === 'settings'
                        ? 'border-blue-500 text-white'
                        : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-700'
                        } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2`}
                    >
                      <Settings className="w-4 h-4" />
                      Settings
                    </button>
                  </nav>
                </div>

                {/* Tab Content */}
                {dashboardTab === 'profile' && (
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
                          className={`px-6 py-3 text-sm font-medium ${activeSection === 'personal'
                            ? 'text-blue-400 border-b-2 border-blue-500 bg-[#1a1a1a]'
                            : 'text-gray-400 hover:text-gray-300'
                            }`}
                        >
                          Personal Info
                        </button>
                        {user?.userType === 'MEDICAL_FACILITY' && (
                          <button
                            onClick={() => setActiveSection('hospital')}
                            className={`px-6 py-3 text-sm font-medium ${activeSection === 'hospital'
                              ? 'text-blue-400 border-b-2 border-blue-500 bg-[#1a1a1a]'
                              : 'text-gray-400 hover:text-gray-300'
                              }`}
                          >
                            Hospital Info
                          </button>
                        )}
                        <button
                          onClick={() => setActiveSection('password')}
                          className={`px-6 py-3 text-sm font-medium ${activeSection === 'password'
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
                              className={`w-full bg-transparent border rounded-lg px-4 py-2 text-white ${isEditing ? 'border-gray-700' : 'border-none'
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
                              className={`w-full bg-transparent border rounded-lg px-4 py-2 text-white ${isEditing ? 'border-gray-700' : 'border-none'
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
                              className={`w-full bg-transparent border rounded-lg px-4 py-2 text-white ${isEditing ? 'border-gray-700' : 'border-none'
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
                              className={`w-full bg-transparent border rounded-lg px-4 py-2 text-white ${isEditing ? 'border-gray-700' : 'border-none'
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
                              className={`w-full bg-transparent border rounded-lg px-4 py-2 text-white ${isEditing ? 'border-gray-700' : 'border-none'
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
                              className={`w-full bg-transparent border rounded-lg px-4 py-2 text-white ${isEditing ? 'border-gray-700' : 'border-none'
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
                )}

                {dashboardTab === 'settings' && (
                  <div className="bg-[#0b0b0d] border border-gray-800 rounded-lg overflow-hidden">
                    {/* Settings Header */}
                    <div className="border-b border-gray-800 px-6 py-4 flex justify-between items-center">
                      <div>
                        <h2 className="text-xl font-semibold text-white">Settings</h2>
                        <p className="text-sm text-gray-400 mt-1">Manage your account preferences</p>
                      </div>
                      <button
                        onClick={saveSettings}
                        disabled={isSavingSettings}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isSavingSettings
                          ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                          }`}
                      >
                        {isSavingSettings ? (
                          <span className="flex items-center gap-2">
                            <Loader className="w-4 h-4 animate-spin" />
                            Saving...
                          </span>
                        ) : 'Save Settings'}
                      </button>
                    </div>

                    {/* Saved Message */}
                    {showSavedMessage && (
                      <div className="mx-6 mt-4 bg-green-500/20 border border-green-500/50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 text-green-400">
                          <CheckCircle className="w-5 h-5" />
                          <p className="text-sm font-medium">Settings saved successfully!</p>
                        </div>
                      </div>
                    )}

                    {/* Settings Tabs */}
                    <div className="border-b border-gray-800 bg-gray-900/50">
                      <nav className="flex">
                        <button
                          onClick={() => setSettingsTab('notifications')}
                          className={`px-6 py-3 text-sm font-medium flex items-center gap-2 ${settingsTab === 'notifications'
                            ? 'text-blue-400 border-b-2 border-blue-500 bg-[#1a1a1a]'
                            : 'text-gray-400 hover:text-gray-300'
                            }`}
                        >
                          <Bell className="w-4 h-4" />
                          Notifications
                        </button>
                        <button
                          onClick={() => setSettingsTab('privacy')}
                          className={`px-6 py-3 text-sm font-medium flex items-center gap-2 ${settingsTab === 'privacy'
                            ? 'text-blue-400 border-b-2 border-blue-500 bg-[#1a1a1a]'
                            : 'text-gray-400 hover:text-gray-300'
                            }`}
                        >
                          <Shield className="w-4 h-4" />
                          Privacy
                        </button>
                        <button
                          onClick={() => setSettingsTab('security')}
                          className={`px-6 py-3 text-sm font-medium flex items-center gap-2 ${settingsTab === 'security'
                            ? 'text-blue-400 border-b-2 border-blue-500 bg-[#1a1a1a]'
                            : 'text-gray-400 hover:text-gray-300'
                            }`}
                        >
                          <Shield className="w-4 h-4" />
                          Security
                        </button>
                        <button
                          onClick={() => setSettingsTab('preferences')}
                          className={`px-6 py-3 text-sm font-medium flex items-center gap-2 ${settingsTab === 'preferences'
                            ? 'text-blue-400 border-b-2 border-blue-500 bg-[#1a1a1a]'
                            : 'text-gray-400 hover:text-gray-300'
                            }`}
                        >
                          <Globe className="w-4 h-4" />
                          Preferences
                        </button>
                      </nav>
                    </div>

                    {/* Settings Content */}
                    <div className="p-6">
                      {settingsTab === 'notifications' && (
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-lg font-medium text-white mb-1">Notification Methods</h3>
                            <p className="text-sm text-gray-400 mb-4">Choose how you want to receive notifications</p>
                            <div className="space-y-4">
                              {[
                                { key: 'email' as const, label: 'Email notifications' },
                                { key: 'sms' as const, label: 'SMS notifications' },
                                { key: 'browser' as const, label: 'Browser notifications' },
                              ].map(({ key, label }) => (
                                <div key={key} className="flex items-center">
                                  <input
                                    type="checkbox"
                                    checked={settings.notifications[key]}
                                    onChange={() => handleNotificationChange(key)}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-700 rounded bg-[#0a0a0a]"
                                  />
                                  <label className="ml-3 text-sm text-gray-300">{label}</label>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h3 className="text-lg font-medium text-white mb-1">Notification Types</h3>
                            <div className="space-y-4 mt-4">
                              {[
                                { key: 'appointments' as const, label: 'Appointment reminders and updates' },
                                { key: 'marketing' as const, label: 'Marketing and promotional messages' },
                                { key: 'updates' as const, label: 'Platform updates and new features' },
                              ].map(({ key, label }) => (
                                <div key={key} className="flex items-center">
                                  <input
                                    type="checkbox"
                                    checked={settings.notifications[key]}
                                    onChange={() => handleNotificationChange(key)}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-700 rounded bg-[#0a0a0a]"
                                  />
                                  <label className="ml-3 text-sm text-gray-300">{label}</label>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {settingsTab === 'privacy' && (
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-lg font-medium text-white mb-1">Profile Visibility</h3>
                            <div className="space-y-4 mt-4">
                              {[
                                { key: 'shareProfile' as const, label: 'Share profile with partner hospitals', desc: 'Allow partner hospitals to view your profile information' },
                                { key: 'showDonationHistory' as const, label: 'Display donation history on profile', desc: 'Your donation history will be visible to other users' },
                              ].map(({ key, label, desc }) => (
                                <div key={key} className="flex items-start">
                                  <input
                                    type="checkbox"
                                    checked={settings.privacy[key]}
                                    onChange={() => handlePrivacyChange(key)}
                                    className="h-4 w-4 mt-0.5 text-blue-600 focus:ring-blue-500 border-gray-700 rounded bg-[#0a0a0a]"
                                  />
                                  <div className="ml-3">
                                    <label className="text-sm font-medium text-gray-300">{label}</label>
                                    <p className="text-xs text-gray-500 mt-1">{desc}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h3 className="text-lg font-medium text-white mb-1">Data Usage</h3>
                            <div className="space-y-4 mt-4">
                              {[
                                { key: 'anonymizeData' as const, label: 'Anonymize my data in the blockchain', desc: 'Your personal details will be hashed and anonymized' },
                                { key: 'allowResearch' as const, label: 'Share anonymized data for research', desc: 'Allow your anonymized data to be used for fertility research' },
                              ].map(({ key, label, desc }) => (
                                <div key={key} className="flex items-start">
                                  <input
                                    type="checkbox"
                                    checked={settings.privacy[key]}
                                    onChange={() => handlePrivacyChange(key)}
                                    className="h-4 w-4 mt-0.5 text-blue-600 focus:ring-blue-500 border-gray-700 rounded bg-[#0a0a0a]"
                                  />
                                  <div className="ml-3">
                                    <label className="text-sm font-medium text-gray-300">{label}</label>
                                    <p className="text-xs text-gray-500 mt-1">{desc}</p>
                                    {key === 'allowResearch' && settings.privacy.allowResearch && (
                                      <p className="text-xs text-green-400 mt-1 flex items-center gap-1">
                                        <CheckCircle className="w-3 h-3" />
                                        Earn 50 DATA tokens per month for participating
                                      </p>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {settingsTab === 'security' && (
                        <div className="space-y-6">
                          <div className="p-4 bg-[#0a0a0a] border border-gray-800 rounded-lg">
                            <h4 className="text-sm font-medium text-white mb-2">Connected Wallet</h4>
                            <div className="flex items-center gap-3">
                              {address && (
                                <>
                                  <Image src="/images/ethereum.svg" alt="Ethereum" width={24} height={24} />
                                  <span className="text-sm text-gray-300 font-mono">
                                    {address.substring(0, 8)}...{address.substring(address.length - 6)}
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                          <div className="space-y-4">
                            {[
                              { key: 'twoFactorEnabled' as const, label: 'Enable two-factor authentication', desc: 'Add an extra layer of security to your account' },
                              { key: 'loginNotifications' as const, label: 'Receive login notifications', desc: 'Get notified when someone logs into your account' },
                              { key: 'allowMultipleDevices' as const, label: 'Allow multiple device logins', desc: 'Stay logged in on multiple devices at the same time' },
                            ].map(({ key, label, desc }) => (
                              <div key={key} className="flex items-start">
                                <input
                                  type="checkbox"
                                  checked={settings.security[key] as boolean}
                                  onChange={(e) => handleSecurityChange(key, e.target.checked)}
                                  className="h-4 w-4 mt-0.5 text-blue-600 focus:ring-blue-500 border-gray-700 rounded bg-[#0a0a0a]"
                                />
                                <div className="ml-3">
                                  <label className="text-sm font-medium text-gray-300">{label}</label>
                                  <p className="text-xs text-gray-500 mt-1">{desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-white mb-2">Session Timeout</h4>
                            <select
                              value={settings.security.sessionTimeout}
                              onChange={(e) => handleSecurityChange('sessionTimeout', e.target.value)}
                              className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                            >
                              <option value="30m">30 minutes</option>
                              <option value="1h">1 hour</option>
                              <option value="4h">4 hours</option>
                              <option value="1d">1 day</option>
                              <option value="never">Never</option>
                            </select>
                          </div>
                        </div>
                      )}

                      {settingsTab === 'preferences' && (
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-sm font-medium text-white mb-3">Theme</h4>
                            <div className="flex items-center space-x-4">
                              {['light', 'dark', 'system'].map((theme) => (
                                <div key={theme} className="flex items-center">
                                  <input
                                    type="radio"
                                    name="theme"
                                    checked={settings.preferences.theme === theme}
                                    onChange={() => handlePreferenceChange('theme', theme)}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-700"
                                  />
                                  <label className="ml-2 text-sm text-gray-300 capitalize">{theme}</label>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-white mb-2">Language</h4>
                            <select
                              value={settings.preferences.language}
                              onChange={(e) => handlePreferenceChange('language', e.target.value)}
                              className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                            >
                              <option value="en">English</option>
                              <option value="es">Español</option>
                              <option value="fr">Français</option>
                              <option value="zh">中文</option>
                            </select>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-white mb-3">Date Format</h4>
                            <div className="flex items-center space-x-4">
                              {['MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY-MM-DD'].map((format) => (
                                <div key={format} className="flex items-center">
                                  <input
                                    type="radio"
                                    name="dateFormat"
                                    checked={settings.preferences.dateFormat === format}
                                    onChange={() => handlePreferenceChange('dateFormat', format)}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-700"
                                  />
                                  <label className="ml-2 text-sm text-gray-300">{format}</label>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-white mb-2">Time Zone</h4>
                            <select
                              value={settings.preferences.timeZone}
                              onChange={(e) => handlePreferenceChange('timeZone', e.target.value)}
                              className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                            >
                              <option value="America/New_York">Eastern Time (US & Canada)</option>
                              <option value="America/Chicago">Central Time (US & Canada)</option>
                              <option value="America/Denver">Mountain Time (US & Canada)</option>
                              <option value="America/Los_Angeles">Pacific Time (US & Canada)</option>
                              <option value="Europe/London">London</option>
                              <option value="Europe/Paris">Paris</option>
                              <option value="Asia/Tokyo">Tokyo</option>
                              <option value="Australia/Sydney">Sydney</option>
                            </select>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <LoginModal />

      {/* Registration Modal */}
      <RegistrationModal />
    </div>
  );
}

