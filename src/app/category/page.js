'use client';
import { useState } from 'react';
import Link from 'next/link';
import CategoryCard from '@/components/CategoryCard';

export default function CategoryPage() {
    const [activeTab, setActiveTab] = useState('category');

    const categories = [
        { id: 1, title: 'Wheels', types: 1, image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=400&auto=format&fit=crop' },
        { id: 2, title: 'Oils and fluids', types: 14, image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=400&auto=format&fit=crop' },
        { id: 3, title: 'Brakes', types: 4, image: 'https://images.unsplash.com/photo-1600661653561-629509216228?q=80&w=400&auto=format&fit=crop' },
        { id: 4, title: 'Filters', types: 6, image: 'https://images.unsplash.com/photo-1578844251758-2f71da645217?q=80&w=400&auto=format&fit=crop' },
        { id: 5, title: 'Engine', types: 4, image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=400&auto=format&fit=crop' },
        { id: 6, title: 'Wiper and washer system', types: 1, image: 'https://images.unsplash.com/photo-1585058178215-331078e50c3a?q=80&w=400&auto=format&fit=crop' },
        { id: 7, title: 'Ignition', types: 3, image: 'https://images.unsplash.com/photo-1622185135505-2d795043df63?q=80&w=400&auto=format&fit=crop' },
        { id: 8, title: 'Suspension', types: 4, image: 'https://images.unsplash.com/photo-1459603677915-a62079ffd002?q=80&w=400&auto=format&fit=crop' },
        { id: 9, title: 'Electrics', types: 1, image: 'https://images.unsplash.com/photo-1517055729445-b77a6368fd86?q=80&w=400&auto=format&fit=crop' },
        { id: 10, title: 'Damping', types: 6, image: 'https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=400&auto=format&fit=crop' },
    ];

    return (
        <main className="bg-white min-h-screen pb-20">
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
                        <span className="text-xs font-bold text-gray-800 block uppercase tracking-wide">Category</span>
                    </div>
                    <input
                        type="text"
                        placeholder="Search by category type"
                        className="flex-grow px-4 py-2 text-gray-700 focus:outline-none"
                    />
                    <button className="bg-orange-400 text-white p-3 rounded-full hover:bg-orange-500 transition shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Categories Grid */}
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {categories.map((cat) => (
                        <CategoryCard
                            key={cat.id}
                            title={cat.title}
                            types={cat.types}
                            image={cat.image}
                            href={`/category/${cat.title.toLowerCase().replace(/\s+/g, '-')}`}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}
