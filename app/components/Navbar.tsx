
import Link from 'next/link';
import { useState } from 'react';
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="#hero" className="text-3xl font-bold text-blue-900">
          Waseem Khan
        </Link>
        <div className="hidden md:flex space-x-8 text-lg">
          <Link href="#hero" className="text-gray-800 hover:text-blue-500 transition duration-300">Home</Link>
          
          <Link href="#skills" className="text-gray-800 hover:text-blue-500 transition duration-300">Skills</Link>
          <Link href="#projects" className="text-gray-800 hover:text-blue-500 transition duration-300">Projects</Link>
          <Link href="#about-contact" className="text-gray-800 hover:text-blue-500 transition duration-300">Contact</Link>
        </div>
        <button onClick={toggleMenu} className="md:hidden text-gray-800 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 flex flex-col items-center space-y-6 text-2xl text-white p-6">
          <button onClick={toggleMenu} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <Link href="#hero" className="hover:text-blue-500">Home</Link>
          <Link href="#about" className="hover:text-blue-500">About</Link>
          <Link href="#skills" className="hover:text-blue-500">Skills</Link>
          <Link href="#projects" className="hover:text-blue-500">Projects</Link>
          <Link href="#contact" className="hover:text-blue-500">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;