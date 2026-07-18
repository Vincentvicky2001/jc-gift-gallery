"use client";

import { useRouter } from "next/navigation";
import { products } from "./ProductData";

type RelatedProductsProps = {
  currentSlug: string;
  category: string;
};

export default function RelatedProducts({
  currentSlug,
  category,
}: RelatedProductsProps) {
  const router = useRouter();

  const relatedProducts = products
    .filter(
      (product) =>
        product.slug !== currentSlug &&
        product.category.toLowerCase() === category.toLowerCase()
    )
    .slice(0, 4);

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="mx-auto mt-6 max-w-6xl rounded-3xl border border-[#E8E1D6] bg-white p-5 shadow-lg md:p-8">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold text-[#B8860B] md:text-3xl">
            Related Products
          </h2>

          <p className="mt-1 text-gray-600">
            You may also like these products.
          </p>
        </div>

        <a
          href={`/category/${category
            .toLowerCase()
            .replace(/\s+/g, "-")}`}
          className="text-sm font-bold text-[#B8860B] hover:underline"
        >
          View All
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {relatedProducts.map((product) => (
          <button
            key={product.slug}
            type="button"
            onClick={() => router.push(`/product/${product.slug}`)}
            className="overflow-hidden rounded-2xl border border-[#E8E1D6] bg-white text-left transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-cover sm:h-52"
              />

              {product.offer && (
                <span className="absolute left-2 top-2 rounded-lg bg-green-600 px-2 py-1 text-xs font-bold text-white">
                  {product.offer}
                </span>
              )}
            </div>

            <div className="p-3">
              <h3 className="line-clamp-2 min-h-[48px] font-bold text-black">
                {product.name}
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                {product.category}
              </p>

              <div className="mt-2 flex flex-wrap items-center gap-2">
                <span className="font-bold text-[#B8860B]">
                  {product.price}
                </span>

                {product.oldPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    {product.oldPrice}
                  </span>
                )}
              </div>

              <div className="mt-3 rounded-xl bg-gradient-to-r from-[#D4A017] to-[#B8860B] py-2 text-center text-sm font-bold text-white">
                View Product
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}