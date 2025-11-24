export default function BrandList() {
    const brands = [
        { name: "Toyota", color: "bg-red-600" },
        { name: "Honda", color: "bg-blue-600" },
        { name: "Nissan", color: "bg-gray-800" },
        { name: "Shell", color: "bg-yellow-500" },
        { name: "Mobil", color: "bg-blue-800" },
        { name: "Castrol", color: "bg-green-600" },
    ];

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Popular Brands</h2>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 grayscale hover:grayscale-0 transition-all duration-500">
                    {brands.map((brand, index) => (
                        <div key={index} className="flex items-center justify-center">
                            {/* Placeholder for Logo */}
                            <div className={`h-12 w-32 ${brand.color} bg-opacity-20 flex items-center justify-center rounded border border-gray-200`}>
                                <span className="font-bold text-gray-600">{brand.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
