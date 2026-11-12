import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../hooks/useProducts';

export default function Product() {
  const { products, loading, error } = useProducts();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  if (loading) return <p className="p-8">Loading...</p>;
  if (error) return <p className="p-8">Error: {error}</p>;

  // Categories are derived from the products data to ensure they are always up-to-date
  const categories = [...new Set(products.map((product) => product.category))];

  // Filter products based on selected categories
  const filtered =
    selectedCategories.length === 0
      ? products
      : products.filter((product) =>
          selectedCategories.includes(product.category)
        );

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="mb-8 text-3xl font-bold tracking-tight">
        Product Catalog
      </h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-[220px_1fr]">
        {/* Sidebar */}
        <aside className="h-fit rounded-xl border border-gray-200 p-5">
          <h2 className="mb-5 text-lg font-semibold">FILTER</h2>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
              Category
            </h3>

            <div className="space-y-3">
              <label className="flex cursor-pointer items-center gap-3 text-sm">
                <input
                  type="checkbox"
                  checked={selectedCategories.length === 0}
                  onChange={() => setSelectedCategories([])}
                  className="h-4 w-4 accent-black"
                />
                All categories
              </label>

              {categories.map((category) => (
                <label
                  key={category}
                  className="flex cursor-pointer items-center gap-3 text-sm"
                >
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => toggleCategory(category)}
                    className="h-4 w-4 accent-black"
                  />
                  {category}
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Catalog */}
        <section>
          <div className="mb-5 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Showing {filtered.length} products
            </p>
          </div>

          {filtered.length === 0 ? (
            <p className="py-10 text-center text-gray-500">
              No products found in this category.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}