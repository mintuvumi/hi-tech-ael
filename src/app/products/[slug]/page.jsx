import { notFound } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ProductDetailsClient from "../../../components/ProductDetailsClient";
import { productData } from "../../../data/siteData";

export default async function ProductPage({ params }) {
  const { slug } = await params;

  const product = productData.find((item) => item.slug === slug);

  if (!product) notFound();

  return (
    <>
      <Navbar />
      <ProductDetailsClient product={product} />
      <Footer />
    </>
  );
}