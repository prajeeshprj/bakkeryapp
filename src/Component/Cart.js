import React from 'react';

const Cart = ({ cartItems, updateQuantity }) => {
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart">
      <h2>Cart ({totalItems})</h2>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <h3>{item.name}</h3>
          <p>Price: ₹{item.price.toFixed(2)}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => updateQuantity(item, item.quantity + 1)}>+</button>
          <button onClick={() => updateQuantity(item, item.quantity - 1)}>-</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
