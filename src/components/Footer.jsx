import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-100 pt-12 pb-6 border-t border-gray-200 mt-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* About */}
                    <div>
                        <div className="text-2xl font-bold text-green-800 mb-4">
                            <span className="text-orange-500">OIL</span>CO
                        </div>
                        <p className="text-gray-600 text-sm mb-4">
                            Your trusted partner for all automobile lubricants and spare parts.
                            Genuine products, best prices.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-gray-800 mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="#" className="hover:text-orange-500">About Us</Link></li>
                            <li><Link href="#" className="hover:text-orange-500">Contact Us</Link></li>
                            <li><Link href="#" className="hover:text-orange-500">Terms & Conditions</Link></li>
                            <li><Link href="#" className="hover:text-orange-500">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h3 className="font-bold text-gray-800 mb-4">Customer Service</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="#" className="hover:text-orange-500">My Account</Link></li>
                            <li><Link href="#" className="hover:text-orange-500">Order History</Link></li>
                            <li><Link href="#" className="hover:text-orange-500">Wishlist</Link></li>
                            <li><Link href="#" className="hover:text-orange-500">Returns</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold text-gray-800 mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-start">
                                <span className="mr-2">📍</span>
                                <span>123 Auto Lane, Dhaka, Bangladesh</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">📞</span>
                                <span>+880 1234 567890</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">✉️</span>
                                <span>support@oilco.com.bd</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-500">© 2024 OilCo Clone. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        {/* Payment Icons Placeholders */}
                        <div className="h-6 w-10 bg-gray-300 rounded"></div>
                        <div className="h-6 w-10 bg-gray-300 rounded"></div>
                        <div className="h-6 w-10 bg-gray-300 rounded"></div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
