"use client";

import { useState } from "react";

interface ProductItem {
  idItem: string;
  namaItem: string;
  imageItem: string;
  size: string;
  unit: string;
  netto: string;
  dimensi: string;
  hargaItem: number;
  hargaDiskon: number;
  nilaiDiskon: number;
  stokItem: number;
}

interface Product {
  idProduct: string;
  productName: string;
  productSlug: string;
  productImage: string;
  category: string;
  teaser: string;
  descriptions: string;
  specification: string;
  productItems: ProductItem[];
}

export default function ProductDetailClient({ product }: { product: Product }) {
  // Secara otomatis memuat varian pertama index ke-0 sebagai default terpilih
  const [selectedItem, setSelectedItem] = useState<ProductItem>(product.productItems[0]);
  const [quantity, setQuantity] = useState<number>(1);

  const formatRupiah = (number: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  const finalPrice = selectedItem.hargaItem - selectedItem.hargaDiskon;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8">
      {/* Sisi Kiri: Gambar Produk */}
      <div className="flex flex-col gap-4">
        <div className="relative aspect-square w-full rounded-xl bg-gray-100 overflow-hidden flex items-center justify-center border border-gray-200">
          <span className="text-gray-400 text-sm font-medium">
            [ Gambar: {product.productImage} ]
          </span>
        </div>
        <p className="text-xs text-center text-gray-400 italic">
          *Tampilan kemasan asli bisa berbeda dari ilustrasi foto
        </p>
      </div>

      {/* Sisi Kanan: Detail Konten Dinamis */}
      <div className="flex flex-col justify-between">
        <div>
          <span className="inline-block bg-green-50 text-green-700 text-xs font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full mb-3">
            {product.category}
          </span>
          
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            {product.productName}
          </h1>

          <div className="flex items-baseline gap-3 my-4">
            <span className="text-3xl font-extrabold text-green-600">
              {formatRupiah(finalPrice)}
            </span>
            {selectedItem.hargaDiskon > 0 && (
              <>
                <span className="text-sm line-through text-gray-400">
                  {formatRupiah(selectedItem.hargaItem)}
                </span>
                <span className="bg-red-50 text-red-600 text-xs font-bold px-2 py-0.5 rounded">
                  Hemat {selectedItem.nilaiDiskon}%
                </span>
              </>
            )}
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {product.teaser}
          </p>

          {/* Pilihan Varian */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              Pilih Varian / Spesifikasi:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {product.productItems.map((item) => {
                const isSelected = selectedItem.idItem === item.idItem;
                return (
                  <button
                    key={item.idItem}
                    type="button"
                    onClick={() => {
                      setSelectedItem(item);
                      setQuantity(1);
                    }}
                    className={`py-2.5 px-4 text-sm font-medium rounded-lg border text-center transition-all ${
                      isSelected
                        ? "border-green-600 bg-green-50 text-green-700 shadow-sm"
                        : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {item.namaItem}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Data Teknis */}
          <div className="border-t border-gray-100 pt-5 space-y-2">
            <div className="grid grid-cols-3 text-sm">
              <span className="text-gray-500">Dimensi Paket</span>
              <span className="col-span-2 text-gray-900 font-medium">: {selectedItem.dimensi}</span>
            </div>
            <div className="grid grid-cols-3 text-sm">
              <span className="text-gray-500">Kapasitas / Netto</span>
              <span className="col-span-2 text-gray-900 font-medium">: {selectedItem.netto} {selectedItem.unit}</span>
            </div>
            <div className="grid grid-cols-3 text-sm">
              <span className="text-gray-500">Deskripsi</span>
              <span className="col-span-2 text-gray-900 font-medium">: {product.descriptions}</span>
            </div>
            <div className="grid grid-cols-3 text-sm">
              <span className="text-gray-500">Spesifikasi Utama</span>
              <span className="col-span-2 text-gray-900 font-medium">: {product.specification}</span>
            </div>
          </div>
        </div>

        {/* Keranjang Belanja */}
        <div className="border-t border-gray-100 pt-6 mt-8">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center border border-gray-300 rounded-lg bg-white">
              <button
                type="button"
                disabled={quantity <= 1}
                onClick={() => setQuantity(prev => prev - 1)}
                className="px-3 py-2 text-gray-600 hover:bg-gray-50 disabled:opacity-50 transition-colors"
              >
                -
              </button>
              <span className="w-12 text-center text-sm font-semibold text-gray-900">
                {quantity}
              </span>
              <button
                type="button"
                disabled={quantity >= selectedItem.stokItem}
                onClick={() => setQuantity(prev => prev + 1)}
                className="px-3 py-2 text-gray-600 hover:bg-gray-50 disabled:opacity-50 transition-colors"
              >
                +
              </button>
            </div>

            <span className="text-xs text-gray-500 sm:mr-auto">
              Sisa Stok: <strong className="text-gray-800">{selectedItem.stokItem}</strong> item
            </span>

            <button
              type="button"
              onClick={() => alert(`Berhasil menambahkan ${quantity}x [${product.productName} - Varian: ${selectedItem.namaItem}] ke keranjang!`)}
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold text-sm px-8 py-3 rounded-lg shadow-sm transition-all focus:outline-none"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
