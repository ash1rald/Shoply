import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';

function Header() {
  const items = useCartStore((state) => state.items);
  const openCart = useCartStore((state) => state.openCart);
  const itemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-md px-6 py-4 flex justify-between items-center">
      <Link
        to="/"
        className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent"
      >
        Shoply
      </Link>

      <Link
        to="/"
        className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium shadow-sm hover:bg-blue-700 hover:shadow-md active:scale-95 transition"
      >
        Home
      </Link>

      <Link
        to="/products"
        className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium shadow-sm hover:bg-blue-700 hover:shadow-md active:scale-95 transition"
      >
        Products
      </Link>

      <Link
        to="/contact"
        className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium shadow-sm hover:bg-blue-700 hover:shadow-md active:scale-95 transition"
      >
        Contact Us
      </Link>

      <button onClick={openCart} className="relative" aria-label="Open cart">
        <img
          src="/shopping-basket-96x96.png"
          alt="Shopping basket"
          className="h-8 w-8"
        />
        {itemsCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {itemsCount}
          </span>
        )}
      </button>
    </header>
  );
}

export default Header;