import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "", rememberMe: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform authentication checks here
    // On success, redirect to the core system dashboard
    navigate("/");
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <div className="auth-brand">
          <div className="logo-icon" style={{ margin: "0 auto 12px" }}>S</div>
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Access your SaccoBase provisioning control deck</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Secure Corporate Email</label>
            <input 
              type="email" 
              placeholder="name@sacco.co.ke" 
              required 
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div className="form-group">
            <div className="flex justify-between items-center">
              <label>Password</label>
              <a href="#forgot" className="auth-link-sm">Forgot?</a>
            </div>
            <input 
              type="password" 
              placeholder="••••••••" 
              required 
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
            />
          </div>

          <div className="toggle-row" style={{ padding: "4px 0", border: "none" }}>
            <span className="toggle-label" style={{ fontSize: 13, color: "var(--text2)" }}>Keep me logged in</span>
            <div 
              className={`toggle ${form.rememberMe ? "on" : ""}`} 
              onClick={() => setForm({ ...form, rememberMe: !form.rememberMe })} 
            />
          </div>

          <button type="submit" className="btn btn-primary w100 mt16" style={{ justifyContent: "center", padding: "12px" }}>
            Authenticate Core Session →
          </button>
        </form>

        <div className="auth-footer">
          Don't have a platform tenant? <Link to="/register" className="auth-link">Register Organization</Link>
        </div>
      </div>
    </div>
  );
}