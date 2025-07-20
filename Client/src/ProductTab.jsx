import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Product';
import { useCart } from './CartContext.jsx';

let styles={
    backgroundColor: "#57aeef",
    height: "30px",
    width: "100%",
    borderBottomLeftRadius: "15px",
    borderBottomRightRadius: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",

    fontSize: "14px",
    fontWeight: "bold",

}

function ProductTab() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {products.map(product => (
          <div className="col-md-3" key={product.id}>
            <Product product={product}  addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductTab;