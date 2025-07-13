"use client";
import Link from "next/link";
import { useCart } from "./CartContext";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { cart } = useCart();
  const [search, setSearch] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const total = cart.reduce((acc, item) => acc + item.cantidad, 0);

  // Sincronizar búsqueda global
  useEffect(() => {
    const handler = () => setSearch(localStorage.getItem("search-figura") || "");
    window.addEventListener("storage", handler);
    setSearch(localStorage.getItem("search-figura") || "");
    return () => window.removeEventListener("storage", handler);
  }, []);

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
    localStorage.setItem("search-figura", e.target.value);
    window.dispatchEvent(new Event("storage"));
  }

  function handleNav() {
    setShowMenu(false);
    setShowSearch(false);
  }

  return (
    <header style={{background: '#10121a', borderBottom: '1.5px solid #23243a', position: 'sticky', top: 0, zIndex: 100}}>
      <nav className="navbar px-3 px-lg-5 d-flex align-items-center justify-content-between" style={{padding: '0.5rem 0', minHeight: 64}}>
        {/* Logo y subtítulo */}
        <div className="d-flex align-items-center" style={{gap: 12}}>
          <Link href="/" className="d-flex align-items-center gap-2 text-decoration-none" style={{color: '#ffe082', fontFamily: 'Orbitron, sans-serif', fontWeight: 700, fontSize: '1.7rem', letterSpacing: 1}} onClick={handleNav}>
            <img src="/globe.svg" alt="Logo" style={{height: 38, width: 38, marginRight: 8}} />
            ML Wooden Legends
          </Link>
          <span className="d-none d-md-block" style={{color: '#ffe082cc', fontSize: '1rem', fontWeight: 400, marginLeft: 6, marginTop: 6, letterSpacing: 0.5}}>Figuras de Acción Premium</span>
        </div>
        {/* Menú principal centrado (desktop) */}
        <div className="d-none d-lg-flex align-items-center justify-content-center flex-grow-1" style={{gap: 32}}>
          <Link href="/" className="nav-link" style={{color: '#ffe082', fontWeight: 600, fontSize: '1.13rem', letterSpacing: 0.5}} onClick={handleNav}>Inicio</Link>
          <Link href="/figuras" className="nav-link" style={{color: '#ffe082', fontWeight: 600, fontSize: '1.13rem', letterSpacing: 0.5}} onClick={handleNav}>Catálogo</Link>
          <Link href="/ofertas" className="nav-link" style={{color: '#ffe082', fontWeight: 600, fontSize: '1.13rem', letterSpacing: 0.5}} onClick={handleNav}>Ofertas</Link>
          <Link href="/contacto" className="nav-link" style={{color: '#ffe082', fontWeight: 600, fontSize: '1.13rem', letterSpacing: 0.5}} onClick={handleNav}>Contacto</Link>
        </div>
        {/* Acciones derecha */}
        <div className="d-flex align-items-center gap-2" style={{minWidth: 180, justifyContent: 'flex-end'}}>
          {/* Buscador: ícono que despliega input */}
          <div className="position-relative">
            <button className="btn p-1" style={{background: 'none', border: 'none', color: '#ffe082'}} onClick={()=>setShowSearch(v=>!v)} aria-label="Buscar">
              <i className="bi bi-search" style={{fontSize: 22}}></i>
            </button>
            {showSearch && (
              <input
                type="text"
                className="form-control border-0 bg-dark"
                placeholder="Buscar figura..."
                value={search}
                onChange={handleSearchChange}
                autoFocus
                style={{position: 'absolute', top: 36, right: 0, minWidth: 180, background: '#232532', color: '#ffe082', borderRadius: 8, fontSize: 15, zIndex: 300, border: '1.5px solid #31344a', boxShadow: '0 4px 16px #0008'}}
              />
            )}
          </div>
          {/* Login y registro */}
          <Link href="/login" className="nav-link d-none d-lg-flex align-items-center" style={{color: '#ffe082', fontWeight: 500, fontSize: 16}}><i className="bi bi-person" style={{fontSize: 20, marginRight: 4}}></i>Ingresar</Link>
          <Link href="/registro" className="nav-link d-none d-lg-flex align-items-center" style={{color: '#ffe082', fontWeight: 500, fontSize: 16}}><i className="bi bi-person-plus" style={{fontSize: 20, marginRight: 4}}></i>Registro</Link>
          {/* Carrito */}
          <Link href="/carrito" className="nav-link d-flex align-items-center position-relative" style={{color: '#ffe082', fontWeight: 600, fontSize: 16, marginLeft: 4}}>
            <i className="bi bi-cart" style={{ fontSize: 22 }}></i>
            <span className="d-none d-lg-inline" style={{ marginLeft: 6 }}>Carrito</span>
            {total > 0 && (
              <span style={{position: 'absolute', top: -6, right: -16, background: '#ffe082', color: '#232532', borderRadius: '50%', fontWeight: 700, fontSize: 12, minWidth: 18, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #232532', zIndex: 2}}>{total}</span>
            )}
          </Link>
          {/* Menú hamburguesa móvil */}
          <button className="d-lg-none btn p-2 ms-2" style={{background: 'none', border: 'none', color: '#ffe082'}} onClick={()=>setShowMenu(v=>!v)} aria-label="Menú">
            <i className="bi bi-list" style={{fontSize: 28}}></i>
          </button>
        </div>
        {/* Menú móvil */}
        {showMenu && (
          <div className="navbar-menu-mobile d-lg-none position-absolute w-100" style={{top: 64, left: 0, background: '#10121a', boxShadow: '0 8px 32px #000b', borderBottomLeftRadius: 12, borderBottomRightRadius: 12, zIndex: 250, borderBottom: '1.5px solid #23243a'}}>
            <div className="d-flex flex-column align-items-center gap-2 py-3">
              <Link href="/" className="nav-link" style={{color: '#ffe082', fontWeight: 600, fontSize: '1.13rem'}} onClick={handleNav}>Inicio</Link>
              <Link href="/figuras" className="nav-link" style={{color: '#ffe082', fontWeight: 600, fontSize: '1.13rem'}} onClick={handleNav}>Catálogo</Link>
              <Link href="/ofertas" className="nav-link" style={{color: '#ffe082', fontWeight: 600, fontSize: '1.13rem'}} onClick={handleNav}>Ofertas</Link>
              <Link href="/contacto" className="nav-link" style={{color: '#ffe082', fontWeight: 600, fontSize: '1.13rem'}} onClick={handleNav}>Contacto</Link>
              <Link href="/login" className="nav-link" style={{color: '#ffe082', fontWeight: 500, fontSize: 16}} onClick={handleNav}><i className="bi bi-person" style={{fontSize: 20, marginRight: 4}}></i>Ingresar</Link>
              <Link href="/registro" className="nav-link" style={{color: '#ffe082', fontWeight: 500, fontSize: 16}} onClick={handleNav}><i className="bi bi-person-plus" style={{fontSize: 20, marginRight: 4}}></i>Registro</Link>
              <Link href="/carrito" className="nav-link d-flex align-items-center position-relative" style={{color: '#ffe082', fontWeight: 600, fontSize: 16}} onClick={handleNav}>
                <i className="bi bi-cart" style={{ fontSize: 22 }}></i>
                <span style={{ marginLeft: 6 }}>Carrito</span>
                {total > 0 && (
                  <span style={{position: 'absolute', top: -6, right: -16, background: '#ffe082', color: '#232532', borderRadius: '50%', fontWeight: 700, fontSize: 12, minWidth: 18, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #232532', zIndex: 2}}>{total}</span>
                )}
              </Link>
              {/* Buscador móvil */}
              <div className="w-100 px-3 mt-2">
                <input type="text" className="form-control border-0 bg-dark" placeholder="Buscar figura..." value={search} onChange={handleSearchChange} style={{color: '#ffe082', background: '#232532', borderRadius: 8, fontSize: 15}} />
              </div>
            </div>
          </div>
        )}
      </nav>
      <style>{`
        .navbar-menu-mobile {
          animation: fadeInDown 0.18s;
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .navbar-menu-mobile .nav-link {
          font-family: Orbitron, sans-serif;
        }
        .navbar .nav-link {
          transition: color 0.18s;
        }
        .navbar .nav-link:hover {
          color: #8f5cff !important;
        }
      `}</style>
    </header>
  );
}
