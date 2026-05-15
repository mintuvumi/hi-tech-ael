"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

export default function DetailCard({
  item,
  isOpen,
  onClick,
  dark = false,
  icon,
  direction = "left",
  delay = 0,
}) {
  const startX = direction === "left" ? -190 : 190;
  const startRotate = direction === "left" ? -2.5 : 2.5;

  return (
    <motion.div
      layout
      onClick={onClick}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: false,
        amount: 0.35,
        margin: "-40px 0px -40px 0px",
      }}
      variants={{
        hidden: {
          opacity: 0.96,
          x: startX,
          y: -28,
          scale: 0.94,
          rotate: startRotate,
          backgroundColor: dark ? "rgba(255,255,255,0.06)" : "#dc2626",
          color: dark ? "#ffffff" : "#ffffff",
          boxShadow: "0 24px 55px rgba(220, 38, 38, 0.22)",
        },
        show: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
          backgroundColor: dark ? "rgba(255,255,255,0.06)" : "#ffffff",
          color: dark ? "#ffffff" : "#111827",
          boxShadow: "0 16px 40px rgba(15, 23, 42, 0.12)",
        },
      }}
      transition={{
        duration: 2.1,
        delay,
        ease: [0.16, 1, 0.3, 1],
        layout: {
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        },
        backgroundColor: {
          duration: 1.35,
          delay: delay + 0.55,
          ease: "easeInOut",
        },
        color: {
          duration: 1.15,
          delay: delay + 0.55,
          ease: "easeInOut",
        },
        boxShadow: {
          duration: 1.2,
          delay: delay + 0.4,
        },
      }}
      whileHover={{
        y: -8,
        scale: 1.015,
        transition: { duration: 0.35, ease: "easeOut" },
      }}
      className={`group cursor-pointer rounded-[28px] border p-6 transition-colors duration-700 ${
        dark
          ? "border-white/10 text-white backdrop-blur-md hover:border-red-400/40 hover:bg-white/[0.09]"
          : "border-neutral-200 hover:border-red-200"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <motion.div
            initial={{ scale: 0.8, rotate: -8 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: false, amount: 0.45 }}
            transition={{
              duration: 1.15,
              delay: delay + 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-700 ${
              dark
                ? "bg-red-500/10 text-red-400"
                : "bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white"
            }`}
          >
            {icon}
          </motion.div>

          <h3
            className={`text-xl font-bold transition-colors duration-700 ${
              dark ? "text-white" : "group-hover:text-red-600"
            }`}
          >
            {item.title}
          </h3>

          <p
            className={`mt-3 text-sm leading-6 transition-colors duration-700 ${
              dark ? "text-white/70" : "text-neutral-600"
            }`}
          >
            {item.short}
          </p>
        </div>

        <button
          type="button"
          className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition duration-500 ${
            dark
              ? "bg-white/10 text-white"
              : "bg-neutral-100 text-neutral-700 group-hover:bg-red-600 group-hover:text-white"
          }`}
        >
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 18 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden"
          >
            <div
              className={`rounded-2xl p-4 ${
                dark ? "bg-black/20" : "bg-neutral-50"
              }`}
            >
              <p
                className={`text-sm leading-7 ${
                  dark ? "text-white/80" : "text-neutral-700"
                }`}
              >
                {item.details}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.features.map((feature) => (
                  <span
                    key={feature}
                    className={`rounded-full px-3 py-2 text-xs font-medium ${
                      dark
                        ? "bg-white/10 text-white/90"
                        : "bg-red-50 text-red-600"
                    }`}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}