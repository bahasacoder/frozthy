"use client";

import React, { useState } from "react";
import { Product, ProductItem } from "@/types/product";
// import type { Product, ProductItem } from "./page";
import { useAppDispatch } from "@/lib/hooks";
import { addItemToCart } from "@/lib/features/cart/cartSlice";
import Navbar from "@/components/Navbar";

interface ProductDetailClientProps {
  product: Product;
}

function formatRibuan(amount: number): string {
  return Math.round(amount || 0)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default function ProductDetailClient({
  product,
}: ProductDetailClientProps) {
  const dispatch = useAppDispatch();

  const [isDarkMode, setIsDarkMode] = useState(true);
  // Ambil varian pertama dengan indeks [0]
  const firstItem = product.productItems[0];

  const [selectedItem, setSelectedItem] = useState<ProductItem>(firstItem);
  const [quantity, setQuantity] = useState<number>(
    firstItem?.stokItem > 0 ? 1 : 0
  );

  // Kumpulkan semua gambar (gambar utama produk + gambar dari tiap varian)
  const galleryImages = Array.from(
    new Set([
      ...(product.productImages || []),
      ...product.productItems.flatMap((item) => item.imagesItem || []),
    ])
  );

  const [activeImage, setActiveImage] = useState<string>(
    galleryImages[0] ?? ""
  );

  // Hitung harga akhir setelah diskon
  const hargaAkhir = Math.max(
    0,
    selectedItem.hargaItem - selectedItem.hargaDiskon
  );
  const subtotal = hargaAkhir * quantity;

  const handleSelectVariant = (item: ProductItem) => {
    setSelectedItem(item);
    setQuantity(item.stokItem > 0 ? 1 : 0);
    if (item.imageItem?.[0]) {
      setActiveImage(item.imageItem[0]);
    }
  };

  const handleAddToCart = () => {
    if (quantity <= 0 || selectedItem.stokItem <= 0) return;

    dispatch(
      addItemToCart({
        id: Date.now(),
        idList: `${product.idProduct}-${selectedItem.idItem}-${Date.now()}`,
        idItem: selectedItem.idItem,
        productName: `${product.productName} - ${selectedItem.namaItem}`,
        productImages:
          selectedItem.imagesItem?.[0] ?? product.productImages?.[0] ?? "",
        hargaItem: selectedItem.hargaItem,
        hargaDiskon: selectedItem.hargaDiskon,
        nilaiDiskon: selectedItem.nilaiDiskon,
        quantity,
        totalHargaItem: subtotal,
      } as Parameters<typeof addItemToCart>[0])
    );
  };
   

  return (
    <div
      className={`min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8 transition-colors duration-700 ${
        isDarkMode ? "bg-[#0b0c10] text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <div
        className={`max-w-6xl mx-auto rounded-2xl shadow-sm overflow-hidden border transition-colors ${
          isDarkMode
            ? "bg-gray-900/90 border-gray-800"
            : "bg-white border-gray-100"
        }`}
      >
     {/* JSX grid di atas ke dalam sini */}
        <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10 transition-colors duration-500 ${
        isDarkMode ? "bg-[#0b0c10]/90 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      {/* Kolom Kiri: Galeri Gambar */}
      <div className="space-y-4">
        <div
          className={`relative aspect-square w-full overflow-hidden rounded-xl border transition-colors ${
            isDarkMode
              ? "bg-gray-800/60 border-gray-800"
              : "bg-gray-50 border-gray-100"
          }`}
        >
          <img
            src={`/assets/all/${activeImage}`}
            alt={product.productName}
            className="h-full w-full object-contain"
          />
        </div>

        {/* Thumbnail */}
        {galleryImages.length > 1 && (
          <div className="flex gap-2 overflow-x-auto pb-1">
            {galleryImages.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImage(img)}
                className={`h-16 w-16 rounded-md overflow-hidden border transition-colors cursor-pointer ${
                  activeImage === img
                    ? isDarkMode
                      ? "border-cyan-400 bg-gray-800"
                      : "border-blue-600 bg-gray-50"
                    : isDarkMode
                    ? "border-gray-700 bg-gray-800/40 hover:border-gray-600"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <img
                  src={`/assets/all/${img}`}
                  alt={`${product.productName} ${idx + 1}`}
                  className="h-full w-full object-contain"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Kolom Kanan: Info & Varian Produk */}
      <div className="flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          {/* Kategori */}
          <div className="flex flex-wrap gap-2">
            {product.category.map((cat) => (
              <span
                key={cat}
                className={`rounded-full px-3 py-1 text-xs font-medium capitalize transition-colors ${
                  isDarkMode
                    ? "bg-cyan-950/80 text-cyan-400 border border-cyan-800/60"
                    : "bg-blue-50 text-blue-700"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          <h1
            className={`text-2xl sm:text-3xl font-bold transition-colors ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {product.productName}
          </h1>

          {/* Harga */}
          <div className="flex items-baseline gap-3">
            <span
              className={`text-2xl font-bold transition-colors ${
                isDarkMode ? "text-cyan-400" : "text-gray-900"
              }`}
            >
              {formatRibuan(hargaAkhir)}
            </span>
            {selectedItem.hargaDiskon > 0 && (
              <>
                <span
                  className={`text-sm line-through ${
                    isDarkMode ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  {formatRibuan(selectedItem.hargaItem)}
                </span>
                <span
                  className={`rounded px-2 py-0.5 text-xs font-semibold ${
                    isDarkMode
                      ? "bg-red-950/80 text-red-400 border border-red-800/50"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  -{selectedItem.nilaiDiskon}%
                </span>
              </>
            )}
          </div>

          <p
            className={`text-sm leading-relaxed transition-colors ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {product.teaser}
          </p>

          {/* Pilihan Varian (productItems) */}
          <div className="space-y-2 pt-2">
            <p
              className={`text-sm font-semibold ${
                isDarkMode ? "text-gray-200" : "text-gray-800"
              }`}
            >
              Pilih Varian ({product.satuan ?? selectedItem.unit}):
            </p>
            <div className="flex flex-wrap gap-2">
              {product.productItems.map((item) => {
                const isSelected = item.idItem === selectedItem.idItem;
                return (
                  <button
                    key={item.idItem}
                    type="button"
                    onClick={() => handleSelectVariant(item)}
                    className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
                      isSelected
                        ? isDarkMode
                          ? "border-cyan-500 bg-cyan-950/60 text-cyan-300"
                          : "border-blue-600 bg-blue-50 text-blue-700"
                        : isDarkMode
                        ? "border-gray-700 bg-gray-800/50 text-gray-300 hover:border-gray-600"
                        : "border-gray-200 text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {item.namaItem}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Info Stok & Dimensi */}
          <div
            className={`text-xs space-y-1.5 pt-3 border-t transition-colors ${
              isDarkMode
                ? "text-gray-400 border-gray-800"
                : "text-gray-500 border-gray-200"
            }`}
          >
            <p>
              Stok tersedia:{" "}
              <span className={isDarkMode ? "text-gray-200" : "text-gray-700"}>
                {selectedItem.stokItem} {selectedItem.unit}
              </span>
            </p>
            <p>Dimensi kemasan: {selectedItem.dimensi}</p>
            <p>Spesifikasi: {product.specification}</p>
          </div>
        </div>

        {/* Tombol Quantity & Add to Cart */}
        <div
          className={`flex items-center gap-4 pt-4 border-t transition-colors ${
            isDarkMode ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <div
            className={`flex items-center border rounded-lg transition-colors ${
              isDarkMode
                ? "border-gray-700 bg-gray-800/60"
                : "border-gray-300 bg-white"
            }`}
          >
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              disabled={quantity <= 1}
              className={`px-3 py-2 disabled:opacity-40 cursor-pointer transition-colors ${
                isDarkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              −
            </button>
            <span
              className={`px-4 py-2 text-sm font-semibold ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {quantity}
            </span>
            <button
              type="button"
              onClick={() =>
                setQuantity((q) => Math.min(selectedItem.stokItem, q + 1))
              }
              disabled={quantity >= selectedItem.stokItem}
              className={`px-3 py-2 disabled:opacity-40 cursor-pointer transition-colors ${
                isDarkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              +
            </button>
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            disabled={selectedItem.stokItem <= 0}
            className={`flex-1 rounded-lg px-6 py-3 text-sm font-semibold transition-all cursor-pointer ${
              isDarkMode
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold hover:opacity-90 disabled:bg-gray-800 disabled:from-gray-800 disabled:to-gray-800 disabled:text-gray-500"
                : "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-300"
            }`}
          >
            Tambah ke Keranjang ({formatRibuan(subtotal)})
          </button>
        </div>
      </div>
    </div>
    {/* ---- */}
    </div>
    </div>

  );
}
