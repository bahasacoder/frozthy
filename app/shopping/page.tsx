import databaseData from "@/data/database.json";
import { BadgeCheck, ChevronRight, ShoppingCart, Tag } from "lucide-react";

export interface ProductVariantItem {
  idItem: string;
  namaItem: string;
  imagesItem: string[];
  size: string;
  unit: string;
  netto: string;
  dimensi: string;
  hargaItem: number;
  hargaDiskon: number;
  nilaiDiskon: number;
  stokItem: number;
  fitur: string[];
}

export interface ProductData {
  idProduct: string;
  productName: string;
  productSlug: string;
  productImages: string[];
  categories: string[];
  teaser: string;
  descriptions: string;
  specification: string;
  satuan?: string;
  productItems: ProductVariantItem[];
}

interface ProductGridProps {
  products?: ProductData[];
  onSelectProduct?: (product: ProductData) => void;
}

const formatRupiah = (amount: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);

const resolveProductImage = (product: ProductData): string => {
  const variantRemoteImg = product.productItems
    .flatMap((item) => item.imagesItem)
    .find((img) => img.startsWith("http://") || img.startsWith("https://"));

  if (variantRemoteImg) return variantRemoteImg;

  const mainImg = product.productImages.find((img) => Boolean(img));
  if (!mainImg) return "/images/placeholder.jpg";
  if (mainImg.startsWith("http") || mainImg.startsWith("/")) return mainImg;
  return `/images/${mainImg}`;
};

export default function ProductGridProd({
  products = (databaseData as { products: ProductData[] }).products,
  onSelectProduct,
}: ProductGridProps) {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
        {products.map((product) => {
          const firstItem = product.productItems[0];
          const totalStock = product.productItems.reduce(
            (sum, item) => sum + item.stokItem,
            0
          );
          const maxDiscount = Math.max(
            0,
            ...product.productItems.map((i) => i.nilaiDiskon || 0)
          );

          const basePrice = firstItem?.hargaItem ?? 0;
          const discountAmount = firstItem?.hargaDiskon ?? 0;
          const finalPrice =
            discountAmount > 0 && discountAmount < basePrice
              ? basePrice - discountAmount
              : basePrice;

          const imageUrl = resolveProductImage(product);
          const isPremium = product.productItems.some((item) =>
            item.fitur.includes("premium")
          );

          return (
            <article
              key={product.idProduct}
              className="group flex flex-col min-w-0 w-full rounded-2xl border border-zinc-200/80 bg-white overflow-hidden shadow-xs hover:shadow-md hover:border-indigo-200 transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100 shrink-0">
                <img
                  src={imageUrl}
                  alt={product.productName}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {maxDiscount > 0 && (
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-rose-600 px-2.5 py-0.5 text-xs font-semibold text-white shadow-xs">
                    <Tag className="size-3" />
                    Hemat s/d {maxDiscount}%
                  </span>
                )}

                <span className="absolute bottom-2.5 right-2.5 rounded-lg bg-black/65 backdrop-blur-xs px-2.5 py-1 text-[11px] font-medium text-white">
                  Stok: {totalStock} {product.satuan || firstItem?.unit}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col justify-between gap-4 p-4 min-w-0">
                <div className="space-y-2 min-w-0">
                  <h3 className="text-base font-semibold text-zinc-900 line-clamp-1 group-hover:text-indigo-600 transition-colors">
                    <a href={`/products/${product.productSlug}`}>
                      {product.productName}
                    </a>
                  </h3>

                  <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed">
                    {product.descriptions}
                  </p>

                  {/* Variant Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {product.productItems.slice(0, 3).map((variant) => (
                      <span
                        key={variant.idItem}
                        className="inline-flex items-center rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-700"
                      >
                        {variant.namaItem}
                      </span>
                    ))}
                    {product.productItems.length > 3 && (
                      <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-0.5 text-[11px] font-medium text-indigo-600">
                        +{product.productItems.length - 3} varian
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="pt-1">
                    <span className="text-[11px] text-zinc-400 block">
                      Mulai dari
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-base font-bold text-zinc-900">
                        {formatRupiah(finalPrice)}
                      </span>
                      {discountAmount > 0 && discountAmount < basePrice && (
                        <span className="text-xs text-zinc-400 line-through">
                          {formatRupiah(basePrice)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between gap-2 pt-3 border-t border-zinc-100 min-w-0">
                  <nav aria-label="breadcrumb" className="min-w-0 flex-1">
                    <ol className="flex items-center gap-1 text-xs text-zinc-500 min-w-0">
                      <li className="inline-flex items-center capitalize truncate">
                        {product.categories || "Produk"}
                      </li>
                      {product.categories && (
                        <>
                          <li
                            aria-hidden="true"
                            className="text-zinc-400 shrink-0"
                          >
                            <ChevronRight className="size-3.5" />
                          </li>
                          <li className="inline-flex items-center capitalize truncate">
                            {product.categories}
                          </li>
                        </>
                      )}
                      {isPremium && (
                        <li className="ml-1 shrink-0">
                          <BadgeCheck
                            aria-label="Produk Premium"
                            className="size-4 fill-green-600 text-white"
                          />
                        </li>
                      )}
                    </ol>
                  </nav>

                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 shrink-0 rounded-lg bg-indigo-600 hover:bg-indigo-700 active:scale-95 px-3 py-1.5 text-xs font-semibold text-white transition cursor-pointer"
                  >
                    <ShoppingCart className="size-3.5" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}