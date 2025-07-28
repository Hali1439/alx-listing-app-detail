import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-indigo-600">
              LuxStay
            </Link>
            <nav className="ml-10 hidden md:block">
              <ul className="flex space-x-8">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-indigo-600">
                    Rooms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-indigo-600">
                    Mansions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-indigo-600">
                    Countryside
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hidden md:block px-4 py-2 text-gray-600 hover:text-indigo-600">
              Sign in
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              Sign up
            </button>
          </div>
        </div>
        <div className="mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search destinations, properties..."
              className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <div className="absolute left-3 top-3.5 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
