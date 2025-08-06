
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
     console.log("API BASE URL:", import.meta.env.VITE_API_BASE_URL); 
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting login form", form);

    try {
      const res = await axios.post(
  `${import.meta.env.VITE_API_BASE_URL}/auth/login`,
  form
);
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
          Don't have an account click here? <a href="/register">Register</a>
        </p>
      </div>
      {/* Image container */}
      <div className="login-image">
        <img src="/images/login_new-removebg-preview.png" alt="Login Visual" />
      </div>
    </div>
  );
}
