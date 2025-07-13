"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

export type CartItem = {
  nombre: string;
  imagen: string;
  precio: number;
  cantidad: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "cantidad">) => void;
  removeFromCart: (nombre: string) => void;
  updateQuantity: (nombre: string, cantidad: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de CartProvider");
  return ctx;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Persistencia en localStorage
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCart(JSON.parse(stored));
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(item: Omit<CartItem, "cantidad">) {
    setCart((prev) => {
      const found = prev.find((i) => i.nombre === item.nombre);
      if (found) {
        return prev.map((i) =>
          i.nombre === item.nombre ? { ...i, cantidad: i.cantidad + 1 } : i
        );
      }
      return [...prev, { ...item, cantidad: 1 }];
    });
  }
  function removeFromCart(nombre: string) {
    setCart((prev) => prev.filter((i) => i.nombre !== nombre));
  }
  function updateQuantity(nombre: string, cantidad: number) {
    setCart((prev) =>
      prev.map((i) =>
        i.nombre === nombre ? { ...i, cantidad: Math.max(1, cantidad) } : i
      )
    );
  }
  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
