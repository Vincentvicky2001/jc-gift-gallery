"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { products } from "../../../components/ProductData";

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <div className="p-10 text-center text-2xl font-bold">Product Not Found</div>;
  }

  const imageMap: Record<string, string[]> = {
    "birthday-customized-photo-frame": ["/images/birthday/birthday-sample-1.jpg", "/images/birthday/birthday-sample-1-2.jpg"],
    "birthday-collage-photo-frame": ["/images/birthday/birthday-sample-2.jpg", "/images/birthday/birthday-sample-2-2.jpg"],
    "birthday-photo-clock": ["/images/birthday/birthday-sample-4.jpg", "/images/birthday/birthday-sample-4-2.jpg"],
    "birthday-photo-calendar": ["/images/birthday/birthday-sample-5.jpg", "/images/birthday/birthday-sample-5-2.jpg"],
    "birthday-customized-mugs": ["/images/birthday/birthday-sample-6.jpg", "/images/birthday/birthday-sample-6-2.jpg"],
    "birthday-custom-keychains": ["/images/birthday/birthday-sample-7.jpg", "/images/birthday/birthday-sample-7-2.jpg"],
    "birthday-magazines": ["/images/birthday/birthday-sample-8.jpg", "/images/birthday/birthday-sample-8-2.jpg"],
    "birthday-custom-photo-book": ["/images/birthday/birthday-sample-9.jpg", "/images/birthday/birthday-sample-9-2.jpg"],

    "anniversary-photo-frame": ["/images/anniversary/anniversary-1.jpg", "/images/anniversary/anniversary-1-2.jpg"],
    "anniversary-collage-photo-frame": ["/images/anniversary/anniversary-2.jpg", "/images/anniversary/anniversary-2-2.jpg"],
    "anniversary-photo-wall-collage": ["/images/anniversary/anniversary-5.jpg", "/images/anniversary/anniversary-5-2.jpg"],
    "anniversary-mugs": ["/images/anniversary/anniversary-6.jpg", "/images/anniversary/anniversary-6-2.jpg"],
    "anniversary-keychains": ["/images/anniversary/anniversary-7.jpg", "/images/anniversary/anniversary-7-2.jpg"],

    "couple-photo-frame": ["/images/couple/couple-1.jpg", "/images/couple/couple-1-2.jpg"],
    "customized-couple-mugs": ["/images/couple/couple-2.jpg", "/images/couple/couple-2-2.jpg"],
    "couple-customized-keychains": ["/images/couple/couple-3.jpg", "/images/couple/couple-3-2.jpg"],
    "love-message-photo-frame": ["/images/couple/couple-4.jpg", "/images/couple/couple-4-2.jpg"],
    "couple-acrylic-photo-frame": ["/images/couple/couple-5.jpg", "/images/couple/couple-5-2.jpg"],
    "couple-collage-photo-frame": ["/images/couple/couple-6.jpg", "/images/couple/couple-6-2.jpg"],
    "couple-mosaic-photo-frame": ["/images/couple/couple-7.jpg", "/images/couple/couple-7-2.jpg"],
    "customized-photo-album": ["/images/couple/couple-8.jpg", "/images/couple/couple-8-2.jpg"],
    "couple-customized-photo-book": ["/images/couple/couple-9.jpg", "/images/couple/couple-9-2.jpg"],
    "customized-magazines": ["/images/couple/couple-10.jpg", "/images/couple/couple-10-2.jpg"],

    "photo-mug": ["/images/mugs/mugs-1.jpg", "/images/mugs/mugs-1-2.jpg"],
    "couple-mug-item": ["/images/mugs/mugs-2.jpg", "/images/mugs/mugs-2-2.jpg"],
    "magic-mug": ["/images/mugs/mugs-3.jpg", "/images/mugs/mugs-3-2.jpg"],
    "name-printed-mugs": ["/images/mugs/mugs-4.jpg", "/images/mugs/mugs-4-2.jpg"],
    "birthday-mug": ["/images/mugs/mugs-5.jpg", "/images/mugs/mugs-5-2.jpg"],
    "best-friends-mug": ["/images/mugs/mugs-6.jpg", "/images/mugs/mugs-6-2.jpg"],
    "anniversary-mug": ["/images/mugs/mugs-7.jpg", "/images/mugs/mugs-7-2.jpg"],
    "magic-mirror": ["/images/mugs/mugs-8.jpg", "/images/mugs/mugs-8-2.jpg"],

    "customized-keychain": ["/images/keychains/keychain-1.jpg", "/images/keychains/keychain-1-2.jpg"],
    "name-keychain": ["/images/keychains/keychain-2.jpg", "/images/keychains/keychain-2-2.jpg"],
    "photo-keychain": ["/images/keychains/keychain-3.jpg", "/images/keychains/keychain-3-2.jpg"],
    "couple-keychain": ["/images/keychains/keychain-4.jpg", "/images/keychains/keychain-4-2.jpg"],
    "logo-keychain": ["/images/keychains/keychain-5.jpg", "/images/keychains/keychain-5-2.jpg"],

    "photo-frame-mug-combo": ["/images/combo/combo-1.jpg", "/images/combo/combo-1-2.jpg"],
    "mug-keychains-combo": ["/images/combo/combo-2.jpg", "/images/combo/combo-2-2.jpg"],
    "photo-frame-keychains-combo": ["/images/combo/combo-3.jpg", "/images/combo/combo-3-2.jpg"],
    "mug-greeting-card-combo": ["/images/combo/combo-4.jpg", "/images/combo/combo-4-2.jpg"],

    "frames-customized-photo-frame": ["/images/frames/frames-1.jpg", "/images/frames/frames-1-2.jpg"],
    "single-photo-frame": ["/images/frames/frames-2.jpg", "/images/frames/frames-2-2.jpg"],
    "frames-couple-photo-frame": ["/images/frames/frames-3.jpg", "/images/frames/frames-3-2.jpg"],
    "family-photo-frame": ["/images/frames/frames-4.jpg", "/images/frames/frames-4-2.jpg"],
    "kids-photo-frame": ["/images/frames/frames-5.jpg", "/images/frames/frames-5-2.jpg"],
    "friendship-photo-frame": ["/images/frames/frames-6.jpg", "/images/frames/frames-6-2.jpg"],
    "birthday-photo-frame": ["/images/frames/frames-7.jpg", "/images/frames/frames-7-2.jpg"],
    "frames-anniversary-photo-frame": ["/images/frames/frames-8.jpg", "/images/frames/frames-8-2.jpg"],
    "frames-collage-photo-frame": ["/images/frames/frames-9.jpg", "/images/frames/frames-9-2.jpg"],
    "frames-mosaic-photo-frame": ["/images/frames/frames-10.jpg", "/images/frames/frames-10-2.jpg"],
    "frames-acrylic-photo-frame": ["/images/frames/frames-11.jpg", "/images/frames/frames-11-2.jpg"],

    "personalized-tshirt": ["/images/tshirts/tshirts-1.jpg", "/images/tshirts/tshirts-1-2.jpg"],
    "name-printed-tshirt": ["/images/tshirts/tshirts-2.jpg", "/images/tshirts/tshirts-2-2.jpg"],
    "couple-tshirt": ["/images/tshirts/tshirts-3.jpg", "/images/tshirts/tshirts-3-2.jpg"],
    "birthday-tshirt": ["/images/tshirts/tshirts-4.jpg", "/images/tshirts/tshirts-4-2.jpg"],
    "family-tshirt": ["/images/tshirts/tshirts-5.jpg", "/images/tshirts/tshirts-5-2.jpg"],
    "friendship-tshirt": ["/images/tshirts/tshirts-6.jpg", "/images/tshirts/tshirts-6-2.jpg"],

    "customized-sticker": ["/images/stickers/stickers-1.jpg", "/images/stickers/stickers-1-2.jpg"],
    "customized-sticker-chocolates": ["/images/stickers/stickers-2.jpg", "/images/stickers/stickers-2-2.jpg"],
    "customized-notebook-name-label": ["/images/stickers/stickers-3.jpg", "/images/stickers/stickers-3-2.jpg"],
    "business-branding-labels": ["/images/stickers/stickers-4.jpg", "/images/stickers/stickers-4-2.jpg"],
    "gift-stickers": ["/images/stickers/stickers-5.jpg", "/images/stickers/stickers-5-2.jpg"],
    "event-stickers": ["/images/stickers/stickers-6.jpg", "/images/stickers/stickers-6-2.jpg"],
    "home-personal-label": ["/images/stickers/stickers-7.jpg", "/images/stickers/stickers-7-2.jpg"],
    "packaging-labels": ["/images/stickers/stickers-8.jpg", "/images/stickers/stickers-8-2.jpg"],

    "corporate-customized-mug": ["/images/corporate/corporate-1.jpg", "/images/corporate/corporate-1-2.jpg"],
    "corporate-customized-keychains": ["/images/corporate/corporate-2.jpg", "/images/corporate/corporate-2-2.jpg"],
    "customized-water-bottle": ["/images/corporate/corporate-3.jpg", "/images/corporate/corporate-3-2.jpg"],
    "corporate-photo-frame": ["/images/corporate/corporate-4.jpg", "/images/corporate/corporate-4-2.jpg"],
    "logo-printed-keychains": ["/images/corporate/corporate-5.jpg", "/images/corporate/corporate-5-2.jpg"],
    "customized-calendar": ["/images/corporate/corporate-6.jpg", "/images/corporate/corporate-6-2.jpg"],
    "motivational-photo-frame": ["/images/corporate/corporate-8.jpg", "/images/corporate/corporate-8-2.jpg"],
    "wall-frames": ["/images/corporate/corporate-9.jpg", "/images/corporate/corporate-9-2.jpg"],
  };

  const images = imageMap[product.slug] || [product.image];
  const [selectedImage, setSelectedImage] = useState(images[0]);

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

  const orderMessage = `Hello JC Gift Gallery,

I want to order this product:

Product: ${product.name}
Price: ${product.price}
Quantity: ${orderQuantity}

Customer Details:
Name: ${orderName}
Phone Number: ${orderPhone}
Delivery Address: ${orderAddress}

Please confirm availability and payment details.`;

  const customizeMessage = `Hello JC Gift Gallery,

I want to customize a gift.

Customer Details:
Name: ${customName}

Product Details:
Product: ${product.name}
Product Type: ${customProductType}
Occasion: ${customOccasion}
Name/Text To Print: ${customPrintText}
Quantity: ${customQuantity}

Customization Requirements:
${customDetails}`;

  const orderWhatsappLink = `https://wa.me/919538952178?text=${encodeURIComponent(orderMessage)}`;
  const customizeWhatsappLink = `https://wa.me/919538952178?text=${encodeURIComponent(customizeMessage)}`;

  const addToCart = () => {
    const savedCart = localStorage.getItem("jc-cart");
    const cart = savedCart ? JSON.parse(savedCart) : [];

    cart.push({
      slug: product.slug,
      name: product.name,
      image: product.image,
      price: product.price,
      quantity: orderQuantity,
    });

    localStorage.setItem("jc-cart", JSON.stringify(cart));
    alert("Added to cart!");
  };

  const addToWishlist = () => {
  const savedWishlist = localStorage.getItem("jc-wishlist");
  const wishlist = savedWishlist ? JSON.parse(savedWishlist) : [];

  wishlist.push({
    slug: product.slug,
    name: product.name,
    image: product.image,
    price: product.price,
  });

  localStorage.setItem("jc-wishlist", JSON.stringify(wishlist));
  alert("Added to wishlist!");
};

const [selectedSize, setSelectedSize] = useState("4x6 Inche");

const sizeOptions = [
  { size: "4x6 Inche", price: "₹149" },
  { size: "5x7 Inche", price: "₹149" },
  { size: "6x8 Inche (A5 Size)", price: "₹199" },
  { size: "8x12 Inche (A4 Size)", price: "₹299" },
  { size: "12x18 Inche (A3 Size)", price: "₹799" },
];

return (
    <main className="min-h-screen bg-[#fffaf0] px-3 py-5 pb-24">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="bg-[#FFF8ED] rounded-3xl p-2">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-auto max-h-[520px] object-contain rounded-3xl"
            />
          </div>

          <div className="grid grid-cols-4 gap-2 mt-3">
            {images.map((img: string) => (
              <button
                key={img}
                onClick={() => setSelectedImage(img)}
                className={`rounded-xl overflow-hidden border ${
                  selectedImage === img ? "border-[#B8860B] border-4" : "border-[#E8E1D6]"
                }`}
              >
                <img src={img} alt={product.name} className="w-full h-20 object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-black">{product.name}</h1>

          <div className="flex items-center gap-2 mt-3 text-yellow-500">
            <span>⭐⭐⭐⭐⭐</span>
            <span className="text-gray-600">(5.0)</span>
          </div>

          <div className="flex items-center gap-3 mt-5 flex-wrap">
  <p className="text-3xl font-bold text-black">
    {sizeOptions.find((item) => item.size === selectedSize)?.price || product.price}
  </p>

  {product.oldPrice && (
    <p className="line-through text-gray-400">
      {product.oldPrice}
    </p>
  )}

  {product.offer && (
    <span className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-bold">
      {product.offer}
    </span>
  )}
</div>

<div className="mt-5">
  <h3 className="font-bold text-lg text-black mb-3">
    Select Frame Size
  </h3>

  <div className="grid grid-cols-2 gap-3">
    {sizeOptions.map((option) => (
      <button
        key={option.size}
        onClick={() => setSelectedSize(option.size)}
        className={`p-3 rounded-2xl border text-left transition ${
          selectedSize === option.size
            ? "border-[#B8860B] bg-[#FFF4D6]"
            : "border-[#E8E1D6] bg-white"
        }`}
      >
        <p className="font-semibold text-black text-sm">
          {option.size}
        </p>

        <p className="text-[#B8860B] font-bold mt-1">
          {option.price}
        </p>
      </button>
    ))}
  </div>
</div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button onClick={addToWishlist} className="bg-pink-100 text-red-600 py-3 rounded-xl font-bold">
              ❤️ Wishlist
            </button>

            <button onClick={addToCart} className="bg-[#D4A017] text-white py-3 rounded-xl font-bold">
              🛒 Add to Cart
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
            <div className="bg-[#FFF8ED] p-4 rounded-2xl text-center text-sm">🛡️ <br /> Premium Quality</div>
            <div className="bg-[#FFF8ED] p-4 rounded-2xl text-center text-sm">🎨 <br /> Easy Customization</div>
            <div className="bg-[#FFF8ED] p-4 rounded-2xl text-center text-sm">🚚 <br /> Fast Delivery</div>
            <div className="bg-[#FFF8ED] p-4 rounded-2xl text-center text-sm">🔒 <br /> Secure Payment</div>
          </div>
        </div>
      </div>

      <section className="max-w-6xl mx-auto mt-5 bg-white rounded-3xl shadow-lg p-5 border border-[#E8E1D6]">
        <h2 className="text-2xl font-bold text-black">🛍️ Place Your Order</h2>
        <p className="text-gray-600 mt-2 mb-5">Please fill your details to place order.</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input type="text" placeholder="Enter Your Name" value={orderName} onChange={(e) => setOrderName(e.target.value)} className="border border-[#E8E1D6] p-3 rounded-xl outline-none" />
          <input type="number" min="1" placeholder="Enter Quantity" value={orderQuantity} onChange={(e) => setOrderQuantity(e.target.value)} className="border border-[#E8E1D6] p-3 rounded-xl outline-none" />
          <input type="tel" placeholder="Enter Phone Number" value={orderPhone} onChange={(e) => setOrderPhone(e.target.value)} className="border border-[#E8E1D6] p-3 rounded-xl outline-none" />
          <textarea placeholder="Enter Delivery Address" value={orderAddress} onChange={(e) => setOrderAddress(e.target.value)} className="border border-[#E8E1D6] p-3 rounded-xl h-24 outline-none" />
        </div>

        <a href={orderWhatsappLink} target="_blank" rel="noopener noreferrer" className="mt-5 flex items-center justify-center bg-[#25D366] text-white py-4 rounded-2xl font-bold text-lg">
          🟢 Order on WhatsApp
        </a>
      </section>

      <section className="max-w-6xl mx-auto mt-5 bg-[#FFF8ED] rounded-3xl shadow-lg p-5 border border-[#E8E1D6]">
        <h2 className="text-2xl font-bold text-[#B8860B]">🎁 Customize Your Gift</h2>
        <p className="text-gray-600 mt-2 mb-5">If you need customization, give details below.</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input type="text" placeholder="Enter Your Name" value={customName} onChange={(e) => setCustomName(e.target.value)} className="border border-[#E8E1D6] p-3 rounded-xl outline-none" />
          <input type="number" min="1" placeholder="Enter Quantity" value={customQuantity} onChange={(e) => setCustomQuantity(e.target.value)} className="border border-[#E8E1D6] p-3 rounded-xl outline-none" />

          <select value={customProductType} onChange={(e) => setCustomProductType(e.target.value)} className="border border-[#E8E1D6] p-3 rounded-xl outline-none">
            <option value="">Select Product Type</option>
            <option>Photo Frame</option>
            <option>Mug</option>
            <option>Keychain</option>
            <option>Combo Gift</option>
            <option>Photo Book</option>
            <option>T Shirt</option>
          </select>

          <input type="text" placeholder="Name/Text To Print" value={customPrintText} onChange={(e) => setCustomPrintText(e.target.value)} className="border border-[#E8E1D6] p-3 rounded-xl outline-none" />

          <select value={customOccasion} onChange={(e) => setCustomOccasion(e.target.value)} className="border border-[#E8E1D6] p-3 rounded-xl outline-none">
            <option value="">Select Occasion</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Wedding</option>
            <option>Love</option>
            <option>Friendship</option>
            <option>Corporate</option>
          </select>

          <textarea placeholder="Describe Your Customization Requirements..." value={customDetails} onChange={(e) => setCustomDetails(e.target.value)} className="md:col-span-3 border border-[#E8E1D6] p-3 rounded-xl h-28 outline-none" />
        </div>

        <div className="mt-5 bg-white border border-dashed border-[#B8860B] p-4 rounded-2xl">
          <p className="text-sm text-gray-700">
            If you have any reference image or design, please share it directly on WhatsApp.
          </p>
          <p className="text-sm text-green-600 mt-2 font-semibold">
            ✅ Share reference images or screenshots directly in WhatsApp for better customization.
          </p>
        </div>

        <a href={customizeWhatsappLink} target="_blank" rel="noopener noreferrer" className="mt-5 flex items-center justify-center bg-[#25D366] text-white py-4 rounded-2xl font-bold text-lg">
          🎁 Customize & Order on WhatsApp
        </a>
      </section>
    </main>
  );
}