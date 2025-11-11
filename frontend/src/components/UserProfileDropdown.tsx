'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useAuth } from '@/app/contexts/use-auth';
import { useAccount, useDisconnect } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Copy, LogOut, User, Wallet, ChevronDown, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

export default function UserProfileDropdown() {
  const { user, logout } = useAuth();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const [open, setOpen] = useState(false);

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
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
          <Avatar className="h-8 w-8">
            <AvatarImage src="" alt={user.fullname} />
            <AvatarFallback className="bg-blue-100 text-blue-600">
              {getInitials(user.fullname)}
            </AvatarFallback>
          </Avatar>
          <span className="hidden sm:block text-sm font-medium text-gray-700">
            {user.fullname}
          </span>
          <ChevronDown className="h-4 w-4 text-gray-500 hidden sm:block" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0 shadow-lg" align="end">
        <div className="p-4 bg-white rounded-lg">
          {/* User Info Section */}
          <div className="flex items-center gap-3 mb-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src="" alt={user.fullname} />
              <AvatarFallback className="bg-blue-100 text-blue-600 text-lg">
                {getInitials(user.fullname)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">
                {user.fullname}
              </p>
              <p className="text-xs text-gray-500 truncate">{user.email}</p>
            </div>
          </div>

          <Separator className="my-4" />

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
                      <span className="text-sm text-gray-600">Wallet</span>
                    </div>
                    {connected && account ? (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={openAccountModal}
                          className="text-sm font-mono text-gray-900 hover:text-blue-600 transition-colors"
                        >
                          {formatAddress(account.address)}
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            copyToClipboard(account.address, 'Wallet address');
                          }}
                          className="p-1 hover:bg-gray-100 rounded"
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
                        className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
                      >
                        Connect <ExternalLink className="h-3 w-3" />
                      </button>
                    )}
                  </div>

                  {/* Chain Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className={`h-4 w-4 rounded-full flex items-center justify-center ${
                          connected ? 'bg-green-500' : 'bg-gray-300'
                        }`}
                      >
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      </div>
                      <span className="text-sm text-gray-600">Chain</span>
                    </div>
                    {connected && chain ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openChainModal();
                        }}
                        className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors"
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
                      <span className="text-sm text-gray-400">Not connected</span>
                    )}
                  </div>

                  {/* Account Type */}
                  {user.userType && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">Account Type</span>
                      </div>
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                        {user.userType === 'USER' ? 'User' : 'Medical Facility'}
                      </span>
                    </div>
                  )}
                </div>
              );
            }}
          </ConnectButton.Custom>

          <Separator className="my-4" />

          {/* Actions */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

