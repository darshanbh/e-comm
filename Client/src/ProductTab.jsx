// import React, { useEffect, useState } from 'react';
// import Product from './Product';
// import { useCart } from './CartContext.jsx';
// import './producttab.css';
// import api from '../api';

// function ProductTab({ isLoggedIn }) {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { addToCart } = useCart();

//   useEffect(() => {
//     api.get('/products')
//       .then(res => {
//         console.log("Products:", res.data); 
//         setProducts(res.data);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error("Error fetching products:", err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <div className="container mt-4">
//         <div className="row">
//           {[...Array(8)].map((_, i) => (
//             <div className="col-md-3 mb-3" key={i}>
//               <div style={{
//                 height: '280px',
//                 background: 'linear-gradient(90deg, #1a1a2e 25%, #16213e 50%, #1a1a2e 75%)',
//                 backgroundSize: '200% 100%',
//                 animation: 'shimmer 1.5s infinite',
//                 borderRadius: '12px'
//               }} />
//             </div>
//           ))}
//         </div>
//         <style>{`
//           @keyframes shimmer {
//             0% { background-position: 200% 0; }
//             100% { background-position: -200% 0; }
//           }
//         `}</style>
//       </div>
//     );
//   }

//   return (
//     <div className="container mt-4">
//       <div className="row">
//         {products.length === 0 && (
//           <h4 className="text-center">No products found</h4>
//         )}
//         {products.map(product => (
//           <div className="col-md-3 mb-3" key={product.id}>
//             <Product
//               product={product}
//               addToCart={addToCart}
//               isLoggedIn={isLoggedIn}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductTab;

import React, { useEffect, useState } from 'react';
import Product from './Product';
import { useCart } from './CartContext.jsx';
import './producttab.css';
import api from '../api';

// ─── Static Products (hardcoded, no DB) ───
const staticProducts = {
  Mobiles: [
    { id: 's1', title: 'Samsung Galaxy S24', price: '79999.00', imageurl: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&q=80', category: 'Mobiles' },
    { id: 's2', title: 'iPhone 15 Pro', price: '134900.00', imageurl: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80', category: 'Mobiles' },
    { id: 's3', title: 'OnePlus 12R', price: '39999.00', imageurl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80', category: 'Mobiles' },
    { id: 's4', title: 'Redmi Note 13 Pro', price: '24999.00', imageurl: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&q=80', category: 'Mobiles' },
  ],
  Laptops: [
    { id: 's5', title: 'MacBook Air M2', price: '114900.00', imageurl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80', category: 'Laptops' },
    { id: 's6', title: 'Dell XPS 15', price: '159900.00', imageurl: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=80', category: 'Laptops' },
    { id: 's7', title: 'HP Pavilion 15', price: '62990.00', imageurl: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&q=80', category: 'Laptops' },
    { id: 's8', title: 'Lenovo IdeaPad Slim 5', price: '54990.00', imageurl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80', category: 'Laptops' },
  ],
  Headphones: [
    { id: 's9', title: 'Sony WH-1000XM5', price: '29990.00', imageurl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80', category: 'Headphones' },
    { id: 's10', title: 'Bose QuietComfort 45', price: '32900.00', imageurl: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&q=80', category: 'Headphones' },
    { id: 's11', title: 'Boat Rockerz 550', price: '1799.00', imageurl: 'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=400&q=80', category: 'Headphones' },
    { id: 's12', title: 'JBL Tune 770NC', price: '7999.00', imageurl: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&q=80', category: 'Headphones' },
  ],
  Smartwatches: [
    { id: 's13', title: 'Apple Watch Series 9', price: '41900.00', imageurl: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&q=80', category: 'Smartwatches' },
    { id: 's14', title: 'Samsung Galaxy Watch 6', price: '26999.00', imageurl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80', category: 'Smartwatches' },
    { id: 's15', title: 'Noise ColorFit Pro 4', price: '2999.00', imageurl: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&q=80', category: 'Smartwatches' },
    { id: 's16', title: 'Amazfit GTR 4', price: '14999.00', imageurl: 'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&q=80', category: 'Smartwatches' },
  ],
  Accessories: [
    { id: 's17', title: 'Logitech MX Keys', price: '8995.00', imageurl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80', category: 'Accessories' },
    { id: 's18', title: 'Anker 65W Charger', price: '2499.00', imageurl: 'https://images.unsplash.com/photo-1601524909162-ae8725290836?w=400&q=80', category: 'Accessories' },
    { id: 's19', title: 'Samsung 25W Fast Charger', price: '1299.00', imageurl: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80', category: 'Accessories' },
    { id: 's20', title: 'Portronics Mouse Toad 23', price: '799.00', imageurl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80', category: 'Accessories' },
  ],
};

const categories = ['All', 'Mobiles', 'Laptops', 'Headphones', 'Smartwatches', 'Accessories'];

function ProductTab({ isLoggedIn }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const { addToCart } = useCart();

  useEffect(() => {
    api.get('/products')
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="container mt-4">
        <div className="row">
          {[...Array(8)].map((_, i) => (
            <div className="col-md-3 mb-3" key={i}>
              <div style={{
                height: '280px',
                background: 'linear-gradient(90deg, #1a1a2e 25%, #16213e 50%, #1a1a2e 75%)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 1.5s infinite',
                borderRadius: '12px'
              }} />
            </div>
          ))}
        </div>
        <style>{`@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }`}</style>
      </div>
    );
  }

  return (
    <div className="container mt-4">

      {/* ─── Category Filter Bar ─── */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        marginBottom: '32px',
        justifyContent: 'center'
      }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: '8px 20px',
              borderRadius: '100px',
              border: activeCategory === cat ? '1px solid #ffc107' : '1px solid rgba(255,255,255,0.1)',
              background: activeCategory === cat ? 'rgba(255,193,7,0.15)' : 'rgba(255,255,255,0.04)',
              color: activeCategory === cat ? '#ffc107' : '#8b949e',
              fontWeight: activeCategory === cat ? '700' : '500',
              fontSize: '0.9rem',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ─── DB Products (All / no category filter) ─── */}
      {activeCategory === 'All' && (
        <>
          <h5 style={{ color: '#ffc107', fontWeight: 700, marginBottom: '16px', letterSpacing: '1px' }}>
            🛒 Featured Products
          </h5>
          <div className="row mb-5">
            {products.map(product => (
              <div className="col-md-3 mb-3" key={product.id}>
                <Product product={product} addToCart={addToCart} isLoggedIn={isLoggedIn} />
              </div>
            ))}
          </div>
        </>
      )}

      {/* ─── Static Category Sections ─── */}
      {activeCategory === 'All'
        ? Object.entries(staticProducts).map(([category, items]) => (
            <div key={category} className="mb-5">
              <h5 style={{ color: '#ffc107', fontWeight: 700, marginBottom: '16px', letterSpacing: '1px' }}>
                {category === 'Mobiles' && '📱'}
                {category === 'Laptops' && '💻'}
                {category === 'Headphones' && '🎧'}
                {category === 'Smartwatches' && '⌚'}
                {category === 'Accessories' && '🔌'}
                {' '}{category}
              </h5>
              <div className="row">
                {items.map(product => (
                  <div className="col-md-3 mb-3" key={product.id}>
                    <Product product={product} addToCart={addToCart} isLoggedIn={isLoggedIn} />
                  </div>
                ))}
              </div>
            </div>
          ))
        : (
          <div>
            <h5 style={{ color: '#ffc107', fontWeight: 700, marginBottom: '16px', letterSpacing: '1px' }}>
              {activeCategory}
            </h5>
            <div className="row">
              {staticProducts[activeCategory]?.map(product => (
                <div className="col-md-3 mb-3" key={product.id}>
                  <Product product={product} addToCart={addToCart} isLoggedIn={isLoggedIn} />
                </div>
              ))}
            </div>
          </div>
        )
      }
    </div>
  );
}

export default ProductTab;