'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import CategoryCard from '@/components/CategoryCard';

export default function CategoryDetailsPage() {
    const params = useParams();
    const slug = params.slug; // e.g., 'brakes'

    // Format slug for display (e.g., "brakes" -> "Brakes")
    const categoryName = slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : '';

    // Dummy data for subcategories based on the screenshot
    // In a real app, this would be fetched based on the slug
    const subcategories = [
        { id: 1, title: 'Brake pads', types: '328 Items', image: 'https://images.unsplash.com/photo-1600661653561-629509216228?q=80&w=400&auto=format&fit=crop' },
        { id: 2, title: 'Master cylinder', types: '45 Items', image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=400&auto=format&fit=crop' }, // Placeholder
        { id: 3, title: 'Brake pipes', types: '1 Items', image: 'https://images.unsplash.com/photo-1530906358829-e84b2769270f?q=80&w=400&auto=format&fit=crop' }, // Placeholder
        { id: 4, title: 'Caliper repair kit', types: '3 Items', image: 'https://images.unsplash.com/photo-1578844251758-2f71da645217?q=80&w=400&auto=format&fit=crop' }, // Placeholder
    ];

    return (
        <main className="bg-white min-h-screen pb-20">
            {/* Breadcrumb Section */}
            <div className="container mx-auto px-4 py-8">
                <div className="relative h-12 w-full md:w-1/2 max-w-2xl">
                    {/* Slanted Orange Background */}
                    <div
                        className="absolute inset-0 bg-peru-500 bg-[#D9822B] z-0"
                        style={{ clipPath: 'polygon(0 0, 95% 0, 100% 100%, 0% 100%)' }}
                    ></div>

                    {/* Breadcrumb Text */}
                    <div className="relative z-10 h-full flex items-center px-6 text-white text-sm font-medium">
                        <Link href="/" className="hover:underline">Home</Link>
                        <span className="mx-2">/</span>
                        <Link href="/category" className="hover:underline">Category</Link>
                        <span className="mx-2">/</span>
                        <span className="font-bold">{categoryName}</span>
                    </div>
                </div>
            </div>

            {/* Subcategories Grid */}
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {subcategories.map((sub) => (
                        <CategoryCard
                            key={sub.id}
                            title={sub.title}
                            types={sub.types}
                            image={sub.image}
                            href={`/category/${slug}/${sub.title.toLowerCase().replace(/\s+/g, '-')}`}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}
