'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, Settings, HelpCircle, Plus, MessageSquare, Sparkles, FileText, LayoutDashboard, Users, Building2, Calendar, Image as ImageIcon, Upload, Link as LinkIcon, X, ChevronDown, ChevronLeft, ChevronRight, Menu, User, Bell, Shield, Globe, Loader, CheckCircle, ShieldCheck, MapPin, Star, Loader2, CreditCard, Crown, Trash2, Check, Bot, Send, Infinity } from 'lucide-react';
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
import { pricingService, Plan, Subscription, PaymentMethod } from '@/lib/services/pricing';
import { subscriptionService, Subscription as NewSubscription, SubscriptionPlan } from '@/lib/services/subscription';
import { requestsService, Request } from '@/lib/services/requests';
import SidebarUserDropdown from '@/components/app/SidebarUserDropdown';
import AppTabsNavigation from '@/components/app/AppTabsNavigation';
import ConsultationManager from '@/components/consultations/ConsultationManager';
import DashboardTab from '@/components/dashboard/DashboardTab';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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
  const [dashboardTab, setDashboardTab] = useState<'profile' | 'settings' | 'pricing'>('profile');

  // Chat state
  const [chatMessages, setChatMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([]);
  const [chatInput, setChatInput] = useState('');
  const [isChatLoading, setIsChatLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState<string>('auto');
  const [bottomTab, setBottomTab] = useState<'agents' | 'settings' | 'mcp'>('agents');
  const [isModelDropdownOpen, setIsModelDropdownOpen] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const modelDropdownRef = useRef<HTMLDivElement>(null);

  // Available models
  const availableModels = [
    { value: 'auto', label: 'Auto', description: 'Automatically select the best model' },
    { value: 'gpt-4-turbo-preview', label: 'GPT-4 Turbo', description: 'Most capable model' },
    { value: 'gpt-4', label: 'GPT-4', description: 'High quality responses' },
    { value: 'gpt-3.5-turbo', label: 'GPT-3.5 Turbo', description: 'Fast and efficient' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modelDropdownRef.current && !modelDropdownRef.current.contains(event.target as Node)) {
        setIsModelDropdownOpen(false);
      }
    };

    if (isModelDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModelDropdownOpen]);

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
  const [hospitalBookings, setHospitalBookings] = useState<Booking[]>([]);
  const [isLoadingBookings, setIsLoadingBookings] = useState(false);
  const [hospitalRequests, setHospitalRequests] = useState<Request[]>([]);
  const [isLoadingRequests, setIsLoadingRequests] = useState(false);
  const [hospitalStats, setHospitalStats] = useState({
    totalDonors: 0,
    activeDonors: 0,
    pendingDonors: 0,
    newDonors: 0,
    totalCustomers: 0,
    activeCustomers: 0,
    newCustomers: 0,
  });
  const [isLoadingStats, setIsLoadingStats] = useState(false);

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

  // Pricing state
  const [plans, setPlans] = useState<Plan[]>([]);
  const [subscriptionPlans, setSubscriptionPlans] = useState<SubscriptionPlan[]>([]);
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [newSubscription, setNewSubscription] = useState<NewSubscription | null>(null);
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
  const [isLoadingPricing, setIsLoadingPricing] = useState(false);
  const [pricingTab, setPricingTab] = useState<'plans' | 'subscription' | 'payment'>('plans');
  const [isProcessingPricing, setIsProcessingPricing] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  // Mock agents/apps list
  const allAgents = [
    { id: 'fertility-ai', name: 'AI Assistant', icon: Sparkles, description: 'AI-powered fertility guidance', color: 'bg-blue-500' },
    { id: 'hospital-manager', name: 'Hospital Manager', icon: Building2, description: 'Manage hospital operations', color: 'bg-green-500', requiresMedicalFacility: true },
    { id: 'consultations', name: 'Consultations', icon: Calendar, description: 'Book and manage consultations', color: 'bg-orange-500' },
    { id: 'patient-portal', name: 'Patient Portal', icon: Users, description: 'Patient management system', color: 'bg-purple-500' },
    { id: 'document-manager', name: 'Document Manager', icon: FileText, description: 'Medical records management', color: 'bg-pink-500' },
  ];

  // Filter agents based on user type - only show hospital-manager to medical facilities
  const agents = allAgents.filter(agent => {
    if (agent.requiresMedicalFacility) {
      return user?.userType === 'MEDICAL_FACILITY';
    }
    return true;
  });

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
    // Check if user is trying to access hospital-manager without proper permissions
    if (appId === 'hospital-manager' && user?.userType !== 'MEDICAL_FACILITY') {
      toast.error('Access Denied', {
        description: 'Hospital Dashboard is only available for medical facilities. Please contact support if you believe this is an error.',
      });
      return;
    }

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

  // Load requests and stats when hospital is loaded
  useEffect(() => {
    if (hospital?.id && activeView === 'hospital-manager') {
      loadHospitalRequests();
      loadHospitalStats();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hospital?.id, activeView]);

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

  // Load hospital requests
  const loadHospitalRequests = async () => {
    if (!hospital?.id) return;
    setIsLoadingRequests(true);
    try {
      const requests = await requestsService.getHospitalRequests(hospital.id);
      setHospitalRequests(requests);
    } catch (error: any) {
      console.error('Error loading hospital requests:', error);
      setHospitalRequests([]);
    } finally {
      setIsLoadingRequests(false);
    }
  };

  // Load hospital statistics
  const loadHospitalStats = async () => {
    if (!hospital?.id) return;
    setIsLoadingStats(true);
    try {
      // Load bookings and requests in parallel
      const [bookings, requests] = await Promise.all([
        bookingService.getMyHospitalBookings().catch(() => []),
        requestsService.getHospitalRequests(hospital.id).catch(() => []),
      ]);

      // Calculate donor stats from requests
      const donorRequests = requests.filter(r => r.requestType === 'DONOR_REQUEST');
      const now = new Date();
      const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

      const totalDonors = donorRequests.length;
      const activeDonors = donorRequests.filter(r => r.status === 'ACTIVE').length;
      const pendingDonors = donorRequests.filter(r => r.status === 'PENDING').length;
      const newDonors = donorRequests.filter(r => {
        const createdDate = new Date(r.createdAt);
        return createdDate >= oneWeekAgo;
      }).length;

      // Calculate customer stats from bookings
      const uniqueCustomers = new Set(bookings.map(b => b.userId));
      const totalCustomers = uniqueCustomers.size;

      // Active customers are those with bookings in the last 30 days
      const activeCustomerIds = new Set(
        bookings
          .filter(b => {
            const bookingDate = new Date(b.appointmentDate);
            return bookingDate >= oneMonthAgo;
          })
          .map(b => b.userId)
      );
      const activeCustomers = activeCustomerIds.size;

      // New customers are those with first booking in the last month
      const customerFirstBooking = new Map<string, Date>();
      bookings.forEach(b => {
        const existing = customerFirstBooking.get(b.userId);
        const bookingDate = new Date(b.appointmentDate);
        if (!existing || bookingDate < existing) {
          customerFirstBooking.set(b.userId, bookingDate);
        }
      });
      const newCustomers = Array.from(customerFirstBooking.values()).filter(
        date => date >= oneMonthAgo
      ).length;

      setHospitalStats({
        totalDonors,
        activeDonors,
        pendingDonors,
        newDonors,
        totalCustomers,
        activeCustomers,
        newCustomers,
      });
    } catch (error: any) {
      console.error('Error loading hospital stats:', error);
    } finally {
      setIsLoadingStats(false);
    }
  };

  // Load pricing data
  const loadPricingData = async () => {
    setIsLoadingPricing(true);
    try {
      let plansData: Plan[] = [];
      let subscriptionData: Subscription | null = null;
      let newSubscriptionData: NewSubscription | null = null;
      let subscriptionPlansData: SubscriptionPlan[] = [];
      let paymentMethodsData: PaymentMethod[] = [];

      try {
        // Try to load from new subscription service first
        try {
          const subscriptionPlansResponse = await subscriptionService.getPlans();
          subscriptionPlansData = subscriptionPlansResponse.plans.filter(
            plan => plan.userType === user?.userType
          );
        } catch (e) {
          console.log('Subscription plans API not available');
        }

        try {
          const newSubResponse = await subscriptionService.getMySubscription();
          if (newSubResponse?.subscription) {
            newSubscriptionData = newSubResponse.subscription;
          }
        } catch (e) {
          // Silently fail - no subscription exists
        }

        // Also try old pricing service for backward compatibility
        try {
          [plansData, subscriptionData, paymentMethodsData] = await Promise.all([
            pricingService.getPlans().catch(() => []),
            pricingService.getSubscription().catch(() => null),
            pricingService.getPaymentMethods().catch(() => []),
          ]);
        } catch (apiError) {
          console.log('Old pricing API not available');
        }
      } catch (apiError) {
        console.log('API not available, using default plans');
      }

      // Use subscription plans if available, otherwise fall back to old plans
      if (subscriptionPlansData.length > 0) {
        setSubscriptionPlans(subscriptionPlansData);
      } else if (plansData.length > 0) {
        setPlans(plansData);
      }

      setNewSubscription(newSubscriptionData);
      setSubscription(subscriptionData);
      setPaymentMethods(paymentMethodsData);
    } catch (error: any) {
      console.error('Error loading pricing data:', error);
      toast.error('Failed to load pricing information', {
        description: error.message || 'Please try again later.',
      });
    } finally {
      setIsLoadingPricing(false);
    }
  };

  const handleSubscribe = async (planId: string) => {
    if (!isAuthenticated) {
      toast.error('Authentication Required', {
        description: 'Please log in to subscribe',
      });
      return;
    }

    setIsProcessingPricing(true);
    setSelectedPlan(planId);

    try {
      // Check if this is a new subscription plan ID
      const isNewPlan = subscriptionPlans.some(p => p.id === planId);

      if (isNewPlan) {
        // Use new subscription service
        const { url } = await subscriptionService.createCheckout(planId as any);
        // Redirect to Stripe checkout
        window.location.href = url;
      } else {
        // Use old pricing service for backward compatibility
        if (paymentMethods.length === 0) {
          toast.info('Payment Method Required', {
            description: 'Please add a payment method first',
          });
          setPricingTab('payment');
          return;
        }

        const defaultPaymentMethod = paymentMethods.find(pm => pm.isDefault) || paymentMethods[0];

        const newSubscription = await pricingService.createSubscription({
          planId,
          paymentMethodId: defaultPaymentMethod.id,
        });

        setSubscription(newSubscription);
        toast.success('Subscription activated!', {
          description: 'Your plan has been successfully activated.',
        });

        await loadPricingData();
      }
    } catch (error: any) {
      console.error('Error subscribing:', error);
      toast.error('Subscription failed', {
        description: error.message || 'Please try again later.',
      });
      setIsProcessingPricing(false);
      setSelectedPlan(null);
    }
  };

  const handleCancelSubscription = async () => {
    if (!confirm('Are you sure you want to cancel your subscription? You will continue to have access until the end of your billing period.')) {
      return;
    }

    setIsProcessingPricing(true);
    try {
      // Try new subscription service first
      if (newSubscription) {
        await subscriptionService.cancel();
        toast.success('Subscription cancelled', {
          description: 'Your subscription will remain active until the end of your billing period.',
        });
        await loadPricingData();
      } else if (subscription) {
        // Fall back to old pricing service
        const updatedSubscription = await pricingService.cancelSubscription();
        setSubscription(updatedSubscription);
        toast.success('Subscription cancelled', {
          description: 'Your subscription will remain active until the end of your billing period.',
        });
        await loadPricingData();
      }
    } catch (error: any) {
      console.error('Error cancelling subscription:', error);
      toast.error('Failed to cancel subscription', {
        description: error.message || 'Please try again later.',
      });
    } finally {
      setIsProcessingPricing(false);
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

  // Calculate recent donations from requests
  const recentDonations = hospitalRequests
    .filter(r => r.requestType === 'DONOR_REQUEST')
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 5)
    .map(request => ({
      id: request.id,
      donor: request.user?.fullname || 'Anonymous',
      date: format(new Date(request.createdAt), 'MMMM d, yyyy'),
      status: request.status === 'FULFILLED' ? 'Completed' : request.status === 'ACTIVE' ? 'Processing' : 'Pending',
    }));

  // Calculate recent customers from bookings
  const recentCustomers = hospitalBookings
    .sort((a, b) => new Date(b.appointmentDate).getTime() - new Date(a.appointmentDate).getTime())
    .slice(0, 5)
    .map(booking => ({
      id: booking.id,
      name: booking.user?.fullname || 'Anonymous',
      date: format(new Date(booking.appointmentDate), 'MMMM d, yyyy'),
      treatment: booking.purpose || 'Consultation',
    }));

  const filteredAgents = agents.filter(agent =>
    agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    agent.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendChatMessage = async () => {
    if (!chatInput.trim() || isChatLoading) return;

    const userMessage = chatInput.trim();
    setChatMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setChatInput('');
    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = '24px';
    }
    setIsChatLoading(true);

    try {
      const response = await fetch('/api/openai/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: selectedModel,
          input: userMessage,
          messages: [
            ...chatMessages.map(msg => ({ role: msg.role, content: msg.content })),
            { role: 'user', content: userMessage },
          ],
        }),
      });

      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
        } catch {
          const errorText = await response.text();
          throw new Error(errorText || `HTTP error! status: ${response.status}`);
        }
        throw new Error(errorData.error || errorData.details || 'Failed to get response');
      }

      let data;
      try {
        data = await response.json();
      } catch (parseError) {
        const errorText = await response.text();
        console.error('Failed to parse response as JSON:', errorText);
        throw new Error('Invalid response from server');
      }
      setChatMessages(prev => [...prev, { role: 'assistant', content: data.output }]);

      // Scroll to bottom after message is added
      setTimeout(() => {
        const chatMessagesElement = document.getElementById('chat-messages');
        if (chatMessagesElement) {
          chatMessagesElement.scrollTop = chatMessagesElement.scrollHeight;
        }
      }, 100);
    } catch (error: any) {
      console.error('Chat error:', error);
      toast.error('Failed to send message', {
        description: error.message || 'Please try again later.',
      });
      // Remove the user message if it failed
      setChatMessages(prev => prev.slice(0, -1));
    } finally {
      setIsChatLoading(false);
    }
  };

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
        <div className="flex-1 flex flex-col overflow-y-auto relative pb-20" style={{
          backgroundImage: `
            radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.04) 0%, transparent 35%),
            radial-gradient(circle at 100% 100%, rgba(16, 185, 129, 0.04) 0%, transparent 35%),
            radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.03) 0%, transparent 40%),
            radial-gradient(circle at 25% 75%, rgba(236, 72, 153, 0.025) 0%, transparent 30%),
            radial-gradient(circle at 75% 25%, rgba(59, 130, 246, 0.025) 0%, transparent 30%),
            radial-gradient(circle at 15% 50%, rgba(16, 185, 129, 0.02) 0%, transparent 25%),
            radial-gradient(circle at 85% 50%, rgba(139, 92, 246, 0.02) 0%, transparent 25%)
          `,
          backgroundSize: '600px 600px, 800px 800px, 700px 700px, 500px 500px, 550px 550px, 400px 400px, 450px 450px',
          backgroundPosition: '0% 0%, 100% 100%, 50% 50%, 25% 75%, 75% 25%, 15% 50%, 85% 50%',
          backgroundRepeat: 'no-repeat'
        }}>
          <div className="flex-1 flex flex-col items-center justify-center p-8 max-w-full mx-auto w-full scale-[0.95] -mt-12">
            {activeView === 'agents' ? (
              <>
                <div className="max-w-4xl mx-auto w-full">
                  {/* Main Title */}
                  <div className="text-center mb-50 mt-20 px-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-4 leading-tight font-orbitron tracking-tight">
                      <span className="inline-block animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
                        AI-Powered{' '}
                      </span>
                      <span
                        className="inline-block animate-fade-in-up opacity-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient-x"
                        style={{
                          animationDelay: '0.2s',
                          animationFillMode: 'forwards',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}
                      >
                        Health{' '}
                      </span>
                      <span className="inline-block animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                        Intelligence,
                      </span>
                      <span className="inline-block animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                        Secured by{' '}
                      </span>
                      <span
                        // className="inline-block animate-fade-in-up opacity-0 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-gradient-x"
                        className="inline-block animate-fade-in-up opacity-0 text-white"
                        style={{
                          animationDelay: '0.5s',
                          animationFillMode: 'forwards',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}
                      >
                        Blockchain
                      </span>
                    </h1>
                  </div>

                  {/* Articles, Trends & Highlights - Moved to top */}
                  <div className="mb-6">
                    <div className="text-sm text-gray-400 mb-3">Articles, Trends & Highlights</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        {
                          title: "You're walking less than you do on a typical day.",
                          query: "Why is it important to maintain daily walking activity for health?",
                          image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=200&fit=crop"
                        },
                        {
                          title: "You burned an average of 47.1 calories a day over the last 7 days.",
                          query: "How does daily calorie burn impact overall health and metabolism?",
                          image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop"
                        },
                        {
                          title: "Why hearing Health Matters",
                          description: "Get insights into your hearing and how to look after it.",
                          query: "Why is hearing health important and how can I maintain good hearing health?",
                          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=200&fit=crop"
                        },
                        {
                          title: "Heart rate variability insights",
                          description: "Understanding what your heart rate patterns tell you about your health.",
                          query: "What is heart rate variability and what can it tell me about my health?",
                          image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=200&fit=crop"
                        }
                      ].map((item, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            const queryText = item.query || item.title;
                            setChatInput(queryText);
                            setTimeout(() => {
                              textareaRef.current?.focus();
                            }, 0);
                          }}
                          className="bg-[#1a1a1a]/60 border border-gray-800 rounded-lg overflow-hidden hover:border-purple-500 transition-all duration-300 group text-left hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/10 animate-fade-in-up opacity-0 cursor-pointer"
                          style={{ animationDelay: `${0.6 + index * 0.1}s`, animationFillMode: 'forwards' }}
                        >
                          {item.image && (
                            <div className="relative w-full h-32 bg-gray-800 overflow-hidden">
                              <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent" />
                            </div>
                          )}
                          <div className="flex flex-col gap-1 p-4">
                            <div className="text-white font-medium text-sm group-hover:text-purple-300 transition-colors">
                              {item.title}
                            </div>
                            {item.description && (
                              <p className="text-gray-400 text-xs mt-1">
                                {item.description}
                              </p>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Chat Messages Display */}
                  {chatMessages.length > 0 && (
                    <div id="chat-messages" className="mb-6 space-y-4 max-h-[500px] overflow-y-auto scroll-smooth">
                      {chatMessages.map((msg, idx) => (
                        <div
                          key={idx}
                          className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-[85%] rounded-lg px-4 py-3 ${msg.role === 'user'
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-800 text-gray-100'
                              }`}
                          >
                            <p className="text-sm whitespace-pre-wrap break-words">{msg.content}</p>
                          </div>
                        </div>
                      ))}
                      {isChatLoading && (
                        <div className="flex justify-start">
                          <div className="bg-gray-800 text-gray-100 rounded-lg px-4 py-3">
                            <Loader2 className="w-4 h-4 animate-spin" />
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Idea Description Input */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-400 mb-2">Describe your idea</label>
                    <div className="flex flex-col items-center gap-2 w-full bg-[#1a1a1a] border border-gray-800 rounded-lg px-4 py-4 text-gray-300 placeholder-gray-500 focus-within:border-purple-500 focus-within:ring-1 focus-within:ring-purple-500 min-h-[120px] transition-colors">

                      <div className='flex items-center justify-start w-full'>

                        <textarea
                          ref={textareaRef}
                          value={chatInput}
                          onChange={(e) => {
                            setChatInput(e.target.value);
                            // Auto-resize textarea
                            if (textareaRef.current) {
                              textareaRef.current.style.height = 'auto';
                              textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 400)}px`;
                            }
                          }}
                          onKeyDown={(e) => {
                            // Enter sends message, Shift+Enter creates new line
                            if (e.key === 'Enter' && !e.shiftKey) {
                              e.preventDefault();
                              if (chatInput.trim() && !isChatLoading) {
                                handleSendChatMessage();
                              }
                            }
                            // Shift+Enter will naturally create a new line
                          }}
                          onFocus={(e) => {
                            // Explicitly remove any outline that might appear
                            e.currentTarget.style.outline = 'none';
                            e.currentTarget.style.border = 'none';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                          placeholder="Type your question or describe what you'd like to learn..."
                          className="w-full bg-transparent border-none py-2 text-gray-300 placeholder-gray-500 resize-none rounded-sm focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                          rows={1}
                          style={{
                            minHeight: '24px',
                            maxHeight: '400px',
                            overflowY: 'auto',
                            outline: 'none',
                            border: 'none',
                            boxShadow: 'none',
                            WebkitAppearance: 'none',
                            MozAppearance: 'none'
                          }}
                        />
                        <Button
                          onClick={handleSendChatMessage}
                          disabled={!chatInput.trim() || isChatLoading}
                          className="disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isChatLoading ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                          ) : (
                            <Send className="w-5 h-5" />
                          )}
                        </Button>
                      </div>
                      <div className='flex items-center justify-between w-full bg-red-00 px-0'>
                        <div className="relative" ref={modelDropdownRef}>
                          <Button
                            variant="default"
                            onClick={() => setIsModelDropdownOpen(!isModelDropdownOpen)}
                            className='bg-transparent hover:bg-gray-800 cursor-pointer transition-colors'
                          >
                            <Infinity className="w-5 h-5" />
                            <ChevronDown className={`w-5 h-5 transition-transform ${isModelDropdownOpen ? 'rotate-180' : ''}`} />
                            {/* <span>Infinite</span> */}
                          </Button>
                          <Button variant="outline" className='bg-transparent hover:bg-transparent cursor-pointer bg-blend-darken'>
                            Share with a doctor
                          </Button>


                          {/* Model Selection Dropdown */}
                          {isModelDropdownOpen && (
                            <div className="absolute bottom-full left-0 mb-2 w-64 bg-[#1a1a1a] border border-gray-800 rounded-lg shadow-xl z-50 overflow-hidden">
                              <div className="py-1">
                                {availableModels.map((model) => (
                                  <button
                                    key={model.value}
                                    onClick={() => {
                                      setSelectedModel(model.value);
                                      setIsModelDropdownOpen(false);
                                    }}
                                    className={`w-full text-left px-4 py-3 hover:bg-gray-800 transition-colors flex items-start gap-3 ${selectedModel === model.value ? 'bg-blue-600/20 border-l-2 border-blue-500' : ''
                                      }`}
                                  >
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center gap-2 mb-1">
                                        <span className="text-sm font-medium text-white">
                                          {model.label}
                                        </span>
                                        {selectedModel === model.value && (
                                          <Check className="w-4 h-4 text-blue-500" />
                                        )}
                                      </div>
                                      <p className="text-xs text-gray-400">{model.description}</p>
                                    </div>
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                        <div>

                          <Button variant="default" className='bg-transparent hover:bg-transparent cursor-pointer bg-blend-darken'>
                            <Settings className="w-5 h-5" />
                          </Button>
                        </div>
                      </div>
                    </div>
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
                        "Explain how the immune system works like I'm 12",
                        "How does sleep deprivation impact the immune system?",
                        "What are the benefits of regular exercise for heart health?",
                        "How does stress affect mental and physical health?"
                      ].map((question, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setChatInput(question);
                            // Focus the textarea after setting the value
                            setTimeout(() => {
                              textareaRef.current?.focus();
                            }, 0);
                          }}
                          className="bg-[#1a1a1a] border border-gray-800 rounded-lg px-3 py-2 text-left text-gray-300 hover:border-purple-500 hover:text-white transition-colors text-[13px] cursor-pointer"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </div>


                </div>
                {/* <CommunityQuery /> */}
              </>
            ) : activeView === 'consultations' ? (
              <ConsultationManager />
            ) : activeView === 'dashboard' ? (
              <DashboardTab />
            ) : activeView === 'hospital-manager' ? (
              // Access control: Only medical facilities can view hospital dashboard
              user?.userType !== 'MEDICAL_FACILITY' ? (
                <div className="w-full max-w-2xl mx-auto text-center py-20">
                  <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-12">
                    <Shield className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-white mb-2">Access Denied</h2>
                    <p className="text-gray-400 mb-6">
                      The Hospital Dashboard is only available for medical facilities.
                      Regular users cannot access this section.
                    </p>
                    <button
                      onClick={() => {
                        setActiveView('agents');
                        setSelectedAgent(null);
                      }}
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                    >
                      Go Back to Apps
                    </button>
                  </div>
                </div>
              ) : (
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
                        {isLoadingStats ? (
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            {[1, 2, 3, 4].map(i => (
                              <div key={i} className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                                <div className="animate-pulse">
                                  <div className="h-4 bg-gray-700 rounded w-24 mb-2"></div>
                                  <div className="h-8 bg-gray-700 rounded w-16 mb-2"></div>
                                  <div className="h-4 bg-gray-700 rounded w-32"></div>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                              <h3 className="text-sm font-medium text-gray-400 mb-1">Total Donors</h3>
                              <p className="text-2xl font-bold text-white">{hospitalStats.totalDonors}</p>
                              <div className="mt-2 flex items-center text-sm">
                                <span className="text-green-400 font-medium">+{hospitalStats.newDonors} new</span>
                                <span className="text-gray-500 ml-2">this week</span>
                              </div>
                            </div>
                            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                              <h3 className="text-sm font-medium text-gray-400 mb-1">Active Donors</h3>
                              <p className="text-2xl font-bold text-white">{hospitalStats.activeDonors}</p>
                              <div className="mt-2 flex items-center text-sm">
                                <span className="text-yellow-400 font-medium">{hospitalStats.pendingDonors} pending</span>
                                <span className="text-gray-500 ml-2">verification</span>
                              </div>
                            </div>
                            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                              <h3 className="text-sm font-medium text-gray-400 mb-1">Total Customers</h3>
                              <p className="text-2xl font-bold text-white">{hospitalStats.totalCustomers}</p>
                              <div className="mt-2 flex items-center text-sm">
                                <span className="text-green-400 font-medium">+{hospitalStats.newCustomers} new</span>
                                <span className="text-gray-500 ml-2">this month</span>
                              </div>
                            </div>
                            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                              <h3 className="text-sm font-medium text-gray-400 mb-1">Active Customers</h3>
                              <p className="text-2xl font-bold text-white">{hospitalStats.activeCustomers}</p>
                              <div className="mt-2 flex items-center text-sm">
                                <span className="text-blue-400 font-medium">
                                  {hospitalStats.totalCustomers > 0
                                    ? Math.round((hospitalStats.activeCustomers / hospitalStats.totalCustomers) * 100)
                                    : 0}%
                                </span>
                                <span className="text-gray-500 ml-2">activity rate</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Recent Activity */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          {/* Recent Donations */}
                          <div className="bg-[#0b0b0d] border border-gray-800 rounded-lg overflow-hidden">
                            <div className="bg-gray-900/50 px-6 py-4 border-b border-gray-800 flex justify-between items-center">
                              <h3 className="font-medium text-white">Recent Donations</h3>
                              <button className="text-blue-400 text-sm font-medium hover:text-blue-300">View All</button>
                            </div>
                            <div className="divide-y divide-gray-800">
                              {isLoadingRequests ? (
                                <div className="px-6 py-4 text-center text-gray-400">
                                  <Loader2 className="h-5 w-5 animate-spin mx-auto mb-2" />
                                  <p className="text-sm">Loading donations...</p>
                                </div>
                              ) : recentDonations.length === 0 ? (
                                <div className="px-6 py-8 text-center text-gray-400">
                                  <p className="text-sm">No donations yet</p>
                                </div>
                              ) : (
                                recentDonations.map(donation => (
                                  <div key={donation.id} className="px-6 py-4 flex justify-between items-center">
                                    <div>
                                      <p className="font-medium text-white">{donation.donor}</p>
                                      <p className="text-sm text-gray-400">{donation.date}</p>
                                    </div>
                                    <span className={`text-xs px-2 py-1 rounded-full ${donation.status === 'Completed'
                                      ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                                      : donation.status === 'Processing'
                                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50'
                                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50'
                                      }`}>
                                      {donation.status}
                                    </span>
                                  </div>
                                ))
                              )}
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
                              {isLoadingBookings ? (
                                <div className="px-6 py-4 text-center text-gray-400">
                                  <Loader2 className="h-5 w-5 animate-spin mx-auto mb-2" />
                                  <p className="text-sm">Loading customers...</p>
                                </div>
                              ) : recentCustomers.length === 0 ? (
                                <div className="px-6 py-8 text-center text-gray-400">
                                  <p className="text-sm">No customers yet</p>
                                </div>
                              ) : (
                                recentCustomers.map(customer => (
                                  <div key={customer.id} className="px-6 py-4 flex justify-between items-center">
                                    <div>
                                      <p className="font-medium text-white">{customer.name}</p>
                                      <p className="text-sm text-gray-400">{customer.date}</p>
                                    </div>
                                    <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/50">
                                      {customer.treatment}
                                    </span>
                                  </div>
                                ))
                              )}
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
              )
            ) : null}
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

