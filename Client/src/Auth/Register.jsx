import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import "../Auth.css";

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await axios.post(
  `${import.meta.env.VITE_API_BASE_URL}/auth/register`, // ✅ FIXED
      {
        name: form.name.trim(),
        email: form.email.trim(),
        password: form.password.trim()
      }
    );

    alert(res.data.message);
    navigate('/login');

  } catch (err) {
    console.log("❌ REGISTER ERROR:", err.response || err);

    alert(
      err.response?.data?.error ||
      err.message ||
      'Registration failed'
    );
  }

  setLoading(false);
};

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h3 className="auth-title">Register</h3>

        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            className="auth-input"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
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
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;