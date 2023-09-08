import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white font-bold text-2xl">Collaborate</Link>
          
          <div className="hidden md:flex items-center">
            <Link to="/" className="text-white mx-4">Home</Link>
            <Link to="/about" className="text-white mx-4">About</Link>
            <Link to="/contact" className="text-white mx-4">Contact</Link>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-white focus:outline-none"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16m-7 6h7" 
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4">
            <Link to="/" className="block text-white mb-2">Home</Link>
            <Link to="/about" className="block text-white mb-2">About</Link>
            <Link to="/contact" className="block text-white mb-2">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
