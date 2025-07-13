"use client";
import Link from "next/link";
import { useCart } from "./CartContext";
import { useState, useEffect } from "react";

export default function NavbarAuth() {
  const { cart } = useCart();
  const [isClient, setIsClient] = useState(false);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Sincronizar búsqueda global
    const handler = () => setSearch(localStorage.getItem("search-figura") || "");
    window.addEventListener("storage", handler);
    setSearch(localStorage.getItem("search-figura") || "");
    return () => window.removeEventListener("storage", handler);
  }, []);

  // Actualizar búsqueda global
  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
    localStorage.setItem("search-figura", e.target.value);
    window.dispatchEvent(new Event("storage"));
  }

  const total = cart.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <>
      {/* Buscador responsivo: ícono que despliega input en móvil */}
      <li className="nav-item d-flex align-items-center gap-2" style={{marginRight: 8}}>
        {/* Ícono de búsqueda para móvil */}
        <button
          className="btn d-lg-none p-1"
          style={{background: 'none', border: 'none', color: '#ffe082'}}
          onClick={() => setShowSearch((v) => !v)}
          aria-label="Buscar"
        >
          <i className="bi bi-search" style={{fontSize: 22}}></i>
        </button>
        {/* Input de búsqueda visible en desktop o si showSearch en móvil */}
        <div
          className={`d-${showSearch ? 'block' : 'none'} d-lg-block`}
          style={{
            position: 'relative',
            background: '#232532',
            borderRadius: 8,
            border: '1.5px solid #31344a',
            padding: '2px 10px',
            minWidth: 140,
            maxWidth: 200,
            marginRight: 4,
            transition: 'all 0.2s',
          }}
        >
          <input
            type="text"
            className="form-control border-0 bg-transparent"
            placeholder="Buscar figura..."
            value={search}
            onChange={handleSearchChange}
            style={{
              color: '#ffe082',
              background: 'transparent',
              fontSize: 15,
              outline: 'none',
              boxShadow: 'none',
              border: 'none',
              padding: '2px 0',
              minWidth: 70,
              maxWidth: 120,
            }}
          />
          <i
            className="bi bi-search position-absolute"
            style={{
              color: '#ffe082',
              fontSize: 18,
              right: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              pointerEvents: 'none',
            }}
          ></i>
        </div>
        {/* Carrito */}
        <Link
          className="nav-link d-flex align-items-center position-relative"
          href="/carrito"
          style={{
            padding: '4px 12px',
            borderRadius: 8,
            background: '#232532',
            color: '#ffe082',
            fontWeight: 600,
            fontSize: 16,
            gap: 6,
            marginLeft: 2,
          }}
          aria-label="Ver carrito"
        >
          <i className="bi bi-cart" style={{ fontSize: 20 }}></i>
          <span className="d-none d-lg-inline" style={{ marginLeft: 2 }}>Carrito</span>
          {isClient && total > 0 && (
            <span
              style={{
                position: 'absolute',
                top: -6,
                right: -6,
                background: '#ffe082',
                color: '#232532',
                borderRadius: '50%',
                fontWeight: 700,
                fontSize: 12,
                minWidth: 18,
                height: 18,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid #232532',
                zIndex: 2,
              }}
            >
              {total}
            </span>
          )}
        </Link>
      </li>
      {/* Login y registro */}
      <li className="nav-item d-none d-lg-block">
        <Link className="nav-link" href="/login" style={{color: '#ffe082'}}>Ingresar</Link>
      </li>
      <li className="nav-item d-none d-lg-block">
        <Link className="nav-link" href="/registro" style={{color: '#ffe082'}}>Registro</Link>
      </li>
    </>
  );
}
