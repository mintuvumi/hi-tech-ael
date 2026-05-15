"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Zap } from "lucide-react";

const items = [
  {
    title: "Reliable Engineering",
    desc: "Strong design, dependable equipment and quality-driven execution for every project.",
    icon: <ShieldCheck size={24} />,
  },
  {
    title: "Modern Automation",
    desc: "Smart control systems and efficient automation to support industrial productivity.",
    icon: <Sparkles size={24} />,
  },
  {
    title: "Customer Confidence",
    desc: "Elegant presentation, smooth animations and trust-building visual design for clients.",
    icon: <Zap size={24} />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f7f7f7] py-24">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 font-bold uppercase tracking-[0.28em] text-red-600">
            Why Choose Us
          </p>
          <h2 className="text-4xl font-extrabold md:text-5xl">
            Built For A Big Company Presence
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -10 }}
              className="rounded-[30px] border border-neutral-200 bg-white p-7 shadow-lg transition hover:shadow-2xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="mt-4 leading-7 text-neutral-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}