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
              <li key={i} className="list-group-item d-flex justify-content-between">
                <span>{item.title}</span>
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
