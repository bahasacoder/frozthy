'use client';
import Image from "next/image";
import Link from "next/link"; 

import CartDialogKiri from "./CartDialogKiri";
import CartDialogKanan from "./CartDialogKanan";
import CartPageContent from "./cart-page";

export default function CartRootPage() {
  return (
    <div className="w-full">
      <h2 className="text-2xl">Shopping Cart</h2>
      
      <div className="h-full w-full">
      <section className="py-8 sm:py-16 lg:py-24">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

    {/* ------ */}

      <CartDialogKiri />
      

      </div>
        </div>
      </section>
       
    </div>
    </div>
  )
}