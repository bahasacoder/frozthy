"use client"
import React from 'react';
import Link from "next/link";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeListItemFromCart, onUpdateQuantity, increaseQuantity, decreaseQuantity, clearCart } from '@/lib/features/cart/cartSlice';
// import './CartView.css'; // Optional: for basic styling
import { useAppSelector, useAppDispatch } from '@/lib/hooks';

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import CartListItem from './CartListItem';

export default function CartDialog() {
  const dispatch = useAppDispatch();
  const { items, totalItems, totalPrice } = useAppSelector((state) => state.cart);
  
  const handleClearCart = () => {
      if (confirm('Are you sure you want to clear the cart?')) {
        dispatch(clearCart());
      }
  };
  
  const cartItems = useAppSelector((state) => state.cart.items) || [];
    console.log('Cart Dialog Box: com', cartItems);
  
  const totalItemsCount = cartItems.reduce((total, item) => total + (item.quantity || 0), 0);
  const totalPriceSum = cartItems.reduce((total, item) => total + ((item.hargaItem || 0) * (item.quantity || 0)), 0);
  const totalHargaDiskon = cartItems.reduce((total, item) => total + (item.hargaDiskon || 0) * (item.quantity || 0), 0);
  const totalPayable = totalPriceSum - totalHargaDiskon;
  
  
  return (
    <>
      <Dialog>
  <DialogTrigger asChild>
    <button className="p-2 text-gray-700 hover:text-gray-900 transition-colors">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-basket preview-icon">
          <path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M4.5 15.5h15"/><path d="m5 11 4-7"/><path d="m9 11 1 9"/>
      </svg>
    </button>
  </DialogTrigger>
  
  {/* Restrict overall height of the Dialog Content container */}
  <DialogContent className="flex flex-col p-0 overflow-hidden max-w-lg w-full max-h-[85vh] md:max-h-[80vh]">          
    {cartItems.length === 0 ? (
      <div className="p-6 text-center">
        <p className="text-gray-500">Your cart is empty.</p>
      </div>
    ) : (
      // Turn Card into a full-height flex container that respects Dialog limitations
      <Card className="flex flex-col h-full border-0 rounded-none shadow-none overflow-hidden">
        <CardHeader className="border-b px-6 py-4 flex-shrink-0">
          <CardTitle>Your Cart</CardTitle>
        </CardHeader>
        
        {/* Scrollable list area */}
        <CardContent className="flex-1 overflow-y-auto px-6 py-4 space-y-4 overscroll-contain">
          {cartItems.map((item, index) => {
            const itemId = Number((item as { id?: string | number }).id);
            const lineTotal = (Number((item as { price?: number }).price) || 0) * (Number(item.quantity) || 0);
            
            return (
              <div key={item.idList || index} className="border-b last:border-0 pb-4 last:pb-0">
                <CartListItem
                  item={item}
                  onRemove={() => {
                    if (item.idList !== undefined) {
                      dispatch(removeListItemFromCart(item.idList));
                    }
                  }}
                  onUpdateQuantity={(nextQuantity) => {
                    if (item.idList !== undefined) {
                      dispatch(onUpdateQuantity({ idList: item.idList, quantity: nextQuantity ?? item.quantity }));
                    }
                  }}
                  onChecked={() => {}}
                />
              </div>
            );
          })}
        </CardContent>
        
        {/* Sticky summary area */}
        <CardFooter className="border-t bg-gray-50/70 px-6 py-4 flex-shrink-0">
          <div className="w-full space-y-3">
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
              <p>Total Items:</p><p className="text-right font-medium">{totalItemsCount}</p>
              <p>Total Amount:</p><p className="text-right font-medium">${totalPriceSum.toFixed(2)}</p>
              <p>Total Discount:</p><p className="text-right font-medium text-red-600">-${totalHargaDiskon.toFixed(2)}</p>
              <p className="text-base font-semibold text-gray-900 border-t pt-2 mt-1">Total Payable:</p>
              <p className="text-base font-bold text-gray-900 text-right border-t pt-2 mt-1">${totalPayable.toFixed(2)}</p>
            </div>
              
            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <button 
                onClick={handleClearCart} 
                className="w-full order-2 sm:order-1 px-4 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Clear Cart
              </button>
              <Link href="/checkout" className="w-full order-1 sm:order-2">
                <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </CardFooter>
      </Card>
    )}
  </DialogContent>
</Dialog>

    </>
  );
};

