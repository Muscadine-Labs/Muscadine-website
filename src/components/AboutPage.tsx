'use client';

import Image from 'next/image';

const AboutPage = () => {
  return (
    <>
      <main className="max-w-6xl mx-auto px-4 pt-20">
        {/* Header Section */}
        <div className="text-center py-20">
          <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-8 font-serif">
            A Team You Can Trust
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Founded by two university students, Muscadine is dedicated to helping individuals take control of their financial future through Bitcoin security, self-custody, and DeFi solutions. We provide support with Bitcoin node deployment, secure asset management, and onboarding into decentralized finance, ensuring people can navigate the new financial system.
          </p>
        </div>

        {/* Mission Section */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-light text-gray-900 mb-6 font-serif">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We founded Muscadine with a clear belief: financial freedom should not be reserved for the few—it should be accessible to anyone willing to take control of their future. Today's financial system creates dependence and limits opportunity. We're building a new path—one powered by self-custody, transparency, and personal sovereignty.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Muscadine helps individuals and families move beyond traditional banking constraints by leveraging secure Bitcoin infrastructure and decentralized finance. We empower people to protect, grow, and control their wealth without relying on intermediaries.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                <strong>Our mission is simple:</strong><br />
                Enable true financial independence—through education, technology, and disciplined on-chain systems. It's about ownership, security, and long-term freedom.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image 
                src="/IMG_6794.jpeg" 
                alt="Muscadine Mission" 
                width={800}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="py-16 bg-gray-50 rounded-lg my-16">
          <div className="px-8">
            <h2 className="text-4xl font-light text-gray-900 mb-12 text-center font-serif">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-light text-gray-900 mb-3 font-serif">Security First</h3>
                <p className="text-gray-600">We prioritize the safety of your digital assets above all else, implementing industry-leading security practices.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-light text-gray-900 mb-3 font-serif">Education Focus</h3>
                <p className="text-gray-600">We believe in empowering you with knowledge, not just services. Understanding the technology is key to long-term success.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-light text-gray-900 mb-3 font-serif">Trust & Transparency</h3>
                <p className="text-gray-600">We maintain complete transparency in our practices and build lasting relationships based on trust and mutual respect.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-16">
          <h2 className="text-4xl font-light text-gray-900 mb-12 text-center font-serif">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Team Member 1 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 text-center hover:border-gray-400 transition-all duration-300">
            <div className="mx-auto mb-6 h-64 w-64 overflow-hidden rounded-lg relative">
                    <Image 
                      src="/Nicholas.connelly.headshot.jpg" 
                      alt="Nicholas Connelly" 
                      fill
                      className="object-cover object-top" 
                    />
                  </div>
              <h3 className="text-2xl font-light text-gray-900 mb-2 font-serif">Nicholas Connelly</h3>
              <p className="text-blue-600 font-medium mb-4">Co-Founder & CEO</p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Bitcoin security expert with over 7 years of experience in digital asset protection. Specializes in self-custody solutions and institutional-grade security practices.
              </p>
              <a 
                href="https://nickconnelly.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Visit Website
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 text-center hover:border-gray-400 transition-all duration-300">
                  <div className="mx-auto mb-6 h-64 w-64 overflow-hidden rounded-lg relative">
                    <Image 
                      src="/Ignas.panavas.headshot.jpg" 
                      alt="Ignas Panavas" 
                      fill
                      className="object-cover object-top scale-150" 
                    />
                  </div>
              <h3 className="text-2xl font-light text-gray-900 mb-2 font-serif">Ignas Panavas</h3>
              <p className="text-blue-600 font-medium mb-4">Co-Founder & CTO</p>
              <p className="text-gray-600 leading-relaxed mb-4">
                DeFi protocol specialist and security auditor with extensive experience in smart contract analysis and risk assessment across multiple blockchain networks.
              </p>
              <a 
                href="https://ignaspanavas.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Visit Website
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Contact CTA Section */}
        <div className="py-16 text-center">
          <h2 className="text-4xl font-light text-gray-900 mb-6 font-serif">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help secure your digital assets and guide you through your crypto journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://app.muscadine.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-900 hover:border-gray-800 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
            >
              Open App
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutPage;
