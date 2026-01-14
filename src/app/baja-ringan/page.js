import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import Projects from "@/components/sections/Projects";
import Contractor from "@/components/sections/Contractor";
import { BAJA_PRODUCTS, BAJA_PROJECTS } from "@/data";

export const metadata = {
    title: "1001 Baja Ringan & Galvalum | Supply & Konstruksi Atap",
    description: "Distributor dan aplikator baja ringan, atap galvalum, dan plafon gypsum. Kualitas material SNI dengan garansi pemasangan resmi.",
};

export default function BajaRinganPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white text-stone-900">
            <Navbar
                brandName="GALVALUM & BAJA RINGAN"
                navItems={[
                    { label: 'Proyek', href: '#proyek' },
                    { label: 'Material', href: '#produk' },
                    { label: 'Kontraktor', href: '#kontraktor' }
                ]}
                contactHref="/contact?source=baja-ringan"
            />

            <Hero
                title={
                    <>
                        Konstruksi Atap <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-amber-600">
                            Kuat & Presisi
                        </span>
                    </>
                }
                subtitle="Solusi rangka atap baja ringan berstandar SNI dan atap galvalum peredam panas. Kami hadirkan keamanan struktur untuk hunian Anda."
                imageUrl="https://images.unsplash.com/photo-1599815598692-054593898651?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                primaryBtnText="Konsultasi Atap"
                secondaryBtnText="Lihat Material"
            />

            {/* Projects Section - Displaying Portfolio */}
            <Projects
                title="Proyek Pemasangan"
                subtitle="Portofolio konstruksi atap pabrik, gudang, dan perumahan di Jawa Timur."
                items={BAJA_PROJECTS}
            />

            {/* Products Section - E-commerce Style Grid */}
            <Products
                title="Material Baja Ringan"
                subtitle="Pilih material SNI berkualitas tinggi untuk kebutuhan proyek Anda."
                items={BAJA_PRODUCTS}
            />

            <Contractor
                title="Mitra Aplikator Baja Ringan"
                description="Dapatkan dukungan material rangka atap siap pasang. Kami sediakan gambar kerja dan potongan presisi untuk mempercepat proyek perumahan Anda."
                features={[
                    {
                        title: "01. Engineering Support",
                        desc: "Perhitungan beban struktur menggunakan software bajaringan terlisensi."
                    },
                    {
                        title: "02. Custom Length",
                        desc: "Kanal C dan Reng diproduksi sesuai panjang kebutuhan proyek. Minim waste."
                    },
                    {
                        title: "03. Sertifikat Garansi",
                        desc: "Jaminan kualitas material dan pemasangan resmi dari pabrik."
                    }
                ]}
            />

            <Footer />
        </main>
    );
}
