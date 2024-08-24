import React from 'react';

const ProductItem = ({ product, addToCart }) => {
  const cgst = 0.06;
  const sgst = 0.06;
  const priceWithTax = product.price * (1 + cgst + sgst);

  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p>Price: ₹{priceWithTax.toFixed(2)}</p>
      <p>In Stock: {product.quantity}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
