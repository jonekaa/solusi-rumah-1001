'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">

        {/* Brand - Link to Home */}
        <Link href="/" className="flex flex-col cursor-pointer group">
          <h1 className={`text-2xl font-bold tracking-tight flex items-center gap-2 ${isScrolled ? 'text-stone-900' : 'text-stone-900 md:text-white'}`}>
            KACA & ALUMINIUM <span className="text-amber-600">1001</span>
          </h1>
          <p className={`text-[10px] tracking-[0.2em] uppercase ${isScrolled ? 'text-stone-500' : 'text-stone-400 md:text-stone-300'}`}>
            Member of 1001 Solusi Rumah Group
          </p>
        </Link>

        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center space-x-8 font-medium ${isScrolled ? 'text-stone-700' : 'text-white'}`}>
          {/* Local Page Links */}
          {['Produk', 'Estimasi', 'Kontraktor'].map((item) => (
            <Link 
              key={item}
              href={`/#${item.toLowerCase()}`}
              className="hover:text-amber-500 transition-colors text-sm uppercase tracking-wide font-bold"
            >
              {item}
            </Link>
          ))}

          {/* 1001 Group Link (New Page) */}
          <Link 
            href="/1001-group"
            className="hover:text-amber-500 transition-colors text-sm uppercase tracking-wide font-bold border-l border-stone-400/50 pl-6"
          >
            1001 Group
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="hidden md:flex bg-brand-primary hover:bg-amber-700 text-amber-300 px-5 py-2 rounded-lg font-bold text-sm transition-all shadow-lg shadow-amber-600/30 items-center gap-2"
        >
          <Phone size={16} />
          Kontak
        </Link>

        {/* Mobile Toggle */}
        <button className="md:hidden text-amber-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-4 flex flex-col space-y-4 md:hidden border-t border-stone-100">
            {['Produk', 'Estimasi', 'Kontraktor'].map((item) => (
            <Link
              key={item}
              href={`/#${item.toLowerCase()}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-left px-4 py-3 hover:bg-stone-50 rounded-lg text-stone-800 font-bold uppercase tracking-wide border-b border-stone-100 last:border-0"
            >
              {item}
            </Link>
          ))}

          {/* Group Link in Mobile */}
          <Link 
            href="/1001-group"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-left px-4 py-3 bg-stone-100 rounded-lg text-stone-900 font-bold uppercase tracking-wide"
          >
            1001 Group
          </Link>

          <Link 
            href="/contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-left px-4 py-3 bg-amber-50 text-amber-700 font-bold uppercase rounded-lg"
          >
            Hubungi Kami
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;