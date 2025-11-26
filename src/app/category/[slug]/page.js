import ListingProductCard from "@/components/ListingProductCard";
import { allProducts } from "@/data/products";

const CATEGORY_CONFIG = {
  "engine-oil": {
    title: "Engine Oil",
  },
  "auto-detailing-and-care": {
    title: "Auto detailing and care",
  },
  filters: {
    title: "Filters",
  },
  brakes: {
    title: "Brakes",
  },
  damping: {
    title: "Damping",
  },
};

export default async function CategoryPage({ params }) {
  const { slug } = await params;

  const safeSlug = typeof slug === "string" ? slug : "";
  const safeTitle =
    safeSlug.length > 0 ? safeSlug.replace(/-/g, " ") : "Category";

  const config = CATEGORY_CONFIG[safeSlug] || { title: safeTitle };

  const products =
    safeSlug.length > 0
      ? allProducts.filter((p) => p.category === safeSlug)
      : [];

  return (
    <main className="bg-white min-h-screen pb-16">
      <div className="container mx-auto px-4 pt-10">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {config.title}
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            {products.length > 0
              ? `${products.length} products found`
              : "No products available in this category yet."}
          </p>
        </div>

        {products.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ListingProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
