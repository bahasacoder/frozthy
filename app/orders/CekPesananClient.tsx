"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

const WHATSAPP_NUMBER = "6281268052229";

// Format yang didukung: "2026:11:28-21:23-FRZ-a2sd8d" atau kode pendek "FRZ-a2sd8d"
const ORDER_CODE_REGEX =
  /^(\d{4}:\d{2}:\d{2}-\d{2}:\d{2}-)?FRZ-[a-zA-Z0-9]{4,8}$/i;

interface LocalOrder {
  orderCode: string;
  customerName?: string;
  customerAddress?: string;
  grandTotal?: number;
  createdAt?: string;
  itemsCount?: number;
}

const DELIVERY_STEPS = [
  {
    step: 1,
    title: "Konfirmasi Order & Cek Stok",
    time: "0 – 15 Menit",
    desc: "Admin Frozthy memverifikasi ketersediaan menu sehat, metode bayar (Transfer/QRIS/COD Sibulue), dan rute kurir.",
  },
  {
    step: 2,
    title: "Pengemasan Suhu Beku (-18°C)",
    time: "15 – 30 Menit",
    desc: "Produk diambil langsung dari freezer penyimpanan, disegel higienis, lalu dimasukkan ke cooler box / thermal bag + ice gel.",
  },
  {
    step: 3,
    title: "Pengantaran Kurir Terjadwal",
    time: "30 Menit – 3 Jam (Area Bone)",
    desc: "Kurir lokal mengantar pesanan ke alamat tujuan di Sibulue, Watampone, atau dikirim via ekspedisi cepat antar kota.",
  },
  {
    step: 4,
    title: "Paket Tiba & Masuk Freezer",
    time: "Segera Setelah Diterima",
    desc: "Cek kelengkapan kemasan (rekam video unboxing untuk garansi), lalu segera simpan ke dalam freezer suhu -18°C.",
  },
];

export default function CekPesananClient() {
  //const [isDarkMode, setIsDarkMode] = useState(false);
  const { isDarkMode } = useTheme();
  const [mounted, setMounted] = useState(false);

  const [orderInput, setOrderInput] = useState("");
  const [searchedCode, setSearchedCode] = useState<string | null>(null);
  const [matchedLocalOrder, setMatchedLocalOrder] = useState<LocalOrder | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    // if (savedTheme === "dark") {
    //   setIsDarkMode(true);
    // }
  }, []);

  const clientDarkMode = mounted ? isDarkMode : false;
  const activeStep = 1;

  const handleCheckOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = orderInput.trim();

    if (!cleaned) {
      setErrorMsg("Masukkan Kode Order Anda terlebih dahulu.");
      setSearchedCode(null);
      return;
    }

    if (!ORDER_CODE_REGEX.test(cleaned)) {
      setErrorMsg(
        "Format Kode Order tidak valid. Contoh: 2026:11:28-21:23-FRZ-a2sd8d"
      );
      setSearchedCode(null);
      return;
    }

    setErrorMsg("");
    setSearchedCode(cleaned);

    // Cek apakah riwayat pesanan tersimpan di localStorage browser perangkat ini
    try {
      const savedOrdersRaw = localStorage.getItem("frozthy_orders");
      if (savedOrdersRaw) {
        const savedOrders: LocalOrder[] = JSON.parse(savedOrdersRaw);
        const found = savedOrders.find(
          (o) => o.orderCode.toLowerCase() === cleaned.toLowerCase()
        );
        setMatchedLocalOrder(found || null);
      } else {
        setMatchedLocalOrder(null);
      }
    } catch {
      setMatchedLocalOrder(null);
    }
  };

  const handleAskStatusWhatsApp = (code: string) => {
    const msg =
      `Halo Admin *Frozthy Frozen Food*! 👋\n` +
      `Saya ingin cek status terbaru untuk pesanan saya:\n\n` +
      `• *Kode Order:* ${code}\n\n` +
      `Mohon infonya apakah pesanan sedang disiapkan atau sudah dalam pengiriman. Terima kasih!`;

    const url = `https://wa.me{WHATSAPP_NUMBER}?text=${encodeURIComponent(
      msg
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Ekstrak tanggal & jam dari format "2026:11:28-21:23-FRZ-a2sd8d" jika tersedia
  const parseOrderTimestamp = (code: string) => {
    const match = code.match(/^(\d{4}):(\d{2}):(\d{2})-(\d{2}):(\d{2})-/);
    if (!match) return null;
    const [, year, month, day, hour, minute] = match;
    return `${day}/${month}/${year} pukul ${hour}:${minute} WITA`;
  };

  return (
    <main
      className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-200 ${
        clientDarkMode
          ? "bg-[#0b0d13] text-gray-200"
          : "bg-slate-50 text-slate-800"
      }`}
    >
      <div className="max-w-3xl mx-auto space-y-10">
        {/* Header */}
        <header className="text-center space-y-3">
          <span
            className={`inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase rounded-full ${
              clientDarkMode
                ? "text-cyan-400 bg-cyan-500/15 border border-cyan-500/30"
                : "text-blue-700 bg-blue-100"
            }`}
          >
            Pelacakan Pesanan
          </span>
          <h1
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              clientDarkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Cek Status Pesanan
          </h1>
          <p
            className={`max-w-xl mx-auto text-sm sm:text-base ${
              clientDarkMode ? "text-gray-400" : "text-slate-600"
            }`}
          >
            Masukkan <strong>Kode Order</strong> yang tertera pada pesan checkout
            WhatsApp Anda untuk melihat detail pesanan dan konfirmasi status
            pengiriman area Sibulue & Bone.
          </p>
        </header>

        {/* Form Pencarian Kode Order */}
        <div
          className={`p-6 sm:p-8 rounded-2xl border transition-colors ${
            clientDarkMode
              ? "bg-[#12141c] border-gray-800"
              : "bg-white border-slate-200/90 shadow-xs"
          }`}
        >
          <form onSubmit={handleCheckOrder} className="space-y-4">
            <div>
              <label
                htmlFor="order-code"
                className={`block text-xs sm:text-sm font-semibold mb-2 ${
                  clientDarkMode ? "text-gray-300" : "text-slate-700"
                }`}
              >
                Kode Order Frozthy
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  id="order-code"
                  type="text"
                  value={orderInput}
                  onChange={(e) => setOrderInput(e.target.value)}
                  placeholder="Contoh: 2026:11:28-21:23-FRZ-a2sd8d"
                  className={`flex-1 px-4 py-3 text-sm font-mono rounded-xl border outline-none transition-colors ${
                    clientDarkMode
                      ? "bg-gray-900 border-gray-700 text-white placeholder-gray-500 focus:border-cyan-500"
                      : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-emerald-600"
                  }`}
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] transition-all cursor-pointer shrink-0"
                >
                  Cek Pesanan
                </button>
              </div>
              {errorMsg && (
                <p className="mt-2 text-xs font-medium text-rose-500">
                  {errorMsg}
                </p>
              )}
            </div>

            <p
              className={`text-xs ${
                clientDarkMode ? "text-gray-500" : "text-slate-400"
              }`}
            >
              Tips: Salin kode order dari riwayat chat WhatsApp Anda dengan Admin
              Frozthy (contoh format:{" "}
              <code className="font-mono">2026:11:28-21:23-FRZ-a2sd8d</code>).
            </p>
          </form>
        </div>

        {/* Hasil Pengecekan */}
        {searchedCode && (
          <div
            className={`p-6 sm:p-8 rounded-2xl border space-y-6 transition-all ${
              clientDarkMode
                ? "bg-[#12141c] border-emerald-500/40"
                : "bg-white border-emerald-300 shadow-sm"
            }`}
          >
            {/* Ringkasan Kode */}
            <div
              className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b ${
                clientDarkMode ? "border-gray-800" : "border-slate-100"
              }`}
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
                  Kode Order Terverifikasi
                </span>
                <h2
                  className={`text-lg sm:text-xl font-extrabold font-mono mt-0.5 break-all ${
                    clientDarkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  {searchedCode}
                </h2>
                {parseOrderTimestamp(searchedCode) && (
                  <p
                    className={`text-xs mt-1 ${
                      clientDarkMode ? "text-gray-400" : "text-slate-500"
                    }`}
                  >
                    Waktu Pemesanan: {parseOrderTimestamp(searchedCode)}
                  </p>
                )}
              </div>

              <span
                className={`self-start sm:self-center px-3 py-1.5 text-xs font-bold rounded-full ${
                  clientDarkMode
                    ? "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                    : "bg-amber-100 text-amber-800"
                }`}
              >
                Menunggu Konfirmasi / Diproses Admin
              </span>
            </div>

            {/* Detail Lokal (Jika Tersimpan di Perangkat Ini) */}
            {matchedLocalOrder && (
              <div
                className={`p-4 rounded-xl text-xs sm:text-sm space-y-1.5 ${
                  clientDarkMode ? "bg-gray-900/80" : "bg-slate-50"
                }`}
              >
                <p className="font-semibold">Detail Tersimpan di Perangkat:</p>
                {matchedLocalOrder.customerName && (
                  <p>Nama Pemesan: {matchedLocalOrder.customerName}</p>
                )}
                {matchedLocalOrder.customerAddress && (
                  <p>Tujuan: {matchedLocalOrder.customerAddress}</p>
                )}
                {typeof matchedLocalOrder.grandTotal === "number" && (
                  <p className="font-bold text-emerald-500">
                    Total: Rp{" "}
                    {matchedLocalOrder.grandTotal.toLocaleString("id-ID")}
                  </p>
                )}
              </div>
            )}
        </div>
        )}

        {/* Timeline 4 Tahap */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {DELIVERY_STEPS.map((item) => {
          const isCompletedOrActive = item.step <= activeStep;

          return (
            <div
              key={item.step}
              className={`relative p-4 sm:p-5 rounded-xl border transition-all ${
                isCompletedOrActive
                  ? isDarkMode
                    ? "bg-emerald-950/20 border-emerald-500/40"
                    : "bg-emerald-50/60 border-emerald-200"
                  : isDarkMode
                  ? "bg-gray-900/60 border-gray-800"
                  : "bg-slate-50/70 border-slate-200/70"
              }`}
            >
              <div className="flex items-start gap-3.5">
                {/* Nomor Tahap */}
                <span
                  className={`w-8 h-8 rounded-full font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5 ${
                    isCompletedOrActive
                      ? "bg-emerald-600 text-white shadow-xs"
                      : isDarkMode
                      ? "bg-gray-800 text-gray-400"
                      : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {item.step}
                </span>

                {/* Konten Tahap */}
                <div className="space-y-1 flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-1.5">
                    <h3
                      className={`font-bold text-sm sm:text-base ${
                        isDarkMode ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <span
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                        isCompletedOrActive
                          ? isDarkMode
                            ? "bg-emerald-500/20 text-emerald-300"
                            : "bg-emerald-100 text-emerald-800"
                          : isDarkMode
                          ? "bg-gray-800 text-gray-400"
                          : "bg-slate-200/70 text-slate-600"
                      }`}
                    >
                      {item.time}
                    </span>
                  </div>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isDarkMode ? "text-gray-400" : "text-slate-600"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Catatan Suhu Penting */}
      <div
        className={`p-3.5 sm:p-4 rounded-xl border text-xs sm:text-sm flex items-start gap-2.5 ${
          isDarkMode
            ? "bg-sky-950/30 border-sky-800/50 text-sky-200"
            : "bg-sky-50 border-sky-200 text-sky-900"
        }`}
      >
        <span className="font-bold shrink-0">❄️ Info Suhu:</span>
        <span>
          Order terkonfirmasi sebelum pukul <strong>16.00 WITA</strong> langsung
          diproses dan dikirim pada hari yang sama.
        </span>
      </div>
      </div>
    </main>
  );
}