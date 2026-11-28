"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

const WHATSAPP_NUMBER = "6281268052229";

const PARTNERSHIP_PACKAGES = [
  {
    id: "reseller",
    badge: "Modal Ringan",
    title: "Reseller Rumahan",
    subtitle: "Cocok untuk ibu rumah tangga, mahasiswa, atau pekerja kantoran.",
    highlight: false,
    benefits: [
      "Minimal order awal hanya 10–15 pack (bisa campur varian).",
      "Margin keuntungan menarik 15% – 20% per produk.",
      "Materi promosi siap pakai (foto, video, & copywriting WA/IG).",
      "Bisa sistem Pre-Order (PO) tanpa harus stok banyak di awal.",
    ],
    waText:
      "Halo Admin Frozthy Frozen Food! 👋 Saya tertarik mendaftar sebagai *Reseller Rumahan*. Boleh minta info pricelist & syarat lengkapnya?",
  },
  {
    id: "mitra-toko",
    badge: "Paling Diminati",
    title: "Mitra Titip Jual / Toko",
    subtitle: "Khusus pemilik toko kelontong, minimarket, kafe, atau kantin area Bone.",
    highlight: true,
    benefits: [
      "Produk Frozthy disuplai rutin langsung ke freezer toko Anda.",
      "Prioritas pengantaran & pengecekan stok berkala area Sibulue & Watampone.",
      "Dukungan stiker branding & daftar menu untuk etalase freezer.",
      "Garansi tukar produk mendekati masa kedaluwarsa (S&K berlaku).",
    ],
    waText:
      "Halo Admin Frozthy Frozen Food! 👋 Saya pemilik toko/usaha dan tertarik kerja sama *Mitra Titip Jual*. Boleh info ketentuannya?",
  },
  {
    id: "agen-kecamatan",
    badge: "Skala Besar",
    title: "Agen / Stokis Area",
    subtitle: "Untuk mitra yang ingin memegang distribusi di tingkat kecamatan / luar Bone.",
    highlight: false,
    benefits: [
      "Harga grosir khusus tingkat agen dengan margin hingga 30%.",
      "Hak prioritas pasokan & pemesanan partai besar.",
      "Nama & lokasi toko dicantumkan di website & media sosial resmi Frozthy.",
      "Gratis ongkir pengantaran area Kab. Bone atau subsidi ongkir luar kota.",
    ],
    waText:
      "Halo Admin Frozthy Frozen Food! 👋 Saya berminat menjadi *Agen / Stokis Area*. Mohon informasi syarat & harga grosirnya.",
  },
];

export default function KemitraanClient() {
  // Ganti dengan hook ThemeContext/Redux milikmu jika sudah tersedia secara global
  //const [isDarkMode, setIsDarkMode] = useState(false);
  const { isDarkMode } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    // if (savedTheme === "dark") {
    //   setIsDarkMode(true);
    // }
  }, []);

  const clientDarkMode = mounted ? isDarkMode : false;

  const handlePartnerRegister = (messageText: string) => {
    const url = `https://wa.me{WHATSAPP_NUMBER}?text=${encodeURIComponent(
      messageText
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <main
      className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-200 ${
        clientDarkMode
          ? "bg-[#0b0d13] text-gray-200"
          : "bg-slate-50 text-slate-800"
      }`}
    >
      <div className="max-w-5xl mx-auto space-y-14">
        {/* Hero / Header Section */}
        <header className="text-center space-y-4 max-w-3xl mx-auto">
          <span
            className={`inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase rounded-full ${
              clientDarkMode
                ? "text-emerald-400 bg-emerald-500/15 border border-emerald-500/30"
                : "text-emerald-700 bg-emerald-100"
            }`}
          >
            Peluang Usaha & Kolaborasi
          </span>
          <h1
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              clientDarkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Tumbuh Bersama Frozthy Frozen Food
          </h1>
          <p
            className={`text-sm sm:text-base leading-relaxed ${
              clientDarkMode ? "text-gray-400" : "text-slate-600"
            }`}
          >
            Jadilah bagian dari jaringan distribusi makanan beku sehat dan praktis
            di <strong className={clientDarkMode ? "text-white" : "text-slate-900"}>Sibulue, Kabupaten Bone</strong>, dan Sulawesi Selatan. Permintaan pasar tinggi, produk mudah dijual ulang, dan dukungan penuh dari tim kami.
          </p>
        </header>

        {/* Keunggulan Bermitra */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {[
            {
              title: "Produk Sehat & Laris",
              desc: "Mengusung konsep healthy frozen food tanpa pengawet berlebih yang dicari keluarga & pekerja.",
            },
            {
              title: "Margin Keuntungan Jelas",
              desc: "Harga khusus mitra yang kompetitif dengan potensi keuntungan hingga 30%.",
            },
            {
              title: "Suplai Stabil dari Bone",
              desc: "Produksi rutin di Kec. Sibulue memastikan stok selalu segar dan cepat dikirim.",
            },
            {
              title: "Dukungan Promosi",
              desc: "Disediakan katalog digital, foto produk estetik, dan promosi lokasi mitra di akun resmi.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`p-5 rounded-2xl border transition-colors ${
                clientDarkMode
                  ? "bg-[#12141c] border-gray-800"
                  : "bg-white border-slate-200/80 shadow-xs"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm mb-3 ${
                  clientDarkMode
                    ? "bg-emerald-500/15 text-emerald-400"
                    : "bg-emerald-100 text-emerald-700"
                }`}
              >
                0{index + 1}
              </div>
              <h3
                className={`font-bold text-base mb-1.5 ${
                  clientDarkMode ? "text-white" : "text-slate-900"
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`text-xs sm:text-sm leading-relaxed ${
                  clientDarkMode ? "text-gray-400" : "text-slate-600"
                }`}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </section>

        {/* Pilihan Paket Kemitraan */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2
              className={`text-2xl sm:text-3xl font-bold ${
                clientDarkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Pilih Skema Kemitraan
            </h2>
            <p
              className={`text-sm ${
                clientDarkMode ? "text-gray-400" : "text-slate-600"
              }`}
            >
              Sesuaikan model kerja sama dengan modal dan fasilitas yang Anda miliki.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {PARTNERSHIP_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-2xl p-6 sm:p-7 border flex flex-col justify-between transition-all ${
                  pkg.highlight
                    ? clientDarkMode
                      ? "bg-[#151924] border-emerald-500/70 shadow-lg shadow-emerald-950/30"
                      : "bg-white border-emerald-500 ring-1 ring-emerald-500 shadow-md"
                    : clientDarkMode
                    ? "bg-[#12141c] border-gray-800"
                    : "bg-white border-slate-200/90 shadow-xs"
                }`}
              >
                <div className="space-y-4">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-bold rounded-full ${
                      pkg.highlight
                        ? "bg-emerald-600 text-white"
                        : clientDarkMode
                        ? "bg-gray-800 text-gray-300"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {pkg.badge}
                  </span>

                  <div>
                    <h3
                      className={`text-xl font-bold ${
                        clientDarkMode ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {pkg.title}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm mt-1 ${
                        clientDarkMode ? "text-gray-400" : "text-slate-600"
                      }`}
                    >
                      {pkg.subtitle}
                    </p>
                  </div>

                  <ul
                    className={`space-y-2.5 pt-4 border-t text-xs sm:text-sm ${
                      clientDarkMode
                        ? "border-gray-800 text-gray-300"
                        : "border-slate-100 text-slate-700"
                    }`}
                  >
                    {pkg.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-emerald-500 font-bold shrink-0">
                          ✓
                        </span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => handlePartnerRegister(pkg.waText)}
                  className={`mt-8 w-full py-3 px-4 rounded-xl text-sm font-bold transition-all active:scale-[0.98] cursor-pointer ${
                    pkg.highlight
                      ? "bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm" 
                      : "bg-zinc-600 hover:bg-zinc-500 text-white shadow-sm"
                  }`}
                  >
                    Register
                </button>
              </div>
            ))}
            </div>
          </section>
      </div>
    </main>
  )
}


