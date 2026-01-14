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
        <main className="min-h-screen bg-stone-950 text-white font-sans selection:bg-amber-500 selection:text-black">

            {/* Corporate Navbar (Simplified) */}
            <nav className="absolute top-0 left-0 w-full z-50 py-8 px-4 md:px-12 flex justify-between items-center">
                <div className="text-2xl font-bold tracking-widest">
                    1001 <span className="text-amber-600">SOLUSI RUMAH</span>
                </div>
            </nav>

            {/* Hero Portal */}
            <header className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                        alt="Architecture Abstract"
                        fill
                        className="object-cover opacity-40"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-stone-950/20 via-stone-950/80 to-stone-950"></div>
                </div>

                <div className="relative z-10 text-center max-w-4xl px-4 mt-10">
                    <span className="inline-block py-1 px-3 rounded-full border border-amber-600/50 text-amber-500 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
                        1001 Solusi Rumah
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Membangun Ekosistem<br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-stone-500">Konstruksi Modern</span>
                    </h1>
                    <p className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto leading-relaxed">
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
                                className={`group relative h-80 rounded-3xl overflow-hidden border border-stone-800 hover:border-amber-600/50 transition-all duration-500 ${biz.status !== 'Active' ? 'cursor-default' : 'cursor-pointer'}`}
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
            <section className="py-24 border-t border-stone-900 bg-stone-950">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="md:w-1/3">
                            <h2 className="text-4xl font-bold mb-6">Kenapa <span className="text-amber-600">1001 Group?</span></h2>
                            <p className="text-stone-400 leading-relaxed">
                                Kami bukan sekadar kontraktor, kami adalah mitra strategis. Dengan integrasi hulu ke hilir, kami menjamin kualitas material dan ketepatan waktu yang sulit ditandingi pemain tunggal.
                            </p>
                        </div>
                        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-8">
                            <div className="bg-stone-900/50 p-6 rounded-2xl border border-stone-800">
                                <Building2 className="text-amber-600 mb-4" size={32} />
                                <h4 className="text-xl font-bold mb-2">Integrasi Penuh</h4>
                                <p className="text-stone-500 text-sm">Dari suplai kaca mentah hingga pemasangan di lantai 50.</p>
                            </div>
                            <div className="bg-stone-900/50 p-6 rounded-2xl border border-stone-800">
                                <Globe className="text-amber-600 mb-4" size={32} />
                                <h4 className="text-xl font-bold mb-2">Logistik Nasional</h4>
                                <p className="text-stone-500 text-sm">Jaringan pengiriman khusus barang pecah belah ke seluruh pulau.</p>
                            </div>
                            <div className="bg-stone-900/50 p-6 rounded-2xl border border-stone-800">
                                <ShieldCheck className="text-amber-600 mb-4" size={32} />
                                <h4 className="text-xl font-bold mb-2">Garansi Korporat</h4>
                                <p className="text-stone-500 text-sm">Jaminan finansial yang lebih kuat dibanding kontraktor perorangan.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Simple Footer */}
            <footer className="py-12 text-center text-stone-600 text-sm border-t border-stone-900">
                <p>&copy; {new Date().getFullYear()} 1001 Solusi Rumah Group. All Rights Reserved.</p>
                <p className="mt-2">Surabaya - Malang</p>
            </footer>

        </main>
    );
}