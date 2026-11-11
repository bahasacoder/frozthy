import React from "react";
import ProductCard, { BlazerProduct } from "./ProductCard";

const BLAZER_PRODUCTS: BlazerProduct[] = [
  {
    id: "allen-solley-1",
    brand: "Allen Solley",
    category: "Men Suits",
    price: 29,
    images: [
      "https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-19.png",
      "https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-22.png",
      "https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-23.png",
    ],
  },
  {
    id: "wintage-2",
    brand: "Wintage",
    category: "Men Solid Suits",
    price: 35,
    originalPrice: 45,
    discountPercentage: 22,
    images: [
      "https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-24.png",
      "https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-20.png",
      "https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-21.png",
    ],
  },
  {
    id: "peter-england-3",
    brand: "Peter England",
    category: "Slim Fit Formal Blazer",
    price: 42,
    originalPrice: 55,
    discountPercentage: 24,
    images: [
      "https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-23.png",
      "https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-19.png",
      "https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-24.png",
    ],
  },
];

export default function BlazerCollectionSection() {
  return (
    <section className="bg-slate-50 py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:space-y-14 sm:px-6 lg:space-y-16 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 text-center">
          <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase sm:text-sm">
            Blazers For Men
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            All New Collection
          </h2>
        </div>

        {/* Responsive Product Grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BLAZER_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
