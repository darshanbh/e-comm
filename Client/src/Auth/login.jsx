import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import "../Auth.css"; // Make sure to import the new CSS file!

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      {
        email: form.email.trim(),
        password: form.password.trim()
      }
    );

    const { token, user } = res.data;

    login(token, user); // ✅ now user is correct
    navigate('/');

  } catch (err) {
    alert(err.response?.data?.error || 'Login failed');
  }

  setLoading(false);
};
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h3 className="auth-title">Login</h3>

        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            className="auth-input"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />

          <input
            className="auth-input"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />

          <button className="auth-btn" type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <Link to="/forgot-password">Forgot Password?</Link>
        

        <p className="auth-footer">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}