"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

type CartItem = {
  quantity?: number;
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  const updateCartCount = () => {
    try {
      const savedCart = JSON.parse(
        localStorage.getItem("jc-cart") || "[]"
      );

      if (!Array.isArray(savedCart)) {
        setCartCount(0);
        return;
      }

      const totalQuantity = savedCart.reduce(
        (total: number, item: CartItem) =>
          total + (Number(item.quantity) || 1),
        0
      );

      setCartCount(totalQuantity);
    } catch {
      setCartCount(0);
    }
  };

  const updateWishlistCount = () => {
    try {
      const savedWishlist = JSON.parse(
        localStorage.getItem("jc-wishlist") || "[]"
      );

      setWishlistCount(
        Array.isArray(savedWishlist)
          ? savedWishlist.length
          : 0
      );
    } catch {
      setWishlistCount(0);
    }
  };

  useEffect(() => {
    updateCartCount();
    updateWishlistCount();

    window.addEventListener("storage", updateCartCount);
    window.addEventListener("storage", updateWishlistCount);

    window.addEventListener(
      "cartUpdated",
      updateCartCount
    );

    window.addEventListener(
      "wishlistUpdated",
      updateWishlistCount
    );

    return () => {
      window.removeEventListener(
        "storage",
        updateCartCount
      );

      window.removeEventListener(
        "storage",
        updateWishlistCount
      );

      window.removeEventListener(
        "cartUpdated",
        updateCartCount
      );

      window.removeEventListener(
        "wishlistUpdated",
        updateWishlistCount
      );
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        {/* Menu Button */}
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-label="Open navigation menu"
          className="text-3xl text-black"
        >
          ☰
        </button>

        {/* Logo */}
        <a href="/" aria-label="JC Gift Gallery home">
          <img
            src="/logo.jpg"
            alt="JC Gift Gallery"
            className="w-[190px] object-contain sm:w-[260px] md:w-[360px]"
          />
        </a>

        {/* Wishlist, Cart and Notification */}
        <div className="flex items-center gap-4 text-2xl md:gap-5 md:text-3xl">
          <a
  href="/wishlist"
  aria-label="Open wishlist"
  className="relative flex items-center justify-center"
>
 <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-50 transition hover:scale-110 hover:bg-pink-100">
  <Heart
    size={28}
    fill="#ec4899"
    color="#ec4899"
    strokeWidth={2}
  />
</span>

  {wishlistCount > 0 && (
    <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
      {wishlistCount > 99
        ? "99+"
        : wishlistCount}
    </span>
  )}
</a>

          <a
            href="/cart"
            aria-label="Open shopping cart"
            className="relative"
          >
            🛒

            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-bold text-white">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </a>

          <a
            href="/notifications"
            aria-label="Open notifications"
            className="relative"
          >
            🔔

            <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
              2
            </span>
          </a>
        </div>
      </div>

      {/* Dropdown Menu */}
      {open && (
        <nav className="space-y-4 border-t border-[#E8E1D6] bg-white px-6 py-5 shadow-md">
          <a
            href="/"
            className="block font-semibold text-black hover:text-[#B8860B]"
          >
            Home
          </a>

          <a
            href="/wishlist"
            className="flex items-center justify-between font-semibold text-black hover:text-[#B8860B]"
          >
            <span>Wishlist</span>

            {wishlistCount > 0 && (
              <span className="rounded-full bg-[#FFF4D6] px-3 py-1 text-sm text-[#B8860B]">
                {wishlistCount}
              </span>
            )}
          </a>

          <a
            href="/cart"
            className="flex items-center justify-between font-semibold text-black hover:text-[#B8860B]"
          >
            <span>Shopping Cart</span>

            {cartCount > 0 && (
              <span className="rounded-full bg-[#FFF4D6] px-3 py-1 text-sm text-[#B8860B]">
                {cartCount}
              </span>
            )}
          </a>

          <a
            href="/about"
            className="block font-semibold text-black hover:text-[#B8860B]"
          >
            About
          </a>

          <a
            href="/reviews"
            className="block font-semibold text-black hover:text-[#B8860B]"
          >
            Reviews
          </a>

          <a
            href="/contact"
            className="block font-semibold text-black hover:text-[#B8860B]"
          >
            Contact
          </a>

          <a
            href="/faq"
            className="block font-semibold text-black hover:text-[#B8860B]"
          >
            FAQ
          </a>

          <a
            href="/admin"
            className="block font-semibold text-black hover:text-[#B8860B]"
          >
            Admin
          </a>
        </nav>
      )}
    </header>
  );
}