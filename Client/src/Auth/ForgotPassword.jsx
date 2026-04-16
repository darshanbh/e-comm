import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [form, setForm] = useState({ email: "", newPassword: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/forgot-password", // ✅ direct URL
        form
      );

      alert(res.data.message);
      navigate("/login");

    } catch (err) {
      console.log("❌ ERROR:", err.response || err);
      alert(err.response?.data?.error || "Error resetting password");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h3>Forgot Password</h3>

        <form onSubmit={handleSubmit}>
          <input
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            required
          />

          <input
            name="newPassword"
            type="password"
            placeholder="Enter new password"
            onChange={handleChange}
            required
          />

          <button type="submit">Reset Password</button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;