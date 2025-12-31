'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import IsometricNodes from './IsometricNodes';
import PolyhedronShape from './3DShapes/PolyhedronShape';
import StarShape from './3DShapes/StarShape';
import TorusShape from './3DShapes/TorusShape';
import PyramidShape from './3DShapes/PyramidShape';
import PixelBlast from './PixelBlast';

// Count-up animation component
const CountUpAnimation = ({ target, duration = 2000, suffix = '', prefix = '' }: { 
  target: number; 
  duration?: number; 
  suffix?: string; 
  prefix?: string; 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const startCountUp = useCallback(() => {
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(target * easeOutQuart);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };
    
    requestAnimationFrame(animate);
  }, [duration, target]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          startCountUp();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible, startCountUp]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1);
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0);
    }
    return num.toString();
  };

  const needsSmallUnit = target >= 1000000 || target >= 1000;
  const unit = target >= 1000000 ? 'M' : target >= 1000 ? 'K' : '';

  return (
    <div ref={ref} className="flex-1">
      <h2 className="text-6xl lg:text-7xl font-light text-gray-900 mb-2 font-serif">
        {prefix && (
          <span className="text-4xl lg:text-5xl">{prefix}</span>
        )}
        {isVisible ? formatNumber(count) : '0'}
        {needsSmallUnit && (
          <span className="text-4xl lg:text-5xl">{unit}</span>
        )}
        {suffix && (
          <span className="text-4xl lg:text-5xl">{suffix}</span>
        )}
      </h2>
    </div>
  );
};

const MuscadineHome = () => {
  return (
    <>
      {/* Hero Section - Full Width Background */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen mt-20 mb-20">
        {/* Nested rectangles effect */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          {/* Rectangle 4 */}
          <div className="w-full max-w-[81rem] h-[780px] border-2 border-black rounded-lg"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-20">
          {/* Rectangle 3 */}
          <div className="w-full max-w-[78rem] h-[740px] border-2 border-black rounded-lg"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-30">
          {/* Rectangle 2 */}
          <div className="w-full max-w-[75rem] h-[700px] border-2 border-black rounded-lg"></div>
        </div>
        
        {/* Main hero container */}
        <div className="relative py-20 px-20 mx-auto max-w-6xl border-2 border-black rounded-lg z-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight font-serif">
              Take the First Step. <span className=" underline">Confidently.</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              We're here to make sure your crypto journey is safe and secure. From Bitcoin self-custody to DeFi protocols, we provide expert guidance and institutional-grade security solutions that protect your digital assets through proper education and secure practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start items-center lg:items-start">
              <a 
                href="https://app.muscadine.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-900 hover:border-gray-800 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
              >
                Launch App
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a 
                href="/about" 
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
              >
                About Us
              </a>
              <a 
                href="https://docs.muscadine.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
              >
                Read the Docs
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right side - 3D Animation */}
          <div className="flex items-center justify-center">
            <div className="w-full min-w-[400px] h-[400px] lg:h-[500px]">
              <IsometricNodes />
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Stats & Solutions Section - Full Width Background with Gradient - Break out of container */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-gradient-to-b from-gray-50 via-blue-50 to-gray-50 py-20 my-16">
        {/* Stats Section */}
        <div className="max-w-6xl mx-auto px-4 mb-32">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center">
              {/* Stat 1 - Clients */}
              <div className="flex-1">
                <CountUpAnimation 
                  target={10} 
                  duration={1500} 
                  suffix="+" 
                />
                <p className="text-lg text-gray-600">
                  clients advised
                </p>
              </div>
              
              {/* Stat 2 - Assets */}
              <div className="flex-1">
                <CountUpAnimation 
                  target={12000000} 
                  duration={2000} 
                  prefix="$" 
                  suffix="+" 
                />
                <p className="text-lg text-gray-600">
                  in assets secured
                </p>
              </div>
              
              {/* Stat 3 - Security */}
              <div className="flex-1">
                <CountUpAnimation 
                  target={100} 
                  duration={1000} 
                  suffix="%" 
                />
                <p className="text-lg text-gray-600">
                  security record
                </p>
              </div>
          </div>
        </div>

        {/* Our Solutions Section */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 font-serif">
              Our Solutions
            </h2>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Service 1 - Our App (Top Left) */}
            <div className="bg-white rounded-lg border-2 border-gray-200 p-8 hover:border-gray-400 hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="space-y-6">
                {/* 3D Shape Container */}
                <div className="w-full h-48 bg-gray-50 rounded-lg border border-gray-200">
                  <PyramidShape path="https://app.muscadine.io" />
                </div>
                
                <h3 className="text-2xl font-light text-gray-900 font-serif">
                  Our App
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Access our Morpho vaults on Base for secure yield on USDC, Bitcoin, and Ethereum. Built for financial freedom with industry-low fees (2% performance fee) and flexible deposits/withdrawals of any amount, anytime.
                </p>
                <a 
                  href="https://app.muscadine.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Launch App
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Service 2 - Bitcoin Node (Top Right) */}
            <div className="bg-white rounded-lg border-2 border-gray-200 p-8 hover:border-gray-400 hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="space-y-6">
                {/* 3D Shape Container */}
                <div className="w-full h-48 bg-gray-50 rounded-lg border border-gray-200">
                  <TorusShape path="/node" />
                </div>
                
                <h3 className="text-2xl font-light text-gray-900 font-serif">
                  Bitcoin Node
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Connect to our self-hosted Bitcoin node for secure transactions and enhanced privacy. Access a full Bitcoin node for verification and transaction broadcasting.
                </p>
                <a 
                  href="/node"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Connect to our Bitcoin Node
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Service 3 - Self Custody (Bottom Left) */}
            <div className="bg-white rounded-lg border-2 border-gray-200 p-8 hover:border-gray-400 hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="space-y-6">
                {/* 3D Shape Container */}
                <div className="w-full h-48 bg-gray-50 rounded-lg border border-gray-200">
                  <StarShape path="/self-custody" />
                </div>
                
                <h3 className="text-2xl font-light text-gray-900 font-serif">
                  Self Custody
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Complete control of your digital assets through Bitcoin security and DeFi strategies. Learn secure wallet management, hardware setup, and risk-aware approaches to decentralized finance.
                </p>
                <a 
                  href="/self-custody"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Learn Self Custody
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Service 4 - Other Solutions (Bottom Right) */}
            <div className="bg-white rounded-lg border-2 border-gray-200 p-8 hover:border-gray-400 hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="space-y-6">
                {/* 3D Shape Container */}
                <div className="w-full h-48 bg-gray-50 rounded-lg border border-gray-200">
                  <PolyhedronShape path="/solutions" />
                </div>
                
                <h3 className="text-2xl font-light text-gray-900 font-serif">
                  Other Solutions
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Building new DeFi infrastructure and exploring cutting-edge solutions for the decentralized economy. From protocol development to innovative financial instruments that push the boundaries of what's possible in crypto.
                </p>
                <a 
                  href="/solutions"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Explore Solutions
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Meet Our Team Section */}
      <div className="py-20 px-20 mb-8 rounded-lg mx-4 border-2 border-black">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-5xl lg:text-6xl font-light text-gray-900 mb-8 font-serif">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8">
            We're a dedicated team focused on security and sustainable growth in crypto. Our mission is to empower individuals with the knowledge and tools needed to safely navigate the digital asset landscape.
          </p>
          <a 
            href="/about" 
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
          >
            Learn More About Us
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Crypto Vault Section - Full Width Dark Blue Background with Slanted Top */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
        {/* PixelBlast OGL background with slanted top */}
        <div className="absolute inset-0 bg-gray-900" 
             style={{ clipPath: 'polygon(0 10%, 100% 0%, 100% 100%, 0% 100%)' }}>
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <PixelBlast />
          </div>
        </div>
        
        <div className="relative py-60 mt-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-5xl lg:text-6xl font-light text-white mb-8 font-serif">
            Introducing Our Crypto Vault
          </h2>
          <p className="text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto mb-8">
            Store your digital assets securely while earning competitive interest rates. Our new crypto vault, built on Morpho's robust infrastructure, provides institutional-grade security with the convenience of DeFi yield farming. Your assets are protected by advanced smart contracts and multi-signature wallets, ensuring both security and growth potential.
          </p>
          
          <a 
            href="https://app.muscadine.io" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-12 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            Try Out Our App
            <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MuscadineHome;
