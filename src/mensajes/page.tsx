"use client";
import { useState } from "react";

export default function MensajesContacto() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEnviando(true);
    setError("");
    setEnviado(false);
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, mensaje }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Error al enviar el mensaje");
      } else {
        setEnviado(true);
        setNombre("");
        setEmail("");
        setMensaje("");
      }
    } catch (err) {
      setError("Error de red o del servidor");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <div style={{ minHeight: "100vh", background: "#181b23", color: "#ffe082", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <form onSubmit={handleSubmit} style={{ background: "#20222c", borderRadius: 18, padding: 32, boxShadow: '0 2px 12px 0 #ffe08211', minWidth: 350, maxWidth: 400, width: "100%" }}>
        <h2 style={{ fontWeight: 700, fontSize: '2rem', marginBottom: 24, color: '#ffe082', textAlign: 'center' }}>Envíanos un Mensaje</h2>
        <div style={{ marginBottom: 18 }}>
          <label style={{ color: '#ffe082', fontWeight: 500, marginBottom: 6, display: 'block' }}>Nombre</label>
          <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} required placeholder="Tu nombre" style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: 'none', background: '#2c3040', color: '#ffe082', fontSize: '1rem', outline: 'none' }} />
        </div>
        <div style={{ marginBottom: 18 }}>
          <label style={{ color: '#ffe082', fontWeight: 500, marginBottom: 6, display: 'block' }}>Email</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="tu@email.com" style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: 'none', background: '#2c3040', color: '#ffe082', fontSize: '1rem', outline: 'none' }} />
        </div>
        <div style={{ marginBottom: 18 }}>
          <label style={{ color: '#ffe082', fontWeight: 500, marginBottom: 6, display: 'block' }}>Mensaje</label>
          <textarea rows={5} value={mensaje} onChange={e => setMensaje(e.target.value)} required placeholder="Cuéntanos en qué podemos ayudarte..." style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: 'none', background: '#2c3040', color: '#ffe082', fontSize: '1rem', outline: 'none', resize: 'vertical' }} />
        </div>
        <button type="submit" disabled={enviando} style={{ width: '100%', background: '#ffe082', color: '#232532', fontWeight: 700, fontSize: '1.1rem', border: 'none', borderRadius: 10, padding: '14px 0', marginTop: 8, boxShadow: '0 2px 18px 0 #ffe08233', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, cursor: enviando ? 'not-allowed' : 'pointer', opacity: enviando ? 0.7 : 1 }}>
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M2 21l21-9-9 21-2-8-8-2z" stroke="#232532" strokeWidth="2" strokeLinejoin="round"/></svg>
          {enviando ? "Enviando..." : "Enviar Mensaje"}
        </button>
        {enviado && <div style={{ color: '#4caf50', marginTop: 16, textAlign: 'center', fontWeight: 600 }}>¡Mensaje enviado correctamente!</div>}
        {error && <div style={{ color: '#ff5252', marginTop: 16, textAlign: 'center', fontWeight: 600 }}>{error}</div>}
      </form>
    </div>
  );
}
