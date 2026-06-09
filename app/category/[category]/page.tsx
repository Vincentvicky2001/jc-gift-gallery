import { products } from "../../../components/ProductData";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  const selectedCategory = decodeURIComponent(category);

  const normalizedCategory = selectedCategory
    .toLowerCase()
    .replaceAll(" ", "-");

  const categoryAlias: Record<string, string> = {
    frame: "frames",
    frames: "frames",
    mug: "mugs",
    mugs: "mugs",
    keychain: "keychains",
    keychains: "keychains",
    "acrylic-frame": "acrylic-frames",
    "acrylic-frames": "acrylic-frames",
    "sticker-and-lables": "stickers-and-labels",
    "stickers-and-lables": "stickers-and-labels",
    "sticker-and-labels": "stickers-and-labels",
    "stickers-and-labels": "stickers-and-labels",
  };

  const finalCategory =
    categoryAlias[normalizedCategory] || normalizedCategory;

  const filteredProducts = products.filter(
    (product) =>
      product.category.toLowerCase().replaceAll(" ", "-") === finalCategory
  );

  const title = finalCategory
    .replaceAll("-", " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

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
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <a
              href={`/product/${product.slug}`}
              key={product.slug}
              className="bg-white rounded-2xl shadow overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-44 object-cover"
              />

              <div className="p-3">
                <h2 className="font-semibold text-sm text-black">
                  {product.name}
                </h2>

                <p className="text-[#B8860B] font-bold mt-2">
                  {product.price}
                </p>
              </div>
            </a>
          ))}
        </div>
      )}
    </main>
  );
}