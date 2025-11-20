'use client';

import { useState } from 'react';
import { Bell, Shield, Globe, Loader, CheckCircle } from 'lucide-react';
import { useAccount } from 'wagmi';
import Image from 'next/image';

interface Settings {
  notifications: {
    email: boolean;
    sms: boolean;
    browser: boolean;
    appointments: boolean;
    marketing: boolean;
    updates: boolean;
  };
  privacy: {
    shareProfile: boolean;
    showDonationHistory: boolean;
    anonymizeData: boolean;
    allowResearch: boolean;
  };
  security: {
    twoFactorEnabled: boolean;
    loginNotifications: boolean;
    allowMultipleDevices: boolean;
    sessionTimeout: '30m' | '1h' | '4h' | '1d' | 'never';
  };
  preferences: {
    theme: 'light' | 'dark' | 'system';
    language: 'en' | 'es' | 'fr' | 'zh';
    dateFormat: 'MM/DD/YYYY' | 'DD/MM/YYYY' | 'YYYY-MM-DD';
    timeZone: string;
  };
}

export default function SettingsTab() {
  const { address } = useAccount();
  const [settings, setSettings] = useState<Settings>({
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
      sessionTimeout: '4h',
    },
    preferences: {
      theme: 'system',
      language: 'en',
      dateFormat: 'MM/DD/YYYY',
      timeZone: 'America/New_York',
    },
  });
  const [settingsTab, setSettingsTab] = useState<'notifications' | 'privacy' | 'security' | 'preferences'>('notifications');
  const [isSavingSettings, setIsSavingSettings] = useState(false);
  const [showSavedMessage, setShowSavedMessage] = useState(false);

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
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            isSavingSettings
              ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          {isSavingSettings ? (
            <span className="flex items-center gap-2">
              <Loader className="w-4 h-4 animate-spin" />
              Saving...
            </span>
          ) : (
            'Save Settings'
          )}
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
            className={`px-6 py-3 text-sm font-medium flex items-center gap-2 ${
              settingsTab === 'notifications'
                ? 'text-blue-400 border-b-2 border-blue-500 bg-[#1a1a1a]'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            <Bell className="w-4 h-4" />
            Notifications
          </button>
          <button
            onClick={() => setSettingsTab('privacy')}
            className={`px-6 py-3 text-sm font-medium flex items-center gap-2 ${
              settingsTab === 'privacy'
                ? 'text-blue-400 border-b-2 border-blue-500 bg-[#1a1a1a]'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            <Shield className="w-4 h-4" />
            Privacy
          </button>
          <button
            onClick={() => setSettingsTab('security')}
            className={`px-6 py-3 text-sm font-medium flex items-center gap-2 ${
              settingsTab === 'security'
                ? 'text-blue-400 border-b-2 border-blue-500 bg-[#1a1a1a]'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            <Shield className="w-4 h-4" />
            Security
          </button>
          <button
            onClick={() => setSettingsTab('preferences')}
            className={`px-6 py-3 text-sm font-medium flex items-center gap-2 ${
              settingsTab === 'preferences'
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
  );
}

