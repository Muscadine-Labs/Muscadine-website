'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SelfCustodyPage() {
  const [mainTab, setMainTab] = useState<'about' | 'bitcoin' | 'defi'>('about');
  const [bitcoinTab, setBitcoinTab] = useState<'about' | 'explore' | 'wallet'>('about');
  const [defiTab, setDefiTab] = useState<'about' | 'lending' | 'swap' | 'wallet'>('about');

  // Bitcoin functions
  const mempoolExplanation = "The mempool (memory pool) is where unconfirmed Bitcoin transactions wait before being added to a block. It helps the network manage and prioritize pending transactions.";

  const openMempool = () => {
    window.open('https://mempool.space', '_blank', 'noopener,noreferrer');
  };

  const openSparrowWallet = () => {
    window.open('https://sparrowwallet.com/', '_blank', 'noopener,noreferrer');
  };

  const openSparrowDocs = () => {
    window.open('https://sparrowwallet.com/docs/', '_blank', 'noopener,noreferrer');
  };

  const openSeedsigner = () => {
    window.open('https://seedsigner.com/', '_blank', 'noopener,noreferrer');
  };

  const openColdcard = () => {
    window.open('https://coldcard.com/', '_blank', 'noopener,noreferrer');
  };

  // DeFi functions
  const openAave = () => {
    window.open('https://app.aave.com/', '_blank', 'noopener,noreferrer');
  };

  const openMoonwell = () => {
    window.open('https://moonwell.fi/portfolio', '_blank', 'noopener,noreferrer');
  };

  const openMorpho = () => {
    window.open('https://app.morpho.org/base/earn', '_blank', 'noopener,noreferrer');
  };

  const openAerodrome = () => {
    window.open('https://aerodrome.finance/', '_blank', 'noopener,noreferrer');
  };

  const openUniswap = () => {
    window.open('https://app.uniswap.org/', '_blank', 'noopener,noreferrer');
  };

  const openRabby = () => {
    window.open('https://rabby.io/', '_blank', 'noopener,noreferrer');
  };

  const openPhantom = () => {
    window.open('https://phantom.com/', '_blank', 'noopener,noreferrer');
  };

  const openZerion = () => {
    window.open('https://app.zerion.io/', '_blank', 'noopener,noreferrer');
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
      
      {/* Main Tabs */}
      <div className="flex border-b border-gray-200 mb-8 overflow-x-auto justify-center">
        <button 
          onClick={() => setMainTab('about')} 
          className={`flex-1 px-6 py-3 font-medium text-base transition-all duration-200 whitespace-nowrap ${mainTab === 'about' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
        >
          About
        </button>
        <button 
          onClick={() => setMainTab('bitcoin')} 
          className={`flex-1 px-6 py-3 font-medium text-base transition-all duration-200 whitespace-nowrap ${mainTab === 'bitcoin' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Bitcoin
        </button>
        <button 
          onClick={() => setMainTab('defi')} 
          className={`flex-1 px-6 py-3 font-medium text-base transition-all duration-200 whitespace-nowrap ${mainTab === 'defi' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
        >
          DeFi
        </button>
      </div>

      {/* About Tab Content */}
      {mainTab === 'about' && (
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Achieve Self Custody</h2>
          <p className="text-gray-700 mb-6">
            Self custody means having complete control over your digital assets without relying on third parties. 
            Here's how to implement proper self custody with advanced security practices for you and your family.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">BIP-85: Hierarchical Key Management</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Master/Child Key Strategy</h3>
              <p className="text-gray-700 mb-4">
                BIP-85 allows you to create a hierarchical wallet structure where a single master seed generates 
                multiple child seeds. This enables secure family wallet management while maintaining centralized recovery control.
              </p>
              <ul className="text-gray-700 space-y-2 ml-4 list-disc">
                <li><strong>Family Master Seed:</strong> One master seed generates all child master keys</li>
                <li><strong>Unique Indices:</strong> Assign each family member a unique index (1=Dad, 2=Mom, 3=You)</li>
                <li><strong>Individual Wallets:</strong> Each person derives their wallet using SeedSigner or Coldcard</li>
                <li><strong>Recovery Benefits:</strong> Lost child seed can be re-derived from master + index</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Implementation Steps</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ol className="text-gray-700 space-y-2 list-decimal list-inside">
                  <li><strong>Hardware Setup:</strong> Use SeedSigner or Coldcard for offline key generation</li>
                  <li><strong>Master Seed Creation:</strong> Generate and securely backup your master seed phrase</li>
                  <li><strong>Child Derivation:</strong> Use BIP-85 to create child wallets for each family member</li>
                  <li><strong>Wallet Configuration:</strong> Connect to Sparrow Wallet for watch-only monitoring</li>
                  <li><strong>Node Connection:</strong> Point wallets to our Bitcoin node for enhanced privacy</li>
                </ol>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Security Best Practices</h3>
              <p className="text-gray-700 mb-4">
                Proper self custody requires multiple layers of security and regular maintenance:
              </p>
              <ul className="text-gray-700 space-y-1 ml-4 list-disc">
                <li>Store seed phrases on metal or paper, never digitally</li>
                <li>Maintain 2+ backups in different physical locations</li>
                <li>Run annual recovery drills to test your backups</li>
                <li>Keep hardware devices updated and in good condition</li>
                <li>Use Taproot addresses (bc1p...) for new Bitcoin deposits</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-green-50 border-l-4 border-green-400 p-6 mt-8">
            <h3 className="text-xl font-semibold text-green-900 mb-3">Need Guidance? We're Here to Help</h3>
            <p className="text-green-800 mb-4">
              Self custody setup can be complex. Our team provides personalized guidance to help you implement 
              secure self custody solutions tailored to your needs and technical comfort level.
            </p>
            <div className="space-y-2">
              <p className="text-green-800">
                <strong>Contact us for consultation:</strong>
              </p>
              <a 
                href="mailto:muscadinelabs@gmail.com?subject=Self Custody Consultation"
                className="inline-flex items-center text-green-700 hover:text-green-900 font-medium transition-colors"
              >
                muscadinelabs@gmail.com
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <p className="text-green-700 text-sm">
                We'll guide you through hardware selection, setup procedures, backup strategies, and ongoing maintenance.
              </p>
            </div>
          </div>
          
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mt-6">
            <p className="text-red-800 font-bold text-lg">
              Remember: Not your keys, not your coins. Take control of your financial future.
            </p>
          </div>
        </div>
      )}

      {/* Bitcoin Tab Content */}
      {mainTab === 'bitcoin' && (
        <div>
          <div className="text-center mb-6">
            <h2 className="text-3xl font-light text-gray-900 mb-2 font-serif">Bitcoin</h2>
            <p className="text-lg text-gray-600">
              The world's first and most secure digital currency
            </p>
          </div>
          
          {/* Bitcoin Sub-tabs */}
          <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
            <button 
              onClick={() => setBitcoinTab('about')} 
              className={`px-6 py-3 font-medium text-base transition-all duration-200 whitespace-nowrap ${bitcoinTab === 'about' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
            >
              About
            </button>
            <button 
              onClick={() => setBitcoinTab('explore')} 
              className={`px-6 py-3 font-medium text-base transition-all duration-200 whitespace-nowrap ${bitcoinTab === 'explore' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Explore
            </button>
            <button 
              onClick={() => setBitcoinTab('wallet')} 
              className={`px-6 py-3 font-medium text-base transition-all duration-200 whitespace-nowrap ${bitcoinTab === 'wallet' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Wallet
            </button>
          </div>

          {/* Bitcoin Sub-tab Content */}
          {bitcoinTab === 'about' && (
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What is Bitcoin?</h2>
              <p className="text-gray-700 mb-6">
                Bitcoin is a decentralized digital currency that enables peer-to-peer transactions 
                without intermediaries, secured by cryptography and maintained on a distributed ledger (the blockchain).
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Getting Started with Bitcoin</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Buy Bitcoin on an Exchange</h3>
                  <p className="text-gray-700 mb-4">
                    Choose a reputable exchange—Coinbase is user-friendly—and purchase Bitcoin there, then transfer it to your self-hosted wallet. Peer-to-peer platforms are another great way to stack sats.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Set Up Your Wallet</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-medium text-gray-800 mb-2">Cold Wallet:</h4>
                      <p className="text-gray-700 mb-2">
                        Use a SeedSigner (for paper-wallet setups; record every seed word carefully) or a Coldcard hardware wallet.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-800 mb-2">Hot Wallet:</h4>
                      <p className="text-gray-700 mb-2">
                        Sparrow Wallet works well for both watch-only (cold) setups and live transactions. Mobile options like BlueWallet are convenient too.
                      </p>
                    </div>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                      <p className="text-yellow-800 font-medium">
                        Always write down your seed phrase on paper and store it securely.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Connect to a Node</h3>
                  <p className="text-gray-700 mb-4">
                    Point Sparrow Wallet (or your chosen wallet) to our self-hosted Electrum Server (details on the next page).
                  </p>
                </div>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mt-8">
                <p className="text-red-800 font-bold text-lg">
                  Not your keys, not your coins.
                </p>
              </div>
            </div>
          )}

          {bitcoinTab === 'explore' && (
            <div>
              <div className="mb-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-700 font-sans">{mempoolExplanation}</p>
              </div>
              
              <div className="max-w-md mx-auto">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Bitcoin Explorer</h3>
                  <p className="text-gray-600 mb-4">Explore the Bitcoin blockchain and mempool in real-time</p>
                  <button 
                    onClick={openMempool}
                    className="w-full bg-blue-100 text-blue-800 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors"
                  >
                    Open Mempool.space
                  </button>
                </div>
              </div>
            </div>
          )}

          {bitcoinTab === 'wallet' && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Bitcoin Wallets</h2>
                <p className="text-gray-700 mb-6">
                  Choose the right Bitcoin wallet for your needs. Hardware wallets offer the best security, 
                  while software wallets provide convenience for everyday use.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-green-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Sparrow Wallet</h3>
                  <p className="text-gray-600 mb-4">Advanced Bitcoin wallet with excellent privacy features</p>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">• Full node support</p>
                    <p className="text-sm text-gray-500">• CoinJoin and privacy features</p>
                    <p className="text-sm text-gray-500">• Hardware wallet integration</p>
                    <p className="text-sm text-gray-500">• Advanced transaction building</p>
                  </div>
                  <div className="mt-4 space-y-2">
                    <button 
                      onClick={openSparrowWallet}
                      className="w-full bg-green-100 text-green-800 px-4 py-2 rounded-lg hover:bg-green-200 transition-colors"
                    >
                      Download Sparrow
                    </button>
                    <button 
                      onClick={openSparrowDocs}
                      className="w-full bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      View Documentation
                    </button>
                  </div>
                </div>
                
                <div className="bg-white border border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Hardware Wallets</h3>
                  <p className="text-gray-600 mb-4">Cold storage for maximum security</p>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">• Trezor Model T or One</p>
                    <p className="text-sm text-gray-500">• Ledger Nano S Plus or X</p>
                    <p className="text-sm text-gray-500">• Seedsigner (DIY air-gapped)</p>
                    <p className="text-sm text-gray-500">• Coldcard (Bitcoin-only)</p>
                  </div>
                  <div className="mt-4 space-y-2">
                    <button 
                      onClick={openSeedsigner}
                      className="w-full bg-purple-100 text-purple-800 px-4 py-2 rounded-lg hover:bg-purple-200 transition-colors"
                    >
                      Seedsigner
                    </button>
                    <button 
                      onClick={openColdcard}
                      className="w-full bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      Coldcard
                    </button>
                  </div>
                  <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      <strong>Important:</strong> Always buy hardware wallets directly from the manufacturer to avoid tampering.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* DeFi Tab Content */}
      {mainTab === 'defi' && (
        <div>
          <div className="text-center mb-6">
            <h2 className="text-3xl font-light text-gray-900 mb-2 font-serif">DeFi</h2>
            <p className="text-lg text-gray-600">
              Decentralized Finance - The Future of Financial Services
            </p>
          </div>
          
          {/* DeFi Sub-tabs */}
          <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
            <button 
              onClick={() => setDefiTab('about')} 
              className={`px-6 py-3 font-medium text-base transition-all duration-200 whitespace-nowrap ${defiTab === 'about' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
            >
              About
            </button>
            <button 
              onClick={() => setDefiTab('lending')} 
              className={`px-6 py-3 font-medium text-base transition-all duration-200 whitespace-nowrap ${defiTab === 'lending' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Lending & Borrowing
            </button>
            <button 
              onClick={() => setDefiTab('swap')} 
              className={`px-6 py-3 font-medium text-base transition-all duration-200 whitespace-nowrap ${defiTab === 'swap' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Token Swap
            </button>
            <button 
              onClick={() => setDefiTab('wallet')} 
              className={`px-6 py-3 font-medium text-base transition-all duration-200 whitespace-nowrap ${defiTab === 'wallet' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Wallet
            </button>
          </div>

          {/* DeFi Sub-tab Content */}
          {defiTab === 'about' && (
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What is DeFi?</h2>
              <p className="text-gray-700 mb-6">
                Decentralized finance (DeFi) is an open, permissionless ecosystem of financial applications built on blockchains, allowing anyone to lend, borrow, trade, and earn interest without traditional banks.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Getting Started with DeFi</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Acquire Crypto</h3>
                  <p className="text-gray-700 mb-4">
                    Use a centralized exchange like Coinbase or a decentralized exchange such as Uniswap (low fees) to obtain cryptocurrency.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Set Up Your Wallet</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-medium text-gray-800 mb-2">Cold Wallet:</h4>
                      <p className="text-gray-700 mb-2">
                        Use a Trezor or Ledger hardware device; record your 24-word seed on paper and store it securely. Connect via Rabby, MetaMask, or Phantom for DeFi interactions.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-800 mb-2">Hot Wallet:</h4>
                      <p className="text-gray-700 mb-2">
                        MetaMask, Rabby, or Phantom work well—always back up your seed phrase in a safe place.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Choose Your Network</h3>
                  <p className="text-gray-700 mb-4">
                    Decide which blockchain to use (Ethereum, Base, Solana, etc.) based on the protocols you plan to use.
                  </p>
                </div>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mt-8">
                <p className="text-red-800 font-bold text-lg">
                  Proceed carefully—only interact with projects you've vetted.
                </p>
              </div>
            </div>
          )}

          {defiTab === 'lending' && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Lending & Borrowing Protocols</h2>
                <p className="text-gray-700 mb-6">
                  Earn interest on your crypto assets or borrow against them using these trusted DeFi protocols. 
                  Always start with small amounts and understand the risks involved.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Aave</h3>
                  <p className="text-gray-600 mb-4">Leading lending protocol with multiple networks</p>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">• Lend and borrow various assets</p>
                    <p className="text-sm text-gray-500">• Variable and stable interest rates</p>
                    <p className="text-sm text-gray-500">• Available on Ethereum, Base, and more</p>
                  </div>
                  <button 
                    onClick={openAave}
                    className="w-full mt-4 bg-blue-100 text-blue-800 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors"
                  >
                    Open Aave
                  </button>
                </div>
                
                <div className="bg-white border border-purple-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Moonwell</h3>
                  <p className="text-gray-600 mb-4">Lending protocol on Base network</p>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">• Optimized for Base ecosystem</p>
                    <p className="text-sm text-gray-500">• Competitive interest rates</p>
                    <p className="text-sm text-gray-500">• User-friendly interface</p>
                  </div>
                  <button 
                    onClick={openMoonwell}
                    className="w-full mt-4 bg-purple-100 text-purple-800 px-4 py-2 rounded-lg hover:bg-purple-200 transition-colors"
                  >
                    Open Moonwell
                  </button>
                </div>
                
                <div className="bg-white border border-green-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Morpho</h3>
                  <p className="text-gray-600 mb-4">Peer-to-peer lending with better rates</p>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">• P2P lending model</p>
                    <p className="text-sm text-gray-500">• Better rates than traditional AMMs</p>
                    <p className="text-sm text-gray-500">• Available on multiple networks</p>
                  </div>
                  <button 
                    onClick={openMorpho}
                    className="w-full mt-4 bg-green-100 text-green-800 px-4 py-2 rounded-lg hover:bg-green-200 transition-colors"
                  >
                    Open Morpho
                  </button>
                </div>
              </div>
            </div>
          )}

          {defiTab === 'swap' && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Decentralized Exchanges</h2>
                <p className="text-gray-700 mb-6">
                  Trade cryptocurrencies directly with other users without centralized intermediaries. 
                  Compare rates and choose the best option for your trades.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-cyan-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Aerodrome</h3>
                  <p className="text-gray-600 mb-4">Leading DEX on Base network</p>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">• Optimized for Base ecosystem</p>
                    <p className="text-sm text-gray-500">• Low fees and fast transactions</p>
                    <p className="text-sm text-gray-500">• Liquidity mining rewards</p>
                  </div>
                  <button 
                    onClick={openAerodrome}
                    className="w-full mt-4 bg-cyan-100 text-cyan-800 px-4 py-2 rounded-lg hover:bg-cyan-200 transition-colors"
                  >
                    Open Aerodrome
                  </button>
                </div>
                
                <div className="bg-white border border-pink-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Uniswap</h3>
                  <p className="text-gray-600 mb-4">Most popular DEX across multiple networks</p>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">• Available on many networks</p>
                    <p className="text-sm text-gray-500">• Large liquidity pools</p>
                    <p className="text-sm text-gray-500">• Well-established and trusted</p>
                  </div>
                  <button 
                    onClick={openUniswap}
                    className="w-full mt-4 bg-pink-100 text-pink-800 px-4 py-2 rounded-lg hover:bg-pink-200 transition-colors"
                  >
                    Open Uniswap
                  </button>
                </div>
              </div>
            </div>
          )}

          {defiTab === 'wallet' && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">DeFi Wallets</h2>
                <p className="text-gray-700 mb-6">
                  Choose the right wallet for DeFi interactions. These wallets support multiple networks 
                  and provide easy access to DeFi protocols.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Rabby Wallet</h3>
                  <p className="text-gray-600 mb-4">Multi-chain wallet optimized for DeFi</p>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">• Support for 100+ networks</p>
                    <p className="text-sm text-gray-500">• Built-in DeFi portfolio tracking</p>
                    <p className="text-sm text-gray-500">• Hardware wallet integration</p>
                    <p className="text-sm text-gray-500">• Gas optimization features</p>
                  </div>
                  <button 
                    onClick={openRabby}
                    className="w-full mt-4 bg-blue-100 text-blue-800 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors"
                  >
                    Open Rabby
                  </button>
                </div>
                
                <div className="bg-white border border-purple-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Phantom</h3>
                  <p className="text-gray-600 mb-4">Popular wallet for Solana and Ethereum</p>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">• Solana and Ethereum support</p>
                    <p className="text-sm text-gray-500">• Built-in DEX integration</p>
                    <p className="text-sm text-gray-500">• NFT support</p>
                    <p className="text-sm text-gray-500">• User-friendly interface</p>
                  </div>
                  <button 
                    onClick={openPhantom}
                    className="w-full mt-4 bg-purple-100 text-purple-800 px-4 py-2 rounded-lg hover:bg-purple-200 transition-colors"
                  >
                    Open Phantom
                  </button>
                </div>
                
                <div className="bg-white border border-green-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Zerion</h3>
                  <p className="text-gray-600 mb-4">DeFi portfolio management and trading</p>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">• Portfolio tracking across chains</p>
                    <p className="text-sm text-gray-500">• Built-in DEX aggregator</p>
                    <p className="text-sm text-gray-500">• DeFi protocol discovery</p>
                    <p className="text-sm text-gray-500">• Mobile and desktop apps</p>
                  </div>
                  <button 
                    onClick={openZerion}
                    className="w-full mt-4 bg-green-100 text-green-800 px-4 py-2 rounded-lg hover:bg-green-200 transition-colors"
                  >
                    Open Zerion
                  </button>
                </div>
                
                <div className="bg-white border border-orange-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Hardware Wallets</h3>
                  <p className="text-gray-600 mb-4">Maximum security for DeFi interactions</p>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">• Ledger (supports most DeFi)</p>
                    <p className="text-sm text-gray-500">• Trezor (limited DeFi support)</p>
                    <p className="text-sm text-gray-500">• Works with software wallets</p>
                  </div>
                  <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      <strong>Tip:</strong> Use hardware wallets with software wallets like Rabby for the best security and convenience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
