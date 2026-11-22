"use client";

import React, { useState } from "react";
import { Plus, Trash2, Image as ImageIcon, Tag } from "lucide-react";

export interface VariantRow {
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

interface VariantItemSectionProps {
  items: VariantRow[];
  onChange: (updatedItems: VariantRow[]) => void;
}

export default function VariantItemSection({
  items,
  onChange,
}: VariantItemSectionProps) {
  const [imageInputs, setImageInputs] = useState<{ [key: number]: string }>({});
  const [fiturInputs, setFiturInputs] = useState<{ [key: number]: string }>({});

  const generateItemId = () =>
    `ITEM-${Math.random().toString(36).substring(2, 10)}`;

  // Tambah baris varian baru
  const handleAddRow = () => {
    onChange([
      ...items,
      {
        idItem: generateItemId(),
        namaItem: "",
        imagesItem: [],
        size: "",
        unit: "ekor",
        netto: "",
        dimensi: "",
        hargaItem: 0,
        hargaDiskon: 0,
        nilaiDiskon: 0,
        stokItem: 1,
        fitur: [],
      },
    ]);
  };

  // Hapus baris tertentu
  const handleRemoveRow = (index: number) => {
    if (items.length === 1) return;
    onChange(items.filter((_, idx) => idx !== index));
  };

  // Update field tunggal + otomatis hitung hargaDiskon jika hargaItem/nilaiDiskon berubah
  const handleRowChange = (
    index: number,
    field: keyof VariantRow,
    value: string | number | string[]
  ) => {
    const updated = items.map((row, idx) => {
      if (idx !== index) return row;

      const nextRow = { ...row, [field]: value };

      if (field === "hargaItem" || field === "nilaiDiskon") {
        const harga = Number(nextRow.hargaItem) || 0;
        const diskonPersen = Number(nextRow.nilaiDiskon) || 0;
        nextRow.hargaDiskon = Math.round((harga * diskonPersen) / 100);
      }

      return nextRow;
    });
    onChange(updated);
  };

  // Handler array imagesItem per baris
  const handleAddImage = (index: number) => {
    const url = (imageInputs[index] || "").trim();
    if (!url) return;
    const currentImages = items[index].imagesItem || [];
    handleRowChange(index, "imagesItem", [...currentImages, url]);
    setImageInputs((prev) => ({ ...prev, [index]: "" }));
  };

  const handleRemoveImage = (rowIndex: number, imgIndex: number) => {
    const currentImages = items[rowIndex].imagesItem || [];
    handleRowChange(
      rowIndex,
      "imagesItem",
      currentImages.filter((_, i) => i !== imgIndex)
    );
  };

  const handleImageChange = (index: number, value: string) => {
    setImageInputs((prev) => ({ ...prev, [index]: value }));
  };

  // Handler array fitur per baris
  const handleAddFitur = (index: number) => {
    const teks = (fiturInputs[index] || "").trim();
    if (!teks) return;
    const currentFitur = items[index].fitur || [];
    if (!currentFitur.includes(teks)) {
      handleRowChange(index, "fitur", [...currentFitur, teks]);
    }
    setFiturInputs((prev) => ({ ...prev, [index]: "" }));
  };

  const handleRemoveFitur = (rowIndex: number, fiturIndex: number) => {
    const currentFitur = items[rowIndex].fitur || [];
    handleRowChange(
      rowIndex,
      "fitur",
      currentFitur.filter((_, i) => i !== fiturIndex)
    );
  };

  return (
    <div>
      <div className="flex items-center justify-between border-b border-zinc-100 pb-3 mb-4">
        <h2 className="text-base font-semibold text-zinc-900">
          2. Varian Item & Spesifikasi
        </h2>
        <button
          type="button"
          onClick={handleAddRow}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors cursor-pointer"
        >
          <Plus className="w-3.5 h-3.5" />
          Tambah Varian
        </button>
      </div>

      {/* Daftar Card Varian Item */}
      <div className="space-y-5">
        {items.map((item, index) => (
          <div
            key={item.idItem || index}
            className="p-4 sm:p-5 rounded-2xl bg-zinc-50/80 border border-zinc-200/90 space-y-4"
          >
            {/* Header Baris + Tombol Hapus */}
            <div className="flex items-center justify-between border-b border-zinc-200/70 pb-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                Varian #{index + 1}
              </span>
              {items.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveRow(index)}
                  title="Hapus baris ini"
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Hapus Varian
                </button>
              )}
            </div>

            {/* Baris 1: ID Item, Nama Item, Stok Item */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-end">
              <div className="sm:col-span-4">
                <label className="block text-xs font-medium text-zinc-700 mb-1">
                  ID Item (`idItem`)
                </label>
                <input
                  type="text"
                  value={item.idItem}
                  onChange={(e) =>
                    handleRowChange(index, "idItem", e.target.value)
                  }
                  required
                  className="w-full px-3.5 py-2 text-sm font-mono bg-white border border-zinc-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div className="sm:col-span-5">
                <label className="block text-xs font-medium text-zinc-700 mb-1">
                  Nama Varian (`namaItem`)
                </label>
                <input
                  type="text"
                  value={item.namaItem}
                  onChange={(e) =>
                    handleRowChange(index, "namaItem", e.target.value)
                  }
                  placeholder="Contoh: Spesial / Reguler"
                  required
                  className="w-full px-3.5 py-2 text-sm bg-white border border-zinc-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div className="sm:col-span-3">
                <label className="block text-xs font-medium text-zinc-700 mb-1">
                  Stok Item (`stokItem`)
                </label>
                <input
                  type="number"
                  min={0}
                  value={item.stokItem}
                  onChange={(e) =>
                    handleRowChange(index, "stokItem", Number(e.target.value))
                  }
                  required
                  className="w-full px-3 py-2 text-sm bg-white border border-zinc-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
            </div>

            {/* Baris 2: Size, Unit, Netto, Dimensi */}
            <div className="grid grid-cols-2 sm:grid-cols-12 gap-3">
              <div className="col-span-1 sm:col-span-3">
                <label className="block text-xs font-medium text-zinc-700 mb-1">
                  Size (`size`)
                </label>
                <input
                  type="text"
                  value={item.size}
                  onChange={(e) =>
                    handleRowChange(index, "size", e.target.value)
                  }
                  placeholder="1200"
                  className="w-full px-3 py-2 text-sm bg-white border border-zinc-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div className="col-span-1 sm:col-span-2">
                <label className="block text-xs font-medium text-zinc-700 mb-1">
                  Unit (`unit`)
                </label>
                <input
                  type="text"
                  value={item.unit}
                  onChange={(e) =>
                    handleRowChange(index, "unit", e.target.value)
                  }
                  placeholder="ekor / gr"
                  className="w-full px-3 py-2 text-sm bg-white border border-zinc-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div className="col-span-1 sm:col-span-3">
                <label className="block text-xs font-medium text-zinc-700 mb-1">
                  Netto (`netto`)
                </label>
                <input
                  type="text"
                  value={item.netto}
                  onChange={(e) =>
                    handleRowChange(index, "netto", e.target.value)
                  }
                  placeholder="999"
                  className="w-full px-3 py-2 text-sm bg-white border border-zinc-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div className="col-span-1 sm:col-span-4">
                <label className="block text-xs font-medium text-zinc-700 mb-1">
                  Dimensi (`dimensi`)
                </label>
                <input
                  type="text"
                  value={item.dimensi}
                  onChange={(e) =>
                    handleRowChange(index, "dimensi", e.target.value)
                  }
                  placeholder="25cm x 25cm x 25cm"
                  className="w-full px-3 py-2 text-sm bg-white border border-zinc-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
            </div>

            {/* Baris 3: Harga Item, Nilai Diskon (%), Harga Diskon (Rp) */}
            <div className="grid grid-cols-2 sm:grid-cols-12 gap-3">
              <div className="col-span-1 sm:col-span-4">
                <label className="block text-xs font-medium text-zinc-700 mb-1">
                    Harga Item (`hargaItem`)
                </label>
                <input
                  type="number"
                    min={0}
                    value={item.hargaItem}
                    onChange={(e) =>
                      handleRowChange(index, "hargaItem", parseFloat(e.target.value) || 0)
                    }
                    placeholder="0"
                    className="w-full px-3 py-2 text-sm bg-white border border-zinc-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
                <div className="col-span-1 sm:col-span-4">
                <label className="block text-xs font-medium text-zinc-700 mb-1">
                    Nilai Diskon (%) (`nilaiDiskon`)
                </label>
                <input
                  type="number"
                  min={0}
                    max={100}
                    value={item.nilaiDiskon}
                    onChange={(e) =>
                      handleRowChange(index, "nilaiDiskon", parseFloat(e.target.value) || 0)
                    }
                    placeholder="0"
                    className="w-full px-3 py-2 text-sm bg-white border border-zinc-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
                <div className="col-span-1 sm:col-span-4">
                <label className="block text-xs font-medium text-zinc-700 mb-1">
                    Harga Diskon (Rp) (`hargaDiskon`)
                </label>
                <input
                  type="number"
                  min={0}
                    value={item.hargaDiskon}
                    onChange={(e) =>
                      handleRowChange(index, "hargaDiskon", parseFloat(e.target.value) || 0)
                    }
                    placeholder="0"
                    className="w-full px-3 py-2 text-sm bg-white border border-zinc-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
            </div>
            <ImageIcon className="w-4 h-4 text-zinc-400" />
            <div className="space-y-2">
              <label className="block text-xs font-medium text-zinc-700 mb-1">  
                Gambar Produk (`imagesItem`)
              </label>
              <div className="flex gap-2"> 
                <ImageIcon className="w-4 h-4 text-zinc-400" />
                <input
                  type="text"
                    value={imageInputs[index] || ""}    
                    onChange={(e) => handleImageChange(index, e.target.value)}
                    placeholder="URL Gambar"
                    className="w-full px-3 py-2 text-sm bg-white border border-zinc-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

