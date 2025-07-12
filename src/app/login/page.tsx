
'use client';



import { useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

export default function Login() {
  const [showPass, setShowPass] = useState(false);
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.email as HTMLInputElement).value;
    const password = (form.password as HTMLInputElement).value;
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });
    if (result?.ok) {
      alert('Bienvenido xd');
      window.location.href = '/';
    } else {
      alert('Error al iniciar sesión');
    }
  }
  return (
    <div style={{
      minHeight: '100vh',
      background: '#181b23',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Orbitron, sans-serif',
    }}>
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <div style={{
          width: 90,
          height: 90,
          margin: '0 auto 12px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #ffe082 0%, #38a3d1 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="8" r="4" stroke="#181b23" strokeWidth="2" />
            <path d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4" stroke="#181b23" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <h1 style={{ color: '#ffe082', fontWeight: 700, fontSize: '2.3rem', marginBottom: 6 }}>Bienvenido de Vuelta</h1>
        <p style={{ color: '#bdbdbd', fontWeight: 400, fontSize: '1.1rem', marginBottom: 0 }}>Inicia sesión para acceder a tu cuenta</p>
      </div>
      <div style={{
        background: '#232532',
        borderRadius: 16,
        maxWidth: 420,
        width: '100%',
        padding: '36px 32px 24px 32px',
        boxShadow: '0 8px 32px 0 rgba(31,38,135,0.15)',
        margin: '0 auto',
      }}>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div style={{ marginBottom: 18 }}>
            <label htmlFor="email" style={{ color: '#fff', fontWeight: 500, marginBottom: 6, display: 'block' }}>Email</label>
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
                  color: '#fff',
                  fontSize: '1rem',
                  outline: 'none',
                  marginTop: 2,
                  marginBottom: 0,
                }}
              />
            </div>
          </div>
          <div style={{ marginBottom: 18 }}>
            <label htmlFor="password" style={{ color: '#fff', fontWeight: 500, marginBottom: 6, display: 'block' }}>Contraseña</label>
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
                  color: '#fff',
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
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input type="checkbox" id="remember" style={{ marginRight: 6 }} />
              <label htmlFor="remember" style={{ color: '#bdbdbd', fontSize: '0.98rem', cursor: 'pointer' }}>Recordarme</label>
            </div>
            <Link href="/recuperar" style={{ color: '#ffe082', fontSize: '0.98rem', textDecoration: 'none' }}>¿Olvidaste tu contraseña?</Link>
          </div>
          <button type="submit" style={{
            width: '100%',
            background: 'linear-gradient(90deg, #ffe082 0%, #ffe082 100%)',
            color: '#232532',
            fontWeight: 700,
            fontSize: '1.15rem',
            border: 'none',
            borderRadius: 10,
            padding: '12px 0',
            marginBottom: 18,
            boxShadow: '0 2px 12px 0 rgba(255,224,130,0.15)',
            transition: 'background 0.2s',
            cursor: 'pointer',
          }}>
            Iniciar Sesión
          </button>
          <div style={{ display: 'flex', alignItems: 'center', margin: '18px 0 10px 0' }}>
            <div style={{ flex: 1, height: 1, background: '#31344a' }} />
            <span style={{ color: '#bdbdbd', margin: '0 12px', fontSize: '1.1rem' }}>o</span>
            <div style={{ flex: 1, height: 1, background: '#31344a' }} />
          </div>
          <div style={{ textAlign: 'center', marginBottom: 0 }}>
            <span style={{ color: '#bdbdbd', fontSize: '1rem' }}>¿No tienes cuenta?</span>
            <Link href="/registro" style={{ color: '#ffe082', marginLeft: 6, fontWeight: 600, textDecoration: 'none' }}>Regístrate aquí</Link>
          </div>
        </form>
      </div>
      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <Link href="/" style={{ color: '#ffe082', textDecoration: 'none', fontSize: '1rem', display: 'inline-flex', alignItems: 'center' }}>
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" style={{ marginRight: 6 }}><path d="M15 19l-7-7 7-7" stroke="#ffe082" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}