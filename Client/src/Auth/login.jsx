// import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from './AuthContext';

// export default function Login() {
//   const [form, setForm] = useState({ email: '', password: '' });
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/login', form);

//       // ✅ Use context to set login state
//       login(res.data.token, res.data.user.username);

//       alert('Login successful');
//       navigate('/');
//     } catch (err) {
//       alert(err.response?.data?.error || 'Login failed');
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           name="email"
//           type="email"
//           value={form.email}
//           onChange={handleChange}
//           placeholder="Email"
//           className="form-control mb-3"
//           required
//         />
//         <input
//           name="password"
//           type="password"
//           value={form.password}
//           onChange={handleChange}
//           placeholder="Password"
//           className="form-control mb-3"
//           required
//         />
//         <button type="submit" className="btn btn-primary">Login</button>
//       </form>
//     </div>
//   );
// }

import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import Button from '@mui/material/Button';
import "../Login.css";

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting login form", form);

    try {
      const res = await axios.post( `${import.meta.env.VITE_API_BASE_URL}/auth/login`,
  form);
      const { token, user } = res.data;

      login(token, user);
      alert('Login successful');
      navigate('/');
    } catch (err) {
      console.error("Login error:", err);
      alert(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h3 className="login-title">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your password"
              required
            />
          </div>

          <Button variant="contained" type="submit">
            Login
          </Button>        </form>
        <p className="login-footer">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
      {/* Image container */}
      <div className="login-image">
        <img src="/images/login_new-removebg-preview.png" alt="Login Visual" />
      </div>
    </div>
  );
}
