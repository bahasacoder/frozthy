import { notFound } from "next/navigation";
import database from "@/data/database.json"; // Sesuaikan path database.json Anda
import { Product } from "@/types/product";
import ProductDetailClient from "./ProductDetailClient";

const allProducts: Product[] = database.products;

// WAJIB ada saat memakai output: "export" dan key harus sama dengan nama folder [productSlug]
export async function generateStaticParams() {
  return allProducts.map((product) => ({
    productSlug: product.productSlug,
  }));
}

interface PageProps {
  params: Promise<{ productSlug: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { productSlug } = await params;

  const product = allProducts.find(
    (p) => p.productSlug.toLowerCase() === productSlug.toLowerCase()
  );

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
        <ProductDetailClient product={product} />
      </div>
    </div>
  );
}
