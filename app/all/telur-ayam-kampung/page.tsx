"use client";

import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import type { RootState, AppDispatch } from "@/lib/store";
import { addItemToCart } from '@/lib/features/cart/cartSlice';

import ImageBlock from "./images-kiri";
import OptionsKemasan from "./kemasan";
import HargaItem from './harga-item';
import QuantityInput from './quantity-button';

export default function TelurAyamKampungPage() {
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector((state: RootState) => state.cart.items);
    const [mainProductImage, setMainProductImage] = useState("image_hu8mgj.png");
    const [packetOption, setPacketOptions] = useState("");
    const [hargaItem, setHargaItem] = useState<number>(15000)
    const [nilaiDiskon, setNilaiDiskonState] = useState<number>(0);
    const setNilaiDiskon = (diskon: number): void => {
        setNilaiDiskonState(diskon);
    };
    const [diskonHarga, setDiskonHarga] = useState<number>(0);
    const [paketValue, setpaketValue] = useState<number>(0);
    const [hargaDiskon, setHargaDiskon] = useState<number>(0);
    const [quantityValue, setQuantityValue] = useState<number>(1);
    const [itemProduct, setItemProduct] = useState<any[]>([]);
    const [idList, setIdList] = useState("");
    // const newerIdList = (prefix: string, suffix: string) => {
    //     setIdList(`${prefix}${suffix}`);
    // };

    const [productName, setProductName] = useState('Telur Ayam Kampung');
    const [productImage, setProductImage] = useState('https://iili.io/nwIvykG.jpg');
    const [idKemasan, setIdKemasan] = useState('teyeka01');

    const totalHargaItem = hargaItem - hargaDiskon;
        const [totalHargaJadi, setTotalHargaJadi] = useState<number>(totalHargaItem);

    const handleHargaFromPacket = (hargaPaket: number) => {
        // 1. Simpan harga item ke dalam state
        setHargaItem(hargaPaket);
        console.log("Harga Paket : ", hargaPaket);

        const harga = Number(hargaPaket);
        let diskon: number = 0;

        // 2. Gunakan switch hanya untuk menentukan persentase diskon
        switch (harga) {
            case 3000:
            diskon = 0.01;
            break;
            case 15000:
            diskon = 0.02;
            break;
            case 30000:
            diskon = 0.03;
            break;
            case 50000:
            diskon = 0.04;
            break;
            default:
            diskon = 0;
            break;
        }

        // 3. Hitung nominal diskon ke dalam variabel lokal
        const hasilPotonganHarga = harga * diskon;

        // 4. Perbarui semua state sekaligus di akhir fungsi (Tanpa IIFE/Return bersarang)
        setNilaiDiskon(diskon);
        setHargaDiskon(hasilPotonganHarga);

        // 5. PERBAIKAN LOG: Tampilkan variabel lokal agar nilainya langsung terlihat (bukan dari state)
        console.log("Persentase Diskon : ", diskon);
        console.log("Harga Diskon (Nominal) : ", hasilPotonganHarga);
         const hasilPotongan = harga * diskon;
         // Update state di induk
            setHargaItem(harga);
            setNilaiDiskon(diskon);
            setHargaDiskon(hasilPotongan);
    };
    const handleQuantityChange = (value: number) => {
        setQuantityValue(value);
        console.log('Handle quantity :', value);
    };
  // Fungsi pembantu untuk membuat string acak sepanjang X karakter
  const generateRandomStr = (length: number) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };


  function Str_Random(  length: number) {
      let result = '';
      const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
      
      // Loop to generate characters for the specified length
      for (let i = 0; i < length; i++) {
          const randomInd = Math.floor(Math.random() * characters.length);
          result += characters.charAt(randomInd);
      }
      return result;
    }
    // Sinkronisasi state jika nilai dasar berubah
      useEffect(() => {
        setTotalHargaJadi(hargaItem - diskonHarga);
      }, [hargaItem, diskonHarga]);

    const handleAddToCart = () => {
            // 1. Buat ID unik untuk item saat ini
            const newIdList = `List-${Str_Random(4)}`;
            const newId = `${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
            
            // Simpan ke state lokal untuk item saat ini jika dibutuhkan komponen lain
            setIdList(newIdList);
            
        // 2. Susun objek state produk baru
        const nextProductItemState = {
            id: newId,
            idProduct: generateRandomStr(8),
            idList: newIdList, // Menggunakan ID yang baru saja dibuat di atas
            productName,
            productImage,
            hargaItem,
            hargaDiskon,
            nilaiDiskon, 
            quantity: quantityValue,
            idItem: generateRandomStr(16),
            totalHargaList: (hargaItem - hargaDiskon) * quantityValue,
        };
           // 3. Update state array produk lokal
        const newItemProduct = [...itemProduct, nextProductItemState];
        setItemProduct(newItemProduct);
        // 4. Kirim data ke Redux Store
        dispatch(addItemToCart(nextProductItemState as unknown as Parameters<typeof addItemToCart>[0]));
        console.log('nextProductItemState Add : ', nextProductItemState);
            // ✨ FIX UTAMA: OTOMATIS REFRESH IDLIST UNTUK KLIK BERIKUTNYA
            const freshIdList = `List-${Str_Random(4)}`;
            setIdList(freshIdList); 
        };
    const totalItemsCount = cartItems.reduce(
        (total: number, item: (typeof cartItems)[number]) => total + (item.quantity || 0),
        0,
    );
  return (
    <div className="">

    {/*  <!-- BREADCRUMB NAVIGATION --> */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <nav className="flex space-x-2 text-xs font-medium tracking-wide uppercase text-stone-400">
            <a href="#" className="hover:text-amber-800">Beranda</a>
            <span>/</span>
            <a href="#" className="hover:text-amber-800">Katalog Organik</a>
            <span>/</span>
            <span className="text-stone-700">Detail Produk</span>
        </nav>
    </div>

    {/*  <!-- MAIN PRODUCT VIEW SECTION -->*/}
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/*  <!-- LEFT: PRODUCT IMAGES GALLERY --> */}
            <ImageBlock />

            {/*  <!-- RIGHT: PRODUCT INFO & E-COMMERCE FORM --> */}
            <div className="lg:col-span-6 space-y-6">
                {/* <!-- Product Title & Meta --> */}
                <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100/60 px-3 py-1 rounded-full inline-block">⭐ Pilihan Utama Sehat</span>
                    <h1 className="font-serif text-3xl sm:text-4xl text-amber-900 leading-tight">Telur Ayam Kampung Asli (Premium Pack)</h1>
                    <div className="flex items-center space-x-4 pt-1">
                        <div className="flex text-amber-500 text-sm tracking-tighter">★★★★★</div>
                        <span className="text-xs text-stone-500 font-medium">(48 Ulasan Pelanggan)</span>
                        <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded">Tersedia / Stok Aman</span>
                    </div>
                </div>

                {/*  <!-- Price Area --> */}
                <HargaItem
                    hargaItem={hargaItem}
                    nilaiDiskon={nilaiDiskon}
                    hargaDiskon={hargaDiskon}
                />
                {/*  <!-- Short Description --> */}
                <p className="text-sm text-stone-600 font-light leading-relaxed">
                    Dihasilkan langsung dari sistem peternakan berkelanjutan (*free-range*) tanpa kurungan stres. Kaya akan kandungan Omega-3 alami, vitamin esensial, serta memiliki warna kuning telur oranye pekat yang khas. Higienis dan disortir langsung menggunakan tangan demi kualitas masakan terbaik.
                </p>

                {/*  <!-- E-COMMERCE FORM INTERACTION --> */}
                {/*  <!-- <form onSubmit={(event) => { event.preventDefault(); alert('Item berhasil dimasukkan ke daftar belanja.'); }} className="space-y-6 pt-4 border-t border-stone-200">
                */} 
                    {/*  <!-- Form Field 1: Opsi Paket Ukuran --> */}
                    <OptionsKemasan
                        onChangeHarga={handleHargaFromPacket}
                    />

                    {/*  <!-- Form Field 2: Kuantitas & Tombol Tambah Keranjang --> */}
                    <div className="flex flex-col sm:flex-row gap-4 items-end sm:items-center justify-between">
                        <QuantityInput onQuantityChange={handleQuantityChange} /> 

                        <div className="flex items-center space-x-6">
                            {/*  <!-- Ikon Keranjang Belanja Belanja (Statik / UI) --> */}
                            <button className="relative p-2 text-stone-700 hover:text-amber-800 transition-colors">
                                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                                <span className="absolute top-0 right-0 bg-amber-800 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">{totalItemsCount}</span>
                            </button>
                        </div>
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
                     {/*  <!-- Form Opsi Pengiriman --> */}
                    <div className="flex flex-col sm:flex-row gap-4 items-end sm:items-center">
                        <p>Opsi Pengiriman</p>
                    </div>
                {/*  <!-- 
                </form>
                */}
            </div>
        </div>

        
    </main>
    </div>
  );
}

