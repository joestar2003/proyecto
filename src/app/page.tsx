


"use client";
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session, status } = useSession();
  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(ellipse at top left, #3a3a1a 0%, #181b23 60%, #18304a 100%)',
      fontFamily: 'Orbitron, sans-serif',
      color: '#fff',
      paddingBottom: 0,
    }}>
      {/* Hero principal */}
      <header style={{ padding: '60px 0 0 0', textAlign: 'center' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: 24 }}>
            <span style={{ fontSize: 48, color: '#ffe082', verticalAlign: 'middle', marginRight: 12 }}>
              <svg width="38" height="38" fill="none" viewBox="0 0 24 24" style={{ display: 'inline' }}><path d="M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 20 12 16.77 7.82 20 9 12.91l-5-3.64 5.91-.01z" stroke="#ffe082" strokeWidth="2" fill="none"/></svg>
            </span>
            <span style={{ fontSize: 64, fontWeight: 900, letterSpacing: '-2px', background: 'linear-gradient(90deg, #ffe082 0%, #38a3d1 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block', verticalAlign: 'middle' }}>
              ML WOODEN
            </span>
            <span style={{ fontSize: 48, color: '#ffe082', verticalAlign: 'middle', marginLeft: 12 }}>
              <svg width="38" height="38" fill="none" viewBox="0 0 24 24" style={{ display: 'inline' }}><path d="M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 20 12 16.77 7.82 20 9 12.91l-5-3.64 5.91-.01z" stroke="#ffe082" strokeWidth="2" fill="none"/></svg>
            </span>
          </div>
          <div style={{ fontSize: 56, fontWeight: 700, color: '#ffe082', letterSpacing: '2px', marginBottom: 18 }}>
            LEGENDS
          </div>
          <p style={{ fontSize: 22, color: '#e0e0e0', maxWidth: 700, margin: '0 auto 32px auto', fontWeight: 400 }}>
            Colecciona figuras de acción únicas talladas en madera de tus héroes favoritos de Mobile Legends. Cada pieza es una obra de arte artesanal.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 18, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link href="/figuras" style={{
              background: '#ffe082',
              color: '#232532',
              fontWeight: 700,
              fontSize: '1.25rem',
              border: 'none',
              borderRadius: 12,
              padding: '16px 38px',
              boxShadow: '0 2px 12px 0 rgba(255,224,130,0.15)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              transition: 'background 0.2s',
            }}>
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M6 6h15M6 12h15M6 18h15M3 6v12" stroke="#232532" strokeWidth="2" strokeLinecap="round"/></svg>
              Ver Colección
            </Link>
            <span style={{ color: '#ffe082', fontWeight: 600, fontSize: '1.1rem', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 20 12 16.77 7.82 20 9 12.91l-5-3.64 5.91-.01z" stroke="#ffe082" strokeWidth="2" fill="none"/></svg>
              Edición Limitada
            </span>
          </div>
        </div>
      </header>

      {/* Beneficios */}
      <section style={{ maxWidth: 1200, margin: '0 auto', marginTop: 40, marginBottom: 0, padding: '0 16px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center' }}>
          <div style={{ flex: '1 1 260px', minWidth: 260, background: 'rgba(40,40,60,0.95)', borderRadius: 18, padding: '32px 24px', textAlign: 'center', boxShadow: '0 2px 12px 0 rgba(255,224,130,0.08)' }}>
            <div style={{ marginBottom: 18 }}>
              <svg width="38" height="38" fill="none" viewBox="0 0 24 24"><path d="M12 2v20M2 12h20" stroke="#ffe082" strokeWidth="2"/></svg>
            </div>
            <div style={{ fontWeight: 700, fontSize: 22, color: '#ffe082', marginBottom: 6 }}>100% Artesanal</div>
            <div style={{ color: '#e0e0e0', fontSize: 16 }}>Tallado a mano por maestros artesanos</div>
          </div>
          <div style={{ flex: '1 1 260px', minWidth: 260, background: 'rgba(40,40,60,0.95)', borderRadius: 18, padding: '32px 24px', textAlign: 'center', boxShadow: '0 2px 12px 0 rgba(255,224,130,0.08)' }}>
            <div style={{ marginBottom: 18 }}>
              <svg width="38" height="38" fill="none" viewBox="0 0 24 24"><path d="M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 20 12 16.77 7.82 20 9 12.91l-5-3.64 5.91-.01z" stroke="#ffe082" strokeWidth="2" fill="none"/></svg>
            </div>
            <div style={{ fontWeight: 700, fontSize: 22, color: '#ffe082', marginBottom: 6 }}>Edición Limitada</div>
            <div style={{ color: '#e0e0e0', fontSize: 16 }}>Solo 100 unidades por héroe</div>
          </div>
          <div style={{ flex: '1 1 260px', minWidth: 260, background: 'rgba(40,40,60,0.95)', borderRadius: 18, padding: '32px 24px', textAlign: 'center', boxShadow: '0 2px 12px 0 rgba(255,224,130,0.08)' }}>
            <div style={{ marginBottom: 18 }}>
              <svg width="38" height="38" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="8" stroke="#ffe082" strokeWidth="2"/><path d="M8 12l2 2 4-4" stroke="#ffe082" strokeWidth="2"/></svg>
            </div>
            <div style={{ fontWeight: 700, fontSize: 22, color: '#ffe082', marginBottom: 6 }}>Calidad Premium</div>
            <div style={{ color: '#e0e0e0', fontSize: 16 }}>Maderas nobles seleccionadas</div>
          </div>
        </div>
      </section>

      {/* Sección de registro y beneficios extra solo para NO autenticados */}
      {(!session || !session.user) && (
        <section style={{
          maxWidth: 1300,
          margin: '60px auto 0 auto',
          background: 'radial-gradient(ellipse at top left, #232532 60%, #181b23 100%)',
          borderRadius: 24,
          boxShadow: '0 0 40px 0 #ffe08233',
          padding: '48px 24px 36px 24px',
          position: 'relative',
          color: '#fff',
        }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div style={{
              width: 90,
              height: 90,
              margin: '0 auto 18px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #ffe082 0%, #38a3d1 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
                <rect x="4" y="4" width="16" height="16" rx="8" stroke="#181b23" strokeWidth="2"/>
                <path d="M12 8v4" stroke="#181b23" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="16" r="1" fill="#181b23"/>
              </svg>
            </div>
            <h2 style={{ color: '#ffe082', fontWeight: 900, fontSize: '2.5rem', marginBottom: 8 }}>
              ¡Regístrate y Obtén <span style={{ color: '#ffe082' }}>10% OFF!</span>
            </h2>
            <p style={{ color: '#e0e0e0', fontSize: '1.2rem', maxWidth: 700, margin: '0 auto' }}>
              Únete a la comunidad ML Wooden Legends y recibe un descuento especial en tu primera compra. Además, accede a ofertas exclusivas y lanzamientos anticipados.
            </p>
          </div>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 32,
            justifyContent: 'center',
            marginBottom: 32,
          }}>
            <div style={{ flex: '1 1 220px', minWidth: 220, textAlign: 'center' }}>
              <div style={{ marginBottom: 10 }}>
                <svg width="38" height="38" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="8" stroke="#2196f3" strokeWidth="2"/><path d="M12 8v4" stroke="#2196f3" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="16" r="1" fill="#2196f3"/></svg>
              </div>
              <div style={{ fontWeight: 700, fontSize: 18, color: '#fff', marginBottom: 2 }}>10% Descuento</div>
              <div style={{ color: '#bdbdbd', fontSize: 15 }}>En tu primera compra</div>
            </div>
            <div style={{ flex: '1 1 220px', minWidth: 220, textAlign: 'center' }}>
              <div style={{ marginBottom: 10 }}>
                <svg width="38" height="38" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="8" stroke="#8f5cff" strokeWidth="2"/><path d="M12 8v4" stroke="#8f5cff" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="16" r="1" fill="#8f5cff"/></svg>
              </div>
              <div style={{ fontWeight: 700, fontSize: 18, color: '#fff', marginBottom: 2 }}>Acceso VIP</div>
              <div style={{ color: '#bdbdbd', fontSize: 15 }}>A ofertas exclusivas</div>
            </div>
            <div style={{ flex: '1 1 220px', minWidth: 220, textAlign: 'center' }}>
              <div style={{ marginBottom: 10 }}>
                <svg width="38" height="38" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="8" stroke="#ffe082" strokeWidth="2"/><path d="M12 8v4" stroke="#ffe082" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="16" r="1" fill="#ffe082"/></svg>
              </div>
              <div style={{ fontWeight: 700, fontSize: 18, color: '#fff', marginBottom: 2 }}>Preventa</div>
              <div style={{ color: '#bdbdbd', fontSize: 15 }}>Nuevos lanzamientos</div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap', marginBottom: 18 }}>
            <Link href="/registro" style={{
              background: '#ffe082',
              color: '#232532',
              fontWeight: 700,
              fontSize: '1.15rem',
              border: 'none',
              borderRadius: 10,
              padding: '14px 36px',
              boxShadow: '0 2px 12px 0 rgba(255,224,130,0.15)',
              textDecoration: 'none',
              transition: 'background 0.2s',
              marginBottom: 8,
            }}>
              Crear Cuenta Gratis
            </Link>
            <Link href="/login" style={{
              background: 'transparent',
              color: '#ffe082',
              fontWeight: 700,
              fontSize: '1.15rem',
              border: '2px solid #ffe082',
              borderRadius: 10,
              padding: '14px 36px',
              boxShadow: 'none',
              textDecoration: 'none',
              transition: 'background 0.2s',
              marginBottom: 8,
            }}>
              Ya Tengo Cuenta
            </Link>
          </div>
          <div style={{ textAlign: 'center', color: '#bdbdbd', fontSize: 13, marginTop: 8 }}>
            * Descuento válido solo para nuevos usuarios. No acumulable con otras ofertas.
          </div>
        </section>
      )}
    </div>
  );
}