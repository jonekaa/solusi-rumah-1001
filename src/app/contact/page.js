'use client';

import React, { Suspense } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

function ContactContent() {
    const searchParams = useSearchParams();
    const source = searchParams.get('source');
    const product = searchParams.get('product') || (source === 'baja-ringan' ? 'Baja Ringan' : 'Kaca & Aluminium');

    const [formData, setFormData] = React.useState({
        nama: '',
        telepon: '',
        lokasi: '',
        pesan: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Dynamic Navbar config based on source
    const getNavbarConfig = () => {
        if (source === 'baja-ringan') {
            return {
                brandName: "GALVALUM & BAJA RINGAN",
                brandHref: "/baja-ringan",
                navItems: [
                    { label: 'Proyek', href: '/baja-ringan#proyek' },
                    { label: 'Material', href: '/baja-ringan#produk' },
                    { label: 'Kontraktor', href: '/baja-ringan#kontraktor' }
                ],
                showContact: false // Already on contact page
            };
        }
        // Default to Kaca & Aluminium
        return {
            brandName: "KACA & ALUMINIUM",
            brandHref: "/kaca-aluminium",
            navItems: [
                { label: 'Produk', href: '/kaca-aluminium#produk' },
                { label: 'Estimasi', href: '/kaca-aluminium#estimasi' },
                { label: 'Kontraktor', href: '/kaca-aluminium#kontraktor' }
            ],
            showContact: false
        };
    };

    const navConfig = getNavbarConfig();

    const handleWhatsApp = () => {
        const text = `Halo Solusi Rumah,\n\nSaya ingin bertanya mengenai ${product} nya.\n\nNama: ${formData.nama}\nLokasi: ${formData.lokasi}\nTelepon/WA: ${formData.telepon}\n\nPesan: ${formData.pesan}`;
        const url = `https://wa.me/6287775080483?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    };

    const handleEmail = () => {
        const subject = `Solusi Rumah - Tanya ${product} ${formData.lokasi} ${formData.telepon}`;
        const body = `Halo,\n\nSaya mendapatkan informasi dari website.\n\nNama: ${formData.nama}\nLokasi: ${formData.lokasi}\nTelepon/WA: ${formData.telepon}\n\n${formData.pesan}`;

        // Gmail-specific compose URL
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=jonathansaputra03@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Fallback or secondary attempt to use mailto if user prefers default app
        window.open(gmailUrl, '_blank');
    };

    return (
        <main className="min-h-screen flex flex-col bg-stone-50">
            <Navbar
                brandName={navConfig.brandName}
                brandHref={navConfig.brandHref}
                navItems={navConfig.navItems}
                showContact={navConfig.showContact}
                isDark={true}
            />

            {/* Simple Header */}
            <div className="bg-stone-900 pt-32 pb-16 text-center px-4">
                <h1 className="text-4xl font-bold text-white mb-4">Hubungi Kami</h1>
                <p className="text-stone-400 max-w-4xl mx-auto">
                    Konsultasikan kebutuhan {source === 'baja-ringan' ? 'baja ringan dan atap' : 'kaca dan aluminium'} Anda kepada kami.
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
                                        <a
                                            href="https://maps.app.goo.gl/EZTTykcrPDtsMUB46"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-amber-800 hover:text-amber-500 transition-colors"
                                        >
                                            Raya, Jl. Joyo Agung atas, Kota Malang, Jawa Timur
                                        </a>
                                        <br />
                                        Malang | Surabaya
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-stone-100 p-3 rounded-full text-amber-600">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <p className="text-stone-600 text-md font-semibold">+62 877-7508-0483</p>
                                    <p className="text-xs text-stone-500">Respons Cepat: 08.00 - 17.00 WIB</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-stone-100 p-3 rounded-full text-amber-600">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-stone-600">jonathansaputra03@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-stone-100 p-3 rounded-full text-amber-600">
                                    <Clock size={18} />
                                </div>
                                <div>
                                    <p className="text-stone-600">Senin - Sabtu: 08.00 - 17.00</p>
                                    {/* <p className="text-stone-600">Sabtu: 08.00 - 14.00</p> */}
                                </div>
                            </div>
                        </div>

                        {/* Google Map Embed */}
                        <div className="rounded-2xl overflow-hidden shadow-lg border border-stone-200 h-80 relative bg-stone-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.594695455301!2d112.58017849999999!3d-7.937328200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e788339e488c491%3A0x3ad222face59585c!2s99%20alumunium%20kaca%20tempered!5e0!3m2!1sid!2sid!4v1769234812160!5m2!1sid!2sid"
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
                                    <input
                                        type="text"
                                        name="nama"
                                        value={formData.nama}
                                        onChange={handleChange}
                                        className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 focus:outline-none focus:border-amber-500"
                                        placeholder="Nama Anda"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-stone-500 mb-2">Telepon / WA</label>
                                    <input
                                        type="text"
                                        name="telepon"
                                        value={formData.telepon}
                                        onChange={handleChange}
                                        className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 focus:outline-none focus:border-amber-500"
                                        placeholder="081..."
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-bold text-stone-500 mb-2">Lokasi Proyek</label>
                                <input
                                    type="text"
                                    name="lokasi"
                                    value={formData.lokasi}
                                    onChange={handleChange}
                                    className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 focus:outline-none focus:border-amber-500"
                                    placeholder="Contoh: Balikpapan, Kalimantan Timur"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-bold text-stone-500 mb-2">Pesan / Kebutuhan</label>
                                <textarea
                                    name="pesan"
                                    value={formData.pesan}
                                    onChange={handleChange}
                                    className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 h-32 focus:outline-none focus:border-amber-500"
                                    placeholder="Saya butuh penawaran untuk..."
                                ></textarea>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <button
                                    type="button"
                                    onClick={handleWhatsApp}
                                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                                >
                                    <Phone size={20} />
                                    WhatsApp
                                </button>
                                <button
                                    type="button"
                                    onClick={handleEmail}
                                    className="w-full bg-stone-900 hover:bg-stone-800 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                                >
                                    <Mail size={20} />
                                    Email
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

            <Footer
                brandName={navConfig.brandName}
                brandHref={navConfig.brandHref}
            />
        </main>
    );
}

export default function Contact() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ContactContent />
        </Suspense>
    );
}