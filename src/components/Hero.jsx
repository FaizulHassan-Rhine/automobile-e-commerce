'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
    const [activeTab, setActiveTab] = useState('inventory');
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            image: '/images/hero/1.jpg',
            title: 'Engine Oil',
            description: 'Premium protection for your engine'
        },
        {
            id: 2,
            image: '/images/hero/2.jpg',
            title: 'OEM Spare Parts',
            description: 'Get authentic car components'
        },
        {
            id: 3,
            image: '/images/hero/3.jpg',
            title: 'Night Vision',
            description: 'Headlights and visibility solutions'
        },
        {
            id: 4,
            image: '/images/hero/4.jpg',
            title: 'Performance Tires',
            description: 'Grip and control for every road'
        },
        {
            id: 5,
            image: '/images/hero/5.jpg',
            title: 'Car Accessories',
            description: 'Upgrade your driving experience'
        }
    ];

    // Auto-slide functionality
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    // Helper function to get the correct slide index with wrapping
    const getSlideIndex = (offset) => {
        const index = currentSlide + offset;
        if (index < 0) return slides.length + index;
        if (index >= slides.length) return index - slides.length;
        return index;
    };

    return (
        <section className="relative bg-white pb-12 overflow-hidden">
            {/* Tabs Section */}
            <div className="bg-green-900 text-white relative z-30">
                <div className="container mx-auto flex justify-center">
                    <div className="flex">
                        <Link
                            href="/inventory"
                            className={`px-8 py-4 font-bold text-sm tracking-wider hover:bg-green-800 transition ${activeTab === 'inventory' ? 'border-b-4 border-orange-500' : ''}`}
                            onClick={() => setActiveTab('inventory')}
                        >
                            INVENTORY
                        </Link>
                        <div className="border-r border-green-800 h-6 self-center mx-2"></div>
                        <Link
                            href="/vehicle"
                            className={`px-8 py-4 font-bold text-sm tracking-wider hover:bg-green-800 transition ${activeTab === 'vehicle' ? 'border-b-4 border-orange-500' : ''}`}
                            onClick={() => setActiveTab('vehicle')}
                        >
                            VEHICLE
                        </Link>
                        <div className="border-r border-green-800 h-6 self-center mx-2"></div>
                        <Link
                            href="/category"
                            className={`px-8 py-4 font-bold text-sm tracking-wider hover:bg-green-800 transition ${activeTab === 'category' ? 'border-b-4 border-orange-500' : ''}`}
                            onClick={() => setActiveTab('category')}
                        >
                            CATEGORY
                        </Link>
                    </div>
                </div>
            </div>

            {/* Search Bar Section */}
            <div className="container mx-auto px-4 -mt-0 relative z-20">
                <div className="bg-white rounded-full shadow-2xl max-w-4xl mx-auto flex items-center p-2 border border-gray-100 mt-8 mb-12">
                    <div className="pl-6 pr-4 border-r border-gray-200">
                        <span className="text-xs font-bold text-gray-800 block uppercase tracking-wide">Inventory</span>
                    </div>
                    <input
                        type="text"
                        placeholder="Type any keywords"
                        className="flex-grow px-4 py-2 text-gray-700 focus:outline-none"
                    />
                    <button className="bg-orange-400 text-white p-3 rounded-full hover:bg-orange-500 transition shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* 3-Image Carousel */}
            <div className="relative w-full mt-8 py-8">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center gap-6">
                        {/* Left Image */}
                        <div className="w-1/4 flex-shrink-0 transition-all duration-700 ease-in-out transform scale-90 opacity-50 grayscale">
                            <div className="h-48 md:h-72 w-full overflow-hidden rounded-lg shadow-lg">
                                <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{ backgroundImage: `url(${slides[getSlideIndex(-1)].image})` }}
                                ></div>
                            </div>
                        </div>

                        {/* Center Image (Active) */}
                        <div className="w-1/2 flex-shrink-0 transition-all duration-700 ease-in-out transform scale-110 z-10">
                            <div className="h-64 md:h-96 w-full overflow-hidden rounded-lg shadow-2xl">
                                <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
                                ></div>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="w-1/4 flex-shrink-0 transition-all duration-700 ease-in-out transform scale-90 opacity-50 grayscale">
                            <div className="h-48 md:h-72 w-full overflow-hidden rounded-lg shadow-lg">
                                <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{ backgroundImage: `url(${slides[getSlideIndex(1)].image})` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Title and Description - Below Carousel */}
            <div className="container mx-auto px-4 mt-8 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-3 uppercase tracking-tight transition-all duration-300">
                        {slides[currentSlide].title}
                    </h2>
                    <p className="text-gray-600 text-base uppercase tracking-wide mb-8">
                        {slides[currentSlide].description}
                    </p>
                </div>
            </div>

            {/* Counter and Progress Bar - Below Title */}
            <div className="container mx-auto px-4 mt-4">
                <div className="max-w-md mx-auto">
                    <div className="flex items-center gap-6">
                        {/* Counter on Left */}
                        <div className="flex items-baseline gap-0.5">
                            <span className="text-base font-bold text-gray-900">
                                {String(currentSlide + 1).padStart(2, '0')}
                            </span>
                            <span className="text-base font-bold text-gray-400">/</span>
                            <span className="text-base font-bold text-gray-400">
                                {String(slides.length).padStart(2, '0')}
                            </span>
                        </div>

                        {/* Progress Bar on Right */}
                        <div className="flex-1 h-0.5 bg-gray-300 rounded-full overflow-hidden relative">
                            <div
                                className="h-full bg-orange-500 transition-all duration-500 ease-out absolute left-0 top-0"
                                style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
