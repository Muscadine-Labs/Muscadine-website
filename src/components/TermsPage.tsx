'use client';

import React from 'react';
import Link from 'next/link';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-semibold text-gray-900 mb-4 text-center font-serif">
            Terms of Service
          </h1>
          <p className="text-gray-600 mb-8 text-center"><strong>Last updated:</strong> January 2026</p>

          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 mb-8 rounded-sm">
            <p className="text-yellow-800 font-semibold">
              <strong>IMPORTANT DISCLAIMER:</strong> By using Muscadine's services, you acknowledge that all content is for educational and informational purposes only. We are not financial advisors or legal experts. Use of our services does not create any professional relationship.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 mb-4">
              By accessing and using Muscadine's website and services, you accept and agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
              2. Our Services
            </h2>
            <p className="text-gray-700 mb-4">
              Muscadine provides comprehensive services focused on Bitcoin security, self-custody solutions, and decentralized finance (DeFi) risk management. Our services include:
            </p>
            <ul className="text-gray-700 list-disc list-inside space-y-2 mb-4">
              <li><strong>Risk Curation for Non-Custodial Vaults:</strong> We curate and manage risk for non-custodial vault services, evaluating protocols, assessing smart contract security, and providing guidance on safe DeFi participation</li>
              <li><strong>Bitcoin Security & Self-Custody:</strong> Educational resources and guidance on implementing secure Bitcoin self-custody solutions</li>
              <li><strong>DeFi Protocol Access:</strong> Access to curated DeFi protocols including lending, borrowing, and yield generation services</li>
              <li><strong>Bitcoin Node Services:</strong> Access to our self-hosted Bitcoin node for enhanced privacy and transaction validation</li>
              <li><strong>Educational Content:</strong> Comprehensive educational materials about cryptocurrency, blockchain technology, and decentralized finance</li>
            </ul>
            <p className="text-gray-700 mb-4">
              All content is for educational and informational purposes only. We do not provide financial, investment, or legal advice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
              3. Risk Curation for Non-Custodial Vaults
            </h2>
            <div className="bg-blue-100 border-l-4 border-blue-500 p-6 mb-4 rounded-sm">
              <p className="text-blue-800 font-semibold mb-2">
                <strong>OUR RISK CURATION SERVICE:</strong> Muscadine curates risk for non-custodial vault services by evaluating, assessing, and managing risks associated with DeFi protocols and smart contracts.
              </p>
              <p className="text-blue-700">
                We conduct thorough due diligence on protocols, analyze smart contract security, monitor protocol health, and provide risk assessments to help users make informed decisions about non-custodial vault participation.
              </p>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">What Risk Curation Includes:</h3>
            <ul className="text-gray-700 list-disc list-inside space-y-2 mb-4">
              <li>Protocol evaluation and security assessment</li>
              <li>Smart contract audit review and analysis</li>
              <li>Liquidation risk assessment and monitoring</li>
              <li>Protocol health monitoring and alerts</li>
              <li>Due diligence on protocol teams and governance</li>
              <li>Risk scoring and categorization of vault strategies</li>
              <li>Educational guidance on protocol risks and best practices</li>
            </ul>
            <div className="bg-red-100 border-l-4 border-red-500 p-6 mb-4 rounded-sm mt-6">
              <p className="text-red-800 font-semibold mb-2">
                <strong>CRITICAL DISCLAIMER:</strong> Despite our risk curation efforts, non-custodial vault services involve significant risks including potential total loss of assets.
              </p>
              <ul className="text-red-700 list-disc list-inside space-y-2">
                <li><strong>We do not custody, hold, or store your digital assets</strong> - All assets remain in your control through non-custodial smart contracts</li>
                <li>Vault services are provided through third-party protocols (such as Morpho) - We do not operate these protocols</li>
                <li>Smart contract vulnerabilities may result in total loss of funds, even after our risk assessment</li>
                <li>Liquidation risks exist in lending protocols and can cause immediate loss of collateral</li>
                <li>Frontend attacks may compromise user interactions with vault interfaces</li>
                <li>Protocol failures, exploits, or governance attacks may occur despite our curation efforts</li>
                <li>Our risk curation does not guarantee safety or eliminate all risks</li>
                <li>Users must understand DeFi risks before participating and accept full responsibility for their decisions</li>
                <li>We are not responsible for protocol failures, exploits, or losses incurred through vault participation</li>
              </ul>
            </div>
            <p className="text-gray-700 mb-4 mt-4">
              <strong>Your Responsibility:</strong> While we curate risk and provide assessments, you are solely responsible for your decisions to participate in any non-custodial vault service. Our risk curation is a tool to help inform your decisions, not a guarantee of safety or performance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
              4. Bitcoin Security and Self-Custody Risks
            </h2>
            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 mb-4 rounded-sm">
              <p className="text-yellow-800 font-semibold">
                <strong>SECURITY DISCLAIMER:</strong> Bitcoin self-custody involves significant security risks. 
                We provide educational guidance only and are not responsible for security failures.
              </p>
            </div>
            <ul className="text-gray-700 list-disc list-inside space-y-2 mb-4">
              <li>Seed phrase compromise can result in total loss of funds</li>
              <li>Hardware wallet failures or damage may cause asset loss</li>
              <li>User error in transaction execution is irreversible</li>
              <li>Social engineering attacks target cryptocurrency holders</li>
              <li>Physical security risks exist for hardware wallets</li>
              <li>We are not responsible for lost or stolen seed phrases</li>
              <li>Users must implement their own security measures</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
              5. Frontend and Interface Risks
            </h2>
            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 mb-4 rounded-sm">
              <p className="text-yellow-800 font-semibold">
                <strong>INTERFACE DISCLAIMER:</strong> Our frontend interfaces may be vulnerable to attacks that could compromise user funds.
              </p>
            </div>
            <ul className="text-gray-700 list-disc list-inside space-y-2 mb-4">
              <li>Frontend applications may be subject to phishing attacks</li>
              <li>Malicious browser extensions can intercept transactions</li>
              <li>DNS hijacking may redirect users to fake interfaces</li>
              <li>Man-in-the-middle attacks can compromise wallet connections</li>
              <li>Users must verify all URLs and transaction details</li>
              <li>We are not responsible for frontend-based security breaches</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
              6. No Professional Relationship
            </h2>
            <p className="text-gray-700 mb-4">
              Use of our services does not create any professional relationship between you and Muscadine. 
              We are not your financial advisors, investment advisors, or legal counsel. Our risk curation 
              services and educational content are provided for informational purposes only and do not constitute 
              financial, investment, or legal advice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
              7. User Responsibilities
            </h2>
            <p className="text-gray-700 mb-4">You agree to:</p>
            <ul className="text-gray-700 list-disc list-inside space-y-2 mb-4">
              <li>Use our services responsibly and understand the risks associated with cryptocurrency and DeFi</li>
              <li>Conduct your own research and due diligence before making any financial decisions</li>
              <li>Consult appropriate professionals (financial advisors, legal counsel) for financial or legal decisions</li>
              <li>Understand that our risk curation does not eliminate risks or guarantee safety</li>
              <li>Accept full responsibility for your decisions to participate in any non-custodial vault or DeFi protocol</li>
              <li>Understand that all information is provided "as is" without warranties</li>
              <li>Not hold Muscadine liable for any losses incurred through use of our services or participation in curated protocols</li>
              <li>Maintain proper security practices for your digital assets and wallet credentials</li>
              <li>Verify all transaction details and protocol addresses before interacting with smart contracts</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
              8. Limitation of Liability
            </h2>
            <p className="text-gray-700 mb-4">To the maximum extent permitted by law, Muscadine shall not be liable for any:</p>
            <ul className="text-gray-700 list-disc list-inside space-y-2 mb-4">
              <li>Direct, indirect, incidental, or consequential damages</li>
              <li>Loss of digital assets or cryptocurrency holdings</li>
              <li>Vault liquidation events, protocol failures, or smart contract exploits</li>
              <li>Losses incurred despite our risk curation efforts or assessments</li>
              <li>Decisions made based on our educational content, risk assessments, or protocol recommendations</li>
              <li>Inaccuracies or errors in our risk curation analysis or protocol evaluations</li>
              <li>Interruption or cessation of service</li>
              <li>Third-party protocol failures, hacks, or governance issues</li>
              <li>Frontend attacks, phishing attempts, or user interface compromises</li>
              <li>User errors in transaction execution or wallet management</li>
            </ul>
            <p className="text-gray-700 mb-4 mt-4">
              <strong>No Warranty:</strong> Our risk curation services and all other services are provided "as is" without warranty of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
              9. Indemnification
            </h2>
            <p className="text-gray-700 mb-4">
              You agree to indemnify and hold harmless Muscadine from any claims, damages, or expenses arising from your use of our services or violation of these terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
              10. Intellectual Property
            </h2>
            <p className="text-gray-700 mb-4">
              Our content is provided under open-source licenses. You may use, modify, and distribute our code according to the applicable license terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
              11. Third-Party Links
            </h2>
            <p className="text-gray-700 mb-4">
              Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of these external sites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
              12. Service Availability
            </h2>
            <p className="text-gray-700 mb-4">
              We strive to maintain service availability but do not guarantee uninterrupted access. We may modify, suspend, or discontinue services at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
              13. Changes to Terms
            </h2>
            <p className="text-gray-700 mb-4">
              We may update these terms from time to time. Continued use of our services constitutes acceptance of any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
              14. Governing Law
            </h2>
            <p className="text-gray-700 mb-4">
              These terms are governed by applicable laws. Any disputes shall be resolved in the appropriate jurisdiction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
              15. Contact Information
            </h2>
            <p className="text-gray-700 mb-4">
              For questions about these terms, contact us at:{' '}
              <a href="mailto:muscadinelabs@gmail.com" className="text-orange-600 hover:text-orange-800 underline">
                muscadinelabs@gmail.com
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
              16. Severability
            </h2>
            <p className="text-gray-700 mb-4">
              If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link 
              href="/" 
              className="inline-flex items-center text-orange-600 hover:text-orange-800 font-semibold transition-colors"
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

export default TermsPage;
