import { useCart } from './CartContext.jsx';
import { useNavigate } from 'react-router-dom';
import Checkout from './Checkout.jsx';

function CartPage() {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  console.log("Cart Items:", cartItems);


  // Ensure price is treated as a number
  const total = cartItems.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <div>
      <h2 className="text-white">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-white">Cart is empty.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
  {cartItems.map((item, i) => (
    <li
      key={i}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <div className="d-flex align-items-center">
        <img
          style={{
            width: "60px",
            height: "60px",
            objectFit: "cover",
            borderRadius: "8px",
            marginRight: "10px",
            display: "block",
          }}
          src={`http://localhost:5000/uploads/${item.imageurl}`}
          alt={item.title}
          loading="lazy"
          onError={(e) => {
            if (e.target.src !== "https://via.placeholder.com/60") {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/60";
            }
          }}
        />
        <span className="ms-2">{item.title}</span>
      </div>
      <span>₹{Number(item.price).toFixed(2)}</span>
    </li>
  ))}
</ul>

          <h4 className="text-white">Total: ₹{total.toFixed(2)}</h4>
          <button
            className="btn btn-success"
            onClick={() => navigate('/checkout', { state: { total } })}
          >
            Buy Now
          </button>
        </>
      )}
    </div>
  );
}

export default CartPage;
