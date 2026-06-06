import React, { useState } from "react";
import { MOCK_SACCOS } from "../../constants/saccos";
import { COUNTIES } from "../../constants/counties";
import { statusColor, tierBadge } from "../../constants/themes";

export default function OrganizationsView() {
  const [tab, setTab] = useState("list");
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState({
    name: "",
    code: "",
    regNo: "",
    county: "",
    address: "",
    phone: "",
    email: "",
    website: "",
    tier: "Standard",
    description: "",
  });

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <div>
      <div className="section-head">
        <div className="section-head-info">
          <div className="section-title">Organizations</div>
          <div className="section-desc">
            Manage all SACCOs registered on the platform
          </div>
        </div>
        <button className="btn btn-primary" onClick={() => setTab("add")}>
          + Add Organization
        </button>
      </div>

      <div className="tabs">
        {["list", "add"].map((t) => (
          <div
            key={t}
            className={`tab ${tab === t ? "active" : ""}`}
            onClick={() => setTab(t)}
          >
            {t === "list" ? "All Organizations" : "New Organization"}
          </div>
        ))}
      </div>

      {tab === "list" && (
        <div className="card" style={{ padding: 0 }}>
          <div
            className="flex justify-between items-center"
            style={{
              padding: "16px 20px",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <div className="flex gap8 items-center">
              <input placeholder="Search SACCOs…" style={{ width: 220 }} />
              <select style={{ width: 140 }}>
                <option>All Status</option>
                <option>Active</option>
                <option>Pending</option>
                <option>Inactive</option>
              </select>
              <select style={{ width: 140 }}>
                <option>All Tiers</option>
                <option>Enterprise</option>
                <option>Premium</option>
                <option>Standard</option>
              </select>
            </div>
            <span style={{ fontSize: 12, color: "var(--text3)" }}>
              {MOCK_SACCOS.length} organizations
            </span>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Code</th>
                  <th>County</th>
                  <th>Members</th>
                  <th>Tier</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_SACCOS.map((s) => (
                  <tr
                    key={s.id}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setSelected(s);
                      setTab("detail");
                    }}
                  >
                    <td>
                      <div className="flex items-center gap8">
                        <div
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: 8,
                            background: "var(--bg4)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 14,
                            border: "1px solid var(--border)",
                          }}
                        >
                          {s.name[0]}
                        </div>
                        {s.name}
                      </div>
                    </td>
                    <td>
                      <code
                        style={{
                          fontSize: 12,
                          background: "var(--bg4)",
                          padding: "2px 8px",
                          borderRadius: 4,
                          color: "var(--accent2)",
                        }}
                      >
                        {s.code}
                      </code>
                    </td>
                    <td>{s.county}</td>
                    <td>{s.members.toLocaleString()}</td>
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
                      <div
                        className="flex gap8"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button className="btn btn-ghost btn-sm">Edit</button>
                        <button className="btn btn-danger btn-sm">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {tab === "add" && (
        <div className="card">
          <div className="card-title" style={{ marginBottom: 4 }}>
            Register New SACCO
          </div>
          <div className="card-sub" style={{ marginBottom: 24 }}>
            Fill in the organization details to onboard a new SACCO
          </div>

          <div
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "var(--text3)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            Basic Information
          </div>
          <div className="form-grid">
            <div className="form-group">
              <label>SACCO Name *</label>
              <input
                placeholder="e.g. Elimu Sacco"
                value={form.name}
                onChange={set("name")}
              />
            </div>
            <div className="form-group">
              <label>Short Code *</label>
              <input
                placeholder="e.g. ELIM001"
                value={form.code}
                onChange={set("code")}
              />
            </div>
            <div className="form-group">
              <label>Registration Number</label>
              <input
                placeholder="e.g. SASRA/2024/0012"
                value={form.regNo}
                onChange={set("regNo")}
              />
            </div>
            <div className="form-group">
              <label>Tier</label>
              <select value={form.tier} onChange={set("tier")}>
                <option>Standard</option>
                <option>Premium</option>
                <option>Enterprise</option>
              </select>
            </div>
            <div className="form-group full">
              <label>Description</label>
              <textarea
                placeholder="Brief description of the SACCO…"
                value={form.description}
                onChange={set("description")}
              />
            </div>
          </div>

          <hr className="divider" />
          <div
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "var(--text3)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            Location & Contact
          </div>
          <div className="form-grid">
            <div className="form-group">
              <label>County</label>
              <select value={form.county} onChange={set("county")}>
                <option value="">Select County</option>
                {COUNTIES.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Physical Address</label>
              <input
                placeholder="Street / Building"
                value={form.address}
                onChange={set("address")}
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                placeholder="+254 700 000000"
                value={form.phone}
                onChange={set("phone")}
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                placeholder="info@sacco.co.ke"
                value={form.email}
                onChange={set("email")}
              />
            </div>
            <div className="form-group">
              <label>Website</label>
              <input
                placeholder="https://www.sacco.co.ke"
                value={form.website}
                onChange={set("website")}
              />
            </div>
          </div>

          <hr className="divider" />
          <div className="flex gap8" style={{ justifyContent: "flex-end" }}>
            <button className="btn btn-ghost" onClick={() => setTab("list")}>
              Cancel
            </button>
            <button className="btn btn-ghost">Save Draft</button>
            <button className="btn btn-primary">Create Organization →</button>
          </div>
        </div>
      )}

      {tab === "detail" && selected && (
        <div className="animate-fade-in">
          {/* Navigation Back Header Control */}
          <div
            className="flex justify-between items-center"
            style={{ marginBottom: 20 }}
          >
            <button
              className="btn btn-ghost btn-sm"
              onClick={() => {
                setSelected(null);
                setTab("list");
              }}
            >
              ← Back to Organizations Directory
            </button>
            <div className="flex gap8">
              <button className="btn btn-ghost btn-sm">📝 Edit Profile</button>
              {selected.status !== "active" && (
                <button className="btn btn-primary btn-sm">
                  🚀 Activate & Go Live
                </button>
              )}
            </div>
          </div>

          {/* Hero Organization Identity Card */}
          <div className="card" style={{ marginBottom: 20 }}>
            <div className="flex justify-between items-start flex-col gap16 md-flex-row">
              <div className="flex items-center gap16">
                <div
                  style={{
                    width: 68,
                    height: 68,
                    borderRadius: 16,
                    background:
                      "linear-gradient(135deg, var(--bg4), var(--bg3))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 28,
                    fontWeight: 700,
                    fontFamily: "Sora",
                    border: "1px solid var(--border2)",
                    color: "var(--accent2)",
                  }}
                >
                  {selected.name[0]}
                </div>
                <div>
                  <h2
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      fontFamily: "Sora",
                      color: "var(--text1)",
                      marginBottom: 6,
                    }}
                  >
                    {selected.name}
                  </h2>
                  <div className="flex flex-wrap gap8 items-center">
                    <code
                      style={{
                        fontSize: 11,
                        background: "var(--bg4)",
                        padding: "3px 10px",
                        borderRadius: 6,
                        color: "var(--accent2)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      SYSTEM CODE: {selected.code}
                    </code>
                    <span
                      className="badge"
                      style={{
                        background: statusColor[selected.status].bg,
                        color: statusColor[selected.status].text,
                      }}
                    >
                      <span
                        className="badge-dot"
                        style={{ background: statusColor[selected.status].dot }}
                      ></span>
                      Status: {selected.status}
                    </span>
                    <span
                      className="badge"
                      style={{
                        background: tierBadge[selected.tier].bg,
                        color: tierBadge[selected.tier].text,
                      }}
                    >
                      Subscription Tier: {selected.tier}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {selected.description && (
              <div
                style={{
                  marginTop: 20,
                  paddingTop: 16,
                  borderTop: "1px solid var(--border)",
                  fontSize: 14,
                  color: "var(--text2)",
                  lineHeight: "1.6",
                }}
              >
                <strong>Corporate Overview:</strong> {selected.description}
              </div>
            )}
          </div>

          {/* Live Operational Counters Grid */}
          <div className="grid-3" style={{ marginBottom: 24 }}>
            {[
              {
                label: "Registered Active Members",
                value: selected.members?.toLocaleString() || "0",
                sub: "Verified via SASRA ledger",
                color: "var(--accent)",
              },
              {
                label: "Assigned County Node",
                value: selected.county,
                sub: "Regional jurisdictional boundary",
                color: "var(--gold)",
              },
              {
                label: "Regulatory Registration No.",
                value: selected.regNo || "SASRA/REG/PENDING",
                sub: "Compliance identifier",
                color: "var(--green)",
              },
            ].map((metric, idx) => (
              <div
                key={idx}
                style={{
                  padding: 20,
                  background: "var(--bg3)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius)",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--text3)",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    marginBottom: 6,
                  }}
                >
                  {metric.label}
                </div>
                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: "var(--text1)",
                    marginBottom: 4,
                  }}
                >
                  {metric.value}
                </div>
                <div style={{ fontSize: 11, color: "var(--text3)" }}>
                  {metric.sub}
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Attribute Segmentation Sub-grids */}
          <div className="grid-2" style={{ gap: "20px" }}>
            {/* Structural & Location Demographics Card */}
            <div className="card">
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--text3)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: 16,
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span>📍</span> Location & Contact Profiles
              </div>
              <div className="flex flex-col gap12" style={{ fontSize: 14 }}>
                <div
                  className="flex justify-between items-center"
                  style={{
                    paddingBottom: 10,
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <span style={{ color: "var(--text3)" }}>
                    Physical Base Address
                  </span>
                  <span style={{ color: "var(--text2)", fontWeight: 500 }}>
                    {selected.address || "Not Specified"}
                  </span>
                </div>
                <div
                  className="flex justify-between items-center"
                  style={{
                    paddingBottom: 10,
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <span style={{ color: "var(--text3)" }}>
                    Administrative Line
                  </span>
                  <span style={{ color: "var(--text2)", fontWeight: 500 }}>
                    {selected.phone || "Not Configured"}
                  </span>
                </div>
                <div
                  className="flex justify-between items-center"
                  style={{
                    paddingBottom: 10,
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <span style={{ color: "var(--text3)" }}>
                    Secure Routing Email
                  </span>
                  <span style={{ color: "var(--accent2)", fontWeight: 500 }}>
                    {selected.email || "No Email Bound"}
                  </span>
                </div>
                <div
                  className="flex justify-between items-center"
                  style={{ paddingTop: 2 }}
                >
                  <span style={{ color: "var(--text3)" }}>
                    Corporate Web Portal
                  </span>
                  {selected.website ? (
                    <a
                      href={selected.website}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: "var(--accent)",
                        textDecoration: "none",
                        fontWeight: 500,
                      }}
                    >
                      {selected.website.replace(/^https?:\/\//, "")} ↗
                    </a>
                  ) : (
                    <span style={{ color: "var(--text3)" }}>None Provided</span>
                  )}
                </div>
              </div>
            </div>

            {/* Internal System Deployment Profiles */}
            <div className="card">
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--text3)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: 16,
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span>⚙️</span> Engine Telemetry & Configurations
              </div>
              <div className="flex flex-col gap12" style={{ fontSize: 14 }}>
                <div
                  className="flex justify-between items-center"
                  style={{
                    paddingBottom: 10,
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <span style={{ color: "var(--text3)" }}>
                    Core System Instance
                  </span>
                  <span
                    className="badge"
                    style={{
                      background: "rgba(16,185,129,0.1)",
                      color: "var(--green)",
                    }}
                  >
                    Provisioned Secure
                  </span>
                </div>
                <div
                  className="flex justify-between items-center"
                  style={{
                    paddingBottom: 10,
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <span style={{ color: "var(--text3)" }}>
                    Active Product Sub-lines
                  </span>
                  <span style={{ color: "var(--text2)", fontWeight: 500 }}>
                    5 Active Products Configured
                  </span>
                </div>
                <div
                  className="flex justify-between items-center"
                  style={{
                    paddingBottom: 10,
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <span style={{ color: "var(--text3)" }}>
                    Default Operational Currency
                  </span>
                  <span style={{ color: "var(--text1)", fontWeight: 600 }}>
                    KES — Kenyan Shilling
                  </span>
                </div>
                <div
                  className="flex justify-between items-center"
                  style={{ paddingTop: 2 }}
                >
                  <span style={{ color: "var(--text3)" }}>
                    Audit Track Status
                  </span>
                  <span style={{ color: "var(--text2)" }}>
                    Sync Normal (Healthy)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
