import type { Product } from '../types';
import { useCartStore } from '../store/cartStore';

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col h-full transition hover:shadow-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-120 object-cover rounded-md mb-4"
      />

      <div className="flex flex-col flex-1">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-3">{product.description}</p>
        <p className="text-xl font-bold mb-4">{product.price} $</p>

        <button
          onClick={() => addItem(product)}
          className="mt-auto bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;