// import { Link } from 'react-router-dom';
// import { useCart } from './CartContext.jsx';
// import { useAuth } from './Auth/AuthContext';
// import "./Navbar.css"
// import SideBar from './SideBar.jsx';
// import { useState } from 'react';
// function NavbarHome() {
//   const { cartItems } = useCart();
//   const { user, logout } = useAuth();
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const handleLogout = () => {
//     logout();
//     alert('Logged out');
//     window.location.href = '/login';
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container">
//         <button
//           className="btn_one"
//           style={{ background: "none", border: "none", color: "white", fontSize: "1.5rem" }}
//           onClick={() => setSidebarOpen(true)}
//         >
//           <i className="fa-solid fa-bars"></i>
//         </button>

//         {/* Sidebar, shown only when sidebarOpen is true */}
//         {sidebarOpen && (
//           <div style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             zIndex: 2000,
//             height: "100vh",
//             width: "300px",
//             background: "#222"
//           }}>
//             <SideBar />
//             <button
//               style={{
//                 position: "absolute",
//                 top: 10,
//                 right: 10,
//                 background: "none",
//                 border: "none",
//                 color: "white",
//                 fontSize: "2rem"
//               }}
//               onClick={() => setSidebarOpen(false)}
//             >
//               <i className="fa-solid fa-xmark"></i>
//             </button>
//           </div>
//         )}

//         <Link className="navbar-brand" to="/">PrimeElectro</Link>
//         <div className="collapse navbar-collapse justify-content-end">
//           <ul className="navbar-nav align-items-center">
//             <li className="nav-item mx-2">
//               <Link className="nav-link" to="/cart">
//                 🛒 Cart
//                 {cartItems.length > 0 && (
//                   <span className="badge bg-danger ms-1">{cartItems.length}</span>
//                 )}
//               </Link>
//             </li>

//             {user ? (
//               <>
//                 <li className="nav-item mx-2 text-white">
//                   👋 Welcome, <strong>{user.name}</strong>
//                 </li>
//                 <li className="nav-item mx-2">
//                   <button onClick={handleLogout} className="btn btn-warning">Logout</button>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li className="nav-item mx-2">
//                   <Link to="/login" className="btn btn-outline-light">Login</Link>
//                 </li>
//                 <li className="nav-item mx-2">
//                   <Link to="/register" className="btn btn-outline-light">Register</Link>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default NavbarHome;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext.jsx";
import { useAuth } from "./Auth/AuthContext";
import SideBar from "./SideBar.jsx";
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import "./Navbar.css";

function NavbarHome() {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    alert("Logged out");
    window.location.href = "/login";
  };

  return (
    <div className="main_box">
      <nav className="navbar navbar-expand-lg custom-navbar">

        {/* Hamburger Button */}
        <div className="btn_one ms-3" onClick={() => setSidebarOpen(true)}>
          <i className="fa-solid fa-bars"></i>
        </div>

        {/* Sidebar with animation */}
        <SideBar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <div className="container">
          <Link className="navbar-brand" to="/">
            PrimeElectro
          </Link>

          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/cart">
                  <ShoppingCartCheckoutOutlinedIcon style={{ verticalAlign: 'middle', marginRight: '4px' }} />
                  Cart
                  {cartItems.length > 0 && (
                    <span className="badge ms-1">{cartItems.length}</span>
                  )}
                </Link>
              </li>
              
              {user ? (
                <>
                  <li className="nav-item mx-2">
                    {/* Wrapped the text in the new styling pill */}
                    <span className="user-greeting">
                      👋 Welcome, <strong>{user.name}</strong>
                    </span>
                  </li>
                  <li className="nav-item mx-2">
                    <button onClick={handleLogout} className="nav-action-btn">Logout</button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to="/login" className="nav-glass-btn">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/register" className="nav-action-btn ms-2">Register</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarHome;