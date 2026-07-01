"use client";

type Props = {
  title: string;
};

import { products } from "./ProductData";

type Product = {
  slug: string;
  name: string;
  price: string;
  oldPrice?: string;
  offer?: string;
  image: string;
};

export default function ProductSection({ title }: Props) {
  const addToWishlist = (product: Product) => {
    const savedWishlist = localStorage.getItem("jc-wishlist");
    const wishlist = savedWishlist ? JSON.parse(savedWishlist) : [];

    const exists = wishlist.find(
      (item: Product) => item.slug === product.slug
    );

    if (exists) {
      alert("Already added to wishlist!");
      return;
    }

    localStorage.setItem("jc-wishlist", JSON.stringify([...wishlist, product]));
    alert("Added to wishlist!");
  };

  const addToCart = (product: Product) => {
    const savedCart = localStorage.getItem("jc-cart");
    const cart = savedCart ? JSON.parse(savedCart) : [];

    const exists = cart.find((item: any) => item.slug === product.slug);

    const updatedCart = exists
      ? cart.map((item: any) =>
          item.slug === product.slug
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      : [...cart, { ...product, quantity: 1 }];

    localStorage.setItem("jc-cart", JSON.stringify(updatedCart));
    alert("Added to cart!");
  };

  return (
    <section
      id={title === "Best Seller" ? "best-seller" : ""}
      className="px-4 py-8 bg-gradient-to-b from-[#FFFDF8] to-[#FFF6E9]"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-black text-black">{title}</h2>

        <a href="/search" className="text-black font-bold">
          View All →
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {products.slice(0, 4).map((product) => (
          <div
            key={`${title}-${product.slug}`}
            className="
              bg-white
              rounded-3xl
              overflow-hidden
              shadow-lg
              hover:shadow-2xl
              hover:-translate-y-2
              transition-all
              duration-300
              border
              border-[#F3E5C8]
            "
          >
           <div className="relative">
  <a
    href={`/product/${product.slug}`}
    className="relative block overflow-hidden"
  >
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-56 sm:h-72 object-cover transition duration-500 hover:scale-105"
    />

    <img
      src={
        product.image.includes(".jpg")
          ? product.image.replace(".jpg", "-2.jpg")
          : product.image
      }
      alt={product.name}
      className="absolute inset-0 w-full h-56 sm:h-72 object-cover opacity-0 hover:opacity-100 transition duration-500"
    />
  </a>

              <button
                onClick={() => addToWishlist(product)}
                className="absolute top-3 right-3 bg-white text-red-500 w-11 h-11 rounded-full shadow-lg font-bold text-lg"
              >
                ❤️
              </button>

              <div className="absolute top-3 left-3 bg-white text-black text-xs px-3 py-1 rounded-full font-bold shadow">
                {product.offer || "New"}
              </div>
            </div>

            <div className="p-4 space-y-3">
              <a href={`/product/${product.slug}`}>
                <h3 className="font-black text-black text-lg leading-snug">
                  {product.name}
                </h3>
              </a>

              <div className="flex items-center gap-2 text-yellow-500 text-sm">
                ⭐⭐⭐⭐⭐
                <span className="text-gray-600 text-sm">(5.0)</span>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <p className="text-2xl font-black text-black">
                  {product.price}
                </p>

                {product.oldPrice && (
                  <p className="line-through text-gray-400 text-sm">
                    {product.oldPrice}
                  </p>
                )}
              </div>

              <div className="space-y-1 text-sm text-[#3B2F1C] font-medium">
                <p>⚡ Fast Delivery</p>
                <p>🔒 Secure Payment</p>
                <p>💯 Premium Quality</p>
                <p>🔥 Trending</p>
              </div>

              <button
                onClick={() => addToCart(product)}
                className="w-full bg-gradient-to-r from-[#D4A017] to-[#B8860B] text-white py-3 rounded-2xl font-bold shadow-lg"
              >
                🛒 Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}