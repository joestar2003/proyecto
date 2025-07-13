"use client";
import { useCart } from "../components/CartContext";
import Link from "next/link";

export default function Carrito() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
  const subtotal = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  const envio = cart.length > 0 ? 9.99 : 0;
  const total = subtotal + envio;

  return (
    <div style={{ minHeight: '100vh', background: '#10121a', color: '#ffe082', fontFamily: 'Orbitron, sans-serif', padding: 0 }}>
      <div className="container py-5">
        <h1 className="mb-4" style={{ fontSize: '2.5rem' }}>Carrito de Compras</h1>
        <div className="row">
          <div className="col-lg-8 mb-4">
            {cart.length === 0 ? (
              <div className="alert alert-warning">Tu carrito está vacío.</div>
            ) : (
              cart.map((item) => (
                <div key={item.nombre} className="d-flex align-items-center mb-4 p-3" style={{ background: '#181a20', borderRadius: 16 }}>
                  <img src={item.imagen} alt={item.nombre} style={{ width: 90, height: 90, borderRadius: 12, objectFit: 'cover', marginRight: 24 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 22, color: '#ffe082' }}>{item.nombre}</div>
                    <div style={{ color: '#bdbdbd', fontSize: 15 }}>Figura de madera artesanal</div>
                    <div style={{ color: '#ffe082', fontWeight: 700, fontSize: 20, marginTop: 6 }}>${item.precio.toFixed(2)}</div>
                  </div>
                  <div className="d-flex align-items-center" style={{ gap: 8 }}>
                    <button className="btn btn-dark" style={{ fontWeight: 700, fontSize: 20, borderRadius: 8 }} onClick={() => updateQuantity(item.nombre, item.cantidad - 1)}>-</button>
                    <span style={{ fontWeight: 700, fontSize: 20, minWidth: 32, textAlign: 'center' }}>{item.cantidad}</span>
                    <button className="btn btn-dark" style={{ fontWeight: 700, fontSize: 20, borderRadius: 8 }} onClick={() => updateQuantity(item.nombre, item.cantidad + 1)}>+</button>
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 20, marginLeft: 24 }}>${(item.precio * item.cantidad).toFixed(2)}</div>
                  <button className="btn btn-link text-danger ms-3" title="Eliminar" onClick={() => removeFromCart(item.nombre)}>
                    <i className="bi bi-trash" style={{ fontSize: 24 }}></i>
                  </button>
                </div>
              ))
            )}
            {cart.length > 0 && (
              <button className="btn btn-outline-warning mt-3" onClick={clearCart}>Vaciar Carrito</button>
            )}
            <div className="mt-4">
              <Link href="/figuras" className="btn btn-outline-light">&larr; Seguir Comprando</Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div style={{ background: '#181a20', borderRadius: 16, padding: 24, marginBottom: 24 }}>
              <h4 style={{ color: '#ffe082', fontWeight: 700 }}>Resumen del Pedido</h4>
              <div className="d-flex justify-content-between mt-3 mb-2" style={{ color: '#fff' }}>
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2" style={{ color: '#fff' }}>
                <span>Envío:</span>
                <span>${envio.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-3" style={{ color: '#ffe082', fontWeight: 700, fontSize: 22 }}>
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className="btn btn-warning w-100 fw-bold" disabled={cart.length === 0} onClick={() => alert('¡Compra simulada!')}>
                Proceder al Pago
              </button>
            </div>
            <div style={{ background: '#232532', borderRadius: 16, padding: 18, marginBottom: 18 }}>
              <div style={{ color: '#ffe082', fontWeight: 700, marginBottom: 8 }}>
                <i className="bi bi-gift me-2"></i>¿Tienes un cupón?
              </div>
              <input type="text" className="form-control mb-2" placeholder="Código de descuento" disabled />
              <button className="btn btn-secondary w-100" disabled>Aplicar</button>
            </div>
            <div style={{ background: '#232532', borderRadius: 16, padding: 18 }}>
              <div style={{ color: '#ffe082', fontWeight: 700, marginBottom: 8 }}>Información de Envío</div>
              <ul style={{ color: '#fff', fontSize: 15, marginBottom: 0, paddingLeft: 18 }}>
                <li>Envío gratis en pedidos mayores a $150</li>
                <li>Entrega en 3-5 días laborables</li>
                <li>Embalaje protegido para coleccionables</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
