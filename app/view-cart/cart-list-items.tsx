"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { addListToCheckout } from '@/lib/features/checkout/checkoutSlice';
import { removeListItemFromCart, removeItemFromCart, onUpdateQuantity, clearCart } from '@/lib/features/cart/cartSlice';

import CartListItem from "./CartListItem";

// 1. Definisikan tipe untuk props di Child
interface CartComponentProps {
  items: any[];
  totalItems: number;
  subTotal: number;
  totalDiscount: number;
  payable: number;
  onItemCheck: (item: any, checked: boolean) => void;
  onClearSuccess?: () => void; // 
}

export default function CartListItems({ items, totalItems, subTotal, totalDiscount, payable, onItemCheck, onClearSuccess  }: CartComponentProps 
 ) {
  const router = useRouter();
  
  const [itemChecked, setItemChecked] = useState<string[]>([]);
  const [itemsChecked, setItemsChecked] = useState<string[]>([]);
  const [newItemsChecked, setNewItemsChecked] = useState<string[]>([]);
  const [idCheckout, setIdCheckout] = useState<string>('');
  
  const dispatch = useAppDispatch();
  
      function Str_Random(length: number) {
        let result = '';
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        
        // Loop to generate characters for the specified length
        for (let i = 0; i < length; i++) {
            const randomInd = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomInd);
        }
        return result;
    }
  
   const handleProceedToCheckout = (itemsChecked: string[]) => {
    if (itemsChecked.length > 0) {
      // Implement the logic to proceed to checkout
      console.log('Proceeding to checkout...', itemsChecked);
      const selectedItems = itemsChecked.join(', ');
      console.log(Array.isArray(itemsChecked));

      alert(`Proceeding to checkout with the following items: ${selectedItems}`);

      const newCheckoutId = `CK-${Str_Random(3)}`;
      setIdCheckout(newCheckoutId);
      // cartItems = {items}
      const checkoutItems = items.filter(
        (item) => item.idList !== undefined && itemsChecked.includes(String(item.idList))
      );
      // pecah id checkbox menjadi tersendiri
      const daftarListChecked = [];
      const biayapajak = 0;
      const biayaLayanan = 0;
      const biayaPengiriman = 0;

      // PERBAIKAN: Mengubah <= menjadi < dan menyamakan nama variabel itemChecked
      for (let i = 0; i < itemsChecked.length; i++) {
        // Buat objek baru di setiap putaran
        const listBaru = {
          id: i + 1,
          nama: `List Ke-${i + 1}`, // Diubah ke i + 1 agar nama mulai dari "List Ke-1"
          idList: itemsChecked[i],    // Mengambil nilai dari array ('sddsf', dll)
          idCheckout: newCheckoutId,
          biayapajak,
          biayaLayanan,
          biayaPengiriman,
          status: "Aktif"
        };
        // Masukkan objek ke dalam array
        daftarListChecked.push(listBaru);
        console.log('daftarListChecked',listBaru )
      }

      console.log('daftarList Dialog', daftarListChecked);

      const checkedLists = {} 
      const getItemsChecked = [...itemChecked, ...itemsChecked];
      setNewItemsChecked(getItemsChecked);
      console.log('itemsChecked', itemsChecked, checkoutItems);
      // dispatch(addListToCheckout(checkoutItems as any)); daftarListChecked
      dispatch(addListToCheckout(daftarListChecked as any)); 
    } else {
      alert('Please select at least one item to proceed to checkout.');
    }
  };

  function handleClearCart(event: React.MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
     if (confirm('Are you sure you want to clear the cart?')) {
    // 1. Bersihkan data di Redux Store
    dispatch(clearCart());
    setItemChecked([]);
    setItemsChecked([]);
    setNewItemsChecked([]);

    if (onClearSuccess) {
        onClearSuccess();
      }
      
      console.log('Cart cleared successfully.');
  }
    
  }

  const dummyItem = { idList: 'item-123', name: 'Sepatu Running' };
  return (
    <>
    {/* ------ */}
            <div className=" w-full space-y-3 px-6 lg:col-span-2">

               {/* Header Section */}
                <div className="flex flex-col gap-1 border-b pb-4 sm:flex-row sm:items-center sm:justify-between">
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Your Cart</h2>
                  <div className="flex items-center gap-1.5 text-sm text-gray-500 sm:text-base">
                    <span className="font-semibold text-gray-900 bg-gray-100 px-2.5 py-0.5 rounded-full text-xs sm:text-sm">
                      {totalItems}
                    </span>
                    <span>{totalItems === 1 ? 'item' : 'items'} in cart</span>
                  </div>
                </div>
              

              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <svg className="size-16 text-gray-300 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://w3.org">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path>
                  </svg>
                  <p className="text-lg font-medium text-gray-900">Your cart is empty</p>
                  <p className="text-sm text-gray-500 mt-1">Add items to your cart to see them here.</p>
                  
                </div>
              ) : (
                <>
                  <ul>
                    {items.map((item, index) => {
                      const itemId = Number((item as { id?: string | number }).id);
                      const lineTotal = (Number((item as { price?: number }).price) || 0) * (Number(item.quantity) || 0);
                      
                      function onChecked(item: any, checked: boolean): void {
                        if (item.idList === undefined) return;

                        const id = String(item.idList);
                        setItemsChecked((prevChecked) => {
                          if (checked) {
                            return prevChecked.includes(id) ? prevChecked : [...prevChecked, id];
                          }
                          return prevChecked.filter((itemId) => itemId !== id);
                        });
                        onItemCheck(item, checked);
                      }

                      return (
                        <li key={item.idList || index}>
                          <CartListItem
                            item={item}
                            onRemove={() => {
                              if (item.idList !== undefined) {
                                dispatch(removeListItemFromCart(item.idList));
                              }
                            }}
                            onUpdateQuantity={() => {
                              if (item.idList !== undefined) {
                                dispatch(onUpdateQuantity({ idList: item.idList, quantity: item.quantity }));
                              }
                            }}
                            /*
                            onChecked={(item, checked) => {
                              if (item.idList === undefined) return;
                              const id = item.idList as string;                              
                              setItemsChecked((prevChecked) => {
                                if (checked) {
                                  return prevChecked.includes(id) ? prevChecked : [...prevChecked, id];
                                } 
                                return prevChecked.filter((itemId) => itemId !== id);
                              });
                            }}
                            */
                           onChecked={onChecked}
                          />
                        </li>
                      );
                    }
                    )}                    
                  </ul> 

                  {/* Summary Box & Primary Action */}
                  <div className="bg-gray-50 rounded-lg p-4 sm:p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-base font-medium text-gray-900">Total Payable</span>
                      <span className="text-2xl font-bold text-gray-900">${payable.toFixed(2)}</span>
                    </div>
                    <button 
                      onClick={() => handleProceedToCheckout(itemsChecked)}
                      disabled= {true} //{itemsChecked.length === 0}
                      className="w-full flex items-center justify-center bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Proceed to Checkout ({itemsChecked.length})
                    </button>
                  </div>

                  {/* Secondary Actions Row */}
                  <div className="flex flex-wrap gap-3 items-center justify-between text-sm">
                    <button 
                      onClick={handleClearCart} 
                      className="text-red-600 hover:text-red-700 font-medium px-4 py-2 
                      border rounded transition-colors"
                    >
                      Clear Entire Cart
                    </button>
                    <button 
                      onClick={() => router.refresh()} 
                      className="flex items-center gap-1.5 text-gray-600 hover:text-gray-900 font-medium px-4 py-2
                      border rounded-md shadow-sm bg-white hover:bg-gray-50 transition-colors"
                    >
                      <svg className="size-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://w3.org">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"></path>
                      </svg>
                      Refresh State
                    </button>
                  </div>

                
          
                </>
              )}
                
          </div>
          
    {/* ------ */}
    </>
  )
}