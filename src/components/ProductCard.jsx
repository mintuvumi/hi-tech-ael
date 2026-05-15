"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ProductCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{
        duration: 1,
        delay: index * 0.12,
      }}
      whileHover={{ y: -12 }}
      className="group overflow-hidden rounded-[34px] bg-white shadow-[0_20px_70px_rgba(0,0,0,0.10)] transition"
    >
      <div className="relative h-[280px] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute bottom-6 left-6">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-red-400">
            Premium Product
          </p>

          <h3 className="text-3xl font-black text-white">
            {item.title}
          </h3>
        </div>
      </div>

      <div className="p-7">
        <p className="leading-8 text-neutral-600">
          {item.short}
        </p>

        <Link
          href={`/products/${item.slug}`}
          className="mt-6 inline-flex items-center gap-3 rounded-full bg-red-600 px-6 py-3 font-bold text-white transition hover:bg-neutral-950"
        >
          View Product
          <ArrowRight size={18} />
        </Link>
      </div>
    </motion.div>
  );
}