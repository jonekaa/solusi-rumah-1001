'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';
import { GROUP_BUSINESSES } from '@/data';

const Navbar = ({
  brandName = "KACA & ALUMINIUM",
  brandHighlight = "1001",
  navItems = [
    { label: 'Produk', href: '#produk' },
    { label: 'Estimasi', href: '#estimasi' },
    { label: 'Kontraktor', href: '#kontraktor' }
  ],
  showContact = true,
  contactHref = "/contact"
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">

        {/* Brand - Link to Home (or Group Home if desired, but usually root) */}
        <Link href="/" className="flex flex-col cursor-pointer group">
          <h1 className={`text-2xl font-bold tracking-tight flex items-center gap-2 ${isScrolled ? 'text-stone-900' : 'text-stone-900 md:text-white'}`}>
            {brandName} <span className="text-amber-600">{brandHighlight}</span>
          </h1>
          <p className={`text-[10px] tracking-[0.2em] uppercase ${isScrolled ? 'text-stone-500' : 'text-stone-400 md:text-stone-300'}`}>
            Member of 1001 Solusi Rumah Group
          </p>
        </Link>

        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center space-x-8 font-medium ${isScrolled ? 'text-stone-700' : 'text-white'}`}>
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
              className="hover:text-amber-500 transition-colors text-sm uppercase tracking-wide font-bold border-l border-stone-400/50 pl-6 flex items-center gap-1"
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
            className="hidden md:flex bg-brand-primary hover:bg-amber-700 text-amber-300 px-5 py-2 rounded-lg font-bold text-sm transition-all shadow-lg shadow-amber-600/30 items-center gap-2"
          >
            <Phone size={16} />
            Kontak
          </Link>
        )}

        {/* Mobile Toggle */}
        <button className="md:hidden text-amber-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
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