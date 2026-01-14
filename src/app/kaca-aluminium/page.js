
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Logistics from "./components/Logistics";
import Products from "@/components/sections/Products";
import EstimatorSection from "./components/EstimatorSection";
import Contractor from "@/components/sections/Contractor";

export default function KacaPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar
                navItems={[
                    { label: 'Produk', href: '#produk' },
                    { label: 'Estimasi', href: '#estimasi' },
                    { label: 'Kontraktor', href: '#kontraktor' }
                ]}
            />

            <Hero />

            <Logistics />

            <Products />

            <EstimatorSection />

            <Contractor />

            <Footer />
        </main>
    );
}
