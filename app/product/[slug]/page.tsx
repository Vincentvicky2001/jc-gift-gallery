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

    const imageMap: any = {
      "birthday-customized-photo-frame": [
        "/images/birthday/birthday-sample-1.jpg",
        "/images/birthday/birthday-sample-1-2.jpg",
      ],
      "birthday-collage-photo-frame": [
        "/images/birthday/birthday-sample-2.jpg",
        "/images/birthday/birthday-sample-2-2.jpg",
      ],
      "birthday-photo-clock": [
        "/images/birthday/birthday-sample-4.jpg",
        "/images/birthday/birthday-sample-4-2.jpg",
      ],
      "birthday-photo-calendar": [
        "/images/birthday/birthday-sample-5.jpg",
        "/images/birthday/birthday-sample-5-2.jpg",
      ],
      "birthday-customized-mugs": [
        "/images/birthday/birthday-sample-6.jpg",
        "/images/birthday/birthday-sample-6-2.jpg",
      ],
      "birthday-custom-keychains": [
        "/images/birthday/birthday-sample-7.jpg",
        "/images/birthday/birthday-sample-7-2.jpg",
      ],
      "birthday-magazines": [
        "/images/birthday/birthday-sample-8.jpg",
        "/images/birthday/birthday-sample-8-2.jpg",
      ],
      "birthday-custom-photo-book": [
        "/images/birthday/birthday-sample-9.jpg",
        "/images/birthday/birthday-sample-9-2.jpg",
      ],
    };

    return imageMap[product.slug] || [product.image];
  };

  const getPrice = () => {
    if (!product) return { price: "", oldPrice: "", offer: "" };

    if (product.price !== "Updating Soon") {
      return {
        price: product.price,
        oldPrice: product.oldPrice,
        offer: product.offer,
      };
    }

    const priceMap: any = {
      "birthday-customized-photo-frame": {
        price: "₹599",
        oldPrice: "₹999",
        offer: "40% OFF",
      },
      "birthday-collage-photo-frame": {
        price: "₹699",
        oldPrice: "₹1199",
        offer: "42% OFF",
      },
      "birthday-photo-clock": {
        price: "₹499",
        oldPrice: "₹799",
        offer: "38% OFF",
      },
      "birthday-photo-calendar": {
        price: "₹399",
        oldPrice: "₹699",
        offer: "43% OFF",
      },
      "birthday-customized-mugs": {
        price: "₹299",
        oldPrice: "₹499",
        offer: "40% OFF",
      },
      "birthday-custom-keychains": {
        price: "₹149",
        oldPrice: "₹299",
        offer: "50% OFF",
      },
      "birthday-magazines": {
        price: "₹799",
        oldPrice: "₹1299",
        offer: "38% OFF",
      },
      "birthday-custom-photo-book": {
        price: "₹999",
        oldPrice: "₹1599",
        offer: "38% OFF",
      },
    };

    return (
      priceMap[product.slug] || {
        price: "₹499",
        oldPrice: "₹799",
        offer: "38% OFF",
      }
    );
  };

  const images = getProductImages();
  const [selectedImage, setSelectedImage] = useState(images[0] || "");

  const [orderName, setOrderName] = useState("");
  const [orderQuantity, setOrderQuantity] = useState("1");
  const [orderPhone, setOrderPhone] = useState("");
  const [orderAddress, setOrderAddress] = useState("");

  const [customName, setCustomName] = useState("");
  const [customQuantity, setCustomQuantity] = useState("1");
  const [customProductType, setCustomProductType] = useState("");
  const [customOccasion, setCustomOccasion] = useState("");
  const [customPrintText, setCustomPrintText] = useState("");
  const [customDetails, setCustomDetails] = useState("");

  if (!product) {
    return (
      <div className="p-10 text-center text-2xl font-bold">
        Product Not Found
      </div>
    );
  }

  const priceData = getPrice();

  const addToCart = () => {
    const savedCart = localStorage.getItem("jc-cart");
    const cart = savedCart ? JSON.parse(savedCart) : [];

    const existingItem = cart.find((item: any) => item.slug === product.slug);

    const updatedCart = existingItem
      ? cart.map((item: any) =>
          item.slug === product.slug
            ? { ...item, quantity: item.quantity + Number(orderQuantity) }
            : item
        )
      : [
          ...cart,
          {
            slug: product.slug,
            name: product.name,
            price: priceData.price,
            image: product.image,
            quantity: Number(orderQuantity),
          },
        ];

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
          price: priceData.price,
          image: product.image,
        },
      ])
    );

    alert("Added to wishlist!");
  };

  const orderMessage = `Hello JC Gift Gallery,

I want to order this product.

Product Name: ${product.name}
Price: ${priceData.price}
Quantity: ${orderQuantity}

Customer Details:
Name: ${orderName}
Phone Number: ${orderPhone}
Delivery Address: ${orderAddress}

Please confirm my order.`;

  const customizeMessage = `Hello JC Gift Gallery,

I want to customize this product.

Selected Product:
Product Name: ${product.name}
Price: ${priceData.price}

Customer Details:
Name: ${customName}

Customization Details:
Quantity: ${customQuantity}
Product Type: ${customProductType}
Occasion: ${customOccasion}
Name/Text To Print: ${customPrintText}
Customization Requirements: ${customDetails}

Reference:
If I have any reference image or design, I will share it directly on WhatsApp.

Please confirm design, price, and delivery details.`;

  const orderWhatsappLink = `https://wa.me/919538952178?text=${encodeURIComponent(
    orderMessage
  )}`;

  const customizeWhatsappLink = `https://wa.me/919538952178?text=${encodeURIComponent(
    customizeMessage
  )}`;

  return (
    <main className="min-h-screen bg-[#fffaf0] px-3 md:px-4 py-5 pb-28">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 bg-white p-4 md:p-6 rounded-3xl shadow-lg">

        <div>
          <div className="bg-[#FFF8ED] rounded-3xl p-2 shadow-md">
            <img
              src={selectedImage || product.image}
              alt={product.name}
              className="w-full h-auto max-h-[520px] object-contain rounded-3xl"
            />
          </div>

          <div className="grid grid-cols-4 gap-2 mt-3">
            {images.map((img: string) => (
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
                  className="w-full h-20 md:h-24 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-black">
            {product.name}
          </h1>

          <div className="flex items-center gap-2 mt-3 text-yellow-500">
            <span>⭐⭐⭐⭐⭐</span>
            <span className="text-gray-600">(5.0)</span>
          </div>

          <div className="flex items-center gap-3 mt-5 flex-wrap">
            <p className="text-3xl md:text-4xl font-bold text-black">
              {priceData.price}
            </p>

            <p className="line-through text-gray-400">
              {priceData.oldPrice}
            </p>

            <span className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-bold">
              {priceData.offer}
            </span>
          </div>

          <p className="text-green-600 mt-2 font-semibold">
            You save ₹400
          </p>

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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
            <div className="bg-[#FFF8ED] p-4 rounded-2xl text-center text-sm">
              🛡️ <br /> Premium Quality
            </div>

            <div className="bg-[#FFF8ED] p-4 rounded-2xl text-center text-sm">
              🎨 <br /> Easy Customization
            </div>

            <div className="bg-[#FFF8ED] p-4 rounded-2xl text-center text-sm">
              🚚 <br /> Fast Delivery
            </div>

            <div className="bg-[#FFF8ED] p-4 rounded-2xl text-center text-sm">
              🔒 <br /> Secure Payment
            </div>
          </div>
        </div>
      </div>

      <section className="max-w-6xl mx-auto mt-5 bg-white p-5 rounded-3xl shadow-lg border border-[#E8E1D6]">
        <h2 className="text-2xl font-bold text-black">
          🛍️ Place Your Order
        </h2>

        <p className="text-gray-600 mt-2 mb-5">
          Please fill your details to place the order on WhatsApp.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Enter Your Name"
            value={orderName}
            onChange={(e) => setOrderName(e.target.value)}
            className="w-full border border-[#E8E1D6] p-3 rounded-xl outline-none"
          />

          <input
            type="number"
            min="1"
            placeholder="Quantity"
            value={orderQuantity}
            onChange={(e) => setOrderQuantity(e.target.value)}
            className="w-full border border-[#E8E1D6] p-3 rounded-xl outline-none"
          />

          <input
            type="tel"
            placeholder="Enter Phone Number"
            value={orderPhone}
            onChange={(e) => setOrderPhone(e.target.value)}
            className="w-full border border-[#E8E1D6] p-3 rounded-xl outline-none"
          />

          <textarea
            placeholder="Enter Delivery Address"
            value={orderAddress}
            onChange={(e) => setOrderAddress(e.target.value)}
            className="w-full border border-[#E8E1D6] p-3 rounded-xl h-24 outline-none"
          />
        </div>

        <a
          href={orderWhatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex items-center justify-center bg-[#25D366] text-white py-4 rounded-2xl font-bold text-lg"
        >
          🟢 Order on WhatsApp
        </a>
      </section>

      <section className="max-w-6xl mx-auto mt-5 bg-[#FFF8ED] p-5 rounded-3xl shadow-lg border border-[#E8E1D6]">
        <h2 className="text-2xl font-bold text-[#B8860B]">
          🎁 Customize Your Gift
        </h2>

        <p className="text-gray-600 mt-2 mb-5">
          If you are not satisfied with the product and need customization,
          please give details below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Enter Your Name"
            value={customName}
            onChange={(e) => setCustomName(e.target.value)}
            className="w-full border border-[#E8E1D6] p-3 rounded-xl outline-none"
          />

          <input
            type="number"
            min="1"
            placeholder="Quantity"
            value={customQuantity}
            onChange={(e) => setCustomQuantity(e.target.value)}
            className="w-full border border-[#E8E1D6] p-3 rounded-xl outline-none"
          />

          <select
            value={customProductType}
            onChange={(e) => setCustomProductType(e.target.value)}
            className="w-full border border-[#E8E1D6] p-3 rounded-xl outline-none"
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
          </select>

          <input
            type="text"
            placeholder="Name/Text To Print"
            value={customPrintText}
            onChange={(e) => setCustomPrintText(e.target.value)}
            className="w-full border border-[#E8E1D6] p-3 rounded-xl outline-none"
          />

          <select
            value={customOccasion}
            onChange={(e) => setCustomOccasion(e.target.value)}
            className="w-full border border-[#E8E1D6] p-3 rounded-xl outline-none"
          >
            <option value="">Select Occasion</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Wedding</option>
            <option>Love / Couple</option>
            <option>Friendship</option>
            <option>Corporate</option>
            <option>Festival</option>
          </select>

          <textarea
            placeholder="Describe Your Customization Requirements..."
            value={customDetails}
            onChange={(e) => setCustomDetails(e.target.value)}
            className="md:col-span-3 w-full border border-[#E8E1D6] p-3 rounded-xl h-28 outline-none"
          />
        </div>

        <div className="mt-5 bg-white border border-dashed border-[#B8860B] p-4 rounded-2xl">
          <p className="text-sm text-gray-700">
            If you have any reference image or design,
            please share it directly on WhatsApp after clicking order.
          </p>

          <p className="text-sm text-green-600 mt-2 font-semibold">
            ✅ Share reference images, screenshots, or design ideas directly
            in WhatsApp for better customization.
          </p>
        </div>

        <a
          href={customizeWhatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex items-center justify-center bg-[#25D366] text-white py-4 rounded-2xl font-bold text-lg"
        >
          🎁 Customize & Order on WhatsApp →
        </a>
      </section>
    </main>
  );
}