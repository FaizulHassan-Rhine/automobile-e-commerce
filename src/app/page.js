import Hero from "@/components/Hero";
import BrandList from "@/components/BrandList";
import ProductSection from "@/components/ProductSection";
import Banner from "@/components/Banner";

export default function Home() {
  // Dummy Data for Products
  const engineOils = [
    { id: 1, name: "Toyota Motor Oil 5W-30 SN/CF 4L", price: 3500, oldPrice: 3800, brand: "Toyota", discount: 8, image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=400&fit=crop" },
    { id: 2, name: "Honda Genuine Engine Oil 0W-20 4L", price: 3200, oldPrice: 3500, brand: "Honda", discount: 9, image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=400&h=400&fit=crop" },
    { id: 3, name: "Shell Helix Ultra 5W-40 4L", price: 4200, oldPrice: 4500, brand: "Shell", discount: 7, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop" },
    { id: 4, name: "Mobil 1 0W-40 Fully Synthetic 4L", price: 4800, oldPrice: 5200, brand: "Mobil", discount: 8, image: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=400&h=400&fit=crop" },
  ];

  const filters = [
    { id: 5, name: "Toyota Oil Filter 90915-YZZE1", price: 850, oldPrice: 950, brand: "Toyota", discount: 10, image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=400&fit=crop" },
    { id: 6, name: "Honda Air Filter 17220-51B-H00", price: 1200, oldPrice: 1400, brand: "Honda", discount: 15, image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&h=400&fit=crop" },
    { id: 7, name: "Nissan Oil Filter 15208-65F0A", price: 750, oldPrice: 850, brand: "Nissan", discount: 12, image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&h=400&fit=crop" },
    { id: 8, name: "Denso Cabin Air Filter", price: 1500, oldPrice: 1800, brand: "Denso", discount: 16, image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=400&fit=crop" },
  ];

  const accessories = [
    { id: 9, name: "Car Vacuum Cleaner High Power", price: 2500, oldPrice: 3000, brand: "Generic", discount: 17, image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=400&h=400&fit=crop" },
    { id: 10, name: "Microfiber Cleaning Cloth (Pack of 5)", price: 450, oldPrice: 600, brand: "3M", discount: 25, image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=400&h=400&fit=crop" },
    { id: 11, name: "Car Dashboard Polish 200ml", price: 350, oldPrice: 450, brand: "Waxpol", discount: 22, image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=400&h=400&fit=crop" },
    { id: 12, name: "Digital Tyre Inflator Pump", price: 3200, oldPrice: 3800, brand: "Michelin", discount: 15, image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=400&h=400&fit=crop" },
  ];

  return (
    <div className="bg-white">
      <Hero />
      <BrandList />

      <ProductSection title="Engine Oils" products={engineOils} />

      {/* First Banner */}
      <Banner />


      <ProductSection title="Filters & Parts" products={filters} />

      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-orange-700">
                  Need help finding the right part? <a href="#" className="font-medium underline hover:text-orange-600">Contact our experts</a> or use the vehicle selector above.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductSection title="Car Care & Accessories" products={accessories} />

      {/* Footer Banner */}
      <Banner
        title="GET THE BEST"
        subtitle="CAR ACCESSORIES & PARTS"
        highlight="ACCESSORIES"
        images={[
          'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop'
        ]}
      />
    </div>
  );
}
