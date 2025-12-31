import dynamic from 'next/dynamic';

const AboutPage = dynamic(() => import('@/src/components/AboutPage'), {
  loading: () => (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-stone-800"></div>
    </div>
  ),
});

export default function About() {
  return <AboutPage />;
}

