import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import MuscadineBanner from '@/src/components/MuscadineBanner';
import MuscadineFooter from '@/src/components/MuscadineFooter';
import CustomAnalytics from '@/src/components/Analytics';
import ErrorBoundary from '@/src/components/ErrorBoundary';
import ScrollToTop from '@/src/components/ScrollToTop';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Muscadine - Financial self-sovereignty',
  description: 'Empowering financial freedom through Bitcoin security and decentralized finance.',
  keywords: 'DeFi, Bitcoin, Base, Morpho, vault, yield, crypto, finance, self-sovereignty, dashboard',
  authors: [{ name: 'Nicholas Connelly' }],
  openGraph: {
    title: 'Muscadine - Financial self-sovereignty',
    description: 'Empowering financial freedom through Bitcoin security and decentralized finance.',
    type: 'website',
    url: 'https://muscadine.io',
    siteName: 'Muscadine',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muscadine - Financial self-sovereignty',
    description: 'Empowering financial freedom through Bitcoin security and decentralized finance.',
    creator: '@nicklutk',
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <meta name="theme-color" content="#f59e0b" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <link rel="canonical" href="https://muscadine.io" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'Muscadine - Financial self-sovereignty',
              url: 'https://muscadine.io',
              description: 'Empowering financial freedom through Bitcoin security and decentralized finance.',
              applicationCategory: 'FinanceApplication',
              operatingSystem: 'Web Browser',
              author: {
                '@type': 'Person',
                name: 'Nicholas Connelly',
                url: 'https://twitter.com/nicklutk',
              },
            }),
          }}
        />
      </head>
      <body className="bg-marble antialiased">
        <ErrorBoundary>
          <Analytics />
          <CustomAnalytics pageName="defi-dashboard" />
          <ScrollToTop />
          <div className="min-h-screen bg-gray-50 flex flex-col">
            <MuscadineBanner />
            <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 w-full">
              {children}
            </main>
            <MuscadineFooter />
          </div>
        </ErrorBoundary>
      </body>
    </html>
  );
}

