"use client";

import { useState } from "react";
import { Settings } from "lucide-react";
import { serviceData } from "../data/siteData";
import DetailCard from "./DetailCard";

export default function ServiceSection() {
  const [openService, setOpenService] = useState(0);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#111827] py-24 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.18),transparent_35%)]" />

      <div className="relative mx-auto max-w-[1320px] px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 font-bold uppercase tracking-[0.28em] text-red-400">
            Services
          </p>
          <h2 className="text-4xl font-extrabold md:text-5xl">
            Engineering Services
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/70">
            Service card-এ click করলে expanded details এবং features দেখা যাবে।
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceData.map((item, index) => (
            <DetailCard
              key={item.title}
              item={item}
              icon={<Settings size={22} />}
              dark
              isOpen={openService === index}
              onClick={() => setOpenService(openService === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}