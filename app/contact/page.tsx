"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";

interface ContactPageProps {
  // Opsional: bisa menerima status tema dari global state / Redux Anda
  initialDarkMode?: boolean;
}


export default function ContactPage({ initialDarkMode = false }: ContactPageProps) {
  // Ganti dengan nomor WhatsApp admin toko Anda (gunakan kode negara 62 tanpa tanda +)
  const WHATSAPP_NUMBER = "6281268052229";

  // State untuk mengatur mode Light / Night
  // const [isDarkMode, setIsDarkMode] = useState<boolean>(initialDarkMode);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  const [formData, setFormData] = useState({
    name: "",
    orderId: "",
    topic: "Tanya Stok & Spesifikasi Produk",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const textLines = [
      `Halo Admin, saya ingin menghubungi layanan pelanggan:`,
      ``,
      `*Nama:* ${formData.name}`,
      `*Topik:* ${formData.topic}`,
      formData.orderId ? `*No. Pesanan:* ${formData.orderId}` : null,
      `*Pesan:*`,
      `${formData.message}`,
    ].filter(Boolean);

    const encodedMessage = encodeURIComponent(textLines.join("\n"));
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };


  return (
    <div className={`min-h-screen font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden transition-colors duration-700 ${
      isDarkMode ? 'bg-[#0b0c10] text-gray-100' : 'bg-gray-50 text-gray-900'
    }`}>
      
      
      {/* 1. NAVIGATION BAR */}
      <Navbar />
      {/* 2. CINEMATIC HERO SECTION */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
         {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span
            className={`inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full mb-3 ${
              isDarkMode
                ? "bg-emerald-950 text-emerald-400 border border-emerald-800"
                : "bg-emerald-100 text-emerald-700"
            }`}
          >
            Layanan Pelanggan
          </span>
          <h1
            className={`text-3xl sm:text-4xl font-bold tracking-tight ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Ada yang Bisa Kami Bantu?
          </h1>
          <p
            className={`mt-3 text-base ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Butuh bantuan memilih produk, cek status pengiriman, atau konsultasi pesanan? Hubungi tim kami langsung melalui WhatsApp untuk respon lebih cepat.
          </p>
        </div>
      </header>

      {/* 3. ETALASE PRODUK UTAMA */}
      <main className="max-w-7xl mx-auto px-6 py-24 space-y-16">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Kolom Kiri: Info Layanan Pelanggan E-Commerce */}
          <div
            className={`rounded-2xl p-8 flex flex-col justify-between transition-colors ${
              isDarkMode
                ? "bg-gray-900 border border-gray-800 text-white"
                : "bg-gray-900 text-white shadow-sm"
            }`}
          >
            <div>
              <h2 className="text-xl font-semibold mb-2">Informasi Toko</h2>  
              <p className="text-gray-300 text-sm mb-8">
                Tim Customer Service kami siap melayani pertanyaan Anda selama jam operasional berikut.
              </p>

              <div className="space-y-6 text-sm">
                <div>
                  <p className="text-gray-400 font-medium uppercase tracking-wider text-xs">
                    WhatsApp Admin (Fast Response)
                  </p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-base font-semibold text-emerald-400 hover:text-emerald-300 transition"
                  >
                    +62 812-6805-2229
                  </a>
                </div>

                <div>
                  <p className="text-gray-400 font-medium uppercase tracking-wider text-xs">
                    Jam Operasional CS
                  </p>
                  <p className="mt-1 text-gray-200">
                    Senin – Sabtu: 08.30 – 20.00 WITA
                  </p>
                  <p className="text-gray-400">
                    Minggu & Hari Libur: Slow Response
                  </p>
                </div>

                <div>
                  <p className="text-gray-400 font-medium uppercase tracking-wider text-xs">
                    Email Resmi & Kerja Sama
                  </p>
                  <a
                    href="mailto:officialpasarbone@gmail.com"
                    className="mt-1 block text-gray-200 hover:text-white transition"
                  >
                    officialpasarbone@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-gray-400 font-medium uppercase tracking-wider text-xs">
                    Lokasi Pengiriman / Gudang
                  </p>
                  <p className="mt-1 text-gray-200 leading-relaxed">
                    Jl. Poros Utama No. 45, Makassar, Sulawesi Selatan
                  </p>
                </div>
              </div>
            </div>

            {/* Info Jaminan Singkat */}
            <div className="mt-10 pt-6 border-t border-gray-800 text-xs text-gray-400 space-y-2">
              <p>✓ Garansi tukar ukuran / produk cacat</p>
              <p>✓ Pengiriman setiap hari kerja (Cut-off 15.00 WITA)</p>
            </div>
          </div>

          {/* Kolom Kanan: Form Otomatis ke WhatsApp */}
          <div
            className={`lg:col-span-2 rounded-2xl p-8 sm:p-10 transition-colors border ${
              isDarkMode
                ? "bg-gray-900 border-gray-800"
                : "bg-white border-gray-100 shadow-sm"
            }`}
          >
            <h2
              className={`text-xl font-semibold mb-2 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Kirim Pesan ke WhatsApp
            </h2>
            <p
              className={`text-sm mb-6 ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Isi formulir singkat di bawah ini agar pesan Anda otomatis terformat saat terhubung ke WhatsApp Admin.
            </p>

            <form onSubmit={handleSendToWhatsApp} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium mb-1.5 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Nama Anda <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Contoh: Budi Santoso"
                    className={`w-full rounded-lg border px-4 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors ${
                      isDarkMode
                        ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
                    }`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="orderId"
                    className={`block text-sm font-medium mb-1.5 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Nomor Pesanan{" "}
                    <span className="text-gray-400 font-normal">(Opsional)</span>
                  </label>
                  <input
                    type="text"
                    id="orderId"
                    name="orderId"
                    value={formData.orderId}
                    onChange={handleChange}
                    placeholder="Contoh: #INV-202601"
                    className={`w-full rounded-lg border px-4 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors ${
                      isDarkMode
                        ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
                    }`}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="topic"
                  className={`block text-sm font-medium mb-1.5 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Keperluan / Topik
                </label>
                <select
                  id="topic"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  className={`w-full rounded-lg border px-4 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors ${
                    isDarkMode
                      ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
                  }`}
                >
                  <option value="Tanya Stok & Spesifikasi Produk">
                    Tanya Stok & Spesifikasi Produk
                  </option>
                  <option value="Konsultasi Pemilihan Produk">
                    Konsultasi Pemilihan Produk
                  </option>
                  <option value="Cek Status Pengiriman">
                    Cek Status Pengiriman
                  </option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-1.5 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Pesan Anda <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tulis pesan atau pertanyaan Anda di sini..."
                  rows={4}
                  className={`w-full rounded-lg border px-4 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors ${
                    isDarkMode
                      ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
                  }`}
                ></textarea>
              </div>

              <button
                type="submit"
                className={`w-full py-3 rounded-lg font-semibold text-sm transition-colors ${
                  isDarkMode
                    ? "bg-emerald-600 hover:bg-emerald-500 text-white"
                    : "bg-emerald-500 hover:bg-emerald-600 text-white"
                }`}
              >
                Kirim Pesan ke WhatsApp
              </button>
            </form>
          </div>
        </div>
        
      </main>
    </div>
  );
}