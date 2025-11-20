'use client';

import React, { useState, useEffect } from 'react';
import { getUniversalLink } from "@selfxyz/core";
import {
  SelfQRcodeWrapper,
  SelfAppBuilder,
  type SelfApp,
} from "@selfxyz/qrcode";
import { ethers } from "ethers";
import { X, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useAccount } from 'wagmi';
import { toast } from 'sonner';
import { hospitalService } from '@/lib/services/hospital';

interface HospitalVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  hospitalId?: string;
}

export default function HospitalVerificationModal({
  isOpen,
  onClose,
  onSuccess,
  hospitalId,
}: HospitalVerificationModalProps) {
  const { address } = useAccount();
  const [selfApp, setSelfApp] = useState<SelfApp | null>(null);
  const [universalLink, setUniversalLink] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState<'idle' | 'verifying' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (!isOpen || !address) return;

    try {
      const userId = address || ethers.ZeroAddress;

      const app = new SelfAppBuilder({
        version: 2,
        appName: process.env.NEXT_PUBLIC_SELF_APP_NAME || "Synhealth Hospital Verification",
        scope: process.env.NEXT_PUBLIC_SELF_SCOPE || "Synhealth-hospital-verification",
        endpoint: process.env.NEXT_PUBLIC_SELF_ENDPOINT || "",
        logoBase64: "https://i.postimg.cc/mrmVf9hm/self.png",
        userId: userId,
        endpointType: "staging_https",
        userIdType: "hex",
        userDefinedData: hospitalId || "",
        disclosures: {
          // Hospital verification requirements
          minimumAge: 18,
          nationality: true,
          gender: true,
          // Add more disclosures as needed for hospital verification
        }
      }).build();

      setTimeout(() => {
        setSelfApp(app);
        setUniversalLink(getUniversalLink(app));
        setVerificationStatus('idle');
      }, 0);
    } catch (error) {
      console.error("Failed to initialize Self app:", error);
      toast.error('Failed to initialize verification', {
        description: 'Please check your Self Protocol configuration',
      });
      setTimeout(() => {
        setVerificationStatus('error');
      }, 0);
    }
  }, [isOpen, address, hospitalId]);

  const handleSuccessfulVerification = async (verificationData?: any) => {
    if (!hospitalId) {
      toast.error('Hospital ID is required for verification');
      return;
    }

    setIsVerifying(true);
    setVerificationStatus('verifying');

    try {
      // Send verification result to backend
      await hospitalService.verifyHospital(hospitalId, {
        selfVerificationId: verificationData?.verificationId,
        verificationProof: verificationData?.proof,
      });

      setVerificationStatus('success');
      toast.success('Hospital verified successfully!');

      // Call onSuccess after a short delay
      setTimeout(() => {
        onSuccess?.();
        onClose();
        setVerificationStatus('idle');
        setIsVerifying(false);
      }, 2000);
    } catch (error: any) {
      console.error("Verification error:", error);
      setVerificationStatus('error');
      toast.error('Verification failed', {
        description: error.message || 'Please try again',
      });
      setIsVerifying(false);
    }
  };

  const handleError = () => {
    console.error("Error: Failed to verify identity");
    setVerificationStatus('error');
    toast.error('Verification failed', {
      description: 'Please scan the QR code again with the Self app',
    });
    setIsVerifying(false);
  };

  if (!isOpen) return null;

  if (!address) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">Wallet Required</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <p className="text-gray-600 mb-4">
            Please connect your wallet to proceed with verification.
          </p>
          <button
            onClick={onClose}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Verify Hospital Identity</h2>
          <button
            onClick={onClose}
            disabled={isVerifying}
            className="text-gray-500 hover:text-gray-700 transition-colors disabled:opacity-50"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {verificationStatus === 'success' ? (
          <div className="text-center py-8">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Verification Successful!</h3>
            <p className="text-gray-600">Your hospital has been verified successfully.</p>
          </div>
        ) : verificationStatus === 'error' ? (
          <div className="text-center py-8">
            <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <AlertCircle className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Verification Failed</h3>
            <p className="text-gray-600 mb-4">Please try again or contact support.</p>
            <button
              onClick={() => {
                setVerificationStatus('idle');
                setIsVerifying(false);
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Try Again
            </button>
          </div>
        ) : isVerifying ? (
          <div className="text-center py-8">
            <Loader2 className="h-12 w-12 animate-spin text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Processing Verification</h3>
            <p className="text-gray-600">Please wait while we verify your identity...</p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-gray-600 mb-4">
                Scan this QR code with the Self app to verify your hospital identity.
                This verification helps establish trust and credibility for your facility.
              </p>
              {/* <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-700 mb-2">
                  <strong>What you'll need:</strong>
                </p>
                <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                  <li>Self app installed on your mobile device</li>
                  <li>Valid identity documents</li>
                  <li>Connected wallet: {address.slice(0, 6)}...{address.slice(-4)}</li>
                </ul>
              </div> */}
            </div>

            {selfApp ? (
              <div className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-lg border-2 border-gray-200 mb-4">
                  <SelfQRcodeWrapper
                    selfApp={selfApp}
                    onSuccess={handleSuccessfulVerification}
                    onError={handleError}
                  />
                </div>
                {universalLink && (
                  <a
                    href={universalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-800 underline"
                  >
                    Or open in Self app directly
                  </a>
                )}
              </div>
            ) : (
              <div className="text-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-blue-600 mx-auto mb-4" />
                <p className="text-gray-600">Loading QR Code...</p>
              </div>
            )}

            <div className="mt-6 flex gap-3">
              <button
                onClick={onClose}
                disabled={isVerifying}
                className="flex-1 px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-gray-50 disabled:opacity-50"
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

