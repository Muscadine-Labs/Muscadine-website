'use client';

import React from 'react';
import Link from 'next/link';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-light text-gray-900 mb-4 font-serif border-b-2 border-gray-200 pb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 italic mb-8">Last updated: January 2026</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              Muscadine Labs LLC ("we," "our," or "us"), a Wyoming limited liability company, is committed to protecting your privacy. We collect minimal information necessary to provide our services, which include risk curation for non-custodial Morpho vaults, Bitcoin security guidance, Bitcoin node connectivity, DeFi protocol access, and educational content:
            </p>
            <ul className="text-gray-700 list-disc list-inside space-y-2 mb-4">
              <li><strong>Contact Information:</strong> Email addresses provided voluntarily through contact forms or service inquiries</li>
              <li><strong>Usage Data:</strong> Basic website analytics to improve user experience and service delivery</li>
              <li><strong>Communication Records:</strong> Correspondence related to our services, including risk curation consultations and support requests</li>
              <li><strong>Service Interaction Data:</strong> Information about your use of our services, such as which protocols or vaults you access through our platform (if applicable)</li>
            </ul>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-sm mt-4">
              <p className="text-blue-800 font-semibold mb-2">Important Privacy Note:</p>
              <p className="text-blue-700">
                We do <strong>not</strong> collect, store, or have access to your wallet private keys, seed phrases, or any digital assets. 
                All non-custodial vault interactions occur directly between you and the smart contracts - we never have custody or control over your assets.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use collected information solely for:</p>
            <ul className="text-gray-700 list-disc list-inside space-y-2 mb-4">
              <li>Providing risk curation services for non-custodial vaults and DeFi protocols</li>
              <li>Delivering educational content about Bitcoin security, self-custody, and DeFi</li>
              <li>Responding to inquiries about our services, including risk assessments and protocol evaluations</li>
              <li>Improving our website, services, and educational materials</li>
              <li>Providing access to curated DeFi protocols and Bitcoin node services</li>
              <li>Monitoring and analyzing protocol health and risks for our risk curation services</li>
              <li>Complying with legal obligations and regulatory requirements</li>
            </ul>
            <p className="text-gray-700 mb-4 mt-4">
              <strong>We do not:</strong> Sell your personal information, use your data for marketing purposes without consent, 
              or share your information with third parties except as described in this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share information only:
            </p>
            <ul className="text-gray-700 list-disc list-inside space-y-2 mb-4">
              <li>With your explicit consent</li>
              <li>To comply with legal requirements, court orders, or regulatory requests</li>
              <li>To protect our rights, prevent fraud, or ensure service security</li>
              <li>With service providers who assist in operating our services (under strict confidentiality agreements)</li>
              <li>In connection with a business transfer, merger, or acquisition (with notice to users)</li>
            </ul>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-sm mt-4">
              <p className="text-yellow-800 font-semibold mb-2">Third-Party Protocols (Morpho, Node Access, etc.):</p>
              <p className="text-yellow-700">
                When you interact with third-party DeFi protocols (including Morpho vaults) or connect to our Bitcoin node 
                through our curated services, those protocols and services may collect information according to their own 
                privacy policies. We are not responsible for the privacy practices of third-party protocols or smart contracts.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate security measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic 
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>
            <ul className="text-gray-700 list-disc list-inside space-y-2 mb-4">
              <li>Encryption of data in transit using industry-standard protocols</li>
              <li>Secure storage of collected information with access controls</li>
              <li>Regular security assessments and updates</li>
              <li>Limited access to personal information on a need-to-know basis</li>
            </ul>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-sm mt-4">
              <p className="text-red-800 font-semibold mb-2">Important Security Reminder:</p>
              <p className="text-red-700">
                We never request your wallet private keys, seed phrases, or passwords. Never share these credentials with anyone, 
                including Muscadine Labs LLC. Your digital assets remain in your control through non-custodial smart contracts.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              Our website may contain links to external sites. We are not responsible for the privacy practices of these third-party sites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookies and Tracking</h2>
            <p className="text-gray-700 mb-4">
              We use minimal cookies for essential website functionality. You can disable cookies in your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="text-gray-700 list-disc list-inside space-y-2 mb-4">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Children's Privacy</h2>
            <p className="text-gray-700 mb-4">
              Our services are not directed to children under 13. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy periodically. We will notify you of any material changes by posting the new policy on this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Us</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <p className="text-gray-700 mb-2">If you have questions about this Privacy Policy, please contact us:</p>
              <p className="text-gray-700"><strong>Company:</strong> Muscadine Labs LLC</p>
              <p className="text-gray-700"><strong>Registered:</strong> Wyoming, USA</p>
              <p className="text-gray-700"><strong>Email:</strong> muscadinelabs@gmail.com</p>
              <p className="text-gray-700"><strong>Website:</strong> muscadine.io</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Service Disclaimers</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-sm mb-4">
              <p className="text-yellow-800 font-semibold mb-2">Risk Curation Services:</p>
              <p className="text-yellow-700 mb-4">
                Our risk curation for non-custodial vaults involves evaluating protocols, assessing smart contract security, 
                and providing risk assessments. However, our curation does not guarantee safety or eliminate risks. All 
                participation in DeFi protocols involves significant risk of total loss.
              </p>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>Important:</strong> Muscadine Labs LLC provides educational content and risk curation services. We do not provide 
              financial advice, investment recommendations, or custody services. We do not custody, hold, or control your digital 
              assets. All information and risk assessments are for educational and informational purposes only. Users are 
              responsible for their own financial decisions and should consult with qualified professionals before making any 
              financial decisions.
            </p>
            <ul className="text-gray-700 list-disc list-inside space-y-2 mb-4">
              <li>We do not custody or control your digital assets</li>
              <li>All vault interactions occur through non-custodial smart contracts</li>
              <li>Our risk curation is informational and does not guarantee safety</li>
              <li>You are solely responsible for your participation in any DeFi protocol</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Open Source</h2>
            <p className="text-gray-700 mb-4">
              This website and its educational content are open source. You can view the source code and contribute to the project:
            </p>
            <p className="text-gray-700">
              <strong>GitHub Repository:</strong>{' '}
              <a 
                href="https://github.com/Muscadine-Labs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                https://github.com/Muscadine-Labs
              </a>
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link 
              href="/" 
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Muscadine
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
