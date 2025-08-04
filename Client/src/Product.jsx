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
// import './producttab.css'; // import CSS for hover
import './product.css';
import HoverRating from './HoverRating';

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
        src={`http://localhost:5000/uploads/${product.imageurl}`}
        alt={product.title}
        className="product-image"
        loading="lazy"
        onError={(e) => {
          if (e.target.src !== 'https://via.placeholder.com/200') {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/200';
          }
        }}
      />
      <div className="product-body">
        {/* <HoverRating /> */}
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