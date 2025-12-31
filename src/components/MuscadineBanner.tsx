'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HamburgerIcon from './HamburgerIcon';

const MuscadineBanner = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-50 border-b border-gray-200 backdrop-blur-sm bg-gray-50/95">
      <div className="w-full px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Image 
              src="/favicon.png" 
              alt="Muscadine Logo" 
              width={32}
              height={32}
              className="w-8 h-8"
              priority
            />
            <span className="text-xl font-semibold text-gray-900">Muscadine</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <Link
              href="/"
              className="inline-flex items-center text-sm justify-center px-4 py-2 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white hover:border-gray-900 focus:outline-none transition-all duration-300"
            >
              Home
            </Link>
            
            <Link
              href="/about"
              className="inline-flex items-center text-sm justify-center px-4 py-2 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white hover:border-gray-900 focus:outline-none transition-all duration-300"
            >
              About Us
            </Link>
            
            <Link
              href="/solutions"
              className="inline-flex items-center text-sm justify-center px-4 py-2 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white hover:border-gray-900 focus:outline-none transition-all duration-300"
            >
              Solutions
            </Link>
            
            <Link
              href="/contact"
              className="inline-flex items-center text-sm justify-center px-4 py-2 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white hover:border-gray-900 focus:outline-none transition-all duration-300"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="md:hidden p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors touch-manipulation"
            onClick={() => setIsOpen((v) => !v)}
          >
            <HamburgerIcon isOpen={isOpen} />
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="inline-flex items-center text-sm justify-center px-4 py-2 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white hover:border-gray-900 focus:outline-none transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              <Link
                href="/about"
                className="inline-flex items-center text-sm justify-center px-4 py-2 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white hover:border-gray-900 focus:outline-none transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              
              <Link
                href="/solutions"
                className="inline-flex items-center text-sm justify-center px-4 py-2 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white hover:border-gray-900 focus:outline-none transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Solutions
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center text-sm justify-center px-4 py-2 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white hover:border-gray-900 focus:outline-none transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default MuscadineBanner;
