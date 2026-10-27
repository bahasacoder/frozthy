'use client';
import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import type { RootState, AppDispatch } from "@/lib/store";
import { addItemToCart } from '@/lib/features/cart/cartSlice';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import CartDialog from '@/components/pages/cart/cart-dialog';

interface QuantityInputProps {
  id?: string;
  label?: string;
  min?: number;
  max?: number;
  step?: number;
  initialValue?: number;
  onQuantityChange: (value: number) => void;
}

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

export default function ProductDetailHimelRCBOPage() {
  const dispatch = useAppDispatch(); 
  const cartItems = useAppSelector((state: RootState) => state.cart.items);
  const min = 1;
  const max = 49;
  const [productName, setProductName] = useState('RCBO Himel HDB3LE');
  const [productImage, setProductImage] = useState('https://iili.io/nNdJZLF.jpg');
  const [idItem, setIdItem] = useState('elcbhim3x');
  const [value, setValue] = React.useState<number>(1);
  const [hargaItem, setHargaItem] = useState(170000);
  const [nilaiDiskon, setNilaiDiskon] = useState(0);
  const [hargaDiskon, setHargaDiskon] = useState<number>(0);
  const [idList, setIdList] = useState('');
  const [quantityValue, setQuantityValue] = useState<number>(1);
  const totalHargaItem = hargaItem*quantityValue;
  const [totalHargaList, setTotalHargaList] = useState<number>((hargaItem-hargaDiskon)*quantityValue);  
  const [itemProduct, setItemProduct] = useState<any[]>([]);

  // Fungsi penanganan klik tombol beli untuk mencatat analytics atau redirect
  const handleMarketplaceClick = (platform: string) => {
    console.log(`Pengguna menuju ke marketplace: ${platform}`);
  };

  const spesifikasiData = [
    { label: 'Merek', nilai: 'Himel' },
    { label: 'Tipe Seri', nilai: 'HDB3LE (RCBO)' },
    { label: 'Kapasitas Arus', nilai: '6 Ampere (C6)' },
    { label: 'Jumlah Kutub (Poles)', nilai: '2P (Phase + Neutral)' },
    { label: 'Sensitivitas Kebocoran', nilai: '30 mA (Aman untuk Manusia)' },
    { label: 'Breaking Capacity', nilai: '6000A / 6 kA' },
    { label: 'Tegangan Operasional', nilai: '240V ~ AC (50/60Hz)' },
    { label: 'Sertifikasi Patokan', nilai: 'SNI, IEC/EN 61009-1' },
  ];

  // Fungsi pembantu untuk membuat string acak sepanjang X karakter
  const generateRandomStr = (length: number) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };


 // 1. Inisialisasi state utama
  // 2. Fungsi PUSAT: Melakukan pembatasan (clamping) dan memicu console.log
  const updateQuantityValue = (newValue: number) => {
    // Memastikan nilai tidak kurang dari min dan tidak lebih dari max
    const clamped = Math.min(Math.max(newValue, min), max);
    setValue(clamped);
    setQuantityValue(clamped);
    // Hasil log yang terjamin akurat di konsol browser
    console.log('Quantity Value Aktual:', clamped);
  };

  // 3. Handler Tombol Tambah (+)
  function increment(): void {
    // Ambil nilai terbaru (current) lalu kirim ke fungsi pusat
    updateQuantityValue(value + 1);
  }

  // 4. Handler Tombol Kurang (-)
  function decrement(): void {
    // Ambil nilai terbaru (current) lalu kirim ke fungsi pusat
    updateQuantityValue(value - 1);
  }

  // 5. Handler Ketik Manual di Input
  function handleQuantityChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const num = Number(event.target.value);
    
    // Proteksi: Hanya jalankan jika input berupa angka valid
    if (!isNaN(num)) {
      updateQuantityValue(num);
    }
  }

  function onChangeHarga(event: React.ChangeEvent<HTMLInputElement>): void {
    const hargaByAmpere: Record<string, number> = {
      '6': 150000,
      '10': 170000,
      '16': 190000,
    };
    const harga = hargaByAmpere[event.currentTarget.value];
    if (harga !== undefined) {
      setHargaItem(harga);
    }
    console.log('Change Harga : ', hargaItem)
  }
  const d = new Date();
  // Membuat format YYYYMMDD-HHMMSS
  const exactTime = d.getFullYear() +
                    String(d.getMonth() + 1).padStart(2, '0') +
                    String(d.getDate()).padStart(2, '0') + "-" +
                    String(d.getHours()).padStart(2, '0') +
                    String(d.getMinutes()).padStart(2, '0') +
                    String(d.getSeconds()).padStart(2, '0');
                    
  function handleAddToCart(event: any): void {
    event.preventDefault();
     // 1. Buat ID unik untuk item saat ini
    const newIdList = `List-${Str_Random(4)}`;
    const newId = `${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
    
    // Simpan ke state lokal untuk item saat ini jika dibutuhkan komponen lain
    setIdList(newIdList);

    const nextProductItemState = {
          id: newId,
          idProduct: generateRandomStr(8),
          idList: newIdList,
          productName,
          productImage,
          hargaItem,
          hargaDiskon,
          nilaiDiskon, 
          quantity: quantityValue,
          idItem: generateRandomStr(16),
          totalHargaList: (hargaItem - hargaDiskon) * quantityValue,
        };
      const newItemProduct = [...itemProduct, nextProductItemState];
      setItemProduct(newItemProduct);
    
      const cartProduct = {
                  ...nextProductItemState,
                  id: Date.now(),
      } as Parameters<typeof addItemToCart>[0];
      console.log('handleGetItemProduct (Updated):', newItemProduct);
                console.log('Product added to cart:', nextProductItemState);
                  console.log('addItemToCart', cartProduct)
                              console.log('quantity', quantityValue)
                dispatch(addItemToCart(nextProductItemState as unknown as Parameters<typeof addItemToCart>[0])); // cartProductk
                
       // ✨ FIX UTAMA: OTOMATIS REFRESH IDLIST UNTUK KLIK BERIKUTNYA
      const freshIdList = `List-${Str_Random(4)}`;
      setIdList(freshIdList); 
  }
  
const totalItemsCount = cartItems.reduce(
  (total: number, item: (typeof cartItems)[number]) => total + (item.quantity || 0),
  0,
);
  return (
    <>
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans antialiased">
      
      {/* NAVIGATION BAR */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-wider text-red-600">HIMEL</span>
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-mono font-semibold">
              AUTHORIZED PARTNER
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#spesifikasi" className="text-sm font-medium text-gray-600 hover:text-red-600 transition">
              Spesifikasi
            </a>
            <a href="#fitur" className="text-sm font-medium text-gray-600 hover:text-red-600 transition">
              Fitur
            </a>
            <a 
              href="#beli" 
              className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition shadow-md shadow-red-200"
            >
              Beli Sekarang
            </a>
          </div>
        </div>
      </nav>

      {/* MAIN PRODUCT SECTION */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* LEFT COLUMN: PRODUCT IMAGES */}
          <div className="space-y-4 md:sticky md:top-24">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex justify-center items-center overflow-hidden">
              {/* Anda bisa mengganti src ini dengan component <Image /> Next.js jika aset lokal sudah terdaftar */}
              <img 
                src="https://iili.io/nNdJLzP.jpg" 
                alt="Himel RCBO HDB3LE C6" 
                className="w-full h-auto object-contain rounded-xl hover:scale-105 transition duration-300"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white p-3 rounded-xl border border-red-500 cursor-pointer">
                <div className="aspect-square bg-gray-50 rounded-lg">
                  <img src="https://iili.io/nNdJimB.jpg" alt="image be7eab9d" />
                </div>
              </div>
              <div className="bg-white p-3 rounded-xl border border-gray-100 hover:border-gray-300 cursor-pointer">
                <div className="aspect-square bg-gray-50 rounded-lg">
                  <img src="https://iili.io/nNdJ65Q.jpg" alt="image bb508b0"/>
                </div>
              </div>
              <div className="bg-white p-3 rounded-xl border border-gray-100 hover:border-gray-300 cursor-pointer">
                <div className="aspect-square bg-gray-50 rounded-lg">
                  <img src="https://iili.io/nNdJZLF.jpg" alt="20261016 182130 copy" />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: PRODUCT INFO & ORDER */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold tracking-widest text-red-600 uppercase block mb-1">
                Perlindungan Ganda (MCB + ELCB)
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                Himel RCBO HDB3LE C6 2P 6A 30mA 6000A
              </h1>
              <p className="text-sm text-gray-500 mt-2">
                SKU: <span className="font-mono text-gray-700">ELC-HIMEL-HDB3LE-C6</span>
              </p>
            </div>

            {/* PRICE TAG */}
            <div className="bg-gradient-to-r from-red-50 to-transparent p-4 rounded-xl border border-red-100/50">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-black text-red-600">{hargaItem}</span>
                <span className="text-sm text-gray-400 line-through">{hargaItem}</span>
                <span className="text-xs font-bold bg-red-100 text-red-700 px-2 py-0.5 rounded">- {nilaiDiskon} %</span>
              </div>
              <p className="text-xs text-green-600 font-semibold mt-1">✓ Stok Tersedia (Siap Kirim Besok)</p>
            </div>

            {/* SHORT DESC */}
            <p className="text-gray-600 leading-relaxed text-sm">
              Ganti MCB konvensional Anda dengan <strong>Himel RCBO HDB3LE</strong>! Alat ini tidak hanya membatasi beban arus listrik berlebih (MCB), tetapi juga mendeteksi kebocoran arus atau korsleting akibat kontak manusia (ELCB/Anti-Setrum) dalam waktu kurang dari 0.1 detik.
            </p>

            {/* CORE FEATURES LIST */}
            <div id="fitur" className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t pt-6">
              <div className="flex items-start gap-3">
                <div className="bg-red-100 text-red-600 p-2 rounded-lg text-sm">🛡️</div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900">Super Aman (Dual Protection)</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Proteksi beban lebih dan bahaya sengatan listrik langsung.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-red-100 text-red-600 p-2 rounded-lg text-sm">⚡</div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900">Respons Super Cepat</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Sensitivitas tinggi 30mA memutuskan sirkuit &lt; 0.1 detik.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-red-100 text-red-600 p-2 rounded-lg text-sm">🔧</div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900">Instalasi Mudah</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Desain modular standar 2P (Phase + Neutral) siap pasang.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-red-100 text-red-600 p-2 rounded-lg text-sm">✅</div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900">Teruji Standar SNI</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Jaminan kualitas global standar IEC/EN 61009-1.</p>
                </div>
              </div>
            </div>
            {/* -- Paket / Item  creative-tim -- */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 p-4">
                <label>
                    <input 
                        type="radio" value="6" className="peer hidden" name="himel_HDB3LE" 
                        checked={hargaItem === 150000}
                        onChange={onChangeHarga}
                    />
                    
                    <div className="hover:bg-gray-50 flex items-center justify-between px-4 py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-blue-500">
                        <h2 className="font-medium text-gray-700">1P+N 6A</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-9 h-9 text-blue-600 invisible group-[.peer:checked+&]:visible">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                </label>

                <label>
                    <input 
                      type="radio" value="10" className="peer hidden" name="himel_HDB3LE" 
                      checked={hargaItem === 170000}
                      onChange={onChangeHarga}
                    />
                    
                    <div className="hover:bg-gray-50 flex items-center justify-between px-4 py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-blue-500">
                        <h2 className="font-medium text-gray-700">1P+N 10A</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-9 h-9 text-blue-600 invisible group-[.peer:checked+&]:visible">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                </label>
                <label>
                    <input 
                        type="radio" value="16" className="peer hidden" name="himel_HDB3LE" 
                        checked={hargaItem === 190000}
                        onChange={onChangeHarga}
                    />
                    
                    <div className="hover:bg-gray-50 flex items-center justify-between px-4 py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-blue-500">
                        <h2 className="font-medium text-gray-700">1P+N 16A</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-9 h-9 text-blue-600 invisible group-[.peer:checked+&]:visible">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                </label>
            </div>
            {/* -- Qunatity Input -- */}
            <div className="relative flex max-w-md justify-start items-center gap-2 ">
                <button
                    className="h-8 w-8 px-2 flex items-center bg-slate-800 rounded hover:bg-slate-700"
                    type="button"
                    onClick={decrement}
                    disabled={value <= min}
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth="1.5" 
                        stroke="#FFF" 
                        className="w-8 h-8"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                    </svg>
                </button>
                <input
                    type="number"
                    className="max-w-sm pl-3 h-10 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                    min={min}
                    max={max}
                    placeholder="1"
                    value={value}
                    onChange={handleQuantityChange}
                />
                <button
                    className="h-8 w-8 px-2 flex items-center bg-slate-800 rounded hover:bg-slate-700"
                    type="button"                    
                    onClick={increment}
                    disabled={value >= max}
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth="1.5" 
                        stroke="#FFF" 
                        className="w-8 h-8"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
                <p className="flex items-center mt-2 text-xs text-slate-500">
                    Adjust the number using the + and - controls.
                </p>    
                <div className="flex items-center gap-2.5">
                                  <CartDialog />
                                      <span className="bg-primary text-primary-foreground rounded-full px-2 py-1 text-sm font-bold">
                                        {totalItemsCount}
                                      </span>
                               </div>
            </div>
            <div>
            </div>
            {/* <!-- Tombol Masukkan Keranjang --> */}
                    <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-2">
                            <button 
                                onClick={handleAddToCart}
                                type="button" tabIndex={0} data-slot="button" className="cn-button group/button w-full md:w-[40%]  inline-flex gap-4 border-2 border-blue-200 p-2 rounded-md hover:bg-blue-100 shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 cn-button-variant-default cn-button-size-lg grow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart-plus"><path d="M16 5h6"/><path d="M19 2v6"/><path d="m2.05 2.05 1.099-.028a1 1 0 011.008.815l2.69 14.347A1 1 0 007.83 18H18"/><path d="M4.564 5H12"/><path d="M6.25 14h12.712a2 2 0 001.991-1.57l.172-1.041"/><circle cx="18" cy="20" r="2"/><circle cx="8" cy="20" r="2"/></svg>
                                Masukkan Keranjang</button><button type="button" tabIndex={0} data-slot="button" className="cn-button group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 cn-button-variant-secondary cn-button-size-lg grow">
                            </button>
                            <button type="button" tabIndex={0} data-slot="button" className="cn-button group/button w-full md:w-[40%]  inline-flex gap-4 border-2 border-blue-200 p-2 rounded-md hover:bg-blue-100 shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 cn-button-variant-default cn-button-size-lg grow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-plus"><path d="m14.479 19.374-.971.939a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.219 1.49"/><path d="M15 15h6"/><path d="M18 12v6"/></svg>
                                Beli Langsung
                          </button>
                        </div>

            {/* CALL TO ACTION (CTA) MARKETPLACE BUY */}
            <div id="beli" className="border-t pt-6 space-y-3">
              <h3 className="text-sm font-bold text-gray-900">Beli Aman Lewat Marketplace Resmi:</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <a 
                  href="https://shopee.co.id" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => handleMarketplaceClick('Shopee')}
                  className="flex items-center justify-center gap-2 border border-gray-200 hover:border-orange-500 hover:bg-orange-50 text-sm font-medium py-2.5 px-4 rounded-xl transition"
                >
                  🟠 Shopee
                </a>
                <a 
                  href="https://tokopedia.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => handleMarketplaceClick('Tokopedia')}
                  className="flex items-center justify-center gap-2 border border-gray-200 hover:border-green-500 hover:bg-green-50 text-sm font-medium py-2.5 px-4 rounded-xl transition"
                >
                  🟢 Tokopedia
                </a>
                <a 
                  href="https://lazada.co.id" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => handleMarketplaceClick('Lazada')}
                  className="flex items-center justify-center gap-2 border border-gray-200 hover:border-blue-500 hover:bg-blue-50 text-sm font-medium py-2.5 px-4 rounded-xl transition col-span-2 sm:col-span-1"
                >
                  🔵 Lazada
                </a>
              </div>
            </div>

          </div>
        </div>

       
      </main>

      {/* FOOTER */}

</div>
<div className='w-full max-w-7xl mx-auto'>
  <Tabs defaultValue="overview" className="w-full mx-auto">
        <TabsList className='w-full my-8 bg-gray-200 gap-2'>
          <TabsTrigger value="overview">Specification</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          {/* SPECIFICATION TABLE */}
          <section id="spesifikasi" className="border-t w-full">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Spesifikasi Lengkap Produk</h2>
            <div className="bg-white border rounded-2xl overflow-hidden shadow-sm max-w-6xl">
              <table className="w-full text-sm text-left text-gray-600">
                <tbody>
                  {spesifikasiData.map((spec, index) => (
                    <tr 
                      key={index} 
                      className={`border-b ${index % 2 === 0 ? 'bg-gray-50/50' : ''} last:border-b-0`}
                    >
                      <td className="px-6 py-4 font-bold text-gray-900 w-1/3">{spec.label}</td>
                      <td className="px-6 py-4">{spec.nilai}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </TabsContent>
        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>
                Track performance and user engagement metrics. Monitor trends and
                identify growth opportunities.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Page views are up 25% compared to last month.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
              <CardDescription>
                Generate and download your detailed reports. Export data in
                multiple formats for analysis.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              You have 5 reports ready and available to export.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
              <CardDescription>
                Manage your account preferences and options. Customize your
                experience to fit your needs.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Configure notifications, security, and themes.
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
  </div>

</>
  )
}




function Str_Random(arg0: number) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const length = Math.max(0, Math.floor(arg0));
  let result = '';

  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return result;
}
/*
------------------------------------------------------------------------------

   // 1. Jadikan fungsi ini sebagai pusat pembaruan nilai dan log data
  const updateQuantityValue = (newValue: number) => {
    const clamped = Math.min(Math.max(newValue, min), max);
    setValue(clamped);
    setQuantityValue(clamped);
    console.log('Quantity Value Aktif:', clamped); // PASTI TERBACA DI SINI
  };

  // 2. Perbaiki fungsi increment dengan mengambil nilai state terbaru (current)
  function increment(): void {
    setValue((current) => {
      const next = Math.min(current + 1, max);
      updateQuantityValue(next); // Panggil fungsi utama untuk memicu log
      return next;
    });
  }

  // 3. Perbaiki fungsi decrement dengan mengambil nilai state terbaru (current)
  function decrement(): void {
    setValue((current) => {
      const next = Math.max(current - 1, min);
      updateQuantityValue(next); // Panggil fungsi utama untuk memicu log
      return next;
    });
  }

  // 4. Input ketik manual tetap aman
  function handleQuantityChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const num = Number(event.target.value);
    if (!isNaN(num)) {
      updateQuantityValue(num);
    }
  }
    
------------------------------------------
  */
