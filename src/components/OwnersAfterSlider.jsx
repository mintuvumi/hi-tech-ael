"use client";

import { useEffect, useState } from "react";

const slides = [
  "/images/owners/hero-8.jpg",
  "/images/owners/hero-9.jpg",
];

export default function OwnersAfterSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden bg-black">
      {slides.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-all duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            current === index
              ? "z-10 scale-100 opacity-100"
              : "z-0 scale-110 opacity-0"
          }`}
        >
          <img
            src={src}
            alt={`Hi-Tech leadership banner ${index + 1}`}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        </div>
      ))}

      <div className="relative z-20 flex h-full items-end px-6 pb-24 md:px-12 lg:px-20">
        <div className="max-w-3xl text-white">
          <p
            key={`tag-${current}`}
            className="animate-[fadeUp_900ms_ease_both] text-sm font-black uppercase tracking-[0.28em] text-red-400"
          >
            Hi-Tech Leadership
          </p>

          <h2
            key={`title-${current}`}
            className="mt-4 animate-[fadeUp_1100ms_ease_both] text-4xl font-black leading-tight md:text-6xl"
          >
            Building Trust Through Vision, Quality & Engineering Excellence
          </h2>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-500 ${
              current === index
                ? "h-3 w-14 rounded-full bg-red-500"
                : "h-3 w-3 rounded-full bg-white/60"
            }`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeUp {
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