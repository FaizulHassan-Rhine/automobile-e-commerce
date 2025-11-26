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
            <div className="bg-white p-4 flex flex-col h-full group cursor-pointer">
                <div className="relative h-48 w-full mb-4 flex items-center justify-center">
                    {/* Placeholder Image */}
                    <div className="w-full h-full flex items-center justify-center">
                        {/* Using a div with background for now */}
                        <div
                            className="w-full h-full bg-contain bg-no-repeat bg-center transition-transform duration-300 group-hover:scale-105"
                            style={{ backgroundImage: `url(${product.image})` }}
                        ></div>
                    </div>
                    {/* Brand Logo Overlay (Optional, seen in some designs) */}
                    <div className="absolute bottom-0 left-0">
                        <div className="bg-white p-1 shadow-sm border border-gray-100 rounded-sm">
                            <span className="text-[10px] font-bold text-green-800 flex items-center">
                                <span className="text-orange-500 mr-0.5">OIL</span>CO.
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex-grow text-center">
                    <h3 className="text-xs font-bold text-gray-500 uppercase mb-1 tracking-wide">
                        {product.name}
                    </h3>
                    <div className="text-lg font-bold text-gray-900 mb-4">
                        ৳ {product.price.toLocaleString()}
                    </div>
                </div>

                <button
                    onClick={handleAddToCart}
                    disabled={isInCart}
                    className={`w-full font-bold py-3 text-sm uppercase tracking-wider transition-colors rounded-sm
                        ${isInCart
                            ? "bg-green-500 text-white cursor-not-allowed"
                            : "bg-[#D9822B] text-white hover:bg-[#c07225]"}`}
                >
                    {isInCart ? "Added" : "Add to cart"}
                </button>
            </div>
        </Link>
    );
}
