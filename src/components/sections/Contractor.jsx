import React from 'react';
import Badge from '@/components/ui/Badge';

const Contractor = ({
    title = "Bangun Lebih Cepat, Untung Lebih Besar",
    description = "Kami mensupport kontraktor daerah dengan material \"Semi-Finished\". Kami potong dan rakit di pabrik Surabaya, tim Anda tinggal pasang di lokasi. Hemat alat, hemat waktu, kurangi waste material.",
    features = [
        {
            title: "01. Shop Drawing",
            desc: "Bantuan gambar teknis gratis untuk persetujuan owner proyek agar spesifikasi akurat."
        },
        {
            title: "02. Labeling",
            desc: "Setiap batang material kami kode sesuai lokasi pasang (Lantai 1, Kamar A, dll). Anti bingung."
        },
        {
            title: "03. Special Discount",
            desc: "Harga khusus B2B untuk kontraktor repeat order dengan volume tertentu."
        }
    ]
}) => {
  return (
    <section id="kontraktor" className="py-20 bg-stone-900 text-white relative overflow-hidden">
      {/* Pattern Background */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{backgroundImage: 'radial-gradient(#fbbf24 1px, transparent 1px)', backgroundSize: '32px 32px'}}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="flex justify-center">
            <Badge text="Area Khusus Kontraktor" />
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-8">{title}</h2>
        <p className="text-stone-400 max-w-2xl mx-auto mb-12 text-lg">
          {description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
           {features.map((feature, idx) => (
             <div key={idx} className="bg-stone-800 p-8 rounded-xl border border-stone-700 hover:bg-stone-750 transition-colors text-left">
               <h4 className="text-xl font-bold text-amber-500 mb-2">{feature.title}</h4>
               <p className="text-stone-400 text-sm">{feature.desc}</p>
             </div>
           ))}
        </div>

        {/* Call to Action for Contractors */}
        <div className="mt-12">
            <a 
                href="https://wa.me/6287775080483?text=Halo%20saya%20Kontraktor%20ingin%20kerjasama"
                target="_blank"
                className="inline-block bg-white text-stone-900 hover:bg-stone-200 font-bold py-4 px-8 rounded-lg transition-colors"
            >
                Gabung Jadi Mitra
            </a>
        </div>
      </div>
    </section>
  );
};

export default Contractor;