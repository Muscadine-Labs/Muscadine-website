
export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="font-light text-gray-900 leading-tight mb-6 sm:mb-8 font-serif text-3xl sm:text-4xl">Contact</h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto px-4">
          Have a question about Muscadine or want to discuss a partnership? Reach out to our team and we'll get back to you as soon as possible.
          Whether it's feedback, collaboration, or support, we're here to connect.
        </p>
      </div>
      
      <div className="bg-gray-50 rounded-xl p-6 sm:p-8 lg:p-12 shadow-lg mx-4 sm:mx-0">
        <h2 className="font-light text-gray-800 leading-tight mb-8 sm:mb-12 text-center font-serif text-2xl sm:text-3xl">Get in touch</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Email */}
          <a 
            href="mailto:muscadinelabs@gmail.com"
            className="bg-gray-100 hover:bg-gray-200 rounded-lg p-6 flex items-center space-x-3 transition-colors duration-200"
          >
            <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-gray-900 font-medium">muscadinelabs@gmail.com</span>
          </a>

          {/* GitHub */}
          <a 
            href="https://github.com/Muscadine-Labs"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-50 rounded-lg p-6 flex items-center space-x-3 transition-colors duration-200 border border-gray-200"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <span className="text-gray-900 font-medium">GitHub</span>
          </a>

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/company/muscadinelabs"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-50 hover:bg-blue-100 rounded-lg p-6 flex items-center space-x-3 transition-colors duration-200"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <span className="text-gray-900 font-medium">LinkedIn</span>
          </a>

          {/* X (Twitter) */}
          <a 
            href="https://x.com/muscadinelabs"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-gray-900 rounded-lg p-6 flex items-center space-x-3 transition-colors duration-200"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </div>
            <span className="text-white font-medium">X</span>
          </a>
        </div>
      </div>
    </div>
  );
}
