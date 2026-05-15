"use client";

import { productData } from "../data/siteData";
import ProductCard from "./ProductCard";

export default function ProductSection() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[#f7f7f7] py-28"
    >
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-red-100 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-100 blur-3xl" />

      <div className="relative mx-auto max-w-[1320px] px-6">
        <div className="mb-16 text-center">
          <p className="font-bold uppercase tracking-[0.28em] text-red-600">
            Products
          </p>

          <h2 className="mt-4 text-5xl font-black text-neutral-950">
            Premium Electrical Products
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
            High-quality industrial electrical products, switchgear,
            automation systems and engineering solutions designed for
            reliability, safety and long-term performance.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {productData.map((item, index) => (
            <ProductCard
              key={item.slug}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}