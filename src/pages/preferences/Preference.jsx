import React, { useState } from "react";
import { MOCK_SACCOS } from "../../constants/saccos";

export default function PreferencesView() {
  const [toggles, setToggles] = useState({
    sms: true,
    email: true,
    push: true,
    mpesa: true,
    bank: true,
    pesalink: false,
    autoApprove: false,
    bulkLoans: false,
    selfService: true,
    mfa: true,
    pinReset: true,
    biometric: true,
    dividends: true,
    agm: false,
    eMobile: true,
  });
  const tog = (k) => setToggles((t) => ({ ...t, [k]: !t[k] }));

  const sections = [
    {
      title: "Notifications",
      icon: "🔔",
      items: [
        {
          k: "sms",
          label: "SMS Notifications",
          desc: "Send SMS alerts for transactions and updates",
        },
        {
          k: "email",
          label: "Email Notifications",
          desc: "Send email summaries and statements",
        },
        {
          k: "push",
          label: "Push Notifications",
          desc: "In-app push alerts on mobile",
        },
      ],
    },
    {
      title: "Payment Integrations",
      icon: "💳",
      items: [
        {
          k: "mpesa",
          label: "M-Pesa Integration",
          desc: "Enable M-Pesa deposits and withdrawals",
        },
        {
          k: "bank",
          label: "Bank Transfer",
          desc: "Allow direct bank transfers (EFT/RTGS)",
        },
        {
          k: "pesalink",
          label: "PesaLink",
          desc: "Enable PesaLink interbank transfers",
        },
      ],
    },
    {
      title: "Loan Workflow",
      icon: "📋",
      items: [
        {
          k: "autoApprove",
          label: "Auto-Approve Small Loans",
          desc: "Automatically approve loans below KES 10,000",
        },
        {
          k: "bulkLoans",
          label: "Bulk Loan Disbursement",
          desc: "Allow batch processing of multiple loans",
        },
        {
          k: "selfService",
          label: "Member Self-Service Apply",
          desc: "Members can apply for loans via the app",
        },
      ],
    },
    {
      title: "Security",
      icon: "🔐",
      items: [
        {
          k: "mfa",
          label: "Multi-Factor Authentication",
          desc: "Require MFA for admin logins",
        },
        {
          k: "pinReset",
          label: "Self-Service PIN Reset",
          desc: "Members can reset PIN via mobile",
        },
        {
          k: "biometric",
          label: "Biometric Login",
          desc: "Allow fingerprint/face ID login",
        },
      ],
    },
    {
      title: "Member Features",
      icon: "👥",
      items: [
        {
          k: "dividends",
          label: "Dividend Payments",
          desc: "Enable annual dividend distributions",
        },
        {
          k: "agm",
          label: "AGM Voting",
          desc: "Allow electronic voting in AGM",
        },
        {
          k: "eMobile",
          label: "E-Statement",
          desc: "Provide digital account statements",
        },
      ],
    },
  ];

  return (
    <div>
      <div className="section-head">
        <div className="section-head-info">
          <div className="section-title">Preferences</div>
          <div className="section-desc">
            Configure operational settings for each SACCO
          </div>
        </div>
        <button className="btn btn-primary">Save Preferences</button>
      </div>

      <div className="form-group" style={{ marginBottom: 24, maxWidth: 300 }}>
        <label>Configure For</label>
        <select>
          <option>— Apply to all SACCOs —</option>
          {MOCK_SACCOS.map((s) => (
            <option key={s.id}>{s.name}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap16">
        {sections.map((sec) => (
          <div key={sec.title} className="card">
            <div
              className="flex items-center gap8"
              style={{ marginBottom: 16 }}
            >
              <span style={{ fontSize: 18 }}>{sec.icon}</span>
              <div className="card-title">{sec.title}</div>
            </div>
            {sec.items.map(({ k, label, desc }) => (
              <div key={k} className="toggle-row">
                <div>
                  <div className="toggle-label">{label}</div>
                  <div className="toggle-desc">{desc}</div>
                </div>
                <div
                  className={`toggle ${toggles[k] ? "on" : ""}`}
                  onClick={() => tog(k)}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="card" style={{ marginTop: 20 }}>
        <div className="card-title" style={{ marginBottom: 4 }}>
          System Parameters
        </div>
        <div className="card-sub" style={{ marginBottom: 20 }}>
          General system-wide configurations
        </div>
        <div className="form-grid">
          <div className="form-group">
            <label>Default Currency</label>
            <select defaultValue="KES">
              <option>KES — Kenyan Shilling</option>
              <option>USD</option>
              <option>UGX</option>
            </select>
          </div>
          <div className="form-group">
            <label>Financial Year End</label>
            <select defaultValue="December">
              <option>December</option>
              <option>March</option>
              <option>June</option>
            </select>
          </div>
          <div className="form-group">
            <label>Loan Repayment Day</label>
            <select>
              <option>Last working day</option>
              <option>1st of month</option>
              <option>15th of month</option>
            </select>
          </div>
          <div className="form-group">
            <label>Dormancy Period (months)</label>
            <input placeholder="6" type="number" defaultValue="6" />
          </div>
          <div className="form-group">
            <label>Default Statement Period</label>
            <select>
              <option>Monthly</option>
              <option>Quarterly</option>
              <option>Annually</option>
            </select>
          </div>
          <div className="form-group">
            <label>Minimum Share Capital (KES)</label>
            <input placeholder="1000" type="number" defaultValue="1000" />
          </div>
        </div>
      </div>
    </div>
  );
}
