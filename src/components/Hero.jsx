'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
    const [activeTab, setActiveTab] = useState('inventory');
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop',
            title: 'Engine Oil',
            description: 'Premium protection for your engine'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1578844251758-2f71da645217?q=80&w=800&auto=format&fit=crop',
            title: 'OEM Spare Parts',
            description: 'Get authentic car components'
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop',
            title: 'Night Vision',
            description: 'Headlights and visibility solutions'
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=800&auto=format&fit=crop',
            title: 'Performance Tires',
            description: 'Grip and control for every road'
        },
        {
            id: 5,
            image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop',
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

            {/* Full Width Slider Section */}
            <div className="relative w-full mt-8">
                <div className="flex items-center justify-center overflow-hidden">
                    {/* We display 3 images but centered on the current one */}
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateX(calc(-${currentSlide * 33.333}% + 33.333%))`,
                            width: `${slides.length * 33.333}%` // Ensure enough width for all slides
                        }}
                    >
                        {slides.map((slide, index) => {
                            const isActive = index === currentSlide;
                            return (
                                <div
                                    key={slide.id}
                                    className={`relative px-2 transition-all duration-500 ${isActive ? 'scale-110 z-10 opacity-100' : 'scale-90 opacity-50 grayscale'}`}
                                    style={{ width: '33.333%', flexShrink: 0 }}
                                >
                                    <div className="h-64 md:h-96 w-full overflow-hidden rounded-lg shadow-lg">
                                        <div
                                            className="w-full h-full bg-cover bg-center"
                                            style={{ backgroundImage: `url(${slide.image})` }}
                                        ></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Text and Counter Section */}
            <div className="container mx-auto px-4 mt-12 text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-4xl font-black text-gray-900 mb-2 uppercase tracking-tighter transition-all duration-300">
                        {slides[currentSlide].title}
                    </h2>
                    <p className="text-gray-500 text-sm uppercase tracking-widest mb-8">
                        {slides[currentSlide].description}
                    </p>

                    {/* Counter and Progress */}
                    <div className="flex items-center justify-center space-x-4">
                        <span className="text-sm font-bold text-gray-900">
                            {String(currentSlide + 1).padStart(2, '0')}
                        </span>
                        <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-orange-500 transition-all duration-500 ease-out"
                                style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                            ></div>
                        </div>
                        <span className="text-sm font-bold text-gray-400">
                            {String(slides.length).padStart(2, '0')}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
