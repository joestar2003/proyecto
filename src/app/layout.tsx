import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css"
import NavbarAuth from "./components/NavbarAuth";
import { Providers } from "./providers";
import Navbar from "./components/Navbar";
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
            <Navbar />
            {children}
            <footer className="py-5 bg-dark">
              <div className="container">
                <p className="m-0 text-center text-white">
                  &copy; {new Date().getFullYear()} ML Wood Figures - Fan Art Mobile Legends
                </p>
              </div>
            </footer>
          </Providers>
        </CartProvider>
      </body>
    </html>
  );
}
