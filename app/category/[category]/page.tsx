import { products } from "../../../components/ProductData";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  const selectedCategory = decodeURIComponent(category);

  const filteredProducts = products.filter(
    (product) =>
      product.category.toLowerCase().replaceAll(" ", "-") ===
      selectedCategory.toLowerCase().replaceAll(" ", "-")
  );

  const title = selectedCategory
    .replaceAll("-", " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <main className="min-h-screen bg-[#FAF7F0] p-6 pb-28">
      <h1 className="text-3xl font-bold text-[#B8860B] mb-6">
        {title} Gifts
      </h1>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <a
              href={`/product/${product.slug}`}
              key={product.slug}
              className="bg-white rounded-2xl shadow overflow-hidden border border-[#E8E1D6]"
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

                <button className="w-full mt-3 bg-[#25D366] text-white py-2 rounded-xl font-bold">
                  View Product
                </button>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-8 text-center shadow">
          <h2 className="text-xl font-bold text-black">
            Products Coming Soon
          </h2>
          <p className="text-gray-600 mt-2">
            Images and prices will be updated soon.
          </p>
        </div>
      )}
    </main>
  );
}