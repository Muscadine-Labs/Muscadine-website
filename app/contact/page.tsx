import dynamic from 'next/dynamic';

const ContactPage = dynamic(() => import('@/src/components/ContactPage'), {
  loading: () => (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-stone-800"></div>
    </div>
  ),
});

export default function Contact() {
  return <ContactPage />;
}

