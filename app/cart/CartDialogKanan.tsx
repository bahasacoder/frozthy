"use client"
import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { addListToCheckout } from '@/lib/features/checkout/checkoutSlice';
import { removeListItemFromCart, removeItemFromCart, onUpdateQuantity, clearCart } from '@/lib/features/cart/cartSlice';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import CartListItem from "./CartListItem";
import { useRouter } from 'next/navigation';

export default function CartDialogKanan() {
    const router = useRouter();
    const [itemChecked, setItemChecked] = useState<string[]>([]);
    const [itemsChecked, setItemsChecked] = useState<string[]>([]);
    const [newItemsChecked, setNewItemsChecked] = useState<string[]>([]);
    const [idCheckout, setIdCheckout] = useState<string>('');
  
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

  const dispatch = useAppDispatch();
  const { items, totalItems, totalPrice } = useAppSelector((state) => state.cart);

  const handleClearCart = () => {
    if (confirm('Are you sure you want to clear the cart?')) {
      dispatch(clearCart());
    }
  };

  const cartItems = useAppSelector((state) => state.cart.items) || [];
  console.log('Cart Dialog Box kanan:', cartItems);

  const totalItemsCount = cartItems.reduce((total, item) => total + (item.quantity || 0), 0);
  const totalPriceSum = cartItems.reduce((total, item) => total + ((item.hargaItem || 0) * (item.quantity || 0)), 0);
  const totalHargaDiskon = cartItems.reduce((total, item) => total + (item.hargaDiskon || 0) * (item.quantity || 0), 0);
  const totalPayable = totalPriceSum - totalHargaDiskon;
  
  const totalPricesChecked = cartItems.reduce((total, item) => total + ((item.hargaItem || 0) * (item.quantity || 0)), 0);


  const getItemName = (item: any) => {
    const itemWithName = item as { id?: string | number; name?: string; title?: string; product?: { name?: string; title?: string }; productName?: { name?: string; title?: string } };
    return itemWithName.name ?? itemWithName.title ?? itemWithName.product?.name ?? itemWithName.product?.title ?? `Item #${item.id}`;
  };

  const handleMergerItem = () => {
    // Implement the logic to merge items in the cart
    console.log('Merging items in the cart...');
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
      const checkoutItems = cartItems.filter(
        (item) => item.idList !== undefined && itemsChecked.includes(String(item.idList))
      );
      // pecah id checkbox menjadi tersendiri
      const daftarListChecked = [];

      // PERBAIKAN: Mengubah <= menjadi < dan menyamakan nama variabel itemChecked
      for (let i = 0; i < itemsChecked.length; i++) {
        // Buat objek baru di setiap putaran
        const listBaru = {
          id: i + 1,
          nama: `List Ke-${i + 1}`, // Diubah ke i + 1 agar nama mulai dari "List Ke-1"
          idList: itemsChecked[i],    // Mengambil nilai dari array ('sddsf', dll)
          idCheckout: newCheckoutId,
          status: "Aktif"
        };
        // Masukkan objek ke dalam array
        daftarListChecked.push(listBaru);
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
    console.log('setNewItemsChecked', setNewItemsChecked)
  };

  return (
               <div className="space-y-6 rounded-lg border bg-green-50 p-6 shadow-sm">
                {cartItems.length === 0 ? ('') : 
                  <>
                    {cartItems.map((item, index) => {
                      const itemId = Number((item as { id?: string | number }).id);
                      const lineTotal = (Number((item as { price?: number }).price) || 0) * (Number(item.quantity) || 0);
                      
                      return (
                        <div key={item.idList || index}>
                          <p>{item.productName}</p>
                          <p>{item.hargaItem}</p>
                          <p>{item.totalHargaJadi}</p>
                        </div>
                      )
                    })
                  }
                  </>
                }

                  <div
                                data-slot="card"
                                data-size="default"
                                className="cn-card group/card flex flex-col w-full max-w-md text-base shadow-none ring-0"
                            >
                                <div
                                    data-slot="card-header"
                                    className="cn-card-header group/card-header @container/card-header grid auto-rows-min items-start has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]"
                                    >
                                        <div data-slot="card-title" className="cn-card-title cn-font-heading text-xl font-semibold">
                                            Prices Checked
                                        </div>
                                </div>
                                    <div data-slot="card-content" className="cn-card-content space-y-5">
                                        <div
                                            data-orientation="horizontal"
                                            role="separator"
                                            aria-orientation="horizontal"
                                            data-slot="separator"
                                            className="bg-border shrink-0 data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch"
                                        ></div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-muted-foreground">Total Items : </span>
                                            <span className="font-medium">{totalItemsCount}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-muted-foreground">Total Amount : </span>
                                            <span className="font-medium">${totalPriceSum.toFixed(2)}</span>
                                        </div>
                                        
                                        <div className="flex items-center justify-between">
                                            <span className="text-muted-foreground">Discount : </span>
                                            <span className="font-medium">{totalHargaDiskon.toFixed(2)}</span>
                                        </div>                                        
                                        <div className="flex items-center justify-between">
                                            <span className="text-muted-foreground">Pajak : </span>
                                            <span className="font-medium">00.00</span>
                                        </div>                                    
                                        <div className="flex items-center justify-between">
                                            <span className="text-muted-foreground">Layanan : </span>
                                            <span className="font-medium">00.00</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-muted-foreground">Shipping</span>
                                            <span className="font-medium">Free Delivery</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pinned preview-icon"><path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 01-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0112 0"/><path d="M4.474 15h-.197a1 1 0 00-.969.753l-1.097 4.35a1.5 1.5 0 001.444 1.898L20.344 22a1.5 1.5 0 001.446-1.897l-1.098-4.35a1 1 0 00-.969-.753h-.197"/><circle cx="12" cy="8" r="2"/></svg>
                                        </div>
                                        <div
                                            data-orientation="horizontal"
                                            role="separator"
                                            aria-orientation="horizontal"
                                            data-slot="separator"
                                            className="bg-border shrink-0 data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch"
                                        ></div>
                                        <div className="flex items-center justify-between text-lg font-semibold">
                                            <span>Total</span>
                                            <span>
                                            {(totalPriceSum - totalHargaDiskon).toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                    <div data-slot="card-content" className="cn-card-content flex flex-col items-start gap-3.5">
                                        <div className="flex w-full flex-col gap-3.5 mx-auto">
                                              <Button 
                                                variant="default" className="rounded-full"
                                                onClick={() => handleProceedToCheckout(itemsChecked)}
                                              >
                                                Checkout
                                              </Button>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <p>We Accept:</p>
                                            <div className="flex items-center gap-4">
                                                <img src="https://cdn.shadcnstudio.com/ss-assets/brand-logo/visa.png" alt="Visa" className="h-4" />
                                                <img
                                                    src="https://cdn.shadcnstudio.com/ss-assets/brand-logo/paypal-icon.png"
                                                    alt="PayPal"
                                                    className="h-4"
                                                />
                                                <img
                                                    src="https://cdn.shadcnstudio.com/ss-assets/brand-logo/master.png"
                                                    alt="Mastercard"
                                                    className="h-4"
                                                />
                                            </div>
                                        </div>
                                </div>
                            </div>
                </div>
          
  )
}