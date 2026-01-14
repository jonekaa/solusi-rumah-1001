'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { XCircle, Hammer, ShieldCheck, Ruler, Phone, FileText } from 'lucide-react';

const ProductModal = ({ product, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-stone-900/80 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto flex flex-col md:flex-row overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200" 
        onClick={e => e.stopPropagation()}
      >
        
        {/* Image Side */}
        <div className="md:w-1/2 relative h-64 md:h-auto min-h-[300px]">
          <Image 
            src={product.image} 
            alt={product.title} 
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Mobile Overlay Title */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-6 md:hidden">
            <h3 className="text-2xl font-bold text-white">{product.title}</h3>
          </div>
        </div>

        {/* Content Side */}
        <div className="md:w-1/2 p-8 bg-white flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="text-amber-600 font-bold text-xs uppercase tracking-widest">{product.category}</span>
              <h3 className="text-3xl font-bold text-stone-900 mt-1 hidden md:block">{product.title}</h3>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-stone-100 rounded-full transition-colors">
              <XCircle size={28} className="text-stone-400 hover:text-stone-800" />
            </button>
          </div>

          <p className="text-stone-600 mb-4 text-lg leading-relaxed">{product.shortDesc}</p>

          <div className="mb-4">
            <div>
              <h4 className="font-bold text-stone-800 mb-2 flex items-center gap-2"><Hammer size={18} className="text-amber-500"/> Brand Support</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {product.specs.brands.map(b => (
                  <span key={b} className="bg-stone-100 text-stone-600 px-3 py-1 rounded text-sm font-medium border border-stone-200">{b}</span>
                ))}
              </div>
            </div>
            {/* Dynamic Specs Rendering */}
            {Object.entries(product.specs).map(([key, value]) => {
                if (key === 'brands') return null; // Handled above

                let label = key;
                let icon = <ShieldCheck size={18} className="text-amber-500"/>;

                // Map keys to labels
                switch(key) {
                    case 'glass': label = 'Spesifikasi Kaca'; break;
                    case 'material': label = 'Material Dasar'; break;
                    case 'thickness': label = 'Ketebalan'; icon = <Ruler size={18} className="text-amber-500"/>; break;
                    case 'finish': label = 'Finishing & Warna'; icon = <Ruler size={18} className="text-amber-500"/>; break;
                    case 'colors': label = 'Pilihan Warna'; icon = <Ruler size={18} className="text-amber-500"/>; break;
                    case 'warranty': label = 'Garansi'; break;
                    default: label = key.charAt(0).toUpperCase() + key.slice(1);
                }

                return (
                    <div key={key}>
                        <h4 className="font-bold text-stone-800 flex items-center gap-2">
                            {icon} {label}
                        </h4>
                        {Array.isArray(value) ? (
                             <ul className="list-disc list-inside text-stone-600 text-sm pl-2 space-y-1 mb-4">
                                {value.map(v => <li key={v}>{v}</li>)}
                             </ul>
                        ) : (
                             <p className="text-sm text-stone-600">{value}</p>
                        )}
                    </div>
                );
            })}
          </div>

          <div className="mt-auto pt-6 border-t border-stone-100 flex gap-4">
            <a 
              href="https://wa.me/6281234567890" 
              target="_blank"
              className="flex-1 bg-amber-500 hover:bg-amber-700 text-stone-800 hover:text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors shadow-lg hover:shadow-amber-600/30"
            >
              <Phone size={18} />
              Tanya Harga
            </a>
            <button className="flex-1 border border-stone-800 hover:border-stone-300 hover:bg-stone-800 text-stone-700 hover:text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors">
              <FileText size={18} />
              Spek Teknis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;