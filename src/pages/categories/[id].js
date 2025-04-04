import { useRouter } from 'next/router';
import CategoryDetail from '@/components/CategoryDetail';
import Categories from '@/data/Categories';

export default function CategoryPage() {
  const { query } = useRouter();
  const { id } = query;

  const category = id ? Categories.find(cat => cat.id === id) : null;

  if (!category) {
    return <h2 className="text-red-500 text-center">Category Not Found</h2>;
  }

  return (
    <div className="container mx-auto p-6">
      <CategoryDetail category={category} />
    </div>
  );
}
