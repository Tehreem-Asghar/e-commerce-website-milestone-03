'use client'
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';

const HeroSection: React.FC = () => {

  const images: string[] = [
    
    '/images/heroSec01.jpg',
    '/images/heroSec02.webp', 
    '/images/heroSec03.webp',  
    '/images/heroSec04.jpg',  
  ];
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      controls.start({ opacity: 0 }).then(() => {
        controls.start({ opacity: 1 });
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length, controls]);

  return (
  
    <motion.div
      className={`relative h-screen flex flex-col items-center justify-center text-white font-bold bg-cover bg-center transition-all duration-500 gap-7`}
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
      animate={controls}
      initial={{ opacity: 1 }}
    >
<div className="absolute inset-0 bg-black opacity-40"></div> {/* Slightly lighter overlay */}
      <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-bold text-center shadow-2xl px-4 py-2 rounded-lg bg-opacity-70 bg-black">
        Welcome to the Phone Store
      </h1>
      <h2 className="relative text-2xl text-center shadow-2xl px-4 py-2 rounded-lg bg-opacity-70 bg-black">
        Discover the Latest Smartphones and Exclusive Deals!
      </h2>
      <p className="relative text-xl text-center shadow-2xl px-4 py-2 rounded-lg bg-opacity-70 bg-black mt-4">
        Explore our collection of premium and budget-friendly options tailored just for you.
      </p>
      <Link href="/shop"  className="relative mt-6 px-6 py-2 text-lg bg-pink-700 text-white rounded-3xl shadow-lg hover:bg-pink-800 transition-colors w-1/2 text-center"> 
      <button>
        Shop Now
      </button>
      </Link>
      
    </motion.div>

  );
};

export default HeroSection;
