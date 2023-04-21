"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {

  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed w-full bg-transparent z-50 mnhdr h-auto transition-all ${scrolling ? 'blur-background' : ''} ${mobileMenuOpen ? 'h-24' : ''}`}>
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-semibold text-gray-800 dark:text-white">
          iNoah
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/features" className="text-lg font-medium text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-gray-300">
            Home
          </Link>
          <Link href="/pricing" className="text-lg font-medium text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-gray-300">
            Previous Work
          </Link>
          <Link href="/contact" className="text-lg font-medium text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-gray-300">
            Contact
          </Link>
        </div>
        <div className="flex space-x-4">
          <button
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <Link href="/Test" className="hidden md:flex">
            <img src="/github-mark-white.svg" alt="" className='GitHub' />
          </Link>
        </div>
      </nav>
      <div className={`md:hidden ${mobileMenuOpen ? 'flex' : 'hidden'} justify-between mt-4 mb-6 ml-5`}>
        <div className="flex flex-col space-y-4">
          <Link href="/features" className="text-lg font-medium text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-gray-300">
            Home
          </Link>
          <Link href="/pricing" className="text-lg font-medium text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-gray-300">
            Previous Work
          </Link>
          <Link href="/contact" className="text-lg font-medium text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-gray-300">
            Contact
          </Link>
        </div>
        <Link href="/Test" className="text-lg font-medium text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-gray-300 flex items-center mt-20 mr-4">
          <img src="/github-mark-white.svg" alt="" className='GitHub' />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
