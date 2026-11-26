"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext"
import Navbar from "@/components/Navbar";

interface ContactPageProps {
  // Opsional: bisa menerima status tema dari global state / Redux Anda
  initialDarkMode?: boolean;
}

const visiMisiList = [
  {
    src: "/Fluffy_Chicks_Golden_Straw.png",
    alt: "Anak ayam kampung alami",
    text: "Mengembangkan pertanian alami utamanya di sektor peternakan ayam kampung.",
  },
  {
    src: "/Proud_Hen_Farmyard_Morning.png",
    alt: "Peternakan ayam kampung pagi hari",
    text: "Mengintegrasikan pemenuhan kebutuhan konsumen dengan kelestarian lingkungan.",
  },
  {
    src: "/Farm_Fresh_Egg_Collection.png",
    alt: "Koleksi telur ayam kampung segar",
    text: "Menghadirkan produk makanan yang alami, sehat, bergizi, dan berkualitas.",
  },
  {
    src: "/Majestic_Rooster_Sunrise_Portrait.png",
    alt: "Ayam jantan kampung",
    text: "Menggunakan pakan dan obat-obatan alami serta menghindari penggunaan antibiotik, vaksinasi, dan bahan kimia tambahan.",
  },
];

export default function AboutPage({ initialDarkMode = false }: ContactPageProps) {
const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen overflow-x-hidden font-sans transition-colors duration-500 ${
        isDarkMode ? "bg-[#0b0c10] text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* 1. NAVIGATION BAR */}
      <Navbar />

      <div className="w-full flex flex-col pt-20">
        {/* 2. BANNER HEADER */}
        <div
          className={`w-full flex items-center justify-center py-12 px-4 text-center transition-colors border-b ${
            isDarkMode
              ? "bg-gray-900/70 border-gray-800 text-white"
              : "bg-stone-100 border-stone-200 text-slate-900"
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Dapatkan Produk Halal, Sehat, dan Bergizi.
            </p>
          </div>
        </div>

        {/* Kontainer Utama agar rapi di semua ukuran layar */}
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            <p className={`font-light mb-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              Tentang Kami |
            </p>
          </div>

          {/* 3. INTRO HEADING */}
          <section className="flex flex-col justify-center items-center text-center max-w-3xl mx-auto mt-6">
            <h1
              className={`text-2xl sm:text-3xl md:text-4xl font-bold pb-3 leading-tight ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Kami Menyediakan Aneka Produk Organik / Natural
            </h1>
            <p
              className={`italic text-sm sm:text-base leading-relaxed ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Menjual Aneka Makanan dan Minuman halal, sehat, dan bergizi untuk
              memenuhi nutrisi kesehatan Anda.
            </p>
          </section>

          {/* 4. HERO IMAGE BANNER */}
          <div
            className={`relative w-full h-64 sm:h-80 md:h-[420px] lg:h-[500px] my-8 sm:my-12 rounded-2xl overflow-hidden border shadow-sm ${
              isDarkMode ? "border-gray-800" : "border-gray-200"
            }`}
          >
            <Image
              src="/istockphoto-makanan-diet-seimbang.jpg"
              alt="makanan-natural-seimbang"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* 5. TENTANG KAMI (2 KOLOM RESPONSIF) */}
          <section className="py-8 sm:py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6">
                <h2
                  className={`text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Menyediakan makanan sehat dan alami
                </h2>
                <p
                  className={`text-sm sm:text-base leading-relaxed ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Kami percaya bahwa makanan terbaik adalah makanan alami, karena
                  itu kami menyediakan ayam kampung asli yang dikembangkan
                  secara alami. Kami memprioritaskan proses berkelanjutan dan
                  kelestarian lingkungan, kesehatan hewan, dan kemurnian ayam
                  kampung asli.
                </p>

                {/* Tautan Cepat */}
                <div className="pt-2 flex flex-col sm:flex-row sm:flex-wrap gap-4">
                  <Link
                    href="/koleksi"
                    className={`inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold transition ${
                      isDarkMode
                        ? "bg-cyan-500 text-black hover:bg-cyan-400"
                        : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
                  >
                    Produk Kami
                  </Link>
                  <Link
                    href="/contact"
                    className={`inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold border transition ${
                      isDarkMode
                        ? "border-gray-700 text-gray-200 hover:bg-gray-800"
                        : "border-gray-300 text-gray-800 hover:bg-gray-100"
                    }`}
                  >
                    Kontak Kami
                  </Link>
                  <a
                    href="https://wa.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold transition ${
                      isDarkMode
                        ? "bg-emerald-950/80 text-emerald-400 border border-emerald-800 hover:bg-emerald-900/60"
                        : "bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100"
                    }`}
                  >
                    0812 6805 2229
                  </a>
                </div>
              </div>

              <div className="w-full flex justify-center md:justify-end">
                <div
                  className={`relative w-full max-w-[500px] aspect-square rounded-2xl overflow-hidden border shadow-md ${
                    isDarkMode ? "border-gray-800" : "border-gray-200"
                  }`}
                >
                  <Image
                    src="/istockphoto-makanan-diet-seimbang.jpg"
                    alt="makanan-natural-seimbang"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 6. VISI DAN MISI (4 KOLOM RESPONSIF) */}
          <section className="py-10 sm:py-16">
            <div className="text-center mb-10 sm:mb-12">
              <h2
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Visi dan Misi
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {visiMisiList.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center text-center p-6 rounded-2xl border transition-colors ${
                    isDarkMode
                      ? "bg-gray-900/60 border-gray-800"
                      : "bg-white border-gray-100 shadow-xs"
                  }`}
                >
                  <div
                    className={`relative w-44 h-44 sm:w-48 sm:h-48 rounded-full overflow-hidden border-2 mb-6 shrink-0 ${
                      isDarkMode ? "border-cyan-500/40" : "border-stone-200"
                    }`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p
                    className={`text-sm sm:text-base leading-relaxed ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 7. KOMITMEN & MENGAPA MEMILIH KAMI (2 KOLOM RESPONSIF) */}
          <section className="py-8 sm:py-12 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Kartu 1 */}
              <div
                className={`rounded-2xl p-6 sm:p-8 border flex flex-col transition-colors ${
                  isDarkMode
                    ? "bg-gray-900/80 border-gray-800"
                    : "bg-white border-gray-200 shadow-xs"
                }`}
              >
                <h2
                  className={`w-full text-lg sm:text-xl font-bold p-4 mb-6 rounded-xl transition-colors ${
                    isDarkMode
                      ? "bg-cyan-950/70 text-cyan-400 border border-cyan-800/50"
                      : "bg-zinc-100 text-blue-800"
                  }`}
                >
                  Komitmen pada kami
                </h2>
                <div className="relative w-full h-auto mx-auto flex justify-center">
                  <Image
                    src="/Native_Chicken_Rustic_Studio_Shot.png"
                    alt="anak ayam"
                    width={350}
                    height={350}
                    style={{ objectFit: "cover", borderRadius: "0%" }}
                  />
                </div>
                <p className="mt-8 p-4">
                  Kami berkomitmen pada penyediaan daging ayam kampung yang sehat dan menyehatkan, kualitas yang terpercaya (halal, sehat, dan bersih), serta pelestarian lingkungan.
                </p>
              </div>

              {/* Kartu 2 */}
              <div
                className={`rounded-2xl p-6 sm:p-8 border flex flex-col transition-colors ${
                  isDarkMode
                    ? "bg-gray-900/80 border-gray-800"
                    : "bg-white border-gray-200 shadow-xs"
                }`}
              >
                <h2
                  className={`w-full text-lg sm:text-xl font-bold p-4 mb-6 rounded-xl transition-colors ${
                    isDarkMode
                      ? "bg-cyan-950/70 text-cyan-400 border border-cyan-800/50"
                      : "bg-zinc-100 text-blue-800"
                  }`}
                >
                  Mengapa memilih kami
                </h2>
                <div className="relative w-full h-auto mx-auto flex justify-center">
                  <Image
                    src="/Smoked_Chicken_Masterpiece.png"
                    alt="anak ayam"
                    width={350}
                    height={350}
                    style={{ objectFit: "cover", borderRadius: "0%" }}
                  />
                </div>
                <p className="mt-8 p-4">
                  Karena kami menghasilkan daging ayam kampung berkualitas dan sehat,
                  dibesarkan dengan cara pemeliharaan alami, tanpa menggunakan hormon
                  pertumbuhan, tanpa vaksin (antibiotik), serta tanpa obat-obatan
                  tambahan yang tidak diperlukan.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

