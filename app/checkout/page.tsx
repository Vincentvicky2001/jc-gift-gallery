"use client";

import { ChangeEvent, useEffect, useState } from "react";

type CartItem = {
  slug: string;
  name: string;
  category?: string;
  price: string;
  image: string;
  quantity: number;
  size?: string;
  finish?: string;
};

export default function CheckoutPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState("");
  const [error, setError] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedCart = JSON.parse(
        localStorage.getItem("jc-cart") || "[]"
      );

      const validCart: CartItem[] = Array.isArray(savedCart)
        ? savedCart.map((item) => ({
            ...item,
            quantity: Number(item.quantity) || 1,
          }))
        : [];

      setCart(validCart);
    } catch {
      setCart([]);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (photoPreview) {
        URL.revokeObjectURL(photoPreview);
      }
    };
  }, [photoPreview]);

  const getNumericPrice = (price: string) => {
    return Number(String(price).replace(/[^\d.]/g, "")) || 0;
  };

  const totalAmount = cart.reduce(
    (total, item) =>
      total +
      getNumericPrice(item.price) *
        (Number(item.quantity) || 1),
    0
  );

  const handlePhotoChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setError("");

    const selectedFile = event.target.files?.[0];

    if (!selectedFile) {
      setPhoto(null);
      setPhotoPreview("");
      return;
    }

    if (!selectedFile.type.startsWith("image/")) {
      setError("Please select a valid image file.");
      event.target.value = "";
      return;
    }

    const maximumSize = 10 * 1024 * 1024;

    if (selectedFile.size > maximumSize) {
      setError("Photo size must be less than 10 MB.");
      event.target.value = "";
      return;
    }

    if (photoPreview) {
      URL.revokeObjectURL(photoPreview);
    }

    setPhoto(selectedFile);
    setPhotoPreview(URL.createObjectURL(selectedFile));
  };

  const removeSelectedPhoto = () => {
    if (photoPreview) {
      URL.revokeObjectURL(photoPreview);
    }

    setPhoto(null);
    setPhotoPreview("");
  };

  const placeOrder = () => {
    setError("");

    const customerName = name.trim();
    const customerPhone = phone.trim();
    const customerAddress = address.trim();

    if (!customerName) {
      setError("Please enter your full name.");
      return;
    }

    if (!customerPhone) {
      setError("Please enter your phone number.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(customerPhone)) {
      setError(
        "Please enter a valid 10-digit Indian mobile number without 0 or +91."
      );
      return;
    }

    if (!customerAddress) {
      setError("Please enter your delivery address.");
      return;
    }

    if (cart.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    const productOrderDetails = cart
      .map((item, index) => {
        const quantity = Number(item.quantity) || 1;
        const unitPrice = getNumericPrice(item.price);
        const itemTotal = unitPrice * quantity;

        const category =
          item.category?.trim().toUpperCase() ||
          item.slug.split("-")[0].toUpperCase() ||
          "GIFT";

        return `${cart.length > 1 ? `${index + 1}. ` : ""}Category : ${category}
Product : ${item.name}
${item.size ? `Frame Size : ${item.size}\n` : ""}${
          item.finish ? `Frame Type : ${item.finish}\n` : ""
        }Unit Price : ₹${unitPrice.toLocaleString("en-IN")}
Quantity : ${quantity}
Total Price : ₹${itemTotal.toLocaleString("en-IN")}`;
      })
      .join("\n\n━━━━━━━━━━━━━━━━━━━━\n\n");

    const productLinks = cart
      .map(
        (item, index) =>
          `${
            cart.length > 1 ? `${index + 1}. ` : ""
          }https://jc-gift-gallery.vercel.app/product/${item.slug}`
      )
      .join("\n");

    const customizationDetails = photo
      ? `

━━━━━━━━━━━━━━━━━━━━
🖼️ *CUSTOMIZATION PHOTO*
━━━━━━━━━━━━━━━━━━━━
Selected Photo : ${photo.name}

Please ask me to send this photo in the WhatsApp chat.`
      : "";

    const message = `🎁 *NEW ORDER - JC Gift Gallery*

━━━━━━━━━━━━━━━━━━━━
📦 *ORDER DETAILS*
━━━━━━━━━━━━━━━━━━━━
${productOrderDetails}

━━━━━━━━━━━━━━━━━━━━
💰 *ORDER TOTAL*
━━━━━━━━━━━━━━━━━━━━
Grand Total : ₹${totalAmount.toLocaleString("en-IN")}

━━━━━━━━━━━━━━━━━━━━
👤 *CUSTOMER DETAILS*
━━━━━━━━━━━━━━━━━━━━
Name : ${customerName}
Phone : ${customerPhone}
Address :
${customerAddress}
${customizationDetails}

━━━━━━━━━━━━━━━━━━━━
🔗 *PRODUCT LINK${cart.length > 1 ? "S" : ""}*
━━━━━━━━━━━━━━━━━━━━
${productLinks}

Please confirm availability, payment and delivery details.

Thank you.`;

    const whatsappUrl = `https://wa.me/919538952178?text=${encodeURIComponent(
      message
    )}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  if (!isLoaded) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#FAF7F0]">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#E8D4A2] border-t-[#B8860B]" />

          <p className="mt-4 font-semibold text-gray-700">
            Loading checkout...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FFFDF8] to-[#FFF4E2] px-4 py-8 pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-black text-black md:text-4xl">
            Checkout
          </h1>

          <p className="mt-2 text-gray-600">
            Enter your details and place the order through WhatsApp.
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="rounded-[32px] border border-[#E8D4A2] bg-white p-10 text-center shadow-xl">
            <div className="mb-4 text-7xl">
              🛒
            </div>

            <h2 className="text-2xl font-black text-black">
              Your cart is empty
            </h2>

            <p className="mt-3 text-gray-600">
              Add products to your cart before continuing to checkout.
            </p>

            <a
              href="/"
              className="mt-7 inline-flex rounded-full bg-gradient-to-r from-[#D4A017] to-[#B8860B] px-8 py-3 font-bold text-white shadow-lg transition hover:scale-105"
            >
              Continue Shopping →
            </a>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[1fr_420px]">
            <section className="rounded-[30px] border border-[#E8D4A2] bg-white p-5 shadow-xl md:p-8">
              <h2 className="mb-6 text-2xl font-black text-black">
                Customer Details
              </h2>

              <label
                htmlFor="customer-name"
                className="mb-2 block font-bold text-black"
              >
                Full Name
              </label>

              <input
                id="customer-name"
                type="text"
                value={name}
                onChange={(event) =>
                  setName(event.target.value)
                }
                placeholder="Enter your full name"
                autoComplete="name"
                className="mb-5 w-full rounded-2xl border border-gray-300 bg-[#FFFDF8] p-4 text-black outline-none transition focus:border-[#D4A017] focus:ring-2 focus:ring-[#F4D77B]"
              />

              <label
                htmlFor="customer-phone"
                className="mb-2 block font-bold text-black"
              >
                Phone Number
              </label>

              <input
                id="customer-phone"
                type="tel"
                value={phone}
                onChange={(event) =>
                  setPhone(
                    event.target.value
                      .replace(/\D/g, "")
                      .slice(0, 10)
                  )
                }
                placeholder="Enter 10-digit mobile number"
                inputMode="numeric"
                autoComplete="tel"
                maxLength={10}
                className="mb-5 w-full rounded-2xl border border-gray-300 bg-[#FFFDF8] p-4 text-black outline-none transition focus:border-[#D4A017] focus:ring-2 focus:ring-[#F4D77B]"
              />

              <label
                htmlFor="customer-address"
                className="mb-2 block font-bold text-black"
              >
                Delivery Address
              </label>

              <textarea
                id="customer-address"
                value={address}
                onChange={(event) =>
                  setAddress(event.target.value)
                }
                rows={6}
                placeholder="Enter complete delivery address"
                autoComplete="street-address"
                className="w-full resize-none rounded-2xl border border-gray-300 bg-[#FFFDF8] p-4 text-black outline-none transition focus:border-[#D4A017] focus:ring-2 focus:ring-[#F4D77B]"
              />

              <div className="mt-6">
                <label
                  htmlFor="customization-photo"
                  className="mb-2 block font-bold text-black"
                >
                  Upload Customization Photo
                </label>

                <input
                  id="customization-photo"
                  type="file"
                  accept="image/png,image/jpeg,image/jpg,image/webp"
                  onChange={handlePhotoChange}
                  className="w-full rounded-2xl border border-gray-300 bg-[#FFFDF8] p-3 text-sm text-gray-700 file:mr-4 file:rounded-xl file:border-0 file:bg-[#FFF4D6] file:px-4 file:py-2 file:font-bold file:text-[#B8860B]"
                />

                <p className="mt-2 text-sm text-gray-500">
                  JPG, PNG or WEBP. Maximum file size: 10 MB.
                </p>

                {photo && photoPreview && (
                  <div className="mt-4 rounded-2xl border border-[#E8D4A2] bg-[#FFFDF8] p-4">
                    <img
                      src={photoPreview}
                      alt="Selected customization preview"
                      className="mx-auto h-52 w-full rounded-xl object-contain"
                    />

                    <p className="mt-3 break-all text-sm font-bold text-green-700">
                      Selected: {photo.name}
                    </p>

                    <button
                      type="button"
                      onClick={removeSelectedPhoto}
                      className="mt-3 rounded-xl border border-red-300 bg-white px-4 py-2 text-sm font-bold text-red-600 transition hover:bg-red-50"
                    >
                      Remove Photo
                    </button>
                  </div>
                )}

                <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-800">
                  The photo cannot be attached automatically through the
                  WhatsApp link. After WhatsApp opens, send the selected
                  photo directly in the chat.
                </div>
              </div>

              {error && (
                <p
                  role="alert"
                  className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4 font-bold text-red-600"
                >
                  {error}
                </p>
              )}
            </section>

            <section className="h-fit rounded-[30px] border border-[#E8D4A2] bg-white p-5 shadow-xl md:p-6 lg:sticky lg:top-24">
              <h2 className="mb-5 text-2xl font-black text-black">
                Order Summary
              </h2>

              <div className="max-h-[470px] space-y-4 overflow-y-auto pr-1">
                {cart.map((item, index) => {
                  const quantity =
                    Number(item.quantity) || 1;

                  const subtotal =
                    getNumericPrice(item.price) *
                    quantity;

                  return (
                    <div
                      key={`${item.slug}-${item.size || ""}-${
                        item.finish || ""
                      }-${index}`}
                      className="flex gap-4 rounded-2xl border border-[#E8D4A2] bg-[#FFFDF8] p-4"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-24 w-24 shrink-0 rounded-xl object-cover"
                      />

                      <div className="min-w-0 flex-1">
                        <h3 className="font-black text-black">
                          {item.name}
                        </h3>

                        {item.category && (
                          <p className="mt-1 text-sm text-gray-600">
                            Category:{" "}
                            <span className="font-semibold text-black">
                              {item.category}
                            </span>
                          </p>
                        )}

                        {item.size && (
                          <p className="text-sm text-gray-600">
                            Size:{" "}
                            <span className="font-semibold text-black">
                              {item.size}
                            </span>
                          </p>
                        )}

                        {item.finish && (
                          <p className="text-sm text-gray-600">
                            Type:{" "}
                            <span className="font-semibold text-black">
                              {item.finish}
                            </span>
                          </p>
                        )}

                        <p className="mt-1 text-sm text-gray-600">
                          Unit Price: {item.price}
                        </p>

                        <p className="text-sm text-gray-600">
                          Quantity: {quantity}
                        </p>

                        <p className="mt-2 font-black text-[#B8860B]">
                          Total: ₹
                          {subtotal.toLocaleString("en-IN")}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-5">
                <span className="text-xl font-black text-black">
                  Grand Total
                </span>

                <span className="text-3xl font-black text-[#B8860B]">
                  ₹{totalAmount.toLocaleString("en-IN")}
                </span>
              </div>

              <button
                type="button"
                onClick={placeOrder}
                className="mt-6 w-full rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] py-4 text-lg font-black text-white shadow-lg transition hover:scale-[1.02]"
              >
                📲 Place Order on WhatsApp
              </button>

              <a
                href="/cart"
                className="mt-4 block text-center font-bold text-[#B8860B] transition hover:underline"
              >
                ← Back to Cart
              </a>

              <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs font-semibold text-gray-600">
                <div className="rounded-xl bg-[#FFF8ED] p-2">
                  🔒
                  <p className="mt-1">Secure</p>
                </div>

                <div className="rounded-xl bg-[#FFF8ED] p-2">
                  💯
                  <p className="mt-1">Quality</p>
                </div>

                <div className="rounded-xl bg-[#FFF8ED] p-2">
                  🚚
                  <p className="mt-1">Delivery</p>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </main>
  );
}