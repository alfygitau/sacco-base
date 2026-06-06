import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "", agreeTerms: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.agreeTerms) return alert("Please authorize system parameter agreements.");
    // Commit new tenant creation logic here
    navigate("/login");
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-container" style={{ maxWidth: "460px" }}>
        <div className="auth-brand">
          <div className="logo-icon" style={{ margin: "0 auto 12px" }}>S</div>
          <h1 className="auth-title">Create Platform Account</h1>
          <p className="auth-subtitle">Initialize a multi-tenant corporate manager profile</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Full Administrative Name *</label>
            <input 
              type="text" 
              placeholder="e.g., Jane Doe" 
              required 
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Work Email Address *</label>
            <input 
              type="email" 
              placeholder="j.doe@sacco.co.ke" 
              required 
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Direct Telephone Connection</label>
            <input 
              type="tel" 
              placeholder="+254 700 000000" 
              value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Master Security Password *</label>
            <input 
              type="password" 
              placeholder="Minimum 8 characters" 
              required 
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
            />
          </div>

          <div className="toggle-row" style={{ padding: "4px 0", border: "none" }}>
            <span className="toggle-label" style={{ fontSize: 12, color: "var(--text3)", lineHeight: "1.4" }}>
              I agree to system provisions, multi-tenant security architecture rules & routing guidelines
            </span>
            <div 
              className={`toggle ${form.agreeTerms ? "on" : ""}`} 
              onClick={() => setForm({ ...form, agreeTerms: !form.agreeTerms })} 
            />
          </div>

          <button type="submit" className="btn btn-primary w100 mt16" style={{ justifyContent: "center", padding: "12px" }}>
            Initialize Administrative Profile
          </button>
        </form>

        <div className="auth-footer">
          Already managing an organization? <Link to="/login" className="auth-link">Login Here</Link>
        </div>
      </div>
    </div>
  );
}