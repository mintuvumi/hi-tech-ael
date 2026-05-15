import { notFound } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import TeamDetailsClient from "../../../components/TeamDetailsClient";
import { productData } from "../../../data/siteData";

export default async function TeamMemberPage({ params }) {
  const { id } = await params;

  const allMembers = productData.flatMap((item) => item.team || []);
  const member = allMembers.find((item) => item.id === id);

  if (!member) notFound();

  return (
    <>
      <Navbar />
      <TeamDetailsClient member={member} />
      <Footer />
    </>
  );
}