"use client";

import { ChangeEvent, useEffect, useState } from "react";

type CartItem = {
  slug: string;
  name: string;
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

    if (!name.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(phone.trim())) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!address.trim()) {
      setError("Please enter your delivery address.");
      return;
    }

    if (cart.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    const orderDetails = cart
      .map((item, index) => {
        const quantity = Number(item.quantity) || 1;
        const subtotal =
          getNumericPrice(item.price) * quantity;

        return `${index + 1}. ${item.name}
${item.size ? `Size: ${item.size}\n` : ""}${
          item.finish ? `Type: ${item.finish}\n` : ""
        }Price: ${item.price}
Quantity: ${quantity}
Subtotal: ₹${subtotal.toLocaleString("en-IN")}`;
      })
      .join("\n\n");

    const photoDetails = photo
      ? `Selected Photo: ${photo.name}

Please ask me to send the selected photo in this WhatsApp chat.`
      : `Selected Photo: Not uploaded

I will send the customization photo in this WhatsApp chat if required.`;

    const message = `Hello JC Gift Gallery,

I would like to place an order.

Customer Details

Name: ${name.trim()}
Phone: ${phone.trim()}
Address: ${address.trim()}

Customization Photo

${photoDetails}

Order Details

${orderDetails}

Total Amount: ₹${totalAmount.toLocaleString("en-IN")}

Please confirm product availability, customization details, delivery charges and payment details.`;

    window.open(
      `https://wa.me/919538952178?text=${encodeURIComponent(
        message
      )}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main className="min-h-screen bg-[#FAF7F0] px-4 py-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-center text-3xl font-bold text-[#B8860B]">
          Checkout
        </h1>

        {cart.length === 0 ? (
          <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
            <p className="mb-6 text-gray-600">
              Your cart is empty.
            </p>

            <a
              href="/"
              className="inline-block rounded-xl bg-[#D4A017] px-8 py-3 font-bold text-white"
            >
              Continue Shopping
            </a>
          </div>
        ) : (
          <div className="space-y-6">
            <section className="rounded-3xl bg-white p-5 shadow-lg md:p-8">
              <h2 className="mb-5 text-2xl font-bold text-black">
                Customer Details
              </h2>

              <label
                htmlFor="customer-name"
                className="mb-2 block font-semibold text-black"
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
                className="mb-4 w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-[#D4A017]"
              />

              <label
                htmlFor="customer-phone"
                className="mb-2 block font-semibold text-black"
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
                className="mb-4 w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-[#D4A017]"
              />

              <label
                htmlFor="customer-address"
                className="mb-2 block font-semibold text-black"
              >
                Delivery Address
              </label>

              <textarea
                id="customer-address"
                value={address}
                onChange={(event) =>
                  setAddress(event.target.value)
                }
                rows={5}
                placeholder="Enter complete delivery address"
                autoComplete="street-address"
                className="w-full resize-none rounded-xl border border-gray-300 p-3 outline-none focus:border-[#D4A017]"
              />

              <div className="mt-5">
                <label
                  htmlFor="customization-photo"
                  className="mb-2 block font-semibold text-black"
                >
                  Upload Customization Photo
                </label>

                <input
                  id="customization-photo"
                  type="file"
                  accept="image/png,image/jpeg,image/jpg,image/webp"
                  onChange={handlePhotoChange}
                  className="w-full rounded-xl border border-gray-300 p-3 text-sm text-gray-700 file:mr-4 file:rounded-lg file:border-0 file:bg-[#FFF4D6] file:px-4 file:py-2 file:font-semibold file:text-[#B8860B]"
                />

                <p className="mt-2 text-sm text-gray-500">
                  JPG, PNG or WEBP. Maximum file size: 10 MB.
                </p>

                {photo && photoPreview && (
                  <div className="mt-4 rounded-2xl border border-[#E8E1D6] bg-[#FFFDF8] p-4">
                    <img
                      src={photoPreview}
                      alt="Selected customization preview"
                      className="mx-auto h-48 w-full rounded-xl object-contain"
                    />

                    <p className="mt-3 break-all text-sm font-semibold text-green-700">
                      Selected: {photo.name}
                    </p>

                    <button
                      type="button"
                      onClick={removeSelectedPhoto}
                      className="mt-3 rounded-lg border border-red-300 px-4 py-2 text-sm font-semibold text-red-600"
                    >
                      Remove Photo
                    </button>
                  </div>
                )}

                <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
                  The website cannot attach the photo automatically
                  through a WhatsApp link. After WhatsApp opens,
                  send the selected photo directly in the chat.
                </div>
              </div>

              {error && (
                <p
                  role="alert"
                  className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 font-semibold text-red-600"
                >
                  {error}
                </p>
              )}
            </section>

            <section className="rounded-3xl bg-white p-5 shadow-lg md:p-8">
              <h2 className="mb-5 text-2xl font-bold text-black">
                Order Summary
              </h2>

              <div className="space-y-4">
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
                      className="flex gap-4 rounded-2xl border border-[#E8E1D6] p-4"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-20 w-20 rounded-xl object-cover"
                      />

                      <div className="min-w-0 flex-1">
                        <h3 className="font-bold text-black">
                          {item.name}
                        </h3>

                        {item.size && (
                          <p className="text-sm text-gray-600">
                            Size: {item.size}
                          </p>
                        )}

                        {item.finish && (
                          <p className="text-sm text-gray-600">
                            Type: {item.finish}
                          </p>
                        )}

                        <p className="text-sm text-gray-600">
                          Unit Price: {item.price}
                        </p>

                        <p className="text-sm text-gray-600">
                          Quantity: {quantity}
                        </p>

                        <p className="mt-1 font-bold text-[#B8860B]">
                          Subtotal: ₹
                          {subtotal.toLocaleString("en-IN")}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-5">
                <span className="text-xl font-bold text-black">
                  Total Amount
                </span>

                <span className="text-2xl font-bold text-[#B8860B]">
                  ₹{totalAmount.toLocaleString("en-IN")}
                </span>
              </div>

              <button
                type="button"
                onClick={placeOrder}
                className="mt-6 w-full rounded-2xl bg-[#25D366] py-4 text-lg font-bold text-white transition hover:bg-[#20BD5A]"
              >
                📲 Place Order on WhatsApp
              </button>

              <a
                href="/cart"
                className="mt-4 block text-center font-semibold text-[#B8860B]"
              >
                Back to Cart
              </a>
            </section>
          </div>
        )}
      </div>
    </main>
  );
}