'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/app/contexts/use-auth';
import { authService } from '@/lib/services/auth';
import { pricingService, Plan } from '@/lib/services/pricing';
import { toast } from 'sonner';
import { ArrowLeft, ArrowRight, Check, User, Building2, Mail, Lock, Phone, MapPin, FileText, Sparkles, CreditCard } from 'lucide-react';

interface RegistrationFormData {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  address: string;
  about: string;
  userType: 'USER' | 'MEDICAL_FACILITY';
}

type Step = 'type' | 'basic' | 'contact' | 'details' | 'pricing' | 'terms';

export default function SignupPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isAuthenticated, signup, isLoading } = useAuth();
  const [currentStep, setCurrentStep] = useState<Step>('type');
  const [selectedType, setSelectedType] = useState<'user' | 'hospital' | null>(null);
  const [isSSOFlow, setIsSSOFlow] = useState(false);
  const [ssoProvider, setSsoProvider] = useState<'google' | 'apple' | null>(null);
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: '',
    about: '',
    userType: 'USER',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof RegistrationFormData, string>>>({});
  const [plans, setPlans] = useState<Plan[]>([]);
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);
  const [isLoadingPlans, setIsLoadingPlans] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  // Check for SSO flow parameters
  useEffect(() => {
    const sso = searchParams.get('sso');
    const email = searchParams.get('email');
    const fullname = searchParams.get('fullname');

    if (sso && (sso === 'google' || sso === 'apple')) {
      setIsSSOFlow(true);
      setSsoProvider(sso);

      // Pre-populate form data
      if (email) {
        setFormData(prev => ({ ...prev, email: decodeURIComponent(email) }));
      }
      if (fullname) {
        setFormData(prev => ({ ...prev, fullname: decodeURIComponent(fullname) }));
      }
    }
  }, [searchParams]);

  // Load plans when pricing step is reached
  useEffect(() => {
    if (currentStep === 'pricing' && plans.length === 0) {
      loadPlans();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep]);

  const loadPlans = async () => {
    setIsLoadingPlans(true);
    try {
      let plansData: Plan[] = [];
      try {
        plansData = await pricingService.getPlans();
      } catch (apiError) {
        console.log('API not available, using default plans');
        plansData = [
          {
            id: 'free',
            name: 'Free',
            description: 'Perfect for getting started',
            price: 0,
            currency: 'USD',
            interval: 'month',
            features: [
              'Basic AI consultations',
              '5 credits per month',
              'Access to hospital directory',
              'Basic booking features',
            ],
            credits: 5,
          },
          {
            id: 'pro',
            name: 'Pro',
            description: 'For power users and professionals',
            price: 29.99,
            currency: 'USD',
            interval: 'month',
            features: [
              'Unlimited AI consultations',
              '100 credits per month',
              'Priority booking',
              'Advanced analytics',
              '24/7 support',
              'Early access to new features',
            ],
            credits: 100,
            isPopular: true,
          },
          {
            id: 'enterprise',
            name: 'Enterprise',
            description: 'For hospitals and large organizations',
            price: 99.99,
            currency: 'USD',
            interval: 'month',
            features: [
              'Everything in Pro',
              'Unlimited credits',
              'Custom integrations',
              'Dedicated account manager',
              'SLA guarantee',
              'Custom training',
            ],
            credits: -1,
          },
        ];
      }
      setPlans(plansData);
      // Auto-select free plan if no plan selected
      if (!selectedPlanId) {
        setSelectedPlanId('free');
      }
    } catch (error: any) {
      console.error('Error loading plans:', error);
      toast.error('Failed to load plans', {
        description: error.message || 'Please try again later.',
      });
    } finally {
      setIsLoadingPlans(false);
    }
  };

  const validateStep = (step: Step): boolean => {
    const newErrors: Partial<Record<keyof RegistrationFormData, string>> = {};

    if (step === 'basic') {
      // Skip password validation for SSO flow
      if (!isSSOFlow) {
        if (!formData.fullname.trim()) {
          newErrors.fullname = 'Name is required';
        }
        if (!formData.email.trim()) {
          newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = 'Invalid email address';
        }
        if (!formData.password) {
          newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
          newErrors.password = 'Password must be at least 6 characters';
        }
        if (formData.password !== formData.confirmPassword) {
          newErrors.confirmPassword = 'Passwords do not match';
        }
      } else {
        // For SSO flow, skip validation - data comes from SSO account
        // Only validate email format if email is provided
        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = 'Invalid email address';
        }
      }
    }

    if (step === 'contact') {
      // Skip validation for SSO flow - these fields are optional for SSO users
      if (!isSSOFlow) {
        if (!formData.phone.trim()) {
          newErrors.phone = 'Phone number is required';
        }
        if (!formData.address.trim()) {
          newErrors.address = 'Address is required';
        }
      }
    }

    if (step === 'details') {
      // Skip validation for SSO flow - about is optional
      if (!isSSOFlow && !formData.about.trim()) {
        newErrors.about = 'About section is required';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 'type' && !selectedType) {
      toast.error('Please select an account type');
      return;
    }

    if (currentStep === 'type') {
      setFormData(prev => ({
        ...prev,
        userType: selectedType === 'user' ? 'USER' : 'MEDICAL_FACILITY',
      }));
      // Skip basic step for SSO flow, go directly to contact
      if (isSSOFlow) {
        setCurrentStep('contact');
      } else {
        setCurrentStep('basic');
      }
      return;
    }

    if (validateStep(currentStep)) {
      const stepOrder: Step[] = ['type', 'basic', 'contact', 'details', 'pricing', 'terms'];
      const currentIndex = stepOrder.indexOf(currentStep);
      if (currentIndex < stepOrder.length - 1) {
        setCurrentStep(stepOrder[currentIndex + 1]);
      }
    }
  };

  const handleBack = () => {
    const stepOrder: Step[] = ['type', 'basic', 'contact', 'details', 'pricing', 'terms'];
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex > 0) {
      // If going back from contact and in SSO flow, skip basic step
      if (currentStep === 'contact' && isSSOFlow) {
        setCurrentStep('type');
      } else {
        setCurrentStep(stepOrder[currentIndex - 1]);
      }
    }
  };

  const handleGoogleSignup = async () => {
    try {
      setIsSubmitting(true);
      await authService.loginWithGoogle();
      toast.success('Account created successfully!');
      router.push('/');
    } catch (error: any) {
      console.error('Google signup error:', error);
      toast.error('Google signup failed', {
        description: error.message || 'Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAppleSignup = async () => {
    try {
      setIsSubmitting(true);
      await authService.loginWithApple();
    } catch (error: any) {
      console.error('Apple signup error:', error);
      toast.error('Apple signup failed', {
        description: error.message || 'Please try again later.',
      });
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async () => {
    if (!validateStep('details')) {
      setCurrentStep('details');
      return;
    }

    if (!selectedPlanId) {
      toast.error('Please select a plan');
      setCurrentStep('pricing');
      return;
    }

    if (!acceptedTerms) {
      toast.error('Please accept the terms and conditions to continue');
      return;
    }

    setIsSubmitting(true);
    try {
      if (isSSOFlow && ssoProvider) {
        // For SSO flow, use SSO signup endpoint which uses the SSO session
        // Only send additional fields that user provided - backend will use SSO session for auth
        const signupData: any = {
          userType: formData.userType,
        };

        // Add optional fields if provided
        if (formData.phone.trim()) {
          signupData.phone = formData.phone;
        }
        if (formData.address.trim()) {
          signupData.address = formData.address;
        }
        if (formData.about.trim()) {
          signupData.about = formData.about;
        }

        // Use SSO signup endpoint - backend will use SSO session for fullname, email, and auth
        await authService.signupWithSSO(ssoProvider, signupData);
      } else {
        // For regular signup, use regular signup endpoint with all required fields
        const signupData = {
          fullname: formData.fullname,
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
          address: formData.address,
          about: formData.about,
          userType: formData.userType,
        };

        await signup(signupData);
      }
      toast.success('Account created successfully!');

      // If a paid plan was selected, redirect to pricing to complete subscription
      if (selectedPlanId !== 'free') {
        router.push('/?view=dashboard&tab=pricing');
      } else {
        router.push('/');
      }
    } catch (error) {
      // Error is already handled in the auth context
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateFormData = (field: keyof RegistrationFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          {/* <Link href="/" className="inline-block mb-4">
            <Image src="/images/logo.svg" alt="Logo" width={48} height={48} className="mx-auto" />
          </Link> */}
          {/* <h1 className="text-3xl font-bold text-white mb-2">Create Your Account</h1> */}
          {/* <p className="text-gray-400">Join our platform and start your journey</p> */}
        </div>


        {/* Main Content */}
        <div className="space-y-6">
          {/* Step 1: Account Type Selection */}
          {currentStep === 'type' && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                {/* <h2 className="text-2xl font-bold text-white mb-2">Choose Your Account Type</h2> */}
                <p className="text-gray-400">Select the type of account that best fits your needs</p>
              </div>

              {/* SSO Buttons - Hide if coming from SSO flow */}
              {!isSSOFlow && (
                <div className="space-y-3 mb-6">
                  <button
                    type="button"
                    onClick={handleGoogleSignup}
                    disabled={isSubmitting || isLoading}
                    className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-700 rounded-lg text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    <span>Continue with Google</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleAppleSignup}
                    disabled={isSubmitting || isLoading}
                    className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-700 rounded-lg text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                    </svg>
                    <span>Continue with Apple</span>
                  </button>
                </div>
              )}

              {/* SSO Flow Indicator */}
              {isSSOFlow && (
                <div className="mb-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <p className="text-sm text-blue-400 text-center">
                    Signing up with {ssoProvider === 'google' ? 'Google' : 'Apple'} - Your account will be linked to your {ssoProvider === 'google' ? 'Google' : 'Apple'} account
                  </p>
                </div>
              )}

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-[#0b0b0d] text-gray-400">Or continue with email</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <button
                  onClick={() => setSelectedType('user')}
                  className={`rounded-xl p-6 border-2 transition-all text-left group overflow-hidden ${selectedType === 'user'
                    ? 'border-blue-500 bg-blue-500/10'
                    : 'border-gray-800 hover:border-blue-500/50 bg-[#0a0a0a]'
                    }`}
                >
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                    <Image
                      src="https://i.imgur.com/qXaBeHO.png"
                      alt="User Registration"
                      width={300}
                      height={225}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  </div>
                  <h3 className="font-bold text-xl mb-2 text-white">Individual User</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Access fertility services, find donors, or become a donor yourself.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>Book consultations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>Access donor directory</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>Manage your profile</span>
                    </li>
                  </ul>
                </button>

                <button
                  onClick={() => setSelectedType('hospital')}
                  className={`rounded-xl p-6 border-2 transition-all text-left group overflow-hidden ${selectedType === 'hospital'
                    ? 'border-blue-500 bg-blue-500/10'
                    : 'border-gray-800 hover:border-blue-500/50 bg-[#0a0a0a]'
                    }`}
                >
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                    <Image
                      src="https://i.imgur.com/IU8uOO8.png"
                      alt="Hospital Registration"
                      width={300}
                      height={225}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  </div>
                  <h3 className="font-bold text-xl mb-2 text-white">Medical Facility</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Offer fertility services to patients and manage donor programs.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>Manage patients</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>Create donor requests</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>Track bookings</span>
                    </li>
                  </ul>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Basic Information */}
          {currentStep === 'basic' && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Let&apos;s start with your account details</h2>
                {/* <p className="text-gray-400">Let&apos;s start with your account details</p> */}
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {selectedType === 'user' ? 'Full Name' : 'Facility Name'}
                  </label>
                  <input
                    type="text"
                    value={formData.fullname}
                    placeholder={selectedType === 'user' ? "Enter your full name" : "Enter facility name"}
                    onChange={(e) => updateFormData('fullname', e.target.value)}
                    className={`w-full px-4 py-3 bg-[#0a0a0a] border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.fullname ? 'border-red-500' : 'border-gray-700'
                      }`}
                  />
                  {errors.fullname && <p className="text-red-400 text-sm mt-1">{errors.fullname}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    placeholder="Enter your email address"
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className={`w-full px-4 py-3 bg-[#0a0a0a] border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-700'
                      }`}
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                      <Lock className="w-4 h-4" />
                      Password
                    </label>
                    <input
                      type="password"
                      value={formData.password}
                      placeholder="Create a password"
                      onChange={(e) => updateFormData('password', e.target.value)}
                      className={`w-full px-4 py-3 bg-[#0a0a0a] border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.password ? 'border-red-500' : 'border-gray-700'
                        }`}
                      minLength={6}
                    />
                    {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
                    <p className="text-gray-500 text-xs mt-1">Must be at least 6 characters</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                      <Lock className="w-4 h-4" />
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      value={formData.confirmPassword}
                      placeholder="Confirm your password"
                      onChange={(e) => updateFormData('confirmPassword', e.target.value)}
                      className={`w-full px-4 py-3 bg-[#0a0a0a] border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-700'
                        }`}
                      minLength={6}
                    />
                    {errors.confirmPassword && <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Contact Details */}
          {currentStep === 'contact' && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white m  b-2">How can we reach you?</h2>
                {/* <p className="text-gray-400">How can we reach you?</p> */}
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    placeholder="+1234567890"
                    onChange={(e) => updateFormData('phone', e.target.value)}
                    className={`w-full px-4 py-3 bg-[#0a0a0a] border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.phone ? 'border-red-500' : 'border-gray-700'
                      }`}
                  />
                  {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Address
                  </label>
                  <textarea
                    value={formData.address}
                    onChange={(e) => updateFormData('address', e.target.value)}
                    placeholder={selectedType === 'user' ? "Enter your address" : "Enter facility address"}
                    rows={3}
                    className={`w-full px-4 py-3 bg-[#0a0a0a] border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${errors.address ? 'border-red-500' : 'border-gray-700'
                      }`}
                  />
                  {errors.address && <p className="text-red-400 text-sm mt-1">{errors.address}</p>}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Additional Details */}
          {currentStep === 'details' && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Tell us more about yourself</h2>
                {/* <p className="text-gray-400">Tell us more about yourself</p> */}
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    About
                  </label>
                  <textarea
                    value={formData.about}
                    onChange={(e) => updateFormData('about', e.target.value)}
                    placeholder={selectedType === 'user' ? "A short description about yourself" : "About the facility"}
                    rows={4}
                    className={`w-full px-4 py-3 bg-[#0a0a0a] border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${errors.about ? 'border-red-500' : 'border-gray-700'
                      }`}
                  />
                  {errors.about && <p className="text-red-400 text-sm mt-1">{errors.about}</p>}
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Pricing */}
          {currentStep === 'pricing' && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Choose Your Plan</h2>
                <p className="text-gray-400">Select a plan that fits your needs</p>
              </div>

              {isLoadingPlans ? (
                <div className="flex items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                </div>
              ) : (
                <div className="grid md:grid-cols-3 gap-6">
                  {plans.map((plan) => (
                    <button
                      key={plan.id}
                      onClick={() => setSelectedPlanId(plan.id)}
                      className={`relative rounded-xl p-6 border-2 transition-all text-left ${selectedPlanId === plan.id
                        ? 'border-blue-500 bg-blue-500/10'
                        : 'border-gray-800 hover:border-blue-500/50 bg-[#0a0a0a]'
                        }`}
                    >
                      {plan.isPopular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                            Popular
                          </span>
                        </div>
                      )}
                      <div className="flex items-center gap-3 mb-4">
                        <CreditCard className="w-6 h-6 text-blue-400" />
                        <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                      </div>
                      <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                      <div className="mb-4">
                        <span className="text-3xl font-bold text-white">
                          ${plan.price}
                        </span>
                        <span className="text-gray-400 text-sm">/{plan.interval}</span>
                      </div>
                      <ul className="space-y-2 mb-4">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                            <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      {selectedPlanId === plan.id && (
                        <div className="mt-4 pt-4 border-t border-gray-700">
                          <div className="flex items-center gap-2 text-blue-400">
                            <Check className="w-5 h-5" />
                            <span className="font-medium">Selected</span>
                          </div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Step 6: Terms and Conditions */}
          {currentStep === 'terms' && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Terms and Conditions</h2>
                <p className="text-gray-400">Please read and accept our terms to continue</p>
              </div>

              <div className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-6 max-h-96 overflow-y-auto">
                <div className="space-y-4 text-sm text-gray-300">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">1. Acceptance of Terms</h3>
                    <p className="text-gray-400">
                      By accessing and using this platform, you accept and agree to be bound by the terms and provision of this agreement.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">2. Use License</h3>
                    <p className="text-gray-400">
                      Permission is granted to temporarily use this platform for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">3. Medical Information Disclaimer</h3>
                    <p className="text-gray-400">
                      The information provided on this platform is for general informational purposes only and is not intended as medical advice. Always seek the advice of qualified health providers with any questions you may have regarding a medical condition.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">4. Privacy Policy</h3>
                    <p className="text-gray-400">
                      Your use of this platform is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices regarding the collection and use of your personal information.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">5. User Account</h3>
                    <p className="text-gray-400">
                      You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">6. Prohibited Uses</h3>
                    <p className="text-gray-400">
                      You may not use this platform in any way that causes, or may cause, damage to the platform or impairment of the availability or accessibility of the platform.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">7. Limitation of Liability</h3>
                    <p className="text-gray-400">
                      In no event shall the platform or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit) arising out of the use or inability to use the materials on this platform.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">8. Modifications</h3>
                    <p className="text-gray-400">
                      We reserve the right to revise these terms at any time without notice. By using this platform, you are agreeing to be bound by the then current version of these terms.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-[#0a0a0a] border border-gray-800 rounded-lg">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                  className="mt-1 w-5 h-5 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label htmlFor="acceptTerms" className="text-sm text-gray-300 cursor-pointer">
                  I have read and agree to the Terms and Conditions and Privacy Policy. I understand that I am creating a legally binding agreement.
                </label>
              </div>

              {!acceptedTerms && (
                <p className="text-red-400 text-sm">You must accept the terms and conditions to continue.</p>
              )}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center pt-6">
            <button
              type="button"
              onClick={handleBack}
              disabled={currentStep === 'type'}
              className="p-3 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              title="Back"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            {currentStep === 'terms' ? (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting || isLoading || !acceptedTerms}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity font-medium"
              >
                {isSubmitting || isLoading ? (
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 animate-spin" />
                    Creating Account...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Create Account
                    <Check className="w-4 h-4" />
                  </span>
                )}
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNext}
                className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:opacity-90 transition-opacity"
                title="Next"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Login Link */}
          <div className="text-center mt-6">
            <p className="text-gray-400 text-sm">
              Already have an account?{' '}
              <Link href="/login" className="text-blue-400 hover:text-blue-300 font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

