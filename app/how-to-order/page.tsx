'use client'
import type { Metadata } from "next";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext"


// Ganti nomor WhatsApp di bawah ini (gunakan format 628xxx tanpa tanda + atau spasi)
const WHATSAPP_NUMBER = "6281234567890";

const ORDER_TEMPLATE = encodeURIComponent(
  `Halo Admin Frozthy Frozen Food! 👋\nSaya mau pesan menu sehat:\n\n• Nama:\n• Alamat Lengkap (Patokan):\n• Kecamatan/Area (Sibulue / Watampone / Lainnya):\n• Daftar Pesanan:\n  1. \n  2. \n• Metode Bayar (Transfer / QRIS / COD Sibulue):`
);

export default function CaraPemesananPage() {
  const { isDarkMode } = useTheme();
  const whatsappUrl = `https://wa.me{WHATSAPP_NUMBER}?text=${ORDER_TEMPLATE}`;

  return (
    <main
      className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        isDarkMode
          ? "bg-[#0b0c10] text-zinc-200"
          : "bg-slate-50 text-slate-800"
      }`}
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Section */}
        <header className="text-center space-y-4">
          <span
            className={`inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase rounded-full border ${
              isDarkMode
                ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
                : "text-emerald-700 bg-emerald-100 border-transparent"
            }`}
          >
            Panduan Pelanggan
          </span>
          <h1
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Cara Pemesanan & Pengiriman
          </h1>
          <p
            className={`max-w-2xl mx-auto text-base sm:text-lg ${
              isDarkMode ? "text-zinc-400" : "text-slate-600"
            }`}
          >
            Menyajikan stok makanan sehat, bergizi, dan praktis langsung ke dapurmu
            di{" "}
            <strong className={isDarkMode ? "text-zinc-100" : "text-slate-800"}>
              Sibulue, Kab. Bone
            </strong>
            , dan sekitarnya.
          </p>
        </header>

        {/* Cara Pemesanan Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-emerald-600 text-white font-bold shadow-xs">
              1
            </span>
            <h2
              className={`text-2xl font-bold ${
                isDarkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Cara Pemesanan
            </h2>
          </div>

          {/* Highlight Card: WhatsApp / Website (Direkomendasikan) */}
          <div
            className={`border-2 rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden transition-colors ${
              isDarkMode
                ? "bg-zinc-900/90 border-emerald-500/70"
                : "bg-white border-emerald-500"
            }`}
          >
            <div className="inline-block px-3 py-1 mb-4 text-xs font-bold text-white bg-emerald-600 rounded-full">
              ★ Direkomendasikan (Respon Cepat)
            </div>
            <h3
              className={`text-xl font-bold mb-2 ${
                isDarkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Pesan via Website / WhatsApp Admin
            </h3>
            <p
              className={`text-sm sm:text-base mb-6 ${
                isDarkMode ? "text-zinc-400" : "text-slate-600"
              }`}
            >
              Cara tercepat untuk memesan stok lauk harian, paket meal prep, maupun
              camilan sehat keluarga.
            </p>

            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base mb-8">
              <li
                className={`flex gap-3 p-4 rounded-xl border ${
                  isDarkMode
                    ? "bg-zinc-800/60 border-zinc-800"
                    : "bg-slate-50 border-transparent"
                }`}
              >
                <span
                  className={`font-bold ${
                    isDarkMode ? "text-emerald-400" : "text-emerald-600"
                  }`}
                >
                  01.
                </span>
                <div>
                  <strong
                    className={`block ${
                      isDarkMode ? "text-zinc-100" : "text-slate-900"
                    }`}
                  >
                    Pilih Menu Sehat
                  </strong>
                  <span
                    className={`text-sm ${
                      isDarkMode ? "text-zinc-400" : "text-slate-600"
                    }`}
                  >
                    Cek daftar produk Frozthy di katalog website atau Instagram kami.
                  </span>
                </div>
              </li>

              <li
                className={`flex gap-3 p-4 rounded-xl border ${
                  isDarkMode
                    ? "bg-zinc-800/60 border-zinc-800"
                    : "bg-slate-50 border-transparent"
                }`}
              >
                <span
                  className={`font-bold ${
                    isDarkMode ? "text-emerald-400" : "text-emerald-600"
                  }`}
                >
                  02.
                </span>
                <div>
                  <strong
                    className={`block ${
                      isDarkMode ? "text-zinc-100" : "text-slate-900"
                    }`}
                  >
                    Kirim Format Order
                  </strong>
                  <span
                    className={`text-sm ${
                      isDarkMode ? "text-zinc-400" : "text-slate-600"
                    }`}
                  >
                    Klik tombol pesan di bawah atau kirim daftar pesanan beserta patokan
                    alamat lengkap.
                  </span>
                </div>
              </li>

              <li
                className={`flex gap-3 p-4 rounded-xl border ${
                  isDarkMode
                    ? "bg-zinc-800/60 border-zinc-800"
                    : "bg-slate-50 border-transparent"
                }`}
              >
                <span
                  className={`font-bold ${
                    isDarkMode ? "text-emerald-400" : "text-emerald-600"
                  }`}
                >
                  03.
                </span>
                <div>
                  <strong
                    className={`block ${
                      isDarkMode ? "text-zinc-100" : "text-slate-900"
                    }`}
                  >
                    Konfirmasi & Bayar
                  </strong>
                  <span
                    className={`text-sm ${
                      isDarkMode ? "text-zinc-400" : "text-slate-600"
                    }`}
                  >
                    Pembayaran via Transfer Bank, QRIS, atau{" "}
                    <strong
                      className={isDarkMode ? "text-zinc-200" : "text-slate-800"}
                    >
                      COD
                    </strong>{" "}
                    (khusus area Sibulue).
                  </span>
                </div>
              </li>

              <li
                className={`flex gap-3 p-4 rounded-xl border ${
                  isDarkMode
                    ? "bg-zinc-800/60 border-zinc-800"
                    : "bg-slate-50 border-transparent"
                }`}
              >
                <span
                  className={`font-bold ${
                    isDarkMode ? "text-emerald-400" : "text-emerald-600"
                  }`}
                >
                  04.
                </span>
                <div>
                  <strong
                    className={`block ${
                      isDarkMode ? "text-zinc-100" : "text-slate-900"
                    }`}
                  >
                    Pesanan Diantar
                  </strong>
                  <span
                    className={`text-sm ${
                      isDarkMode ? "text-zinc-400" : "text-slate-600"
                    }`}
                  >
                    Produk dikirim langsung dalam kondisi beku sesuai jadwal pengantaran.
                  </span>
                </div>
              </li>
            </ol>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3.5 text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition shadow-sm"
              >
                Pesan Sekarang via WhatsApp
              </a>
              <Link
                href="/produk"
                className={`w-full sm:w-auto inline-flex justify-center items-center px-6 py-3.5 text-base font-semibold rounded-xl border transition ${
                  isDarkMode
                    ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/30 hover:bg-emerald-500/20"
                    : "text-emerald-700 bg-emerald-50 border-transparent hover:bg-emerald-100"
                }`}
              >
                Lihat Katalog Menu
              </Link>
            </div>
          </div>

          {/* Kanal Tambahan */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className={`border rounded-2xl p-6 shadow-sm transition-colors ${
                isDarkMode
                  ? "bg-zinc-900 border-zinc-800"
                  : "bg-white border-slate-200"
              }`}
            >
              <h3
                className={`text-lg font-bold mb-2 ${
                  isDarkMode ? "text-white" : "text-slate-900"
                }`}
              >
                2. Via Media Sosial & Marketplace
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  isDarkMode ? "text-zinc-400" : "text-slate-600"
                }`}
              >
                Kamu juga dapat memesan melalui DM{" "}
                <strong className={isDarkMode ? "text-zinc-200" : "text-slate-800"}>
                  Instagram / TikTok (@frozthy.id)
                </strong>{" "}
                atau marketplace resmi kami dengan memilih kurir instan area Bone.
              </p>
            </div>

            <div
              className={`border rounded-2xl p-6 shadow-sm transition-colors ${
                isDarkMode
                  ? "bg-zinc-900 border-zinc-800"
                  : "bg-white border-slate-200"
              }`}
            >
              <h3
                className={`text-lg font-bold mb-2 ${
                  isDarkMode ? "text-white" : "text-slate-900"
                }`}
              >
                3. Beli Langsung di Mitra Toko
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  isDarkMode ? "text-zinc-400" : "text-slate-600"
                }`}
              >
                Dapatkan produk Frozthy secara langsung di freezer mitra toko sekitar
                area{" "}
                <strong className={isDarkMode ? "text-zinc-200" : "text-slate-800"}>
                  Sibulue & Watampone
                </strong>{" "}
                (hubungi Admin untuk info titik mitra terdekat).
              </p>
            </div>
          </div>
        </section>

        {/* Area & Ketentuan Pengiriman Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-sky-600 text-white font-bold shadow-xs">
              2
            </span>
            <h2
              className={`text-2xl font-bold ${
                isDarkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Area & Ketentuan Pengiriman
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Area Sibulue */}
            <div
              className={`border rounded-2xl p-6 shadow-sm flex flex-col justify-between transition-colors ${
                isDarkMode
                  ? "bg-zinc-900 border-sky-500/40"
                  : "bg-white border-sky-200"
              }`}
            >
              <div>
                <span
                  className={`inline-block px-2.5 py-1 text-xs font-semibold rounded-md mb-3 ${
                    isDarkMode
                      ? "text-sky-400 bg-sky-500/15"
                      : "text-sky-700 bg-sky-100"
                  }`}
                >
                  Area Prioritas
                </span>
                <h3
                  className={`text-lg font-bold mb-2 ${
                    isDarkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  Kecamatan Sibulue
                </h3>
                <p
                  className={`text-xs mb-3 ${
                    isDarkMode ? "text-zinc-400" : "text-slate-500"
                  }`}
                >
                  (Tanete, Pattiro, Maroanging, & sekitarnya)
                </p>
                <ul
                  className={`space-y-2 text-sm ${
                    isDarkMode ? "text-zinc-300" : "text-slate-600"
                  }`}
                >
                  <li>
                    • Diantar kurir lokal Frozthy pakai <em>cooler box</em>.
                  </li>
                  <li>
                    • Estimasi tiba{" "}
                    <strong className={isDarkMode ? "text-white" : "text-slate-900"}>
                      30 menit – 2 jam
                    </strong>
                    .
                  </li>
                  <li>• Tersedia tarif hemat / gratis ongkir (S&K).</li>
                </ul>
              </div>
            </div>

            {/* Area Watampone */}
            <div
              className={`border rounded-2xl p-6 shadow-sm flex flex-col justify-between transition-colors ${
                isDarkMode
                  ? "bg-zinc-900 border-zinc-500/40"
                  : "bg-white border-slate-200"
              }`}
            >
              <div>
                <span
                  className={`inline-block px-2.5 py-1 text-xs font-semibold rounded-md mb-3 ${
                    isDarkMode
                      ? "text-zinc-300 bg-zinc-800"
                      : "text-slate-700 bg-slate-100"
                  }`}
                >
                  Dalam Kabupaten
                </span>
                <h3
                  className={`text-lg font-bold mb-2 ${
                    isDarkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  Watampone & Sekitarnya
                </h3>
                <p
                  className={`text-xs mb-3 ${
                    isDarkMode ? "text-zinc-400" : "text-slate-500"
                  }`}
                >
                  (Wilayah Kabupaten Bone)
                </p>
                <ul
                  className={`space-y-2 text-sm ${
                    isDarkMode ? "text-zinc-300" : "text-slate-600"
                  }`}
                >
                  <li>
                    • Kurir instan lokal / ekspedisi <em>same day</em>.
                  </li>
                  <li>
                    • Dilengkapi <em>ice gel</em> pelindung suhu beku.
                  </li>
                  <li>
                    • Estimasi tiba{" "}
                    <strong className={isDarkMode ? "text-white" : "text-slate-900"}>
                      1 – 3 jam
                    </strong>{" "}
                    perjalanan.
                  </li>
                </ul>
              </div>
            </div>

            {/* Luar Kota */}
            <div
              className={`border rounded-2xl p-6 shadow-sm flex flex-col justify-between transition-colors ${
                isDarkMode
                  ? "bg-zinc-900 border-amber-500/40"
                  : "bg-white border-slate-200"
              }`}
            >
              <div>
                <span
                  className={`inline-block px-2.5 py-1 text-xs font-semibold rounded-md mb-3 ${
                    isDarkMode
                      ? "text-amber-400 bg-amber-500/15"
                      : "text-slate-700 bg-slate-100"
                  }`}
                >
                  Luar Kabupaten
                </span>
                <h3
                  className={`text-lg font-bold mb-2 ${
                    isDarkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  Sulawesi Selatan & Sekitarnya
                </h3>
                <p
                  className={`text-xs mb-3 ${
                    isDarkMode ? "text-zinc-400" : "text-slate-500"
                  }`}
                >
                  (Makassar, Sinjai, Soppeng, Wajo, & sekitarnya)
                </p>
                <ul
                  className={`space-y-2 text-sm ${
                    isDarkMode ? "text-zinc-300" : "text-slate-600"
                  }`}
                >
                  <li>
                    • Pengiriman via ekspedisi kilat / travel resmi.
                  </li>
                  <li>
                    • Wajib tambahan <em>styrofoam box</em> & <em>ice gel</em>.
                  </li>
                  <li>
                    • Estimasi tiba{" "}
                    <strong className={isDarkMode ? "text-white" : "text-slate-900"}>
                      1 hari sampai
                    </strong>
                    .
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}
