'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const color =
    scrollPosition < 660
      ? "bg-[url('/bg-1.jpg')] bg-top"
      : 'bg-gradient-to-r from-gray-800 via-gray-900 to-black ';

  const handleDownload = () => {
    window.open(
      'https://drive.google.com/file/d/1SiIGlJiZpW0_6tbg5DKmIbEIbQ0FANM8/view?usp=drive_link',
      '_blank',
    );
  };

  return (
    <nav className={`sticky top-0 z-50 ${color} p-5 text-white`}>
      <div className="container flex items-center justify-between px-0">
        <div className="text-xl font-bold text-orange-600">
          <Link href="/" className="text-2xl md:text-4xl">
            Ridoy<span className="text-white">.</span>dev
          </Link>
        </div>
        <div className="hidden space-x-6 md:flex">
          <Link href="/" className="cursor-pointer hover:text-orange-500">
            Home
          </Link>
          <Link
            href="/#aboutme"
            className="cursor-pointer hover:text-orange-500"
          >
            About Me
          </Link>
          <Link
            href="/#experience"
            className="cursor-pointer hover:text-orange-500"
          >
            Experience
          </Link>
          {/* <Link
            href="/#testimonials"
            className="cursor-pointer hover:text-orange-500"
          >
            Testimonials
          </Link>
          <Link href="/#blogs" className="cursor-pointer hover:text-orange-500">
            Blog
          </Link> */}
          <Link
            href="/#contactme"
            className="cursor-pointer hover:text-orange-500"
          >
            Contact Me
          </Link>
        </div>
        <div className="hidden md:block">
          <button
            className="rounded-full border-2 border-orange-600 px-4 py-2 text-white transition-all duration-300 hover:bg-orange-600 hover:text-white"
            onClick={handleDownload}
          >
            Download CV
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
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
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="space-y-3 text-center md:hidden">
          <Link
            href="/"
            className="block cursor-pointer px-2 py-1 hover:text-orange-500"
          >
            Home
          </Link>
          <Link
            href="/#aboutme"
            className="block cursor-pointer px-2 py-1 hover:text-orange-500"
          >
            About Me
          </Link>
          <Link
            href="/#experience"
            className="block cursor-pointer px-2 py-1 hover:text-orange-500"
          >
            Experience
          </Link>
          {/* <Link
            href="/#testimonials"
            className="block cursor-pointer px-2 py-1 hover:text-orange-500"
          >
            Testimonials
          </Link>
          <Link
            href="/#blogs"
            className="block cursor-pointer px-2 py-1 hover:text-orange-500"
          >
            Blog
          </Link> */}
          <Link
            href="/#contactme"
            className="block cursor-pointer px-2 py-1 hover:text-orange-500"
          >
            Contact Me
          </Link>
          <button
            className="rounded-full border-2 border-orange-600 bg-orange-600 px-4 py-2 text-white transition-all duration-300"
            onClick={handleDownload}
          >
            Download CV
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
