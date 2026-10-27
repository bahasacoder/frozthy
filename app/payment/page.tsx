'use client';
import { useState, useEffect } from "react"; 
import Image from "next/image";
import Link from "next/link";
import { User, CreditCard, CheckCircle2 } from "lucide-react"
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { addListToCheckeds, removeListFromCheckout, clearCheckout } from '@/lib/features/checkout/checkoutSlice';
import { RootState } from "@/lib/store";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import EnterInfoTabs from "./enter-info-tabs"
import PaymentTabs from "./payment-tabs"

export default function PaymentPage() {
  const dispatch = useAppDispatch();
 
  return (
    <>
    <div className="w-full mx-auto mt-8">
      <Tabs defaultValue="enter_info" className="w-full mx-auto">
        <TabsList variant="default" className="relative gap-2 flex justify-between items-center w-full h-auto bg-transparent p-0 before:absolute before:top-1/2 before:left-0 before:w-full before:h-[2px] before:bg-muted before:-translate-y-1/2 before:z-0">
          <TabsTrigger value="enter_info" className="z-10 flex flex-col justify-center items-center w-12 h-12 rounded-full 
            border-2 border-muted bg-background p-0 shadow-sm transition-all duration-200
            data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground
            hover:border-primary/50"
            >Info Pesanan</TabsTrigger>
          <TabsTrigger value="checkout" className="z-10 flex flex-col justify-center items-center w-12 h-12 rounded-full border-2 border-muted bg-background p-0 shadow-sm transition-all duration-200
            data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground
            hover:border-primary/50">Checkout</TabsTrigger>
          <TabsTrigger value="confirmation" className="z-10 flex flex-col justify-center items-center w-12 h-12 rounded-full border-2 border-muted bg-background p-0 shadow-sm transition-all duration-200
            data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground
            hover:border-primary/50">Confirmation</TabsTrigger>
        </TabsList>
        <div className="w-full bg-green-100 m-4 p-4">
          <TabsContent value="enter_info"><EnterInfoTabs /></TabsContent>
          <TabsContent value="checkout"><PaymentTabs /></TabsContent>
          <TabsContent value="confirmation">Change your password here.</TabsContent>
        </div>
    </Tabs>
      
    </div>
    
    </>
  )
}