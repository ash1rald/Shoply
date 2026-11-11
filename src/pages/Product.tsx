import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      
      <h1 className="mb-8 text-3xl font-bold tracking-tight">Product Catalog</h1>

      {products.length === 0 ? (
        <p className="text-gray-500">We don't have any products available at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}

export default Home;