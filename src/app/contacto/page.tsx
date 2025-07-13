"use client";

import { useState } from "react";

export default function Contacto() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("Consulta sobre productos");
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
        body: JSON.stringify({ nombre, email, mensaje: asunto + ": " + mensaje }),
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
    <div style={{
      minHeight: "100vh",
      background: "#181b23",
      fontFamily: "Orbitron, sans-serif",
      color: "#ffe082",
      padding: 0,
    }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "48px 0 0 0" }}>
        <div style={{ marginBottom: 18, marginLeft: 90, color: '#ffe08299', fontSize: 18 }}>
          <span style={{ color: '#ffe082' }}>Inicio</span> / <span>Contacto</span>
        </div>
        <h1 style={{ textAlign: "center", fontWeight: 900, fontSize: "3rem", marginBottom: 8 }}>Contáctanos</h1>
        <p style={{ textAlign: "center", color: "#ffe082cc", fontSize: "1.2rem", marginBottom: 38 }}>
          ¿Tienes preguntas sobre nuestras figuras? Estamos aquí para ayudarte
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center', alignItems: 'flex-start', marginBottom: 48 }}>
          {/* Formulario */}
          <div style={{ flex: '1 1 480px', minWidth: 380, background: '#20222c', borderRadius: 18, padding: 32, boxShadow: '0 2px 12px 0 #ffe08211' }}>
            <h2 style={{ fontWeight: 700, fontSize: '2rem', marginBottom: 24, color: '#ffe082' }}>Envíanos un Mensaje</h2>
            <form autoComplete="off" onSubmit={handleSubmit}>
              <div style={{ display: 'flex', gap: 16, marginBottom: 18 }}>
                <div style={{ flex: 1 }}>
                  <label style={{ color: '#ffe082', fontWeight: 500, marginBottom: 6, display: 'block' }}>Nombre</label>
                  <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} required placeholder="Tu nombre" style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: 'none', background: '#2c3040', color: '#ffe082', fontSize: '1rem', outline: 'none', marginBottom: 0 }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ color: '#ffe082', fontWeight: 500, marginBottom: 6, display: 'block' }}>Email</label>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="tu@email.com" style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: 'none', background: '#2c3040', color: '#ffe082', fontSize: '1rem', outline: 'none', marginBottom: 0 }} />
                </div>
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={{ color: '#ffe082', fontWeight: 500, marginBottom: 6, display: 'block' }}>Asunto</label>
                <select value={asunto} onChange={e => setAsunto(e.target.value)} style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: 'none', background: '#2c3040', color: '#ffe082', fontSize: '1rem', outline: 'none', marginBottom: 0 }}>
                  <option>Consulta sobre productos</option>
                  <option>Estado de mi pedido</option>
                  <option>Devoluciones y cambios</option>
                  <option>Personalizaciones</option>
                  <option>Otro</option>
                </select>
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={{ color: '#ffe082', fontWeight: 500, marginBottom: 6, display: 'block' }}>Mensaje</label>
                <textarea rows={5} value={mensaje} onChange={e => setMensaje(e.target.value)} required placeholder="Cuéntanos en qué podemos ayudarte..." style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: 'none', background: '#2c3040', color: '#ffe082', fontSize: '1rem', outline: 'none', marginBottom: 0, resize: 'vertical' }} />
              </div>
              <button type="submit" disabled={enviando} style={{ width: '100%', background: '#ffe082', color: '#232532', fontWeight: 700, fontSize: '1.1rem', border: 'none', borderRadius: 10, padding: '14px 0', marginTop: 8, boxShadow: '0 2px 18px 0 #ffe08233', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, cursor: enviando ? 'not-allowed' : 'pointer', opacity: enviando ? 0.7 : 1 }}>
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M2 21l21-9-9 21-2-8-8-2z" stroke="#232532" strokeWidth="2" strokeLinejoin="round"/></svg>
                {enviando ? "Enviando..." : "Enviar Mensaje"}
              </button>
              {enviado && <div style={{ color: '#4caf50', marginTop: 16, textAlign: 'center', fontWeight: 600 }}>¡Mensaje enviado correctamente!</div>}
              {error && <div style={{ color: '#ff5252', marginTop: 16, textAlign: 'center', fontWeight: 600 }}>{error}</div>}
            </form>
          </div>
          {/* Info de contacto */}
          <div style={{ flex: '1 1 380px', minWidth: 320, display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ background: '#20222c', borderRadius: 16, padding: 24, marginBottom: 0, display: 'flex', alignItems: 'center', gap: 18 }}>
              <span style={{ background: 'rgba(255,224,130,0.12)', borderRadius: 12, padding: 10, display: 'flex', alignItems: 'center' }}>
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" stroke="#ffe082" strokeWidth="2"/><path d="M12 8v4" stroke="#ffe082" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="16" r="1" fill="#ffe082"/></svg>
              </span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 18, color: '#ffe082' }}>Email</div>
                <div style={{ color: '#ffe082cc', fontSize: 15 }}>germande006@gmail.com</div>
              </div>
            </div>
            <div style={{ background: '#20222c', borderRadius: 16, padding: 24, marginBottom: 0, display: 'flex', alignItems: 'center', gap: 18 }}>
              <span style={{ background: 'rgba(143,92,255,0.12)', borderRadius: 12, padding: 10, display: 'flex', alignItems: 'center' }}>
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" stroke="#8f5cff" strokeWidth="2"/><path d="M12 8v4" stroke="#8f5cff" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="16" r="1" fill="#8f5cff"/></svg>
              </span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 18, color: '#2196f3' }}>Teléfono</div>
                <div style={{ color: '#ffe082cc', fontSize: 15 }}>+57 3014679513</div>
              </div>
            </div>
            <div style={{ background: '#20222c', borderRadius: 16, padding: 24, marginBottom: 0, display: 'flex', alignItems: 'center', gap: 18 }}>
              <span style={{ background: 'rgba(143,92,255,0.12)', borderRadius: 12, padding: 10, display: 'flex', alignItems: 'center' }}>
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" stroke="#8f5cff" strokeWidth="2"/><path d="M12 8v4" stroke="#8f5cff" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="16" r="1" fill="#8f5cff"/></svg>
              </span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 18, color: '#8f5cff' }}>Dirección</div>
                <div style={{ color: '#ffe082cc', fontSize: 15 }}>Mallorqui<br />Colombia, barranquilla</div>
              </div>
            </div>
            <div style={{ background: '#20222c', borderRadius: 16, padding: 24, marginBottom: 0, display: 'flex', alignItems: 'center', gap: 18 }}>
              <span style={{ background: 'rgba(255,224,130,0.12)', borderRadius: 12, padding: 10, display: 'flex', alignItems: 'center' }}>
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" stroke="#ffe082" strokeWidth="2"/><path d="M12 8v4" stroke="#ffe082" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="16" r="1" fill="#ffe082"/></svg>
              </span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 18, color: '#ffe082' }}>Horario</div>
                <div style={{ color: '#ffe082cc', fontSize: 15 }}>Lunes a Viernes: 9:00 - 18:00<br />Sábados: 10:00 - 14:00</div>
              </div>
            </div>
          </div>
        </div>

        {/* Preguntas Frecuentes */}
        <h2 style={{ textAlign: 'center', fontWeight: 900, fontSize: '2.2rem', margin: '48px 0 24px 0', color: '#ffe082' }}>Preguntas Frecuentes</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center' }}>
          <div style={{ flex: '1 1 420px', minWidth: 340, background: '#20222c', borderRadius: 16, padding: 24, color: '#ffe082', marginBottom: 0 }}>
            <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 6 }}>¿Cuánto tarda en llegar mi pedido?</div>
            <div style={{ color: '#ffe082cc', fontSize: 15 }}>Los envíos nacionales tardan entre 3-5 días laborables. Los internacionales pueden tardar hasta 15 días.</div>
          </div>
          <div style={{ flex: '1 1 420px', minWidth: 340, background: '#20222c', borderRadius: 16, padding: 24, color: '#ffe082', marginBottom: 0 }}>
            <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 6 }}>¿Puedo devolver una figura?</div>
            <div style={{ color: '#ffe082cc', fontSize: 15 }}>Sí, tienes 30 días para devolver cualquier figura en perfectas condiciones.</div>
          </div>
          <div style={{ flex: '1 1 420px', minWidth: 340, background: '#20222c', borderRadius: 16, padding: 24, color: '#ffe082', marginBottom: 0 }}>
            <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 6 }}>¿Las figuras vienen con certificado?</div>
            <div style={{ color: '#ffe082cc', fontSize: 15 }}>Cada figura incluye un certificado de autenticidad y origen artesanal.</div>
          </div>
          <div style={{ flex: '1 1 420px', minWidth: 340, background: '#20222c', borderRadius: 16, padding: 24, color: '#ffe082', marginBottom: 0 }}>
            <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 6 }}>¿Hacen figuras personalizadas?</div>
            <div style={{ color: '#ffe082cc', fontSize: 15 }}>Sí, ofrecemos servicio de figuras personalizadas. Contáctanos para más información.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
