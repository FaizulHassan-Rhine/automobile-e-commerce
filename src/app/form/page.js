"use client";

import { useState } from "react";

export default function Home() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const phoneNumber = "8801845845789"; // Country code (880) + Number

        const text = `New Form Submission:
Name: ${name}
Email: ${email}
Message: ${message}`;

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

        window.open(whatsappURL, "_blank");
    };

    return (
        <main className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-6">
                <h1 className="text-2xl font-bold mb-4 text-center">
                    Contact Form → WhatsApp
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 font-medium">Name</label>
                        <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Message</label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full border rounded-lg px-3 py-2 h-24 focus:ring focus:ring-blue-300"
                            placeholder="Enter your message"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition"
                    >
                        Send to WhatsApp
                    </button>
                </form>
            </div>
        </main>
    );
}
