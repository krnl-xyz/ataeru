'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useAuth } from '@/app/contexts/use-auth';
import { useAccount, useDisconnect } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Copy, LogOut, User as UserIcon, Wallet, ExternalLink, Settings, ChevronDown } from 'lucide-react';
import { toast } from 'sonner';

interface SidebarUserDropdownProps {
  isSidebarOpen: boolean;
}

export default function SidebarUserDropdown({ isSidebarOpen }: SidebarUserDropdownProps) {
  const { user, logout } = useAuth();
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  const handleLogout = () => {
    logout();
    if (isConnected) {
      disconnect();
    }
    setOpen(false);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard`);
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const formatAddress = (addr: string) => {
    if (!addr) return 'Not connected';
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  if (!user) return null;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-2 ${isSidebarOpen ? 'w-full px-3 py-2' : 'p-2'} rounded-lg hover:bg-gray-800 transition-colors text-gray-400 hover:text-gray-200`}
      >
        {isSidebarOpen ? (
          <>
            <Avatar className="h-8 w-8">
              <AvatarImage src="" alt={user.fullname} />
              <AvatarFallback className="bg-blue-600 text-white text-xs">
                {getInitials(user.fullname)}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium text-gray-300 truncate flex-1 text-left">
              {user.fullname}
            </span>
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </>
        ) : (
          <Settings className="w-5 h-5" />
        )}
      </button>

      {open && (
        <div className={`absolute ${isSidebarOpen ? 'left-0 bottom-20' : 'left-15 ml-2'} bottom-0 mt-2 w-80 z-50`}>
          <div className="p-4 bg-[#1a1a1a] border border-gray-800 rounded-lg shadow-lg">
            {/* User Info Section */}
            <div className="flex items-center gap-3 mb-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src="" alt={user.fullname} />
                <AvatarFallback className="bg-blue-600 text-white text-lg">
                  {getInitials(user.fullname)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white truncate">
                  {user.fullname}
                </p>
                <p className="text-xs text-gray-400 truncate">{user.email}</p>
              </div>
            </div>

            <Separator className="my-4 bg-gray-800" />

            {/* Wallet Info Section */}
            <ConnectButton.Custom>
              {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                mounted,
              }) => {
                const ready = mounted;
                const connected = ready && account && chain;

                return (
                  <div className="space-y-3">
                    {/* Wallet Address */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Wallet className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-400">Wallet</span>
                      </div>
                      {connected && account ? (
                        <div className="flex items-center gap-2">
                          <button
                            onClick={openAccountModal}
                            className="text-sm font-mono text-white hover:text-blue-400 transition-colors"
                          >
                            {formatAddress(account.address)}
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              copyToClipboard(account.address, 'Wallet address');
                            }}
                            className="p-1 hover:bg-gray-800 rounded"
                            title="Copy address"
                          >
                            <Copy className="h-3 w-3 text-gray-400" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openConnectModal();
                          }}
                          className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1"
                        >
                          Connect <ExternalLink className="h-3 w-3" />
                        </button>
                      )}
                    </div>

                    {/* Chain Info */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className={`h-4 w-4 rounded-full flex items-center justify-center ${connected ? 'bg-green-500' : 'bg-gray-600'
                            }`}
                        >
                          <div className="h-2 w-2 rounded-full bg-white"></div>
                        </div>
                        <span className="text-sm text-gray-400">Chain</span>
                      </div>
                      {connected && chain ? (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openChainModal();
                          }}
                          className="flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors"
                        >
                          {chain.hasIcon && (
                            <div
                              style={{
                                background: chain.iconBackground,
                                width: 16,
                                height: 16,
                                borderRadius: 999,
                                overflow: 'hidden',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              {chain.iconUrl && (
                                <Image
                                  alt={chain.name ?? 'Chain icon'}
                                  src={chain.iconUrl}
                                  width={16}
                                  height={16}
                                />
                              )}
                            </div>
                          )}
                          <span>{chain.name}</span>
                        </button>
                      ) : (
                        <span className="text-sm text-gray-500">Not connected</span>
                      )}
                    </div>

                    {/* Account Type */}
                    {user.userType && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <UserIcon className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-400">Account Type</span>
                        </div>
                        <span className="text-xs px-2 py-1 bg-blue-600/20 text-blue-400 border border-blue-500/50 rounded-full lowercase">
                          {user.userType}
                        </span>
                      </div>
                    )}
                  </div>
                );
              }}
            </ConnectButton.Custom>

            <Separator className="my-4 bg-gray-800" />

            {/* Actions */}
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-400 hover:bg-red-500/20 rounded-lg transition-colors"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

