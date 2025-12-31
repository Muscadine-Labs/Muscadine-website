
'use client';

import Link from 'next/link';

export default function NodePage() {

  // Copy to clipboard function
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // You could add a toast notification here if desired
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      {/* Back Arrow */}
      <div className="mb-6">
        <Link 
          href="/solutions" 
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Solutions
        </Link>
      </div>
      
      <div className="text-center mb-8">
        <h1 className="text-4xl font-light text-gray-900 mb-4 font-serif">Bitcoin Node</h1>
        <p className="text-xl text-gray-600">
          Connect to my self-hosted Bitcoin node for secure transactions
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Node Information */}
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200">
          <h2 className="text-2xl font-bold text-orange-900 mb-4">About This Node</h2>
          <p className="text-orange-800 text-lg leading-relaxed mb-4">
            This is my personal Bitcoin node running 24/7 to support the Bitcoin network. By connecting to my node, you can:
          </p>
          <ul className="text-orange-800 space-y-2 ml-4">
            <li className="flex items-start">
              <span className="text-orange-600 mr-2">•</span>
              <span>Send and receive Bitcoin transactions with enhanced privacy</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2">•</span>
              <span>Validate your own transactions without trusting third parties</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2">•</span>
              <span>Access the Bitcoin network through a trusted, non-custodial service</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2">•</span>
              <span>Reduce reliance on centralized Bitcoin services</span>
            </li>
          </ul>
        </div>

        {/* Connection Details */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Connection Details</h3>
          <p className="text-gray-600 mb-6">
            Use these details to connect your Bitcoin wallet or Electrum client to my node:
          </p>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 mb-2 font-medium">Electrum Server Hostname:</p>
              <div className="flex items-center gap-2">
                <code className="bg-gray-100 px-3 py-2 rounded text-sm flex-1 break-all font-mono">lyfocxl3fgg3if65jo32apupd2adzmm772vsqrtwpmdn4ndoug6gwnyd.onion</code>
                <button 
                  className="bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700 transition-colors" 
                  onClick={() => copyToClipboard('lyfocxl3fgg3if65jo32apupd2adzmm772vsqrtwpmdn4ndoug6gwnyd.onion')}
                >
                  Copy
                </button>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2 font-medium">Port:</p>
              <div className="flex items-center gap-2">
                <span className="bg-gray-100 px-3 py-2 rounded text-sm font-mono">50001</span>
                <button 
                  className="bg-green-600 text-white px-3 py-2 rounded text-sm hover:bg-green-700 transition-colors" 
                  onClick={() => copyToClipboard('50001')}
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* How to Connect */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">How to Connect</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">For Sparrow Wallet:</h4>
              <ol className="text-blue-700 space-y-1 ml-4">
                <li>1. Open Sparrow wallet</li>
                <li>2. Go to Settings → Server</li>
                <li>3. Enter the hostname and port above</li>
                <li>4. Click Test connection then close.</li>
              </ol>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
