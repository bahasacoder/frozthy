"use client";

import React, { useState } from "react";
import { Product, ProductItem } from "@/types/product";
import { useAppDispatch } from "@/lib/hooks";
import { addItemToCart } from "@/lib/features/cart/cartSlice";

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

  // Ambil varian pertama dengan indeks [0]
  const firstItem = product.productItems[0];

  const [selectedItem, setSelectedItem] = useState<ProductItem>(firstItem);
  const [quantity, setQuantity] = useState<number>(
    firstItem?.stokItem > 0 ? 1 : 0
  );

  // Kumpulkan semua gambar (gambar utama produk + gambar dari tiap varian)
  const galleryImages = Array.from(
    new Set([
      ...(product.productImage || []),
      ...product.productItems.flatMap((item) => item.imageItem || []),
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
        productImage:
          selectedItem.imageItem?.[0] ?? product.productImage?.[0] ?? "",
        hargaItem: selectedItem.hargaItem,
        hargaDiskon: selectedItem.hargaDiskon,
        nilaiDiskon: selectedItem.nilaiDiskon,
        quantity,
        totalHargaItem: subtotal,
      } as Parameters<typeof addItemToCart>[0])
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
      {/* Kolom Kiri: Galeri Gambar */}
      <div className="space-y-4">
        <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-50">
          <img
            src={`/assets/all/${activeImage}`}
            alt={product.productName}
            className="h-full w-full object-contain"
          />
        </div>
        {/* Thumbnail */}
        {galleryImages.length > 1 && (
          <div className="flex gap-2 overflow-x-auto">
            {galleryImages.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImage(img)}
                className={`h-16 w-16 rounded-md overflow-hidden border transition-colors cursor-pointer ${
                  activeImage === img ? "border-blue-600" : "border-gray-200"
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
                className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 capitalize"
              >
                {cat}
              </span>
            ))}
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            {product.productName}
          </h1>

          {/* Harga */}
          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-bold text-gray-900">
              {formatRibuan(hargaAkhir)}
            </span>
            {selectedItem.hargaDiskon > 0 && (
              <>
                <span className="text-sm text-gray-400 line-through">
                  {formatRibuan(selectedItem.hargaItem)}
                </span>
                <span className="rounded bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-600">
                  -{selectedItem.nilaiDiskon}%
                </span>
              </>
            )}
          </div>

          <p className="text-sm text-gray-600 leading-relaxed">
            {product.teaser}
          </p>

          {/* Pilihan Varian (productItems) */}
          <div className="space-y-2 pt-2">
            <p className="text-sm font-semibold text-gray-800">
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
                        ? "border-blue-600 bg-blue-50 text-blue-700"
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
          <div className="text-xs text-gray-500 space-y-1 pt-2 border-t">
            <p>
              Stok tersedia: {selectedItem.stokItem} {selectedItem.unit}
            </p>
            <p>Dimensi kemasan: {selectedItem.dimensi}</p>
            <p>Spesifikasi: {product.specification}</p>
          </div>
        </div>

        {/* Tombol Quantity & Add to Cart */}
        <div className="flex items-center gap-4 pt-4 border-t">
          <div className="flex items-center border rounded-lg">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              disabled={quantity <= 1}
              className="px-3 py-2 text-gray-600 disabled:opacity-40"
            >
              −
            </button>
            <span className="px-4 py-2 text-sm font-semibold">{quantity}</span>
            <button
              type="button"
              onClick={() =>
                setQuantity((q) => Math.min(selectedItem.stokItem, q + 1))
              }
              disabled={quantity >= selectedItem.stokItem}
              className="px-3 py-2 text-gray-600 disabled:opacity-40"
            >
              +
            </button>
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            disabled={selectedItem.stokItem <= 0}
            className="flex-1 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:bg-gray-300 transition-colors cursor-pointer"
          >
            Tambah ke Keranjang ({formatRibuan(subtotal)})
          </button>
        </div>
      </div>
    </div>
  );
}
