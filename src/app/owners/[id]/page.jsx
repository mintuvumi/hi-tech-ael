import { notFound } from "next/navigation";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

import { owners } from "../../../data/siteData";

import OwnerDetailsClient from "../../../components/OwnerDetailsClient";
import OwnersAfterSlider from "../../../components/OwnersAfterSlider";

export default async function OwnerDetailsPage({ params }) {
  const { id } = await params;

  const owner = owners.find((item) => item.id === id);

  if (!owner) notFound();

  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#f7f7f7] text-neutral-900">
        <OwnerDetailsClient owner={owner} />

        <OwnersAfterSlider />
      </main>

      <Footer />
    </>
  );
}