import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Building2, Globe, ShieldCheck } from 'lucide-react';
import { GROUP_BUSINESSES } from '@/data';

export const metadata = {
  title: "1001 Solusi Rumah | Integrated Construction Solutions",
  description: "Induk perusahaan spesialis material konstruksi: Aluminium, Kaca, Maintenance, dan Hunian Mewah.",
};

export default function GroupLanding() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-amber-500 selection:text-white">

      {/* Corporate Navbar (Simplified) */}
      <nav className="absolute top-0 left-0 w-full z-50 py-8 px-4 md:px-12 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-widest">
          1001 <span className="text-amber-600">SOLUSI RUMAH</span>
        </div>
      </nav>

      {/* Hero Portal */}
      <header className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Architecture Abstract"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-stone-50/0 via-stone-50/50 to-stone-50"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl px-4 mt-16 md:mt-0">
          <span className="inline-block py-2 px-6 rounded-full border border-stone-950 bg-white/40 backdrop-blur-md text-stone-600 text-sm font-bold tracking-[0.2em] uppercase mb-8 shadow-xl">
            Build Your Dream
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-stone-800 leading-[1.1]">
            Membangun Ekosistem<br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-600 to-amber-500">Konstruksi Modern</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-600 max-w-2xl mx-auto leading-relaxed font-light">
            1001 Group menghadirkan solusi terintegrasi mulai dari suplai material, fabrikasi presisi, hingga perawatan gedung bertingkat.
          </p>
        </div>
      </header>

      {/* Business Units Grid */}
      <section className="py-20 px-4 md:px-12 -mt-20 relative z-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GROUP_BUSINESSES.map((biz) => (
              <Link
                href={biz.link}
                key={biz.id}
                className={`group relative h-[320px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${biz.status !== 'Active' ? 'cursor-default grayscale opacity-80 hover:grayscale-0 hover:opacity-100' : 'cursor-pointer'}`}
              >
                {/* Image Background */}
                <Image
                  src={biz.image}
                  alt={biz.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <div className="flex justify-between items-end mb-2">
                    <div>
                      <div className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-2">
                        {biz.tagline}
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                        {biz.name}
                      </h3>
                    </div>
                    {biz.status === 'Active' ? (
                      <div className="bg-white text-black p-3 rounded-full transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                        <ArrowRight size={20} />
                      </div>
                    ) : (
                      <span className="text-xs text-stone-500 border border-stone-700 px-2 py-1 rounded bg-black/50">
                        {biz.status}
                      </span>
                    )}
                  </div>
                  <p className="text-stone-400 text-sm line-clamp-2 group-hover:text-stone-300 transition-colors">
                    {biz.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 border-t border-stone-200 bg-stone-100/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/3">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-stone-900">Kenapa <span className="text-amber-600 block">1001 Group?</span></h2>
              <p className="text-stone-500 leading-relaxed text-lg pb-8 md:pb-0">
                Kami bukan sekadar kontraktor, kami adalah mitra strategis. Dengan integrasi hulu ke hilir, kami menjamin kualitas material dan ketepatan waktu yang sulit ditandingi pemain tunggal.
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="bg-amber-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-amber-600">
                  <Building2 size={28} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-stone-900">Integrasi Penuh</h4>
                <p className="text-stone-500 text-sm leading-relaxed">Dari suplai kaca mentah hingga pemasangan di lantai 50.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="bg-amber-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-amber-600">
                  <Globe size={28} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-stone-900">Logistik Nasional</h4>
                <p className="text-stone-500 text-sm leading-relaxed">Jaringan pengiriman khusus barang pecah belah ke seluruh pulau.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="bg-amber-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-amber-600">
                  <ShieldCheck size={28} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-stone-900">Garansi Korporat</h4>
                <p className="text-stone-500 text-sm leading-relaxed">Jaminan finansial yang lebih kuat dibanding kontraktor perorangan.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-12 text-center text-stone-500 text-sm border-t border-stone-200 bg-stone-100">
        <p>&copy; {new Date().getFullYear()} 1001 Solusi Rumah Group. All Rights Reserved.</p>
        <p className="mt-2">Surabaya - Malang</p>
      </footer>

    </main>
  );
}