"use client"
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { addListToCheckeds, removeListFromCheckout, clearCheckout } from '@/lib/features/checkout/checkoutSlice'; // Sesuaikan dengan jalur file Anda
import { RootState } from "@/lib/store";

interface CheckoutItem {
  idList?: string | number;
  idCheckout?: string | number;
  productName?: string;
    productImage?: string;

    hargaItem?: string | number;
    hargaDiskon?: string | number;
    totalHargaList?: string | number;
  diskonHarga?: number;
  totalHargaJadi?: number;
  quantity?: number;
  [key: string]: unknown;
}

type CheckoutList = CheckoutItem[];

export default function YourOrderInfo() {

    const dispatch = useDispatch();
      const [couponCode, setCouponCode] = useState('');
    // 1. Ambil data biayaPengiriman dari checkoutSlice
const biayaPengirimanFromStore = useAppSelector((state) => state.checkout.biayaPengiriman) ?? 0;
const [biayaPengiriman, setBiayaPengiriman] = useState<number>(() => {
    if (typeof window !== 'undefined') {
        const savedDelivery = localStorage.getItem('user_shipping_price');
        if (savedDelivery !== null) return Number(savedDelivery);
    }
    return Number(biayaPengirimanFromStore);
});

// 2. Ambil juga biayaLayanan jika ada di slice yang sama (atau berikan default 0)
const biayaLayanan = useAppSelector((state) => state.checkout.biayaLayanan) ?? 0;
      // 1. Ambil data items dari Redux Store (default ke array kosong jika null/undefined)
        const checkedItems = (useAppSelector((state: RootState) => state.checkout.items) ?? []) as unknown[];
        const getItemsCart = (useAppSelector((state: RootState) => state.cart.items) ?? []) as unknown as CheckoutItem[];      
            // const checkoutGroups: CheckoutList[] = checkedItems.filter((group): group is CheckoutList => Array.isArray(group));
            const checkoutGroups: CheckoutItem[] = checkedItems.flatMap((group) => 
                Array.isArray(group) ? group : [group]
            );
                        const checkedItemsStringify: string[] = checkoutGroups.map((chites: CheckoutItem): string => JSON.stringify(chites));
            
const getIdListItemCheck = checkoutGroups.map((item) => item.idList).filter(Boolean);

            const getListItemCheckout: CheckoutItem[] = getIdListItemCheck
              .map((gilic) => getItemsCart.find((gisfy) => (gisfy as CheckoutItem).idList === gilic))
              .filter((item): item is CheckoutItem => Boolean(item));
        // 1. Dapatkan daftar idList yang di-check (tanpa stringify/parse yang berat)

                // 2. Hitung hargaPerIdList SECARA AKURAT langsung dari data checkoutGroups
            const hargaPerIdList = checkoutGroups.reduce((acc, checkedItem) => {
                const id = checkedItem.idList;
                if (id === undefined || id === null) return acc;

                // Cari data item yang bersangkutan di dalam Cart untuk mengambil harga TERBARU (fresh)
                const cartItem = getItemsCart.find((gisfy) => gisfy.idList === id);
                
                // UTAMA: Gunakan harga dari Cart, tapi GUNAKAN QUANTITY dari item yang sedang di-check!
                // Jika data di cartItem tidak ketemu, gunakan harga dari checkedItem itu sendiri sebagai cadangan
                const harga = Number(cartItem?.hargaItem ?? checkedItem.hargaItem ?? 0);
                const qty = Number(checkedItem.quantity ?? cartItem?.quantity ?? 1);
                const totalItem = harga * qty;

                // Akumulasikan total harga berdasarkan idList yang sama
                if (acc[id]) {
                    acc[id] += totalItem;
                } else {
                    acc[id] = totalItem;
                }

                return acc;
            }, {} as Record<string | number, number>);
            // 4. Hitung total HARGA semua produk (Menggunakan data fresh dari getListItemCheckout)
    const totalHargaCart = getListItemCheckout.reduce((accumulator: number, item: CheckoutItem) => {
      const harga = Number(item.hargaItem ?? 0);
      const qty = Number(item.quantity ?? 1); // Default ke 1 jika quantity tidak ada
      return accumulator + (harga * qty);
    }, 0);
    
         // 1. Menghitung total HARGA semua produk
        // const totalHargaList = getListItemCheckout.reduce((accumulator: number, item: CheckoutItem) => {
        // return accumulator + Number(item.hargaItem ?? 0) * Number(item.quantity ?? 0);
        // }, 0); // 0 adalah nilai awal (initial value) angka hitungan
        const totalHargaDiskon = getListItemCheckout.reduce((accumulator: number, item: CheckoutItem) => {
          return accumulator + Number(item.hargaDiskon ?? 0) * Number(item.quantity ?? 0);
        }, 0);
        const totalBiayaPajak = getListItemCheckout.reduce((accumulator: number, item: CheckoutItem) => {
          return accumulator + Number(item.biayaPajak ?? 0) * Number(item.quantity ?? 0);
        }, 0);
    // 2. Menghitung total STOK barang yang tersedia
    const totalStok = getListItemCheckout.reduce((acc: number, item: CheckoutItem) => {
      return acc + Number(item.quantity ?? 0);
    }, 0);

    // 1. Inisialisasi state dengan membaca langsung dari localStorage (Aman untuk Next.js/SSR)
    const [deliveryType, setDeliveryType] = useState<string>(() => {
    if (typeof window !== 'undefined') {
        // Ambil data berdasarkan kunci localStorage yang digunakan sebelumnya
        const savedDelivery = localStorage.getItem('user_shipping_price');
        return savedDelivery !== null ? savedDelivery : "";
    }
    return "";
    });


    // 2. Buat fungsi handler onChange untuk memperbarui state DAN localStorage sekaligus
    const handleDeliveryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setDeliveryType(value);
        localStorage.setItem('user_shipping_price', value); // Menyimpan permanen ke browser
        setBiayaPengiriman(Number(value))
    };
    
    //const totalPayable = totalHargaCart - totalHargaDiskon + biayaPengiriman + biayaLayanan
    
    // 3. Hitung total yang harus dibayar dengan proteksi nilai default
    const totalPayable = 
    (totalHargaCart ?? 0) - 
    (totalHargaDiskon ?? 0) + 
    biayaPengiriman + 
    biayaLayanan;

    
    
    const formatIDR = (value: any) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            maximumFractionDigits: 0 // Menghilangkan ,00 di akhir nominal
        }).format(value || 0);
    };


    return (
        <>
        <div id="your_order" className="w-full mx-auto mt-4 space-y-6 antialiased font-sans selection:bg-blue-500 selection:text-white">
                            
                            {/* Main Order Card Structure Container */}
                            <div className="overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-sm ring-1 ring-slate-100/5">
                                
                                {/* Dynamic Card Header */}
                                <div className="p-6 border-b border-slate-100/80 bg-slate-50/40 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
                                >
                                    <div>
                                        <h2 className="text-lg font-bold tracking-tight text-slate-900">Your Order</h2>
                                        You have 
                                        <span className="font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full text-[11px]">{totalStok} items</span> 
                                        in your cart
                                    </div>
                                    <button 
                                        type="button"
                                        className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:text-slate-900 active:scale-98"
                                    >
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                        </svg>
                                        Ubah Belanja
                                    </button>
                                </div>
                                {/* Dynamic Content Loop / Alternative Empty Illustration Block */}
                                <div className="p-6 bg-white">
                                    {/* Dynamic Content Loop / Alternative Empty Illustration Block */}
                                    <div className="p-6 bg-white">
                                        {getListItemCheckout.length === 0 ? (
                                            <div className="flex flex-col items-center justify-center py-8 text-center">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 border border-slate-100 shadow-inner">
                                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                                </svg>
                                            </div>
                                            <h3 className="mt-4 text-sm font-semibold text-slate-900">Your cart is empty</h3>
                                            <p className="mt-1 text-xs text-slate-400 max-w-xs">Looks like you haven't added any products to your layout summary yet.</p>
                                            </div>
                                        ) : (
                                            <div className="divide-y divide-slate-100">
                                                {/* Product items loop structure would map here dynamically */}
                                                { getListItemCheckout.map((getlic, index) => {
                                                    // Hitung total harga asli dan total diskon berdasarkan quantity yang sudah terakumulasi
                                                    const totalHarga = Number(getlic?.hargaItem ?? 0) * Number(getlic?.quantity ?? 1);
                                                    const totalDiskon = Number(getlic?.hargaDiskon ?? 0) * Number(getlic?.quantity ?? 1);
                                                    const hargaAkhirItem = totalHarga - totalDiskon;
                                                return(
                                                                    <div key={getlic?.idList || index} className="flex items-center justify-between gap-4">
                                                                        <div className="flex h-full items-center gap-4">
                                                                            <img
                                                                                src={getlic?.productImage}
                                                                                alt="Red cap"
                                                                                className="size-15.5 rounded-sm object-cover"
                                                                            />
                                                                            <div className="flex flex-col gap-1">
                                                                                <p className="text-base font-medium">{getlic?.productName} {getlic?.idList} : {getlic?.quantity} Pcs</p>
                                                                                <p className="text-muted-foreground text-base">Paket : {formatIDR(getlic?.hargaItem)}</p>
                                                                                <p className="text-muted-foreground text-base">Diskon : {formatIDR(Number(getlic?.hargaDiskon))}</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="sm:text-end">
                                                                            <span className="text-lg font-semibold">
                                                                            {formatIDR(hargaAkhirItem)}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                )})}
                                            </div>
                                        )}
                                    </div>
                                    {/* Financial Calculation Summary Module */}
                                    <div className="p-6 border-t border-slate-100 bg-slate-50/20 space-y-3.5">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-slate-500 font-medium">Subtotal</span>
                                            <span className="font-semibold text-slate-800">{formatIDR(totalHargaCart)}</span>
                                        </div>
                                        
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-slate-500 font-medium">Discount (-)</span>
                                            <span className="font-semibold text-slate-400">{formatIDR(totalHargaDiskon)}</span>
                                        </div>

                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-slate-500 font-medium">Biaya Pajak (+)</span>
                                            <span className="font-semibold text-slate-400">{formatIDR(totalBiayaPajak)}</span>
                                        </div>
                                        
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-slate-500 font-medium">Biaya Layanan (+)</span>
                                            <span className="font-semibold text-slate-800">{formatIDR(biayaLayanan)}</span>
                                        </div>
                                        
                                        {/* --- Interactive Content Area with 2 Select Options Custom Input --- */}
                                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                                
                                                {/* Left Side: Label and Custom Select Component */}
                                                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 flex-1 max-w-xl">
                                                <label 
                                                    htmlFor="delivery-select" 
                                                    className="text-sm font-semibold text-slate-800 shrink-0 tracking-tight"
                                                >
                                                    Opsi Pengambilan
                                                </label>
                                                
                                                <div className="relative w-full sm:max-w-xs">
                                                    <select
                                                        id="delivery-select"
                                                        value={deliveryType} // Diikat ke state yang sudah membaca localStorage
                                                        onChange={handleDeliveryChange} // Memicu perubahan state dan penyimpanan lokal
                                                        className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-2.5 pr-10 text-sm font-medium text-slate-900 outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 cursor-pointer"
                                                        >
                                                        <option value="">Pilih Pengiriman</option>
                                                        <option value="0">Ambil Sendiri</option>
                                                        <option value="5000">Kurir</option>                                                    
                                                        <option value="50000">Executive</option>
                                                    </select>
                                                    
                                                    {/* Elegant Custom Chevron Indicator Overlay */}
                                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400">
                                                    <svg className="h-4 w-4 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                    </svg>
                                                    </div>
                                                </div>
                                                </div>

                                                {/* Right Side: Dynamically Rendered Platform Fee Badging */}
                                                <div className="inline-flex items-center rounded-xl bg-slate-50 px-3 py-1.5 border border-slate-100 shadow-sm sm:bg-transparent sm:border-0 sm:shadow-none sm:p-0">
                                                    <span className="text-sm font-bold text-slate-900 sm:text-base tracking-tight">
                                                        {deliveryType === "" ? "Belum pilih pengiriman" : formatIDR(Number(deliveryType))}
                                                    </span>
                                                </div>

                                        </div>

                                        {/* Grand Balance Highlight Summary Block */}
                                        <div className="mt-2 rounded-xl bg-slate-900 p-4 text-white shadow-sm shadow-slate-900/10">
                                            <div className="flex items-baseline justify-between">
                                            <span className="text-sm font-medium opacity-90">Total Payable</span>
                                            <span className="text-xl font-black tracking-tight text-white">
                                                {formatIDR(totalPayable)}
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Legal Consent Subtext Protection Row */}
                                    <div className="p-5 border-t border-slate-100 bg-white">
                                    <p className="text-[11px] leading-relaxed text-slate-400 text-center">
                                        By placing your order, you agree to our company{" "}
                                        <a href="#" className="font-medium text-slate-600 underline underline-offset-2 transition-colors hover:text-blue-600">Privacy Policy</a>{" "}
                                        and associated public{" "}
                                        <a href="#" className="font-medium text-slate-600 underline underline-offset-2 transition-colors hover:text-blue-600">Conditions of use</a>.
                                    </p>
                                    </div>
                                </div>
                                {/* Promotional Coupon Validation Container */}
                                <div className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm ring-1 ring-slate-100/5">
                                    <div className="mb-4">
                                    <h3 className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-1.5">
                                        <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581a1.44 1.44 0 0 0 2.037 0l4.318-4.318a1.44 1.44 0 0 0 0-2.037l-9.58-9.581A2.25 2.25 0 0 0 9.568 3Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                                        </svg>
                                        Coupon Code
                                    </h3>
                                    <p className="text-xs font-medium text-slate-400 mt-0.5">Enter a valid operational code sequence below to instantly apply discounts.</p>
                                    </div>
                                    
                                    <div className="flex flex-col sm:flex-row gap-3">
                                    <div className="relative flex-1">
                                        <input 
                                        id="coupon-input" 
                                        type="text" 
                                        value={couponCode}
                                        onChange={(e) => setCouponCode(e.target.value)}
                                        placeholder="Add discount code" 
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10" 
                                        />
                                    </div>
                                    
                                    <button 
                                        type="button"
                                        disabled={!couponCode.trim()}
                                        className="inline-flex shrink-0 items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-blue-500/10 transition-all hover:bg-blue-700 active:scale-98 disabled:pointer-events-none disabled:opacity-40"
                                    >
                                        Apply
                                    </button>
                                    </div>
                                </div>
                            </div>
            </div>
        </>
        
    )
}

/*
// TIPS MEMCAH ARRAY UNTUK SATU LIST ITEM
// Menemukan Nilai Per Id List "getListItemCheckout.map"
// 1. Kumpulkan semua item terpilih dari Cart (termasuk yang duplikat idList-nya)
const rawSelectedItems = getIdListItemCheck
  .map((gilic) => getItemsCart.find((gisfy) => gisfy.idList === gilic))
  .filter((item): item is CheckoutItem => Boolean(item));

// 2. Gabungkan & Akumulasikan item yang memiliki idList yang sama
const mergedCheckoutMap = rawSelectedItems.reduce((acc, current) => {
  const id = current.idList;
  if (!id) return acc;

  if (acc[id]) {
    // Jika idList sama ditemukan lagi, akumulasikan nilai-nilainya:
    acc[id].quantity = Number(acc[id].quantity ?? 0) + Number(current.quantity ?? 1);
    acc[id].hargaItem = Number(acc[id].hargaItem ?? 0) + Number(current.hargaItem ?? 0);
    acc[id].hargaDiskon = Number(acc[id].hargaDiskon ?? 0) + Number(current.hargaDiskon ?? 0);
  } else {
    // Jika baru pertama kali ditemukan, buat salinan objeknya
    acc[id] = { 
      ...current,
      quantity: Number(current.quantity ?? 1),
      hargaItem: Number(current.hargaItem ?? 0),
      hargaDiskon: Number(current.hargaDiskon ?? 0)
    };
  }
  return acc;
}, {} as Record<string | number, CheckoutItem>);

// 3. Ubah kembali menjadi Array bersih untuk dipetakan (.map) di UI Anda
const getListItemCheckout: CheckoutItem[] = Object.values(mergedCheckoutMap);

*/