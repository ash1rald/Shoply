import type { Product } from '../types';
import { useCartStore } from '../store/cartStore';

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col h-full transition hover:shadow-lg">
      <div className="aspect-square w-full overflow-hidden rounded-md bg-white mb-4">
        {product.image && (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-contain p-2"
          />
        )}
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
      <p className="text-sm text-gray-500 mb-3">{product.description}</p>

      <div className="mt-auto">
        <p className="text-xl font-bold mb-4">{product.price} $</p>
        <button
          onClick={() => addItem(product)}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;