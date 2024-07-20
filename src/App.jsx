import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './pages/Index';
import AboutUs from './pages/AboutUs';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import MyAccount from './pages/MyAccount';
import ProductCat from './pages/ProductCat';
import ProductDog from './pages/ProductDog';
import ProductFfas from './pages/ProductFfas';
import Register from './pages/Register';
import Shop from './pages/Shop';
import Wishlist from './pages/Wishlist';
import ProductFish from './pages/ProductFish';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../includes/Header';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex(item => item.title === product.title);
      if (itemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[itemIndex].quantity += 1;
        updatedItems[itemIndex].totalPrice += parseFloat(product.price.replace('₱', '').replace(',', ''));
        return updatedItems;
      } else {
        return [...prevItems, { ...product, quantity: 1, totalPrice: parseFloat(product.price.replace('₱', '').replace(',', '')) }];
      }
    });
  };

  const removeFromCart = (index) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      if (updatedItems[index].quantity > 1) {
        updatedItems[index].quantity -= 1;
        updatedItems[index].totalPrice -= parseFloat(updatedItems[index].price.replace('₱', '').replace(',', ''));
      } else {
        updatedItems.splice(index, 1);
      }
      return updatedItems;
    });
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.totalPrice, 0);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<Index />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/cart' element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
        <Route path='/checkout' element={<Checkout totalPrice={getTotalPrice()} />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/myaccount' element={<MyAccount />} />
        <Route path='/productcat' element={<ProductCat addToCart={addToCart} />} />
        <Route path='/productdog' element={<ProductDog addToCart={addToCart} />} />
        <Route path='/productffas' element={<ProductFfas addToCart={addToCart} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/productfish' element={<ProductFish addToCart={addToCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
