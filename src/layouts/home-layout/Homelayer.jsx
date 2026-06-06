import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Homelayer() {
  const location = useLocation();

  // Dictionary mapping pathnames to page titles & breadcrumbs
  const titles = {
    "/": ["Dashboard", "Platform overview and quick actions"],
    "/organizations": ["Organizations", "Manage SACCO organizations"],
    "/branches": ["Regional Branches", "Manage branch configurations and operational vault balances"],
    "/admins": ["Admins & Users", "Manage organization administrators"],
    "/theme": ["Theme & Branding", "Customize app appearance"],
    "/products": ["Account Products", "Configure savings and deposit products"],
    "/loans": ["Loan Products", "Define loan types and terms"],
    "/preferences": ["Preferences", "Operational settings and integrations"],
  };

  // Safe fallback lookup if location pathname isn't an exact match
  const currentPath = titles[location.pathname] ? location.pathname : "/";
  const [headerTitle] = titles[currentPath];

  return (
    <div className="app">
      {/* Detached Sidebar Component */}
      <Sidebar />

      <div className="main">
        <div className="topbar">
          <div className="topbar-left">
            <div className="topbar-title">{headerTitle}</div>
            <div className="topbar-breadcrumb">SaccoBase / {headerTitle}</div>
          </div>
          <div className="topbar-actions">
            <button className="btn btn-ghost btn-sm">🔔</button>
            <button className="btn btn-ghost btn-sm">❓ Help</button>
            <button className="btn btn-primary btn-sm">+ New SACCO</button>
          </div>
        </div>

        <div className="content">
          {/* Children components configured in App.js will mount here */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}