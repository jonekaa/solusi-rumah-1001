'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';
import { GROUP_BUSINESSES } from '@/data';

const Navbar = ({
  brandName = "KACA & ALUMINIUM",
  brandHighlight = "1001",
  brandHref = "/",
  navItems = [
    { label: 'Produk', href: '#produk' },
    { label: 'Estimasi', href: '#estimasi' },
    { label: 'Kontraktor', href: '#kontraktor' }
  ],
  showContact = true,
  contactHref = "/contact",
  isDark = false
}) => {
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isDark ? 'bg-stone-900 shadow-lg py-4' : (isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6')}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">

        {/* Brand - Link to Home (or Group Home if desired, but usually root) */}
        <Link href={brandHref} className="flex flex-col cursor-pointer group">
          <h1 className={`text-2xl font-extrabold tracking-tight flex items-center gap-2 ${isDark ? 'text-white' : 'text-stone-900'}`}>
            {brandName} <span className="text-amber-600 font-bold">{brandHighlight}</span>
          </h1>
          <p className={`text-[10px] font-bold tracking-[0.2em] uppercase ${isDark ? 'text-stone-400' : (isScrolled ? 'text-stone-700' : 'text-stone-900')}`}>
            Member of 1001 Solusi Rumah Group
          </p>
        </Link>

        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center space-x-8 font-medium ${isDark ? 'text-white' : (isScrolled ? 'text-stone-700' : 'text-stone-800')}`}>
          {/* Local Page Links */}
          {navItems.map((item) => (
            <Link 
              key={item.label}
              href={item.href}
              className="hover:text-amber-500 transition-colors text-sm uppercase tracking-wide font-bold"
            >
              {item.label}
            </Link>
          ))}

          {/* 1001 Group Link with Dropdown */}
          <div className="relative group/dropdown">
            <Link 
              href="/"
              className={`hover:text-amber-500 transition-colors text-sm uppercase tracking-wide font-bold pl-6 flex items-center gap-1 border-l ${isDark ? 'border-stone-700' : 'border-stone-400/50'}`}
            >
              1001 Group
            </Link>
            
            {/* Dropdown Menu */}
            <div className="absolute right-0 top-full pt-4 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300 w-64 transform translate-y-2 group-hover/dropdown:translate-y-0">
                <div className="bg-white rounded-xl shadow-xl border border-stone-100 overflow-hidden py-2">
                    {GROUP_BUSINESSES.map((biz) => (
                        <Link 
                            key={biz.id}
                            href={biz.link}
                            className="block px-6 py-3 hover:bg-amber-50 group/item"
                        >
                            <p className="text-stone-800 font-bold text-sm group-hover/item:text-amber-600 transition-colors">{biz.name}</p>
                            <p className="text-xs text-stone-500 mt-0.5">{biz.tagline}</p>
                        </Link>
                    ))}
                </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        {showContact && (
          <Link
            href={contactHref}
            className="hidden md:flex bg-amber-600 hover:bg-amber-700 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-amber-900/20 items-center gap-2 hover:scale-105"
          >
            <Phone size={16} />
            Kontak
          </Link>
        )}

        {/* Mobile Toggle */}
        <button className="text-amber-600 md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-4 flex flex-col space-y-4 md:hidden border-t border-stone-100">
            {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-left px-4 py-3 hover:bg-stone-50 rounded-lg text-stone-800 font-bold uppercase tracking-wide border-b border-stone-100 last:border-0"
            >
              {item.label}
            </Link>
          ))}

          {/* Group Link in Mobile */}
          <Link 
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-left px-4 py-3 bg-stone-100 rounded-lg text-stone-900 font-bold uppercase tracking-wide"
          >
            1001 Group
          </Link>

          {showContact && (
            <Link 
              href={contactHref} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-left px-4 py-3 bg-amber-50 text-amber-700 font-bold uppercase rounded-lg"
            >
              Hubungi Kami
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;