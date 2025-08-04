import React from "react";
import "./sidebar.css";

export default function SideBar({ isOpen, onClose }) {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="logo">
        <a href="#">PrimeElectro</a>
      </div>

      <div className="btn_two">
        <button onClick={onClose}>
        <i className="fas fa-times"></i>
        </button>
      </div>

      <div className="menu">
        <ul>
          <li><i className="fa-solid fa-image"></i><a href="#">Gallery</a></li>
          <li><i className="fa-solid fa-calendar-days"></i><a href="#">Events</a></li>
          <li><i className="fa-solid fa-store"></i><a href="#">Store</a></li>
          <li><i className="fa-solid fa-phone"></i><a href="#">Contact</a></li>
          <li><i className="fa-regular fa-comments"></i><a href="#">Feedback</a></li>
        </ul>
      </div>

      <div className="social_media">
        <ul>
          <a href="#"><i className="fa-brands fa-facebook"></i></a>
          <a href="#"><i className="fa-brands fa-twitter"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-youtube"></i></a>
        </ul>
      </div>
    </div>
  );
}
