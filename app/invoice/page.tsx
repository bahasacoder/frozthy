"use client"
import React from "react";
import { useAppSelector } from '@/lib/hooks';
import InvoiceTru from "./invoice-tiga";
import HalamanTransaksi from "./halaman-transasksi";
import InvoiceJadi from "./invoice-jadi";
import ElegantInvoice from './invoice-page';
import ElegantResponsiveInvoice from './invoice-empat'

export default function InvoicePage() {
const itemCartChecked = useAppSelector((state) => state.checkout.items) ?? [];
console.log('itemCartChecked', itemCartChecked) // data checkout
const arrayIdList = itemCartChecked.map((item) => item.idList); // mengambil idList yang tersimpan di satu checkout
const arrayIdListUnik = [...new Set(itemCartChecked.map((item) => item.idList))];
const getItemsCart = useAppSelector((state) => state.cart.items) ?? [];; // semua item yang tersimpan di cart
console.log('cart tersimpan', getItemsCart);

// 1. Kumpulkan semua idList dari itemCartChecked (Gunakan Set agar pencarian lebih cepat/efisien)
const checkedIds = new Set(itemCartChecked.map((item) => item.idList));
console.log('idList ter check', checkedIds)
// 2. Cocokkan dan saring data dari master data (contoh: getItemsCart)
const getListItemCheckout = getItemsCart.filter((item) => 
  item.idList !== undefined && checkedIds.has(item.idList)
);
console.log('getListItemCheckout', getListItemCheckout) // item yang ter-checkout

// 2. Cocokkan data untuk mendapatkan list item yang akan di-checkout
const getListItemCheckouts = getItemsCart
  .map((gisfy) => {
    // Cari item pasangannya di invoiceCart untuk mengambil data quantity terbaru
    const invoiceItem = itemCartChecked.find((item) => item.idList === gisfy.idList);
    
    if (!invoiceItem) return null;

    // Gabungkan data produk dengan quantity dari invoiceCart
    return {
      ...gisfy,
      quantity: invoiceItem.quantity || 1
    };
  })
  .filter((item): item is any => item !== null); // Filter out item yang tidak cocok

// 3. HITUNG ULANG TOTAL HARGA (Otomatis dikalikan dengan Quantity)

// Total Harga Jadi (Harga setelah diskon)
const totalHargaItem = getListItemCheckouts.reduce((sum, item) => {
  const qty = item.quantity || 1;
  return sum + (Number(item.hargaItem ?? 0) * qty);
}, 0);

// Total Harga List (Harga awal / harga coret)
const totalHargaList = getListItemCheckouts.reduce((sum, item) => {
  const qty = item.quantity || 1;
  return sum + (Number(item.totalHargaList ?? 0) * qty);
}, 0);

// Total Potongan Diskon
const totalHargaDiskon = getListItemCheckouts.reduce((sum, item) => {
  const qty = item.quantity || 1;
  return sum + (Number(item.hargaDiskon ?? 0) * qty);
}, 0);

// const listItemCheckout = 

const formatIDR = (value: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(value);
};

  return (
    <>
      
      {/* // ================================== // */}
      
      <main className="w-full relative mx-auto p-0">
        

          <ElegantResponsiveInvoice />
      </main>
    </>
  )
}