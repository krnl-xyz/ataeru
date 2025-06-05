"use client";
import TransactionModal from '@/components/TransactionModal';
import { AlertCircle, CheckCircle2, Loader2, X } from 'lucide-react';
import { useState } from 'react';

interface ContractButtonProps {
  contractAddress: string;
  abi: any;
  functionName: string;
  args: any;
  buttonText: string;
  title: string;
  description: string;
  onBeforeTrans?: () => Promise<
    // {
    // name: string;
    // description: string;
    // type: string;
    // attributes: unknown[];
    // }
    any>;
  disabled?: boolean;
  // value: string;
}

export default function ContractButton({
  contractAddress,
  abi,
  functionName,
  args,
  buttonText,
  title,
  description,
  onBeforeTrans,
  disabled = false
}: ContractButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [beforeTransResult, setBeforeTransResult] = useState<any>(null);
  const [status, setStatus] = useState('idle');
  //  const [currentArgs, setCurrentArgs] = useState<unknown[]>(args);
  console.log(args)
  const handleClick = async () => {
    try {
      setIsLoading(true);
      if (onBeforeTrans) {
        setStatus('preparing');
        const result = await onBeforeTrans();
        setBeforeTransResult(result);
        setStatus('success');
        // Update args with the result if needed
        // if (result) {
        // setCurrentArgs([result.name, result.description, result.type, result.attributes]);
        // }
      }
      setIsOpen(true);
    } catch (error) {
      console.error('Error in before mint:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        disabled={disabled || isLoading}
        className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Processing...' : buttonText}
      </button>

      {status !== 'idle' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black/50" onClick={() => setStatus('idle')} />

          <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md p-6">
            <button
              onClick={() => setStatus('idle')}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="text-center">

              {status === 'preparing' && (
                <div className="py-4">
                  <Loader2 className="h-8 w-8 animate-spin text-blue-600 mx-auto" />
                  <p className="mt-2 text-sm text-gray-500">interacting with Kernel...</p>
                </div>
              )}

              {status === 'confirming' && (
                <div className="py-4">
                  <Loader2 className="h-8 w-8 animate-spin text-blue-600 mx-auto" />
                  <p className="mt-2 text-sm text-gray-500">Confirming transaction...</p>
                  <p className="mt-1 text-xs text-gray-400">
                    This may take a few moments
                  </p>
                </div>
              )}

              {status === 'success' && (
                <div className="py-4">
                  <CheckCircle2 className="h-8 w-8 text-green-600 mx-auto" />
                  <p className="mt-2 text-sm text-gray-900">Execution successful!</p>
                  <p className="mt-1 text-xs text-gray-500 overflow-hidden text-ellipsis">
                    <span className='overflow-hidden text-ellipsis'>Kernel Params: </span> {beforeTransResult?.kernelParams}<br />
                    <span className='overflow-hidden text-ellipsis'>Kernel Responses: </span> {beforeTransResult?.kernelResponses}<br />
                    <span className='overflow-hidden text-ellipsis'>auth: </span> {beforeTransResult?.auth}<br />
                    <span className='overflow-hidden text-ellipsis'>tx: </span><br />
                    <a href={`https://sepolia.etherscan.io/tx/${beforeTransResult?.tx}`} target="_blank" rel="noopener noreferrer">
                      {beforeTransResult?.tx}
                    </a>
                  </p>
                  <button
                    onClick={() => setBeforeTransResult(null)}
                    className="mt-4 inline-flex justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                  >
                    Close
                  </button>
                </div>
              )}

              {/* {status === 'error' && (
                <div className="py-4">
                  <AlertCircle className="h-8 w-8 text-red-600 mx-auto" />
                  <p className="mt-2 text-sm text-gray-900">Transaction failed</p>
                  <p className="mt-1 text-xs text-red-500">{error}</p>
                  <div className="mt-4 flex justify-center space-x-3">
                    <button
                      onClick={handleTransaction}
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      Try Again
                    </button>
                    <button
                      onClick={onClose}
                      className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )} */}
            </div>
          </div>
        </div>
      )}


      <TransactionModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        contractAddress={contractAddress}
        abi={abi}
        functionName={functionName}
        args={args}
        title={title}
        description={description}
      />
    </>
  );
} 