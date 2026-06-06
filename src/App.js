import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

// Layout Wrapper
import Homelayer from "./layouts/home-layout/Homelayer";

// View Pages
import DashboardView from "./pages/home/Dashboard";
import OrganizationsView from "./pages/organizations/Organization";
import BranchesView from "./pages/branches/Branches";
import AdminsView from "./pages/users/Users";
import ThemeView from "./pages/themes/Theme";
import ProductsView from "./pages/sacco-products/SaccoProducts";
import LoansView from "./pages/loan-products/LoanProducts";
import PreferencesView from "./pages/preferences/Preference";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Standalone Non-Dashboard Auth Interface Endpoints */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Parent Layout Component containing Sidebar + Topbar wrapper shell */}
        <Route path="/" element={<Homelayer />}>
          {/* Index Route (maps directly to standard URL entry path "/") */}
          <Route index element={<DashboardView />} />

          {/* Sub-Feature Application Content Views rendered inside <Outlet /> */}
          <Route path="organizations" element={<OrganizationsView />} />
          <Route path="branches" element={<BranchesView />} />
          <Route path="admins" element={<AdminsView />} />
          <Route path="theme" element={<ThemeView />} />
          <Route path="products" element={<ProductsView />} />
          <Route path="loans" element={<LoansView />} />
          <Route path="preferences" element={<PreferencesView />} />

          {/* Wildcard Fallback Rule: Safeguards against broken manual user paths */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
