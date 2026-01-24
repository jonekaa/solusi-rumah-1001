'use client';

import React from 'react';
import Image from 'next/image'; // Standard Next.js Image
import { Truck, Calculator } from 'lucide-react'; // Icons
import Badge from '@/components/ui/Badge';

const Hero = ({
  title = <> Kaca Tempered & Laminated <br/> <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-600 to-amber-400">Standar Arsitektural</span></>,
  subtitle = "Spesialis Facade High-Rise & Rumah Mewah. Kami memberikan layanan yang professional dan berkualitas",
  imageUrl = "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  primaryBtnText = "Hitung Estimasi Biaya",
  secondaryBtnText = "Lihat Katalog",
  onPrimaryClick,
  onSecondaryClick
}) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handlePrimaryClick = () => {
      if (onPrimaryClick) {
          onPrimaryClick();
      } else {
          scrollToSection('estimasi');
      }
  };

  const handleSecondaryClick = () => {
      if (onSecondaryClick) {
          onSecondaryClick();
      } else {
          scrollToSection('produk');
      }
  };

  return (
    <header className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      
      {/* CRITICAL SETUP FOR BACKGROUND IMAGE:
          1. Parent div must be 'absolute inset-0' (fills the header)
          2. Image component must have the 'fill' prop (boolean)
          3. 'object-cover' ensures it crops nicely like a background
      */}
      <div className="absolute inset-0 z-0">
        <Image 
           src={imageUrl} 
           alt="Hero Background" 
           fill={true} 
           priority={true} 
           className="object-cover" 
           sizes="100vw" 
        />

        {/* Dark Overlay for text readability */}
        {/* <div className="absolute inset-0 bg-stone-900/70 bg-linear-to-r from-stone-900 via-stone-900/60 to-transparent z-10"></div> */}
        
        {/* Lighter Overlay for better image visibility */}
        <div className="absolute inset-0 bg-white/30 bg-linear-to-r from-white/80 via-white/20 to-transparent z-10"></div>
      </div>

      <div className="container mx-auto px-4 z-10 pt-20 relative">
        <div className="max-w-3xl">
          <Badge icon={Truck} text="Pengiriman Aman: Kalimantan, Sulawesi & Papua" />
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-stone-900 leading-tight mb-6 tracking-tight">
            {title}
          </h2>
          
          <p className="text-lg text-stone-600 mb-8 leading-relaxed max-w-xl border-l-4 border-amber-500 pl-6 font-medium">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={handleSecondaryClick}
              className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-amber-200 hover:shadow-amber-300 flex items-center justify-center gap-2 hover:-translate-y-1"
            >
              {/* <Calculator size={20} /> */}
              {secondaryBtnText}
            </button>
            
            {/* <button 
              onClick={handlePrimaryClick}
              className="bg-stone-100 hover:bg-stone-200 border border-stone-200 text-stone-800 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-stone-500 hover:shadow-stone-600 flex items-center justify-center gap-2 hover:-translate-y-1 shadow-sm"
            >
              <Calculator size={20} />
              {primaryBtnText}
            </button> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;