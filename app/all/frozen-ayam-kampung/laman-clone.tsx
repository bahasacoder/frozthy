"use client"
import React, { useState } from 'react';

export default function AirZoomPegasusClone() {
  // State interaktif untuk galeri foto produk
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  // State interaktif untuk pemilihan ukuran (Size) sepatu
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  // State interaktif untuk jumlah barang belanjaan
  const [quantity, setQuantity] = useState(1);

  // Data aset dummy yang disesuaikan dengan tema ExtremeStore
  const productImages = [
    'https://unsplash.com', // Gambar Utama (Sepatu Merah)
    'https://unsplash.com', // Gambar Samping 1
    'https://unsplash.com', // Gambar Detail Sol
  ];

  const availableSizes = [38, 39, 40, 41, 42, 43, 44];

  // Logika kuantitas tombol tambah dan kurang
  const incrementQty = () => setQuantity((prev) => Math.min(prev + 1, 10));
  const decrementQty = () => setQuantity((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-[#f9fafb] text-[#1f2937] font-sans antialiased">
      
      {/* 1. TOP HEADER / APPMAR NAVIGATION */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-black tracking-tighter text-blue-600">EXTREMESTORE</span>
            <span className="hidden sm:inline-block text-xs bg-gray-100 font-bold px-2 py-1 rounded text-gray-500">
              SPORT EDITION
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-600">
            <a href="#" className="hover:text-blue-600 transition">Men</a>
            <a href="#" className="hover:text-blue-600 transition">Women</a>
            <a href="#" className="hover:text-blue-600 transition">Kids</a>
            <a href="#" className="text-red-500 font-bold hover:text-red-600 transition">Sales</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-600 hover:text-blue-600 transition">
              🛒 <span className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. BREADCRUMBS NAVIGATION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs font-medium text-gray-400 flex items-center gap-2">
        <a href="#" className="hover:text-gray-600">Home</a> <span>/</span>
        <a href="#" className="hover:text-gray-600">Shoes</a> <span>/</span>
        <span className="text-gray-600 font-semibold">Air Zoom Pegasus</span>
      </div>

      {/* 3. MAIN PRODUCT CONATINER GRID */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: INTERACTIVE IMAGE GALLERY (Lg: spans 7 columns) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Stage Image */}
            <div className="bg-white p-4 sm:p-8 rounded-2xl border border-gray-100 shadow-sm flex justify-center items-center overflow-hidden aspect-square sm:aspect-[4/3] md:aspect-video lg:aspect-square">
              <img 
                src={productImages[activeImageIndex]} 
                alt="Air Zoom Pegasus Showcase" 
                className="w-full h-full object-contain mix-blend-multiply hover:scale-105 transition duration-300 transform"
              />
            </div>
            {/* Gallery Slide Grid Thumbnails */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {productImages.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`bg-white p-2 sm:p-3 rounded-xl border transition flex justify-center items-center aspect-square ${
                    activeImageIndex === idx ? 'border-blue-600 ring-2 ring-blue-100' : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <img src={imgUrl} alt="Thumbnail preview" className="max-h-full object-contain mix-blend-multiply" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: PRODUCT SPECIFICS & TRANSACTION FORM (Lg: spans 5 columns) */}
          <div className="lg:col-span-5 space-y-6 bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm">
            <div>
              <span className="text-xs font-bold tracking-widest text-blue-600 uppercase block mb-1">Running Performance</span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Nike Air Zoom Pegasus Premium
              </h1>
              <p className="text-xs font-mono text-gray-400 mt-1">PRODUCT ID: <span className="text-gray-600">EXT-AZP-32S</span></p>
            </div>

            {/* Price Area Layout */}
            <div className="border-y border-gray-100 py-4 flex items-baseline gap-3">
              <span className="text-3xl font-black text-gray-900">\$52.00</span>
              <span className="text-sm text-gray-400 line-through">\$97.00</span>
              <span className="text-xs font-extrabold bg-red-100 text-red-600 px-2 py-0.5 rounded-md">-46% OFF</span>
            </div>

            {/* Short Meta Description */}
            <p className="text-sm text-gray-600 leading-relaxed">
              Didesain khusus untuk para pelari perkotaan, **Air Zoom Pegasus** menghadirkan kombinasi bantalan responsif busa premium dan sirkulasi udara maksimal berkat lapisan upper mesh transparan yang aerodinamis.
            </p>

            {/* INTERACTIVE COMPONENT: SIZE SELECTION */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-gray-900 uppercase">Pilih Ukuran (EU Size):</span>
                <button className="text-blue-600 hover:underline">Panduan Ukuran</button>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                {availableSizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`py-2.5 text-xs font-bold rounded-lg border text-center transition ${
                      selectedSize === size
                        ? 'bg-gray-900 text-white border-gray-900'
                        : 'bg-white text-gray-800 border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* INTERACTIVE COMPONENT: QUANTITY PICKER */}
            <div className="space-y-3 pt-2">
              <label className="text-xs font-bold text-gray-900 uppercase block">Jumlah Jumlah:</label>
              <div className="flex items-center border border-gray-200 rounded-lg w-32 bg-gray-50 overflow-hidden">
                <button 
                  type="button"
                  onClick={decrementQty}
                  disabled={quantity <= 1}
                  className="w-10 h-10 flex items-center justify-center font-bold text-gray-600 hover:bg-gray-200 disabled:opacity-40 transition"
                >
                  −
                </button>
                <span className="flex-1 text-center text-sm font-bold text-gray-800 select-none">{quantity}</span>
                <button 
                  type="button"
                  onClick={incrementQty}
                  disabled={quantity >= 10}
                  className="w-10 h-10 flex items-center justify-center font-bold text-gray-600 hover:bg-gray-200 disabled:opacity-40 transition"
                >
                  +
                </button>
              </div>
            </div>

            {/* TRANSACTION ACTION BUTTONS */}
            <div className="space-y-3 pt-4">
              <button
                type="button"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-xl transition shadow-lg shadow-blue-100 flex items-center justify-center gap-2 text-sm"
              >
                💼 Tambahkan ke Keranjang
              </button>
              <button
                type="button"
                className="w-full bg-gray-50 border border-gray-200 hover:bg-gray-100 text-gray-800 font-bold py-3.5 px-4 rounded-xl transition text-sm"
              >
                ❤️ Simpan ke Wishlist
              </button>
            </div>
          </div>

        </div>
      </main>

      {/* 4. FOOTER INFORMASI */}
      <footer className="bg-white border-t border-gray-200 py-6 mt-16 text-center text-xs font-medium text-gray-400">
        <p>© 2026 ExtremeStore Portfolio. Dibuat Menggunakan React & Tailwind CSS.</p>
      </footer>

    </div>
  );
}
