"use client";

import Image from 'next/image';
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
    const { cartItems, addToCart } = useCart();

    const isInCart = cartItems.some((item) => item.id === product.id);

    const handleClick = () => {
        if (isInCart) return;
        addToCart(product);
    };

    return (
        <div className="bg-white border border-gray-200 rounded-lg p-3 pt-4 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full group">
            {/* Image area - extra tall so product appears larger, closer to reference */}
            <div className="relative h-80 w-full mb-3 flex items-center justify-center  rounded">
                {/* Product Image */}
                {product.image ? (
                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-auto max-w-full object-contain "
                    />
                ) : (
                    <div className="text-gray-400 text-4xl">🛢️</div>
                )}
                {/* Badge (Optional) */}
                {product.discount && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        {product.discount}% OFF
                    </span>
                )}
            </div>

            <div className="flex-grow">
                <div className="text-xs text-gray-500 mb-1">{product.brand}</div>
                <h3 className="font-medium text-gray-800 mb-2 line-clamp-2 group-hover:text-orange-500 transition-colors">
                    {product.name}
                </h3>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                    <div>
                        {product.oldPrice && (
                            <span className="text-gray-400 text-xs line-through block">৳ {product.oldPrice}</span>
                        )}
                        <span className="text-lg font-bold text-green-700">৳ {product.price}</span>
                    </div>
                    <button
                        onClick={handleClick}
                        disabled={isInCart}
                        className={`flex items-center gap-1 px-3 py-2 rounded-full text-sm font-medium transition-colors duration-300
                            ${isInCart
                                ? "bg-green-200 text-green-700 cursor-not-allowed"
                                : "bg-orange-100 text-orange-600 hover:bg-orange-500 hover:text-white"
                            }`}
                    >
                        {isInCart ? (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Added</span>
                            </>
                        ) : (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span>Add to cart</span>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
