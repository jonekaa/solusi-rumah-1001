'use client';

import React from 'react';
import Image from 'next/image'; // Standard Next.js Image
import { Truck, Calculator } from 'lucide-react'; // Icons
import Badge from '@/components/ui/Badge';

const Hero = ({
  title = <>Teknologi Kaca Modern <br/> <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-200 to-amber-500">Standar Arsitektural</span></>,
  subtitle = "Spesialis Facade High-Rise & Rumah Mewah. Kami memberikan presisi pabrikasi Jawa dengan keamanan logistik antar-pulau.",
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
           fill={true} // Explicitly set to true to avoid confusion
           priority={true} // Loads immediately
           className="object-cover" 
           sizes="100vw" // Tells browser it takes up full width
        />
        
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-stone-900/70 bg-linear-to-r from-stone-900 via-stone-900/60 to-transparent z-10"></div>
      </div>

      <div className="container mx-auto px-4 z-10 pt-20 relative">
        <div className="max-w-3xl">
          <Badge icon={Truck} text="Pengiriman Aman: Sumatera, Kalimantan, Sulawesi & Papua" />
          
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            {title}
          </h2>
          
          <p className="text-lg text-stone-300 mb-8 leading-relaxed max-w-xl border-l-4 border-brand-primary pl-6">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={handlePrimaryClick}
              className="bg-brand-primary hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-amber-600/40 flex items-center justify-center gap-2"
            >
              <Calculator size={20} />
              {primaryBtnText}
            </button>
            <button 
              onClick={handleSecondaryClick}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center"
            >
              {secondaryBtnText}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;