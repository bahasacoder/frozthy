"use client";

import React, { useState } from "react";
import {
  Plus,
  Trash2,
  RefreshCw,
  Save,
  Copy,
  Check,
  Image as ImageIcon,
  Tag,
} from "lucide-react";
import VariantItemSection, {
  VariantRow,
}  from "./addItemsProduct";

export interface ProductFormData {
  id: number;
  idProduct: string;
  productName: string;
  productSlug: string;
  categories: string[];
  items: VariantRow[];
  hargaItem: number;
  nilaiDiskon: number;
  imagesItem: string[];
}

export default function CreateProductPage() {
  // Initial state diisi dengan contoh data Anda agar mudah diuji
  const [formData, setFormData] = useState<ProductFormData>({
    id: 6,
    idProduct: "PROD-05b38a6e-42da-4f5d-95c5-ce979ed60055",
    productName: "Anakan Ayam Kampung",
    productSlug: "anakan-ayam-kampung",
    categories: ["Ayam"],
    items: [],
    hargaItem: 20000,
    nilaiDiskon: 0,
    imagesItem: [
      "https://jsdelivr.net",
    ],
  });

  const [categoryInput, setCategoryInput] = useState("");
  const [imageUrlInput, setImageUrlInput] = useState("");
  const [submittedData, setSubmittedData] = useState<ProductFormData | null>(
    null
  );
  const [copied, setCopied] = useState(false);

  // Helper untuk membuat slug otomatis
  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  // Helper untuk generate ID acak
  const regenerateIds = () => {
    const randomUuid =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : Math.random().toString(36).substring(2, 15);
    const shortId = Math.random().toString(36).substring(2, 10);

    setFormData((prev) => ({
      ...prev,
      idProduct: `PROD-${randomUuid}`,
      idItem: `ITEM-${shortId}`,
    }));
  };

  // Handler perubahan input teks & angka
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;

    setFormData((prev) => {
      const parsedValue = type === "number" ? Number(value) : value;
      const updated = { ...prev, [name]: parsedValue };

      // Otomatis update slug saat productName diubah
      if (name === "productName") {
        updated.productSlug = generateSlug(value);
      }
      return updated;
    });
  };

  // Tambah & hapus kategori
  const handleAddCategory = () => {
    const trimmed = categoryInput.trim();
    if (trimmed && !formData.categories.includes(trimmed)) {
      setFormData((prev) => ({
        ...prev,
        categories: [...prev.categories, trimmed],
      }));
      setCategoryInput("");
    }
  };

  const handleRemoveCategory = (catToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      categories: prev.categories.filter((c) => c !== catToRemove),
    }));
  };

  // Tambah & hapus URL gambar
  const handleAddImage = () => {
    const trimmed = imageUrlInput.trim();
    if (trimmed) {
      setFormData((prev) => ({
        ...prev,
        imagesItem: [...prev.imagesItem, trimmed],
      }));
      setImageUrlInput("");
    }
  };

  const handleRemoveImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      imagesItem: prev.imagesItem.filter((_, idx) => idx !== index),
    }));
  };

  // Handler untuk menerima update array items dari child component
  const handleItemsChange = (updatedItems: VariantRow[]) => {
    setFormData((prev) => ({
      ...prev,
      items: updatedItems,
    }));
  };

  // Submit form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedData(formData);
    console.log("Saved Product Data:", formData);
  };

  // Copy JSON hasil
  const handleCopyJson = () => {
    const target = submittedData || formData;
    navigator.clipboard.writeText(JSON.stringify(target, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const hargaAkhir =
    formData.hargaItem - (formData.hargaItem * formData.nilaiDiskon) / 100;

  return (
    <div className="min-h-screen bg-zinc-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900">
              Input Data Produk Baru
            </h1>
            <p className="text-sm text-zinc-500 mt-1">
              Lengkapi detail identitas, varian item, harga, dan galeri gambar produk.
            </p>
          </div>
          <button
            type="button"
            onClick={regenerateIds}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-xl transition-colors cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            Generate ID Baru
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Kolom Kiri: Form Input */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-2 space-y-6 bg-white p-6 sm:p-8 rounded-2xl border border-zinc-200/80 shadow-sm"
          >
            {/* Section 1: Identitas Produk */}
            <div>
              <h2 className="text-base font-semibold text-zinc-900 border-b border-zinc-100 pb-3 mb-4">
                1. Identitas & Kode Produk
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-700 mb-1">
                    ID Urut (Numeric)
                  </label>
                  <input
                    type="number"
                    name="id"
                    value={formData.id}
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 py-2 text-sm border border-zinc-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-zinc-700 mb-1">
                    ID Product
                  </label>
                  <input
                    type="text"
                    name="idProduct"
                    value={formData.idProduct}
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 py-2 text-sm font-mono bg-zinc-50 border border-zinc-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-700 mb-1">
                    Nama Produk (`productName`)
                  </label>
                  <input
                    type="text"
                    name="productName"
                    value={formData.productName}
                    onChange={handleChange}
                    placeholder="Contoh: Anakan Ayam Kampung"
                    required
                    className="w-full px-3.5 py-2 text-sm border border-zinc-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-700 mb-1">
                    Product Slug (`productSlug`)
                  </label>
                  <input
                    type="text"
                    name="productSlug"
                    value={formData.productSlug}
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 py-2 text-sm bg-zinc-50 text-zinc-600 border border-zinc-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-700 mb-1">
                    Categories (pisahkan dengan koma)
                  </label>
                  <div className="flex gap-2">
                  <input
                    type="text"
                    name="categories"
                    value={categoryInput}
                    onChange={(e) => setCategoryInput(e.target.value)}
                    placeholder="Contoh: Ayam, Daging"
                    className="w-full px-3.5 py-2 text-sm bg-zinc-50 text-zinc-600 border border-zinc-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-700 mb-1">
                    Product Image (`imagesItem[0]`)
                  </label>
                  <input
                    type="file"
                    name="productImage"
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 py-2 text-sm bg-zinc-50 text-zinc-600 border border-zinc-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Detail Item & Kategori */}
                {/* Panggil Child Component di sini */}
                <VariantItemSection
                    items={formData.items}
                    onChange={handleItemsChange}
                />

        </form>
        </div>
    </div>
    </div>
    )
};