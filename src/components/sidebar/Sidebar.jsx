import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { NAV_ITEMS } from "../../constants/navitems";

export default function Sidebar() {
  const navigate = useNavigate();
  const getPath = (id) => (id === "dashboard" ? "/" : `/${id}`);

  // Helper utility to keep layout rendering dry and clean
  const renderNavGroup = (categoryKey) => {
    return NAV_ITEMS.filter((item) => item.category === categoryKey).map(
      (item) => (
        <NavLink
          key={item.id}
          to={getPath(item.id)}
          className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          style={{ textDecoration: "none" }} // Clean underline safeguard
        >
          <span className="nav-icon">{item.icon}</span>
          <span>{item.label}</span>
          {item.id === "organizations" && <span className="nav-badge">12</span>}
        </NavLink>
      ),
    );
  };

  return (
    <aside className="sidebar">
      {/* Brand Platform Header */}
      <div onClick={() => navigate("/")} className="sidebar-logo">
        <div className="sidebar-logo-mark">
          <div className="logo-icon">S</div>
          <div>
            <div className="logo-text">SaccoBase</div>
            <div className="logo-sub">ONBOARDING PORTAL</div>
          </div>
        </div>
      </div>

      {/* Categorized Navigation Streams */}
      <nav className="nav" style={{ overflowY: "auto" }}>
        <div className="nav-section-label">Core Analytics</div>
        {renderNavGroup("analytics")}

        <div className="nav-section-label">Tenant Operations</div>
        {renderNavGroup("tenants")}

        <div className="nav-section-label">Ecosystem Config Rules</div>
        {renderNavGroup("settings")}
      </nav>

      {/* User Session Footer Card */}
      <div className="sidebar-footer">
        <div className="avatar">SA</div>
        <div className="avatar-info">
          <div className="avatar-name">Super Admin</div>
          <div className="avatar-role">Platform Manager</div>
        </div>
      </div>
    </aside>
  );
}
