"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function CheckoutModal() {
    const {
        cartItems,
        isCheckoutOpen,
        toggleCheckout,
        cartTotal,
        clearCart,
    } = useCart();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        zip: "",
        country: "Bangladesh",
        deliveryType: "Courier",
    });

    if (!isCheckoutOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 1. Format Order Details
        const baseUrl = window.location.origin;
        let orderDetails = "New Order Request:%0A%0A";
        orderDetails += "*Customer Details:*%0A";
        orderDetails += `Name: ${formData.name}%0A`;
        orderDetails += `Phone: ${formData.phone}%0A`;
        orderDetails += `Email: ${formData.email}%0A`;
        orderDetails += `Address: ${formData.address}, ${formData.city}, ${formData.zip}%0A`;
        orderDetails += `Delivery: ${formData.deliveryType}%0A%0A`;

        orderDetails += "*Order Summary:*%0A";
        cartItems.forEach((item) => {
            orderDetails += `- ${item.name} (x${item.quantity}): ৳ ${item.price * item.quantity}%0A`;
            if (item.image) {
                const imageUrl = item.image.startsWith('http') ? item.image : `${baseUrl}${item.image}`;
                orderDetails += `  Image: ${imageUrl}%0A`;
            }
        });
        orderDetails += `%0A*Total: ৳ ${cartTotal.toFixed(2)}*`;

        // 2. WhatsApp Redirect
        const phoneNumber = "8801845845789"; // Replace with actual business number
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${orderDetails}`;

        window.open(whatsappURL, "_blank");

        // 3. Clear Cart & Close Modal
        clearCart();
        toggleCheckout();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
                onClick={toggleCheckout}
            ></div>

            {/* Modal */}
            <div className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row">

                {/* Left Side: Form */}
                <div className="flex-1 p-6 md:p-8">
                    <h2 className="text-2xl font-bold mb-6">Checkout</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 rounded-l border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                    🇧🇩
                                </span>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-r px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                                    placeholder="01..."
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Delivery type</label>
                            <div className="flex space-x-4">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="deliveryType"
                                        value="Courier"
                                        checked={formData.deliveryType === "Courier"}
                                        onChange={handleChange}
                                        className="text-orange-500 focus:ring-orange-500"
                                    />
                                    <span>Courier</span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="deliveryType"
                                        value="Home delivery"
                                        checked={formData.deliveryType === "Home delivery"}
                                        onChange={handleChange}
                                        className="text-orange-500 focus:ring-orange-500"
                                    />
                                    <span>Home delivery</span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="deliveryType"
                                        value="Click & Collect"
                                        checked={formData.deliveryType === "Click & Collect"}
                                        onChange={handleChange}
                                        className="text-orange-500 focus:ring-orange-500"
                                    />
                                    <span>Click & Collect</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                            <input
                                type="text"
                                name="address"
                                required
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">City / Area</label>
                                <input // Using simple input for now, could be select
                                    type="text"
                                    name="city"
                                    required
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Zipcode</label>
                                <input
                                    type="text"
                                    name="zip"
                                    value={formData.zip}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                            <input
                                type="text"
                                name="country"
                                disabled
                                value={formData.country}
                                className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-50 text-gray-500"
                            />
                        </div>

                        <div className="pt-4 flex justify-between items-center">
                            <button
                                type="button"
                                onClick={toggleCheckout}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="bg-orange-500 text-white font-bold py-2 px-6 rounded hover:bg-orange-600 transition"
                            >
                                Send to WhatsApp
                            </button>
                        </div>
                    </form>
                </div>

                {/* Right Side: Order Summary */}
                <div className="w-full md:w-80 bg-gray-50 p-6 border-l border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">ORDER SUMMARY</h3>
                    <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex gap-3">
                                <div className="w-12 h-12 bg-white rounded border flex items-center justify-center flex-shrink-0">
                                    <span className="text-xl">🛢️</span>
                                </div>
                                <div className="flex-1 text-sm">
                                    <div className="font-medium text-gray-800 line-clamp-2">{item.name}</div>
                                    <div className="text-gray-500">Qty: {item.quantity}</div>
                                    <div className="font-bold text-gray-800">৳ {item.price * item.quantity}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="border-t border-gray-200 pt-4 space-y-2">
                        <div className="flex justify-between text-gray-600">
                            <span>Subtotal</span>
                            <span>৳ {cartTotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span>Discount</span>
                            <span>৳ 0.00</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg text-gray-900 pt-2 border-t border-gray-200 mt-2">
                            <span>Total</span>
                            <span>৳ {cartTotal.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
