const fs = require('fs');
const path = 'c:/Users/DELL/OneDrive/Desktop/GLC/src/app/home/unlockeddocuments/UnlockedDocsGrid.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace the card UI
const dossierGridComment = content.indexOf('{/* Dossier Grid */}');
if (dossierGridComment === -1) {
    console.log("Could not find {/* Dossier Grid */}");
    process.exit(1);
}

const cardStart = content.indexOf(') : farmlands.map((card, idx) => (', dossierGridComment);
const cardEnd = content.indexOf('))}</div>', cardStart);
if (cardStart === -1) {
    console.log("Could not find card UI start.");
    process.exit(1);
}

const newCardCode = `) : farmlands.map((card, idx) => (
                    <div
                      key={card.farmland_id}
                      style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "32px", gap: "24px", flexShrink: 0, width: "384px", height: "465px", background: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)", borderRadius: "32px", position: "relative" }}
                    >
                      {/* Container */}
                      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", padding: "0px", gap: "122px", width: "320px", height: "49px" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px", gap: "4px", width: "120px", height: "49px" }}>
                          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "25px", color: "#0F2F4C" }}>{card.farm_code || "GLC SOS 04"}</span>
                          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "0px", gap: "4px", width: "120px", height: "20px" }}>
                            <div style={{ width: "10.67px", height: "13.33px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <svg width="11" height="14" viewBox="0 0 24 24" fill="none" stroke="#45474C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            </div>
                            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", lineHeight: "20px", color: "#45474C", whiteSpace: "nowrap" }}>West Godavari</span>
                          </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "4px 12px", background: "#2780C4", borderRadius: "9999px" }}>
                          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", lineHeight: "15px", letterSpacing: "1px", textTransform: "uppercase", color: "#FFFFFF" }}>PREMIUM</span>
                        </div>
                      </div>

                      {/* Metrics */}
                      <div style={{ width: "320px", height: "79px", position: "relative" }}>
                        <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "16px", gap: "4px", position: "absolute", width: "152px", height: "79px", left: "0px", top: "0px", background: "#F3F4F5", borderRadius: "32px" }}>
                          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", lineHeight: "15px", letterSpacing: "0.5px", textTransform: "uppercase", color: "#75777D" }}>ACRES</span>
                          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "18px", lineHeight: "28px", color: "#0F2F4C" }}>200</span>
                        </div>
                        <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "16px", gap: "4px", position: "absolute", width: "152px", height: "79px", left: "168px", top: "0px", background: "#F3F4F5", borderRadius: "32px" }}>
                          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "10px", lineHeight: "15px", letterSpacing: "0.5px", textTransform: "uppercase", color: "#75777D" }}>VALUE</span>
                          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "18px", lineHeight: "28px", color: "#0F2F4C" }}>₹4.2Cr</span>
                        </div>
                      </div>

                      {/* Status */}
                      <div style={{ width: "320px", height: "68px", position: "relative" }}>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "0px", gap: "8px", position: "absolute", height: "24px", left: "0px", top: "8px" }}>
                          <div style={{ width: "12px", height: "13.33px", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="12" height="13" viewBox="0 0 24 24" fill="none" stroke="#00629E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></div>
                          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "12px", lineHeight: "16px", color: "#45474C", whiteSpace: "nowrap" }}>Unlocked Oct 12</span>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "0px", gap: "8px", position: "absolute", height: "24px", left: "166px", top: "8px" }}>
                          <div style={{ width: "13.33px", height: "13.33px", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#047857" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "12px", lineHeight: "16px", color: "#047857" }}>SAFE</span>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "0px", gap: "8px", position: "absolute", height: "24px", left: "0px", top: "44px" }}>
                          <div style={{ width: "14.67px", height: "14px", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="15" height="14" viewBox="0 0 24 24" fill="none" stroke="#00629E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></div>
                          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "12px", lineHeight: "16px", color: "#45474C" }}>Clear Title</span>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "0px", gap: "8px", position: "absolute", height: "24px", left: "166px", top: "44px" }}>
                          <div style={{ width: "11.33px", height: "11.33px", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#00629E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"></path></svg></div>
                          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "12px", lineHeight: "16px", color: "#45474C", whiteSpace: "nowrap" }}>Organic-Ready</span>
                        </div>
                      </div>

                      {/* Buttons */}
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "8px 0px 0px", gap: "12px", width: "320px", height: "133px" }}>
                        <button onClick={() => setSelectedDossier(card)} style={{ position: "relative", boxSizing: "border-box", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "16px 0px", width: "320px", height: "57px", background: "radial-gradient(50% 155.86% at 50% 50%, #2780C4 0%, #164573 100%)", borderRadius: "32px", border: "none", cursor: "pointer", boxShadow: "0px 4px 6px -1px rgba(9,20,38,0.2), 0px 2px 4px -2px rgba(9,20,38,0.2)" }}>
                          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "20px", textAlign: "center", color: "#FFFFFF", zIndex: 1 }}>Download Documents</span>
                        </button>
                        <button onClick={() => router.push("/search/farmlanddetails?id=match-1")} style={{ boxSizing: "border-box", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "16px 0px", gap: "8px", width: "320px", height: "56px", border: "2px solid rgba(197, 198, 205, 0.3)", borderRadius: "32px", background: "transparent", cursor: "pointer" }}>
                          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "20px", textAlign: "center", color: "#0F2F4C" }}>Book Site Visit</span>
                        </button>
                      </div>
                    </div>
                  ))}`;

content = content.substring(0, cardStart) + newCardCode + content.substring(content.indexOf('))}</div>', cardStart));

// Replace the modal with the inline grid
const inlineGridCode = `
                {selectedDossier && (
                  <div style={{ position: "relative", width: "1216px", marginTop: "32px", padding: "32px 0", borderTop: "1px dashed rgba(39, 128, 196, 0.3)" }}>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px"}}>
                        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "28px", color: "#0F2F4C", margin: 0 }}>
                        Document Available
                        </h2>
                        <button onClick={() => setSelectedDossier(null)} style={{ background: "transparent", border: "none", fontSize: "16px", fontWeight: "bold", color: "#0F2F4C", cursor: "pointer" }}>✕ Close</button>
                    </div>
                    
                    <div style={{ boxSizing: "border-box", position: "relative", width: "1184px", border: "2px solid rgba(39, 128, 196, 0.15)", borderRadius: "32px", display: "flex", flexWrap: "wrap", padding: "48px", gap: "32px", background: "rgba(238, 246, 255, 0.3)" }}>
                      
                      {/* Card 1: Legal Documents */}
                      <div style={{ position: "relative", width: "338px", height: "239px", background: "#FFFFFF", boxShadow: "0px 20px 60px rgba(0, 0, 0, 0.04)", borderRadius: "32px", padding: "32px" }}>
                        <div style={{ width: "64px", height: "64px", background: "#EEF6FF", borderRadius: "73px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "32px" }}>
                          <svg width="16" height="20" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                        </div>
                        <h3 style={{ margin: "0 0 8px 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "24px", color: "#0B1C30" }}>Legal Documents</h3>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", color: "rgba(66, 71, 79, 0.6)" }}>
                          <span>PDF</span>
                          <div style={{ width: "4px", height: "4px", background: "#C3C6D0", borderRadius: "9999px" }} />
                          <span>4.2 MB</span>
                          <div style={{ width: "4px", height: "4px", background: "#C3C6D0", borderRadius: "9999px" }} />
                          <span>Oct 12, 2023</span>
                        </div>
                      </div>

                      {/* Card 2: Asset Valuation */}
                      <div style={{ position: "relative", width: "338px", height: "239px", background: "#FFFFFF", boxShadow: "0px 20px 60px rgba(0, 0, 0, 0.04)", borderRadius: "32px", padding: "32px" }}>
                        <div style={{ width: "64px", height: "64px", background: "#EEF6FF", borderRadius: "73px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "32px" }}>
                          <svg width="22" height="15" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="2.5"><rect x="2" y="4" width="20" height="16" rx="2" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>
                        </div>
                        <h3 style={{ margin: "0 0 8px 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "24px", color: "#0B1C30" }}>Asset Valuation</h3>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", color: "rgba(66, 71, 79, 0.6)" }}>
                          <span>XLSX</span>
                          <div style={{ width: "4px", height: "4px", background: "#C3C6D0", borderRadius: "9999px" }} />
                          <span>1.8 MB</span>
                          <div style={{ width: "4px", height: "4px", background: "#C3C6D0", borderRadius: "9999px" }} />
                          <span>Jan 05, 2024</span>
                        </div>
                      </div>
                      
                      {/* Card 3: Agriculture Report */}
                      <div style={{ position: "relative", width: "338px", height: "239px", background: "#FFFFFF", boxShadow: "0px 20px 60px rgba(0, 0, 0, 0.04)", borderRadius: "32px", padding: "32px" }}>
                        <div style={{ width: "64px", height: "64px", background: "#EEF6FF", borderRadius: "73px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "32px" }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                        </div>
                        <h3 style={{ margin: "0 0 8px 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "24px", color: "#0B1C30" }}>Agriculture Report</h3>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", color: "rgba(66, 71, 79, 0.6)" }}>
                          <span>PDF</span>
                          <div style={{ width: "4px", height: "4px", background: "#C3C6D0", borderRadius: "9999px" }} />
                          <span>12.5 MB</span>
                          <div style={{ width: "4px", height: "4px", background: "#C3C6D0", borderRadius: "9999px" }} />
                          <span>Feb 14, 2024</span>
                        </div>
                      </div>

                      {/* Card 4: Local Intelligence */}
                      <div style={{ position: "relative", width: "338px", height: "239px", background: "#FFFFFF", boxShadow: "0px 20px 60px rgba(0, 0, 0, 0.04)", borderRadius: "32px", padding: "32px" }}>
                        <div style={{ width: "64px", height: "64px", background: "#EEF6FF", borderRadius: "73px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "32px" }}>
                          <svg width="21" height="16" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                        </div>
                        <h3 style={{ margin: "0 0 8px 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "24px", color: "#0B1C30" }}>Local Intelligence</h3>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", color: "rgba(66, 71, 79, 0.6)" }}>
                          <span>PDF</span>
                          <div style={{ width: "4px", height: "4px", background: "#C3C6D0", borderRadius: "9999px" }} />
                          <span>8.7 MB</span>
                          <div style={{ width: "4px", height: "4px", background: "#C3C6D0", borderRadius: "9999px" }} />
                          <span>Sep 30, 2023</span>
                        </div>
                      </div>

                      {/* Card 5: Land & Boundaries */}
                      <div style={{ position: "relative", width: "338px", height: "239px", background: "#FFFFFF", boxShadow: "0px 20px 60px rgba(0, 0, 0, 0.04)", borderRadius: "32px", padding: "32px" }}>
                        <div style={{ width: "64px", height: "64px", background: "#EEF6FF", borderRadius: "73px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "32px" }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2780C4" strokeWidth="2.5"><polygon points="1 6 1 22 12 18 23 22 23 6 12 2 1 6"></polygon><line x1="12" y1="2" x2="12" y2="18"></line></svg>
                        </div>
                        <h3 style={{ margin: "0 0 8px 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "24px", color: "#0B1C30" }}>Land & Boundaries</h3>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "16px", color: "rgba(66, 71, 79, 0.6)" }}>
                          <span>DWG / PDF</span>
                          <div style={{ width: "4px", height: "4px", background: "#C3C6D0", borderRadius: "9999px" }} />
                          <span>24.3 MB</span>
                          <div style={{ width: "4px", height: "4px", background: "#C3C6D0", borderRadius: "9999px" }} />
                          <span>Nov 20, 2023</span>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                )}
`;

const bannerStart = content.indexOf('{/* Conversion Banner */}');
content = content.substring(0, bannerStart) + inlineGridCode + '\n                <div style={{marginTop: "64px"}}></div>\n                ' + content.substring(bannerStart);

// Delete the modal code entirely
const modalStart = content.indexOf('{/* ─── SHARED DOSSIER MODAL ─── */}');
if (modalStart !== -1) {
    const modalEnd = content.indexOf('</div>\n  );\n}');
    if (modalEnd !== -1) {
        content = content.substring(0, modalStart) + content.substring(modalEnd);
    }
}

fs.writeFileSync(path, content, 'utf8');
console.log("Updated UnlockedDocsGrid.tsx successfully.");
