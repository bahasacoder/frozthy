"use client"
import React, { useState } from 'react';

export default function HeaderMain() {
  
  return (
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
    
  );
}
