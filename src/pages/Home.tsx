import { Link } from 'react-router-dom';
import { products } from '../data/products';
import type { Product } from '../types';

const socials = [
  { href: 'https://www.facebook.com', src: '/facebook-logo-100.png', alt: 'Facebook' },
  { href: 'https://www.instagram.com', src: '/instagram-logo-100.png', alt: 'Instagram' },
  { href: 'https://x.com/', src: '/X-logo-100.png', alt: 'X' },
  { href: 'https://t.me/', src: '/Telegram-logo-100.png', alt: 'Telegram' },
];

function Home() {
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
            <a
              key={s.alt}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={s.src} alt={s.alt} className="w-10 h-10 object-contain" />
            </a>
          ))}
        </div>
      </div>


      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <img src="/public/Peripherals.png" className="w-200 h-100 object-cover" />
      <img src="/public/Components.png" className="w-full h-full object-cover" />
      <img src="/public/Monitors.png" className="w-full h-full object-cover" />
      <img src="/public/Accessories.png" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default Home;