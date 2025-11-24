'use client';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function ProductDetailsPage() {
    const params = useParams();
    // params.slug = category, params.subcategory = subcategory, params.product = product slug

    const [qty, setQty] = useState(1);
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);
    const [isAtAGlanceOpen, setIsAtAGlanceOpen] = useState(true);

    // Dummy product data
    const product = {
        name: 'TOYOTA OEM ENGINE MOUNTING FOR AXIO 2006',
        price: 7200.00,
        sku: 'TYU000936',
        image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=400&auto=format&fit=crop', // Placeholder
        description: 'Compatible with: TOYOTA AXIO 2006',
        appropriateUse: 'For Car'
    };

    return (
        <main className="bg-white min-h-screen pb-20 pt-4">
            <div className="container mx-auto px-4">
                {/* Breadcrumb */}
                <div className="text-xs text-gray-500 mb-8">
                    <Link href="/" className="hover:underline">Home</Link> /
                    <Link href="/products" className="hover:underline ml-1">Products</Link> /
                    <span className="ml-1 capitalize">{params.slug}</span> /
                    <span className="ml-1 capitalize">{params.subcategory?.replace(/-/g, ' ')}</span> /
                    <span className="ml-1 text-gray-800">{product.sku}</span>
                </div>

                <div className="flex flex-col md:flex-row gap-12">
                    {/* Left Column - Image */}
                    <div className="w-full md:w-1/2">
                        <div className="relative aspect-square w-full max-w-lg mx-auto flex items-center justify-center">
                            {/* Main Image */}
                            <div
                                className="w-full h-full bg-contain bg-no-repeat bg-center"
                                style={{ backgroundImage: `url(${product.image})` }}
                            ></div>

                            {/* OilCo Logo Overlay */}
                            <div className="absolute bottom-4 left-4">
                                <div className="bg-green-900 text-white p-2 px-3 font-bold text-lg flex flex-col leading-none">
                                    <span className="text-orange-500 text-2xl">Oil</span>
                                    <span>Co.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Details */}
                    <div className="w-full md:w-1/2">
                        <h1 className="text-2xl font-bold text-gray-900 mb-6 uppercase leading-tight">
                            {product.name}
                        </h1>

                        <div className="text-xl font-bold text-gray-900 mb-8">
                            BDT {product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        </div>

                        <div className="flex gap-4 mb-8">
                            {/* Qty Selector */}
                            <div className="w-32">
                                <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">QTY</label>
                                <div className="flex border border-gray-300 rounded-sm">
                                    <div className="flex-grow flex items-center justify-center font-bold text-gray-700 px-4 py-2">
                                        {qty}
                                    </div>
                                    <div className="flex flex-col border-l border-gray-300">
                                        <button
                                            onClick={() => setQty(q => q + 1)}
                                            className="px-2 py-0.5 hover:bg-gray-100 text-gray-500 text-xs"
                                        >+</button>
                                        <button
                                            onClick={() => setQty(q => Math.max(1, q - 1))}
                                            className="px-2 py-0.5 hover:bg-gray-100 text-gray-500 text-xs border-t border-gray-300"
                                        >-</button>
                                    </div>
                                </div>
                            </div>

                            {/* Size Selector */}
                            <div className="w-48">
                                <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">SIZE</label>
                                <div className="relative">
                                    <select className="w-full border border-gray-300 rounded-sm px-4 py-2 text-gray-700 appearance-none bg-white focus:outline-none">
                                        <option>1 pcs</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="w-full bg-[#D9822B] text-white font-bold py-4 text-sm uppercase tracking-wider hover:bg-[#c07225] transition-colors rounded-sm mb-12">
                            ORDER NOW
                        </button>

                        {/* Collapsible Sections */}
                        <div className="border-t border-gray-200">
                            {/* Description */}
                            <div className="border-b border-gray-200">
                                <button
                                    className="w-full py-4 flex justify-between items-center text-left focus:outline-none"
                                    onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
                                >
                                    <span className="text-xs font-bold text-gray-600 uppercase">DESCRIPTION</span>
                                    <span className="text-gray-400">
                                        {isDescriptionOpen ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                        )}
                                    </span>
                                </button>
                                {isDescriptionOpen && (
                                    <div className="pb-4 text-sm text-gray-600">
                                        <p className="mb-2 font-bold text-gray-500 text-xs uppercase">COMPATIBLE WITH:</p>
                                        <p>{product.description}</p>
                                    </div>
                                )}
                            </div>

                            {/* At A Glance */}
                            <div className="border-b border-gray-200">
                                <button
                                    className="w-full py-4 flex justify-between items-center text-left focus:outline-none"
                                    onClick={() => setIsAtAGlanceOpen(!isAtAGlanceOpen)}
                                >
                                    <span className="text-xs font-bold text-gray-600 uppercase">AT A GLANCE</span>
                                    <span className="text-gray-400">
                                        {isAtAGlanceOpen ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                        )}
                                    </span>
                                </button>
                                {isAtAGlanceOpen && (
                                    <div className="pb-4 text-sm text-gray-600">
                                        <p>Appropriate Use: {product.appropriateUse}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
