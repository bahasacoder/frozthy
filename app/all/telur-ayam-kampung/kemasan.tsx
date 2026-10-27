"use client"
import React, { useState } from 'react';

interface OptionsKemasanProps {
  onChangeHarga: (value: number) => void; 
}

export default function OptionsKemasan(
    { onChangeHarga }: OptionsKemasanProps
) {
    const [hargaPaket, setHargaPeket] = useState(15000);
    const [hargaDiskon, setHargaDiskon] = useState<number>(0);
    const [nilaiDiskon, setNilaiDiskon] = useState<number>(0);

function onPacketValue(e: React.ChangeEvent<HTMLInputElement>): void {
    const numericValue = Number(e.target.value);    
    setHargaPeket(numericValue);
    onChangeHarga(Number(numericValue));         
}

  return (
    <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase text-stone-500 tracking-wider block">Pilih Ukuran Kemasan:</label>
                        <div className="grid grid-cols-2 gap-4">
                            <label className="border-2 border-amber-800 bg-white p-4 rounded-xl flex items-center justify-between cursor-pointer">
                                <div className="text-xs">
                                    <p className="font-bold text-stone-800">Pack Ekonomis (1 Butir)</p>
                                    <p className="text-stone-400">Cocok untuk konsumsi mingguan</p>
                                </div>
                                <input 
                                    type="radio" name="pack_size" value="3000" 
                                    checked={hargaPaket === 3000}
                                    onChange={onPacketValue}
                                    className="accent-amber-800 w-4 h-4"                                     
                                />
                            </label>
                            <label className="border-2 border-amber-800 bg-white p-4 rounded-xl flex items-center justify-between cursor-pointer">
                                <div className="text-xs">
                                    <p className="font-bold text-stone-800">Pack Ekonomis (6 Butir)</p>
                                    <p className="text-stone-400">Cocok untuk konsumsi mingguan</p>
                                </div>
                                <input 
                                    type="radio" name="pack_size" value="15000" 
                                    checked={hargaPaket === 15000}
                                    onChange={onPacketValue}
                                    className="accent-amber-800 w-4 h-4" 
                                />
                            </label>
                            <label className="border-2 border-amber-800 bg-white p-4 rounded-xl flex items-center justify-between cursor-pointer">
                                <div className="text-xs">
                                    <p className="font-bold text-stone-800">Pack Ekonomis (12 Butir)</p>
                                    <p className="text-stone-400">Cocok untuk konsumsi mingguan</p>
                                </div>
                                <input 
                                    type="radio" name="pack_size" value="30000" 
                                    checked={hargaPaket === 30000}
                                    onChange={onPacketValue}
                                    className="accent-amber-800 w-4 h-4" 
                                />
                            </label>
                            <label className="border-2 border-amber-800 bg-white p-4 rounded-xl flex items-center justify-between cursor-pointer">
                                <div className="text-xs">
                                    <p className="font-bold text-stone-800">Pack Ekonomis (24 Butir)</p>
                                    <p className="text-stone-400">Cocok untuk konsumsi mingguan</p>
                                </div>
                                <input 
                                    type="radio" name="pack_size" value="50000" 
                                    checked={hargaPaket === 50000}
                                    onChange={onPacketValue}
                                    className="accent-amber-800 w-4 h-4" 
                                />
                            </label>
                        </div>
                    </div>


  )
  
}

