"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function CartDrawer() {
    const {
        cartItems,
        isCartOpen,
        toggleCart,
        removeFromCart,
        updateQuantity,
        cartTotal,
        toggleCheckout,
    } = useCart();

    return (
        <div className={`fixed inset-0 z-50 flex justify-end transition-all duration-300 ${isCartOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'}`}>
            {/* Backdrop - Transparent */}
            <div
                className={`absolute inset-0 transition-opacity duration-300 ${isCartOpen ? 'opacity-100' : 'opacity-0'}`}
                onClick={toggleCart}
            ></div>

            {/* Drawer */}
            <div className={`relative w-full max-w-md bg-white shadow-xl flex flex-col h-full transform transition-transform duration-300 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-bold text-gray-800">MY SHOPPING BAG</h2>
                    <button
                        onClick={toggleCart}
                        className="p-2 hover:bg-gray-100 rounded-full transition"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {cartItems.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-gray-500">
                            <p>Your cart is empty.</p>
                        </div>
                    ) : (
                        cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center space-x-4 border-b pb-4 last:border-b-0"
                            >
                                <div className="relative w-20 h-20 bg-gray-50 rounded flex-shrink-0 flex items-center justify-center overflow-hidden">
                                    {item.image ? (
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-contain"
                                        />
                                    ) : (
                                        // Fallback icon if no image is available
                                        <span className="text-2xl">🛢️</span>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-medium text-gray-800 line-clamp-2">
                                        {item.name}
                                    </h3>
                                    <div className="flex items-center justify-between mt-2">
                                        <div className="flex items-center border rounded">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="px-2 py-1 hover:bg-gray-100 text-gray-600"
                                                disabled={item.quantity <= 1}
                                            >
                                                -
                                            </button>
                                            <span className="px-2 py-1 text-sm font-medium">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="px-2 py-1 hover:bg-gray-100 text-gray-600"
                                            >
                                                +
                                            </button>
                                        </div>
                                        <div className="text-right">
                                            {item.oldPrice && (
                                                <div className="text-xs text-gray-400 line-through">৳ {item.oldPrice}</div>
                                            )}
                                            <div className="font-bold text-gray-800">৳ {item.price}</div>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-red-500 hover:text-red-700 p-2"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                        />
                                    </svg>
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                {cartItems.length > 0 && (
                    <div className="p-4 border-t bg-gray-50">
                        <div className="space-y-2 mb-4">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span>৳ {cartTotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Discount</span>
                                <span>৳ 0.00</span>
                            </div>
                            <div className="flex justify-between font-bold text-lg text-gray-900">
                                <span>Total</span>
                                <span>৳ {cartTotal.toFixed(2)}</span>
                            </div>
                        </div>
                        <button
                            onClick={() => {
                                toggleCart();
                                toggleCheckout();
                            }}
                            className="w-full bg-orange-500 text-white font-bold py-3 rounded hover:bg-orange-600 transition"
                        >
                            CHECKOUT
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
