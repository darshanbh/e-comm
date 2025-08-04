

import React, { useState } from 'react';
import { useCart } from './CartContext';
import jsPDF from 'jspdf';
import { useLocation } from 'react-router-dom';
import { useAuth } from './Auth/AuthContext'; // ✅ Import AuthContext

function Checkout() {
  const { cartItems } = useCart();
  const { user } = useAuth(); // ✅ Get the logged-in user
  const location = useLocation();
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');


  const passedTotal = location.state?.total;
  const total = passedTotal ?? cartItems.reduce((sum, item) => sum + Number(item.price), 0);
  const itemsToDisplay = cartItems;

  const generateInvoice = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text('Invoice', 20, 20);
    doc.text('primeElectro', 20, 25);

    doc.setFontSize(12);
    if (user?.username) {
      doc.text(`Customer: ${user.username}`, 20, 35); // ✅ Add username to invoice
    }
    doc.text(`Delivery Address: ${address}`, 20, 45);

    let y = 60;
    itemsToDisplay.forEach((item, index) => {
      doc.text(`${index + 1}. ${item.title} - ₹${Number(item.price).toFixed(2)}`, 20, y);
      y += 10;
    });

    doc.text(`Total: ₹${total.toFixed(2)}`, 20, y + 10);
     doc.text(`Mobile: ${mobile}`, 20, 40);

    doc.save('invoice.pdf');
  };

  return (
    <div className="container mt-4 text-white">
      <h2>Checkout Page</h2>

      {user?.username && (
        <h5 className="text-success">Logged in as: {user.username}</h5> // ✅ Show on screen
      )}

      <h4>Total Amount: ₹{total.toFixed(2)}</h4>

      <div className="d-flex justify-content-center mt-5">
        <div className="form-group" style={{ width: '50%' }}>
          <label htmlFor="address">Shipping Address</label>
          <textarea
            id="address"
            className="form-control"
            rows="3"
            placeholder="Enter your delivery address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={{ backgroundColor: '#f8f9fa', color: '#000' }}
          />
          <label htmlFor="mobile number">Enter Active Mobile number:</label>
          <br />
          <input type="number" id='mobile' placeholder="Ex: 8885557878" className="form-control mt-2"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          style={{backgroundColor:'#f8f9fa', color: '#000'}}/>
        </div>
      </div>

      <button
        className="btn btn-success mt-3"
        onClick={generateInvoice}
        disabled={!address}
      >
        Place Order & Download Invoice
      </button>
    </div>
  );
}

export default Checkout;

