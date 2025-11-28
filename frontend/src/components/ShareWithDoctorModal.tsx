'use client';

import { useState } from 'react';
import { useAccount } from 'wagmi';
import { Upload, FileText, X } from 'lucide-react';
import { toast } from 'sonner';
import ContractButton from './contractButton';
import { contractAddresses, healthDataNftABI } from '@/contract/web3';

interface ShareWithDoctorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShareWithDoctorModal({ isOpen, onClose }: ShareWithDoctorModalProps) {
  const { address } = useAccount();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [metadataUrl, setMetadataUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      // Check file size (10MB limit)
      if (file.size > 10 * 1024 * 1024) {
        setUploadError('File size must be less than 10MB');
        return;
      }
      setSelectedFile(file);
      setUploadError(null);
    }
  };

  const uploadFile = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/file', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to upload file');
    }

    const data = await response.json();
    return data;
  };

  const uploadMetadata = async (fileUrl: string) => {
    const metadata = {
      name: `Health Data - ${selectedFile?.name || 'Document'}`,
      description: 'Health data shared with doctor',
      type: 'health-data',
      fileUrl: fileUrl,
      fileName: selectedFile?.name || '',
      fileSize: selectedFile?.size || 0,
      createdAt: new Date().toISOString(),
      owner: address,
      sharedWith: 'doctor',
    };

    // Convert metadata to Blob
    const metadataBlob = new Blob([JSON.stringify(metadata, null, 2)], {
      type: 'application/json'
    });

    // Create a File object from the Blob
    const metadataFile = new File([metadataBlob], 'metadata.json', {
      type: 'application/json'
    });

    // Upload metadata to IPFS
    const metadataUrl = await uploadFile(metadataFile);
    return metadataUrl;
  };

  const handleMint = async () => {
    if (!selectedFile) {
      throw new Error('Please select a file to upload');
    }

    if (!address) {
      throw new Error('Please connect your wallet');
    }

    // If metadataUrl is already set, return it (don't re-upload)
    if (metadataUrl) {
      return metadataUrl;
    }

    setUploadError(null);

    try {
      // Upload health data file to IPFS
      const fileUrl = await uploadFile(selectedFile);

      // Upload metadata JSON to IPFS
      const uploadedMetadataUrl = await uploadMetadata(fileUrl);
      setMetadataUrl(uploadedMetadataUrl);

      return uploadedMetadataUrl;
    } catch (error: any) {
      console.error('Error preparing mint data:', error);
      setUploadError(error.message || 'Failed to upload file. Please try again.');
      throw error;
    }
  };

  const handleClose = () => {
    setSelectedFile(null);
    setUploadError(null);
    setMetadataUrl(null);
    onClose();
  };

  const handleMintSuccess = () => {
    toast.success('Health data NFT minted successfully', {
      description: 'Your health data has been minted as an NFT on the blockchain.',
    });
    handleClose();
  };

  const removeFile = () => {
    setSelectedFile(null);
    setUploadError(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-6 w-full max-w-md shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Share Health Data with Doctor</h2>
          <button 
            onClick={handleClose} 
            className="text-gray-400 hover:text-gray-200 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Upload Health Data File
            </label>
            <div className="border-2 border-dashed border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors">
              <input
                type="file"
                id="health-data-upload"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.txt"
                onChange={handleFileChange}
                className="hidden"
                disabled={!!metadataUrl}
              />
              <label
                htmlFor="health-data-upload"
                className={`flex flex-col items-center justify-center cursor-pointer ${metadataUrl ? 'pointer-events-none opacity-50' : ''}`}
              >
                <Upload className="w-10 h-10 text-gray-400 mb-3" />
                <span className="text-sm text-gray-300 mb-1">
                  Click to upload or drag and drop
                </span>
                <span className="text-xs text-gray-500">
                  PDF, DOC, DOCX, JPG, PNG, TXT (Max 10MB)
                </span>
              </label>
            </div>

            {selectedFile && (
              <div className="mt-3 p-3 bg-gray-800 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <FileText className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <span className="text-sm text-white truncate">
                    {selectedFile.name}
                  </span>
                  <span className="text-xs text-gray-400 flex-shrink-0">
                    ({(selectedFile.size / 1024).toFixed(1)} KB)
                  </span>
                </div>
                {!metadataUrl && (
                  <button
                    type="button"
                    onClick={removeFile}
                    className="text-gray-400 hover:text-red-400 transition-colors ml-2"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            )}

            {uploadError && (
              <div className="mt-2 text-sm text-red-400">
                {uploadError}
              </div>
            )}

            {!address && (
              <div className="mt-2 text-sm text-yellow-400">
                Please connect your wallet to mint the NFT
              </div>
            )}
          </div>

          <div className="pt-4 flex gap-3">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 px-4 py-2 border border-gray-700 rounded-lg text-white hover:bg-gray-800 transition-colors"
            >
              Cancel
            </button>
            <div className="flex-1">
              <ContractButton
                key={metadataUrl || 'mint-button'} // Force re-render when metadataUrl changes
                contractAddress={contractAddresses.healthDataNftAddress}
                abi={healthDataNftABI}
                functionName="mint"
                args={[address || '', metadataUrl || '']}
                buttonText={metadataUrl ? "Mint NFT" : "Upload & Mint NFT"}
                title="Mint Health Data NFT"
                description="Mint your health data as an NFT on the blockchain"
                onBeforeTrans={handleMint}
                disabled={!selectedFile || !address}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

