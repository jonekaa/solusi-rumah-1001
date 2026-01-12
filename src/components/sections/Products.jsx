'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import ProductModal from '@/components/ui/ProductModal';
import { PRODUCTS } from '@/data';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section id="produk" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Katalog Spesialis" 
          subtitle="Klik produk untuk melihat detail spesifikasi teknis, merek, dan garansi."
          centered 
        />
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map(product => (
            <div 
              key={product.id} 
              onClick={() => setSelectedProduct(product)}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-stone-100 overflow-hidden flex flex-col"
            >
              {/* Card Image */}
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={product.image} 
                  alt={product.title} 
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-stone-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                  {product.category}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-stone-800 mb-2 group-hover:text-amber-600 transition-colors flex items-center justify-between">
                  {product.title}
                  <ArrowRight size={20} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-amber-600"/>
                </h3>
                <p className="text-stone-600 text-sm mb-6 line-clamp-2">{product.shortDesc}</p>
                
                <div className="mt-auto pt-4 border-t border-stone-100">
                  <span className="text-xs font-bold text-stone-400 uppercase">Specs Highlight:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {product.specs.brands.slice(0, 2).map(b => (
                      <span key={b} className="text-xs bg-stone-100 text-stone-600 px-2 py-1 rounded border border-stone-200">{b}</span>
                    ))}
                    <span className="text-xs bg-amber-50 text-amber-600 px-2 py-1 rounded font-medium">+ View Details</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </section>
  );
};

export default Products;