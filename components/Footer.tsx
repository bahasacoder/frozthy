"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext"
import PbcLogo from "@/public/assets/pbc-logo.svg";
import { MessageCircle } from "lucide-react"

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Truck,
  Award,
  ArrowUp,
} from "lucide-react";

const PRODUCT_LINKS = [
  { label: "Ayam Kampung Pejantan", href: "/shop/ayam-kampung-pejantan" },
  { label: "Indukan AKA Betina", href: "/shop/indukan-aka-betina" },
  { label: "Anakan & DOC Ayam Kampung", href: "/shop/doc-ayam-kampung" },
  { label: "Telur Ayam Kampung", href: "/shop/telur-ayam-kampung" },
];

const INFO_LINKS = [
  { label: "Tentang Peternakan Kami", href: "/about" },
  { label: "Cara Pemesanan & Pengiriman", href: "/how-to-order" },
  { label: "Kemitraan & Paket Koloni", href: "/partnership" },
  { label: "Cek Status Pesanan", href: "/orders" },
  { label: "Syarat & Ketentuan", href: "/terms" },
];

const PAYMENT_METHODS = [
  "QRIS",
  "OVO",
  "GoPay",
  "DANA",
  "BCA",
  "BRI",
  "BNI",
  "BSI",
  "Indomaret",
  "Alfamart",
];

export default function Footer() {
  const [year, setYear] = useState<number | string>("");
  const { isDarkMode } = useTheme();
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer 
      className={`w-full border-t mt-0 transition-colors duration-300 ${
        isDarkMode
          ? "bg-zinc-950 text-zinc-300 border-zinc-800"
          : "bg-white text-zinc-600 border-zinc-200"
      }`}
    >
      {/* Top Trust / Value Strip */}
      <div 
        className={`border-b transition-colors duration-300 ${
          isDarkMode
            ? "border-zinc-800/80 bg-zinc-900/50"
            : "border-zinc-200/80 bg-zinc-50/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3.5">
              <div 
                className={`flex size-10 shrink-0 items-center justify-center rounded-xl border ${
                  isDarkMode
                    ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                    : "bg-emerald-50 text-emerald-600 border-emerald-200"
                }`}
              >
                <Award className="size-5" />
              </div>
              <div>
                <h4 
                  className={`text-sm font-semibold ${
                    isDarkMode ? "text-white" : "text-zinc-900"
                  }`}
                >
                  100% Asli & Segar
                </h4>
                <p 
                  className={`text-xs ${
                    isDarkMode ? "text-zinc-400" : "text-zinc-500"
                  }`}
                >
                  Langsung dari peternakan pilihan tanpa hormon
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div 
                className={`flex size-10 shrink-0 items-center justify-center rounded-xl border ${
                  isDarkMode
                    ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
                    : "bg-indigo-50 text-indigo-600 border-indigo-200"
                }`}
              >
                <Truck className="size-5" />
              </div>
              <div>
                <h4 
                  className={`text-sm font-semibold ${
                    isDarkMode ? "text-white" : "text-zinc-900"
                  }`}
                >
                  Pengiriman Aman & Cepat
                </h4>
                <p 
                  className={`text-xs ${
                    isDarkMode ? "text-zinc-400" : "text-zinc-500"
                  }`}
                >
                  Kemasan higienis & aman untuk bibit maupun daging
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div 
                className={`flex size-10 shrink-0 items-center justify-center rounded-xl border ${
                  isDarkMode
                    ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                    : "bg-amber-50 text-amber-600 border-amber-200"
                }`}
              >
                <ShieldCheck className="size-5" />
              </div>
              <div>
                <h4 
                  className={`text-sm font-semibold ${
                    isDarkMode ? "text-white" : "text-zinc-900"
                  }`}
                >
                  Pembayaran Lengkap
                </h4>
                <p 
                   className={`text-xs ${
                    isDarkMode ? "text-zinc-400" : "text-zinc-500"
                  }`}
                >
                  Mendukung QRIS, E-Wallet, Transfer Bank & Gerai Retail
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Column 1: Brand & Contact (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-xl bg-indigo-600 text-sm font-bold text-white">
                <Image src={PbcLogo} alt="PasarBone Logo" width={30} height={30} />
              </span>
              <span 
                className={`text-xl font-bold tracking-tight ${
                  isDarkMode ? "text-white" : "text-zinc-900"
                }`}
              >
                Frozen Food & Healthy Food
              </span>
            </Link>

            <p 
              className={`text-sm leading-relaxed ${
                isDarkMode ? "text-zinc-400" : "text-zinc-600"
              }`}
            >
              Penyedia ayam kampung pejantan, indukan produktif, bibit DOC
              unggul, telur omega-3, serta olahan kuliner khas Nusantara yang
              higienis dan terpercaya.
            </p>

            <ul 
              className={`space-y-2.5 pt-1 text-sm ${
                isDarkMode ? "text-zinc-400" : "text-zinc-600"
              }`}
            >
              <li className="flex items-start gap-2.5">
                <MapPin className={`size-4 shrink-0 mt-0.5 ${
                    isDarkMode ? "text-indigo-400" : "text-indigo-600"
                  }`}
                />
                <span>Kabupaten Bone, Sulawesi Selatan, Indonesia</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone 
                  className={`size-4 shrink-0 ${
                    isDarkMode ? "text-emerald-400" : "text-emerald-600"
                  }`}
                />
                <a
                  href="https://wa.me"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +62 812-6805-2229 (WhatsApp Order)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className={`size-4 shrink-0 ${
                    isDarkMode ? "text-indigo-400" : "text-indigo-600"
                  }`}
                />
                <a
                  href="mailto:halo@ternakpangankita.id"
                  className={`transition-colors ${
                    isDarkMode ? "hover:text-white" : "hover:text-zinc-900"
                  }`}
                >
                  petanikonek@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock 
                   className={`size-4 shrink-0 ${
                    isDarkMode ? "text-amber-400" : "text-amber-600"
                  }`}
                />
                <span>Senin – Sabtu: 07.00 – 18.00 WITA</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Kategori Produk (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 
              className={`text-sm font-semibold uppercase tracking-wider ${
                isDarkMode ? "text-white" : "text-zinc-900"
              }`}
            >
              Produk Unggulan
            </h3>
            <ul className="space-y-2.5 text-sm">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors ${
                      isDarkMode
                        ? "text-zinc-400 hover:text-white"
                        : "text-zinc-600 hover:text-indigo-600"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Informasi & Bantuan (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h3
              className={`text-sm font-semibold uppercase tracking-wider ${
                isDarkMode ? "text-white" : "text-zinc-900"
              }`}
            >
              Informasi
            </h3>
            <ul className="space-y-2.5 text-sm">
              {INFO_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors ${
                      isDarkMode
                        ? "text-zinc-400 hover:text-white"
                        : "text-zinc-600 hover:text-indigo-600"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Metode Pembayaran & WhatsApp CTA (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h3
              className={`text-sm font-semibold uppercase tracking-wider ${
                isDarkMode ? "text-white" : "text-zinc-900"
              }`}
            >
              Metode Pembayaran
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {PAYMENT_METHODS.map((method) => (
                <span
                  key={method}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md border transition-colors ${
                    isDarkMode
                      ? "bg-zinc-900 border-zinc-800 text-zinc-300"
                      : "bg-zinc-100 border-zinc-200 text-zinc-700"
                  }`}
                >
                  {method}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white shadow-xs transition"
              >
                Konsultasi & Pesan via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div
        className={`border-t transition-colors duration-300 ${
          isDarkMode
            ? "border-zinc-800/80 bg-zinc-950"
            : "border-zinc-200 bg-zinc-50"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${
            isDarkMode ? "text-zinc-500" : "text-zinc-600"
          }`}
        >
          <p>
            © {year} Frozen Food & Healthy Food. Hak Cipta Dilindungi.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Kembali ke atas"
            className={`inline-flex items-center gap-1.5 transition cursor-pointer ${
              isDarkMode
                ? "text-zinc-400 hover:text-white"
                : "text-zinc-600 hover:text-zinc-900"
            }`}
          >
            <span>Kembali ke atas</span>
            <ArrowUp className="size-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
