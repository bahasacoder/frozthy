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
  const unitPrice = Number(item.inputHarga ?? 0);
  const itemQuantity = Number(item.quantity ?? 0);
  const totalPrice = unitPrice * itemQuantity;
  const totalHargaItem = Number(item.totalHargaJadi ?? 0) * Number(item.quantity ?? 0);
  const totalHargaDiskon = Number(item.diskonHarga ?? 0) * Number(item.quantity ?? 0);
  const [checkedItem, setCheckedItem] = useState<string[]>([]);

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
                <div className="flex gap-6 border-t pt-7 pb-4 max-sm:flex-col sm:items-center">
                    <div className="flex items-center gap-4">                    
                      <div className="block">
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
                      <div className="size-25">
                        <img src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&amp;fit=crop&amp;q=80&amp;w=1160" alt="" className="size-16 rounded-sm object-cover" />
                      </div>
                      <div className="flex w-full flex-col gap-1">
                        <h3 className="text-lg text-gray-900">{item.productName} {item.idList}</h3>

                        <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                          <div>
                            <dt className="inline">Kemasan:</dt>
                            <dd className="inline">{item.inputHarga}</dd>
                          </div>

                          <div>
                            <dt className="inline">Diskon:</dt>
                            <dd className="inline">{item.diskonHarga}</dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">    
                      <div className="flex flex-1 items-center justify-evenly gap-2">
                        <div className="flex items-center px-2.5 py-1.5 border border-slate-300 text-slate-900 text-xs rounded-md dark:border-neutral-700 dark:text-slate-50 dark:bg-neutral-800" data-editor-id="41">
                                          <button type="button" aria-label="Decrease quantity" className="cursor-pointer focus:outline-none focus-visible:ring-2
                                            focus-visible:ring-blue-500 rounded" data-editor-id="42"
                                            onClick={() => {
                                              if (item.idList) dispatch(decreaseQuantity(item.idList));
                                            }}
                                            >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 124 124" data-editor-id="43">
                                                <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000" data-editor-id="44"></path>
                                            </svg>
                                          </button>
                                          <span className="mx-3" data-editor-id="45">
                                            <input 
                                              type="number" 
                                              value={item.quantity} 
                                              onChange={(e) => {
                                                const value = parseInt(e.target.value) || 1;
                                                onUpdateQuantity(value);
                                              }}
                                              step={1}
                                            />
                                          </span>
                                          <button type="button" aria-label="Increase quantity" className="cursor-pointer focus:outline-none focus-visible:ring-2
                                            focus-visible:ring-blue-500 rounded" data-editor-id="46"
                                            onClick={() => {
                                              if (item.idList) dispatch(increaseQuantity(item.idList));
                                            }}
                                            >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 42 42" data-editor-id="47">
                                                <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000" data-editor-id="48"></path>
                                            </svg>
                                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">    
                          <div className="text-right flex flex-col gap-1">
                            <p className="text-sm font-medium text-gray-900">Bayar : {totalHargaItem.toFixed(2)}</p>
                            <p className="text-xs text-gray-600">Harga : {(itemQuantity * unitPrice).toFixed(2)}</p>
                          </div>

                          <button className="text-gray-600 transition hover:text-red-600" onClick={onRemove}>
                            <span className="sr-only">Remove item</span>

                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                            </svg>
                          </button>
                    </div>
                </div>
    </>
 )
}
