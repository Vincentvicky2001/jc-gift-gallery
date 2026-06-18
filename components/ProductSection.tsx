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

    const updatedWishlist = [...wishlist, product];
    localStorage.setItem("jc-wishlist", JSON.stringify(updatedWishlist));
    alert("Added to wishlist!");
  };

  const addToCart = (product: Product) => {
    const savedCart = localStorage.getItem("jc-cart");
    const cart = savedCart ? JSON.parse(savedCart) : [];

    const exists = cart.find(
      (item: any) => item.slug === product.slug
    );

    let updatedCart;

    if (exists) {
      updatedCart = cart.map((item: any) =>
        item.slug === product.slug
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    localStorage.setItem("jc-cart", JSON.stringify(updatedCart));
    alert("Added to cart!");
  };

  return (
    <section
      id={title === "Best Seller" ? "best-seller" : ""}
      className="px-4 py-6"
    >
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold text-black">{title}</h2>

        <a href="/search" className="text-black font-semibold">
          View All →
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.slice(0, 4).map((product) => (
          <div
            key={`${title}-${product.slug}`}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#E8E1D6] hover:shadow-lg transition"
          >
            <div className="relative">
              <a href={`/product/${product.slug}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-52 object-cover"
                />
              </a>

              <button
                onClick={() => addToWishlist(product)}
                className="absolute top-3 right-3 bg-white text-red-500 w-10 h-10 rounded-full shadow font-bold"
              >
                ❤️
              </button>

              <div className="absolute top-3 left-3 bg-white text-black text-xs px-3 py-1 rounded-full font-semibold">
                {product.offer || "Offer"}
              </div>
            </div>

            <div className="p-4">
              <a href={`/product/${product.slug}`}>
                <h3 className="font-bold text-black text-lg">
                  {product.name}
                </h3>
              </a>

              <div className="mt-2 text-sm">
                ⭐⭐⭐⭐⭐
                <span className="text-gray-500 ml-1">(5.0)</span>
              </div>

              <div className="mt-3 flex items-center gap-2">
                <p className="text-[#B8860B] text-xl font-bold">
                  {product.price}
                </p>

                <p className="text-gray-400 line-through">
                  {product.oldPrice}
                </p>
              </div>

              <div className="mt-4 space-y-1 text-sm text-black">
                <p>⚡ Fast Delivery</p>
                <p>🔒 Secure Payment</p>
                <p>💯 Premium Quality</p>
                <p>🔥 Trending</p>
                <p>🚀 Limited Stock</p>
              </div>

              <button
                onClick={() => addToCart(product)}
                className="mt-4 w-full bg-[#D4A017] text-white py-3 rounded-xl font-bold"
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