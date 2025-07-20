import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password: pass })
    });

    const data = await res.json();

    if (res.ok) {
      alert('Registration Successful');
      navigate('/login');
    } else {
      alert(data.error || 'Registration failed');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input className="form-control mb-2" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
        <input className="form-control mb-2" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input className="form-control mb-2" type="password" placeholder="Password" value={pass} onChange={e => setPass(e.target.value)} required />
        <button className="btn btn-success">Register</button>
      </form>
    </div>
  );
}

export default Register;
