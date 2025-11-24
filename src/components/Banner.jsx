'use client';
import { useState, useEffect } from 'react';

export default function Banner({
    images = [],
    title = "OUR COLLECTION FOR",
    subtitle = "MODERN HYBRID VEHICLE",
    highlight = "HYBRID",
    buttonText = "SHOP NOW"
}) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Default images if none provided
    const bannerImages = images.length > 0 ? images : [
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1200&auto=format&fit=crop'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [bannerImages.length]);

    // Split subtitle to highlight the specific word
    const parts = subtitle.split(highlight);

    return (
        <section className="py-8">
            <div className="container mx-auto px-4">
                <div className="relative rounded-lg overflow-hidden bg-green-900 h-48 md:h-64 flex items-center group">
                    {/* Background Images with Cross-Fade Transition */}
                    {bannerImages.map((img, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-40' : 'opacity-0'}`}
                            style={{ backgroundImage: `url(${img})` }}
                        ></div>
                    ))}

                    {/* Overlay to ensure text readability */}
                    <div className="absolute inset-0 bg-green-900/60 pointer-events-none"></div>

                    <div className="relative z-10 px-8 md:px-16 w-full flex flex-col md:flex-row items-center justify-between">
                        <div className="text-center md:text-left mb-4 md:mb-0">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{title}</h3>
                            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-wider">
                                {parts[0]} <span className="text-orange-500">{highlight}</span> {parts[1]}
                            </h2>
                        </div>
                        <button className="bg-orange-500 text-white font-bold py-3 px-8 rounded hover:bg-orange-600 transition duration-300 shadow-lg z-20">
                            {buttonText}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
