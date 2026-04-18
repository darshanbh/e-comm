// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// // import './producttab.css'; // import CSS for hover
// import './product.css';

// function Product({ product, addToCart, isLoggedIn }) {
//   const navigate = useNavigate();

//   const handleAddToCart = () => {
//     if (!isLoggedIn) {
//       alert("Please log in to add items to cart.");
//       navigate('/login');
//       return;
//     }
//     addToCart(product);
//   };

//   return (
//     <div className="prod">
//       <img
//         src={`http://localhost:5000/uploads/${product.imageurl}`}
//         alt={product.title}
//         className="product-image"
//         loading="lazy"
//         onError={(e) => {
//           if (e.target.src !== 'https://via.placeholder.com/200') {
//             e.target.onerror = null;
//             e.target.src = 'https://via.placeholder.com/200';
//           }
//         }}
//       />
//       <div className="product-body">
//         <div>
//           <h6 className="product-title">{product.title}</h6>
//           <p className="product-price">₹{product.price}</p>
//         </div>
//         <button className="add-btn" onClick={handleAddToCart}>
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Product;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './product.css';

function Product({ product, addToCart, isLoggedIn }) {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      alert("Please log in to add items to cart.");
      navigate('/login');
      return;
    }
    addToCart(product);
  };

  return (
    <div className="prod">
      <img
        src={
          product.imageurl?.startsWith('http')
            ? product.imageurl
            : `${import.meta.env.VITE_API_BASE_URL.replace('/api', '')}/uploads/${encodeURIComponent(product.imageurl)}`
        }
        alt={product.title}
        className="product-image"
        loading="lazy"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect width='200' height='200' fill='%23333'/%3E%3Ctext x='50%25' y='50%25' fill='%23888' text-anchor='middle' dy='.3em'%3ENo Image%3C/text%3E%3C/svg%3E";
        }}
      />


      <div className="product-body">
        <div>
          <h6 className="product-title">{product.title}</h6>
          <p className="product-price">₹{product.price}</p>
        </div>

        <button className="add-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;