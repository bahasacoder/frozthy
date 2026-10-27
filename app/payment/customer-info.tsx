"use client"
import React, {useState} from "react"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FormPersonalAddress from "./form-personal-address"
import FormShippingAddress from "./form-shipping-address"
import Form from "next/form"

export default function EnterInfoTabs() {

    const handleChange = () => {
        //
    }

    return (
            <div className="md:col-span-2 lg:col-span-3">
                <div data-slot="card" data-size="default" className="cn-card group/card flex flex-col shadow-none">
                    <div data-slot="card-content" className="cn-card-content">
                        <div
                            data-orientation="vertical"
                            dir="ltr"
                            role="region"
                            data-slot="accordion"
                            className="cn-accordion flex flex-col w-full space-y-2 rounded-md border-0"
                        >
                            <Accordion type="multiple" className="w-full" defaultValue={["personal-details"]}>
                                
                                <AccordionItem key={0} value={"customer-login"}>
                                    <div
                                    data-orientation="vertical"
                                    data-index="1"
                                    data-closed=""
                                    data-slot="accordion-item"
                                    className="cn-accordion-item rounded-md border!"
                                    >
                                        <AccordionTrigger>
                                    <h3 data-orientation="vertical" data-index="1" data-closed="" className="flex">
                                        <div
                                        data-value="item-1"
                                        data-orientation="vertical"
                                        data-index="1"
                                        tabIndex={0}
                                        aria-disabled="false"
                                        aria-expanded="false"
                                        id="base-ui-_R_ainpfiv5ubr9fiv5uj9bH2_"
                                        data-slot="accordion-trigger"
                                        className="cn-accordion-trigger group/accordion-trigger relative flex flex-1 justify-between border border-transparent transition-all outline-none aria-disabled:pointer-events-none aria-disabled:opacity-50 items-center px-5 py-4 text-lg font-medium"
                                        >
                                        Customer Login
                                        </div>
                                    </h3>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                    <div 
                                        className={`grid transition-all duration-300 ease-in-out 
                                        isOpen grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                        }`}
                                    >
                                        <div className="overflow-hidden">
                                        <div className="p-5 text-sm text-slate-600 border-t border-slate-100 bg-slate-50/50 leading-relaxed">
                                            <p>Username /  Password </p>
                                        </div>
                                        </div>
                                    </div>
                                    </AccordionContent>
                                    </div>
                                </AccordionItem>

                                <AccordionItem key={1} value={"personal-details"}>
                                <div
                                    data-orientation="vertical"
                                    data-index="0"
                                    data-open=""
                                    data-slot="accordion-item"
                                    className="cn-accordion-item rounded-md border!"
                                    >
                                    <AccordionTrigger>
                                        <h3 data-orientation="vertical" data-index="0" data-open="" className="flex">
                                            <div
                                            data-value="item-1"
                                            data-orientation="vertical"
                                            data-panel-open=""
                                            tabIndex={0}
                                            aria-disabled="false"
                                            aria-controls="base-ui-_R_6inpfiv5ubr9fiv5uj9bH1_"
                                            aria-expanded="true"
                                            id="base-ui-_R_6inpfiv5ubr9fiv5uj9bH2_"
                                            data-slot="accordion-trigger"
                                            className="cn-accordion-trigger group/accordion-trigger relative flex flex-1 justify-between border border-transparent transition-all outline-none aria-disabled:pointer-events-none aria-disabled:opacity-50 items-center px-5 py-4 text-lg font-medium"
                                            >
                                            Your Personal Details                                            
                                            </div>
                                        </h3>
                                    </AccordionTrigger>
                                    <AccordionContent> 
                                       <Tabs defaultValue="personal-address" className="w-[400px]">
                                            <TabsList>
                                                <TabsTrigger value="personal-address">Personal Address</TabsTrigger>
                                                <TabsTrigger value="shipping-address">Shipping Address</TabsTrigger>
                                            </TabsList>
                                            <TabsContent value="personal-address"><FormPersonalAddress /></TabsContent>
                                            <TabsContent value="shipping-address"><FormShippingAddress /></TabsContent>
                                        </Tabs>

                                   </AccordionContent>
                                    </div>
                                </AccordionItem>

                                <AccordionItem key={2} value={"shipping-address"}>
                                    <div
                                    data-orientation="vertical"
                                    data-index="1"
                                    data-closed=""
                                    data-slot="accordion-item"
                                    className="cn-accordion-item rounded-md border!"
                                    >
                                        <AccordionTrigger>
                                    <h3 data-orientation="vertical" data-index="1" data-closed="" className="flex">
                                        <div
                                        data-value="item-1"
                                        data-orientation="vertical"
                                        data-index="1"
                                        tabIndex={0}
                                        aria-disabled="false"
                                        aria-expanded="false"
                                        id="base-ui-_R_ainpfiv5ubr9fiv5uj9bH2_"
                                        data-slot="accordion-trigger"
                                        className="cn-accordion-trigger group/accordion-trigger relative flex flex-1 justify-between border border-transparent transition-all outline-none aria-disabled:pointer-events-none aria-disabled:opacity-50 items-center px-5 py-4 text-lg font-medium"
                                        >
                                        Shipping Address
                                        </div>
                                    </h3>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                    <div 
                                        className={`grid transition-all duration-300 ease-in-out 
                                        isOpen grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                        }`}
                                    >
                                        <div className="overflow-hidden">
                                        <div className="p-5 text-sm text-slate-600 border-t border-slate-100 bg-slate-50/50 leading-relaxed">
                                            <p>Alamat Pengiriman</p>
                                        </div>
                                        </div>
                                    </div>
                                    </AccordionContent>
                                    </div>
                                    </AccordionItem>
                                    
                                     <AccordionItem key={3} value={"metode-pembayaran"}>
                                    <div
                                    data-orientation="vertical"
                                    data-index="1"
                                    data-closed=""
                                    data-slot="accordion-item"
                                    className="cn-accordion-item rounded-md border!"
                                    >
                                        <AccordionTrigger>
                                    <h3 data-orientation="vertical" data-index="1" data-closed="" className="flex">
                                        <div
                                        data-value="item-1"
                                        data-orientation="vertical"
                                        data-index="1"
                                        tabIndex={0}
                                        aria-disabled="false"
                                        aria-expanded="false"
                                        id="base-ui-_R_ainpfiv5ubr9fiv5uj9bH2_"
                                        data-slot="accordion-trigger"
                                        className="cn-accordion-trigger group/accordion-trigger relative flex flex-1 justify-between border border-transparent transition-all outline-none aria-disabled:pointer-events-none aria-disabled:opacity-50 items-center px-5 py-4 text-lg font-medium"
                                        >
                                        Metode Pembayaran
                                        </div>
                                    </h3>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                    <div 
                                        className={`grid transition-all duration-300 ease-in-out 
                                        isOpen grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                        }`}
                                    >
                                        <div className="overflow-hidden">
                                        <div className="p-5 text-sm text-slate-600 border-t border-slate-100 bg-slate-50/50 leading-relaxed">
                                            <p>Metode Pembayaran</p>
                                        </div>
                                        </div>
                                    </div>
                                    </AccordionContent>
                                    </div>
                                    </AccordionItem>


                                    <AccordionItem key={4} value={"metode-pengiriman"}>
                                    <div
                                    data-orientation="vertical"
                                    data-index="1"
                                    data-closed=""
                                    data-slot="accordion-item"
                                    className="cn-accordion-item rounded-md border!"
                                    >
                                        <AccordionTrigger>
                                    <h3 data-orientation="vertical" data-index="1" data-closed="" className="flex">
                                        <div
                                        data-value="item-1"
                                        data-orientation="vertical"
                                        data-index="1"
                                        tabIndex={0}
                                        aria-disabled="false"
                                        aria-expanded="false"
                                        id="base-ui-_R_ainpfiv5ubr9fiv5uj9bH2_"
                                        data-slot="accordion-trigger"
                                        className="cn-accordion-trigger group/accordion-trigger relative flex flex-1 justify-between border border-transparent transition-all outline-none aria-disabled:pointer-events-none aria-disabled:opacity-50 items-center px-5 py-4 text-lg font-medium"
                                        >
                                        Metode Pengiriman
                                        </div>
                                    </h3>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                    <div 
                                        className={`grid transition-all duration-300 ease-in-out 
                                        isOpen grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                        }`}
                                    >
                                        <div className="overflow-hidden">
                                        <div className="p-5 text-sm text-slate-600 border-t border-slate-100 bg-slate-50/50 leading-relaxed">
                                            <p>Metode Pengiriman</p>
                                        </div>
                                        </div>
                                    </div>
                                    </AccordionContent>
                                    </div>
                                    </AccordionItem>


                            </Accordion>
                        </div>
                    </div>
                </div>
            </div> // {/*END kiri */}

                   
                )
            }
