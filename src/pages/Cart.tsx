import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';

function Cart() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const total = useCartStore((state) => state.total);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  



  if (items.length === 0) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <Link to="/" className="text-blue-600 underline">
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Cart</h1>

      <div className="flex flex-col gap-4 mb-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-500 text-sm ">
                  {item.price} $ × {item.quantity}
                </p>
                <p className="text-gray-500 text-sm">Quantity: {item.quantity}</p>

                <input type="number" min="1" defaultValue={item.quantity} className="w-16 border rounded px-2 py-1 mt-2" />
                <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition"
                onClick={() => {
                  const quantityInput = document.querySelector<HTMLInputElement>(`input[type="number"][value="${item.quantity}"]`);
                  if (quantityInput) {
                    const newQuantity = parseInt(quantityInput.value, 10);
                    updateQuantity(item.id, newQuantity);
                  }
                }}
                >
                  Update
                </button>


                <img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22256%22%20height%3D%22256%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23101010%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Ctitle%3Earrow%20up%3C%2Ftitle%3E%0A%20%20%3Cpath%20stroke%3D%22none%22%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M12%205l0%2014%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M18%2011l-6%20-6%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M6%2011l6%20-6%22%2F%3E%0A%3C%2Fsvg%3E" width="20" height="20" alt="arrow up"></img>

              </div>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <p className="text-xl font-bold">Total: {total()} $</p>
        <Link
          to="/checkout"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default Cart;