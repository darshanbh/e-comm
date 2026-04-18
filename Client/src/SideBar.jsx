import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function SideBar({ isOpen, onClose }) {
  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? "open" : ""}`} onClick={onClose} />

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        
        {/* Header */}
        <div className="sidebar-header">
          <span className="sidebar-brand">PrimeElectro</span>
          <button className="sidebar-close-btn" onClick={onClose}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Nav Links */}
        <div className="sidebar-section-label">Navigation</div>
        <nav className="sidebar-nav">
          <Link to="/" className="sidebar-link" onClick={onClose}>
            <span className="sidebar-link-icon">🏠</span> Home
          </Link>
          <Link to="/cart" className="sidebar-link" onClick={onClose}>
            <span className="sidebar-link-icon">🛒</span> Cart
          </Link>
          <a href="#" className="sidebar-link">
            <span className="sidebar-link-icon">🖼️</span> Gallery
          </a>
          <a href="#" className="sidebar-link">
            <span className="sidebar-link-icon">📅</span> Events
          </a>
          <a href="#" className="sidebar-link">
            <span className="sidebar-link-icon">🏪</span> Store
          </a>
          <a href="#" className="sidebar-link">
            <span className="sidebar-link-icon">📞</span> Contact
          </a>
          <a href="#" className="sidebar-link">
            <span className="sidebar-link-icon">💬</span> Feedback
          </a>
        </nav>

        <div className="sidebar-divider" />

        {/* Social Media */}
        <div className="sidebar-section-label">Follow Us</div>
        <div style={{ display: 'flex', gap: '12px', padding: '8px 24px 16px' }}>
          <a href="#" style={{ color: '#8b949e', fontSize: '1.2rem' }}><i className="fa-brands fa-facebook"></i></a>
          <a href="#" style={{ color: '#8b949e', fontSize: '1.2rem' }}><i className="fa-brands fa-twitter"></i></a>
          <a href="#" style={{ color: '#8b949e', fontSize: '1.2rem' }}><i className="fa-brands fa-instagram"></i></a>
          <a href="#" style={{ color: '#8b949e', fontSize: '1.2rem' }}><i className="fa-brands fa-youtube"></i></a>
        </div>

        <div className="sidebar-bg-decoration" />
      </div>
    </>
  );
}