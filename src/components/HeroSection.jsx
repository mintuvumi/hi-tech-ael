"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const heroSlides = [
  {
    eyebrow: "Industrial Automation",
    title: "Smart Engineering Solutions for Modern Industries",
    subtitle:
      "Reliable electrical, automation, switchgear, transformer and substation solutions for factories, buildings and industries.",
    image: "/images/hero/hero-1.jpg",
    primary: "Explore Solutions",
    secondary: "Contact Us",
  },

  {
    eyebrow: "Power Distribution",
    title: "Reliable Power Systems Built for Performance",
    subtitle:
      "From HT/LT switchgear to transformer installation, we deliver safe and efficient power distribution systems.",
    image: "/images/hero/hero-2.webp",
    primary: "View Services",
    secondary: "Our Projects",
  },

  {
    eyebrow: "Engineering Excellence",
    title: "Automation & Electrical Support You Can Trust",
    subtitle:
      "Professional design, installation, testing, commissioning and after-sales support for industrial growth.",
    image: "/images/hero/hero-3.jpg",
    primary: "Get Started",
    secondary: "Learn More",
  },

  {
    eyebrow: "Advanced Electrical Systems",
    title: "High Quality Switchgear & Transformer Solutions",
    subtitle:
      "Safe, modern and energy-efficient electrical systems for industries, commercial buildings and factories.",
    image: "/images/hero/hero-4.jpg",
    primary: "Explore Products",
    secondary: "View Gallery",
  },

  {
    eyebrow: "Trusted Engineering Partner",
    title: "Professional Automation & Engineering Services",
    subtitle:
      "We deliver complete automation, electrical and engineering support with modern technologies and expert teams.",
    image: "/images/hero/hero-5.jpg",
    primary: "Our Services",
    secondary: "Contact Team",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen min-h-[850px] w-full overflow-hidden bg-black"
    >
      {/* SLIDES */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-all duration-[2200ms] ease-in-out ${
            current === index
              ? "scale-100 opacity-100"
              : "scale-110 opacity-0"
          }`}
        >
          {/* BACKGROUND IMAGE */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/15" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        </div>
      ))}

      {/* CONTENT */}
      <div className="relative z-20 flex h-full items-center px-6 pt-28 md:px-12 lg:px-20">
        <div className="max-w-[900px] text-white">
          {/* TOP BADGE */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-xl">
            <Sparkles size={16} className="text-red-400" />

            {heroSlides[current].eyebrow}
          </div>

          {/* TITLE */}
          <h1 className="max-w-[900px] text-5xl font-black leading-tight tracking-tight md:text-7xl md:leading-[1.02]">
            {heroSlides[current].title}
          </h1>

          {/* SUBTITLE */}
          <p className="mt-7 max-w-[700px] text-lg leading-8 text-white/85 md:text-xl">
            {heroSlides[current].subtitle}
          </p>

          {/* BUTTONS */}
          <div className="mt-12 flex flex-wrap gap-5">
            <a
              href="#services"
              className="group inline-flex items-center gap-3 rounded-full bg-red-600 px-9 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-[0_20px_60px_rgba(220,38,38,0.45)] transition-all duration-300 hover:scale-105 hover:bg-red-700"
            >
              {heroSlides[current].primary}

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/30 bg-white/10 px-9 py-4 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-black"
            >
              {heroSlides[current].secondary}
            </a>
          </div>
        </div>
      </div>

      {/* DOTS */}
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

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-40 bg-gradient-to-t from-[#f7f7f7] via-[#f7f7f780] to-transparent" />
    </section>
  );
}