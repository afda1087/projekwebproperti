"use client";

import { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  // Load data dari localStorage
  useEffect(() => {
    const saved = localStorage.getItem("wishlist_properties");
    if (saved) {
      try {
        setWishlist(JSON.parse(saved));
      } catch (e) {
        console.error("Gagal membaca wishlist dari storage", e);
      }
    }
  }, []);

  // Simpan data ke localStorage setiap kali wishlist berubah
  useEffect(() => {
    localStorage.setItem("wishlist_properties", JSON.stringify(wishlist));
  }, [wishlist]);

  // Fungsi Toggle Wishlist dengan Validasi ID yang Aman
  const toggleWishlist = (property) => {
    if (!property || property.id === undefined || property.id === null) return;

    setWishlist((prev) => {
      const exists = prev.some(
        (item) => String(item.id) === String(property.id)
      );
      if (exists) {
        return prev.filter(
          (item) => String(item.id) !== String(property.id)
        );
      } else {
        return [...prev, property];
      }
    });
  };

  // Fungsi Cek Status Wishlist per Item
  const isWishlisted = (id) => {
    if (id === undefined || id === null) return false;
    return wishlist.some((item) => String(item.id) === String(id));
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, toggleWishlist, isWishlisted }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    return {
      wishlist: [],
      toggleWishlist: () => {},
      isWishlisted: () => false,
    };
  }
  return context;
} 