import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata = {
    title: "Hubungi Kami",
    description: "Workshop Aluminium dan Kaca di Surabaya. Siap kirim ke Kalimantan & Sulawesi.",
};

export default function Contact() {
    return (
        <main className="min-h-screen flex flex-col bg-stone-50">
            <Navbar />

            {/* Simple Header */}
            <div className="bg-stone-900 pt-32 pb-16 text-center px-4">
                <h1 className="text-4xl font-bold text-white mb-4">Hubungi Kami</h1>
                <p className="text-stone-400 max-w-4xl mx-auto">
                    Konsultasikan kebutuhan kaca dan aluminium Anda kepada kami.
                </p>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Left Column: Info */}
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold text-stone-900 border-l-4 border-amber-600 pl-4">Informasi Kontak</h2>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-stone-100 p-3 rounded-full text-amber-600">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <p className="text-stone-600 leading-relaxed">
                                        Jl. Raya Rungkut Industri No. 99<br />
                                        Kawasan Industri SIER<br />
                                        Surabaya, Jawa Timur 60293
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-stone-100 p-3 rounded-full text-amber-600">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <p className="text-stone-600 text-md font-semibold">+62 812-3456-7890</p>
                                    <p className="text-xs text-stone-500">Respons Cepat: 08.00 - 17.00 WIB</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-stone-100 p-3 rounded-full text-amber-600">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-stone-600 inline-middle">proyek@aluminium99.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-stone-100 p-3 rounded-full text-amber-600">
                                    <Clock size={18} />
                                </div>
                                <div>
                                    <p className="text-stone-600">Senin - Jumat: 08.00 - 17.00</p>
                                    <p className="text-stone-600">Sabtu: 08.00 - 14.00</p>
                                </div>
                            </div>
                        </div>

                        {/* Google Map Embed */}
                        <div className="rounded-2xl overflow-hidden shadow-lg border border-stone-200 h-80 relative bg-stone-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.374057688777!2d112.7658!3d-7.3117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fae1a7b9e3d1%3A0x863725442562407e!2sSIER%20Industrial%20Estate!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div>
                        <h2 className="text-2xl font-bold text-stone-900 border-l-4 border-amber-600 pl-4 mb-8">Kirim Pesan</h2>
                        <form className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100">
                            <div className="grid grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-bold text-stone-500 mb-2">Nama</label>
                                    <input type="text" className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 focus:outline-none focus:border-amber-500" placeholder="Nama Anda" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-stone-500 mb-2">Telepon / WA</label>
                                    <input type="text" className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 focus:outline-none focus:border-amber-500" placeholder="081..." />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-bold text-stone-500 mb-2">Lokasi Proyek</label>
                                <input type="text" className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 focus:outline-none focus:border-amber-500" placeholder="Contoh: Balikpapan, Kalimantan Timur" />
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-bold text-stone-500 mb-2">Pesan / Kebutuhan</label>
                                <textarea className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 h-32 focus:outline-none focus:border-amber-500" placeholder="Saya butuh penawaran untuk..."></textarea>
                            </div>

                            <button type="button" className="w-full bg-stone-900 hover:bg-stone-800 text-white font-bold py-4 rounded-lg transition-colors">
                                Kirim Pesan
                            </button>
                        </form>
                    </div>

                </div>
            </div>

            <Footer />
        </main>
    );
}