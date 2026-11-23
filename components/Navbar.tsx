"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Search, ShoppingBag, Sun } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import PbcLogo from "@/public/assets/pbc-logo.svg";

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ isDarkMode, setIsDarkMode }: NavbarProps) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartCount = 0;

  // Definisikan daftar menu beserta rute URL-nya
const navItems = [
  { label: "Beranda", href: "/" },
  { label: "About", href: "/about" },
  { label: "Koleksi", href: "/koleksi" },
  { label: "Contact Us", href: "/contact" },
  { label: "Recipes", href: "/recipes" },
  { label: "Today's", href: "/todays" },
];
  

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-500 ${
        isDarkMode
          ? "bg-[#0b0c10]/80 border-gray-800"
          : "bg-white/80 border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <motion.div
            whileHover={{ rotate: 12 }}
            className="w-10 h-10 bg-gradient-to-tr from-cyan-500 to-fuchsia-500 rounded-xl flex items-center justify-center shadow-lg"
          >
            <Image src={PbcLogo} alt='PasarBone Logo' width={30} height={30} />
          </motion.div>
          <span
            className={`font-bold text-xl tracking-wider transition-colors ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Pasar<span className="text-cyan-500">Bone</span>
          </span>
        </motion.div>

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

        <div className="flex items-center gap-2">
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

          <button
            className={`p-2 rounded-full transition-colors ${
              isDarkMode
                ? "text-gray-400 hover:text-white hover:bg-gray-900"
                : "text-gray-600 hover:text-black hover:bg-gray-200"
            }`}
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={() => setIsCartOpen(true)}
            className={`p-2 rounded-full relative transition-colors ${
              isDarkMode
                ? "text-gray-400 hover:text-white hover:bg-gray-900"
                : "text-gray-600 hover:text-black hover:bg-gray-200"
            }`}
          >
            <ShoppingBag className="w-5 h-5" />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-1 -right-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-black text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </nav>
  );
}