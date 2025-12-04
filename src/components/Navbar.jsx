import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-emerald-700 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-4xl text-green-500">
              <h1 className="">Soham Ayurvedic Clinic</h1>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="text-xl hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className=" font-bold text-green-500 hover:text-green-900"
            >
              Home
            </Link>
            <Link
              to="/Doctors"
              className="font-bold text-green-500 hover:text-green-900"
            >
              Doctors
            </Link>
            <Link
              to="/services"
              className="font-bold text-green-500 hover:text-green-900"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="font-bold text-green-500 hover:text-green-900"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-white shadow">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link to="/Doctors" className="text-gray-700 hover:text-blue-600">
            Doctors
          </Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-600">
            Services
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
