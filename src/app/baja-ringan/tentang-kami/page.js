import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from 'next/image';
import { CheckCircle2, Shield, Users, Award } from 'lucide-react';

export const metadata = {
    title: "Tentang Kami | 1001 Baja Ringan & Galvalum",
    description: "Kenali lebih dekat 1001 Baja Ringan & Galvalum, mitra terpercaya Anda untuk solusi rangka atap dan material konstruksi berkualitas SNI.",
};

const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
        <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-6">
            <Icon className="text-amber-600" size={24} />
        </div>
        <h3 className="text-xl font-bold text-stone-900 mb-3">{title}</h3>
        <p className="text-stone-600 leading-relaxed">{description}</p>
    </div>
);

const AbstractBackground = () => (
    <div className="absolute inset-0 z-0">
        <Image
            src="/backgrounds/blueprint.png"
            alt="Architecture Abstract"
            fill
            className="object-cover opacity-20"
            priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-stone-50/10 via-stone-50/30 to-stone-50"></div>
    </div>
);

export default function TentangKamiBaja() {
    return (
        <main className="relative min-h-screen flex flex-col overflow-hidden">
            <AbstractBackground />
            <Navbar
                brandName="GALVALUM & BAJA RINGAN"
                brandHref="/baja-ringan"
                navItems={[
                    { label: 'Proyek', href: '/baja-ringan#proyek' },
                    { label: 'Material', href: '/baja-ringan#produk' },
                    { label: 'Kontraktor', href: '/baja-ringan#kontraktor' },
                    { label: 'Tentang Kami', href: '/baja-ringan/tentang-kami' }
                ]}
                contactHref="/contact?source=baja-ringan"
            />

            {/* Hero Section */}
            <section className="relative z-10 pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-50/50 -skew-x-12 transform translate-x-1/4 -z-10" />
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 text-sm font-bold rounded-full mb-6 uppercase tracking-wider">
                            Profil Perusahaan
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 mb-6 leading-tight">
                            Membangun Pondasi <br />
                            <span className="text-amber-600">Masa Depan Indonesia</span>
                        </h1>
                        <p className="text-lg text-stone-600 leading-relaxed mb-8">
                            1001 Baja Ringan & Galvalum adalah bagian dari 1001 Solusi Rumah Group yang berfokus pada penyediaan material rangka atap berkualitas tinggi dan jasa konstruksi profesional. Kami percaya bahwa keamanan hunian dimulai dari struktur yang kuat.
                        </p>
                    </div>
                </div>
            </section>

            {/* Vision Mission */}
            <section className="relative z-10 py-20 bg-stone-50/80 backdrop-blur-sm">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1541913080221-47b239407bed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                alt="Construction"
                                className="rounded-3xl shadow-2xl"
                            />
                        </div>
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-stone-900 mb-4">Visi Kami</h2>
                                <p className="text-stone-600 leading-relaxed text-lg">
                                    Menjadi distributor dan aplikator baja ringan terdepan di Indonesia yang mengutamakan kualitas material SNI dan presisi pengerjaan untuk menjamin keamanan setiap pelanggan.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-stone-900 mb-4">Misi Kami</h2>
                                <ul className="space-y-4">
                                    {[
                                        "Menyediakan material baja ringan dan galvalum dengan standar SNI tertinggi.",
                                        "Menerapkan teknologi perhitungan struktur modern untuk hasil yang presisi.",
                                        "Membangun kemitraan yang transparan dan saling menguntungkan dengan kontraktor.",
                                        "Memberikan jaminan garansi resmi untuk setiap proyek yang dikerjakan."
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex gap-3">
                                            <CheckCircle2 className="text-amber-600 shrink-0" size={24} />
                                            <span className="text-stone-700 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Us */}
            <section className="relative z-10 py-24">
                <div className="container mx-auto px-4 md:px-8 text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Mengapa Memilih Kami?</h2>
                    <p className="text-stone-600 max-w-2xl mx-auto">
                        Kami mengombinasikan material premium dengan keahlian teknis untuk memberikan hasil terbaik bagi proyek Anda.
                    </p>
                </div>
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard
                            icon={Shield}
                            title="Material SNI"
                            description="Semua produk kami bersertifikat SNI dan diproduksi dengan standar kualitas ketat."
                        />
                        <FeatureCard
                            icon={Award}
                            title="Garansi Resmi"
                            description="Kami memberikan jaminan garansi struktur untuk setiap pemasangan baja ringan kami."
                        />
                        <FeatureCard
                            icon={Users}
                            title="Tim Ahli"
                            description="Dikerjakan oleh aplikator berpengalaman yang terlatih menggunakan software perhitungan beban."
                        />
                        <FeatureCard
                            icon={CheckCircle2}
                            title="Pengiriman Cepat"
                            description="Armada logistik kami memastikan material sampai di lokasi proyek tepat waktu."
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative z-10 py-20 bg-amber-600">
                <div className="container mx-auto px-4 md:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Siap Memulai Proyek Anda?</h2>
                    <p className="text-amber-50 mb-10 text-lg max-w-2xl mx-auto">
                        Konsultasikan kebutuhan rangka atap dan material baja ringan Anda dengan tim ahli kami secara gratis.
                    </p>
                    <a
                        href="/contact?source=baja-ringan"
                        className="inline-block bg-white text-amber-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-stone-100 transition-colors shadow-xl"
                    >
                        Hubungi Kami Sekarang
                    </a>
                </div>
            </section>

            <div className="relative z-10">
                <Footer
                    brandName="GALVALUM & BAJA RINGAN"
                    brandHref="/baja-ringan"
                />
            </div>
        </main>
    );
}
