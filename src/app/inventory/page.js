"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import ListingProductCard from "@/components/ListingProductCard";
import { allProducts } from "@/data/products";

export default function InventoryPage() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("query") || "";

  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const inputRef = useRef(null);

  // Keep state in sync if URL query changes (e.g. back/forward navigation)
  useEffect(() => {
    setSearchTerm(initialQuery);
  }, [initialQuery]);

  // Auto-focus the search input when arriving from hero search,
  // so the user can keep typing without clicking again.
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      // Move cursor to end of existing text
      const el = inputRef.current;
      const length = el.value.length;
      el.setSelectionRange(length, length);
    }
  }, []);

  const filteredProducts = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return allProducts;
    return allProducts.filter((p) =>
      p.name.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  return (
    <main className="bg-white min-h-screen pb-16">
      {/* Search bar - similar style to the reference inventory search */}
      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="max-w-3xl mx-auto flex items-center bg-white rounded-full shadow-md border border-gray-200 px-3 py-2">
            <div className="px-4 border-r border-gray-200">
              <span className="text-xs font-bold text-gray-800 uppercase tracking-wide">
                Inventory
              </span>
            </div>
            <input
              type="text"
              ref={inputRef}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Type any keywords"
              className="flex-grow px-4 py-2 text-gray-700 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Results */}
      <section className="pt-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ListingProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center text-gray-500 text-sm mt-12">
              No products found for &quot;{searchTerm}&quot;.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}


