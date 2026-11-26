import { Suspense } from "react";
import { notFound } from "next/navigation";
import database from "@/data/database.json"; // Sesuaikan path database.json Anda
import { Product } from "@/types/product";
import ProductDetailClient from "./ProductDetailClient";

const allProducts: Product[] = database.products;

// WAJIB di Server Component saat memakai output: "export"
export async function generateStaticParams() {
  return allProducts.map((product) => ({
    productSlug: product.productSlug,
  }));
}

interface PageProps {
  params: Promise<{ productSlug: string }>;
}

// Komponen server untuk menangani await params dan pencarian produk
async function ProductLoader({ params }: PageProps) {
  const { productSlug } = await params;

  const product = allProducts.find(
    (p) => p.productSlug.toLowerCase() === productSlug.toLowerCase()
  );

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}

// Halaman utama (Server Component)
export default function ProductDetailPage({ params }: PageProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center p-8 text-center text-gray-500">
          Memuat detail produk...
        </div>
      }
    >
      <ProductLoader params={params} />
    </Suspense>
  );
}
