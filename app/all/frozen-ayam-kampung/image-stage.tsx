"use client"
import React, { useState } from 'react';

export default function ImageStage() {
    // State interaktif untuk galeri foto produk
    const [activeImageIndex, setActiveImageIndex] = useState(0);
     
    // Data aset dummy yang disesuaikan dengan tema ExtremeStore
    const productImages = [
        'https://iili.io/nNgGKhJ.jpg', // Gambar Utama (Sepatu Merah)
        'https://iili.io/nNgfHZv.jpg', // Gambar Samping 1
        'https://iili.io/nNrEBv1.jpg', // Gambar Detail Sol
    ];

     return (
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

        
     )
}