import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black py-5 text-white md:py-10">
      <section className="container md:px-0">
        <div className="flex flex-col items-center gap-y-2 md:flex-row md:justify-between">
          <p className="text-lg">
            © {new Date().getFullYear()} <Link href="/">ridoy.dev.</Link> All
            rights reserved.
          </p>
          <div className="md:flex-end space-x-3">
            <Link
              href="/privacy-policy"
              className="text-gray-300 hover:text-white"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-400">|</span>
            <Link
              href="/terms-and-conditions"
              className="text-gray-300 hover:text-white"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
