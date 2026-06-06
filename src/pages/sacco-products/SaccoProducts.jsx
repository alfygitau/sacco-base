import React, { useState } from "react";

export default function ProductsView() {
  const [selected, setSelected] = useState(["savings", "shares"]);
  const [tab, setTab] = useState("select");

  // Initial catalog state to allow additions
  const [productList, setProductList] = useState([
    { id: "savings", icon: "💵", name: "Savings Account", desc: "Regular savings with interest accrual", color: "#10b981", minBal: "500", intRate: "6.0", compound: "monthly", withLimit: "50000", openFee: "0", ledgerCode: "1001" },
    { id: "shares", icon: "📊", name: "Share Capital", desc: "Member equity and share contributions", color: "#3b82f6", minBal: "1000", intRate: "4.5", compound: "annually", withLimit: "0", openFee: "1000", ledgerCode: "3001" },
    { id: "fixed", icon: "🔒", name: "Fixed Deposit", desc: "Term deposits with fixed interest rates", color: "#f59e0b", minBal: "10000", intRate: "9.5", compound: "annually", withLimit: "0", openFee: "0", ledgerCode: "1002" },
    { id: "holiday", icon: "🌴", name: "Holiday Account", desc: "Targeted savings for holiday expenses", color: "#ec4899", minBal: "200", intRate: "5.0", compound: "quarterly", withLimit: "10000", openFee: "0", ledgerCode: "1004" },
    { id: "junior", icon: "🎓", name: "Junior Savings", desc: "Child savings and education fund", color: "#7c3aed", minBal: "500", intRate: "7.0", compound: "monthly", withLimit: "5000", openFee: "100", ledgerCode: "1005" },
    { id: "current", icon: "💳", name: "Current Account", desc: "Transactional account with overdraft", color: "#64748b", minBal: "2000", intRate: "0.0", compound: "monthly", withLimit: "100000", openFee: "500", ledgerCode: "1003" },
  ]);

  // Form State for creating custom account types
  const [newProduct, setNewProduct] = useState({
    name: "",
    desc: "",
    icon: "💰",
    color: "#3b82f6",
    minBal: "0",
    intRate: "0.0",
    compound: "monthly",
    withLimit: "",
    openFee: "0",
    ledgerCode: ""
  });

  const toggle = id => setSelected(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);

  const handleInputChange = (field, value) => {
    setNewProduct(prev => ({ ...prev, [field]: value }));
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.desc) return;

    const generatedId = newProduct.name.toLowerCase().replace(/\s+/g, "-");
    const formattedProduct = {
      ...newProduct,
      id: generatedId
    };

    setProductList(prev => [...prev, formattedProduct]);
    setSelected(prev => [...prev, generatedId]); // Auto-enable newly added product
    setTab("select"); // Route back to product inventory catalog
    
    // Reset Form Input State
    setNewProduct({
      name: "",
      desc: "",
      icon: "💰",
      color: "#3b82f6",
      minBal: "0",
      intRate: "0.0",
      compound: "monthly",
      withLimit: "",
      openFee: "0",
      ledgerCode: ""
    });
  };

  return (
    <div>
      <div className="section-head">
        <div className="section-head-info">
          <div className="section-title">Account Products</div>
          <div className="section-desc">Configure savings and deposit products for each SACCO</div>
        </div>
        <div className="flex gap8">
          <button className="btn btn-primary">Save Products</button>
        </div>
      </div>

      <div className="tabs">
        {["select", "configure", "add"].map(t => (
          <div key={t} className={`tab ${tab === t ? "active" : ""}`} onClick={() => setTab(t)}>
            {{ select: "Select Products", configure: "Configure Details", add: "Add Custom Product" }[t]}
          </div>
        ))}
      </div>

      {tab === "select" && (
        <>
          <div className="notif" style={{ background: "rgba(16,185,129,0.08)", borderColor: "rgba(16,185,129,0.2)" }}>
            <span className="notif-icon">✅</span>
            <div className="notif-text">{selected.length} products selected. Click on a product to toggle it on or off.</div>
          </div>
          <div className="product-cards">
            {productList.map(p => (
              <div key={p.id} className={`product-card ${selected.includes(p.id) ? "selected" : ""}`} onClick={() => toggle(p.id)}>
                <div className="product-card-icon" style={{ background: selected.includes(p.id) ? `${p.color}20` : "var(--bg3)" }}>
                  {p.icon}
                </div>
                <div className="product-card-name">{p.name}</div>
                <div className="product-card-desc">{p.desc}</div>
                {selected.includes(p.id) && (
                  <div className="flex items-center gap8 mt12">
                    <span style={{ color: "var(--green)", fontSize: 12 }}>✓</span>
                    <span style={{ fontSize: 12, color: "var(--green)", fontWeight: 500 }}>Enabled</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {tab === "configure" && (
        <div className="flex flex-col gap16">
          {productList.filter(p => selected.includes(p.id)).map(p => (
            <div key={p.id} className="card">
              <div className="flex items-center gap12" style={{ marginBottom: 20 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${p.color}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{p.icon}</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15 }}>{p.name}</div>
                  <div style={{ fontSize: 12, color: "var(--text3)" }}>{p.desc}</div>
                </div>
              </div>
              <div className="form-grid-3">
                <div className="form-group">
                  <label>Minimum Balance (KES)</label>
                  <input placeholder="e.g. 500" type="number" defaultValue={p.minBal} />
                </div>
                <div className="form-group">
                  <label>Interest Rate (% p.a.)</label>
                  <input placeholder="e.g. 6.0" type="number" step="0.1" defaultValue={p.intRate} />
                </div>
                <div className="form-group">
                  <label>Compounding</label>
                  <select defaultValue={p.compound}>
                    <option value="daily">Daily</option>
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                    <option value="annually">Annually</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Withdrawal Limit (per day)</label>
                  <input placeholder="e.g. 50000" type="number" defaultValue={p.withLimit} />
                </div>
                <div className="form-group">
                  <label>Opening Fee (KES)</label>
                  <input placeholder="0.00" type="number" defaultValue={p.openFee} />
                </div>
                <div className="form-group">
                  <label>Ledger Account Code</label>
                  <input placeholder="e.g. 1001" defaultValue={p.ledgerCode} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === "add" && (
        <div className="card">
          <div className="card-title" style={{ fontSize: 16, marginBottom: 4 }}>Create Custom Account Type</div>
          <div className="card-sub" style={{ marginBottom: 24 }}>Add specialized localized accounts like Agrisave, Chama accounts, etc.</div>
          
          <form onSubmit={handleAddProduct}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 14 }}>Visual Identity</div>
            <div className="form-grid" style={{ marginBottom: 24 }}>
              <div className="form-group">
                <label>Display Icon (Emoji)</label>
                <select value={newProduct.icon} onChange={e => handleInputChange("icon", e.target.value)}>
                  <option value="💰">💰 Money Bag</option>
                  <option value="🤝">🤝 Chama / Group</option>
                  <option value="🚜">🚜 Agribusiness</option>
                  <option value="🏢">🏢 Corporate Asset</option>
                  <option value="📈">📈 High Yield</option>
                  <option value="🐖">🐖 Livestock Fund</option>
                </select>
              </div>
              <div className="form-group">
                <label>Brand Indicator Accent Color</label>
                <select value={newProduct.color} onChange={e => handleInputChange("color", e.target.value)}>
                  <option value="#3b82f6">System Blue</option>
                  <option value="#10b981">System Green</option>
                  <option value="#7c3aed">Premium Purple</option>
                  <option value="#f59e0b">Gold Accent</option>
                  <option value="#ec4899">Holiday Pink</option>
                </select>
              </div>
            </div>

            <div style={{ fontSize: 12, fontWeight: 600, color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 14 }}>Core Description</div>
            <div className="form-grid" style={{ marginBottom: 24 }}>
              <div className="form-group">
                <label>Product Name *</label>
                <input placeholder="e.g. Chama Special Account" required value={newProduct.name} onChange={e => handleInputChange("name", e.target.value)} />
              </div>
              <div className="form-group">
                <label>Ledger Accounting Code *</label>
                <input placeholder="e.g. 1009" required value={newProduct.ledgerCode} onChange={e => handleInputChange("ledgerCode", e.target.value)} />
              </div>
              <div className="form-group full">
                <label>Short Subtitle Description *</label>
                <input placeholder="e.g. Group deposits with specialized target locks" required value={newProduct.desc} onChange={e => handleInputChange("desc", e.target.value)} />
              </div>
            </div>

            <div style={{ fontSize: 12, fontWeight: 600, color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 14 }}>Financial Parameters & Limits</div>
            <div className="form-grid-3" style={{ marginBottom: 24 }}>
              <div className="form-group">
                <label>Minimum Balance (KES)</label>
                <input type="number" value={newProduct.minBal} onChange={e => handleInputChange("minBal", e.target.value)} />
              </div>
              <div className="form-group">
                <label>Interest Yield (% p.a.)</label>
                <input type="number" step="0.1" value={newProduct.intRate} onChange={e => handleInputChange("intRate", e.target.value)} />
              </div>
              <div className="form-group">
                <label>Compounding Cycle</label>
                <select value={newProduct.compound} onChange={e => handleInputChange("compound", e.target.value)}>
                  <option value="daily">Daily</option>
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="annually">Annually</option>
                </select>
              </div>
              <div className="form-group">
                <label>Daily Withdrawal Cap</label>
                <input type="number" placeholder="No limit" value={newProduct.withLimit} onChange={e => handleInputChange("withLimit", e.target.value)} />
              </div>
              <div className="form-group">
                <label>Opening Setup Fee</label>
                <input type="number" value={newProduct.openFee} onChange={e => handleInputChange("openFee", e.target.value)} />
              </div>
            </div>

            <hr className="divider" />
            <div className="flex gap8" style={{ justifyContent: "flex-end" }}>
              <button type="button" className="btn btn-ghost" onClick={() => setTab("select")}>Cancel</button>
              <button type="submit" className="btn btn-primary">Inject Product Profile</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}