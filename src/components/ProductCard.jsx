import Image from 'next/image';

export default function ProductCard({ product }) {
    return (
        <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full group">
            <div className="relative h-48 w-full mb-4 flex items-center justify-center bg-gray-50 rounded">
                {/* Placeholder Image */}
                <div className="text-gray-400 text-4xl">🛢️</div>
                {/* Badge (Optional) */}
                {product.discount && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        {product.discount}% OFF
                    </span>
                )}
            </div>

            <div className="flex-grow">
                <div className="text-xs text-gray-500 mb-1">{product.brand}</div>
                <h3 className="font-medium text-gray-800 mb-2 line-clamp-2 group-hover:text-orange-500 transition-colors">
                    {product.name}
                </h3>
                <div className="flex items-center mb-2">
                    <span className="text-yellow-400 text-sm">★★★★★</span>
                    <span className="text-gray-400 text-xs ml-1">(5)</span>
                </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                    <div>
                        {product.oldPrice && (
                            <span className="text-gray-400 text-xs line-through block">৳ {product.oldPrice}</span>
                        )}
                        <span className="text-lg font-bold text-green-700">৳ {product.price}</span>
                    </div>
                    <button className="bg-orange-100 text-orange-600 hover:bg-orange-500 hover:text-white p-2 rounded-full transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
