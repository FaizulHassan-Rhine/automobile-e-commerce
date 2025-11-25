'use client';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

export default function BrandList() {
    const scrollContainerRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    const brands = [
        { name: "Lubrex", image: "/images/brands/1.jpg" },
        { name: "Panasonic", image: "/images/brands/2.png" },
        { name: "Sprayway", image: "/images/brands/3.jpg" },
        { name: "Blue Coral", image: "/images/brands/4.jpg" },
        { name: "Pirelli", image: "/images/brands/5.jpg" },
        { name: "Mobil", image: "/images/brands/6.jpg" },
        { name: "Shell", image: "/images/brands/7.jpg" },
        { name: "Castrol", image: "/images/brands/8.png" },
        { name: "Toyota", image: "/images/brands/9.jpg" },
        { name: "Honda", image: "/images/brands/10.jpg" },
        { name: "Nissan", image: "/images/brands/11.jpg" },
        { name: "Denso", image: "/images/brands/12.webp" },
    ];

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 300;
            const newScrollPosition = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
            scrollContainerRef.current.scrollTo({
                left: newScrollPosition,
                behavior: 'smooth'
            });
        }
    };

    // Auto-scroll effect
    useEffect(() => {
        const autoScroll = () => {
            if (!isPaused && scrollContainerRef.current) {
                const container = scrollContainerRef.current;
                const maxScroll = container.scrollWidth - container.clientWidth;

                // If we've reached the end, scroll back to start
                if (container.scrollLeft >= maxScroll - 10) {
                    container.scrollTo({
                        left: 0,
                        behavior: 'smooth'
                    });
                } else {
                    // Otherwise, scroll right
                    scroll('right');
                }
            }
        };

        const interval = setInterval(autoScroll, 3000); // Auto-scroll every 3 seconds

        return () => clearInterval(interval);
    }, [isPaused]);

    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Popular Brands</h2>
                    <p className="text-gray-600">Shop your favorite brands</p>
                </div>

                {/* Brand Carousel Container */}
                <div className="relative">
                    {/* Scrollable Brand Container */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth px-12 py-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {brands.map((brand, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                                style={{ minWidth: '160px', maxWidth: '160px' }}
                            >
                                <div className="relative h-20 w-full flex items-center justify-center">
                                    <Image
                                        src={brand.image}
                                        alt={brand.name}
                                        width={140}
                                        height={80}
                                        className="object-contain transition-all duration-300"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Load More Link */}
                <div className="text-center mt-6">
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200"
                    >
                        Load more
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Hide scrollbar CSS */}
            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}
