import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import ErrorBoundary from './components/ErrorBoundary';
import CustomAnalytics from './components/Analytics';
import MuscadineBanner from './components/MuscadineBanner';
import MuscadineFooter from './components/MuscadineFooter';
import ScrollToTop from './components/ScrollToTop';

// Lazy load route components for code splitting
const MuscadineHome = lazy(() => import('./components/MuscadineHome'));
const AboutPage = lazy(() => import('./components/AboutPage'));
const SelfCustodyPage = lazy(() => import('./components/SelfCustodyPage'));
const ContactPage = lazy(() => import('./components/ContactPage'));
const NodePage = lazy(() => import('./components/NodePage'));
const SolutionsPage = lazy(() => import('./components/SolutionsPage'));
const LegalPage = lazy(() => import('./components/LegalPage'));
const PrivacyPage = lazy(() => import('./components/PrivacyPage'));
const TermsPage = lazy(() => import('./components/TermsPage'));


function App() {
  return (
    <ErrorBoundary>
      <Analytics />
      <CustomAnalytics pageName="defi-dashboard" />
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <MuscadineBanner />
          <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
            <Suspense fallback={
              <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-stone-800"></div>
              </div>
            }>
              <Routes>
                <Route path="/" element={<MuscadineHome />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/solutions" element={<SolutionsPage />} />
                <Route path="/self-custody" element={<SelfCustodyPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/node" element={<NodePage />} />
                <Route path="/legal" element={<LegalPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
              </Routes>
            </Suspense>
          </main>
          <MuscadineFooter />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App; 