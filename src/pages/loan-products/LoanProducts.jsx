import React, { useState } from "react";

export default function LoansView() {
  const [tab, setTab] = useState("list");
  const [loans] = useState([
    {
      id: 1,
      name: "Normal Loan",
      code: "NRM001",
      minAmt: 5000,
      maxAmt: 500000,
      rate: 12,
      method: "Reducing Balance",
      period: 48,
      guarantors: 2,
      multiplier: "3x savings",
    },
    {
      id: 2,
      name: "Emergency Loan",
      code: "EMG002",
      minAmt: 1000,
      maxAmt: 50000,
      rate: 8,
      method: "Flat Rate",
      period: 12,
      guarantors: 0,
      multiplier: "Instant Approval",
    },
    {
      id: 3,
      name: "Development Loan",
      code: "DEV003",
      minAmt: 50000,
      maxAmt: 3000000,
      rate: 15,
      method: "Reducing Balance",
      period: 84,
      guarantors: 3,
      multiplier: "4x savings",
    },
    {
      id: 4,
      name: "School Fees Loan",
      code: "SCH004",
      minAmt: 5000,
      maxAmt: 200000,
      rate: 10,
      method: "Reducing Balance",
      period: 12,
      guarantors: 1,
      multiplier: "3x savings",
    },
    {
      id: 5,
      name: "Asset Financing Loan",
      code: "AST005",
      minAmt: 100000,
      maxAmt: 5000000,
      rate: 13.5,
      method: "Reducing Balance",
      period: 60,
      guarantors: 2,
      multiplier: "Logbook/Title Deed alternative",
    },
    {
      id: 6,
      name: "M-Sacco Mobile Loan",
      code: "MOB006",
      minAmt: 500,
      maxAmt: 30000,
      rate: 5,
      method: "Flat Rate",
      period: 1,
      guarantors: 0,
      multiplier: "Based on savings history",
    },
    {
      id: 7,
      name: "Agribusiness Loan",
      code: "AGR007",
      minAmt: 10000,
      maxAmt: 1000000,
      rate: 11,
      method: "Reducing Balance",
      period: 36,
      guarantors: 2,
      multiplier: "Seasonal repayment options",
    },
    {
      id: 8,
      name: "Jiinue Biashara Loan",
      code: "BSN008",
      minAmt: 30000,
      maxAmt: 1500000,
      rate: 14,
      method: "Reducing Balance",
      period: 24,
      guarantors: 3,
      multiplier: "2x savings + business inspection",
    },
    {
      id: 9,
      name: "Check-Off Loan",
      code: "CHF009",
      minAmt: 50000,
      maxAmt: 4000000,
      rate: 10.5,
      method: "Reducing Balance",
      period: 72,
      guarantors: 0,
      multiplier: "Employer MOU required",
    },
    {
      id: 10,
      name: "Medical Cover Loan",
      code: "MED010",
      minAmt: 5000,
      maxAmt: 150000,
      rate: 7.5,
      method: "Flat Rate",
      period: 6,
      guarantors: 1,
      multiplier: "Direct payment to facility",
    },
  ]);

  return (
    <div>
      <div className="section-head">
        <div className="section-head-info">
          <div className="section-title">Loan Products</div>
          <div className="section-desc">
            Define loan types, limits, rates, and eligibility rules
          </div>
        </div>
        <button className="btn btn-primary" onClick={() => setTab("add")}>
          + Add Loan Product
        </button>
      </div>

      <div className="tabs">
        {["list", "add"].map((t) => (
          <div
            key={t}
            className={`tab ${tab === t ? "active" : ""}`}
            onClick={() => setTab(t)}
          >
            {{ list: "All Loan Products", add: "New Loan Product" }[t]}
          </div>
        ))}
      </div>

      {tab === "list" && (
        <div className="card" style={{ padding: 0 }}>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Product Details</th>
                  <th>Min Amount</th>
                  <th>Max Amount</th>
                  <th>Interest Rate</th>
                  <th>Max Term</th>
                  <th>Requirements</th>
                  <th style={{ textAlign: "right" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {loans.map((l) => (
                  <tr key={l.id}>
                    <td>
                      <div>
                        <div
                          style={{
                            fontWeight: 600,
                            fontSize: 14,
                            color: "var(--text1)",
                          }}
                        >
                          {l.name}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            gap: "6px",
                            alignItems: "center",
                            marginTop: 4,
                          }}
                        >
                          <code
                            style={{
                              fontSize: 11,
                              background: "var(--bg4)",
                              padding: "1px 6px",
                              borderRadius: 4,
                              color: "var(--accent2)",
                            }}
                          >
                            {l.code}
                          </code>
                          <span style={{ fontSize: 12, color: "var(--text3)" }}>
                            {l.method}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div style={{ color: "var(--text1)", fontWeight: 500 }}>
                        KES {l.minAmt.toLocaleString()}
                      </div>
                    </td>
                    <td>
                      <div style={{ color: "var(--text1)", fontWeight: 500 }}>
                        KES {l.maxAmt.toLocaleString()}
                      </div>
                    </td>
                    <td>
                      <div>
                        <span
                          style={{
                            fontWeight: 600,
                            color: "var(--accent2)",
                            fontSize: 14,
                          }}
                        >
                          {l.rate}%{" "}
                          <span
                            style={{
                              fontSize: 11,
                              color: "var(--text3)",
                              fontWeight: 400,
                            }}
                          >
                            p.a.
                          </span>
                        </span>
                      </div>
                    </td>
                    <td>
                      <div style={{ color: "var(--text2)" }}>
                        {l.period} months
                      </div>
                    </td>
                    <td>
                      <div>
                        <div style={{ fontSize: 13, color: "var(--text2)" }}>
                          {l.guarantors === 0 ? (
                            <span style={{ color: "var(--green)" }}>
                              No guarantors
                            </span>
                          ) : (
                            `${l.guarantors} guarantor${l.guarantors !== 1 ? "s" : ""}`
                          )}
                        </div>
                        <div
                          style={{
                            fontSize: 11,
                            color: "var(--text3)",
                            marginTop: 2,
                          }}
                        >
                          {l.multiplier}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div
                        className="flex gap8"
                        style={{ justifyContent: "flex-end" }}
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
            New Loan Product
          </div>
          <div className="card-sub" style={{ marginBottom: 24 }}>
            Define the terms and conditions for a new loan type
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
            Basic Details
          </div>
          <div className="form-grid">
            <div className="form-group">
              <label>Loan Product Name *</label>
              <input placeholder="e.g. Normal Loan" />
            </div>
            <div className="form-group">
              <label>Product Code</label>
              <input placeholder="e.g. NRM001" />
            </div>
            <div className="form-group full">
              <label>Description</label>
              <textarea placeholder="Brief description of this loan product…" />
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
            Loan Limits & Rates
          </div>
          <div className="form-grid">
            <div className="form-group">
              <label>Minimum Amount (KES) *</label>
              <input placeholder="5000" type="number" />
            </div>
            <div className="form-group">
              <label>Maximum Amount (KES) *</label>
              <input placeholder="500000" type="number" />
            </div>
            <div className="form-group">
              <label>Interest Rate (% p.a.) *</label>
              <input placeholder="12.0" type="number" step="0.1" />
            </div>
            <div className="form-group">
              <label>Interest Method</label>
              <select>
                <option>Reducing Balance</option>
                <option>Flat Rate</option>
              </select>
            </div>
            <div className="form-group">
              <label>Minimum Period (months)</label>
              <input placeholder="1" type="number" />
            </div>
            <div className="form-group">
              <label>Maximum Period (months)</label>
              <input placeholder="48" type="number" />
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
            Eligibility & Guarantors
          </div>
          <div className="form-grid">
            <div className="form-group">
              <label>Minimum Membership Period (months)</label>
              <input placeholder="3" type="number" />
            </div>
            <div className="form-group">
              <label>Number of Guarantors Required</label>
              <input placeholder="2" type="number" />
            </div>
            <div className="form-group">
              <label>Savings-to-Loan Multiplier</label>
              <input placeholder="e.g. 3 (3x savings)" type="number" />
            </div>
            <div className="form-group">
              <label>Processing Fee (%)</label>
              <input placeholder="1.5" type="number" step="0.1" />
            </div>
            <div className="form-group">
              <label>Insurance Fee (%)</label>
              <input placeholder="0.5" type="number" step="0.1" />
            </div>
          </div>

          <hr className="divider" />
          <div className="flex gap8" style={{ justifyContent: "flex-end" }}>
            <button className="btn btn-ghost" onClick={() => setTab("list")}>
              Cancel
            </button>
            <button className="btn btn-primary">Create Loan Product →</button>
          </div>
        </div>
      )}
    </div>
  );
}
