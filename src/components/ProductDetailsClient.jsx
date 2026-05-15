"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Mail,
  Phone,
  Settings,
  ShieldCheck,
  Star,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

export default function ProductDetailsClient({ product }) {
  const images = product.gallery?.length ? product.gallery : [product.image];
  const [activeImage, setActiveImage] = useState(0);

  const team = product.team || [];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <main className="min-h-screen bg-[#f7f7f7] px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1380px]">
        <Link
          href="/#products"
          className="mb-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold shadow-lg transition hover:-translate-x-1 hover:text-red-600"
        >
          <ArrowLeft size={18} />
          Back to Products
        </Link>

        <section className="overflow-hidden rounded-[44px] bg-white shadow-[0_35px_100px_rgba(0,0,0,0.12)]">
          <div className="grid gap-10 p-6 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
            <div>
              <div className="relative h-[520px] overflow-hidden rounded-[36px] bg-neutral-200">
                {images.map((img, index) => (
                  <img
                    key={img}
                    src={img}
                    alt={product.title}
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1400ms] ${
                      activeImage === index
                        ? "scale-100 opacity-100"
                        : "scale-110 opacity-0"
                    }`}
                  />
                ))}

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                <div className="absolute bottom-8 left-8">
                  <p className="font-bold uppercase tracking-[0.28em] text-red-400">
                    Premium Product
                  </p>
                  <h1 className="mt-3 text-4xl font-black text-white md:text-6xl">
                    {product.title}
                  </h1>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-4">
                {images.map((img, index) => (
                  <button
                    key={img}
                    onClick={() => setActiveImage(index)}
                    className={`overflow-hidden rounded-2xl border-4 transition ${
                      activeImage === index
                        ? "border-red-600"
                        : "border-white"
                    }`}
                  >
                    <img
                      src={img}
                      alt={product.title}
                      className="h-28 w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="font-bold uppercase tracking-[0.25em] text-red-600">
                Industrial Engineering Solution
              </p>

              <h2 className="mt-4 text-4xl font-black text-neutral-950 md:text-5xl">
                {product.title}
              </h2>

              <p className="mt-6 text-lg leading-9 text-neutral-600">
                {product.description || product.details}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <InfoBox icon={ShieldCheck} title="Quality" value="Premium Grade" />
                <InfoBox icon={Zap} title="Performance" value="Industrial Ready" />
                <InfoBox icon={Settings} title="Support" value="Custom Design" />
                <InfoBox icon={Wrench} title="Service" value="Installation Support" />
              </div>

              <div className="mt-8 rounded-3xl bg-neutral-950 p-7 text-white">
                <h3 className="text-2xl font-black">Product Summary</h3>
                <p className="mt-4 leading-8 text-white/70">
                  {product.details}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          <ProductInfoCard
            title="Key Features"
            items={product.features || []}
            icon={CheckCircle2}
          />

          <ProductInfoCard
            title="Technical Specifications"
            items={product.specifications || []}
            icon={Settings}
          />
        </section>

        <section className="mt-10 rounded-[40px] bg-white p-8 shadow-xl md:p-10">
          <div className="mb-8">
            <p className="font-bold uppercase tracking-[0.25em] text-red-600">
              Engineering & Sales Team
            </p>
            <h2 className="mt-3 text-4xl font-black text-neutral-950">
              Product Responsible Team
            </h2>
            <p className="mt-4 max-w-3xl leading-8 text-neutral-600">
              এই product design, sales, technical support, installation,
              testing এবং commissioning কাজের জন্য responsible team members.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {team.map((member, index) => (
              <Link
                key={member.id}
                href={`/team/${member.id}`}
                className="group overflow-hidden rounded-[32px] bg-[#f7f7f7] p-5 shadow-md transition duration-500 hover:-translate-y-3 hover:bg-white hover:shadow-[0_30px_80px_rgba(220,38,38,0.18)]"
              >
                <div className="relative overflow-hidden rounded-[26px]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-red-600 px-4 py-2 text-xs font-black text-white">
                    Team #{index + 1}
                  </div>
                </div>

                <h3 className="mt-5 text-2xl font-black text-neutral-950 group-hover:text-red-600">
                  {member.name}
                </h3>

                <p className="mt-2 font-bold text-red-600">
                  {member.designation}
                </p>

                <p className="mt-3 line-clamp-3 leading-7 text-neutral-600">
                  {member.details}
                </p>

                <div className="mt-5 space-y-2 text-sm font-semibold text-neutral-600">
                  <p className="flex items-center gap-2">
                    <Phone size={16} className="text-red-600" />
                    {member.phone}
                  </p>

                  <p className="flex items-center gap-2">
                    <Mail size={16} className="text-red-600" />
                    {member.email}
                  </p>
                </div>

                <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 font-bold text-white transition group-hover:bg-red-600">
                  View Profile
                  <ArrowRight size={17} />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[40px] bg-neutral-950 p-8 text-white shadow-xl md:p-10">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="font-bold uppercase tracking-[0.25em] text-red-400">
                Need This Product?
              </p>
              <h2 className="mt-3 text-4xl font-black">
                Get professional quotation and technical support.
              </h2>
              <p className="mt-5 leading-8 text-white/65">
                Our sales and engineering team can help with product selection,
                technical specification, installation support and project
                planning.
              </p>
            </div>

            <div className="flex flex-col gap-4 md:items-end">
              <a
                href="tel:+8801700000000"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-red-600 px-8 py-4 font-black text-white transition hover:bg-white hover:text-neutral-950"
              >
                <Phone size={20} />
                Call Sales Team
              </a>

              <a
                href={`mailto:info@hitechbd.com?subject=Product Inquiry - ${product.title}`}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-black text-neutral-950 transition hover:bg-red-600 hover:text-white"
              >
                <Mail size={20} />
                Send Inquiry
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function InfoBox({ icon: Icon, title, value }) {
  return (
    <div className="rounded-2xl bg-neutral-100 p-5 transition hover:-translate-y-1 hover:bg-red-50">
      <Icon size={24} className="text-red-600" />
      <p className="mt-3 text-xs font-bold uppercase text-neutral-500">
        {title}
      </p>
      <h4 className="mt-1 font-black text-neutral-950">{value}</h4>
    </div>
  );
}

function ProductInfoCard({ title, items, icon: Icon }) {
  return (
    <div className="rounded-[34px] bg-white p-8 shadow-xl">
      <h3 className="text-3xl font-black text-neutral-950">{title}</h3>

      <div className="mt-7 grid gap-4">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-4 rounded-2xl bg-neutral-100 p-4 font-bold text-neutral-700 transition hover:bg-red-50 hover:text-red-600"
          >
            <Icon size={22} className="shrink-0 text-red-600" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}