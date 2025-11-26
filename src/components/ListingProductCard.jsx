"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from "@/context/CartContext";

export default function ListingProductCard({ product }) {
    const pathname = usePathname();
    const { cartItems, addToCart } = useCart();

    const isInCart = cartItems.some((item) => item.id === product.id);

    // Construct URL: current path + / + product slug
    const productSlug = product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const href = `${pathname}/${productSlug}`;

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (isInCart) return;
        addToCart(product);
    };

    return (
        <Link href={href} className="block h-full">
            <div className="bg-white border border-gray-200 rounded-md overflow-hidden flex flex-col h-full group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
                {/* Top: image with discount badge */}
                <div className="relative bg-gray-50 flex items-center justify-center pt-4 px-4">
                    {product.discount && (
                        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                            {product.discount}% OFF
                        </span>
                    )}
                    <div className="w-full h-56 flex items-center justify-center">
                        <div
                            className="w-full h-full bg-contain bg-no-repeat bg-center transition-transform duration-300 group-hover:scale-105"
                            style={{ backgroundImage: `url(${product.image})` }}
                        ></div>
                    </div>
                </div>

                {/* Middle: brand + name */}
                <div className="flex-1 px-4 pt-3 pb-2">
                    {product.brand && (
                        <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
                    )}
                    <h3 className="text-sm font-medium text-gray-800 line-clamp-2 group-hover:text-orange-500 transition-colors">
                        {product.name}
                    </h3>
                </div>

                {/* Bottom: prices + add to cart */}
                <div className="px-4 pb-4 pt-1 border-t border-gray-100 flex items-center justify-between gap-3">
                    <div>
                        {product.oldPrice && (
                            <div className="text-xs text-gray-400 line-through">
                                ৳ {product.oldPrice.toLocaleString()}
                            </div>
                        )}
                        <div className="text-lg font-bold text-green-700">
                            ৳ {product.price.toLocaleString()}
                        </div>
                    </div>
                    <button
                        onClick={handleAddToCart}
                        disabled={isInCart}
                        className={`flex-1 text-center font-bold py-2.5 text-sm uppercase tracking-wider rounded-full transition-colors
                            ${isInCart
                                ? "bg-green-500 text-white cursor-not-allowed"
                                : "bg-[#D9822B] text-white hover:bg-[#c07225]"}`}
                    >
                        {isInCart ? "Added" : "Add to cart"}
                    </button>
                </div>
            </div>
        </Link>
    );
}
