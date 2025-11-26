import Hero from "@/components/Hero";
import BrandList from "@/components/BrandList";
import ProductSection from "@/components/ProductSection";
import Banner from "@/components/Banner";

export default function Home() {
  // Dummy Data for Products
  const engineOils = [
    { id: 1, name: "Toyota Motor Oil 5W-30 SN/CF 4L", price: 3500, oldPrice: 3800, brand: "Toyota", discount: 8, image: "/images/engine-oil/1.jpg" },
    { id: 2, name: "Honda Genuine Engine Oil 0W-20 4L", price: 3200, oldPrice: 3500, brand: "Honda", discount: 9, image: "/images/engine-oil/2.jpg" },
    { id: 3, name: "Shell Helix Ultra 5W-40 4L", price: 4200, oldPrice: 4500, brand: "Shell", discount: 7, image: "/images/engine-oil/3.jpg" },
    { id: 4, name: "Mobil 1 0W-40 Fully Synthetic 4L", price: 4800, oldPrice: 5200, brand: "Mobil", discount: 8, image: "/images/engine-oil/4.jpg" },
    { id: 5, name: "Total Quartz 9000 5W-40 4L", price: 3900, oldPrice: 4200, brand: "Total", discount: 7, image: "/images/engine-oil/5.jpg" },
    { id: 6, name: "Valvoline SynPower 5W-30 4L", price: 3600, oldPrice: 3900, brand: "Valvoline", discount: 8, image: "/images/engine-oil/6.jpg" },
    { id: 7, name: "Castrol Magnatec 10W-40 4L", price: 3400, oldPrice: 3700, brand: "Castrol", discount: 8, image: "/images/engine-oil/7.jpg" },
    { id: 8, name: "Liqui Moly Top Tec 4100 5W-40 4L", price: 4500, oldPrice: 4800, brand: "Liqui Moly", discount: 6, image: "/images/engine-oil/8.jpg" },
    { id: 9, name: "Motul 8100 X-cess 5W-40 4L", price: 4300, oldPrice: 4600, brand: "Motul", discount: 7, image: "/images/engine-oil/9.jpg" },
    { id: 10, name: "Petronas Syntium 7000 0W-40 4L", price: 4700, oldPrice: 5000, brand: "Petronas", discount: 6, image: "/images/engine-oil/10.jpg" },
    { id: 11, name: "Ravenol VST 5W-40 4L", price: 4400, oldPrice: 4700, brand: "Ravenol", discount: 6, image: "/images/engine-oil/11.jpg" },
    { id: 12, name: "Fuchs Titan Supersyn 5W-40 4L", price: 4100, oldPrice: 4400, brand: "Fuchs", discount: 7, image: "/images/engine-oil/12.jpg" },
  ];

  const filters = [
    { id: 1, name: "Toyota OEM Oil Filter", price: 850, oldPrice: 950, brand: "Toyota", discount: 10, image: "/images/filters/1.jpg" },
    { id: 2, name: "Premium Air Filter", price: 1200, oldPrice: 1400, brand: "OilCo", discount: 15, image: "/images/filters/2.jpg" },
    { id: 3, name: "Fuel Filter Assembly", price: 750, oldPrice: 850, brand: "OilCo", discount: 12, image: "/images/filters/3.jpg" },
    { id: 4, name: "Cabin AC Filter", price: 1500, oldPrice: 1800, brand: "OilCo", discount: 16, image: "/images/filters/4.jpg" },
  ];

  const accessories = [
    { id: 9, name: "Car Vacuum Cleaner High Power", price: 2500, oldPrice: 3000, brand: "Generic", discount: 17, image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=400&h=400&fit=crop" },
    { id: 10, name: "Microfiber Cleaning Cloth (Pack of 5)", price: 450, oldPrice: 600, brand: "3M", discount: 25, image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=400&h=400&fit=crop" },
    { id: 11, name: "Car Dashboard Polish 200ml", price: 350, oldPrice: 450, brand: "Waxpol", discount: 22, image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=400&h=400&fit=crop" },
    { id: 12, name: "Digital Tyre Inflator Pump", price: 3200, oldPrice: 3800, brand: "Michelin", discount: 15, image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=400&h=400&fit=crop" },
  ];

  const autoCare = [
    { id: 1, name: "Interior Detailer Spray", price: 650, oldPrice: 750, brand: "OilCo", discount: 13, image: "/images/care/1.jpg" },
    { id: 2, name: "Leather Cleaner & Conditioner", price: 900, oldPrice: 1050, brand: "OilCo", discount: 14, image: "/images/care/2.jpg" },
    { id: 3, name: "Glass & Windshield Cleaner", price: 550, oldPrice: 650, brand: "OilCo", discount: 15, image: "/images/care/3.jpg" },
    { id: 4, name: "Foam Car Shampoo", price: 700, oldPrice: 820, brand: "OilCo", discount: 15, image: "/images/care/4.jpg" },
    { id: 5, name: "Tire & Trim Shine", price: 750, oldPrice: 880, brand: "OilCo", discount: 15, image: "/images/care/5.jpg" },
    { id: 6, name: "Wheel & Iron Remover", price: 950, oldPrice: 1100, brand: "OilCo", discount: 14, image: "/images/care/6.jpg" },
    { id: 7, name: "Quick Detailer Spray Wax", price: 800, oldPrice: 940, brand: "OilCo", discount: 15, image: "/images/care/7.jpg" },
    { id: 8, name: "All Purpose Cleaner", price: 600, oldPrice: 720, brand: "OilCo", discount: 17, image: "/images/care/8.jpg" },
  ];

  const brakes = [
    { id: 1, name: "Front Brake Pad Set", price: 3200, oldPrice: 3500, brand: "OilCo", discount: 9, image: "/images/breaks/1.jpg" },
    { id: 2, name: "Rear Brake Pad Set", price: 3000, oldPrice: 3300, brand: "OilCo", discount: 9, image: "/images/breaks/2.jpg" },
    { id: 3, name: "Brake Disc Rotor", price: 4800, oldPrice: 5200, brand: "OilCo", discount: 8, image: "/images/breaks/3.jpg" },
    { id: 4, name: "Performance Brake Kit", price: 8500, oldPrice: 9200, brand: "OilCo", discount: 8, image: "/images/breaks/4.jpg" },
  ];

  const damping = [
    { id: 1, name: "Front Shock Absorber", price: 5200, oldPrice: 5600, brand: "OilCo", discount: 7, image: "/images/damping/1.jpg" },
    { id: 2, name: "Rear Shock Absorber", price: 5000, oldPrice: 5400, brand: "OilCo", discount: 7, image: "/images/damping/2.jpg" },
    { id: 3, name: "Suspension Spring Set", price: 7800, oldPrice: 8200, brand: "OilCo", discount: 5, image: "/images/damping/3.jpg" },
    { id: 4, name: "Complete Damping Kit", price: 11500, oldPrice: 12200, brand: "OilCo", discount: 6, image: "/images/damping/4.jpg" },
  ];

  return (
    <div className="bg-white">
      <Hero />
      <BrandList />

      <ProductSection
        title="Engine Oil"
        products={engineOils}
        iconSrc="/images/engine.png"
        viewMoreHref="/category/engine-oil"
      />

      {/* First Banner */}
      <Banner />

      {/* Auto detailing and care section (second section) */}
      <ProductSection
        title="Auto detailing and care"
        products={autoCare}
        iconSrc="/images/care.png"
        viewMoreHref="/category/auto-detailing-and-care"
        count={762}
      />

      <ProductSection
        title="Filters"
        products={filters}
        iconSrc="/images/filter.png"
        viewMoreHref="/category/filters"
        count={631}
      />
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

      <ProductSection
        title="Brakes"
        products={brakes}
        iconSrc="/images/breaks.png"
        viewMoreHref="/category/brakes"
        count={362}
      />

      <ProductSection
        title="Damping"
        products={damping}
        iconSrc="/images/damping.png"
        viewMoreHref="/category/damping"
        count={226}
      />

      

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
