"use client"
import React from "react";
import { useAppSelector } from '@/lib/hooks';

export default function InvoicingPage() {

  return (
      <div className="bg-slate-50 py-6 px-4 sm:py-12 sm:px-6 lg:px-8 font-sans antialiased text-slate-600">
         <div className="max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-slate-100 invoice-card">
            
            {/*  <!-- Bagian Tombol Aksi (Akan hilang otomatis saat cetak/PDF) -->  */}
            <div className="no-print flex flex-wrap justify-end gap-3 mb-8">
              <button onClick={() => window.print()} className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-xl transition-all shadow-sm hover:shadow flex items-center gap-2">
                <svg xmlns="http://w3.org" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
                Cetak / Cetak PDF
              </button>
            </div>

            {/*  <!-- Header: Identitas Bisnis & Status Dokumen -->  */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-100 pb-8 gap-6">
              <div>
                <div className="text-2xl font-black text-slate-800 tracking-tight flex items-center gap-2">
                  <span className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-sm shadow-blue-300">⚡</span>
                  TokoKu Global
                </div>
                <p className="text-xs text-slate-400 mt-1.5 font-medium tracking-wide">Platform Solusi Bisnis Digital</p>
              </div>
              <div className="text-left sm:text-right">
                <h1 className="text-2xl font-black text-blue-600 uppercase tracking-wider">Invoice</h1>
                <p className="text-sm font-bold text-slate-700 mt-1">#INV-20261020</p>
              </div>
            </div>

            {/* <!-- Informasi Detail: Pengirim, Penerima & Waktu -->  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-8 text-sm">
              {/*  <!-- Info Pengirim -->  */}
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Dari:</span>
                <h3 className="font-extrabold text-slate-800 text-base">PT TokoKu Global Nusantara</h3>
                <p className="text-slate-500 mt-1 leading-relaxed">Pakuwon Tower Kav. 89, Lantai 12<br />Kuningan, Jakarta Selatan, 12960</p>
                <p className="text-blue-600 font-medium mt-1">billing@tokoku.com</p>
              </div>
              
              {/*  <!-- Info Penerima -->  */}
              <div className="sm:text-right">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Ditujukan Kepada:</span>
                <h3 className="font-extrabold text-slate-800 text-base">Rian Andriana</h3>
                <p className="text-slate-500 mt-1 leading-relaxed">Apartemen Sudirman Heights, Tower B-32<br />Kec. Tanah Abang, Jakarta Pusat, 10220</p>
                <p className="text-slate-700 font-medium mt-1">rian.andriana@email.com</p>
              </div>

              {/*  <!-- Blok Informasi Logistik Singkat -->  */}
              <div className="sm:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100/80 mt-2">
                <div>
                  <span className="block text-xs text-slate-400 font-semibold uppercase tracking-wider mb-0.5">Tanggal Nota</span>
                  <span className="font-bold text-slate-700">20 Okt 2026</span>
                </div>
                <div>
                  <span className="block text-xs text-slate-400 font-semibold uppercase tracking-wider mb-0.5">Jatuh Tempo</span>
                  <span className="font-bold text-slate-700">27 Okt 2026</span>
                </div>
                <div>
                  <span className="block text-xs text-slate-400 font-semibold uppercase tracking-wider mb-0.5">Metode</span>
                  <span className="font-bold text-slate-700">Virtual Account</span>
                </div>
                <div className="sm:text-right">
                  <span className="block text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Status Tagihan</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">Belum Dibayar</span>
                </div>
              </div>
            </div>

            {/*  <!-- Tabel Rincian Pembelian -->  */}
            <div className="overflow-x-auto border border-slate-100 rounded-xl mt-8">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/70 border-b border-slate-100 text-xs font-bold uppercase tracking-wider text-slate-400">
                    <th className="py-4 px-4">Deskripsi Produk / Layanan</th>
                    <th className="py-4 px-4 text-center">Jumlah</th>
                    <th className="py-4 px-4 text-right">Harga Satuan</th>
                    <th className="py-4 px-4 text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm text-slate-600">
                  <tr>
                    <td className="py-5 px-4 max-w-xs sm:max-w-none">
                      <span className="font-bold text-slate-800 block">Paket Premium Cloud Database</span>
                      <span className="text-xs text-slate-400 block mt-1 leading-relaxed">Kapasitas penyimpanan 50GB dengan enkripsi end-to-end (1 Bulan)</span>
                    </td>
                    <td className="py-5 px-4 text-center font-bold text-slate-700">1</td>
                    <td className="py-5 px-4 text-right font-medium text-slate-700">Rp 50.000</td>
                    <td className="py-5 px-4 text-right font-bold text-slate-800">Rp 50.000</td>
                  </tr>
                  <tr>
                    <td className="py-5 px-4">
                      <span className="font-bold text-slate-800 block">Biaya Penanganan Sistem</span>
                      <span className="text-xs text-slate-400 block mt-1 leading-relaxed">Proteksi server cadangan otomatis untuk keandalan data</span>
                    </td>
                    <td className="py-5 px-4 text-center font-bold text-slate-700">1</td>
                    <td className="py-5 px-4 text-right font-medium text-slate-700">Rp 3.000</td>
                    <td className="py-5 px-4 text-right font-bold text-slate-800">Rp 3.000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* <!-- Kalkulasi Kalkulator Biaya -->  */}
            <div className="mt-8 flex justify-end">
              <div className="w-full sm:w-72 space-y-3.5 text-sm">
                <div className="flex justify-between text-slate-500 font-medium">
                  <span>Subtotal</span>
                  <span className="text-slate-800 font-semibold">Rp 53.000</span>
                </div>
                <div className="flex justify-between text-rose-600 font-medium">
                  <span>Diskon Promosi (4%)</span>
                  <span className="font-bold">- Rp 2.120</span>
                </div>
                <div className="flex justify-between text-slate-500 font-medium border-b border-slate-100 pb-4">
                  <span>Pajak PPN (11%)</span>
                  <span className="text-slate-800 font-semibold">Rp 5.597</span>
                </div>
                <div className="flex justify-between text-base font-black text-slate-800 pt-1">
                  <span>Total Tagihan</span>
                  <span className="text-blue-600 text-lg">Rp 56.477</span>
                </div>
              </div>
            </div>

            {/*  <!-- Kaki Dokumen: Panduan Transfer & Penutup -->  */}
            <div className="mt-12 pt-6 border-t border-slate-100 text-xs text-slate-400 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-slate-500 uppercase tracking-widest mb-1.5">Instruksi Pembayaran:</h4>
                <p className="text-slate-600 font-bold">Bank Mandiri (VA): 8829-012-331-291</p>
                <p className="text-slate-500 mt-0.5">Atas nama: PT TokoKu Global Nusantara</p>
              </div>
              <div className="sm:text-right flex flex-col justify-end">
                <p className="italic text-slate-400">"Terima kasih atas kerja sama dan kepercayaan Anda."</p>
                <p className="mt-1 font-bold text-slate-500">Divisi Keuangan TokoKu</p>
              </div>
            </div>

          </div>  
        
      </div>
  );
}