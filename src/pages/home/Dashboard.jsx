import React from "react";
import { MOCK_SACCOS } from "../../constants/saccos";
import { statusColor, tierBadge } from "../../constants/themes";
import { useNavigate } from "react-router-dom";

export default function DashboardView({ setActive }) {
  const navigate = useNavigate();
  const stats = [
    {
      label: "Total SACCOs",
      value: "47",
      delta: "+3",
      up: true,
      meta: "This month",
      color: "blue",
    },
    {
      label: "Active Members",
      value: "128.4K",
      delta: "+12%",
      up: true,
      meta: "Across all SACCOs",
      color: "gold",
    },
    {
      label: "Onboarding Pending",
      value: "5",
      delta: "-2",
      up: false,
      meta: "Awaiting completion",
      color: "red",
    },
    {
      label: "Total Products",
      value: "312",
      delta: "+18",
      up: true,
      meta: "Savings & Loans",
      color: "green",
    },
  ];

  const recent = MOCK_SACCOS.slice(0, 4);

  // Dynamic Summary Mappings for high-fidelity granularity
  const accountProductMetrics = [
    {
      name: "Savings Accounts",
      count: 142,
      volume: "KES 42.1M",
      allocation: 45,
      badgeColor: "#10b981",
    },
    {
      name: "Share Capital",
      count: 47,
      volume: "KES 89.4M",
      allocation: 30,
      badgeColor: "#3b82f6",
    },
    {
      name: "Fixed Deposits",
      count: 68,
      volume: "KES 112.0M",
      allocation: 15,
      badgeColor: "#f59e0b",
    },
    {
      name: "Chama/Special Accounts",
      count: 55,
      volume: "KES 18.2M",
      allocation: 10,
      badgeColor: "#7c3aed",
    },
  ];

  const activeLoanBook = [
    {
      name: "Development Loans",
      code: "DEV003",
      volume: "KES 145M",
      activeCount: 142,
      risk: "Low",
    },
    {
      name: "Normal Loans",
      code: "NRM001",
      volume: "KES 89M",
      activeCount: 310,
      risk: "Medium",
    },
    {
      name: "Emergency Mobile Lines",
      code: "MOB006",
      volume: "KES 12M",
      activeCount: 1204,
      risk: "Low",
    },
    {
      name: "Asset Financing",
      code: "AST005",
      volume: "KES 64M",
      activeCount: 88,
      risk: "High",
    },
  ];

  const integrationStatus = [
    {
      system: "M-Pesa B2C/C2B Gateway",
      status: "Active Connected",
      count: "42 SACCOs",
    },
    {
      system: "PesaLink Interbank Sync",
      status: "Partial Deployment",
      count: "18 SACCOs",
    },
    {
      system: "Automated Credit Scoring Engine",
      status: "Active Connected",
      count: "31 SACCOs",
    },
    {
      system: "Multi-Factor Admin MFA Rules",
      status: "Enforced Global",
      count: "All Tenants",
    },
  ];

  return (
    <div>
      {/* Alert Banner Segment */}
      <div className="notif">
        <span className="notif-icon">💡</span>
        <div className="notif-text">
          <strong>3 SACCOs</strong> are pending configuration — theme, products,
          and preferences need to be set before going live.{" "}
          <span
            style={{
              color: "var(--accent)",
              cursor: "pointer",
              fontWeight: 500,
            }}
            onClick={() => setActive("organizations")}
          >
            Review now →
          </span>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="stats-grid">
        {stats.map((s) => (
          <div key={s.label} className={`stat-card ${s.color}`}>
            <div className="stat-label">{s.label}</div>
            <div className="stat-value">{s.value}</div>
            <div className="stat-meta">
              <span className={`stat-delta ${s.up ? "delta-up" : "delta-dn"}`}>
                {s.up ? "↑" : "↓"} {s.delta}
              </span>
              {s.meta}
            </div>
          </div>
        ))}
      </div>

      {/* Primary Infrastructure Summaries Layout Block */}
      <div className="grid-2">
        {/* Recent Organizations Section Component */}
        <div className="card">
          <div
            className="flex justify-between items-center"
            style={{ marginBottom: 16 }}
          >
            <div>
              <div className="card-title">Recent SACCOs</div>
              <div className="card-sub">Latest organizations onboarded</div>
            </div>
            <button
              className="btn btn-ghost btn-sm"
              onClick={() => setActive("organizations")}
            >
              View all
            </button>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>County</th>
                  <th>Status</th>
                  <th>Tier</th>
                </tr>
              </thead>
              <tbody>
                {recent.map((s) => (
                  <tr key={s.id}>
                    <td>
                      <strong>{s.name}</strong>
                    </td>
                    <td>{s.county}</td>
                    <td>
                      <span
                        className="badge"
                        style={{
                          background: statusColor[s.status].bg,
                          color: statusColor[s.status].text,
                        }}
                      >
                        <span
                          className="badge-dot"
                          style={{ background: statusColor[s.status].dot }}
                        ></span>
                        {s.status}
                      </span>
                    </td>
                    <td>
                      <span
                        className="badge"
                        style={{
                          background: tierBadge[s.tier].bg,
                          color: tierBadge[s.tier].text,
                        }}
                      >
                        {s.tier}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Onboarding Performance Segment */}
        <div className="card">
          <div className="card-title" style={{ marginBottom: 16 }}>
            Onboarding Completion status
          </div>
          {[
            { name: "Elimu Sacco", pct: 100, color: "var(--green)" },
            { name: "Afya Bora Sacco", pct: 85, color: "var(--accent)" },
            { name: "Wakulima Sacco", pct: 60, color: "var(--gold)" },
            { name: "Imara Sacco", pct: 40, color: "var(--red)" },
            { name: "Nguvu Sacco", pct: 90, color: "var(--accent)" },
          ].map((s) => (
            <div key={s.name} style={{ marginBottom: 14 }}>
              <div
                className="flex justify-between items-center"
                style={{ marginBottom: 6 }}
              >
                <span style={{ fontSize: 13, color: "var(--text2)" }}>
                  {s.name}
                </span>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: s.pct === 100 ? "var(--green)" : "var(--text3)",
                  }}
                >
                  {s.pct}%
                </span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${s.pct}%`, background: s.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Summary Data Panels (Account Products & Loan Portfolios) */}
      <div className="grid-2" style={{ marginTop: 20 }}>
        {/* Account Deposit Products Summary Module */}
        <div className="card">
          <div
            className="flex justify-between items-center"
            style={{ marginBottom: 16 }}
          >
            <div>
              <div className="card-title">Account Products Mix</div>
              <div className="card-sub">
                Global savings deposit types & volume distribution
              </div>
            </div>
            <button
              className="btn btn-ghost btn-sm"
              onClick={() => setActive("products")}
            >
              Manage Products
            </button>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Product Base Type</th>
                  <th>Configured</th>
                  <th>Total Capital Assets</th>
                  <th>Weight</th>
                </tr>
              </thead>
              <tbody>
                {accountProductMetrics.map((p, idx) => (
                  <tr key={idx}>
                    <td>
                      <div className="flex items-center gap8">
                        <div
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: p.badgeColor,
                          }}
                        ></div>
                        <span
                          style={{ color: "var(--text1)", fontWeight: 500 }}
                        >
                          {p.name}
                        </span>
                      </div>
                    </td>
                    <td>{p.count} active lines</td>
                    <td style={{ color: "var(--text2)", fontWeight: "500" }}>
                      {p.volume}
                    </td>
                    <td>
                      <span
                        className="badge"
                        style={{
                          background: "var(--bg4)",
                          color: "var(--accent2)",
                        }}
                      >
                        {p.allocation}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* System Loan Products Exposure Module */}
        <div className="card">
          <div
            className="flex justify-between items-center"
            style={{ marginBottom: 16 }}
          >
            <div>
              <div className="card-title">Active Lending Portfolios</div>
              <div className="card-sub">
                Lending metrics across critical asset classes
              </div>
            </div>
            <button
              className="btn btn-ghost btn-sm"
              onClick={() => setActive("loans")}
            >
              Lending Rules
            </button>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Loan Classification</th>
                  <th>Book Size</th>
                  <th>Accounts</th>
                  <th>Risk profile</th>
                </tr>
              </thead>
              <tbody>
                {activeLoanBook.map((l, idx) => (
                  <tr key={idx}>
                    <td>
                      <div>
                        <span
                          style={{ color: "var(--text1)", fontWeight: 500 }}
                        >
                          {l.name}
                        </span>
                        <div
                          style={{
                            fontSize: 11,
                            color: "var(--text3)",
                            marginTop: 2,
                          }}
                        >
                          Code: {l.code}
                        </div>
                      </div>
                    </td>
                    <td style={{ color: "var(--text1)", fontWeight: "500" }}>
                      {l.volume}
                    </td>
                    <td>{l.activeCount.toLocaleString()} allocation</td>
                    <td>
                      <span
                        className="badge"
                        style={{
                          background:
                            l.risk === "Low"
                              ? "rgba(16,185,129,0.12)"
                              : l.risk === "Medium"
                                ? "rgba(245,158,11,0.12)"
                                : "rgba(239,68,68,0.12)",
                          color:
                            l.risk === "Low"
                              ? "#34d399"
                              : l.risk === "Medium"
                                ? "#fbbf24"
                                : "#f87171",
                        }}
                      >
                        {l.risk}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Preferences & Shared Global Integrations Monitoring Panel */}
      <div className="card" style={{ marginTop: 20 }}>
        <div
          className="flex justify-between items-center"
          style={{ marginBottom: 16 }}
        >
          <div>
            <div className="card-title">
              Shared Core Integrations & Global Rules
            </div>
            <div className="card-sub">
              System preferences state across ecosystem connection gateways
            </div>
          </div>
          <button
            className="btn btn-ghost btn-sm"
            onClick={() => setActive("preferences")}
          >
            System Prefs
          </button>
        </div>
        <div className="grid-2 gap16">
          {integrationStatus.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between"
              style={{
                padding: "12px 16px",
                background: "var(--bg4)",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--border)",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--text1)",
                  }}
                >
                  {item.system}
                </div>
                <div
                  style={{ fontSize: 12, color: "var(--text3)", marginTop: 2 }}
                >
                  Tenant allocation: {item.count}
                </div>
              </div>
              <span
                className="badge"
                style={{
                  background:
                    item.status.includes("Active") ||
                    item.status.includes("Enforced")
                      ? "rgba(16,185,129,0.12)"
                      : "rgba(245,158,11,0.12)",
                  color:
                    item.status.includes("Active") ||
                    item.status.includes("Enforced")
                      ? "#34d399"
                      : "#fbbf24",
                }}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Onboarding Walkthrough Steps Component */}
      <div className="card" style={{ marginTop: 20 }}>
        <div
          className="flex justify-between items-center"
          style={{ marginBottom: 16 }}
        >
          <div>
            <div className="card-title">Quick Onboard a SACCO</div>
            <div className="card-sub">
              Follow the sequential pipeline steps to configure a new
              organization instance
            </div>
          </div>
        </div>

        {/* Onboarding Horizontal Progress Path Tracker */}
        <div className="steps">
          {[
            "Organization",
            "Branches",
            "Admins",
            "Theme",
            "Products",
            "Loans",
            "Preferences",
          ].map((label, i) => (
            <React.Fragment key={label}>
              {i > 0 && (
                <div className={`step-line ${i < 3 ? "done" : ""}`}></div>
              )}
              <div
                className={`step ${i < 3 ? "done" : i === 3 ? "active" : ""}`}
              >
                <div className="step-num">{i < 3 ? "✓" : i + 1}</div>
                <div className="step-label">{label}</div>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Programmatic Navigation Action Triggers */}
        <div className="flex flex-wrap gap8">
          {[
            { path: "organizations", label: "1. Org Details" },
            { path: "branches", label: "2. Regional Nodes" },
            { path: "admins", label: "3. Access Controls" },
            { path: "theme", label: "4. Brand Sync" },
            { path: "products", label: "5. Deposit Accounts" },
            { path: "loans", label: "6. Lending Books" },
            { path: "preferences", label: "7. System Prefs" },
          ].map((target, idx) => (
            <button
              key={target.path}
              className={`btn btn-sm ${idx === 3 ? "btn-primary" : "btn-ghost"}`}
              onClick={() => navigate(`/${target.path}`)}
            >
              {target.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
