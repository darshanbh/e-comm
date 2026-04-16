// Footer.jsx
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="custom-footer text-white pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          {/* Brand */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold text-warning mb-3">PrimeElectro</h5>
            <p style={{ color: '#8b949e' }}>Your one-stop shop for all electronics. Quality you can trust.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h6 className="text-uppercase mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/products" className="footer-link">Shop</Link></li>
              <li><Link to="/cart" className="footer-link">Cart</Link></li>
              <li><Link to="/login" className="footer-link">Login</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h6 className="text-uppercase mb-3">Contact Us</h6>
            <p className="mb-2" style={{ color: '#8b949e' }}>Email: support@primeelectro.com</p>
            <p className="mb-2" style={{ color: '#8b949e' }}>Location: Bengaluru, India</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center pt-4 border-top mt-2" style={{ borderColor: 'rgba(255,255,255,0.1) !important' }}>
          <small style={{ color: '#8b949e' }}>&copy; {new Date().getFullYear()} PrimeElectro. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}