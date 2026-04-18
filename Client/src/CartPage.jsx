import { useCart } from './CartContext.jsx';
import { useNavigate } from 'react-router-dom';

function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + Number(item.price) * (item.qty || 1), 0);

  return (
    <div className="container mt-5" style={{ paddingTop: '60px' }}>
      <h2 style={{
        background: 'linear-gradient(to right, #ffffff, #ffc107)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 800,
        marginBottom: '32px'
      }}>Your Cart</h2>

      {cartItems.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '80px 0' }}>
          <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🛒</div>
          <h4 style={{ color: '#8b949e' }}>Your cart is empty</h4>
          <button
            onClick={() => navigate('/products')}
            style={{
              marginTop: '20px',
              padding: '10px 28px',
              background: 'rgba(255,193,7,0.15)',
              border: '1px solid rgba(255,193,7,0.3)',
              borderRadius: '100px',
              color: '#ffc107',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            Browse Products
          </button>
        </div>
      ) : (
        <>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
            {cartItems.map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'rgba(13,17,23,0.9)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '16px',
                padding: '16px 20px',
                gap: '16px',
                flexWrap: 'wrap'
              }}>
                {/* Image + Title */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1 }}>
                  <img
                    style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '10px' }}
                    src={
                      item.imageurl?.startsWith('http')
                        ? item.imageurl
                        : `${import.meta.env.VITE_API_BASE_URL.replace('/api', '')}/uploads/${encodeURIComponent(item.imageurl)}`
                    }
                    alt={item.title}
                    onError={(e) => { e.target.onerror = null; e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64'%3E%3Crect width='64' height='64' fill='%23333'/%3E%3C/svg%3E"; }}
                  />
                  <span style={{ color: '#e6edf3', fontWeight: 600, fontSize: '0.95rem' }}>{item.title}</span>
                </div>

                {/* Quantity Controls */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button
                    onClick={() => updateQuantity(i, (item.qty || 1) - 1)}
                    style={{
                      width: '30px', height: '30px', borderRadius: '8px',
                      background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                      color: '#e6edf3', cursor: 'pointer', fontSize: '1rem'
                    }}
                  >−</button>
                  <span style={{ color: '#ffc107', fontWeight: 700, minWidth: '20px', textAlign: 'center' }}>
                    {item.qty || 1}
                  </span>
                  <button
                    onClick={() => updateQuantity(i, (item.qty || 1) + 1)}
                    style={{
                      width: '30px', height: '30px', borderRadius: '8px',
                      background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                      color: '#e6edf3', cursor: 'pointer', fontSize: '1rem'
                    }}
                  >+</button>
                </div>

                {/* Price */}
                <span style={{ color: '#ffc107', fontWeight: 800, fontSize: '1.05rem', minWidth: '100px', textAlign: 'right' }}>
                  ₹{(Number(item.price) * (item.qty || 1)).toFixed(2)}
                </span>

                {/* Remove */}
                <button
                  onClick={() => removeFromCart(i)}
                  style={{
                    background: 'rgba(255,51,102,0.08)', border: '1px solid rgba(255,51,102,0.2)',
                    borderRadius: '8px', color: '#ff3366', padding: '6px 14px',
                    cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Total + Buy */}
          <div style={{
            background: 'rgba(13,17,23,0.9)',
            border: '1px solid rgba(255,193,7,0.15)',
            borderRadius: '16px',
            padding: '20px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <h4 style={{ color: '#ffc107', fontWeight: 800, margin: 0 }}>
              Total: ₹{total.toFixed(2)}
            </h4>
            <button
              onClick={() => navigate('/checkout', { state: { total } })}
              style={{
                padding: '12px 32px',
                background: 'linear-gradient(135deg, #ffc107, #d39e00)',
                border: 'none', borderRadius: '100px',
                color: '#000', fontWeight: 700, fontSize: '1rem',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(255,193,7,0.3)'
              }}
            >
              Proceed to Checkout →
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;