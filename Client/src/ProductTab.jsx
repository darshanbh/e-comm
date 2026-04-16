import React, { useEffect, useState } from 'react';
import Product from './Product';
import { useCart } from './CartContext.jsx';
import './producttab.css';
import api from '../api';

function ProductTab({ isLoggedIn }) {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    console.log("📦 Fetching products...");

    api.get('/products')
      .then(res => {
        console.log("✅ API DATA:", res.data); // 🔥 IMPORTANT
        setProducts(res.data);
      })
      .catch(err => {
        console.error("❌ Error fetching products:", err);
      });
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">

        {/* ✅ Show message if no products */}
        {products.length === 0 && (
          <h4 className="text-center">No products found</h4>
        )}

        {products.map(product => (
          <div className="col-md-3 mb-3" key={product.id}>
            <Product
              product={product}
              addToCart={addToCart}
              isLoggedIn={isLoggedIn}
            />
          </div>
        ))}

      </div>
    </div>
  );
}

export default ProductTab;