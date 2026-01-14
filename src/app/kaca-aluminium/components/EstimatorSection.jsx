import React from 'react';
import { Calculator, CheckCircle2 } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import Estimator from '@/components/features/Estimator';

const EstimatorSection = () => {
  return (
    <section id="estimasi" className="py-24 bg-stone-100 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="lg:w-1/2">
            <SectionTitle 
              title="Hitung Budget Proyek Anda" 
              subtitle="Gunakan alat estimasi kami untuk mendapatkan gambaran biaya awal. Angka ini membantu Anda merencanakan anggaran sebelum melangkah ke tahap pengukuran detail."
            />
            <div className="space-y-8">
              <div className="flex gap-4">
                 <div className="bg-white p-3 rounded-lg shadow-sm h-fit text-amber-600"><Calculator size={24}/></div>
                 <div>
                   <h4 className="font-bold text-lg text-stone-900">Transparansi Harga</h4>
                   <p className="text-sm text-stone-600 mt-1">Harga kami kompetitif dengan standar kualitas Jawa, seringkali lebih hemat dibanding produksi lokal di luar pulau.</p>
                 </div>
              </div>
              <div className="flex gap-4">
                 <div className="bg-white p-3 rounded-lg shadow-sm h-fit text-amber-600"><CheckCircle2 size={24}/></div>
                 <div>
                   <h4 className="font-bold text-lg text-stone-900">Konsultasi Gratis</h4>
                   <p className="text-sm text-stone-600 mt-1">Hasil estimasi bisa langsung dikirim ke WhatsApp kami untuk divalidasi oleh tim teknis.</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Right Calculator */}
          <div className="lg:w-1/2 w-full">
            <Estimator />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default EstimatorSection;
