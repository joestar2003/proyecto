"use client";

import { useState } from "react";
import Link from "next/link";

export default function Registro() {
  const [showPass, setShowPass] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const nombre = (form.nombre as HTMLInputElement).value;
    const email = (form.email as HTMLInputElement).value;
    const password = (form.password as HTMLInputElement).value;
    const password2 = (form.password2 as HTMLInputElement).value;
    if (password !== password2) {
      alert("Las contraseñas no coinciden");
      return;
    }
    const res = await fetch("/api/registro", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, email, password }),
    });
    const data = await res.json();
    if (data.ok) {
      alert("Usuario registrado correctamente");
      window.location.href = "/login";
    } else {
      alert(data.error || "Error al registrar");
    }
  }
  return (
    <div style={{
      minHeight: "100vh",
      background: "#181b23",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Orbitron, sans-serif",
      color: "#ffe082"
    }}>
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <div style={{
          width: 90,
          height: 90,
          margin: "0 auto 12px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #ffe082 0%, #38a3d1 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="8" r="4" stroke="#181b23" strokeWidth="2" />
            <path d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4" stroke="#181b23" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <h1 style={{ color: "#ffe082", fontWeight: 700, fontSize: "2.5rem", marginBottom: 6 }}>Únete a la Leyenda</h1>
        <p style={{ color: "#ffe082", fontWeight: 400, fontSize: "1.15rem", marginBottom: 0 }}>Crea tu cuenta y obtén 10% de descuento</p>
      </div>
      <div style={{
        maxWidth: 480,
        width: "100%",
        margin: "0 auto 24px auto",
        background: "#232532",
        borderRadius: 14,
        border: "1.5px solid #ffe08255",
        color: "#ffe082",
        padding: "18px 24px 14px 24px",
        fontWeight: 500,
        fontSize: "1.1rem",
        boxShadow: "0 2px 12px 0 rgba(255,224,130,0.08)",
        display: "flex",
        alignItems: "center",
        gap: 16,
      }}>
        <span style={{ display: "flex", alignItems: "center" }}>
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="8" stroke="#ffe082" strokeWidth="2"/><path d="M12 8v4" stroke="#ffe082" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="16" r="1" fill="#ffe082"/></svg>
        </span>
        <div>
          <b>¡Oferta Especial!</b>
          <div style={{ color: "#ffe082", fontWeight: 400, fontSize: "0.98rem" }}>10% OFF en tu primera compra al registrarte</div>
        </div>
      </div>
      <div style={{
        maxWidth: 480,
        width: "100%",
        margin: "0 auto",
        background: "#232532",
        borderRadius: 16,
        padding: "36px 32px 24px 32px",
        boxShadow: "0 8px 32px 0 rgba(31,38,135,0.15)",
        color: "#ffe082"
      }}>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div style={{ marginBottom: 18 }}>
            <label htmlFor="nombre" style={{ color: '#ffe082', fontWeight: 500, marginBottom: 6, display: 'block' }}>Nombre Completo</label>
            <div style={{ position: 'relative' }}>
              <span style={{
                position: 'absolute',
                left: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#bdbdbd',
                pointerEvents: 'none',
              }}>
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" stroke="#bdbdbd" strokeWidth="2" /><path d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4" stroke="#bdbdbd" strokeWidth="2" strokeLinecap="round" /></svg>
              </span>
              <input
                type="text"
                id="nombre"
                placeholder="Tu nombre completo"
                required
                style={{
                  width: '100%',
                  padding: '12px 16px 12px 48px',
                  borderRadius: 12,
                  border: 'none',
                  background: '#2c3040',
                  color: '#ffe082',
                  fontSize: '1rem',
                  outline: 'none',
                  marginTop: 2,
                  marginBottom: 0,
                }}
              />
            </div>
          </div>
          <div style={{ marginBottom: 18 }}>
            <label htmlFor="email" style={{ color: '#ffe082', fontWeight: 500, marginBottom: 6, display: 'block' }}>Email</label>
            <div style={{ position: 'relative' }}>
              <span style={{
                position: 'absolute',
                left: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#bdbdbd',
                pointerEvents: 'none',
              }}>
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M4 4h16v16H4V4zm0 0l8 8 8-8" stroke="#bdbdbd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <input
                type="email"
                id="email"
                placeholder="tu@email.com"
                required
                style={{
                  width: '100%',
                  padding: '12px 16px 12px 48px',
                  borderRadius: 12,
                  border: 'none',
                  background: '#2c3040',
                  color: '#ffe082',
                  fontSize: '1rem',
                  outline: 'none',
                  marginTop: 2,
                  marginBottom: 0,
                }}
              />
            </div>
          </div>
          <div style={{ marginBottom: 18 }}>
            <label htmlFor="password" style={{ color: '#ffe082', fontWeight: 500, marginBottom: 6, display: 'block' }}>Contraseña</label>
            <div style={{ position: 'relative' }}>
              <span style={{
                position: 'absolute',
                left: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#bdbdbd',
                pointerEvents: 'none',
              }}>
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="8" rx="4" stroke="#bdbdbd" strokeWidth="2"/><circle cx="12" cy="14" r="2" fill="#bdbdbd"/></svg>
              </span>
              <input
                type={showPass ? 'text' : 'password'}
                id="password"
                placeholder="........"
                required
                style={{
                  width: '100%',
                  padding: '12px 44px 12px 48px',
                  borderRadius: 12,
                  border: 'none',
                  background: '#2c3040',
                  color: '#ffe082',
                  fontSize: '1rem',
                  outline: 'none',
                  marginTop: 2,
                  marginBottom: 0,
                }}
              />
              <span
                onClick={() => setShowPass((v) => !v)}
                style={{
                  position: 'absolute',
                  right: 16,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#ffe082',
                  cursor: 'pointer',
                  zIndex: 2,
                }}
                title={showPass ? 'Ocultar' : 'Mostrar'}
              >
                {showPass ? (
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" stroke="#ffe082" strokeWidth="2"/><circle cx="12" cy="12" r="3" stroke="#ffe082" strokeWidth="2"/></svg>
                ) : (
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M17.94 17.94A10.97 10.97 0 0 1 12 19c-7 0-11-7-11-7a21.77 21.77 0 0 1 5.06-5.94M1 1l22 22" stroke="#ffe082" strokeWidth="2" strokeLinecap="round"/><path d="M9.53 9.53A3.5 3.5 0 0 1 12 8.5c1.93 0 3.5 1.57 3.5 3.5 0 .47-.09.92-.26 1.33" stroke="#ffe082" strokeWidth="2"/></svg>
                )}
              </span>
            </div>
          </div>
          <div style={{ marginBottom: 18 }}>
            <label htmlFor="password2" style={{ color: '#ffe082', fontWeight: 500, marginBottom: 6, display: 'block' }}>Confirmar Contraseña</label>
            <div style={{ position: 'relative' }}>
              <span style={{
                position: 'absolute',
                left: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#bdbdbd',
                pointerEvents: 'none',
              }}>
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="8" rx="4" stroke="#bdbdbd" strokeWidth="2"/><circle cx="12" cy="14" r="2" fill="#bdbdbd"/></svg>
              </span>
              <input
                type={showPass2 ? 'text' : 'password'}
                id="password2"
                placeholder="........"
                required
                style={{
                  width: '100%',
                  padding: '12px 44px 12px 48px',
                  borderRadius: 12,
                  border: 'none',
                  background: '#2c3040',
                  color: '#ffe082',
                  fontSize: '1rem',
                  outline: 'none',
                  marginTop: 2,
                  marginBottom: 0,
                }}
              />
              <span
                onClick={() => setShowPass2((v) => !v)}
                style={{
                  position: 'absolute',
                  right: 16,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#ffe082',
                  cursor: 'pointer',
                  zIndex: 2,
                }}
                title={showPass2 ? 'Ocultar' : 'Mostrar'}
              >
                {showPass2 ? (
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" stroke="#ffe082" strokeWidth="2"/><circle cx="12" cy="12" r="3" stroke="#ffe082" strokeWidth="2"/></svg>
                ) : (
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M17.94 17.94A10.97 10.97 0 0 1 12 19c-7 0-11-7-11-7a21.77 21.77 0 0 1 5.06-5.94M1 1l22 22" stroke="#ffe082" strokeWidth="2" strokeLinecap="round"/><path d="M9.53 9.53A3.5 3.5 0 0 1 12 8.5c1.93 0 3.5 1.57 3.5 3.5 0 .47-.09.92-.26 1.33" stroke="#ffe082" strokeWidth="2"/></svg>
                )}
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 18 }}>
            <input type="checkbox" id="terminos" style={{ marginRight: 8 }} required />
            <label htmlFor="terminos" style={{ color: '#ffe082', fontSize: '0.98rem', cursor: 'pointer' }}>
              Acepto los términos y condiciones y la política de privacidad
            </label>
          </div>
          <button type="submit" style={{
            width: '100%',
            background: '#ffe082',
            color: '#232532',
            fontWeight: 700,
            fontSize: '1.15rem',
            border: 'none',
            borderRadius: 10,
            padding: '14px 0',
            marginBottom: 18,
            boxShadow: '0 2px 12px 0 rgba(255,224,130,0.15)',
            transition: 'background 0.2s',
            cursor: 'pointer',
          }}>
            Crear Cuenta
          </button>
          <div style={{ display: 'flex', alignItems: 'center', margin: '18px 0 10px 0' }}>
            <div style={{ flex: 1, height: 1, background: '#31344a' }} />
            <span style={{ color: '#bdbdbd', margin: '0 12px', fontSize: '1.1rem' }}>o</span>
            <div style={{ flex: 1, height: 1, background: '#31344a' }} />
          </div>
          <div style={{ textAlign: 'center', marginBottom: 0 }}>
            <span style={{ color: '#bdbdbd', fontSize: '1rem' }}>¿Ya tienes cuenta?</span>
            <Link href="/login" style={{ color: '#ffe082', marginLeft: 6, fontWeight: 600, textDecoration: 'none' }}>Inicia sesión</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
