import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../images/logo.png';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <nav className="bg-pink text-black h-[96px] py-5 lg:py-6 border-t-2 border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src={Logo} alt="s" className="w-32 h-16 rounded object-cover border-2 border-black" width={50} height={50} />
          </div>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-black hover:text-gray-300 px-3 py-2 rounded-md text-2xl font-medium">
              Home
            </Link>
            <Link to="/about" className="text-black hover:text-gray-300 px-3 py-2 rounded-md text-2xl font-medium">
              About
            </Link>
            <Link to="/contact" className="text-black hover:text-gray-300 px-3 py-2 rounded-md text-2xl font-medium">
              Projects
            </Link>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-black hover:text-gray-500 focus:outline-none focus:text-gray-500"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-black hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/about" className="text-black hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link to="/services" className="text-black hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">
              Projects
            </Link>
            <Link to="/contact" className="text-black hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )};
