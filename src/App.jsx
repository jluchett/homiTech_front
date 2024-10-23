import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Products from './pages/products/products';
import ProductDetails from './pages/product/productDetail';
import Cart from './pages/cart/cart';
import Checkout from './pages/checkout/checkout';
import Categories from './pages/categories/categories';
import Contact from './pages/contact/contact';
import Favorites from './pages/favorites/favorites';
import Profile from './pages/profile/profile';
import Login from './pages/login/login';
import Header from './components/header/header';
import './App.css'
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
