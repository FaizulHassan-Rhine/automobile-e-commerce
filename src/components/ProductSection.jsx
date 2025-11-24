import ProductCard from './ProductCard';
import Link from 'next/link';

export default function ProductSection({ title, products }) {
    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
                    <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                        <span className="mr-2">🔧</span> {title}
                    </h2>
                    <Link href="#" className="text-sm text-orange-500 hover:text-orange-600 font-medium">
                        View All &rarr;
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
