import Image from 'next/image';
import Link from 'next/link';

export default function CategoryCard({ title, types, image, href }) {
    // Fallback slug generation if href is not provided
    const slug = title.toLowerCase().replace(/\s+/g, '-');
    const linkTarget = href || `/category/${slug}`;

    return (
        <Link href={linkTarget} className="block w-full">
            <div className="flex items-center h-40 w-full relative group cursor-pointer overflow-hidden">
                {/* Orange Border Hover Effect */}
                <div className="absolute left-0 top-0 bottom-0 bg-orange-500 w-0 group-hover:w-3 transition-all duration-300 z-20"></div>

                {/* Slanted Background Shape */}
                <div
                    className="absolute left-0 top-0 bottom-0 bg-green-900 w-[85%] h-full z-0 transition-colors duration-300 group-hover:bg-green-800"
                    style={{ clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0% 100%)' }}
                ></div>

                {/* Content */}
                <div className="relative z-10 flex justify-between items-center w-full px-8 pl-12 transition-all duration-300">
                    <div className="text-white">
                        <h3 className="text-2xl font-bold mb-1">{title}</h3>
                        <p className="text-sm text-gray-300">{types} Types</p>
                    </div>

                    {/* Image - Positioned to overlap the slanted edge */}
                    <div className="w-32 h-32 relative flex-shrink-0 ml-4">
                        {/* Using a div with background for now to easily handle sizing/contain */}
                        <div
                            className="w-full h-full bg-contain bg-no-repeat bg-center drop-shadow-xl transition-transform duration-300 group-hover:scale-110"
                            style={{ backgroundImage: `url(${image})` }}
                        ></div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
