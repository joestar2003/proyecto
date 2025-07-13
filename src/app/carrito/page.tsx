"use client";
import { useCart } from "../components/CartContext";
import Link from "next/link";

export default function Carrito() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const subtotal = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  const envio = cart.length > 0 ? 12000 : 0; // Envío fijo en COP
  const total = subtotal + envio;
  const currency = 'COP';
  function formatCOP(value: number) {
    return value.toLocaleString('es-CO', { style: 'currency', currency });
  }

  if (cart.length === 0) {
    return (
      <div style={{minHeight: '70vh', color: '#ffe082', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#181b23'}}>
        <h2 style={{fontWeight: 700, fontSize: 32, marginBottom: 24}}>Tu carrito está vacío</h2>
        <Link href="/figuras" style={{background: '#ffe082', color: '#232532', fontWeight: 700, borderRadius: 10, fontSize: 18, padding: '12px 32px', textDecoration: 'none'}}>Ver Catálogo</Link>
      </div>
    );
  }

  return (
    <div style={{minHeight: '100vh', background: '#181b23', color: '#ffe082', fontFamily: 'Orbitron, sans-serif', padding: 0}}>
      <div style={{maxWidth: 1400, margin: '0 auto', padding: '48px 0 0 0', display: 'flex', gap: 40, alignItems: 'flex-start', flexWrap: 'wrap'}}>
        <div style={{flex: '2 1 600px', minWidth: 380}}>
          <h1 style={{fontWeight: 900, fontSize: '2.5rem', marginBottom: 32, color: '#ffe082'}}>Carrito de Compras</h1>
          {cart.map((item) => (
            <div key={item.nombre} style={{background: '#23243a', borderRadius: 18, display: 'flex', alignItems: 'center', padding: 24, marginBottom: 28, boxShadow: '0 2px 12px 0 #ffe08211', gap: 28}}>
              <img src={item.imagen} alt={item.nombre} style={{height: 90, width: 90, borderRadius: 12, background: '#23243a', objectFit: 'cover', border: '2px solid #ffe08222'}} />
              <div style={{flex: 1}}>
                <div style={{fontWeight: 700, fontSize: 24, color: '#ffe082'}}>{item.nombre}</div>
                <div style={{color: '#ffe082bb', fontSize: 15, marginBottom: 10}}>Figura de madera artesanal</div>
                <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
                  <button onClick={() => updateQuantity(item.nombre, item.cantidad - 1)} style={{background: '#181b23', color: '#ffe082', border: 'none', borderRadius: 8, width: 36, height: 36, fontSize: 22, fontWeight: 700, cursor: 'pointer', boxShadow: '0 1px 4px #ffe08222'}}>-</button>
                  <span style={{fontWeight: 700, fontSize: 20, minWidth: 32, textAlign: 'center'}}>{item.cantidad}</span>
                  <button onClick={() => updateQuantity(item.nombre, item.cantidad + 1)} style={{background: '#181b23', color: '#ffe082', border: 'none', borderRadius: 8, width: 36, height: 36, fontSize: 22, fontWeight: 700, cursor: 'pointer', boxShadow: '0 1px 4px #ffe08222'}}>+</button>
                </div>
              </div>
              <div style={{fontWeight: 700, fontSize: 24, color: '#ffe082', minWidth: 110, textAlign: 'right'}}>{formatCOP(item.precio * item.cantidad)}</div>
              <button onClick={() => removeFromCart(item.nombre)} style={{background: 'none', border: 'none', marginLeft: 18, cursor: 'pointer'}}>
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M6 6l12 12M6 18L18 6" stroke="#ff5252" strokeWidth="2" strokeLinecap="round"/></svg>
              </button>
            </div>
          ))}
          <button onClick={clearCart} style={{background: 'none', color: '#ffe082', border: '2px solid #ffe082', borderRadius: 10, fontWeight: 700, fontSize: 18, padding: '10px 32px', marginTop: 8, cursor: 'pointer'}}>Vaciar Carrito</button>
        </div>
        <div style={{flex: '1 1 340px', minWidth: 320, display: 'flex', flexDirection: 'column', gap: 24}}>
          <div style={{background: '#23243a', borderRadius: 16, padding: 28, marginBottom: 0, boxShadow: '0 2px 12px 0 #ffe08211'}}>
            <div style={{fontWeight: 900, fontSize: 26, color: '#ffe082', marginBottom: 18}}>Resumen del Pedido</div>
            <div style={{color: '#ffe082cc', fontSize: 18, marginBottom: 8, display: 'flex', justifyContent: 'space-between'}}>
              <span>Subtotal:</span>
              <span>{formatCOP(subtotal)}</span>
            </div>
            <div style={{color: '#ffe082cc', fontSize: 18, marginBottom: 18, display: 'flex', justifyContent: 'space-between'}}>
              <span>Envío:</span>
              <span>{formatCOP(envio)}</span>
            </div>
            <div style={{fontWeight: 900, fontSize: 24, color: '#ffe082', margin: '18px 0 18px 0', display: 'flex', justifyContent: 'space-between'}}>
              <span>Total:</span>
              <span>{formatCOP(total)}</span>
            </div>
            <button style={{width: '100%', background: '#ffe082', color: '#232532', fontWeight: 700, fontSize: '1.1rem', border: 'none', borderRadius: 10, padding: '14px 0', marginTop: 8, boxShadow: '0 2px 18px 0 #ffe08233', cursor: 'pointer'}}>Proceder al Pago</button>
          </div>
          <div style={{background: '#23243a', borderRadius: 16, padding: 24, marginBottom: 0, display: 'flex', alignItems: 'center', gap: 18}}>
            <span style={{background: 'rgba(255,224,130,0.12)', borderRadius: 12, padding: 10, display: 'flex', alignItems: 'center'}}>
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="4" rx="2" fill="#ffe082"/><rect x="9" y="4" width="6" height="16" rx="2" fill="#ffe082"/></svg>
            </span>
            <div style={{flex: 1}}>
              <div style={{fontWeight: 700, fontSize: 18, color: '#ffe082'}}>¿Tienes un cupón?</div>
              <div style={{display: 'flex', gap: 8, marginTop: 8}}>
                <input type="text" placeholder="Código de descuento" style={{flex: 1, padding: '10px 12px', borderRadius: 8, border: 'none', background: '#181b23', color: '#ffe082', fontSize: 16, outline: 'none'}} />
                <button style={{background: '#ffe082', color: '#232532', fontWeight: 700, borderRadius: 8, fontSize: 16, padding: '10px 18px', border: 'none', cursor: 'pointer'}}>Aplicar</button>
              </div>
            </div>
          </div>
          <div style={{background: '#23243a', borderRadius: 16, padding: 24, color: '#ffe082', fontSize: 15, marginBottom: 0}}>
            <div style={{fontWeight: 700, fontSize: 18, marginBottom: 6}}>Información de Envío</div>
            <ul style={{paddingLeft: 18, margin: 0}}>
              <li>Envío gratis en pedidos mayores a {formatCOP(150000)}</li>
              <li>Entrega en 3-5 días laborables</li>
              <li>Embalaje protegido para coleccionables</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
