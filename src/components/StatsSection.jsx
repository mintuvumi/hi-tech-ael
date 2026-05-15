"use client";

import { motion } from "framer-motion";
import { Award, Building2, Factory, ShieldCheck } from "lucide-react";

const stats = [
  {
    number: "10+",
    label: "Years Experience",
    icon: <Award size={26} />,
  },
  {
    number: "100+",
    label: "Project Support",
    icon: <Building2 size={26} />,
  },
  {
    number: "24/7",
    label: "Technical Response",
    icon: <ShieldCheck size={26} />,
  },
  {
    number: "3",
    label: "Business Identities",
    icon: <Factory size={26} />,
  },
];

export default function StatsSection() {
  return (
    <section className="bg-[#111827] py-20 text-white">
      <div className="mx-auto grid max-w-[1320px] gap-6 px-6 md:grid-cols-4">
        {stats.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="rounded-[30px] border border-white/10 bg-white/[0.06] p-7 text-center shadow-xl backdrop-blur"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-400">
              {item.icon}
            </div>

            <h3 className="text-4xl font-black text-white">{item.number}</h3>
            <p className="mt-2 text-white/65">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}