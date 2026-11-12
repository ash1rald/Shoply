import { Link } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';

const socials = [
  { href: 'https://www.facebook.com', src: '/facebook-logo-100.png', alt: 'Facebook' },
  { href: 'https://www.instagram.com', src: '/instagram-logo-100.png', alt: 'Instagram' },
  { href: 'https://x.com/', src: '/X-logo-100.png', alt: 'X' },
  { href: 'https://t.me/', src: '/Telegram-logo-100.png', alt: 'Telegram' },
];

const categories = [
  { name: 'Peripherals', img: '/Peripherals.png' },
  { name: 'Components', img: '/Components.png' },
  { name: 'Monitors', img: '/Monitors.png' },
  { name: 'Accessories', img: '/Accessories.png' },
];

export default function Home() {
  const { products, loading, error } = useProducts();

  return (
    <div className="p-8">
      <div className="relative w-full mb-8 overflow-hidden rounded-lg shadow-md">
        <img
          src="/banner.jpeg"
          alt="banner"
          className="block w-full h-120 object-cover scale-[1.06]"
        />

        <h1 className="absolute left-12 top-14 text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
          Shoply
        </h1>

        <div className="absolute right-12 top-12 flex gap-2">
          {socials.map((s) => (
            <a key={s.alt} href={s.href} target="_blank" rel="noopener noreferrer">
              <img src={s.src} alt={s.alt} className="w-10 h-10 object-contain" />
            </a>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((c) => (
          <div key={c.name}>
            <Link
              to={`/products#${c.name}`}
              className="block bg-white rounded-lg shadow-md p-4 flex flex-col h-full transition hover:shadow-lg"
            >
              <img src={c.img} alt={c.name} className="w-200 h-100 object-cover" />
            </Link>
            <p className="mt-2 text-lg font-semibold text-gray-800 text-center">
              {c.name}
            </p>
          </div>
        ))}
      </div>

      <h2 className="mt-10 mb-4 text-2xl font-bold">Популярные товары</h2>

      {loading && <p>Загрузка...</p>}
      {error && <p>Ошибка: {error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}