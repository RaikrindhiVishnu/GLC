"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { mailService } from "../../../services/mail";

export default function MailComposePage() {
  const [formData, setFormData] = useState({
    to: "",
    cc: "",
    subject: "",
    body: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendMail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.to || !formData.subject || !formData.body) {
      setError("To, Subject, and Body are required fields.");
      setSuccess("");
      return;
    }
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const toArray = formData.to.split(",").map((email) => email.trim()).filter(Boolean);
      const ccArray = formData.cc ? formData.cc.split(",").map((email) => email.trim()).filter(Boolean) : [];

      await mailService.sendMail({
        to_mails: toArray,
        cc_mails: ccArray,
        Subject: formData.subject,
        Body: formData.body,
      });

      setSuccess("Email sent successfully!");
      setFormData({ to: "", cc: "", subject: "", body: "" });
    } catch (err: any) {
      setError(err.message || "Failed to send email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    boxSizing: "border-box",
    width: "100%",
    background: "#FFFFFF",
    border: "1px solid #D3DEEA",
    borderRadius: "16px",
    padding: "16px 20px",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: "15px",
    color: "#191C1D",
    outline: "none",
    transition: "border 0.3s ease",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: 700,
    fontSize: "12px",
    color: "#45474C",
    textTransform: "uppercase",
    marginBottom: "8px",
    display: "block",
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4 lg:px-8 py-12 lg:py-16 box-border flex flex-col gap-10">
      
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 4vw, 42px)", color: "#0F2F4C", letterSpacing: "-1px" }}>
          Compose Mail
        </h1>
        <p style={{ marginTop: "8px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "16px", color: "#45474C" }}>
          Send secure, general-purpose communications directly through the GLC infrastructure.
        </p>
      </motion.div>

      {/* COMPOSE FORM */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{ background: "#F7F8F8", borderRadius: "32px", padding: "40px", boxShadow: "0px 20px 40px rgba(9,20,38,0.03)" }}
      >
        <form onSubmit={handleSendMail} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* To Mails */}
            <div>
              <label style={labelStyle}>To (Comma separated)</label>
              <input
                type="text"
                name="to"
                value={formData.to}
                onChange={handleInputChange}
                placeholder="recipient1@example.com, recipient2@example.com"
                style={inputStyle}
              />
            </div>

            {/* CC Mails */}
            <div>
              <label style={labelStyle}>CC (Comma separated)</label>
              <input
                type="text"
                name="cc"
                value={formData.cc}
                onChange={handleInputChange}
                placeholder="cc@example.com"
                style={inputStyle}
              />
            </div>

            {/* Subject */}
            <div>
              <label style={labelStyle}>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Enter email subject"
                style={inputStyle}
              />
            </div>

            {/* Body */}
            <div>
              <label style={labelStyle}>Message Body (HTML supported)</label>
              <textarea
                name="body"
                value={formData.body}
                onChange={handleInputChange}
                placeholder="<h1>Hello</h1><p>Type your message here...</p>"
                style={{ ...inputStyle, minHeight: "200px", resize: "vertical" }}
              />
            </div>
          </div>

          {error && (
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "14px", color: "#E02424", margin: 0 }}>
              {error}
            </p>
          )}

          {success && (
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "14px", color: "#046C4E", margin: 0 }}>
              {success}
            </p>
          )}

          {/* Action Footer */}
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "16px" }}>
            <button
              type="submit"
              disabled={loading}
              style={{
                background: "radial-gradient(50% 50% at 50% 50%, #2780C4 0%, #164573 100%)",
                border: "1px solid #43B6CD",
                borderRadius: "9999px",
                padding: "16px 48px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                color: "#FFFFFF",
                cursor: loading ? "not-allowed" : "pointer",
                opacity: loading ? 0.7 : 1,
                boxShadow: "0px 10px 20px rgba(9,20,38,0.1)",
                transition: "opacity 0.2s ease"
              }}
            >
              {loading ? "Sending Mail..." : "Send Mail"}
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
