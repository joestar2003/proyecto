'use client'

import { useState } from "react";



export default function Login() {

    const [user, setUser]=useState({
            usuario: '¡Bienvenido!',
            passwd: ''

    })




  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{
      background: "linear-gradient(135deg, #0f2027 0%, #2c5364 100%)"
    }}>
      <div className="card shadow-lg p-4" style={{ maxWidth: 400, width: "100%", borderRadius: 20 }}>
        <div className="text-center mb-4">
          <img
            src="https://img.icons8.com/fluency/96/000000/user-male-circle.png"
            alt="user"
            style={{ width: 80, marginBottom: 10 }}
          />
          <h2 className="fw-bold" style={{ color: "#2c5364" }}>{user.usuario}</h2>
          <p className="text-muted mb-0">Inicia sesión para continuar</p>
        </div>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo electrónico</label>
            <input type="email" className="form-control" id="email" placeholder="Ingresa tu correo" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="password" placeholder="Contraseña" required />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="remember" />
            <label className="form-check-label" htmlFor="remember">Recordarme</label>
          </div>
          <button type="submit" className="btn btn-primary w-100" style={{
            background: "linear-gradient(90deg, #11998e 0%, #38ef7d 100%)",
            border: "none"
          }}>
            Iniciar sesión
          </button>
        </form>
        <div className="text-center mt-3">
          <a href="#" className="text-decoration-none" style={{ color: "#11998e" }}>¿Olvidaste tu contraseña?</a>
        </div>
        <div className="text-center mt-2">
          <span className="text-muted">¿No tienes cuenta?</span>
          <a href="#" className="ms-2 text-decoration-none" style={{ color: "#38ef7d" }}>Regístrate</a>
        </div>
      </div>
    </div>

  );
}