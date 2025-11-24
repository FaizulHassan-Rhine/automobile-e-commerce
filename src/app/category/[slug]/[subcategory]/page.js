'use client';
import { useParams } from 'next/navigation';
import ListingProductCard from '@/components/ListingProductCard';

export default function SubcategoryPage() {
    const params = useParams();
    const subcategorySlug = params.subcategory; // e.g., 'brake-pads'

    // Format slug for display
    const subcategoryName = subcategorySlug
        ? subcategorySlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        : '';

    // Dummy data for products
    const products = [
        {
            id: 1,
            name: 'TOYOTA OEM REAR BRAKE SHOE 04495-52121',
            price: 5000.00,
            image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=400&auto=format&fit=crop'
        },
        {
            id: 2,
            name: 'POWER STOP AUTOSPECIALTY BRAKE SHOES B913',
            price: 4000.00,
            image: 'https://images.unsplash.com/photo-1600661653561-629509216228?q=80&w=400&auto=format&fit=crop'
        },
        {
            id: 3,
            name: 'POWERSTOP 17-1394 FRONT BRAKE PAD FOR HONDA GRACE',
            price: 4000.00,
            image: 'https://images.unsplash.com/photo-1578844251758-2f71da645217?q=80&w=400&auto=format&fit=crop'
        },
        {
            id: 4,
            name: 'POWERSTOP REAR DISC BRAKE PAD 17-1391',
            price: 12000.00,
            image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=400&auto=format&fit=crop'
        },
    ];

    return (
        <main className="bg-white min-h-screen pb-20 pt-8">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded text-sm font-medium text-gray-600 hover:border-orange-500 hover:text-orange-500 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                            Filters
                        </button>
                        <div className="flex items-baseline gap-2">
                            <h1 className="text-xl font-bold text-gray-800">{subcategoryName}</h1>
                            <span className="text-sm text-gray-400">328 Displaying</span>
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <ListingProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </main>
    );
}
