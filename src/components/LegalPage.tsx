import React from 'react';
import { Link } from 'react-router-dom';

const LegalPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-light text-gray-900 mb-4 font-serif border-b-2 border-gray-200 pb-4">
            Legal Disclaimer
          </h1>
          <p className="text-gray-600 italic mb-8">Last updated: January 2026</p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-yellow-800 mb-2">⚠️ IMPORTANT LEGAL NOTICE</h2>
            <p className="text-yellow-800 font-semibold">
              READ THIS DISCLAIMER CAREFULLY BEFORE USING OUR SERVICES.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Our Services</h2>
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
              <strong>All information, content, and services are provided for educational and informational purposes only.</strong> 
              We do not provide financial, investment, or legal advice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. No Financial Advice</h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-4">
              <p className="text-red-800 font-semibold mb-2">
                WE DO NOT PROVIDE FINANCIAL ADVICE, INVESTMENT ADVICE, OR TRADING ADVICE.
              </p>
              <p className="text-red-700 mb-2">Nothing on this website or in our communications constitutes:</p>
              <ul className="text-red-700 list-disc list-inside space-y-1">
                <li>Financial advice or recommendations</li>
                <li>Investment advice or recommendations</li>
                <li>Trading advice or recommendations</li>
                <li>Tax advice or recommendations</li>
                <li>Legal advice or recommendations</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Risk Curation for Non-Custodial Vaults</h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-4">
              <p className="text-blue-800 font-semibold mb-2">
                <strong>OUR RISK CURATION SERVICE:</strong> Muscadine curates risk for non-custodial vault services by evaluating, assessing, and managing risks associated with DeFi protocols and smart contracts.
              </p>
              <p className="text-blue-700 mb-2">
                We conduct thorough due diligence on protocols, analyze smart contract security, monitor protocol health, and provide risk assessments to help users make informed decisions about non-custodial vault participation.
              </p>
              <p className="text-blue-700 font-semibold mt-3">What Risk Curation Includes:</p>
              <ul className="text-blue-700 list-disc list-inside space-y-1 mt-2">
                <li>Protocol evaluation and security assessment</li>
                <li>Smart contract audit review and analysis</li>
                <li>Liquidation risk assessment and monitoring</li>
                <li>Protocol health monitoring and alerts</li>
                <li>Due diligence on protocol teams and governance</li>
                <li>Risk scoring and categorization of vault strategies</li>
                <li>Educational guidance on protocol risks and best practices</li>
              </ul>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>CRITICAL: We do not hold, store, or custody any digital assets or cryptocurrencies.</strong> 
              All assets remain in your control through non-custodial smart contracts. We provide risk curation and educational guidance only. 
              Users are responsible for their own asset security and custody.
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-4">
              <p className="text-red-800 font-semibold mb-2">CRITICAL VAULT SERVICES DISCLAIMER:</p>
              <p className="text-red-700 mb-2 font-semibold">
                Despite our risk curation efforts, non-custodial vault services involve significant risks including potential total loss of assets.
              </p>
              <ul className="text-red-700 list-disc list-inside space-y-1">
                <li><strong>We do not custody, hold, or store your digital assets</strong> - All assets remain in your control through non-custodial smart contracts</li>
                <li>Vault services are provided through third-party protocols (such as Morpho) - We do not operate these protocols</li>
                <li>Smart contract vulnerabilities may result in total loss of funds, even after our risk assessment</li>
                <li>Liquidation events can cause immediate loss of collateral</li>
                <li>Protocol failures, exploits, or governance attacks may occur despite our curation efforts</li>
                <li>Frontend attacks may compromise user interactions with vault interfaces</li>
                <li>Our risk curation does not guarantee safety or eliminate all risks</li>
                <li>We are not responsible for protocol failures, exploits, or losses incurred through vault participation</li>
                <li>Users must understand DeFi risks before participating and accept full responsibility for their decisions</li>
              </ul>
            </div>
            <p className="text-gray-700 mb-4 mt-4">
              <strong>Your Responsibility:</strong> While we curate risk and provide assessments, you are solely responsible for your decisions 
              to participate in any non-custodial vault service. Our risk curation is a tool to help inform your decisions, not a guarantee 
              of safety or performance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. User Responsibility</h2>
            <p className="text-gray-700 mb-4">By using our services, you acknowledge and agree that:</p>
            <ul className="text-gray-700 list-disc list-inside space-y-2 mb-4">
              <li>You are solely responsible for your financial decisions and participation in any DeFi protocol or vault service</li>
              <li>You understand that our risk curation does not eliminate risks or guarantee safety</li>
              <li>You will conduct your own research and due diligence before participating in any protocol or vault</li>
              <li>You should consult with qualified financial professionals before making any financial decisions</li>
              <li>You understand the risks associated with Bitcoin, cryptocurrency, and DeFi protocols</li>
              <li>You will not hold Muscadine liable for any financial losses, including losses incurred despite our risk curation</li>
              <li>You accept full responsibility for your decisions to participate in any non-custodial vault or DeFi protocol</li>
              <li>You will maintain proper security practices for your digital assets and wallet credentials</li>
              <li>You will verify all transaction details and protocol addresses before interacting with smart contracts</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Seed Phrase and Security Risks</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-4">
              <p className="text-yellow-800 font-semibold mb-2">CRITICAL SECURITY WARNING:</p>
              <p className="text-yellow-700 mb-2">
                Seed phrase compromise can result in permanent loss of all cryptocurrency holdings. Users must understand these risks:
              </p>
              <ul className="text-yellow-700 list-disc list-inside space-y-1">
                <li>Seed phrases provide complete access to wallet funds</li>
                <li>Compromise through phishing, malware, or social engineering</li>
                <li>Physical theft of hardware wallets or written seed phrases</li>
                <li>User error in seed phrase storage or backup</li>
                <li>We are not responsible for lost or compromised seed phrases</li>
                <li>Users must implement their own security measures</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. No Guarantees</h2>
            <p className="text-gray-700 mb-4">We make no guarantees, warranties, or representations regarding:</p>
            <ul className="text-gray-700 list-disc list-inside space-y-2 mb-4">
              <li>The accuracy, completeness, or reliability of any information or risk assessments</li>
              <li>The success of any strategies or techniques discussed</li>
              <li>The performance of any digital assets, investments, or DeFi protocols</li>
              <li>The security of any wallet, custody solutions, or smart contracts</li>
              <li>The safety or security of any protocol we curate or recommend</li>
              <li>The elimination of risks through our risk curation services</li>
              <li>The continued operation or security of any third-party protocol</li>
            </ul>
            <p className="text-gray-700 mb-4 mt-4">
              <strong>No Warranty:</strong> Our risk curation services and all other services are provided "as is" without warranty 
              of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular 
              purpose, or non-infringement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Risk Disclosure</h2>
            <p className="text-gray-700 mb-4">Bitcoin, cryptocurrency, and DeFi protocol participation involve significant risks, including but not limited to:</p>
            <ul className="text-gray-700 list-disc list-inside space-y-2 mb-4">
              <li><strong>DeFi Protocol Risks:</strong> Smart contract vulnerabilities, protocol exploits, governance attacks, and total loss of funds</li>
              <li><strong>Liquidation Risks:</strong> Collateral liquidation in lending protocols can result in immediate loss of assets</li>
              <li><strong>Volatility:</strong> Extreme price volatility and potential loss of principal</li>
              <li><strong>Regulatory Risks:</strong> Regulatory changes and legal uncertainty affecting cryptocurrency and DeFi</li>
              <li><strong>Technical Risks:</strong> Loss of access, wallet compromise, seed phrase loss, or technical failures</li>
              <li><strong>Market Risks:</strong> Market manipulation, fraud, and counterparty risks</li>
              <li><strong>Frontend Risks:</strong> Phishing attacks, DNS hijacking, and malicious browser extensions</li>
              <li><strong>Tax Implications:</strong> Tax reporting requirements and potential tax liabilities</li>
              <li><strong>Risk Curation Limitations:</strong> Our risk curation does not eliminate these risks and cannot guarantee safety</li>
            </ul>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded mt-4">
              <p className="text-red-800 font-semibold">
                <strong>WARNING:</strong> Participation in DeFi protocols and non-custodial vaults can result in total loss of your assets. 
                Never invest more than you can afford to lose.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-700 font-semibold mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, MUSCADINE SHALL NOT BE LIABLE FOR:
            </p>
            <ul className="text-gray-700 list-disc list-inside space-y-2 mb-4">
              <li>Any direct, indirect, incidental, or consequential damages</li>
              <li>Any financial losses or investment losses</li>
              <li>Any loss of data or digital assets</li>
              <li>Any errors or omissions in our content, risk assessments, or protocol evaluations</li>
              <li>Any actions taken based on our educational content, risk curation, or protocol recommendations</li>
              <li>Any losses incurred despite our risk curation efforts or assessments</li>
              <li>Vault liquidation events, protocol failures, or smart contract exploits</li>
              <li>Third-party protocol failures, hacks, or governance issues</li>
              <li>Frontend attacks, phishing attempts, or user interface compromises</li>
              <li>User errors in transaction execution or wallet management</li>
              <li>Inaccuracies in our risk curation analysis or protocol evaluations</li>
            </ul>
            <p className="text-gray-700 mb-4 mt-4">
              <strong>No Liability for Risk Curation:</strong> Our risk curation services are provided for informational purposes only. 
              We are not liable for any losses incurred through participation in any protocol, vault, or DeFi service, regardless of 
              whether we have provided risk curation or assessment for that service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. No Professional Relationship</h2>
            <p className="text-gray-700 mb-4">
              No professional relationship (financial advisor, investment advisor, attorney, or other) is created 
              between you and Muscadine through the use of our services. Our risk curation services and educational 
              content are provided for informational purposes only and do not constitute financial, investment, or legal advice.
            </p>
            <p className="text-gray-700 mb-4">
              We are not your financial advisors, investment advisors, or legal counsel. You should consult with qualified 
              professionals before making any financial or legal decisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Third-Party Content</h2>
            <p className="text-gray-700 mb-4">
              Our website may contain links to third-party websites or content. We are not responsible for the 
              accuracy, completeness, or reliability of such third-party content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Regulatory Compliance</h2>
            <p className="text-gray-700 mb-4">
              Users are responsible for ensuring compliance with all applicable laws and regulations in their 
              jurisdiction. We do not provide legal advice regarding regulatory compliance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Indemnification</h2>
            <p className="text-gray-700 mb-4">
              You agree to indemnify and hold harmless Muscadine from any claims, damages, or expenses arising 
              from your use of our services or violation of these terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Governing Law</h2>
            <p className="text-gray-700 mb-4">
              This disclaimer is governed by the laws of the United States. Any disputes shall be resolved 
              in the courts of the United States.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Severability</h2>
            <p className="text-gray-700 mb-4">
              If any provision of this disclaimer is found to be unenforceable, the remaining provisions 
              shall remain in full force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Contact Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <p className="text-gray-700 mb-2">If you have questions about this legal disclaimer, please contact us:</p>
              <p className="text-gray-700"><strong>Email:</strong> muscadinelabs@gmail.com</p>
              <p className="text-gray-700"><strong>Website:</strong> muscadine.io</p>
            </div>
          </section>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-yellow-800 mb-2">Final Warning</h2>
            <p className="text-yellow-800 font-semibold">
              By continuing to use our services, you acknowledge that you have read, understood, and agree to be 
              bound by this legal disclaimer. If you do not agree with any part of this disclaimer, you must not use our services.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">16. Open Source</h2>
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
              to="/" 
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

export default LegalPage;
