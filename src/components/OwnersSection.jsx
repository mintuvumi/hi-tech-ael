"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { owners } from "../data/siteData";

const socialIcons = [
  { key: "facebook", label: "Facebook", icon: FaFacebookF, color: "hover:bg-[#3b5998]" },
  { key: "linkedin", label: "LinkedIn", icon: FaLinkedinIn, color: "hover:bg-[#0077b5]" },
  { key: "instagram", label: "Instagram", icon: FaInstagram, color: "hover:bg-[#c32aa3]" },
  { key: "youtube", label: "YouTube", icon: FaYoutube, color: "hover:bg-[#ff0000]" },
];

export default function OwnersSection() {
  return (
    <section id="owners" className="bg-[#f7f7f7] py-24">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 font-bold uppercase tracking-[0.28em] text-red-600">
            Corporate Leadership
          </p>

          <h2 className="text-4xl font-black text-neutral-950 md:text-6xl">
            Owners & Management
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-neutral-600">
            Meet the visionary leadership team behind Hi-Tech Automation & Engineering Ltd.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {owners.map((owner, index) => (
            <motion.div
              key={owner.id}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -12 }}
              className="group rounded-[38px] bg-white p-8 text-center shadow-[0_25px_80px_rgba(0,0,0,0.10)] transition hover:shadow-[0_35px_100px_rgba(220,38,38,0.18)]"
            >
              <div className="relative mx-auto h-[280px] w-[280px] overflow-hidden rounded-full p-[7px]">
                <div className="absolute inset-0 animate-[spin_8s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,#dc2626,#f97316,#facc15,#dc2626)]" />

                <div className="relative z-10 h-full w-full rounded-full bg-white p-3">
                  <img
                    src={owner.image}
                    alt={owner.name}
                    className="h-full w-full rounded-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              <h3 className="mt-7 text-2xl font-black text-neutral-950">
                {owner.name}
              </h3>

              <p className="mt-2 inline-block rounded-full bg-red-50 px-5 py-2 text-sm font-bold text-red-600">
                {owner.designation}
              </p>

              <p className="mt-3 text-sm font-bold text-neutral-500">
                {owner.experience}
              </p>

              <p className="mt-4 leading-7 text-neutral-600">
                {owner.bio}
              </p>

              <div className="mt-5 space-y-2 text-sm text-neutral-700">
                <p className="flex items-center justify-center gap-2">
                  <Phone size={16} className="text-red-600" />
                  {owner.phone}
                </p>

                <p className="flex items-center justify-center gap-2">
                  <Mail size={16} className="text-red-600" />
                  {owner.email}
                </p>
              </div>

              <div className="mt-6 flex justify-center gap-3">
                {socialIcons.map(({ key, label, icon: Icon, color }) => (
                  <a
                    key={key}
                    href={owner.socials?.[key] || "#"}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className={`group/icon relative flex h-11 w-11 items-center justify-center rounded-full bg-neutral-100 text-neutral-900 shadow-md transition duration-300 hover:-translate-y-2 hover:scale-110 hover:text-white ${color}`}
                  >
                    <Icon size={18} />

                    <span className="pointer-events-none absolute -top-11 scale-0 rounded-full bg-neutral-950 px-3 py-1 text-xs font-bold text-white opacity-0 transition group-hover/icon:scale-100 group-hover/icon:opacity-100">
                      {label}
                    </span>
                  </a>
                ))}
              </div>

              <Link
                href={`/owners/${owner.id}`}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-red-600 px-7 py-3 font-bold text-white shadow-lg transition hover:bg-neutral-950"
              >
                View Profile
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}