// // Home.jsx
// import { Link } from "react-router-dom";
// import "./Home.css"; 
// import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
// import HighQualityIcon from '@mui/icons-material/HighQuality';
// import SupportIcon from '@mui/icons-material/Support';
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// export default function Home() {
//   return (
//     <div className="homepage">
//       {/* ✅ Hero Section */}
//       <section className="hero">
//         <div className="hero-content text-center p-4">
//           <h1 className="display-4 fw-bold text-warning mb-3">
//             PrimeElectro
//           </h1>
//           <p className="lead text-white mb-4">
//             Smart Tech. Smart Life.
//           </p>
//           <Link to="/products" className="btn btn-warning btn-shop btn-lg">
//             Shop Now
//           </Link>
//         </div>
//       </section>

//       {/* ✅ Card Section */}
//       <section style={{ padding: '80px 15px' }}>
//         <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
          
//           {/* Card 1 */}
//           <Card className="product-card" sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', height: '100%' }}>
//             <CardMedia
//               sx={{ height: 200 }}
//               image="/images/headphonepremium.jpg"
//               title="Headphones"
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 🎧 Premium Headphones
//               </Typography>
//               <Typography variant="body2">
//                 🔊 Crystal-clear sound, deep bass, and 🔋 30 hours of battery life. Perfect for work and 🎮 play.
//               </Typography>
//             </CardContent>
//             <CardActions sx={{ marginTop: 'auto', padding: '16px' }}>
//               <Button size="small" color="warning" variant="outlined">Learn more</Button>
//             </CardActions>
//           </Card>

//           {/* Card 2 */}
//           <Card className="product-card" sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', height: '100%' }}>
//             <CardMedia
//               sx={{ height: 200 }}
//               image="/images/smartwatch.jpg"
//               title="Smartwatch"
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 ⌚ Smart Fitness Watch
//               </Typography>
//               <Typography variant="body2">
//                 Track your health, stay connected, and look stylish — all day long.
//               </Typography>
//             </CardContent>
//             <CardActions sx={{ marginTop: 'auto', padding: '16px' }}>
//               <Button size="small" color="warning" variant="outlined">Learn more</Button>
//             </CardActions>
//           </Card>

//         </div>
//       </section>

//       {/* ✅ Why Choose Us Section */}
//       <section className="why-choose-us" style={{ padding: '80px 0' }}>
//         <div className="container text-center">
//           <h2 className="section-title text-white mb-5 fw-bold">Why Choose Us?</h2>
//           <div className="row">
//             <div className="col-12 col-md-4 mb-4 feature-box">
//               <div className="feature-icon-wrapper">
//                 <DeliveryDiningIcon sx={{ fontSize: 45 }} />
//               </div>
//               <h5 className="feature-title">Fast Delivery</h5>
//             </div>
//             <div className="col-12 col-md-4 mb-4 feature-box">
//               <div className="feature-icon-wrapper">
//                 <HighQualityIcon sx={{ fontSize: 45 }} />
//               </div>
//               <h5 className="feature-title">Top Quality</h5>
//             </div>
//             <div className="col-12 col-md-4 mb-4 feature-box">
//               <div className="feature-icon-wrapper">
//                 <SupportIcon sx={{ fontSize: 45 }} />
//               </div>
//               <h5 className="feature-title">24/7 Support</h5>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
import React from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import "./Home.css"; 

// MUI Icons
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import HighQualityIcon from '@mui/icons-material/HighQuality';
import SupportIcon from '@mui/icons-material/Support';

// MUI Components
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Home() {
  // --- Animation Variants for Framer Motion ---
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="homepage">
      
      {/* ✅ Hero Section */}
     {/* ✅ Upgraded E-Commerce Hero Section */}
      <section className="hero">
        <div className="container hero-container h-100">
          <div className="row align-items-center h-100" style={{ minHeight: '85vh' }}>
            
            {/* Left Column: Text & Call to Actions */}
            <motion.div 
              className="col-lg-6 text-start position-relative z-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="badge text-dark mb-4 px-3 py-2 rounded-pill fw-bold" style={{ backgroundColor: '#ffc107', letterSpacing: '1px' }}>
                🚀 NEW ARRIVAL: CYBER SERIES
              </div>
              <h1 className="display-3 fw-bolder text-white mb-3 hero-title" style={{ lineHeight: '1.2' }}>
                Next-Gen <span className="text-warning">Tech</span> <br/> For Your Life.
              </h1>
              <p className="lead mb-5" style={{ maxWidth: '500px', color: '#8b949e', fontSize: '1.2rem' }}>
                Discover premium electronics, smart gadgets, and cutting-edge accessories designed to elevate your everyday experience.
              </p>
              
              <div className="d-flex flex-wrap gap-3">
                <Link to="/products" className="btn btn-warning btn-shop btn-lg fw-bold px-5 rounded-pill">
                  Shop Now
                </Link>
                <Link to="/products" className="btn btn-outline-light btn-lg fw-bold px-4 rounded-pill glass-btn">
                  View Deals
                </Link>
              </div>

              {/* Trust Indicators / Stats */}
              <div className="mt-5 d-flex align-items-center gap-4 text-light">
                <div>
                  <h3 className="mb-0 text-warning fw-bold">10k+</h3>
                  <small style={{ color: '#8b949e' }}>Happy Customers</small>
                </div>
                <div style={{ width: '2px', height: '40px', background: 'rgba(255,255,255,0.1)' }}></div>
                <div>
                  <h3 className="mb-0 text-warning fw-bold">24hr</h3>
                  <small style={{ color: '#8b949e' }}>Express Delivery</small>
                </div>
                <div style={{ width: '2px', height: '40px', background: 'rgba(255,255,255,0.1)' }}></div>
                <div>
                  <h3 className="mb-0 text-warning fw-bold">4.9/5</h3>
                  <small style={{ color: '#8b949e' }}>Top Ratings</small>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Floating Product Image */}
            <motion.div 
              className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center position-relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              {/* Glowing Orb Behind the Image */}
              <div className="hero-glow-blob"></div>

              {/* Floating Image Animation */}
              <motion.img 
                src="/images/headphonepremium.jpg" // Try to use a transparent PNG here if you have one!
                alt="Premium Gadgets" 
                className="img-fluid drop-shadow-3d position-relative z-2"
                style={{ borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)', maxWidth: '85%' }}
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ✅ Main Content Section (Banner + Cards) */}
      <section style={{ padding: '80px 15px' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* ✅ Guaranteed-to-load CSS Animated Banner (Fixes the White Space) */}
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} 
            style={{ 
              width: '100%', 
              height: '350px',
              marginBottom: '60px', 
              borderRadius: '16px', 
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
              border: '1px solid rgba(255, 193, 7, 0.3)',
              background: 'linear-gradient(135deg, #161b22 0%, #0d1117 100%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            {/* Glowing Text */}
            <div style={{ textAlign: 'center', zIndex: 2, padding: '20px' }}>
              <motion.h2 
                style={{ color: '#ffc107', fontSize: '3rem', fontWeight: 'bold', textShadow: '0 0 20px rgba(255,193,7,0.5)', margin: 0 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                Experience The Future
              </motion.h2>
              <p style={{ color: '#e6edf3', fontSize: '1.2rem', marginTop: '10px' }}>
                Discover our latest collection of premium, next-gen gadgets.
              </p>
            </div>

            {/* Ambient Background Glow */}
            <motion.div 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '80%',
                height: '80%',
                background: 'radial-gradient(circle, rgba(255,193,7,0.15) 0%, transparent 60%)',
                transform: 'translate(-50%, -50%)',
                zIndex: 1,
                pointerEvents: 'none'
              }}
            />
          </motion.div>

          {/* ✅ Animated Product Cards */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}
          >
            
            {/* Card 1 */}
            <motion.div variants={fadeUp}>
              <Card className="product-card" sx={{ width: 345, display: 'flex', flexDirection: 'column', height: '100%', background: 'transparent' }}>
                <CardMedia
                  sx={{ height: 200 }}
                  image="/images/headphonepremium.jpg"
                  title="Headphones"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    🎧 Premium Headphones
                  </Typography>
                  <Typography variant="body2">
                    🔊 Crystal-clear sound, deep bass, and 🔋 30 hours of battery life. Perfect for work and 🎮 play.
                  </Typography>
                </CardContent>
                <CardActions sx={{ marginTop: 'auto', padding: '16px' }}>
                  <Button size="small" color="warning" variant="outlined">Learn more</Button>
                </CardActions>
              </Card>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={fadeUp}>
              <Card className="product-card" sx={{ width: 345, display: 'flex', flexDirection: 'column', height: '100%', background: 'transparent' }}>
                <CardMedia
                  sx={{ height: 200 }}
                  image="/images/smartwatch.jpg"
                  title="Smartwatch"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    ⌚ Smart Fitness Watch
                  </Typography>
                  <Typography variant="body2">
                    Track your health, stay connected, and look stylish — all day long.
                  </Typography>
                </CardContent>
                <CardActions sx={{ marginTop: 'auto', padding: '16px' }}>
                  <Button size="small" color="warning" variant="outlined">Learn more</Button>
                </CardActions>
              </Card>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ✅ Animated Why Choose Us Section */}
      <section className="why-choose-us" style={{ padding: '80px 0' }}>
        <div className="container text-center">
          <motion.h2 
            className="section-title text-white mb-5 fw-bold"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Why Choose Us?
          </motion.h2>

          <motion.div 
            className="row"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="col-12 col-md-4 mb-4 feature-box" variants={fadeUp}>
              <div className="feature-icon-wrapper">
                <DeliveryDiningIcon sx={{ fontSize: 45 }} />
              </div>
              <h5 className="feature-title">Fast Delivery</h5>
            </motion.div>

            <motion.div className="col-12 col-md-4 mb-4 feature-box" variants={fadeUp}>
              <div className="feature-icon-wrapper">
                <HighQualityIcon sx={{ fontSize: 45 }} />
              </div>
              <h5 className="feature-title">Top Quality</h5>
            </motion.div>

            <motion.div className="col-12 col-md-4 mb-4 feature-box" variants={fadeUp}>
              <div className="feature-icon-wrapper">
                <SupportIcon sx={{ fontSize: 45 }} />
              </div>
              <h5 className="feature-title">24/7 Support</h5>
            </motion.div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}