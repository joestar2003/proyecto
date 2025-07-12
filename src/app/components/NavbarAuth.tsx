"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

function NavbarAuthInner() {
  const { data: session, status } = useSession();

  if (status === "loading") return null;

  if (session?.user) {
    return (
      <>
        <li className="nav-item d-flex align-items-center" style={{ gap: 8 }}>
          <span style={{ color: '#5b5b7a', fontWeight: 500, fontSize: '1.1rem', marginRight: 8 }}>
            Hola, {session.user.name}!
          </span>
          <button
            className="btn btn-outline-primary"
            style={{ fontWeight: 500, borderRadius: 8, padding: '4px 18px', fontSize: '1.05rem', borderWidth: 2 }}
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Cerrar Sesión
          </button>
        </li>
      </>
    );
  }

  return (
    <>
      <li className="nav-item"><Link className="nav-link" href="/login">Login</Link></li>
      <li className="nav-item"><Link className="nav-link" href="/registro">Registro</Link></li>
    </>
  );
}

export default function NavbarAuth() {
  return <NavbarAuthInner />;
}
