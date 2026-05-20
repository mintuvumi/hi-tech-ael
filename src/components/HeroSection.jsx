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
      className="relative h-screen min-h-[720px] w-full overflow-hidden bg-black"
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

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        </div>
      ))}

      <div className="relative z-20 flex h-full items-center px-6 pt-28 md:px-12 lg:px-20">
        <div className="max-w-[720px] text-white">
          <div
            key={activeSlide.eyebrow}
            className="mb-5 inline-flex animate-[heroBadge_800ms_ease_both] items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] backdrop-blur-xl"
          >
            <Sparkles size={15} className="text-red-400" />
            {activeSlide.eyebrow}
          </div>

          <h1
            key={activeSlide.title}
            className="animate-[heroTitle_1000ms_ease_both] max-w-[720px] text-4xl font-black leading-[1.08] tracking-tight md:text-5xl lg:text-6xl"
          >
            {activeSlide.title}
          </h1>

          <p
            key={activeSlide.subtitle}
            className="mt-5 max-w-[590px] animate-[heroSubtitle_1200ms_ease_both] text-base font-medium leading-7 text-white/82 md:text-lg"
          >
            {activeSlide.subtitle}
          </p>

          <div
            key={`${activeSlide.primary}-${activeSlide.secondary}`}
            className="mt-9 flex animate-[heroActions_1400ms_ease_both] flex-wrap gap-4"
          >
            <a
              href="#services"
              className="group inline-flex items-center gap-3 rounded-full bg-red-600 px-7 py-3.5 text-xs font-black uppercase tracking-wide text-white shadow-[0_18px_50px_rgba(220,38,38,0.38)] transition-all duration-300 hover:scale-105 hover:bg-red-700"
            >
              {activeSlide.primary}
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-xs font-black uppercase tracking-wide text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-black"
            >
              {activeSlide.secondary}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-9 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-500 ${
              current === index
                ? "h-2.5 w-12 rounded-full bg-red-500"
                : "h-2.5 w-2.5 rounded-full bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes heroBadge {
          0% {
            opacity: 0;
            transform: translateY(18px) scale(0.96);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes heroTitle {
          0% {
            opacity: 0;
            transform: translateY(28px);
            letter-spacing: -0.08em;
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            letter-spacing: -0.025em;
            filter: blur(0);
          }
        }

        @keyframes heroSubtitle {
          0% {
            opacity: 0;
            transform: translateY(22px);
            filter: blur(7px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes heroActions {
          0% {
            opacity: 0;
            transform: translateY(24px) scale(0.97);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}