'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GROUP_BUSINESSES } from '@/data';

const Footer = ({
    brandName = "KACA & ALUMINIUM",
    brandHighlight = "1001",
    brandHref = "/"
}) => {
    const pathname = usePathname();

  return (
    <footer className="bg-stone-950 text-stone-400 py-16 border-t border-stone-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link href={brandHref} className="inline-block group">
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-500 transition-colors uppercase">
                {brandName} <span className="text-amber-600">{brandHighlight}</span>
              </h2>
            </Link>
            <p className="text-sm mb-6">Bagian dari 1001 Group. Spesialis Facade High-Rise & Rumah Mewah.</p>
            <a 
              href="https://maps.app.goo.gl/EZTTykcrPDtsMUB46" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-stone-500 hover:text-amber-500 transition-colors"
            >
              Raya, Jl. Joyo Agung atas, Kota Malang, Jawa Timur
            </a>
          </div>
          
          {/* Product Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Produk</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-amber-500">Curtain Wall</Link></li>
              <li><Link href="#" className="hover:text-amber-500">Railing Kaca</Link></li>
              <li><Link href="#" className="hover:text-amber-500">Kusen Aluminium</Link></li>
              <li><Link href="#" className="hover:text-amber-500">Pintu Lipat</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Dukungan</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-amber-500">Cara Pesan</Link></li>
              <li><Link href="#" className="hover:text-amber-500">Cek Ongkir</Link></li>
              <li><Link href="#" className="hover:text-amber-500">Garansi Produk</Link></li>
              <li><Link href="#" className="hover:text-amber-500">Download Katalog</Link></li>
            </ul>
          </div>

          {/* Group Network */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">1001 Group Network</h4>
            <ul className="space-y-2 text-sm">
              {GROUP_BUSINESSES.map(biz => {
                const isActive = pathname === biz.link;
                return (
                    <li key={biz.name} className="flex items-center justify-between">
                    <Link 
                        href={biz.link}
                        className={isActive ? "text-amber-500 font-bold" : "text-stone-600 hover:text-stone-400 cursor-pointer block w-full"}
                    >
                        {biz.name}
                    </Link>
                    </li>
                );
              })}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-stone-900 text-center text-xs flex flex-col md:flex-row justify-between items-center">
          <p suppressHydrationWarning>&copy; 2026 Aluminium dan Kaca 1001. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for High Performance</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;