import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

export default async function CompanyPage({ params }) {
  const { slug } = await params;

  return (
    <>
      <Navbar />

      <HeroSection />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-red-600">
            Company
          </p>

          <h1 className="mt-4 text-5xl font-black text-neutral-950">
            {slug.replaceAll("-", " ")}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
            Premium corporate experience for this company page.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}