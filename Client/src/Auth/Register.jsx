import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../Register.css"
import Button from '@mui/material/Button';

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post(
  `${import.meta.env.VITE_API_BASE_URL}/auth/login`,
  form
); // use form here
    alert(res.data.message);
    // Optionally redirect to login
    // navigate('/login');
  } catch (err) {
    alert(err.response?.data?.error || 'Registration failed');
  }
};

   return (
    <div className="register-container">
      {/* Left Form Section */}
      <div className="register-card">
        <h2 className="register-title">Register</h2>
        <form onSubmit={handleSubmit} className="register-form">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            value={form.name}
            placeholder="Enter your Name"
            onChange={handleChange}
            className="register-input"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            placeholder="Enter your Email"
            onChange={handleChange}
            className="register-input"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            value={form.password}
            placeholder="Password"
            onChange={handleChange}
            className="register-input"
            required
          />
          <button className='register-btn' type="submit">
            Register
          </button>
        </form>
      </div>

      {/* Right Image Section */}
      <div className="register-image">
        <img src="/images/register new.png" alt="Register Visual" />
      </div>
    </div>
  );
}

export default Register;
