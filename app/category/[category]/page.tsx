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
      product.category.toLowerCase() ===
      selectedCategory.toLowerCase()
  );

  return (
    <main className="min-h-screen bg-[#FAF7F0] p-6">
      <h1 className="text-3xl font-bold text-[#B8860B] mb-6 capitalize">
        {selectedCategory} Gifts
      </h1>

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
    </main>
  );
}