"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {

  const [scrolling, setScrolling] = useState(false);

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

  return (
    <header className={`fixed w-full bg-transparent z-50 mnhdr ${scrolling ? 'blur-background' : ''}`}>
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
          <Link href="/login" className="">
            <img src="/github-mark-white.svg" alt="" className='GitHub' />
          </Link>
          {/* <Link href="/signup" className="">
            <img src="/linkedin.svg" alt="" className='LinkedIn' />
          </Link> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
