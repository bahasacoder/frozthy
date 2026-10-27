"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch  } from "react-redux";

import type { RootState, AppDispatch } from "@/lib/store";

// import { Product } from '@/lib/features/products/productSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { addItemToCart } from '@/lib/features/cart/cartSlice';
import ImageStage from './image-stage';
import OptionsKemasan from "./kemasan";
import HeaderMain from "./header-main";
import QuantityInput from "./quantity-input";
import FooterMain from "./footer-main";
import CartDialog from "./cart-dialog";

interface ProductItemState {    
          idProduct: string;  
          idList: string,
          idItem: string,
          productName: string;
          productImage: string;
          hargaItem: number | null;
          hargaDiskon: number | null;
          nilaiDiskon: number;
          quantity: number;
          totalHargaList: number;
  }

// Fungsi pembantu untuk membuat string acak sepanjang X karakter
  const generateRandomStr = (length: number) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };
export default function FrozenAyamKampung() {
  const dispatch = useAppDispatch();
  const [productName, setProductName] = useState('Forzen Ayam Kampung'); //diambil dari slice
  const [productImage, setProductImage] = useState('https://iili.io/nNgGKhJ.jpg'); //diambil dari slice
  const [idList, setIdList] = useState(generateRandomStr(4));
  const [hargaItem, setHargaItem] = useState(55000);
  const [nilaiDiskon, setNilaiDiskon] = useState(0);
  const [hargaDiskon, setHargaDiskon] = useState(0);
    const [quantityValue, setQuantityValue] = useState(1);

  const [itemProduct, setItemProduct] = useState<ProductItemState[]>([]);
  const [productState, setProductState] = useState<ProductItemState>({
        idProduct: generateRandomStr(8),
        idList,
        idItem: generateRandomStr(16),
        productName: productName, // Replace with actual product name
        productImage: productImage, // Replace with actual image URL or path
        hargaItem,
        hargaDiskon,
        nilaiDiskon,
        quantity: quantityValue, // Assuming quantity is the same as childValue
        totalHargaList: (hargaItem - hargaDiskon) * quantityValue,
      });

  // State interaktif untuk galeri foto produk
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  // State interaktif untuk pemilihan ukuran (Size) sepatu
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  
  const handleHargaChange = (harga: number) => {
    let diskon: number = 0;
    
      // 1. Tentukan nilai diskon hanya berdasarkan harga melalui switch
      switch (harga) {
        case 35000:
        case 55000:
          diskon = 0.00;
          break;
        case 75000:
          diskon = 0.25;
          break;
        case 90000:
          diskon = 0.30;
          break;
        default:
          diskon = 0.00;
          break;
      }
    
      // 2. Jalankan semua pembaruan state sekaligus secara berurutan
      setNilaiDiskon(diskon);
      setHargaDiskon(harga * diskon);
      setHargaItem(harga);
    console.log('handleHargaChange', harga)

  }

  const handleQuantityChange = (value: number) => {
       setQuantityValue(value);
       console.log('QuantityValue from child:', value);
  }

  const d = new Date();
  // Membuat format YYYYMMDD-HHMMSS
  const exactTime = d.getFullYear() +
                    String(d.getMonth() + 1).padStart(2, '0') +
                    String(d.getDate()).padStart(2, '0') + "-" +
                    String(d.getHours()).padStart(2, '0') +
                    String(d.getMinutes()).padStart(2, '0') +
                    String(d.getSeconds()).padStart(2, '0');

  function handleAddToCart(): void {
    const newIdList = `List-${generateRandomStr(4)}`;
    setIdList(newIdList);
    const newId = `${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
    const nextProductItemState = {
      id: newId,
      idProduct: generateRandomStr(8),
      idList: newIdList,
      productName,
      productImage,
      hargaItem,
      hargaDiskon,
      nilaiDiskon,
      diskonHarga: hargaDiskon,
      diskonValue: nilaiDiskon,
      quantity: quantityValue,
      idItem: generateRandomStr(16),
      totalHargaList: (hargaItem - hargaDiskon) * quantityValue,
    };
     const newItemProduct = [...itemProduct, nextProductItemState];
      setItemProduct(newItemProduct);
    

    dispatch(addItemToCart(nextProductItemState as unknown as Parameters<typeof addItemToCart>[0]));
    console.log('nextProductItemState Add : ', nextProductItemState)
     // ✨ FIX UTAMA: OTOMATIS REFRESH IDLIST UNTUK KLIK BERIKUTNYA
    const freshIdList = `List-${generateRandomStr(4)}`;
    setIdList(freshIdList); 
  }
  
    const cartItems = useAppSelector((state: RootState) => state.cart.items);
  
    const totalItemsCount = cartItems.reduce((total, item) => total + (item.quantity || 0), 0);

  return (
    <div className="min-h-screen bg-[#f9fafb] text-[#1f2937] font-sans antialiased">
      
      {/* 1. TOP HEADER / APPMAR NAVIGATION <HeaderMain /> */}
      
      {/* 2. BREADCRUMBS NAVIGATION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs font-medium text-gray-400 flex items-center gap-2">
        <a href="#" className="hover:text-gray-600">Frozen</a> <span>/</span>
        <a href="#" className="hover:text-gray-600">Ayam Kampung</a> <span>/</span>
        <span className="text-gray-600 font-semibold">*</span>
      </div>

      {/* 3. MAIN PRODUCT CONATINER GRID */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: INTERACTIVE IMAGE GALLERY (Lg: spans 7 columns) */}
          <ImageStage />

          {/* RIGHT COLUMN: PRODUCT SPECIFICS & TRANSACTION FORM (Lg: spans 5 columns) */}
          <div className="lg:col-span-5 space-y-6 bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm">
            <div>
              <span className="text-xs font-bold tracking-widest text-blue-600 uppercase block mb-1">Running Performance</span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight">
                {productName}
              </h1>
              <p className="text-xs font-mono text-gray-400 mt-1">PRODUCT ID: <span className="text-gray-600">EXT-AZP-32S</span></p>
            </div>

            {/* Price Area Layout */}
            <div className="border-y border-gray-100 py-4 flex items-baseline gap-3">
              <span className="text-3xl font-black text-gray-900">{hargaItem - hargaDiskon}</span>
              <span className="text-sm text-gray-400 line-through">{hargaItem}</span>
              <span className="text-xs font-extrabold bg-red-100 text-red-600 px-2 py-0.5 rounded-md">- {nilaiDiskon*100} % OFF</span>
            </div>

            {/* Short Meta Description */}
            <p className="text-sm text-gray-600 leading-relaxed">
              Didesain khusus untuk para pelari perkotaan, **Air Zoom Pegasus** menghadirkan kombinasi bantalan responsif busa premium dan sirkulasi udara maksimal berkat lapisan upper mesh transparan yang aerodinamis.
            </p>

            {/* INTERACTIVE COMPONENT: SIZE SELECTION */}
            <OptionsKemasan onChangeHarga={handleHargaChange} />

            {/* INTERACTIVE COMPONENT: QUANTITY PICKER */}
            <div className="flex items-center justify-between">
              <QuantityInput onQuantityChange={handleQuantityChange} />
              <div className="flex items-center gap-2.5">
                  <CartDialog />
                      <span className="bg-primary text-primary-foreground rounded-full px-2 py-1 text-sm font-bold">
                        {totalItemsCount}
                      </span>
               </div>
            </div>
            {/* TRANSACTION ACTION BUTTONS */}
            <div className="space-y-3 pt-4">
              <button
                type="button"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-xl transition shadow-lg shadow-blue-100 flex items-center justify-center gap-2 text-sm"
                onClick={handleAddToCart}              
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

      {/* 4. FOOTER INFORMAS I <FooterMain /> */}
      

    </div>
  );
}

