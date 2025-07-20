// // import React from 'react';
// // import { useLocation } from 'react-router-dom';

// // function Checkout() {
// //   const location = useLocation();
// //   const total = location.state?.total || 0;

// //   return (
// //     <div className="container mt-4 text-white">
// //       <h2>Checkout Page</h2>

// //       <h4>Total Amount: ₹{total.toFixed(2)}</h4>

// //       <div className="form-group">
// //         <label htmlFor="address">Delivery Address</label>
// //         <textarea
// //           id="address"
// //           className="form-control"
// //           rows="3"
// //           placeholder="Enter your delivery address"
// //         ></textarea>
// //       </div>

// //       <button className="btn btn-success mt-3">Place Order</button>
// //     </div>
// //   );
// // }

// // export default Checkout;

// import React, { useState } from 'react';
// import { useCart } from './CartContext';
// import jsPDF from 'jspdf';

// function Checkout() {
//   const { cartItems } = useCart();
//   const [address, setAddress] = useState('');

//   const total = cartItems.reduce((sum, item) => sum + Number(item.price), 0);

//   const generateInvoice = () => {
//     const doc = new jsPDF();

//     doc.setFontSize(16);
//     doc.text('Invoice', 20, 20);
//     doc.text('MegaStore', 20, 25);

//     doc.setFontSize(12);
//     doc.text(`Delivery Address: ${address}`, 20, 30);

//     let y = 50;
//     cartItems.forEach((item, index) => {
//       doc.text(
//         `${index + 1}. ${item.title} - ₹${Number(item.price).toFixed(2)}`,
//         20,
//         y
//       );
//       y += 10;
//     });

//     doc.text(`Total: ₹${total.toFixed(2)}`, 20, y + 10);

//     // Download
//     doc.save('invoice.pdf');
//   };

//   return (
//     <div className="container mt-4 text-white">
//       <h2>Checkout Page</h2>

//       <h4>Total Amount: ₹{total.toFixed(2)}</h4>

//       <div className="d-flex justify-content-center mt-5">
//         <div className="form-group" style={{ width: '50%' }}>
//           <label htmlFor="address">Delivery Address</label>
//           <textarea
//             id="address"
//             className="form-control"
//             rows="3"
//             placeholder="Enter your delivery address"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             style={{ backgroundColor: '#f8f9fa', color: '#000' }}
//           />
//         </div>
//       </div>


//       <button
//         className="btn btn-success mt-3"
//         onClick={generateInvoice}
//         disabled={!address}
//       >
//         Place Order & Download Invoice
//       </button>
//     </div>
//   );
// }

// export default Checkout;


import React, { useState } from 'react';
import { useCart } from './CartContext';
import jsPDF from 'jspdf';
import { useLocation } from 'react-router-dom';

function Checkout() {
  const { cartItems } = useCart();
  const location = useLocation();
  const [address, setAddress] = useState('');

  // Total from CartContext or passed state
  const passedTotal = location.state?.total;
  const total = passedTotal ?? cartItems.reduce((sum, item) => sum + Number(item.price), 0);

  const itemsToDisplay = cartItems;

  const generateInvoice = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text('Invoice', 20, 20);
    doc.text('MegaStore', 20, 25);

    doc.setFontSize(12);
    doc.text(`Delivery Address: ${address}`, 20, 30);

    let y = 50;
    itemsToDisplay.forEach((item, index) => {
      doc.text(
        `${index + 1}. ${item.title} - ₹${Number(item.price).toFixed(2)}`,
        20,
        y
      );
      y += 10;
    });

    doc.text(`Total: ₹${total.toFixed(2)}`, 20, y + 10);

    doc.save('invoice.pdf');
  };

  return (
    <div className="container mt-4 text-white">
      <h2>Checkout Page</h2>

      <h4>Total Amount: ₹{total.toFixed(2)}</h4>

      <div className="d-flex justify-content-center mt-5">
        <div className="form-group" style={{ width: '50%' }}>
          <label htmlFor="address">Delivery Address</label>
          <textarea
            id="address"
            className="form-control"
            rows="3"
            placeholder="Enter your delivery address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={{ backgroundColor: '#f8f9fa', color: '#000' }}
          />
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
