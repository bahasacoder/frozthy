"use client";

import React, { useState } from "react";
import {
  Plus,
  Trash2,
  Package,
  Layers,
  Tag,
  Image as ImageIcon,
  Save,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

interface ProductItem {
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

interface ProductFormData {
  idProduct: string;
  productName: string;
  productSlug: string;
  productImages: string[];
  categories: string[];
  teaser: string;
  descriptions: string;
  specification: string;
  satuan: string;
  productItems: ProductItem[];
}

const generateUUID = (prefix: string) => {
  const randomStr = Math.random().toString(36).substring(2, 10);
  return `${prefix}-${randomStr}`;
};

export default function ProductFormPage() {
  const [formData, setFormData] = useState<ProductFormData>({
    idProduct: `PROD-${crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 15)}`,
    productName: "",
    productSlug: "",
    productImages: [""],
    categories: [],
    teaser: "",
    descriptions: "",
    specification: "",
    satuan: "ekor",
    productItems: [
      {
        idItem: generateUUID("ITEM"),
        namaItem: "",
        imagesItem: [""],
        size: "",
        unit: "ekor",
        netto: "",
        dimensi: "",
        hargaItem: 0,
        hargaDiskon: 0,
        nilaiDiskon: 0,
        stokItem: 0,
        fitur: [],
      },
    ],
  });

  const [categoryInput, setCategoryInput] = useState("");
  const [fiturInputs, setFiturInputs] = useState<{ [key: number]: string }>({});
  const [submittedJson, setSubmittedJson] = useState<string | null>(null);

  // Otomatis membuat slug dari nama produk
  const handleNameChange = (name: string) => {
    const slug = name
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

    setFormData((prev) => ({
      ...prev,
      productName: name,
      productSlug: slug,
    }));
  };

  // Kelola Array Gambar Produk Utama
  const handleProductImageChange = (index: number, value: string) => {
    const updated = [...formData.productImages];
    updated[index] = value;
    setFormData({ ...formData, productImages: updated });
  };

  const addProductImage = () => {
    setFormData({ ...formData, productImages: [...formData.productImages, ""] });
  };

  const removeProductImage = (index: number) => {
    const updated = formData.productImages.filter((_, i) => i !== index);
    setFormData({ ...formData, productImages: updated.length ? updated : [""] });
  };

  // Kelola Kategori (Tag)
  const handleAddCategory = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && categoryInput.trim()) {
      e.preventDefault();
      if (!formData.categories.includes(categoryInput.trim().toLowerCase())) {
        setFormData({
          ...formData,
          categories: [...formData.categories, categoryInput.trim().toLowerCase()],
        });
      }
      setCategoryInput("");
    }
  };

  const removeCategory = (cat: string) => {
    setFormData({
      ...formData,
      categories: formData.categories.filter((c) => c !== cat),
    });
  };

  // Kelola Varian / Product Items
  const addProductItem = () => {
    setFormData({
      ...formData,
      productItems: [
        ...formData.productItems,
        {
          idItem: generateUUID("ITEM"),
          namaItem: "",
          imagesItem: [""],
          size: "",
          unit: formData.satuan || "ekor",
          netto: "",
          dimensi: "",
          hargaItem: 0,
          hargaDiskon: 0,
          nilaiDiskon: 0,
          stokItem: 0,
          fitur: [],
        },
      ],
    });
  };

  const removeProductItem = (index: number) => {
    if (formData.productItems.length === 1) return;
    const updated = formData.productItems.filter((_, i) => i !== index);
    setFormData({ ...formData, productItems: updated });
  };

  const updateProductItem = (
    index: number,
    field: keyof ProductItem,
    value: string | number | string[]
  ) => {
    const updated = [...formData.productItems];
    updated[index] = { ...updated[index], [field]: value };

    // Otomatis hitung hargaDiskon jika hargaItem atau nilaiDiskon berubah
    if (field === "hargaItem" || field === "nilaiDiskon") {
      const harga = Number(updated[index].hargaItem) || 0;
      const diskonPersen = Number(updated[index].nilaiDiskon) || 0;
      updated[index].hargaDiskon =
        diskonPersen > 0 ? Math.round(harga - (harga * diskonPersen) / 100) : 0;
    }

    setFormData({ ...formData, productItems: updated });
  };

  // Kelola Gambar per Varian Item
  const handleItemImageChange = (itemIdx: number, imgIdx: number, val: string) => {
    const updated = [...formData.productItems];
    updated[itemIdx].imagesItem[imgIdx] = val;
    setFormData({ ...formData, productItems: updated });
  };

  const addItemImage = (itemIdx: number) => {
    const updated = [...formData.productItems];
    updated[itemIdx].imagesItem.push("");
    setFormData({ ...formData, productItems: updated });
  };

  const removeItemImage = (itemIdx: number, imgIdx: number) => {
    const updated = [...formData.productItems];
    const filtered = updated[itemIdx].imagesItem.filter((_, i) => i !== imgIdx);
    updated[itemIdx].imagesItem = filtered.length ? filtered : [""];
    setFormData({ ...formData, productItems: updated });
  };

  // Kelola Fitur per Varian Item
  const handleAddFitur = (
    e: React.KeyboardEvent<HTMLInputElement>,
    itemIdx: number
  ) => {
    const val = (fiturInputs[itemIdx] || "").trim();
    if (e.key === "Enter" && val) {
      e.preventDefault();
      const updated = [...formData.productItems];
      if (!updated[itemIdx].fitur.includes(val)) {
        updated[itemIdx].fitur.push(val);
        setFormData({ ...formData, productItems: updated });
      }
      setFiturInputs({ ...fiturInputs, [itemIdx]: "" });
    }
  };

  const removeFitur = (itemIdx: number, fiturVal: string) => {
    const updated = [...formData.productItems];
    updated[itemIdx].fitur = updated[itemIdx].fitur.filter((f) => f !== fiturVal);
    setFormData({ ...formData, productItems: updated });
  };

  // Submit Form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanedData: ProductFormData = {
      ...formData,
      productImages: formData.productImages.filter((img) => img.trim() !== ""),
      productItems: formData.productItems.map((item) => ({
        ...item,
        imagesItem: item.imagesItem.filter((img) => img.trim() !== ""),
      })),
    };

    setSubmittedJson(JSON.stringify(cleanedData, null, 2));
  };

  return (
    <div className="min-h-screen bg-zinc-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900 flex items-center gap-2.5">
              <Package className="w-7 h-7 text-indigo-600" />
              Tambah Produk Baru
            </h1>
            <p className="text-sm text-zinc-500 mt-1">
              Lengkapi informasi utama produk beserta detail varian ukurannya.
            </p>
          </div>
          <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-mono bg-white border border-zinc-200 text-zinc-600 shadow-xs">
            ID: {formData.idProduct}
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* BAGIAN 1: INFORMASI DASAR PRODUK */}
          <div className="bg-white rounded-2xl border border-zinc-200/80 shadow-xs p-6 sm:p-8 space-y-6">
            <div className="border-b border-zinc-100 pb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-600" />
              <h2 className="text-lg font-semibold text-zinc-900">
                Informasi Utama Produk
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                  Nama Produk <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Ayam Kampung Pejantan"
                  value={formData.productName}
                  onChange={(e) => handleNameChange(e.target.value)}
                  className="w-full rounded-xl border border-zinc-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-hidden transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                  Slug URL
                </label>
                <input
                  type="text"
                  required
                  placeholder="ayam-kampung-pejantan"
                  value={formData.productSlug}
                  onChange={(e) =>
                    setFormData({ ...formData, productSlug: e.target.value })
                  }
                  className="w-full rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-hidden transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                  Satuan Dasar
                </label>
                <input
                  type="text"
                    placeholder="Contoh: ekor, kg, liter"
                    value={formData.satuan}
                    onChange={(e) =>    
setFormData({ ...formData, satuan: e.target.value })}
                    className="w-full rounded-xl border border-zinc-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-hidden transition"
                  />
                </div>
                <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1.5">  
                    Teaser Singkat
                        
                        </label> 
                        <input
                          type="text"
                          placeholder="Contoh: Produk terbaik di kota ini"
                          value={formData.teaser}
                          onChange={(e) => setFormData({ ...formData, teaser: e.target.value })}
                          className="w-full rounded-xl border border-zinc-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-hidden transition"
                        />
                </div>
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <p className="text-sm text-green-600 mt-1">
                  Semua informasi utama produk telah diisi.
                  <CheckCircle2 className="w-4 h-4 inline-block ml-1" />
                </p>
              </div>
        </div>
        </form>
        </div>
        </div>
  )
}
