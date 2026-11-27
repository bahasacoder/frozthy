"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { Moon, Search, ShoppingBag, Sun, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import PbcLogo from "@/public/assets/pbc-logo.svg";

export default function Navbar() {
   const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { isDarkMode, setIsDarkMode } = useTheme();

  // Ambil data item keranjang dari Redux Store
  const cartItems = useSelector(
    (state: any) => state.cart?.items || state.cart?.cartItems || []
  );

  const totalCartQty = useMemo(
    () =>
      cartItems.reduce(
        (sum: number, item: any) => sum + (Number(item.quantity) || 1),
        0
      ),
    [cartItems]
  );

  // State mounted untuk mencegah Hydration Mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Nilai aman yang dipakai saat render JSX
  const clientDarkMode = mounted ? isDarkMode : true;
  const clientCartCount = mounted ? totalCartQty : 0;

  // Definisikan daftar menu beserta rute URL-nya
const navItems = [
  { label: "Beranda", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact Us", href: "/contact" },
  { label: "Recipes", href: "/recipes" },
  { label: "Today's", href: "/todays" },
];
  const handleSearchSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const trimmed = searchQuery.trim();
  if (!trimmed) return;

  // Tutup menu & arahkan ke halaman produk dengan query pencarian
  setIsSearchOpen(false);
  setIsMobileMenuOpen(false);
  router.push(`/products?search=${encodeURIComponent(trimmed)}`);
};

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-500 ${
        isDarkMode
          ? "bg-[#0b0c10]/80 border-gray-800"
          : "bg-white/80 border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Logo Brand */}
        <Link
          href="/"
          onClick={() => {
            setIsMobileMenuOpen(false);
            setIsSearchOpen(false);
          }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <motion.div
              whileHover={{ rotate: 12 }}
              className="w-10 h-10 bg-gradient-to-tr from-cyan-500 to-fuchsia-500 rounded-xl flex items-center justify-center shadow-lg"
            >
              <Image src={PbcLogo} alt="PasarBone Logo" width={30} height={30} />
            </motion.div>
            <span
              className={`font-bold text-xl tracking-wider transition-colors ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Pasar<span className="text-cyan-500">Bone</span>
            </span>
          </motion.div>
        </Link>
        {/* Desktop Navigation Links */}
        <div
          className={`hidden md:flex items-center gap-8 text-sm font-medium tracking-wide ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-cyan-500 transition-colors duration-200 relative group py-2"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>
         {/* Action Icons + Hamburger Button */}
    <div className="flex items-center gap-1 sm:gap-2">
      {/* Tombol Toggle Mode Terang/Gelap */}
      <motion.button
        whileTap={{ scale: 0.85, rotate: 45 }}
        onClick={() => setIsDarkMode((prev) => !prev)}
        className={`p-2.5 rounded-full transition-colors cursor-pointer ${
          isDarkMode
            ? "text-amber-400 hover:bg-gray-900"
            : "text-indigo-600 hover:bg-gray-200"
        }`}
        aria-label="Toggle Theme"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isDarkMode ? "dark" : "light"}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.button>

      {/* Tombol Toggle Search Bar (Desktop & Tablet) */}
      <button
        type="button"
        aria-label="Search"
        onClick={() => {
          setIsSearchOpen((prev) => !prev);
          setIsMobileMenuOpen(false);
        }}
        className={`hidden sm:inline-flex p-2 rounded-full transition-colors cursor-pointer ${
          isSearchOpen
            ? "text-cyan-500 bg-cyan-500/10"
            : isDarkMode
            ? "text-gray-400 hover:text-white hover:bg-gray-900"
            : "text-gray-600 hover:text-black hover:bg-gray-200"
        }`}
      >
        {isSearchOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <Search className="w-5 h-5" />
        )}
      </button>

      {/* Tombol Keranjang Belanja */}
      <button
        type="button"
        aria-label="Open Cart"
        onClick={() => {
          setIsMobileMenuOpen(false);
          setIsSearchOpen(false);
          setIsCartOpen(true);
        }}
        className={`p-2 rounded-full relative transition-colors cursor-pointer ${
          clientDarkMode
            ? "text-gray-400 hover:text-white hover:bg-gray-900"
            : "text-gray-600 hover:text-black hover:bg-gray-200"
        }`}
      >
        <ShoppingBag className="w-5 h-5" />
        <AnimatePresence>
          {clientCartCount > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-1 -right-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-black text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center"
            >
              {clientCartCount}
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      {/* Tombol Hamburger Menu (Mobile) */}
      <motion.button
        type="button"
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setIsMobileMenuOpen((prev) => !prev);
          setIsSearchOpen(false);
        }}
        aria-label="Toggle Mobile Menu"
        aria-expanded={isMobileMenuOpen}
        className={`md:hidden p-2 rounded-xl transition-colors cursor-pointer ${
          isDarkMode
            ? "text-gray-300 hover:text-white hover:bg-gray-900"
            : "text-gray-700 hover:text-black hover:bg-gray-200"
        }`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isMobileMenuOpen ? "close" : "open"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-cyan-500" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.button>
    </div>
  </div>
      {/* Desktop & Tablet Expandable Search Bar */}
  <AnimatePresence>
    {isSearchOpen && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={`hidden sm:block overflow-hidden border-t ${
          isDarkMode
            ? "bg-[#0b0c10]/95 border-gray-800"
            : "bg-white/95 border-gray-200"
        }`}
      >
        <form
          onSubmit={handleSearchSubmit}
          className="max-w-3xl mx-auto px-6 py-4 flex items-center gap-3"
        >
          <div className="relative flex-1">
            <Search
              className={`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 ${
                isDarkMode ? "text-gray-500" : "text-gray-400"
              }`}
            />
            <input
              type="text"
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari produk lokal Bone (misal: Abon Telur, Sambal Cakalang, Ayam Kampung)..."
              className={`w-full pl-10 pr-9 py-2.5 text-sm rounded-xl border outline-none transition-colors ${
                isDarkMode
                  ? "bg-gray-900/90 border-gray-700 text-white placeholder-gray-500 focus:border-cyan-500"
                  : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-cyan-500"
              }`}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-cyan-500 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <button
            type="submit"
            className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-95 transition-opacity cursor-pointer"
          >
            Cari
          </button>
        </form>
      </motion.div>
    )}
  </AnimatePresence>
     {/* Dropdown Menu Mobile (Termasuk Search Bar di Atas Link) */}
  <AnimatePresence>
    {isMobileMenuOpen && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className={`md:hidden overflow-hidden border-t ${
          isDarkMode
            ? "bg-[#0b0c10]/95 border-gray-800 text-gray-300"
            : "bg-white/95 border-gray-200 text-gray-700"
        }`}
      >
        <div className="px-5 py-4 space-y-4">
          {/* Mobile Search Bar */}
          <form onSubmit={handleSearchSubmit} className="relative">
            <Search
              className={`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 ${
                isDarkMode ? "text-gray-500" : "text-gray-400"
              }`}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari produk di PasarBone..."
              className={`w-full pl-10 pr-16 py-2.5 text-sm rounded-xl border outline-none transition-colors ${
                isDarkMode
                  ? "bg-gray-900 border-gray-800 text-white placeholder-gray-500 focus:border-cyan-500"
                  : "bg-gray-100 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-cyan-500"
              }`}
            />
            {searchQuery && (
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-2.5 py-1 text-xs font-semibold bg-cyan-500 text-black rounded-lg cursor-pointer"
              >
                Cari
              </button>
            )}
          </form>

          {/* Mobile Nav Links */}
          <div className="px-6 py-4 flex flex-col space-y-2">
          {navItems.map((item, idx) => (
            <motion.div
              key={item.href}
              initial={{ x: -12, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: idx * 0.05 }}
            >
              <Link
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2.5 px-3 rounded-xl text-sm font-medium transition-colors ${
                  isDarkMode
                    ? "hover:bg-gray-900 hover:text-cyan-400"
                    : "hover:bg-gray-100 hover:text-cyan-600"
                }`}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
        </div>
        </motion.div>
      )}
    </AnimatePresence>
  </nav>
  );
}
