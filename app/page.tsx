"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Heart, Search, Star, ArrowRight, X, Sun, Moon } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ProductGridProd from '@/components/blocks/ProductGridProd';

// Mock Data untuk Produk dengan visual riil
const PRODUCTS = [
  { id: 1, name: 'CyberSphere Over-Ear ANC', price: 299, image: 'https://unsplash.com', category: 'Audio', rating: 4.9 },
  { id: 2, name: 'ChronoVibe Minimalist Watch', price: 189, image: 'https://unsplash.com', category: 'Aksesoris', rating: 4.7 },
  { id: 3, name: 'LumorGlass Smart Glasses', price: 420, image: 'https://unsplash.com', category: 'Gadget', rating: 4.8 },
  { id: 4, name: 'AeroStride Future Runner', price: 150, image: 'https://unsplash.com', category: 'Sepatu', rating: 4.6 },
];

export default function ModernEcommerceHome() {
  const [scrollY, setScrollY] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Fitur Baru: State untuk Mode Gelap / Terang
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Efek Parallax Scroll Tracker
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const toggleFavorite = (id: number) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  // Varian Animasi untuk Konten Staggered (Berurutan)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 60 } }
  };

  // Filter produk berdasarkan kategori aktif
  const filteredProducts = activeCategory === 'Semua' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div
      className={`min-h-screen w-full max-w-full flex flex-col font-sans selection:bg-cyan-500 selection:text-black overflow-x-clip transition-colors duration-700 ${
        isDarkMode ? "bg-[#0b0c10] text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      
      {/* 1. NAVIGATION BAR */} 
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      {/* 2. CINEMATIC HERO SECTION */}
      <header className="relative h-screen flex items-center justify-center overflow-visible mt-10">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed transform scale-105"
          style={{ 
            backgroundImage: `url('https://unsplash.com')`,
            y: scrollY * 0.2
          }}
        />
        <div className={`absolute inset-0 transition-colors duration-700 ${
          isDarkMode ? 'bg-gradient-to-b from-[#0b0c10]/40 via-[#0b0c10]/70 to-[#0b0c10]' : 'bg-gradient-to-b from-white/10 via-white/60 to-gray-50'
        }`} />

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6 mt-16"
        >
          <span className={`inline-block text-xs uppercase tracking-[0.4em] font-semibold px-4 py-2 rounded-full border backdrop-blur-md ${
            isDarkMode ? 'text-cyan-400 bg-cyan-950/40 border-cyan-800/50' : 'text-cyan-700 bg-cyan-50/60 border-cyan-200'
          }`}>
            Kebutuhan Harian Anda, Kini Lebih Mudah.
          </span>
          <h1 className={`text-5xl md:text-8xl font-extrabold tracking-tight leading-none ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Kesegaran Alam <br />
            <span className="bg-gradient-to-r from-cyan-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
              Hadir Di Meja Anda.
            </span>
          </h1>
          <p className={`text-base md:text-xl max-w-xl mx-auto font-light leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Belanja kebutuhan pangan segar, olahan beku alami, dan produk  UMKM, serta Kebutuhan Harian Rumah Tangga.
          </p>
          <div className="pt-6 flex justify-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={`group px-8 py-4 font-semibold rounded-full shadow-2xl flex items-center gap-3 transition-colors ${
                isDarkMode ? 'bg-white text-black hover:bg-cyan-400' : 'bg-black text-white hover:bg-cyan-600'
              }`}
            >
              <span>Ayo Shopping</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </header>

      {/* 3. ETALASE PRODUK UTAMA */}
      <main className="max-w-7xl mx-auto px-6 py-24 space-y-16">
        
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 border-b pb-8 ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
          <div>
            <span className="text-xs text-cyan-500 tracking-widest font-bold uppercase block mb-2">// KATALOG UNGGULAN</span>
            <h2 className={`text-3xl md:text-5xl font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Produk Lab Terkini.</h2>
          </div>
          
         {/* Tab Filter (Dibenahi & Responsif) */}
          <div className={`flex flex-wrap gap-1 p-1 rounded-2xl md:rounded-full border backdrop-blur-sm ${isDarkMode ? 'bg-gray-900/60 border-gray-800' : 'bg-gray-200/60 border-gray-300'}`}>
            {['Semua', 'Audio', 'Gadget', 'Aksesoris', 'Sepatu'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-xs md:text-sm font-medium rounded-full transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-cyan-500 text-white'
                    : isDarkMode
                      ? 'text-gray-400 hover:text-white'
                      : 'text-gray-600 hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="w-full">
            <AnimatePresence>
              <motion.div 
                key={activeCategory}
              >
                <ProductGridProd />
              </motion.div>
            </AnimatePresence>
        </div>
      </main>
      </div>
  );
}
