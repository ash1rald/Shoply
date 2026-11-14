import { Link, useParams } from 'react-router-dom';
import { useProduct } from '../hooks/useProduct';
import { useCartStore } from '../store/cartStore';

export default function ProductDetails() {
  const { id } = useParams();
  const { product, loading, error } = useProduct(id);
  const addItem = useCartStore((state) => state.addItem);
  const openCart = useCartStore((state) => state.openCart);

  if (loading) return <p className="p-8">Loading...</p>;
  if (error) return <p className="p-8">Error: {error}</p>;

  if (!product) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Link to="/products" className="text-blue-600 hover:underline">
          ← Back to catalog
        </Link>
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <Link to="/products" className="text-sm text-blue-600 hover:underline">
        ← Back to catalog
      </Link>

      <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="aspect-square w-full rounded-lg bg-white p-6 shadow-md">
          {product.image && (
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-contain"
            />
          )}
        </div>

        <div className="flex flex-col">
          <span className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
            {product.category}
          </span>

          <h1 className="mb-4 text-3xl font-bold tracking-tight">{product.name}</h1>

          <p className="mb-6 text-gray-600">{product.description}</p>

          <p className="mb-6 text-3xl font-bold">{product.price} $</p>

          <button
            onClick={() => {
              addItem(product);
              openCart();
            }}
            className="w-full rounded-md bg-blue-600 py-3 text-white transition hover:bg-blue-700 md:w-64"
          >
            Add to cart
          </button>
        </div>
      </div>
    </main>
  );
}