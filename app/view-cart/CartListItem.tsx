"use client"
import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CartItem as CartItemType } from '@/lib/features/cart/cartSlice';
import { removeItemFromCart, onUpdateQuantity, increaseQuantity, decreaseQuantity, clearCart } from '@/lib/features/cart/cartSlice';
import { addListToCheckeds, canceListToCheckeds, addListToCheckout } from '@/lib/features/checkout/checkoutSlice'
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { Checkbox } from "@/components/ui/checkbox";
import  styles from "./CartListItem.module.css";

import Image from "next/image";
import Link from "next/link"; 

interface CartItemProps {
  item: CartItemType;
  onRemove: () => void;
  onUpdateQuantity: (quantity: number) => void;
  onChecked: (item: CartItemType, checked: boolean) => void;
}

export default function CartListItem({ item, onRemove, onUpdateQuantity, onChecked }: CartItemProps) {
  // const { product, quantity } = item; 
  const cartItems = useAppSelector((state) => state.cart.items) || [];
  console.log('Cart List Items View:', cartItems);
  const totalQuantity = useAppSelector((state) => state.cart.totalItems );
  const totalAmount = useAppSelector((state) => state.cart.totalPrice );
  const dispatch = useAppDispatch();
  const [checkedItem, setCheckedItem] = useState<string[]>([]);
  const unitPrice = Number(item.hargaItem ?? 0);
  const itemQuantity = Number(item.quantity ?? 0);
  const totalPrice = unitPrice * itemQuantity;
  const totalHargaDiskon = Number(item.hargaDiskon ?? 0) * Number(item.quantity ?? 0);
  const totalHargaItem = (Number(item.hargaItem ?? 0) * Number(item.quantity ?? 0));
  const totalHargaJadi = totalHargaItem - totalHargaDiskon;

  // Handler ketika status checkbox berubah
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    if (checked) {
      setCheckedItem((prevItems) => {
        if (prevItems.includes(value)) return prevItems;
        return [...prevItems, value];
      });
      onChecked(item, true);
      // if (item.idList !== undefined) dispatch(addListToCheckeds(item.idList));
    } else {
      setCheckedItem((prevItems) => prevItems.filter((checkedId) => checkedId !== value));
      onChecked(item, false);
      // if (item.idList !== undefined) dispatch(canceListToCheckeds(item.idList));
    }
  };
  //const [disableChecked, setDiasbleChecked] = useState(false);
 
  return (    
    <>    
      

    {/* --------- */}
                <div className="flex flex-col gap-4 border-t border-gray-100 py-6 sm:flex-row sm:items-center sm:justify-between">
                  {/* SISI KIRI: Checkbox, Gambar Produk, dan Detail Produk */}
                  <div className="flex flex-1 items-start gap-4 sm:items-center">
                    {/* Checkbox Wrapper */}
                    <div className="flex h-16 items-center">
                      <label className={styles["liquid-checkbox"]}>
                        <input 
                          type="checkbox" 
                          value={item.idList}
                          checked={item.idList !== undefined && checkedItem.includes(item.idList)}
                          onChange={handleCheckboxChange}
                        />
                        <div className={styles["checkbox-box"]}>
                          <svg viewBox="0 0 24 24" className={styles["checkmark"]}>
                            <path d="M4.5 12.75l6 6 9-13.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </label>
                    </div>

                    {/* Gambar Produk */}
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-gray-50 border border-gray-100">
                      <img 
                        src={item.productImage} 
                        alt={item.productName} 
                        className="h-full w-full object-cover object-center" 
                      />
                    </div>

                    {/* Info Teks Produk */}
                    <div className="flex flex-1 flex-col min-w-0">
                      <h3 className="text-base font-semibold text-gray-900 truncate">
                        {item.productName}
                      </h3>
                      
                      <dl className="mt-1 flex flex-wrap gap-x-4 gap-y-0.5 text-xs text-gray-500">
                        <div className="flex gap-1">
                          <dt>Kemasan:</dt>
                          <dd className="font-medium text-gray-700">{item.hargaItem}</dd>
                        </div>
                          <div className="flex gap-1 text-emerald-600">
                            <dt>Diskon:</dt>
                            <dd className="font-medium">{item.hargaDiskon}</dd>
                          </div>
                        
                      </dl>
                    </div>
                  </div>
                  
                  {/* SISI KANAN: Pengatur Jumlah (Quantity) dan Informasi Harga */}
                  <div className="flex items-center justify-between gap-6 pl-12 sm:pl-0 sm:justify-end">
                    {/* Counter Quantity Modern */}
                    <div className="flex items-center rounded-lg border border-gray-200 bg-white p-1 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
                      <button 
                        type="button" 
                        aria-label="Decrease quantity" 
                        className="flex size-7 items-center justify-center rounded-md text-gray-500 hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700"
                        onClick={() => item.idList && dispatch(decreaseQuantity(item.idList))}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 124 124">
                          <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"></path>
                        </svg>
                      </button>

                      <input 
                        type="number" 
                        className="w-10 text-center text-sm font-medium text-gray-900 bg-transparent border-0 p-0 focus:ring-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none dark:text-white"
                        value={item.quantity} 
                        onChange={(e) => {
                          const value = parseInt(e.target.value) || 1;
                          onUpdateQuantity(value);
                        }}
                        step={1}
                      />

                      <button 
                        type="button" 
                        aria-label="Increase quantity" 
                        className="flex size-7 items-center justify-center rounded-md text-gray-500 hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700"
                        onClick={() => item.idList && dispatch(increaseQuantity(item.idList))}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 42 42">
                          <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"></path>
                        </svg>
                      </button>
                    </div>

                    {/* Section Harga & Tombol Hapus */}
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-sm font-semibold text-gray-900">
                          Rp {totalHargaJadi.toLocaleString('id-ID', { minimumFractionDigits: 2 })}
                        </p>
                        <p className="text-xs text-gray-400 line-through">
                          Rp {(itemQuantity * unitPrice).toLocaleString('id-ID', { minimumFractionDigits: 2 })}
                        </p>
                      </div>

                      <button 
                        className="rounded-md p-1.5 text-gray-400 transition hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30" 
                        onClick={onRemove}
                      >
                        <span className="sr-only">Remove item</span>
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

    </>
 )
}
