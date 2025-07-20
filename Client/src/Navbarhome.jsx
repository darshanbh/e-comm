import { Link } from 'react-router-dom';
import { useCart } from './CartContext.jsx';

function NavbarHome() {
  const { cartItems } = useCart();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    alert("Logged out!");
    window.location.href = '/login';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">PrimeElectro</Link>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/cart">
                🛒 Cart
                {cartItems.length > 0 && (
                  <span className="badge bg-danger ms-1">{cartItems.length}</span>
                )}
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/login" className="btn btn-outline-light">Login</Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/register" className="btn btn-outline-light">Register</Link>
            </li>
            <li className="nav-item mx-2">
              <button onClick={handleLogout} className="btn btn-warning">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarHome;