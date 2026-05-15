import { notFound } from "next/navigation";
import { owners } from "../../../data/siteData";
import OwnerDetailsClient from "../../../components/OwnerDetailsClient";

export default async function OwnerDetailsPage({ params }) {
  const { id } = await params;

  const owner = owners.find((item) => item.id === id);

  if (!owner) notFound();

  return <OwnerDetailsClient owner={owner} />;
}