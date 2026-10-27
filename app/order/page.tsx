'use client';
import { useState, useEffect } from "react"; 
import Image from "next/image";
import Link from "next/link";
import { User, CreditCard, CheckCircle2, Form } from "lucide-react"
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { addListToCheckeds, removeListFromCheckout, clearCheckout } from '@/lib/features/checkout/checkoutSlice';
import { RootState } from "@/lib/store";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FormPrimaryAddress from "./form-primary-address";
import FormSecondaryAddress from "./form-secondary-address";
import YourOrderInfo from "./your-order-info";
import PaymentMethods from "./payment-methods";
import ShippingMethods from "./shipping-methods";

export default function BeliSajaPage() {
  const dispatch = useAppDispatch();
 
  function cn(arg0: string, arg1: string, arg2: string): string | undefined {
    throw new Error("Function not implemented.");
  }
  const [currentCustomerRegister, setCurrentCustomerRegister] = useState('register');
  const [currentStep, setCurrentStep] = useState(2); // Default to Step 2 for presentation
  //const [openItem, setOpenItem] = useState<string[]>(["your_order", "customer_info", "payment_methods"]);
  const [openItem, setOpenItem] = useState<string[]>(["your_order", "customer_info", "payment_methods"]);
  // Perubahan metode fungsi toggle dinamis untuk mendukung banyak opsi item secara modular
  const toggleAccordionItem = (targetValue: string) => {
    setOpenItem((prev) =>
      prev.includes(targetValue)
        ? prev.filter((item) => item !== targetValue)
        : [...prev, targetValue]
    );
  };

  const steps = [
    { id: 1, name: 'Cart Summary', description: 'Review your items', accordionContent: 'your_order'},
    { id: 2, name: 'Shipping Details', description: 'Where to deliver', accordionContent: 'customer_info' },
    { id: 3, name: 'Payment Method', description: 'Choose how to pay', accordionContent: 'payment_methods' },
    { id: 4, name: 'Confirmation', description: 'Receipt & tracking', accordionContent: 'confirmation_details' },
  ];



  return (
    <>
    <div className="w-full max-w-4xl mx-auto px-4 py-8 font-sans antialiased">
      
      {/* ==========================================================================
          SECTION 1: PROGRESS WIZARD NAVIGATION BAR (PREMIUM BULLET NODES)
          ========================================================================== */}
      <div className="mb-12">
        <nav aria-label="Progress" className="relative">
          {/* Background Connecting Progress Line */}
          <div className="absolute top-5 left-0 w-full h-0.5 bg-slate-100 -z-10 hidden md:block" aria-hidden="true">
            <div 
              className="h-full bg-blue-600 transition-all duration-300 ease-in-out" 
              style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            />
          </div>

          <ol role="list" className="flex flex-col gap-6 md:flex-row md:justify-between md:gap-0">
            {steps.map((step) => {
              const isCompleted = step.id < currentStep;
              const isActive = step.id === currentStep;
              const isPanelOpen = openItem.includes(step.accordionContent);

              return (
                <li key={step.id} className="relative flex items-start md:flex-col md:items-center md:text-center flex-1">
                  
                  {/* Node Icon Circle Button */}
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentStep(step.id);
                      if (step.accordionContent) toggleAccordionItem(step.accordionContent);
                    }}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all focus:outline-none focus:ring-4 focus:ring-blue-100"
                  >
                    {isCompleted ? (
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm shadow-blue-500/20">
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                      </div>
                    ) : isActive ? (
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-600 bg-white ring-4 ring-blue-50">
                        <span className="text-sm font-bold text-blue-600">{step.id}</span>
                      </div>
                    ) : (
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400">
                        <span className="text-sm font-medium">{step.id}</span>
                      </div>
                    )}
                  </button>

                  {/* Text Details Label Block Container */}
                  <div className={`ml-4 min-w-0 md:ml-0 md:mt-3 ${step.id === 4 ? 'hover:scale-105' : ''}`} >

                    <h4 className={`text-sm font-semibold tracking-tight ${
                      isActive ? 'text-blue-600' : 'text-slate-900'
                    }`}>
                      {step.id === 4 ? <Link href="/invoice" className="hover:text-rose-800 font-bold">{step.name}</Link> : `${step.name}` }
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5 max-w-[160px] hidden md:block">
                       {step.id === 4 ? <Link href="/invoice" className="hover:text-rose-800 font-bold">{step.description}</Link> : `${step.description}` }
                    </p>
                    
                    {/* Teks Status Panel Indikator Tambahan Yang Dipindahkan Agar Tata Letak Rapih */}
                    <span className="block text-[10px] font-medium text-slate-400 mt-1 md:text-center">
                       {step.id === 4 ? <Link href="/invoice"> 📝 Buat Invoice </Link>: isPanelOpen ? "⚡ Panel Terbuka" : "💤 Panel Tertutup"}
                    </span>
                  </div>
                  
                </li>
              );
            })}
          </ol>
        </nav>
      </div>      
    </div>
    
    {/* ==========================================================================
          SECTION 2: DYNAMIC DETAILED CONTENT PANELS (SHADCN MULTI-ACCORDION)
          ========================================================================== */}
      <div className="w-full mt-10">
        <Accordion 
          type="multiple" 
          defaultValue={["your_order", "customer_info", "payment_methods"]} 
          value={openItem} 
          onValueChange={setOpenItem} 
          className="w-full space-y-4"
        >
            <AccordionItem value="your_order"  className="w-full p-4">
              <AccordionTrigger className="bg-blue-300 p-2">Cart Summary</AccordionTrigger>
              <AccordionContent>
                <YourOrderInfo />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="customer_info" className="w-full p-4">
              <AccordionTrigger className="bg-blue-300 p-2">Shipping Details</AccordionTrigger>
              <AccordionContent>
                <Tabs defaultValue="primary_address" className="" >
                  <TabsList className="w-full">
                    <TabsTrigger value="primary_address" 
                      className="data-[state=active]:bg-gray-800 data-[state=active]:text-gray-50 p-4 m-4"
                    >Billing Details</TabsTrigger>
                    <TabsTrigger value="secondary_address"
                      className="data-[state=active]:bg-blue-600 data-[state=active]:text-gray-50  p-4 m-4"
                    >Ship to a Different Address?</TabsTrigger>
                  </TabsList>
                  <TabsContent value="primary_address"><FormPrimaryAddress onRegisterPrimarySuccess={() => setCurrentCustomerRegister('')}/></TabsContent>
                  <TabsContent value="secondary_address"><FormSecondaryAddress /></TabsContent>
                </Tabs>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="payment_methods"  className="w-full p-4">
              <AccordionTrigger className="bg-blue-300 p-2">Payment Methods</AccordionTrigger>
              <AccordionContent>
                <PaymentMethods />
              </AccordionContent>
            </AccordionItem>
          </Accordion>     
    </div>
    <div className="w-full flex justify-center gap-2 mx-auto p-8">
      <Button variant="secondary" className="bg-blue-400 hover:scale-105 hover:border-2 hover:border-blue-600">Buat Pesanan</Button>
    </div>
    
    </>
  )
}
