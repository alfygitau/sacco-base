import React, { useState } from "react";
import { MOCK_SACCOS } from "../../constants/saccos";
import { statusColor } from "../../constants/themes";

export default function AdminsView() {
  const [tab, setTab] = useState("list");
  const admins = [
    {
      id: 1,
      name: "James Kariuki",
      email: "j.kariuki@elimu.co.ke",
      role: "Super Admin",
      sacco: "Elimu Sacco",
      status: "active",
      lastLogin: "2 hrs ago",
    },
    {
      id: 2,
      name: "Grace Wanjiku",
      email: "g.wanjiku@afyabora.co.ke",
      role: "Admin",
      sacco: "Afya Bora Sacco",
      status: "active",
      lastLogin: "1 day ago",
    },
    {
      id: 3,
      name: "Peter Otieno",
      email: "p.otieno@wakulima.co.ke",
      role: "Admin",
      sacco: "Wakulima Sacco",
      status: "pending",
      lastLogin: "Never",
    },
    {
      id: 4,
      name: "Amina Hassan",
      email: "a.hassan@imara.co.ke",
      role: "Viewer",
      sacco: "Imara Sacco",
      status: "inactive",
      lastLogin: "1 week ago",
    },
    {
      id: 5,
      name: "David Kiprop",
      email: "d.kiprop@nguvu.co.ke",
      role: "Credit Officer",
      sacco: "Nguvu Sacco",
      status: "active",
      lastLogin: "10 mins ago",
    },
    {
      id: 6,
      name: "Lucy Nyambura",
      email: "l.nyambura@hazina.co.ke",
      role: "Super Admin",
      sacco: "Hazina Sacco",
      status: "active",
      lastLogin: "5 mins ago",
    },
    {
      id: 7,
      name: "Emmanuel Omwamba",
      email: "e.omwamba@mwalimu.co.ke",
      role: "Credit Officer",
      sacco: "Mwalimu National Sacco",
      status: "active",
      lastLogin: "3 days ago",
    },
    {
      id: 8,
      name: "Faith Mutua",
      email: "f.mutua@chamastars.co.ke",
      role: "Admin",
      sacco: "Chama Stars Sacco",
      status: "pending",
      lastLogin: "Never",
    },
    {
      id: 9,
      name: "Ahmed Mohammed",
      email: "a.mohammed@asalinyuki.co.ke",
      role: "Teller",
      sacco: "Asali Nyuki Sacco",
      status: "inactive",
      lastLogin: "3 weeks ago",
    },
    {
      id: 10,
      name: "Beatrice Kwamboka",
      email: "b.kwamboka@sukariwest.co.ke",
      role: "Teller",
      sacco: "Sukari West Sacco",
      status: "active",
      lastLogin: "5 hrs ago",
    },
  ];
  const roles = ["Super Admin", "Admin", "Credit Officer", "Teller", "Viewer"];

  return (
    <div>
      <div className="section-head">
        <div className="section-head-info">
          <div className="section-title">Admins & Users</div>
          <div className="section-desc">
            Manage administrators for each SACCO organization
          </div>
        </div>
        <button className="btn btn-primary" onClick={() => setTab("add")}>
          + Invite Admin
        </button>
      </div>

      <div className="tabs">
        {["list", "add", "roles"].map((t) => (
          <div
            key={t}
            className={`tab ${tab === t ? "active" : ""}`}
            onClick={() => setTab(t)}
          >
            {
              {
                list: "All Admins",
                add: "Invite Admin",
                roles: "Roles & Permissions",
              }[t]
            }
          </div>
        ))}
      </div>

      {tab === "list" && (
        <div className="card" style={{ padding: 0 }}>
          <div
            style={{
              padding: "16px 20px",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <input placeholder="Search admins…" style={{ width: 260 }} />
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>SACCO</th>
                  <th>Last Login</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {admins.map((a) => (
                  <tr key={a.id}>
                    <td>
                      <div className="flex items-center gap8">
                        <div
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: "50%",
                            background:
                              "linear-gradient(135deg,#7c3aed,#3b82f6)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 12,
                            color: "#fff",
                            fontWeight: 600,
                          }}
                        >
                          {a.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        {a.name}
                      </div>
                    </td>
                    <td style={{ color: "var(--text3)" }}>{a.email}</td>
                    <td>
                      <span
                        className="badge"
                        style={{
                          background:
                            a.role === "Super Admin" ? "#EEEDFE" : "var(--bg4)",
                          color:
                            a.role === "Super Admin"
                              ? "#3C3489"
                              : "var(--text2)",
                          border: "1px solid var(--border)",
                        }}
                      >
                        {a.role}
                      </span>
                    </td>
                    <td>{a.sacco}</td>
                    <td style={{ color: "var(--text3)", fontSize: 12 }}>
                      {a.lastLogin}
                    </td>
                    <td>
                      <span
                        className="badge"
                        style={{
                          background: statusColor[a.status].bg,
                          color: statusColor[a.status].text,
                        }}
                      >
                        <span
                          className="badge-dot"
                          style={{ background: statusColor[a.status].dot }}
                        ></span>
                        {a.status}
                      </span>
                    </td>
                    <td>
                      <div className="flex gap8">
                        <button className="btn btn-ghost btn-sm">Edit</button>
                        <button className="btn btn-danger btn-sm">
                          Remove
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
            Invite New Admin
          </div>
          <div className="card-sub" style={{ marginBottom: 24 }}>
            Send an invitation to a new admin for a SACCO organization
          </div>
          <div className="form-grid">
            <div className="form-group">
              <label>First Name *</label>
              <input placeholder="James" />
            </div>
            <div className="form-group">
              <label>Last Name *</label>
              <input placeholder="Kariuki" />
            </div>
            <div className="form-group">
              <label>Email Address *</label>
              <input placeholder="james@sacco.co.ke" type="email" />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input placeholder="+254 700 000000" />
            </div>
            <div className="form-group">
              <label>SACCO Organization *</label>
              <select>
                <option value="">Select SACCO</option>
                {MOCK_SACCOS.map((s) => (
                  <option key={s.id}>{s.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Role *</label>
              <select>
                <option value="">Select Role</option>
                {roles.map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
            </div>
          </div>
          <hr className="divider" />
          <div className="flex gap8" style={{ justifyContent: "flex-end" }}>
            <button className="btn btn-ghost" onClick={() => setTab("list")}>
              Cancel
            </button>
            <button className="btn btn-primary">Send Invitation →</button>
          </div>
        </div>
      )}

      {tab === "roles" && (
        <div className="grid-2">
          {roles.map((r) => {
            const perms = {
              "Super Admin": [
                "Manage Organizations",
                "Manage Admins",
                "Configure Products",
                "View Reports",
                "Manage Loans",
                "System Settings",
              ],
              Admin: [
                "Manage Members",
                "Configure Products",
                "View Reports",
                "Manage Loans",
              ],
              "Credit Officer": [
                "View Members",
                "Manage Loans",
                "View Reports",
              ],
              Teller: ["View Members", "Process Transactions"],
              Viewer: ["View Reports", "View Members"],
            };
            return (
              <div key={r} className="card card-sm">
                <div
                  className="flex justify-between items-center"
                  style={{ marginBottom: 12 }}
                >
                  <div className="card-title" style={{ fontSize: 14 }}>
                    {r}
                  </div>
                  <button className="btn btn-ghost btn-sm">Edit</button>
                </div>
                <div className="flex flex-col gap8">
                  {perms[r].map((p) => (
                    <div
                      key={p}
                      className="flex items-center gap8"
                      style={{ fontSize: 13, color: "var(--text2)" }}
                    >
                      <span style={{ color: "var(--green)", fontSize: 12 }}>
                        ✓
                      </span>{" "}
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
