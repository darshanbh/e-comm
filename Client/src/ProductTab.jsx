import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Product';
import { useCart } from './CartContext.jsx';
import './producttab.css'; // ✅ Fixed import

function ProductTab({ isLoggedIn }) {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    axios.get('/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {products.map(product => (
          <div className="col-md-3 mb-2 px-1" key={product.id}>
            <Product product={product} addToCart={addToCart} isLoggedIn={isLoggedIn} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductTab;