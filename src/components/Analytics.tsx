'use client';

import { useEffect } from 'react';

interface AnalyticsProps {
  pageName?: string;
}

const Analytics = ({ pageName = 'unknown' }: AnalyticsProps) => {
  useEffect(() => {
    // Simple analytics tracking
    const trackPageView = () => {
      const data = {
        page: pageName,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        referrer: document.referrer,
        screen: {
          width: window.screen.width,
          height: window.screen.height
        },
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight
        }
      };

      // Store in localStorage for debugging (remove in production)
      if (process.env.NODE_ENV === 'development') {
        console.log('Analytics:', data);
      }

      // In production, you would send this to your analytics service
      // Example: fetch('/api/analytics', { method: 'POST', body: JSON.stringify(data) });
    };

    trackPageView();

    // Track performance metrics
    const trackPerformance = () => {
      if ('performance' in window && 'getEntriesByType' in performance) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const perfData = {
            page: pageName,
            loadTime: navigation.loadEventEnd - navigation.fetchStart,
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
            firstPaint: performance.getEntriesByType('paint').find(entry => entry.name === 'first-paint')?.startTime,
            timestamp: new Date().toISOString()
          };

          if (process.env.NODE_ENV === 'development') {
            console.log('Performance:', perfData);
          }
        }
      }
    };

    // Track performance after page load
    if (document.readyState === 'complete') {
      trackPerformance();
    } else {
      window.addEventListener('load', trackPerformance);
    }

    // Track user interactions
    const trackInteraction = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A') {
        const interactionData = {
          page: pageName,
          type: 'click',
          element: target.tagName,
          text: target.textContent?.slice(0, 50),
          href: (target as HTMLAnchorElement).href,
          timestamp: new Date().toISOString()
        };

        if (process.env.NODE_ENV === 'development') {
          console.log('Interaction:', interactionData);
        }
      }
    };

    document.addEventListener('click', trackInteraction);

    return () => {
      window.removeEventListener('load', trackPerformance);
      document.removeEventListener('click', trackInteraction);
    };
  }, [pageName]);

  return null; // This component doesn't render anything
};

export default Analytics;
