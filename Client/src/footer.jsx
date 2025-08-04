// Footer.jsx
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg- text-white pt-4 pb-3 mt-5  pt-3 border-top mt-3">
      <div className="container">
        <div className="row">

          {/* Brand */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase fw-bold">PrimeElectro</h5>
            <p>Your one-stop shop for all electronics. Quality you can trust.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h6 className="text-uppercase">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li><Link to="/products" className="text-white text-decoration-none">Shop</Link></li>
              <li><Link to="/cart" className="text-white text-decoration-none">Cart</Link></li>
              <li><Link to="/login" className="text-white text-decoration-none">Login</Link></li>
              <li><Link to="/register" className="text-white text-decoration-none">Register</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-3">
            <h6 className="text-uppercase">Contact Us</h6>
            <p>Email: support@primeelectro.com</p>
            <p>Phone: +91 </p>
            <p>Location: Bengaluru, India</p>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="text-center pt-3 border-top mt-3">
          <small>&copy; {new Date().getFullYear()} PrimeElectro. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}
