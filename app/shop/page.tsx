"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/lib/features/cart/cartSlice"; // Sesuaikan path cartSlice Anda
import { Str_Random, formatRupiah } from "@/actions/generalFunctions"; formatRupiah
import { Tag, ChevronRight, BadgeCheck, ShoppingCart, Check } from "lucide-react";

import databaseData from "@/data/database.json";
import { useTheme } from "@/context/ThemeContext"

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

export default function ProductGridShop({
  products = (databaseData as { products: ProductData[] }).products,
  onSelectProduct,
}: ProductGridProps) {
  const { isDarkMode } = useTheme();
  const dispatch = useDispatch();
  const [addedIdItem, setAddedIdItem] = useState<string | null>(null);

  // Menyimpan idItem yang sedang dipilih untuk tiap idProduct
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});

  const handleSelectVariant = (idProduct: string, idItem: string) => {
    setSelectedVariants((prev) => ({
      ...prev,
      [idProduct]: idItem,
    }));
  };

  const handleAddToCart = (product: any, activeItem: any) => {
    if (!activeItem || activeItem.stokItem <= 0) return;

    const newIdList = Str_Random(4);
    const qty = 1;
    const hargaItemNum = Number(activeItem.hargaItem) || 0;
    const discountAmount = Number(activeItem.hargaDiskon) || 0;
    const finalPrice =
      discountAmount > 0 && discountAmount < hargaItemNum
        ? hargaItemNum - discountAmount
        : hargaItemNum;

    const cartPayload = {
      id: newIdList,
      idList: newIdList,
      idProduct: product.idProduct,
      idItem: activeItem.idItem,
      productName: `${product.productName} (${activeItem.namaItem})`,
      productImage: activeItem.imagesItem?.[0] ?? resolveProductImage(product),
      hargaItem: hargaItemNum,
      hargaDiskon: discountAmount,
      nilaiDiskon: activeItem.nilaiDiskon ?? 0,
      quantity: qty,
      totalHargaItem: hargaItemNum * qty,
      hargaList: finalPrice * qty,
    } as unknown as Parameters<typeof addItemToCart>[0];

    // Dispatch ke Redux Toolkit store
    dispatch(addItemToCart(cartPayload));

    // Picu efek visual pada tombol kartu yang diklik
    setAddedIdItem(activeItem.idItem);
    setTimeout(() => {
      setAddedIdItem((prev) => (prev === activeItem.idItem ? null : prev));
    }, 1500);
  };


  return (
  <div
  className={`min-h-screen overflow-x-hidden font-sans transition-colors duration-500 ${
    isDarkMode ? "bg-[#0b0c10] text-gray-100" : "bg-gray-50 text-gray-900"
  }`}
>
  {/* 1. NAVIGATION BAR */}
  <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mt-24">
    <div className="grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
      {products.map((product) => {
        // Ambil varian yang dipilih user, atau default ke varian pertama [0]
        const selectedIdItem = selectedVariants[product.idProduct];
        const activeItem =
          product.productItems.find((item) => item.idItem === selectedIdItem) ||
          product.productItems[0];

        const currentStock = activeItem?.stokItem ?? 0;
        const basePrice = activeItem?.hargaItem ?? 0;
        const discountAmount = activeItem?.hargaDiskon ?? 0;
        const discountPercent = activeItem?.nilaiDiskon ?? 0;

        const finalPrice =
          discountAmount > 0 && discountAmount < basePrice
            ? basePrice - discountAmount
            : basePrice;

        // Prioritaskan gambar varian aktif jika tersedia, fallback ke gambar produk utama
        const imageUrl =
          activeItem?.imagesItem?.[0] || resolveProductImage(product);

        const isPremium =
          activeItem?.fitur?.includes("premium") ||
          product.productItems.some((item) => item.fitur.includes("premium"));

        const isOutOfStock = !activeItem || currentStock <= 0;
        const isAdded = addedIdItem === activeItem?.idItem;

        return (
          <article
            key={product.idProduct}
            className={`group flex flex-col min-w-0 w-full rounded-2xl border overflow-hidden transition-all duration-300 ${
              isDarkMode
                ? "bg-[#12141c] border-gray-800/90 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/5"
                : "bg-white border-zinc-200/80 shadow-xs hover:shadow-md hover:border-indigo-200"
            }`}          
          >
            {/* Thumbnail */}
            <div className={`relative aspect-[4/3] w-full overflow-hidden shrink-0 ${
                isDarkMode ? "bg-gray-900" : "bg-zinc-100"
              }`}
            >
              <img
                src={imageUrl}
                alt={`${product.productName} - ${activeItem?.namaItem || ""}`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {discountPercent > 0 && (
                <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-rose-600 px-2.5 py-0.5 text-xs font-semibold text-white shadow-xs">
                  <Tag className="size-3" />
                  Hemat {discountPercent}%
                </span>
              )}

              <span 
                className={`absolute bottom-2.5 right-2.5 rounded-lg backdrop-blur-xs px-2.5 py-1 text-[11px] font-medium ${
                  isDarkMode
                    ? "bg-black/75 text-gray-200 border border-gray-800"
                    : "bg-black/65 text-white"
                }`}
              >
                Stok: {currentStock} {activeItem?.unit || product.satuan}
              </span>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col justify-between gap-4 p-4 min-w-0">
              <div className="space-y-2 min-w-0">
                <h3 
                className={`text-base font-semibold line-clamp-1 transition-colors ${
                    isDarkMode
                      ? "text-gray-100 group-hover:text-cyan-400"
                      : "text-zinc-900 group-hover:text-indigo-600"
                  }`}
                >
                  <a href={`/shop/${product.productSlug}`}>
                    {product.productName}
                  </a>
                </h3>

                <p  className={`text-xs line-clamp-2 leading-relaxed ${
                    isDarkMode ? "text-gray-400" : "text-zinc-500"
                  }`}
                >
                  {product.descriptions}
                </p>

                {/* Interactive Variant Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {product.productItems.slice(0, 3).map((variant) => {
                    const isSelected = activeItem?.idItem === variant.idItem;
                    const variantOut = variant.stokItem <= 0;

                    return (
                      <button
                        key={variant.idItem}
                        type="button"
                        onClick={() =>
                          handleSelectVariant(product.idProduct, variant.idItem)
                        }
                         className={`inline-flex items-center rounded-md px-2.5 py-1 text-[11px] font-medium transition-all cursor-pointer border ${
                          isSelected
                            ? isDarkMode
                              ? "bg-cyan-500 text-black font-semibold border-cyan-400 shadow-xs shadow-cyan-500/20"
                              : "bg-indigo-600 text-white border-indigo-600 shadow-xs"
                            : variantOut
                            ? isDarkMode
                              ? "bg-gray-900/50 text-gray-600 border-gray-800 line-through hover:border-gray-700"
                              : "bg-zinc-50 text-zinc-400 border-zinc-200 line-through hover:border-zinc-300"
                            : isDarkMode
                            ? "bg-gray-800/80 text-gray-300 border-gray-700/80 hover:bg-gray-800 hover:text-cyan-400 hover:border-cyan-500/40"
                            : "bg-zinc-100 text-zinc-700 border-transparent hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200"
                        }`}
                      >
                        {variant.namaItem}
                      </button>
                    );
                  })}

                  {product.productItems.length > 3 && (
                    <a
                      href={`/shop/${product.productSlug}`}
                      className={`inline-flex items-center rounded-md px-2 py-1 text-[11px] font-medium transition-colors ${
                        isDarkMode
                          ? "bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 border border-cyan-500/20"
                          : "bg-indigo-50 hover:bg-indigo-100 text-indigo-600"
                      }`}
                      >
                      +{product.productItems.length - 3} varian
                    </a>
                  )}
                </div>

                {/* Price Dinamis Sesuai Varian Dipilih */}
                <div className="pt-1">
                  <span  className={`text-[11px] block ${
                      isDarkMode ? "text-gray-500" : "text-zinc-400"
                    }`}
                  >
                    Varian: {activeItem?.namaItem || "-"}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className={`text-base font-bold ${
                        isDarkMode ? "text-white" : "text-zinc-900"
                      }`}
                    >
                      {formatRupiah(finalPrice)}
                    </span>
                    {discountAmount > 0 && discountAmount < basePrice && (
                      <span className={`text-xs line-through ${
                          isDarkMode ? "text-gray-500" : "text-zinc-400"
                        }`}
                      >
                        {formatRupiah(basePrice)}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className={`flex items-center justify-between gap-2 pt-3 border-t min-w-0 ${
                  isDarkMode ? "border-gray-800" : "border-zinc-100"
                }`}
              >
                <nav aria-label="breadcrumb" className="min-w-0 flex-1">
                  <ol className={`flex items-center gap-1 text-xs min-w-0 ${
                      isDarkMode ? "text-gray-400" : "text-zinc-500"
                    }`}
                  >
                    <li className="inline-flex items-center capitalize truncate">
                      {product.categories || "Produk"}
                    </li>
                    {product.categories && (
                      <>
                        <li
                          aria-hidden="true"
                          className={`shrink-0 ${
                            isDarkMode ? "text-gray-600" : "text-zinc-400"
                          }`}
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
                          className={`size-4 ${
                            isDarkMode
                              ? "fill-emerald-500 text-gray-900"
                              : "fill-green-600 text-white"
                          }`}
                        />
                      </li>
                    )}
                  </ol>
                </nav>

                <button
                  type="button"
                  disabled={isOutOfStock}
                  onClick={() => handleAddToCart(product, activeItem)}
                  className={`inline-flex items-center gap-1.5 shrink-0 rounded-lg px-3 py-1.5 text-xs font-semibold text-white transition-all duration-200 cursor-pointer active:scale-95 disabled:bg-zinc-300 disabled:cursor-not-allowed ${
                    isAdded
                      ? "bg-emerald-600 hover:bg-emerald-700"
                      : "bg-indigo-600 hover:bg-indigo-700"
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="size-3.5" />
                      Added
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="size-3.5" />
                      {isOutOfStock ? "Habis" : "Add to Cart"}
                    </>
                  )}
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  </section>
</div>



  );
}