"use client"
import React, { useState } from 'react';

interface OptionsKemasanProps {
  onChangeHarga: (value: number) => void; 
}

export default function OptionsKemasan(
    { onChangeHarga }: OptionsKemasanProps
) {
    const [hargaItem, setHargaItem] = useState(0);
    const [hargaDiskon, setHargaDiskon] = useState<number>(0);
    const [nilaiDiskon, setNilaiDiskon] = useState<number>(0);

function handleHargaSelected(harga: number): void {
  
  setSelectedHarga(harga);
  onChangeHarga(harga);
}

const availableHarga = [35000, 55000, 75000, 90000];
//const [selectedHarga, setSelectedHarga]= useState<number | null>(null);
const [selectedHarga, setSelectedHarga]= useState(55000);



  return (
    <div className="space-y-3">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-gray-900 uppercase">Pilih Ukuran (EU Size):</span>
                <button className="text-blue-600 hover:underline">Panduan Ukuran</button>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                {availableHarga.map((hargaItem, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleHargaSelected(hargaItem)}
                    className={`py-2.5 text-xs font-bold rounded-lg border text-center transition ${
                      selectedHarga === hargaItem
                        ? 'bg-gray-900 text-white border-gray-900'
                        : 'bg-white text-gray-800 border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    {hargaItem}
                  </button>
                ))}
              </div>
            </div>

  )
  
}

