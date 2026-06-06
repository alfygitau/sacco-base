import React, { useState } from "react";
import { MOCK_SACCOS } from "../../constants/saccos";

export default function ThemeView() {
  const [primaryColor, setPrimary] = useState("#3b82f6");
  const [accentColor, setAccent] = useState("#10b981");
  const [selectedSacco, setSelectedSacco] = useState("Elimu Sacco");
  const [toggle, setToggle] = useState({
    darkMode: true,
    roundedCards: true,
    gradients: false,
  });
  const presets = [
    "#3b82f6",
    "#7c3aed",
    "#10b981",
    "#f59e0b",
    "#ef4444",
    "#ec4899",
    "#14b8a6",
    "#f97316",
  ];

  return (
    <div>
      <div className="section-head">
        <div className="section-head-info">
          <div className="section-title">Theme & Branding</div>
          <div className="section-desc">
            Customize the look and feel of each SACCO's app
          </div>
        </div>
        <button className="btn btn-primary">Save Theme</button>
      </div>

      <div className="form-group" style={{ marginBottom: 24, maxWidth: 300 }}>
        <label>Apply To Organization</label>
        <select
          value={selectedSacco}
          onChange={(e) => setSelectedSacco(e.target.value)}
        >
          {MOCK_SACCOS.map((s) => (
            <option key={s.id}>{s.name}</option>
          ))}
        </select>
      </div>

      <div className="grid-2">
        <div className="flex flex-col gap16">
          <div className="card">
            <div className="card-title" style={{ marginBottom: 4 }}>
              Logo & Identity
            </div>
            <div className="card-sub" style={{ marginBottom: 16 }}>
              Upload the SACCO's logo and app icon
            </div>
            <div className="logo-drop">
              <div style={{ fontSize: 32, marginBottom: 8 }}>🖼</div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "var(--text2)",
                  marginBottom: 4,
                }}
              >
                Drop logo here or click to upload
              </div>
              <div style={{ fontSize: 12, color: "var(--text3)" }}>
                PNG, SVG recommended · Max 2MB · 512×512px
              </div>
              <button
                className="btn btn-ghost btn-sm"
                style={{ marginTop: 12 }}
              >
                Choose File
              </button>
            </div>
            <div style={{ marginTop: 16 }}>
              <label style={{ marginBottom: 6, display: "block" }}>
                App Name (displayed in header)
              </label>
              <input placeholder={selectedSacco} />
            </div>
            <div style={{ marginTop: 12 }}>
              <label style={{ marginBottom: 6, display: "block" }}>
                Tagline / Slogan
              </label>
              <input placeholder="Your trusted savings partner" />
            </div>
          </div>

          <div className="card">
            <div className="card-title" style={{ marginBottom: 4 }}>
              Color Palette
            </div>
            <div className="card-sub" style={{ marginBottom: 16 }}>
              Define brand colors for the mobile and web app
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{ marginBottom: 8, display: "block" }}>
                Primary Color
              </label>
              <div className="swatch-grid">
                {presets.map((c) => (
                  <div
                    key={c}
                    className={`swatch ${primaryColor === c ? "selected" : ""}`}
                    style={{ background: c }}
                    onClick={() => setPrimary(c)}
                  />
                ))}
                <input
                  type="color"
                  value={primaryColor}
                  onChange={(e) => setPrimary(e.target.value)}
                  style={{
                    width: 32,
                    height: 32,
                    padding: 2,
                    borderRadius: 8,
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{ marginBottom: 8, display: "block" }}>
                Accent Color
              </label>
              <div className="swatch-grid">
                {presets.map((c) => (
                  <div
                    key={c}
                    className={`swatch ${accentColor === c ? "selected" : ""}`}
                    style={{ background: c }}
                    onClick={() => setAccent(c)}
                  />
                ))}
                <input
                  type="color"
                  value={accentColor}
                  onChange={(e) => setAccent(e.target.value)}
                  style={{
                    width: 32,
                    height: 32,
                    padding: 2,
                    borderRadius: 8,
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-title" style={{ marginBottom: 16 }}>
              App Settings
            </div>
            {[
              {
                k: "darkMode",
                label: "Dark Mode Default",
                desc: "App opens in dark mode by default",
              },
              {
                k: "roundedCards",
                label: "Rounded Card Style",
                desc: "Use rounded corners on all cards",
              },
              {
                k: "gradients",
                label: "Gradient Accents",
                desc: "Apply gradient effects to buttons and banners",
              },
            ].map(({ k, label, desc }) => (
              <div key={k} className="toggle-row">
                <div>
                  <div className="toggle-label">{label}</div>
                  <div className="toggle-desc">{desc}</div>
                </div>
                <div
                  className={`toggle ${toggle[k] ? "on" : ""}`}
                  onClick={() => setToggle((t) => ({ ...t, [k]: !t[k] }))}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="card" style={{ position: "sticky", top: 100 }}>
          <div className="card-title" style={{ marginBottom: 4 }}>
            Live Preview
          </div>
          <div className="card-sub" style={{ marginBottom: 16 }}>
            How the app looks with this theme
          </div>
          <div
            style={{
              background: toggle.darkMode ? "#0d1117" : "#f8fafc",
              borderRadius: 14,
              padding: 20,
              border: "1px solid var(--border)",
              minHeight: 420,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: primaryColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                  color: "#fff",
                }}
              >
                S
              </div>
              <div>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: 14,
                    color: toggle.darkMode ? "#f0f4ff" : "#111",
                  }}
                >
                  {selectedSacco}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: toggle.darkMode ? "#64748b" : "#94a3b8",
                  }}
                >
                  Member Dashboard
                </div>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10,
                marginBottom: 16,
              }}
            >
              {[
                ["Savings", "KES 45,200"],
                ["Shares", "KES 12,000"],
              ].map(([l, v]) => (
                <div
                  key={l}
                  style={{
                    padding: 14,
                    borderRadius: toggle.roundedCards ? 12 : 4,
                    background: toggle.darkMode ? "#1a2235" : "#fff",
                    border: "1px solid rgba(99,130,180,0.15)",
                  }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      color: toggle.darkMode ? "#64748b" : "#94a3b8",
                      marginBottom: 6,
                    }}
                  >
                    {l}
                  </div>
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: primaryColor,
                    }}
                  >
                    {v}
                  </div>
                </div>
              ))}
            </div>
            <button
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: toggle.roundedCards ? 10 : 4,
                border: "none",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: 13,
                background: toggle.gradients
                  ? `linear-gradient(135deg, ${primaryColor}, ${accentColor})`
                  : primaryColor,
                color: "#fff",
              }}
            >
              Apply for Loan
            </button>
            <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
              {[accentColor, primaryColor, "#64748b"].map((c, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: 4,
                    borderRadius: 100,
                    background: c,
                    opacity: i === 2 ? 0.3 : 1,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
