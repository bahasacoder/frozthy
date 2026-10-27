import React from 'react';

// 1. Definisikan interface props sesuai state dari komponen induk
interface InvoiceProps {
  hargaItem: number;    // Nilai Paket (cth: 50000)
  nilaiDiskon: number;  // Persentase Diskon (cth: 0.04)
  hargaDiskon: number;  // Nominal Potongan Diskon (cth: 2000)
}



function InvoiceTru({ hargaItem, nilaiDiskon, hargaDiskon }: InvoiceProps) {
  // 2. Logika Kalkulasi Otomatis Berdasarkan Props
  const subtotal = hargaItem;
  const totalSetelahDiskon = subtotal - hargaDiskon;
  const pajakPPN = totalSetelahDiskon * 0.11; // PPN 11%
  const totalTagihan = totalSetelahDiskon + pajakPPN;

  // Mendapatkan tanggal hari ini secara dinamis
  const tanggalHariIni = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-slate-100">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-100 pb-8 gap-6">
        <div>
          <div className="text-2xl font-black text-slate-800 tracking-tight flex items-center gap-2">
            <span className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white text-lg font-bold">⚡</span>
            TokoKu Global
          </div>
          <p className="text-xs text-slate-400 mt-1.5 font-medium tracking-wide">Platform Solusi Bisnis Digital</p>
        </div>
        <div className="text-left sm:text-right">
          <h1 className="text-2xl font-black text-blue-600 uppercase tracking-wider">Invoice</h1>
          <p className="text-sm font-bold text-slate-700 mt-1">#INV-{Date.now().toString().slice(-6)}</p>
        </div>
      </div>

      {/* Info Pengirim & Penerima */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-8 text-sm">
        <div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Dari:</span>
          <h3 className="font-extrabold text-slate-800 text-base">PT TokoKu Global Nusantara</h3>
          <p className="text-slate-500 mt-1 leading-relaxed">Pakuwon Tower Kav. 89, Jakarta Selatan</p>
        </div>
        <div className="sm:text-right">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Ditujukan Kepada:</span>
          <h3 className="font-extrabold text-slate-800 text-base">Pelanggan Setia</h3>
          <p className="text-slate-500 mt-1 leading-relaxed">Sistem Anggota Premium TokoKu</p>
        </div>

        {/* Status Logistik */}
        <div className="sm:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100/80 mt-2">
          <div>
            <span className="block text-xs text-slate-400 font-semibold uppercase tracking-wider mb-0.5">Tanggal Nota</span>
            <span className="font-bold text-slate-700">{tanggalHariIni}</span>
          </div>
          <div>
            <span className="block text-xs text-slate-400 font-semibold uppercase tracking-wider mb-0.5">Metode</span>
            <span className="font-bold text-slate-700">Instant Payment</span>
          </div>
          <div className="sm:text-right">
            <span className="block text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Status</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">Menunggu Pembayaran</span>
          </div>
        </div>
      </div>

      {/* Tabel Rincian Pembelian */}
      <div className="overflow-x-auto border border-slate-100 rounded-xl mt-8">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/70 border-b border-slate-100 text-xs font-bold uppercase tracking-wider text-slate-400">
              <th className="py-4 px-4">Deskripsi Layanan</th>
              <th className="py-4 px-4 text-center">Jumlah</th>
              <th className="py-4 px-4 text-right">Harga Satuan</th>
              <th className="py-4 px-4 text-right">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm text-slate-600">
            <tr>
              <td className="py-5 px-4">
                <span className="font-bold text-slate-800 block">Paket Keanggotaan Premium</span>
                <span className="text-xs text-slate-400 block mt-1 leading-relaxed">Aktivasi fitur premium database awan otomatis</span>
              </td>
              <td className="py-5 px-4 text-center font-bold text-slate-700">1</td>
              <td className="py-5 px-4 text-right font-medium text-slate-700">Rp {subtotal.toLocaleString('id-ID')}</td>
              <td className="py-5 px-4 text-right font-bold text-slate-800">Rp {subtotal.toLocaleString('id-ID')}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Perhitungan Biaya Akhir */}
      <div className="mt-8 flex justify-end">
        <div className="w-full sm:w-72 space-y-3.5 text-sm">
          <div className="flex justify-between text-slate-500 font-medium">
            <span>Subtotal</span>
            <span className="text-slate-800 font-semibold">Rp {subtotal.toLocaleString('id-ID')}</span>
          </div>
          
          {hargaDiskon > 0 && (
            <div className="flex justify-between text-rose-600 font-medium">
              <span>Diskon Promosi ({nilaiDiskon * 100}%)</span>
              <span className="font-bold">- Rp {hargaDiskon.toLocaleString('id-ID')}</span>
            </div>
          )}
          
          <div className="flex justify-between text-slate-500 font-medium border-b border-slate-100 pb-4">
            <span>Pajak PPN (11%)</span>
            <span className="text-slate-800 font-semibold">Rp {pajakPPN.toLocaleString('id-ID')}</span>
          </div>
          <div className="flex justify-between text-base font-black text-slate-800 pt-1">
            <span>Total Tagihan</span>
            <span className="text-blue-600 text-lg">Rp {totalTagihan.toLocaleString('id-ID')}</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default InvoiceTru;