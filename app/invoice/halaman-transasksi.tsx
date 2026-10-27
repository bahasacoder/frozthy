import React, { useState } from 'react';
import InvoiceTru from './invoice-tiga'; // Import file di atas

export default function HalamanTransaksi() {
  const [hargaItem, setHargaItem] = useState<number>(0);
  const [nilaiDiskon, setNilaiDiskon] = useState<number>(0);
  const [hargaDiskon, setHargaDiskon] = useState<number>(0);

  // Fungsi pembaca paket yang sudah diperbaiki sebelumnya
  const handleHargaFromPacket = (hargaPaket: number) => {
    const harga = Number(hargaPaket);
    let diskon = 0;

    switch (harga) {
      case 3000: diskon = 0.01; break;
      case 5000: diskon = 0.02; break;
      case 30000: diskon = 0.03; break;
      case 50000: diskon = 0.04; break;
      default: diskon = 0; break;
    }

    setHargaItem(harga);
    setNilaiDiskon(diskon);
    setHargaDiskon(harga * diskon);
  };

  return (
    <div className="p-8 bg-slate-50 min-h-screen space-y-6">
      <div className="flex gap-4 justify-center">
        <button className="bg-white p-3 rounded-lg border shadow-sm" onClick={() => handleHargaFromPacket(30000)}>Paket 30rb</button>
        <button className="bg-white p-3 rounded-lg border shadow-sm" onClick={() => handleHargaFromPacket(50000)}>Paket 50rb</button>
      </div>

      {/* Render komponen Invoice secara reaktif */}
      <InvoiceTru 
        hargaItem={hargaItem} 
        nilaiDiskon={nilaiDiskon} 
        hargaDiskon={hargaDiskon} 
      />
    </div>
  );
}
