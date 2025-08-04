// Home.jsx
import { Link } from "react-router-dom";
import "./Home.css"; // Optional for custom styles
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import HighQualityIcon from '@mui/icons-material/HighQuality';
import SupportIcon from '@mui/icons-material/Support';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
   <div className="homepage">

  {/* ✅ Hero Section */}
  <section
    className="hero text-white d-flex align-items-center justify-content-center text-center"
    
  >
    <div>
      <h1 className="display-4 fw-bold">Welcome to PrimeElectro</h1>
      <p className="lead">Top deals on electronics and accessories</p>
      <Link to="/products" className="btn btn-warning btn-lg mt-3">
        Shop Now
      </Link>
    </div>
  </section>

  {/* ✅ Card Section - separate from Hero */}
  <section style={{ padding: '60px 15px' }}>
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        rowGap: '30px',
        columnGap: '20px',
      }}
    >
      {/* Card 1 */}
      <Card
        sx={{
          maxWidth: 345,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
          backgroundColor: '#98d1e1ff'
        }}
      >
        <CardMedia
          sx={{ height: 140 }}
          image="/images/headphonepremium.jpg"
          title="green iguana"
        />
        <CardContent sx={{ backgroundColor: '#f4eb3aff' }}>
          <Typography gutterBottom variant="h5" component="div">
            🎧 Premium Bluetooth Headphones
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            🔊 Crystal-clear sound, deep bass, and 🔋 30 hours of battery life. Perfect for work and 🎮 play.
          </Typography>
        </CardContent>
        <CardActions sx={{ marginTop: 'auto' }}>
          <Button size="small">Learn more</Button>
          <Button size="small">Details</Button>
        </CardActions>
      </Card>

      {/* Card 2 */}
      <Card
        sx={{
          maxWidth: 345,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
          backgroundColor: '#98d1e1ff'
        }}
      >
        <CardMedia
          sx={{ height: 140 }}
          image="/images/smartwatch.jpg"
          title="green iguana"
        />
        <CardContent sx={{ backgroundColor: '#eac23dff' }}>
          <Typography gutterBottom variant="h5" component="div">
            ⌚ Smart Fitness Watch
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Track your health, stay connected, and look stylish — all day long.
          </Typography>
        </CardContent>
        <CardActions sx={{ marginTop: 'auto' }}>
          <Button size="small">Learn more</Button>
          <Button size="small">Details</Button>
        </CardActions>
      </Card>
    </div>
  </section>

  {/* ✅ Why Choose Us Section */}
  <section className="why-choose-us" style={{ padding: '60px 0', backgroundColor: '#234661ff' }}>
    <div className="container text-center">
      <h2 className="section-title mb-4">Why Choose Us?</h2>
      <div className="row">
        <div className="col-12 col-md-4 mb-4">
          <DeliveryDiningIcon sx={{ fontSize: 50 }} />
          <h5 className="feature-title">Fast Delivery</h5>
        </div>
        <div className="col-12 col-md-4 mb-4">
          <HighQualityIcon sx={{ fontSize: 50 }} />
          <h5 className="feature-title">Top Quality</h5>
        </div>
        <div className="col-12 col-md-4 mb-4">
          <SupportIcon sx={{ fontSize: 50 }} />
          <h5 className="feature-title">24/7 Support</h5>
        </div>
      </div>
    </div>
  </section>

</div>

  );
}
