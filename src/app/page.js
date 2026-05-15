import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProductSection from "../components/ProductSection";
import ServiceSection from "../components/ServiceSection";
import WhyChooseUs from "../components/WhyChooseUs";
import ProjectGallery from "../components/ProjectGallery";
import StatsSection from "../components/StatsSection";
import OwnersSection from "../components/OwnersSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#f7f7f7] text-neutral-900">
      <Navbar />

      <HeroSection />

      <ProductSection />

      <ServiceSection />

      <WhyChooseUs />

      <ProjectGallery />

      <StatsSection />

      <OwnersSection />

      <CTASection />

      <Footer />
    </main>
  );
}