'use client';
import { useState, useEffect } from "react"; 
import Image from "next/image";
import Link from "next/link";
import CheckoutMain from "./checkout-main";
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { addListToCheckeds, removeListFromCheckout, clearCheckout } from '@/lib/features/checkout/checkoutSlice';
import { RootState } from "@/lib/store";

export default function CartCheckoutPage() {
  const dispatch = useAppDispatch();
  const checkedItems = useAppSelector((state: RootState) => state.checkout.items) || [];
  console.log('checkedItems', checkedItems)
  console.log(Array.isArray(checkedItems));
  const [parsedItemArray, setParsedItemArray]  = useState<string[]>([]);

  // 1. Inisialisasi useState dengan array kosong []
const [jsonItemsArray, setJsonItemsArray] = useState<string[]>([]);
// 2. Gunakan useEffect untuk memantau perubahan pada checkedItems
useEffect(() => {
  if (checkedItems && checkedItems.length > 0) {
    // Membuat array baru yang berisi string JSON dari setiap item
    const mappedJson = checkedItems.map(icheck => JSON.stringify(icheck));
    
    // Menyimpan hasil map ke dalam state
    setJsonItemsArray(mappedJson);
  }
}, [checkedItems]); // useEffect akan berjalan setiap kali checkedItems berubah

console.log('jsonItemsArray', jsonItemsArray)
 
// 2. Jalankan konversi data di dalam useEffect
useEffect(() => {
  if (jsonItemsArray && jsonItemsArray.length > 0) {
    // Jalankan .map() untuk mengumpulkan semua objek ke dalam satu array baru
    const arrayBaru = jsonItemsArray.map((jitem) => {
      return JSON.parse(jitem);
    });

    // Masukkan array baru tersebut sekaligus ke dalam state
    setParsedItemArray(arrayBaru);
  }
}, [jsonItemsArray]); // Kode ini hanya berjalan saat jsonItemsArray berubah

// 3. Cara log data state yang benar di React (Taruh di luar fungsi pengubah state)
console.log('Isi parsedItemArray saat render ini:', parsedItemArray);

  return (
    <>
    <div className="w-full">
      <h2 className="text-2xl">Checkout Page</h2>
      {checkedItems.map((icheck, index) => {
        const jsonIcheck = JSON.stringify(icheck);

        return (
          <div key={index}>
            <p>Json : </p>
            <pre>{jsonIcheck}</pre>
          </div>
        );
      })}
    </div>
    
    <div>
      {/* *** */}
      
     
    </div>
     <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {/* Melakukan mapping data ke elemen HTML/JSX */}
        {checkedItems.map((itmcheck, index) => (
          <div 
            key={itmcheck.idList ? `${itmcheck.idList}-${itmcheck.idCheckout ?? index}` : index}
            
          >
            
            {/* Menampilkan Properti Lainnya */}
            <p style={{ margin: '4px 0', fontSize: '14px', color: '#555' }}>
              <strong>ID List:</strong> {itmcheck.idList}
            </p>
            
          </div>
        ))}
      </div>
    </>
  )
}
/*

<div key={index}>
          <ul>
            <li><p>{icheck[0]}</p></li>
          </ul>
        </div>
        
*/