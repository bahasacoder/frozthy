"use client"
import React from 'react';

// 1. Definisikan tipe data props yang diterima dari komponen Induk
interface HargaItemProps {
  hargaItem: number;
  nilaiDiskon: number;
  hargaDiskon: number;
  // Jika komponen anak juga butuh mengubah data, sertakan fungsi set-nya:
  setHargaItem?: React.Dispatch<React.SetStateAction<number>>;
}

// 2. Terima props di dalam parameter komponen
export default function HargaItem({ hargaItem, nilaiDiskon, hargaDiskon }: HargaItemProps) {
    // Hitung total akhir (Harga Paket - Nominal Diskon)
    const totalBayar = hargaItem - hargaDiskon;

    return (
        <div className="bg-white p-4 rounded-xl border border-amber-100 flex items-center justify-between">
                    <div>
                        <span className="text-xs text-stone-400 block">Harga Spesial Panen:</span>
                        <span className="text-3xl font-serif font-bold text-amber-900">Rp {totalBayar}</span>
                        <span className="text-xs text-stone-400 line-through ml-2">Rp {hargaItem}</span>
                    </div>
                    <span className="text-xs font-medium text-amber-800 bg-amber-100 px-3 py-1 rounded-md">-{nilaiDiskon*100} % Hemat</span>
                </div>

    )
}