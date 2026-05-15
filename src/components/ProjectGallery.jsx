"use client";

import { motion } from "framer-motion";
import { projects } from "../data/siteData";

export default function ProjectGallery() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 font-bold uppercase tracking-[0.28em] text-red-600">
            Projects
          </p>
          <h2 className="text-4xl font-extrabold md:text-5xl">
            Our Engineering Work
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-neutral-600">
            Industrial, commercial and power distribution projects presented
            with premium animated cards.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.55 }}
              whileHover={{ y: -12 }}
              className="group overflow-hidden rounded-[32px] border border-neutral-200 bg-white shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-red-600 backdrop-blur">
                  Project {index + 1}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-extrabold">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}