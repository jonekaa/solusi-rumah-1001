import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Logistics from "@/components/sections/Logistics";
import Products from "@/components/sections/Products";
import EstimatorSection from "@/components/sections/EstimatorSection";
import Contractor from "@/components/sections/Contractor";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <Hero />

      <Logistics />

      <Products />

      <EstimatorSection />

      <Contractor />

      <Footer />
    </main>
  );
}