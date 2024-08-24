import React from 'react';

const Header = ({ cartItems }) => {
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="header">
      <h1>Bakery Store</h1>
      <p>Cart: {totalItems} items</p>
    </div>
  );
};

export default Header;
