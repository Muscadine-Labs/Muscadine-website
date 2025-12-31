import Link from 'next/link';

export default function MuscadineFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-light text-white mb-4 font-serif">Muscadine</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Muscadine is dedicated to helping individuals take control of their financial future through Bitcoin, self-custody, and DeFi solutions.
            </p>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wide">Navigation</h4>
            <nav className="space-y-2">
              <Link 
                href="/"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Home
              </Link>
              <Link 
                href="/about"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                About Us
              </Link>
              <Link 
                href="/contact"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Contact
              </Link>
              <Link 
                href="/solutions"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Solutions
              </Link>
            </nav>
          </div>
          
          {/* Connect */}
          <div>
            <h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wide">Connect</h4>
            <div className="space-y-2">
              <Link 
                href="/contact"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Contact
              </Link>
              <a 
                href="https://www.linkedin.com/company/muscadinelabs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a 
                href="https://x.com/muscadinelabs"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Twitter (X)
              </a>
            </div>
          </div>
          
          {/* Solutions */}
          <div>
            <h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wide">Solutions</h4>
            <div className="space-y-2">
              <a 
                href="https://app.muscadine.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                App
              </a>
              <Link 
                href="/self-custody"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Self Custody
              </Link>
              <Link 
                href="/node"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Node
              </Link>
            </div>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wide">Legal</h4>
            <div className="space-y-2">
              <Link 
                href="/privacy"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/legal"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Legal Disclaimer
              </Link>
              <Link 
                href="/terms"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <a 
                href="https://docs.muscadine.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Documentation
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-400 mb-4">
            Education & security guidance only—no investment advice, no asset custody.
          </p>
          <p className="text-sm text-gray-400">
            © 2026 Muscadine Labs LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
