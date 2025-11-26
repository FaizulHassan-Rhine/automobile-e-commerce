import ProductCard from './ProductCard';
import Link from 'next/link';
import Image from 'next/image';

/**
 * Generic product section.
 * If `iconSrc` is provided, the header is styled like the Engine Oil reference:
 * centered icon + title with horizontal lines and a "View more" pill button on the right.
 * Optional `count` renders a small grey count next to the title, e.g. "(762)".
 */
export default function ProductSection({ title, products, iconSrc, viewMoreHref = "#", count }) {
    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Header */}
                {iconSrc ? (
                    <div className="flex items-center justify-between mb-10">
                        {/* Centered title with lines */}
                        <div className="flex-1 flex items-center justify-center gap-4">
                            <div className="hidden sm:block flex-1 h-px bg-gray-300" />
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 relative">
                                    <Image
                                        src={iconSrc}
                                        alt={title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                        {title}
                                    </h2>
                                    {typeof count === "number" && (
                                        <span className="text-sm text-gray-500">({count})</span>
                                    )}
                                </div>
                            </div>
                            <div className="hidden sm:block flex-1 h-px bg-gray-300" />
                        </div>

                        {/* View more pill button */}
                        <div className="ml-6">
                            <Link
                                href={viewMoreHref}
                                className="inline-flex items-center gap-2 border border-gray-300 rounded-full px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
                            >
                                <span>View more</span>
                                <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                            <span className="mr-2">🔧</span> {title}
                        </h2>
                        <Link href={viewMoreHref} className="text-sm text-orange-500 hover:text-orange-600 font-medium">
                            View All &rarr;
                        </Link>
                    </div>
                )}

                {/* Products grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
