import React from 'react';
import { ShieldCheck, Building2, Globe } from 'lucide-react';

const Logistics = () => {
  return (
    <section className="bg-stone-900 text-stone-200 py-16 border-b border-stone-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Item 1 */}
          <div className="p-6 rounded-2xl bg-stone-800/50 border border-stone-700 hover:border-amber-600/50 transition-colors group">
            <div className="bg-stone-900 inline-flex p-4 rounded-xl text-amber-500 mb-4 shadow-inner group-hover:scale-110 transition-transform">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Garansi Pekerjaan yang Berkualitas</h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              Kami memberikan garansi pekerjaan yang berkualitas yang sesuai dengan standar kami selama dalam masa pemeliharaan.
            </p>
          </div>

          {/* Item 2 */}
          <div className="p-6 rounded-2xl bg-stone-800/50 border border-stone-700 hover:border-amber-600/50 transition-colors group">
            <div className="bg-stone-900 inline-flex p-4 rounded-xl text-amber-500 mb-4 shadow-inner group-hover:scale-110 transition-transform">
              <Building2 size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Brand Resmi</h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              Menggunakan merk dan profil yang sesuai dengan penawaran dan kesepakatan.
            </p>
          </div>

          {/* Item 3 */}
          <div className="p-6 rounded-2xl bg-stone-800/50 border border-stone-700 hover:border-amber-600/50 transition-colors group">
            <div className="bg-stone-900 inline-flex p-4 rounded-xl text-amber-500 mb-4 shadow-inner group-hover:scale-110 transition-transform">
              <Globe size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Jangkauan Luas</h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              Berpengalaman dalam supply dan install hingga keluar pulau (Kalimantan, Sulawesi, Bali, Lombok, Kupang, Papua)
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Logistics;
