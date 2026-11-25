import { Suspense } from "react";
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

// 1. Komponen terpisah untuk menangani await params dan pencarian produk
async function ProductLoader({ params }: { params: Promise<{ productSlug: string }> }) {
  const { productSlug } = await params;

  const product = allProducts.find(
    (p) => p.productSlug.toLowerCase() === productSlug.toLowerCase()
  );

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}

// 2. Halaman utama dibuat sinkron dan membungkus ProductLoader dengan Suspense
export default function ProductDetailPage({ params }: PageProps) {
  return (
    <div className="min-h-screen">
      <div className="w-full mx-auto rounded-2xl shadow-sm overflow-hidden">
        <Suspense fallback={<div className="p-8 text-center text-gray-500">Memuat detail produk...</div>}>
          <ProductLoader params={params} />
        </Suspense>
      </div>
    </div>
  );
}
