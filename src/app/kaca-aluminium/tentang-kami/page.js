import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from 'next/image';
import { CheckCircle2, Shield, Users, Award, Building2, Layers } from 'lucide-react';

export const metadata = {
    title: "Tentang Kami | 1001 Kaca & Aluminium",
    description: "Kenali lebih dekat 1001 Kaca & Aluminium, spesialis facade, kusen aluminium, dan kaca untuk hunian mewah dan gedung komersial.",
};

const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
            <Icon className="text-blue-600" size={24} />
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

export default function TentangKamiKaca() {
    return (
        <main className="relative min-h-screen flex flex-col overflow-hidden">
            <AbstractBackground />
            <Navbar
                brandName="KACA & ALUMINIUM"
                brandHref="/kaca-aluminium"
                navItems={[
                    { label: 'Produk', href: '/kaca-aluminium#produk' },
                    // { label: 'Estimasi', href: '/kaca-aluminium#estimasi' },
                    { label: 'Kontraktor', href: '/kaca-aluminium#kontraktor' },
                    { label: 'Tentang Kami', href: '/kaca-aluminium/tentang-kami' }
                ]}
                contactHref="/contact?source=kaca-aluminium"
            />

            {/* Hero Section */}
            <section className="relative z-10 pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 transform translate-x-1/4 -z-10" />
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-bold rounded-full mb-6 uppercase tracking-wider">
                            Pakar Facade & Aluminium
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 mb-6 leading-tight">
                            Estetika Modern dalam <br />
                            <span className="text-blue-600">Setiap Detail Konstruksi</span>
                        </h1>
                        <p className="text-lg text-stone-600 leading-relaxed mb-8">
                            1001 Kaca & Aluminium adalah mitra profesional Anda dalam menghadirkan sistem bukaan dan facade berkualitas tinggi. Kami menggabungkan material aluminium premium dan teknologi pengolahan kaca terkini untuk menciptakan hunian yang elegan dan fungsional.
                        </p>
                    </div>
                </div>
            </section>

            {/* Vision Mission */}
            <section className="relative z-10 py-20 bg-stone-50/80 backdrop-blur-sm">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-stone-900 mb-4">Visi Kami</h2>
                                <p className="text-stone-600 leading-relaxed text-lg">
                                    Menjadi pusat solusi facade dan kusen aluminium terpercaya yang dikenal karena inovasi desain, presisi pemasangan, dan kepuasan pelanggan yang unggul.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-stone-900 mb-4">Misi Kami</h2>
                                <ul className="space-y-4">
                                    {[
                                        "Menghadirkan produk aluminium branded dengan standar kualitas internasional.",
                                        "Mengutamakan kerapian dan presisi dalam setiap tahap fabrikasi dan instalasi.",
                                        "Memberikan solusi desain facade yang inovatif dan efisien bagi pemilik bangunan.",
                                        "Menjamin transparansi spesifikasi bahan untuk keamanan dan kepercayaan pelanggan."
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex gap-3">
                                            <CheckCircle2 className="text-blue-600 shrink-0" size={24} />
                                            <span className="text-stone-700 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                alt="Modern Architecture"
                                className="rounded-3xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Expertise */}
            <section className="relative z-10 py-24">
                <div className="container mx-auto px-4 md:px-8 text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Keahlian Kami</h2>
                    <p className="text-stone-600 max-w-2xl mx-auto">
                        Fokus kami adalah memberikan kualitas terbaik untuk setiap jenis pekerjaan facade dan interior.
                    </p>
                </div>
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard
                            icon={Building2}
                            title="Curtain Wall"
                            description="Pemasangan facade kaca gedung bertingkat dengan sistem sealant yang kedap cuaca."
                        />
                        <FeatureCard
                            icon={Layers}
                            title="Finished Good System"
                            description="Kusen aluminium premium dengan sistem pabrikasi untuk performa kedap suara maksimal."
                        />
                        <FeatureCard
                            icon={Shield}
                            title="Kaca Tempered"
                            description="Penyediaan dan pemasangan kaca keamanan (Safety Glass) untuk railing dan kanopi."
                        />
                        <FeatureCard
                            icon={Award}
                            title="Quality Assurance"
                            description="Pengecekan kualitas ketat pada setiap sambungan silikon dan fungsi hardware."
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative z-10 py-20 bg-stone-900">
                <div className="container mx-auto px-4 md:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Wujudkan Hunian Impian Anda</h2>
                    <p className="text-stone-400 mb-10 text-lg max-w-2xl mx-auto">
                        Hubungi kami untuk mendapatkan estimasi biaya dan konsultasi desain facade tanpa biaya.
                    </p>
                    <a
                        href="/contact?source=kaca-aluminium"
                        className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-colors shadow-xl"
                    >
                        Konsultasi Gratis
                    </a>
                </div>
            </section>

            <div className="relative z-10">
                <Footer
                    brandName="KACA & ALUMINIUM"
                    brandHref="/kaca-aluminium"
                />
            </div>
        </main>
    );
}
