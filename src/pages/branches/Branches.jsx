import React, { useState } from "react";

export default function BranchesView() {
  const [tab, setTab] = useState("list");
  const [selectedBranch, setSelectedBranch] = useState(null);

  // High fidelity branch infrastructure state
  const [branches, setBranches] = useState([
    {
      id: 1,
      name: "Nairobi Central Head Office",
      code: "BR-NBO-01",
      manager: "Peter Kamau",
      type: "HQ + Branch",
      staff: 34,
      vaultFloat: 4500000,
      status: "active",
      phone: "+254 20 2210000",
      email: "nbi.central@saccobase.co.ke",
      location: "SaccoBase Towers, Upperhill",
    },
    {
      id: 2,
      name: "Mombasa Coastal Hub",
      code: "BR-MSA-02",
      manager: "Amina Omar",
      type: "Full Branch",
      staff: 18,
      vaultFloat: 1850000,
      status: "active",
      phone: "+254 41 2230044",
      email: "msa.hub@saccobase.co.ke",
      location: "Mombasa Trade Centre, Nkrumah Road",
    },
    {
      id: 3,
      name: "Nakuru Agriculture Center",
      code: "BR-NKR-03",
      manager: "John Koech",
      type: "Full Branch",
      staff: 14,
      vaultFloat: 1200000,
      status: "active",
      phone: "+254 51 2215566",
      email: "nkr.agri@saccobase.co.ke",
      location: "Kenyatta Avenue, Nakuru CBD",
    },
    {
      id: 4,
      name: "Kisumu Lakeview Branch",
      code: "BR-KSM-04",
      manager: "Grace Ochieng",
      type: "Satellite",
      staff: 8,
      vaultFloat: 650000,
      status: "active",
      phone: "+254 57 2021122",
      email: "ksm.lake@saccobase.co.ke",
      location: "Mega Plaza, Oginga Odinga Road",
    },
    {
      id: 5,
      name: "Eldoret Grain Belt Office",
      code: "BR-ELD-05",
      manager: "David Kiprop",
      type: "Satellite",
      staff: 6,
      vaultFloat: 400000,
      status: "pending",
      phone: "+254 53 2030099",
      email: "eld.grain@saccobase.co.ke",
      location: "Uganda Road, Eldoret",
    },
    {
      id: 6,
      name: "Thika Industrial Outlet",
      code: "BR-THK-06",
      manager: "Mary Wanjiku",
      type: "Cash Point",
      staff: 3,
      vaultFloat: 250000,
      status: "inactive",
      phone: "+254 67 2221100",
      email: "thk.ind@saccobase.co.ke",
      location: "Ananas Mall, Garissa Road",
    },
    {
      id: 7,
      name: "Nyeri Mt. Kenya Hub",
      code: "BR-NYI-07",
      manager: "Charles Mwangi",
      type: "Full Branch",
      staff: 12,
      vaultFloat: 1100000,
      status: "active",
      phone: "+254 61 2030122",
      email: "nyi.hub@saccobase.co.ke",
      location: "Hazina Plaza, Gakere Road",
    },
    {
      id: 8,
      name: "Machakos Eastern Gateway",
      code: "BR-MCK-08",
      manager: "Faith Mutua",
      type: "Satellite",
      staff: 5,
      vaultFloat: 350000,
      status: "active",
      phone: "+254 44 2124499",
      email: "mck.gate@saccobase.co.ke",
      location: "Mwalimu Complex, Mwatu Wa Ngoma Road",
    },
    {
      id: 9,
      name: "Kakamega Western Center",
      code: "BR-KKM-09",
      manager: "Festus Barasa",
      type: "Full Branch",
      staff: 11,
      vaultFloat: 950000,
      status: "pending",
      phone: "+254 56 3105588",
      email: "kkm.west@saccobase.co.ke",
      location: "Sukari Plaza, Mumias-Kakamega Road",
    },
    {
      id: 10,
      name: "Meru Alpine Express",
      code: "BR-MER-10",
      manager: "Nicholas Kirimi",
      type: "Cash Point",
      staff: 2,
      vaultFloat: 180000,
      status: "active",
      phone: "+254 64 3130422",
      email: "mer.express@saccobase.co.ke",
      location: "Farmers Union Plaza, Tom Mboya Street",
    },
  ]);

  const [newBranch, setNewBranch] = useState({
    name: "",
    manager: "",
    type: "Full Branch",
    staff: "",
    vaultFloat: "",
    status: "pending",
    phone: "",
    email: "",
    location: "",
  });

  const handleInputChange = (field, value) => {
    setNewBranch((prev) => ({ ...prev, [field]: value }));
  };

  const handleCreateBranch = (e) => {
    e.preventDefault();
    if (!newBranch.name || !newBranch.manager) return;

    const codeSlug =
      "BR-" +
      newBranch.name.substring(0, 3).toUpperCase() +
      "-0" +
      (branches.length + 1);
    const formatted = {
      ...newBranch,
      id: branches.length + 1,
      code: codeSlug,
      staff: parseInt(newBranch.staff || 0, 10),
      vaultFloat: parseFloat(newBranch.vaultFloat || 0),
    };

    setBranches((prev) => [...prev, formatted]);
    setTab("list");
    setNewBranch({
      name: "",
      manager: "",
      type: "Full Branch",
      staff: "",
      vaultFloat: "",
      status: "pending",
      phone: "",
      email: "",
      location: "",
    });
  };

  const totalVaultLiquidity = branches.reduce(
    (acc, curr) => acc + (curr.status === "active" ? curr.vaultFloat : 0),
    0,
  );
  const totalWorkforce = branches.reduce((acc, curr) => acc + curr.staff, 0);

  return (
    <div>
      <div className="section-head">
        <div className="section-head-info">
          <div className="section-title">Organization Branches</div>
          <div className="section-desc">
            Provision regional branch workflows, cash vaults thresholds, and
            localized agent metadata
          </div>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            setTab(tab === "add" ? "list" : "add");
            setSelectedBranch(null);
          }}
        >
          {tab === "add" ? "← View Branch List" : "+ Provision New Branch"}
        </button>
      </div>

      {/* High Fidelity Structural Counters */}
      {tab !== "add" && (
        <div className="stats-grid">
          <div className="stat-card blue">
            <div className="stat-label">Total Regional Offices</div>
            <div className="stat-value">{branches.length}</div>
            <div className="stat-meta">Active Network Hubs</div>
          </div>
          <div className="stat-card green">
            <div className="stat-label">Aggregated Vault Limits</div>
            <div className="stat-value">
              KES {(totalVaultLiquidity / 1000000).toFixed(2)}M
            </div>
            <div className="stat-meta">Active cash floor liquidity</div>
          </div>
          <div className="stat-card gold">
            <div className="stat-label">Ecosystem Personnel</div>
            <div className="stat-value">{totalWorkforce}</div>
            <div className="stat-meta">Across all service channels</div>
          </div>
          <div className="stat-card red">
            <div className="stat-label">Auditing Exceptions</div>
            <div className="stat-value">
              {branches.filter((b) => b.status === "pending").length}
            </div>
            <div className="stat-meta">Awaiting security clearance</div>
          </div>
        </div>
      )}

      {/* Operational Mode Navigation Control Tabs */}
      {tab !== "add" && (
        <div className="tabs">
          {["list", "geographic"].map((t) => (
            <div
              key={t}
              className={`tab ${tab === t ? "active" : ""}`}
              onClick={() => {
                setTab(t);
                setSelectedBranch(null);
              }}
            >
              {t === "list"
                ? "Active Registry Directory"
                : "Geographic Zone Matrix"}
            </div>
          ))}
        </div>
      )}

      {/* Data Table Segment view */}
      {tab === "list" && (
        <div
          className="grid-2"
          style={{
            gridTemplateColumns: selectedBranch ? "1.3fr 0.7fr" : "1fr",
            gap: "20px",
            alignItems: "start",
          }}
        >
          <div className="card" style={{ padding: 0 }}>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Branch Profile</th>
                    <th>Structural Tier</th>
                    <th>Operations Lead</th>
                    <th>Active Personnel</th>
                    <th>Assigned Liquid Float</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {branches.map((b) => (
                    <tr
                      key={b.id}
                      style={{
                        cursor: "pointer",
                        background:
                          selectedBranch?.id === b.id
                            ? "rgba(99,130,180,0.08)"
                            : "",
                      }}
                      onClick={() => setSelectedBranch(b)}
                    >
                      <td>
                        <div>
                          <span
                            style={{ fontWeight: 600, color: "var(--text1)" }}
                          >
                            {b.name}
                          </span>
                          <div
                            style={{
                              fontSize: 11,
                              color: "var(--text3)",
                              marginTop: 2,
                            }}
                          >
                            Code ID:{" "}
                            <code style={{ color: "var(--accent2)" }}>
                              {b.code}
                            </code>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span
                          className="badge"
                          style={{
                            background: "var(--bg4)",
                            color: "var(--text2)",
                          }}
                        >
                          {b.type}
                        </span>
                      </td>
                      <td>
                        <span style={{ fontSize: 13, color: "var(--text2)" }}>
                          {b.manager}
                        </span>
                      </td>
                      <td>
                        <span style={{ fontSize: 13, color: "var(--text2)" }}>
                          {b.staff} Agents
                        </span>
                      </td>
                      <td>
                        <strong style={{ color: "var(--text1)" }}>
                          KES {b.vaultFloat.toLocaleString()}
                        </strong>
                      </td>
                      <td>
                        <span
                          className="badge"
                          style={{
                            background:
                              b.status === "active"
                                ? "rgba(16,185,129,0.12)"
                                : b.status === "pending"
                                  ? "rgba(245,158,11,0.12)"
                                  : "rgba(239,68,68,0.12)",
                            color:
                              b.status === "active"
                                ? "#34d399"
                                : b.status === "pending"
                                  ? "#fbbf24"
                                  : "#f87171",
                          }}
                        >
                          {b.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Contextual Side Inspection Drawer Profile */}
          {selectedBranch && (
            <div className="card" style={{ position: "sticky", top: 100 }}>
              <div
                className="flex justify-between items-center"
                style={{
                  marginBottom: 16,
                  borderBottom: "1px solid var(--border)",
                  paddingBottom: 12,
                }}
              >
                <div>
                  <div className="card-title" style={{ fontSize: 16 }}>
                    Detailed Profile
                  </div>
                  <div className="card-sub">{selectedBranch.code}</div>
                </div>
                <button
                  className="btn btn-ghost btn-sm"
                  onClick={() => setSelectedBranch(null)}
                >
                  ✕ Close
                </button>
              </div>

              <div className="flex flex-col gap12">
                <div>
                  <label style={{ color: "var(--text3)" }}>
                    Physical Location Demographics
                  </label>
                  <div
                    style={{
                      fontSize: 13,
                      color: "var(--text1)",
                      marginTop: 4,
                      background: "var(--bg4)",
                      padding: "10px",
                      borderRadius: "var(--radius-sm)",
                    }}
                  >
                    📍 {selectedBranch.location}
                  </div>
                </div>
                <div className="grid-2" style={{ gap: "12px" }}>
                  <div
                    style={{
                      background: "var(--bg4)",
                      padding: 12,
                      borderRadius: "var(--radius-sm)",
                    }}
                  >
                    <label style={{ fontSize: 11, color: "var(--text3)" }}>
                      Telephone Line
                    </label>
                    <div
                      style={{ fontSize: 13, fontWeight: 500, marginTop: 4 }}
                    >
                      {selectedBranch.phone}
                    </div>
                  </div>
                  <div
                    style={{
                      background: "var(--bg4)",
                      padding: 12,
                      borderRadius: "var(--radius-sm)",
                    }}
                  >
                    <label style={{ fontSize: 11, color: "var(--text3)" }}>
                      Secure Routing Mail
                    </label>
                    <div
                      style={{
                        fontSize: 12,
                        fontWeight: 500,
                        marginTop: 4,
                        wordBreak: "break-all",
                      }}
                    >
                      {selectedBranch.email}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    borderTop: "1px solid var(--border)",
                    paddingTop: 12,
                    marginTop: 4,
                  }}
                >
                  <div
                    className="flex justify-between items-center"
                    style={{ marginBottom: 8 }}
                  >
                    <span style={{ fontSize: 13, color: "var(--text2)" }}>
                      Operational Capacity threshold
                    </span>
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: "var(--accent2)",
                      }}
                    >
                      Optimized
                    </span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{
                        width: selectedBranch.type.includes("HQ")
                          ? "95%"
                          : "60%",
                        background: "var(--accent)",
                      }}
                    ></div>
                  </div>
                </div>

                <div
                  className="flex gap8"
                  style={{ marginTop: 12, justifyContent: "flex-end" }}
                >
                  <button className="btn btn-ghost btn-sm">
                    Re-Key Routing Credentials
                  </button>
                  <button className="btn btn-danger btn-sm">
                    Suspend Channel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Geographic Distribution Matrix Fallback */}
      {tab === "geographic" && (
        <div className="grid-3">
          {[
            "Nairobi Core Zone",
            "Coastline Grid",
            "Rift Valley Basin",
            "Western Hub Grid",
          ].map((zone, idx) => (
            <div className="card" key={idx}>
              <div
                className="card-title"
                style={{
                  fontSize: 14,
                  display: "flex",
                  justifyContent: "between",
                  alignItems: "center",
                }}
              >
                <span>{zone}</span>
                <span
                  className="badge"
                  style={{
                    background: "rgba(59,130,246,0.12)",
                    color: "var(--accent2)",
                  }}
                >
                  Zone Sync Online
                </span>
              </div>
              <div
                style={{ fontSize: 24, fontWeight: 700, margin: "16px 0 4px" }}
              >
                {idx === 0
                  ? "1 Office"
                  : idx === 1
                    ? "1 Office"
                    : idx === 2
                      ? "2 Offices"
                      : "2 Offices"}
              </div>
              <div className="card-sub">Aggregated telemetry status normal</div>
            </div>
          ))}
        </div>
      )}

      {/* Provisioning entry form View stream */}
      {tab === "add" && (
        <div className="card">
          <div className="card-title">Provision New Node Branch Container</div>
          <div className="card-sub" style={{ marginBottom: 20 }}>
            Initialize localized database parameters and asset floats for
            regional setup
          </div>

          <form onSubmit={handleCreateBranch}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "var(--text3)",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: 12,
              }}
            >
              Structural Base parameters
            </div>
            <div className="form-grid" style={{ marginBottom: 20 }}>
              <div className="form-group">
                <label>Branch Moniker / Name *</label>
                <input
                  placeholder="e.g., Kisumu Airport Plaza"
                  required
                  value={newBranch.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Branch Classification Tier</label>
                <select
                  value={newBranch.type}
                  onChange={(e) => handleInputChange("type", e.target.value)}
                >
                  <option value="Full Branch">Full Operational Branch</option>
                  <option value="Satellite">Satellite Service Desk</option>
                  <option value="Cash Point">Automated Cash Vault Point</option>
                  <option value="HQ Sub-Node">HQ Sub-Node Contingency</option>
                </select>
              </div>
              <div className="form-group">
                <label>Operations Lead / Manager Name *</label>
                <input
                  placeholder="e.g., Sarah Cherono"
                  required
                  value={newBranch.manager}
                  onChange={(e) => handleInputChange("manager", e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Onboarding Personnel Allocation Count</label>
                <input
                  type="number"
                  placeholder="e.g., 5"
                  value={newBranch.staff}
                  onChange={(e) => handleInputChange("staff", e.target.value)}
                />
              </div>
            </div>

            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "var(--text3)",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: 12,
              }}
            >
              Treasury Allocation & Contacts
            </div>
            <div className="form-grid-3" style={{ marginBottom: 20 }}>
              <div className="form-group">
                <label>Initial Liquidity Float (KES) *</label>
                <input
                  type="number"
                  placeholder="e.g., 500000"
                  required
                  value={newBranch.vaultFloat}
                  onChange={(e) =>
                    handleInputChange("vaultFloat", e.target.value)
                  }
                />
              </div>
              <div className="form-group">
                <label>Branch Telephone Connection</label>
                <input
                  placeholder="e.g., +254 20 700112"
                  value={newBranch.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Dedicated Routing Mail</label>
                <input
                  type="email"
                  placeholder="e.g., branchname@sacco.co.ke"
                  value={newBranch.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </div>
            </div>

            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "var(--text3)",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: 12,
              }}
            >
              Geographical Location Parameters
            </div>
            <div className="form-group full" style={{ marginBottom: 24 }}>
              <label>
                Physical Building, Street & Office Suite Mapping Address *
              </label>
              <textarea
                placeholder="e.g., 3rd Floor, Lake Basin Mall, Kisumu-Kakamega Highway"
                required
                value={newBranch.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
              />
            </div>

            <div
              className="flex gap8"
              style={{
                justifyContent: "flex-end",
                borderTop: "1px solid var(--border)",
                paddingTop: 16,
              }}
            >
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setTab("list")}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Authorize Node Provisioning →
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
