'use client';

import { useState } from 'react';
import { User, Settings, CreditCard } from 'lucide-react';
import ProfileTab from './ProfileTab';
import SettingsTab from './SettingsTab';
import PricingTab from './PricingTab';

export default function DashboardTab() {
  const [activeTab, setActiveTab] = useState<'profile' | 'settings' | 'pricing'>('profile');

  return (
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
            onClick={() => setActiveTab('profile')}
            className={`${
              activeTab === 'profile'
                ? 'border-blue-500 text-white'
                : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-700'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2`}
          >
            <User className="w-4 h-4" />
            Profile
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`${
              activeTab === 'settings'
                ? 'border-blue-500 text-white'
                : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-700'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2`}
          >
            <Settings className="w-4 h-4" />
            Settings
          </button>
          <button
            onClick={() => setActiveTab('pricing')}
            className={`${
              activeTab === 'pricing'
                ? 'border-blue-500 text-white'
                : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-700'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2`}
          >
            <CreditCard className="w-4 h-4" />
            Pricing
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'profile' && <ProfileTab />}
      {activeTab === 'settings' && <SettingsTab />}
      {activeTab === 'pricing' && <PricingTab />}
    </div>
  );
}

