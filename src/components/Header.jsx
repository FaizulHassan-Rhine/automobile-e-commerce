import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <div className="flex items-center">
            {/* Using a text logo for now, matching the style */}
            <div className="bg-green-900 text-white p-2 rounded-l-md">
              <svg className="w-6 h-6 text-orange-500 fill-current" viewBox="0 0 24 24">
                <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z" />
                {/* Placeholder icon path, replacing with a drop shape if possible or just generic */}
                <path d="M12.42 2.15c-.26-.2-.6-.2-.84 0C8.47 4.38 4 8.21 4 13.5c0 4.42 3.58 8 8 8s8-3.58 8-8c0-5.29-4.47-9.12-7.58-11.35zM12 19.5c-3.31 0-6-2.69-6-6 0-3.6 3.06-6.66 5.5-8.65.28-.23.72-.23 1 0 2.44 1.99 5.5 5.05 5.5 8.65 0 3.31-2.69 6-6 6z" />
              </svg>
            </div>
            <div className="bg-white text-green-900 font-black text-2xl tracking-tighter border-2 border-green-900 p-1 rounded-r-md leading-none">
              OIL<br />CO.
            </div>
          </div>
        </Link>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded hover:bg-gray-200 transition">
            <span className="font-bold text-gray-700">Cart</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
          <button className="bg-orange-500 text-white font-bold px-6 py-2 rounded hover:bg-orange-600 transition">
            SIGN IN
          </button>
        </div>
      </div>
    </header>
  );
}
