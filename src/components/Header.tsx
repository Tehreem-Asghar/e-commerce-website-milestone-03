"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { TbDeviceMobile } from "react-icons/tb";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="flex items-center justify-between p-4 bg-black text-white shadow-lg sticky top-0 z-50 max-w-full overflow-x-hidden">
      {/* Logo Section */}
       <div className="flex items-center space-x-2">
        {/* Phone icon for large screens */}
        <TbDeviceMobile className="text-white text-2xl hidden md:block" />
        {/* Cart icon for small screens */}
        <Link href="/cart">
          <FaCartShopping className="text-white text-2xl block md:hidden" />
        </Link>
        <span className="text-2xl font-bold text-white">Phone Shop</span>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="block md:hidden">
        <button onClick={toggleMenu} aria-label="Toggle Menu" className="text-white text-xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 items-center">
        {links.map((link) => (
          <Link
            href={link.path}
            key={link.name}
            className="text-md text-gray-300 hover:text-pink-700 border-b-2 border-transparent hover:border-pink-800 px-4 py-2 transition duration-300 ease-in-out"
          >
            {link.name}
          </Link>
        ))}
        <Link href="/cart">
          <FaCartShopping className="h-7 w-7 hover:text-pink-700" />
        </Link>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-neutral-900 bg-opacity-90 z-50 p-6 flex flex-col space-y-4 md:hidden transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full" }`}
      >
        <button
          onClick={toggleMenu}
          aria-label="Close Menu"
          className="text-white text-3xl self-end mb-4 p-2 rounded-full"
        >
          <FaTimes />
        </button>

        {links.map((link) => (
          <Link
            href={link.path}
            key={link.name}
            onClick={closeMenu}
            className="text-gray-300 hover:text-pink-700 px-4 py-2 transition duration-300 ease-in-out border-b-2 border-transparent hover:border-pink-800"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;