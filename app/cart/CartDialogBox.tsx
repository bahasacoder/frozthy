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

export default function CartDialogBox() {
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
  console.log('Cart Dialog Box:', cartItems);

  const totalItemsCount = cartItems.reduce((total, item) => total + (item.quantity || 0), 0);
  const totalPriceSum = cartItems.reduce((total, item) => total + ((item.hargaItem || 0) * (item.quantity || 0)), 0);
  const totalHargaDiskon = cartItems.reduce((total, item) => total + (item.hargaDiskon || 0) * (item.quantity || 0), 0);
  const totalPayable = totalPriceSum - totalHargaDiskon;


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

      // console.log('pisah Item Checked', pisahItemChecked)
      // let jumpic = ''
      // for (let i = 0; i < pisahItemChecked.length; i++) {        
      //   console.log('pisah[i]', pisahItemChecked[i].concat(idCheckout));
      // }
      // const newItemChecked = itemsChecked.concat(idCheckout)
      // console.log('proses newItemChecked', newItemChecked);

      const checkedLists = {}
      // cartItems
      //   .filter((item) => item.idList !== undefined && itemsChecked.includes(String(item.idList)))
      //   .forEach((item) => dispatch(addItemToCheckout({ ...item, id: Number(item.id) })));
      const getItemsChecked = [...itemChecked, ...itemsChecked];
      setNewItemsChecked(getItemsChecked);
      console.log('itemsChecked', itemsChecked, checkoutItems);
      // dispatch(addListToCheckout(checkoutItems as any)); daftarListChecked
      dispatch(addListToCheckout(daftarListChecked as any)); 
    } else {
      alert('Please select at least one item to proceed to checkout.');
    }
  };

  return (
    <div className="h-full w-full">
      <section className="py-8 sm:py-16 lg:py-24">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

    {/* ------ */}
            <div className=" w-full space-y-3 px-6 lg:col-span-2">

               {/* Header Section */}
                <div className="flex flex-col gap-1 border-b pb-4 sm:flex-row sm:items-center sm:justify-between">
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Your Cart</h2>
                  <div className="flex items-center gap-1.5 text-sm text-gray-500 sm:text-base">
                    <span className="font-semibold text-gray-900 bg-gray-100 px-2.5 py-0.5 rounded-full text-xs sm:text-sm">
                      {totalItemsCount}
                    </span>
                    <span>{totalItemsCount === 1 ? 'item' : 'items'} in cart</span>
                  </div>
                </div>
              

              {cartItems.length === 0 ? (
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
                    {cartItems.map((item, index) => {
                      const itemId = Number((item as { id?: string | number }).id);
                      const lineTotal = (Number((item as { price?: number }).price) || 0) * (Number(item.quantity) || 0);
                      
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
                      <span className="text-2xl font-bold text-gray-900">${totalPayable.toFixed(2)}</span>
                    </div>
                    <button 
                      onClick={() => handleProceedToCheckout(itemsChecked)}
                      disabled={itemsChecked.length === 0}
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

                  <p>Total Payable: ${totalPayable.toFixed(2)}</p>
                  <div style={{ background: '#f4f4f4', padding: '15px', borderRadius: '5px' }}>
                    <strong>Isi Array Saat Ini:</strong>
                    <p>{itemsChecked.join(', ')}</p>
                    <pre>{JSON.stringify(itemsChecked, null, 2)}</pre>
                    <p>Total Item Terpilih: {itemsChecked.length}</p>
                  </div>
                  
                  
                    <button onClick={() => handleProceedToCheckout(itemsChecked)}>Proceed to Checkout</button>
                  
                  <button onClick={handleClearCart}>Clear Cart</button>
                  <button onClick={() => router.refresh()}>Refresh</button>
                </>
              )}
                
          </div>
    {/* ------ */}
               <div className="space-y-6 rounded-lg border bg-green-50 p-6 shadow-sm">
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
                                            Price Details
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
                                            <span className="text-muted-foreground">Shipping</span>
                                            <span className="font-medium">Free Delivery</span>
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
          </div>
        </div>
      </section>
       
    </div>
  )
}