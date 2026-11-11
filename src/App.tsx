import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home'
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Product from './pages/Product';
import Contact from './pages/Contact';
import CartDrawer from './components/CartDrawer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <CartDrawer />
    </BrowserRouter>
  );
}

export default App;