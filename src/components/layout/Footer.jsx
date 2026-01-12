import React from 'react';
import { BUSINESS_NETWORK } from '@/data';

const Footer = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 py-16 border-t border-stone-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-4">KACA & ALUMINIUM <span className="text-amber-600">1001</span></h2>
            <p className="text-sm mb-6">Bagian dari 101 Group. Spesialis material konstruksi modern dengan jangkauan seluruh Indonesia.</p>
            <p className="text-xs text-stone-500">Jl. Industri No. 45, Surabaya, Jawa Timur</p>
          </div>
          
          {/* Product Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Produk</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-amber-500">Curtain Wall</a></li>
              <li><a href="#" className="hover:text-amber-500">Railing Kaca</a></li>
              <li><a href="#" className="hover:text-amber-500">Kusen Aluminium</a></li>
              <li><a href="#" className="hover:text-amber-500">Pintu Lipat</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Dukungan</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-amber-500">Cara Pesan</a></li>
              <li><a href="#" className="hover:text-amber-500">Cek Ongkir</a></li>
              <li><a href="#" className="hover:text-amber-500">Garansi Produk</a></li>
              <li><a href="#" className="hover:text-amber-500">Download Katalog</a></li>
            </ul>
          </div>

          {/* Group Network */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">1001 Group Network</h4>
            <ul className="space-y-2 text-sm">
              {BUSINESS_NETWORK.map(biz => (
                <li key={biz.name} className="flex items-center justify-between">
                  <span className={biz.active ? "text-amber-500 font-bold" : "text-stone-600 hover:text-stone-400 cursor-pointer"}>
                    {biz.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-stone-900 text-center text-xs flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Aluminium dan Kaca 99. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for High Performance</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;