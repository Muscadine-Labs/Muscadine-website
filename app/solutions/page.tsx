import dynamic from 'next/dynamic';

const SolutionsPage = dynamic(() => import('@/src/components/SolutionsPage'), {
  loading: () => (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-stone-800"></div>
    </div>
  ),
});

export default function Solutions() {
  return <SolutionsPage />;
}

