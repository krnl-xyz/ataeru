'use client';

import { X } from 'lucide-react';

interface App {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface AppTabsNavigationProps {
  activeView: 'agents' | 'dashboard' | string;
  openAppTabs: string[];
  agents: App[];
  onViewChange: (view: 'agents' | 'dashboard' | string) => void;
  onCloseTab: (appId: string, e: React.MouseEvent) => void;
}

export default function AppTabsNavigation({
  activeView,
  openAppTabs,
  agents,
  onViewChange,
  onCloseTab,
}: AppTabsNavigationProps) {
  return (
    <div className="flex items-center gap-2 bg-[#1a1a1a] rounded-full px-2 overflow-x-auto">
      {/* Permanent Tabs */}
      <button
        onClick={() => onViewChange('agents')}
        className={`px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap ${activeView === 'agents'
          ? 'text-white border-b-2 border-blue-500'
          : 'text-gray-400 hover:text-gray-200'
          }`}
      >
        AI
      </button>
      <button
        onClick={() => onViewChange('dashboard')}
        className={`px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap ${activeView === 'dashboard'
          ? 'text-white border-b-2 border-blue-500'
          : 'text-gray-400 hover:text-gray-200'
          }`}
      >
        Dashboard
      </button>
      {/* Dynamic App Tabs */}
      {openAppTabs.map((appId) => {
        const app = agents.find(a => a.id === appId);
        if (!app) return null;
        const Icon = app.icon;
        return (
          <button
            key={appId}
            onClick={() => onViewChange(appId)}
            className={`px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap flex items-center gap-2 relative group ${activeView === appId
              ? 'text-white border-b-2 border-blue-500'
              : 'text-gray-400 hover:text-gray-200'
              }`}
          >
            <Icon className="w-4 h-4" />
            <span>{app.name}</span>
            <button
              onClick={(e) => onCloseTab(appId, e)}
              className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-700 rounded p-0.5"
            >
              <X className="w-3 h-3" />
            </button>
          </button>
        );
      })}
    </div>
  );
}

