import React from "react";
import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../../constants/navitems";

export default function Sidebar() {
  const getPath = (id) => (id === "dashboard" ? "/" : `/${id}`);

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="sidebar-logo-mark">
          <div className="logo-icon">S</div>
          <div>
            <div className="logo-text">SaccoBase</div>
            <div className="logo-sub">ONBOARDING PORTAL</div>
          </div>
        </div>
      </div>

      <nav className="nav">
        <div className="nav-section-label">Main</div>
        {NAV_ITEMS.slice(0, 1).map((item) => (
          <NavLink
            key={item.id}
            to={getPath(item.id)}
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          >
            <span className="nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}

        <div className="nav-section-label">Setup</div>
        {NAV_ITEMS.slice(1).map((item) => (
          <NavLink
            key={item.id}
            to={getPath(item.id)}
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          >
            <span className="nav-icon">{item.icon}</span>
            <span>{item.label}</span>
            {item.id === "organizations" && (
              <span className="nav-badge">5</span>
            )}
          </NavLink>
        ))}
      </nav>

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
