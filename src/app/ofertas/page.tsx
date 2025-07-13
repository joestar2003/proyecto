"use client";
import Link from "next/link";

export default function Ofertas() {
  return (
    <div style={{minHeight: '100vh', background: '#10121a', color: '#ffe082', fontFamily: 'Orbitron, sans-serif', paddingBottom: 48}}>
      <div className="container pt-5 pb-2">
        <nav style={{fontSize: 16, marginBottom: 24, color: '#ffe08299'}}>
          <Link href="/" style={{color: '#ffe08299', textDecoration: 'none'}}>Inicio</Link>
          <span style={{margin: '0 8px'}}>/</span>
          <span>Ofertas</span>
        </nav>
        <h1 className="text-center mb-2" style={{fontSize: '3rem', fontWeight: 700, letterSpacing: 1}}>
          Ofertas <span style={{color: '#ffd600'}}>Especiales</span>
        </h1>
        <p className="text-center mb-5" style={{color: '#ffe082cc', fontWeight: 400, fontSize: '1.2rem'}}>
          Aprovecha nuestras promociones limitadas y obtén las mejores figuras al mejor precio
        </p>
        {/* Oferta Flash */}
        <div style={{background: 'linear-gradient(90deg, #181c2a 60%, #181a20 100%)', border: '1.5px solid #ffd60033', borderRadius: 18, padding: 32, marginBottom: 32, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 4px 32px #0007'}}>
          <div style={{flex: 1, minWidth: 260}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8}}>
              <span style={{background: '#ff5252', color: '#fff', borderRadius: 10, fontWeight: 700, fontSize: 18, padding: '4px 18px'}}>OFERTA FLASH</span>
              <span style={{color: '#ffd600', fontSize: 18, display: 'flex', alignItems: 'center', gap: 6}}><i className="bi bi-clock-history"></i> 24h restantes</span>
            </div>
            <h2 style={{fontSize: '2.2rem', fontWeight: 700, marginBottom: 8}}>Pack Legendario: Alucard + Fanny</h2>
            <p style={{color: '#ffe082cc', fontWeight: 400, fontSize: '1.1rem', marginBottom: 18}}>Dos de nuestras figuras más populares en un pack especial con descuento exclusivo</p>
            <div style={{display: 'flex', alignItems: 'center', gap: 18, marginBottom: 18}}>
              <span style={{fontSize: '2.2rem', fontWeight: 700, color: '#ffd600'}}>$129.99</span>
              <span style={{textDecoration: 'line-through', color: '#ffe08288', fontSize: '1.3rem', fontWeight: 500}}>$169.98</span>
              <span style={{background: '#ffd600', color: '#181a20', borderRadius: 8, fontWeight: 700, fontSize: 18, padding: '4px 14px'}}> -24% </span>
            </div>
            <button className="btn btn-warning fw-bold d-flex align-items-center gap-2" style={{borderRadius: 12, fontSize: 18, padding: '10px 32px', boxShadow: '0 2px 12px #ffd60044'}}>
              <i className="bi bi-gift"></i> Comprar Pack
            </button>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: 24, marginLeft: 32, flexWrap: 'wrap', justifyContent: 'center'}}>
            <img src="/img/alucard.png" alt="Alucard" style={{height: 140, width: 140, borderRadius: 18, background: '#23243a', objectFit: 'cover', boxShadow: '0 2px 12px #0008'}} />
            <span style={{fontSize: 38, color: '#ffd600', fontWeight: 700}}>+</span>
            <img src="/img/fanny.png" alt="Fanny" style={{height: 140, width: 140, borderRadius: 18, background: '#23243a', objectFit: 'cover', boxShadow: '0 2px 12px #0008'}} />
          </div>
        </div>
        {/* Promos adicionales */}
        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div style={{background: '#181c2a', borderRadius: 16, padding: 24, height: '100%', boxShadow: '0 2px 12px #0006'}}>
              <h3 style={{fontSize: '1.5rem', fontWeight: 700, color: '#ffd600', display: 'flex', alignItems: 'center', gap: 10}}><i className="bi bi-gift"></i> Compra 2, Lleva 3</h3>
              <p style={{color: '#ffe082cc', fontWeight: 400, fontSize: '1.05rem'}}>Compra cualquier 2 figuras y llévate una tercera gratis de menor valor</p>
              <button className="btn btn-dark w-100 fw-bold" style={{borderRadius: 8, fontSize: 16, color: '#ffd600', border: '1.5px solid #ffd60055'}}>Ver Figuras Elegibles</button>
            </div>
          </div>
          <div className="col-md-4">
            <div style={{background: '#181c2a', borderRadius: 16, padding: 24, height: '100%', boxShadow: '0 2px 12px #0006', border: '1.5px solid #ffd60055'}}>
              <h3 style={{fontSize: '1.5rem', fontWeight: 700, color: '#ffd600', display: 'flex', alignItems: 'center', gap: 10}}><i className="bi bi-star"></i> Primera Compra</h3>
              <p style={{color: '#ffe082cc', fontWeight: 400, fontSize: '1.05rem'}}>10% de descuento en tu primera compra registrándote</p>
              <button className="btn btn-dark w-100 fw-bold" style={{borderRadius: 8, fontSize: 16, color: '#ffd600', border: '1.5px solid #ffd60055'}}>Registrarse Ahora</button>
            </div>
          </div>
          <div className="col-md-4">
            <div style={{background: '#181c2a', borderRadius: 16, padding: 24, height: '100%', boxShadow: '0 2px 12px #0006'}}>
              <h3 style={{fontSize: '1.5rem', fontWeight: 700, color: '#ffd600', display: 'flex', alignItems: 'center', gap: 10}}><i className="bi bi-clock-history"></i> Preventa Exclusiva</h3>
              <p style={{color: '#ffe082cc', fontWeight: 400, fontSize: '1.05rem'}}>Acceso anticipado a nuevas figuras para miembros VIP</p>
              <button className="btn btn-dark w-100 fw-bold" style={{borderRadius: 8, fontSize: 16, color: '#ffd600', border: '1.5px solid #ffd60055'}}>Saber Más</button>
            </div>
          </div>
        </div>
        {/* Newsletter */}
        <div style={{background: 'linear-gradient(90deg, #181c2a 60%, #181a20 100%)', border: '1.5px solid #ffd60033', borderRadius: 18, padding: 32, marginBottom: 32, boxShadow: '0 4px 32px #0007'}}>
          <h2 className="text-center mb-3" style={{fontSize: '2rem', fontWeight: 700}}>No Te Pierdas Ninguna Oferta</h2>
          <p className="text-center mb-4" style={{color: '#ffe082cc', fontWeight: 400, fontSize: '1.1rem'}}>Suscríbete a nuestro newsletter y recibe ofertas exclusivas directo en tu email</p>
          <form className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
            <input type="email" className="form-control" placeholder="tu@email.com" style={{maxWidth: 320, borderRadius: 8, background: '#181c2a', color: '#ffe082', border: '1.5px solid #ffd60055', fontSize: 17}} />
            <button className="btn btn-warning fw-bold" style={{borderRadius: 10, fontSize: 17, padding: '8px 28px'}}>Suscribirse <i className="bi bi-arrow-right"></i></button>
          </form>
        </div>
      </div>
    </div>
  );
}
