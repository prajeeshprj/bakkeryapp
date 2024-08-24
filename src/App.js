import React, { useState } from 'react';
import ProductList from './Component/ProductList';
import Cart from './Component/Cart';
import SalesReport from './Component/SalesReport';
import Header from './Component/Header';
import productsData from './Component/products';

const App = () => {
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [sales, setSales] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    setProducts(products.map(item =>
      item.id === product.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  const updateQuantity = (product, quantity) => {
    if (quantity === 0) {
      setCart(cart.filter(item => item.id !== product.id));
    } else {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity }
          : item
      ));
    }

    setProducts(products.map(item =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + product.quantity - quantity }
        : item
    ));
  };

  const completeSale = () => {
    const sale = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const discount = 0; // Add discount logic if needed
    const profit = sale - discount; // Add cost logic if needed
    const loss = 0; // Add loss logic if needed

    setSales([...sales, { sale, profit, loss, discount }]);
    setCart([]);
  };

  return (
    <div className="app">
      <Header cartItems={cart} />
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cart} updateQuantity={updateQuantity} />
      <button onClick={completeSale}>Complete Sale</button>
      <SalesReport sales={sales} />
    </div>
  );
};

export default App;
