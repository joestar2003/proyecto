import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar";
import { Providers } from "./providers";
import { CartProvider } from "./components/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mobile Legends Wood Figures",
  description: "Venta de figuras de acción de Mobile Legends hechas de madera",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <CartProvider>
          <Providers>
            <div className="container-fluid px-0">
              {/* Navbar moderna y responsiva 100% client */}
              <Navbar />
              {children}
              <footer className="py-5" style={{background: '#181a20', borderTop: '1.5px solid #23243a'}}>
                <div className="container">
                  <p className="m-0 text-center" style={{color: '#ffe082'}}>
                    &copy; {new Date().getFullYear()} ML Wood Figures - Fan Art Mobile Legends
                  </p>
                </div>
              </footer>
              <style>{`
                .navbar-nav .nav-link {
                  transition: color 0.18s;
                }
                .navbar-nav .nav-link:hover {
                  color: #8f5cff !important;
                }
                @media (max-width: 991px) {
                  .navbar-nav {
                    gap: 0.5rem !important;
                  }
                }
              `}</style>
            </div>
          </Providers>
        </CartProvider>
      </body>
    </html>
  );
}
