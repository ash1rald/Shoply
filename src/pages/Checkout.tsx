import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { supabase } from '../lib/supabase';

function Checkout() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const items = useCartStore((state) => state.items);
  const total = useCartStore((state) => state.total);
  const clearCart = useCartStore((state) => state.clearCart);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (items.length === 0 || submitting) return;

    setSubmitting(true);
    setErrorMessage(null);

    const { error } = await supabase.from('orders').insert({
      name,
      address,
      email,
      items,
      total: total(),
    });

    setSubmitting(false);

    if (error) {
      setErrorMessage('Не удалось оформить заказ: ' + error.message);
      return;
    }

    // только после успешной записи
    clearCart();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Thank you for your order! 🎉</h1>
        <p className="mb-4">The receipt will be sent to your email.</p>
        <p className="mb-4">Your email: {email}</p>
        <p className="mb-4">We will contact you using the provided information.</p>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Back to catalog
        </button>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <button
          onClick={() => navigate('/products')}
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Go to products
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-md">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border rounded-md px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Shipping address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="w-full border rounded-md px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border rounded-md px-3 py-2"
          />
        </div>

        <p className="text-lg font-bold">Total: {total()} $</p>

        {errorMessage && <p className="text-red-600">{errorMessage}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
        >
          {submitting ? 'Sending...' : 'Confirm order'}
        </button>
      </form>
    </div>
  );
}

export default Checkout;