"use client";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bottom-0 bg-black text-gray-200 py-8 flex flex-col justify-center items-center">
    <Link href="#top" className="border-b border-white pb-2">
      Back to Top
    </Link>

      <div className="mb-4 md:mb-0 mt-4">
        <ul className="flex flex-wrap justify-center md:justify-start gap-6">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="hover:underline">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
          <li>
       
              Privacy Policy
           
          </li>
        </ul>
      </div>

      <div className="flex space-x-4  mt-5">
        <h3 className="font-semibold text-white">Follow Us</h3>
        <Link href="https://www.linkedin.com/in/tehreem-asghar-1003772b7/" target="_blank"  className="text-blue-500 hover:text-blue-600 mt-1" aria-label="LinkedIn ">
          <FaLinkedin />
        </Link>
        <Link href="https://x.com/Tehreem1794730?t=IdwZfgI0lQAsXiPe7KfSJQ&s=08" target="_blank"  className="text-blue-400 hover:text-blue-500 mt-1" aria-label="Twitter">
          <FaXTwitter />
        </Link>
        <Link href="https://www.instagram.com/tehreem412?igsh=eGs4OWtsZ3Fwcnc2" target="_blank"  className="text-pink-600 hover:text-pink-700 mt-1" aria-label="Instagram">
          <FaInstagramSquare />
        </Link>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Phone Shop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export {Footer};