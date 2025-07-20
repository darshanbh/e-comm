// import './App.css'
// // import Title from './Title.jsx' 
// // import { Product } from './Product.jsx'
// import ProductTab  from "./ProductTab.jsx";
// import NavbarHome from './Navbarhome.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// // import MsgBox from './MsgBox.jsx'
// // these imports are standarad and builtin import export LIke-->   give same as what you arer importing from file name 
// // and aslo you can change import Title from './Title.jsx'  like-->import Title can be given in --> 
// // import Title2 any thing but have to give same in were your imported that
// // These function with all details like h1 and all 
// // button are called as Compenent

// // function Description(){
// //   return <h3> And iam web developer</h3>
// // }
// function App() {

//   return (
//     <div>
//       <NavbarHome />
//     {/* <Title />
//     <Description/>
//     <Title/>
//     <Description/>
//     <h2>Hello Darshu</h2> */}
//     {/* <MsgBox userName="Darshan" txtcolor="lightgreen"/> */}
//       <h2 style={{ marginTop: '30px' ,color:'white'}}>Welcome to MegaBlockbuster Deals | Shop Right Now</h2>
//       <ProductTab />
//     </div> 
//   )
// }

// export default App;
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarHome from './NavbarHome.jsx';
import ProductTab from './ProductTab.jsx';
import CartPage from './CartPage.jsx';
import Checkout from './Checkout.jsx';
import Login from './Auth/Login.jsx';
import Register from './Auth/Register.jsx';
import { CartProvider } from './CartContext.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <CartProvider>
      <Router>
        <NavbarHome />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<ProductTab />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;




