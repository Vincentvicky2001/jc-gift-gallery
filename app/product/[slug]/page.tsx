"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { products } from "../../../components/ProductData";

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;

  const product = products.find((p) => p.slug === slug);

  const getProductImages = () => {
    if (!product) return [];

    if (product.slug === "birthday-customized-photo-frame") {
      return [
        "/images/birthday/birthday-sample-1.jpg",
        "/images/birthday/birthday-sample-1-2.jpg",
      ];
    }

    if (product.slug === "birthday-collage-photo-frame") {
      return [
        "/images/birthday/birthday-sample-2.jpg",
        "/images/birthday/birthday-sample-2-2.jpg",
      ];
    }

    if (product.slug === "birthday-photo-clock") {
      return [
        "/images/birthday/birthday-sample-4.jpg",
        "/images/birthday/birthday-sample-4-2.jpg",
      ];
    }

    if (product.slug === "birthday-photo-calendar") {
      return [
        "/images/birthday/birthday-sample-5.jpg",
        "/images/birthday/birthday-sample-5-2.jpg",
      ];
    }

    if (product.slug === "birthday-customized-mugs") {
      return [
        "/images/birthday/birthday-sample-6.jpg",
        "/images/birthday/birthday-sample-6-2.jpg",
      ];
    }

    if (product.slug === "birthday-custom-keychains") {
      return [
        "/images/birthday/birthday-sample-7.jpg",
        "/images/birthday/birthday-sample-7-2.jpg",
      ];
    }

    if (product.slug === "birthday-magazines") {
      return [
        "/images/birthday/birthday-sample-8.jpg",
        "/images/birthday/birthday-sample-8-2.jpg",
      ];
    }

    if (product.slug === "birthday-custom-photo-book") {
      return [
        "/images/birthday/birthday-sample-9.jpg",
        "/images/birthday/birthday-sample-9-2.jpg",
      ];
    }

    return [product.image];
  };

  const images = getProductImages();
  const [selectedImage, setSelectedImage] = useState(images[0] || "");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [productType, setProductType] = useState("");
  const [occasion, setOccasion] = useState("");
  const [printText, setPrintText] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [details, setDetails] = useState("");

  if (!product) {
    return (
      <div className="p-10 text-center text-2xl font-bold">
        Product Not Found
      </div>
    );
  }

  const addToCart = () => {
    const savedCart = localStorage.getItem("jc-cart");
    const cart = savedCart ? JSON.parse(savedCart) : [];

    const existingItem = cart.find((item: any) => item.slug === product.slug);

    let updatedCart;

    if (existingItem) {
      updatedCart = cart.map((item: any) =>
        item.slug === product.slug
          ? { ...item, quantity: item.quantity + Number(quantity) }
          : item
      );
    } else {
      updatedCart = [
        ...cart,
        {
          slug: product.slug,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: Number(quantity),
        },
      ];
    }

    localStorage.setItem("jc-cart", JSON.stringify(updatedCart));
    alert("Added to cart!");
  };

  const addToWishlist = () => {
    const savedWishlist = localStorage.getItem("jc-wishlist");
    const wishlist = savedWishlist ? JSON.parse(savedWishlist) : [];

    const exists = wishlist.find((item: any) => item.slug === product.slug);

    if (exists) {
      alert("Already in wishlist!");
      return;
    }

    localStorage.setItem(
      "jc-wishlist",
      JSON.stringify([
        ...wishlist,
        {
          slug: product.slug,
          name: product.name,
          price: product.price,
          image: product.image,
        },
      ])
    );

    alert("Added to wishlist!");
  };

  const whatsappMessage = `Hello JC Gift Gallery,

I want to customize and order this product.

Selected Product:
Product Name: ${product.name}
Product Price: ${product.price}

Customer Details:
Name: ${name}
Phone Number: ${phone}

Customization Details:
Product Type: ${productType}
Occasion: ${occasion}
Name/Text To Print: ${printText}
Quantity: ${quantity}
Requirements: ${details}

Reference:
If I have any reference image or design, I will share it directly on WhatsApp.

Please confirm design, price, and delivery details.`;

  const whatsappLink = `https://wa.me/919538952178?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <main className="min-h-screen bg-[#fffaf0] px-4 py-8 pb-28">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 bg-white p-5 rounded-3xl shadow-lg">
        <div>
          <img
            src={selectedImage || product.image}
            alt={product.name}
            className="w-full h-[420px] object-cover rounded-3xl shadow-md"
          />

          <div className="grid grid-cols-4 gap-3 mt-4">
            {images.map((img) => (
              <button
                key={img}
                onClick={() => setSelectedImage(img)}
                className={`border rounded-xl overflow-hidden ${
                  selectedImage === img
                    ? "border-[#B8860B] border-4"
                    : "border-[#E8E1D6]"
                }`}
              >
                <img
                  src={img}
                  alt={product.name}
                  className="w-full h-24 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold text-black">
            {product.name}
          </h1>

          <div className="flex items-center gap-2 mt-3 text-yellow-500">
            <span>⭐⭐⭐⭐⭐</span>
            <span className="text-gray-600">(5.0)</span>
          </div>

          <div className="flex items-center gap-3 mt-5">
            <p className="text-3xl font-bold text-black">
              {product.price}
            </p>

            {product.oldPrice && (
              <p className="line-through text-gray-400">
                {product.oldPrice}
              </p>
            )}

            {product.offer && (
              <span className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-bold">
                {product.offer}
              </span>
            )}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              onClick={addToWishlist}
              className="bg-pink-100 text-red-600 py-3 rounded-xl font-bold"
            >
              ❤️ Wishlist
            </button>

            <button
              onClick={addToCart}
              className="bg-[#D4A017] text-white py-3 rounded-xl font-bold"
            >
              🛒 Add to Cart
            </button>
          </div>

          <div className="mt-8 bg-[#FFF8ED] p-5 rounded-3xl border border-[#E8E1D6]">
            <h2 className="text-2xl font-bold text-[#B8860B] mb-3">
              🎁 Customize Your Gift
            </h2>

            <p className="text-gray-600 mb-6">
              Tell us what product you need, how you want it customized,
              and place your order directly on WhatsApp.
            </p>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border p-3 rounded-xl outline-none"
              />

              <input
                type="tel"
                placeholder="Enter Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border p-3 rounded-xl outline-none"
              />

              <select
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
                className="w-full border p-3 rounded-xl outline-none"
              >
                <option value="">Select Product Type</option>
                <option>Photo Frame</option>
                <option>Mug</option>
                <option>Keychain</option>
                <option>Combo Gift</option>
                <option>Photo Book</option>
                <option>T Shirt</option>
                <option>Acrylic Frame</option>
                <option>Sticker / Label</option>
                <option>Resin Art</option>
                <option>Other Customized Gift</option>
              </select>

              <select
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                className="w-full border p-3 rounded-xl outline-none"
              >
                <option value="">Select Occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Wedding</option>
                <option>Love / Couple</option>
                <option>Friendship</option>
                <option>Corporate</option>
                <option>Festival</option>
                <option>Other Occasion</option>
              </select>

              <input
                type="text"
                placeholder="Name/Text To Print"
                value={printText}
                onChange={(e) => setPrintText(e.target.value)}
                className="w-full border p-3 rounded-xl outline-none"
              />

              <input
                type="number"
                min="1"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full border p-3 rounded-xl outline-none"
              />

              <textarea
                placeholder="Describe Your Customization Requirements..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="w-full border p-3 rounded-xl h-32 outline-none"
              />

              <div className="bg-white border border-dashed border-[#B8860B] p-4 rounded-2xl">
                <p className="text-sm text-gray-700">
                  If you have any reference image or design,
                  please share it directly on WhatsApp after clicking order.
                </p>

                <p className="text-sm text-green-600 mt-2 font-semibold">
                  ✅ Share reference images, screenshots, or design ideas
                  directly in WhatsApp for better customization.
                </p>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-2xl font-bold text-lg shadow-md hover:bg-green-600 transition"
              >
                🎁 Customize & Order on WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}