import React from 'react';
import './product.css';

let btnstyles = {
    border:'none',
    borderRadius:'5px',
    width:'80px',
    backgroundColor:"#eef745ff",
    marginRight: "-5px",
    alignItems: "center",

}
let styles = {
    backgroundColor: "#46bbe2ff",
    height: "30px",
    width: "260px", // Make it match the container's width
    borderBottomLeftRadius: "15px",
    borderBottomRightRadius: "15px",
    marginTop: "auto", // Push it to the bottom inside flex column
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    fontSize: "16px",
    fontWeight: "bold",
    marginLeft: "-15px",
};

function Product({ product, addToCart }) {
  return (
    <div className="prod">
      <img
        src={`http://localhost:5000/uploads/${product.imageurl}`}
        alt={product.title}
        className="card-img-top"
        loading="lazy"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'https://via.placeholder.com/200';
        }}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body" >
        <h6 className="">{product.title}</h6>
        <p className="card-text">₹{product.price}</p>
        <button className="btn btn-warning" onClick={() => addToCart(product)} >Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;