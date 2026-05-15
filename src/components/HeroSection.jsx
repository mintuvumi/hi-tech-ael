"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const heroSlides = [
  {
    type: "image",
    eyebrow: "Industrial Automation",
    title: "Smart Engineering Solutions for Modern Industries",
    subtitle:
      "Reliable electrical, automation, switchgear, transformer and substation solutions for factories, buildings and industries.",
    src: "/images/hero/hero-1.jpg",
    primary: "Explore Solutions",
    secondary: "Contact Us",
  },
  {
    type: "image",
    eyebrow: "Power Distribution",
    title: "Reliable Power Systems Built for Performance",
    subtitle:
      "From HT/LT switchgear to transformer installation, we deliver safe and efficient power distribution systems.",
    src: "/images/hero/hero-2.webp",
    primary: "View Services",
    secondary: "Our Projects",
  },
  {
    type: "image",
    eyebrow: "Engineering Excellence",
    title: "Automation & Electrical Support You Can Trust",
    subtitle:
      "Professional design, installation, testing, commissioning and after-sales support for industrial growth.",
    src: "/images/hero/hero-3.jpg",
    primary: "Get Started",
    secondary: "Learn More",
  },
  {
    type: "image",
    eyebrow: "Advanced Electrical Systems",
    title: "High Quality Switchgear & Transformer Solutions",
    subtitle:
      "Safe, modern and energy-efficient electrical systems for industries, commercial buildings and factories.",
    src: "/images/hero/hero-4.jpg",
    primary: "Explore Products",
    secondary: "View Gallery",
  },

  // পরে video add করতে চাইলে এভাবে add করবেন:
  // {
  //   type: "video",
  //   eyebrow: "Corporate Video",
  //   title: "Engineering Excellence in Motion",
  //   subtitle: "Professional automation and electrical engineering support.",
  //   src: "/videos/hero-video.mp4",
  //   primary: "Our Services",
  //   secondary: "Contact Team",
  // },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const activeSlide = heroSlides[current];

  return (
    <section
      id="home"
      className="relative h-screen min-h-[760px] w-full overflow-hidden bg-black"
    >
      {heroSlides.map((slide, index) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-all duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            current === index
              ? "z-10 scale-100 opacity-100"
              : "z-0 scale-105 opacity-0"
          }`}
        >
          {slide.type === "video" ? (
            <video
              src={slide.src}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
          ) : (
            <img
              src={slide.src}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/15" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      ))}

      <div className="relative z-20 flex h-full items-center px-6 pt-28 md:px-12 lg:px-20">
        <div className="max-w-[900px] text-white">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-xl">
            <Sparkles size={16} className="text-red-400" />
            {activeSlide.eyebrow}
          </div>

          <h1
            key={activeSlide.title}
            className="animate-[heroText_900ms_ease_both] max-w-[900px] text-5xl font-black leading-tight tracking-tight md:text-7xl md:leading-[1.02]"
          >
            {activeSlide.title}
          </h1>

          <p
            key={activeSlide.subtitle}
            className="mt-7 max-w-[700px] animate-[heroText_1100ms_ease_both] text-lg leading-8 text-white/85 md:text-xl"
          >
            {activeSlide.subtitle}
          </p>

          <div className="mt-12 flex flex-wrap gap-5">
            <a
              href="#services"
              className="group inline-flex items-center gap-3 rounded-full bg-red-600 px-9 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-[0_20px_60px_rgba(220,38,38,0.45)] transition-all duration-300 hover:scale-105 hover:bg-red-700"
            >
              {activeSlide.primary}
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/30 bg-white/10 px-9 py-4 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-black"
            >
              {activeSlide.secondary}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-500 ${
              current === index
                ? "h-3 w-14 rounded-full bg-red-500"
                : "h-3 w-3 rounded-full bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes heroText {
          0% {
            opacity: 0;
            transform: translateY(35px);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
      `}</style>
    </section>
  );
}