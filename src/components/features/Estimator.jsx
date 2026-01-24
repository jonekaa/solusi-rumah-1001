'use client';

import React, { useState } from 'react';
import { Calculator, ArrowRight, Send, RefreshCcw } from 'lucide-react';

const Estimator = () => {
  const [type, setType] = useState('window');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [qty, setQty] = useState(1);
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    if (!width || !height) return;
    
    // Mock Pricing Logic (You can update these base prices later)
    // Prices are in IDR per unit estimated surface area
    let basePrice = 0;
    if (type === 'window') basePrice = 1500000; // 1.5jt per m2
    if (type === 'door') basePrice = 2500000;   // 2.5jt per m2
    if (type === 'facade') basePrice = 3500000; // 3.5jt per m2

    const area = (parseFloat(width) * parseFloat(height)) * parseInt(qty);
    const low = area * basePrice;
    const high = low * 1.2; // 20% variance/margin

    setResult({ low, high, area });
  };

  const formatIDR = (num) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 3 }).format(num);
  };

  const generateWhatsappLink = () => {
    if (!result) return "#";
    const text = `Halo Aluminium 99, saya ingin konsultasi estimasi untuk ${type === 'window' ? 'Jendela' : type === 'door' ? 'Pintu' : 'Facade'} ukuran ${width}m x ${height}m sebanyak ${qty} unit. Estimasi web sekitar ${formatIDR(result.low)}.`;
    return `https://wa.me/6287775080483?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-200">
      <div className="bg-stone-900 p-6 text-white">
        <div className="flex items-center gap-3 mb-2">
          <Calculator className="text-amber-500" size={24} />
          <h3 className="text-xl font-bold">Estimasi Budget Cepat</h3>
        </div>
        <p className="text-stone-400 text-sm">Hitung perkiraan biaya material kaca & aluminium Anda sebelum konsultasi teknis.</p>
      </div>
      
      <div className="p-6 grid gap-6">
        {/* Type Selection */}
        <div className="grid grid-cols-3 gap-2 bg-stone-100 p-1 rounded-lg">
          {['window', 'door', 'facade'].map(t => (
            <button 
              key={t}
              onClick={() => { setType(t); setResult(null); }}
              className={`py-2 text-sm font-bold rounded-md capitalize transition-all ${type === t ? 'bg-white text-amber-600 shadow-sm' : 'text-stone-500 hover:text-stone-700'}`}
            >
              {t === 'window' ? 'Jendela' : t === 'door' ? 'Pintu' : 'Facade'}
            </button>
          ))}
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-stone-500 uppercase mb-1">Lebar (m)</label>
            <input 
              type="number" 
              value={width}
              onChange={e => setWidth(e.target.value)}
              className="w-full border border-stone-300 rounded-lg p-3 focus:border-brand-primary focus:ring-2 focus:ring-amber-200 outline-none transition-all"
              placeholder="0.0" 
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-stone-500 uppercase mb-1">Tinggi (m)</label>
            <input 
              type="number" 
              value={height}
              onChange={e => setHeight(e.target.value)}
              className="w-full border border-stone-300 rounded-lg p-3 focus:border-brand-primary focus:ring-2 focus:ring-amber-200 outline-none transition-all"
              placeholder="0.0" 
            />
          </div>
        </div>
        
        <div>
            <label className="block text-xs font-bold text-stone-500 uppercase mb-1">Jumlah Unit</label>
            <input 
              type="number" 
              value={qty}
              onChange={e => setQty(e.target.value)}
              className="w-full border border-stone-300 rounded-lg p-3 focus:border-brand-primary focus:ring-2 focus:ring-amber-200 outline-none transition-all"
              placeholder="1" 
            />
        </div>

        {/* Action / Result */}
        {!result ? (
          <button 
            onClick={handleCalculate}
            disabled={!width || !height}
            className="w-full bg-stone-800 hover:bg-stone-900 disabled:opacity-50 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            Hitung Estimasi <ArrowRight size={16} />
          </button>
        ) : (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <p className="text-stone-500 text-xs font-bold uppercase mb-1">Estimasi Range Harga</p>
            <div className="text-2xl font-bold text-stone-900 mb-1">
              {formatIDR(result.low)} - {formatIDR(result.high)}
            </div>
            <p className="text-xs text-stone-500 mb-4">Total Luas: {result.area.toFixed(2)} m² (Excl. Ongkir)</p>
            
            <a 
              href={generateWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-brand-primary hover:bg-amber-700 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-600/20"
            >
              <Send size={16} />
              Konsultasi Via WA
            </a>
            <button 
              onClick={() => setResult(null)}
              className="mt-3 text-xs text-stone-400 hover:text-stone-600 underline flex items-center justify-center gap-1 w-full"
            >
              <RefreshCcw size={12}/> Hitung Ulang
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Estimator;