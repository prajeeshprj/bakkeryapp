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
    if (product.quantity <= 0) {
      alert('This item is out of stock!');
      return;
    }
  
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
    if (quantity < 0) return;
  
    const existingProduct = products.find(item => item.id === product.id);
    const stockAvailable = existingProduct ? existingProduct.quantity + product.quantity - quantity : 0;
  
    if (stockAvailable < 0) {
      alert('Not enough stock available!');
      return;
    }
  
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
        ? { ...item, quantity: stockAvailable }
        : item
    ));
  };
  

  const completeSale = () => {
    const sale = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const discount = 0; 
    const profit = sale - discount; 
    const loss = 0; 

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
