import Link from "next/link";
import { products } from "@/components/products";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export default async function CategoryPage({ params }: Props) {
  // Next.js 16: params is a Promise
  const { category } = await params;

  const normalizedCategory = decodeURIComponent(category)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");

  const categoryAlias: Record<string, string> = {
    frame: "frames",
    frames: "frames",

    mug: "mugs",
    mugs: "mugs",

    keychain: "keychains",
    keychains: "keychains",

    tshirt: "customized-t-shirt",
    tshirts: "customized-t-shirt",
    "t-shirt": "customized-t-shirt",
    "t-shirts": "customized-t-shirt",
    "customized-tshirt": "customized-t-shirt",
    "customized-tshirts": "customized-t-shirt",
    "customized-t-shirt": "customized-t-shirt",
    "customized-t-shirts": "customized-t-shirt",

    sticker: "stickers-and-labels",
    stickers: "stickers-and-labels",
    label: "stickers-and-labels",
    labels: "stickers-and-labels",
    lables: "stickers-and-labels",

    "sticker-and-label": "stickers-and-labels",
    "sticker-and-lable": "stickers-and-labels",
    "sticker-and-labels": "stickers-and-labels",
    "sticker-and-lables": "stickers-and-labels",

    "stickers-and-label": "stickers-and-labels",
    "stickers-and-lable": "stickers-and-labels",
    "stickers-and-labels": "stickers-and-labels",
    "stickers-and-lables": "stickers-and-labels",

    "acrylic-frame": "acrylic-frames",
    "acrylic-frames": "acrylic-frames",

    featured: "featured",
    birthday: "birthday",
    anniversary: "anniversary",
    couple: "couple",
    corporate: "corporate",
    combo: "combo",
    "resin-art": "resin-art",
  };

  const finalCategory =
    categoryAlias[normalizedCategory] || normalizedCategory;

  const filteredProducts = products.filter((product) => {
    const productCategory = product.category
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-");

    return productCategory === finalCategory;
  });

  const title = finalCategory
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <main className="min-h-screen bg-[#FAF7F0] p-6 pb-28">
      <h1 className="text-3xl font-bold text-[#B8860B] mb-6">
        {title} Gifts
      </h1>

      {filteredProducts.length === 0 ? (
        <div className="bg-white rounded-3xl p-8 text-center shadow">
          <h2 className="text-xl font-bold text-black">
            Products Coming Soon
          </h2>

          <p className="text-gray-600 mt-2">
            Images and prices will be updated soon.
          </p>

          <p className="text-xs text-gray-400 mt-4">
            Category: {finalCategory}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <Link
              key={product.slug}
              href={`/product/${product.slug}`}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-3">
                <h2 className="font-semibold text-black text-sm line-clamp-2">
                  {product.name}
                </h2>

                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <span className="font-bold text-[#B8860B]">
                    {product.price} {product.unit && ` / ${product.unit}`}
                  </span>

                  {product.oldPrice && (
                    <span className="text-gray-400 line-through text-xs">
                      {product.oldPrice}
                    </span>
                  )}
                </div>

                {product.offer && (
                  <p className="text-green-600 text-xs font-semibold mt-1">
                    {product.offer}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}