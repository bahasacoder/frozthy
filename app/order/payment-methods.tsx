"use client"
import React from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"


export default function PaymentMethods() {

    return (
        <>
        <div>
            <Tabs defaultValue="qris" className="w-full">
                <TabsList className="w-full m-2 gap-2 bg-none">
                    <TabsTrigger value="qris">QRIS</TabsTrigger>
                    <TabsTrigger value="transfer_bank">Transfer Bank</TabsTrigger>
                    <TabsTrigger value="cod">COD</TabsTrigger>
                    <TabsTrigger value="mitra_agen">Mitra/Agen</TabsTrigger>
                </TabsList>
                <TabsContent value="qris" className='w-full mx-auto flex justify-center'>
                    <div className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" width="312" height="312" viewBox="0 0 33 33" shapeRendering="crispEdges"><rect width="33" height="33" fill="#ffffff"/><path fill="#111827" d="M4 4h7v1h-7zM14 4h4v1h-4zM22 4h7v1h-7zM4 5h1v1h-1zM10 5h1v1h-1zM13 5h2v1h-2zM17 5h4v1h-4zM22 5h1v1h-1zM28 5h1v1h-1zM4 6h1v1h-1zM6 6h3v1h-3zM10 6h1v1h-1zM12 6h2v1h-2zM15 6h1v1h-1zM19 6h1v1h-1zM22 6h1v1h-1zM24 6h3v1h-3zM28 6h1v1h-1zM4 7h1v1h-1zM6 7h3v1h-3zM10 7h1v1h-1zM12 7h1v1h-1zM14 7h1v1h-1zM16 7h3v1h-3zM20 7h1v1h-1zM22 7h1v1h-1zM24 7h3v1h-3zM28 7h1v1h-1zM4 8h1v1h-1zM6 8h3v1h-3zM10 8h1v1h-1zM12 8h1v1h-1zM15 8h2v1h-2zM20 8h1v1h-1zM22 8h1v1h-1zM24 8h3v1h-3zM28 8h1v1h-1zM4 9h1v1h-1zM10 9h1v1h-1zM12 9h2v1h-2zM15 9h3v1h-3zM19 9h1v1h-1zM22 9h1v1h-1zM28 9h1v1h-1zM4 10h7v1h-7zM12 10h1v1h-1zM14 10h1v1h-1zM16 10h1v1h-1zM18 10h1v1h-1zM20 10h1v1h-1zM22 10h7v1h-7zM12 11h3v1h-3zM18 11h1v1h-1zM4 12h1v1h-1zM6 12h5v1h-5zM14 12h1v1h-1zM16 12h5v1h-5zM22 12h5v1h-5zM6 13h4v1h-4zM13 13h1v1h-1zM16 13h2v1h-2zM20 13h1v1h-1zM23 13h1v1h-1zM27 13h1v1h-1zM4 14h1v1h-1zM9 14h2v1h-2zM12 14h1v1h-1zM15 14h5v1h-5zM21 14h2v1h-2zM25 14h1v1h-1zM27 14h2v1h-2zM4 15h1v1h-1zM11 15h3v1h-3zM16 15h1v1h-1zM18 15h6v1h-6zM28 15h1v1h-1zM4 16h2v1h-2zM8 16h1v1h-1zM10 16h2v1h-2zM17 16h2v1h-2zM21 16h2v1h-2zM24 16h1v1h-1zM26 16h3v1h-3zM4 17h1v1h-1zM6 17h1v1h-1zM8 17h2v1h-2zM13 17h2v1h-2zM16 17h2v1h-2zM20 17h2v1h-2zM23 17h1v1h-1zM25 17h1v1h-1zM27 17h1v1h-1zM4 18h1v1h-1zM7 18h1v1h-1zM10 18h2v1h-2zM13 18h2v1h-2zM18 18h8v1h-8zM27 18h2v1h-2zM4 19h1v1h-1zM6 19h1v1h-1zM8 19h1v1h-1zM12 19h3v1h-3zM16 19h1v1h-1zM18 19h1v1h-1zM20 19h1v1h-1zM23 19h2v1h-2zM28 19h1v1h-1zM4 20h1v1h-1zM6 20h1v1h-1zM10 20h2v1h-2zM13 20h2v1h-2zM16 20h2v1h-2zM20 20h5v1h-5zM26 20h1v1h-1zM12 21h3v1h-3zM17 21h1v1h-1zM19 21h2v1h-2zM24 21h2v1h-2zM4 22h7v1h-7zM14 22h5v1h-5zM20 22h1v1h-1zM22 22h1v1h-1zM24 22h1v1h-1zM26 22h3v1h-3zM4 23h1v1h-1zM10 23h1v1h-1zM12 23h2v1h-2zM15 23h1v1h-1zM18 23h1v1h-1zM20 23h1v1h-1zM24 23h2v1h-2zM4 24h1v1h-1zM6 24h3v1h-3zM10 24h1v1h-1zM12 24h1v1h-1zM14 24h2v1h-2zM19 24h6v1h-6zM26 24h3v1h-3zM4 25h1v1h-1zM6 25h3v1h-3zM10 25h1v1h-1zM12 25h3v1h-3zM16 25h2v1h-2zM20 25h3v1h-3zM24 25h5v1h-5zM4 26h1v1h-1zM6 26h3v1h-3zM10 26h1v1h-1zM12 26h3v1h-3zM17 26h2v1h-2zM20 26h2v1h-2zM25 26h2v1h-2zM28 26h1v1h-1zM4 27h1v1h-1zM10 27h1v1h-1zM13 27h1v1h-1zM16 27h2v1h-2zM19 27h7v1h-7zM28 27h1v1h-1zM4 28h7v1h-7zM12 28h1v1h-1zM14 28h1v1h-1zM16 28h1v1h-1zM18 28h1v1h-1zM22 28h7v1h-7z"/></svg>
                    </div>
                </TabsContent>
                <TabsContent value="transfer_bank">
                     <div className="grid gap-14 md:grid-cols-3 md:gap-5">
                        <div className="rounded-xl bg-white p-6 text-center shadow-xl mt-6 border-2">
                            <div
                                className="mx-auto flex w-10 h-10 p-2 -translate-y-12 transform items-center justify-center rounded-full bg-gray-100 shadow-lg shadow-blue-500/40">
                                1
                            </div>  
                            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Bank BRI</h1>      
                        </div>
                        <div className="rounded-xl bg-white p-6 text-center shadow-xl mt-6 border-2">
                            <div
                                className="mx-auto flex w-10 h-10 p-2 -translate-y-12 transform items-center justify-center rounded-full bg-gray-100 shadow-lg shadow-blue-500/40">
                                2
                            </div>  
                            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Bank Sulsebar</h1>      
                        </div>
                        <div className="rounded-xl bg-white p-6 text-center shadow-xl mt-6 border-2">
                            <div
                                className="mx-auto flex w-10 h-10 p-2 -translate-y-12 transform items-center justify-center rounded-full bg-gray-100 shadow-lg shadow-blue-500/40">
                                3
                            </div>  
                            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Sea Bank</h1>      
                        </div>
                        <div className="rounded-xl bg-white p-6 text-center shadow-xl mt-6 border-2">
                            <div
                                className="mx-auto flex w-10 h-10 p-2 -translate-y-12 transform items-center justify-center rounded-full bg-gray-100 shadow-lg shadow-blue-500/40">
                                4
                            </div>  
                            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Bank BCA</h1>      
                        </div>
                        <div className="rounded-xl bg-white p-6 text-center shadow-xl mt-6 border-2">
                            <div
                                className="mx-auto flex w-10 h-10 p-2 -translate-y-12 transform items-center justify-center rounded-full bg-gray-100 shadow-lg shadow-blue-500/40">
                                5
                            </div>  
                            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Bank Mandiri</h1>      
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="cod" className='w-full mx-auto flex justify-center'>
                    <div className="max-w-sm bg-gray-50 rounded-xl overflow-hidden shadow-lg p-12 mt-8">
                        <div className="flex flex-col justify-center items-center">
                            <div className="font-semibold text-lg">Cash On Delivery</div>
                            <div className="px-6 py-4 text-center">
                                <div className="">
                                    <p>Nama</p>
                                    <p>Alamat Pengiriman Redux</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="mitra_agen">
                    <div className="grid gap-14 md:grid-cols-3 md:gap-5">
                        <div className="rounded-xl bg-white p-6 text-center shadow-xl mt-6 border-2">
                            <div
                                className="mx-auto flex w-10 h-10 p-2 -translate-y-12 transform items-center justify-center rounded-full bg-gray-100 shadow-lg shadow-blue-500/40">
                                1
                            </div>  
                            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Alfa Mart</h1>      
                        </div>
                        <div className="rounded-xl bg-white p-6 text-center shadow-xl mt-6 border-2">
                            <div
                                className="mx-auto flex w-10 h-10 p-2 -translate-y-12 transform items-center justify-center rounded-full bg-gray-100 shadow-lg shadow-blue-500/40">
                                2
                            </div>  
                            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Indomaret</h1>      
                        </div>
                        <div className="rounded-xl bg-white p-6 text-center shadow-xl mt-6 border-2">
                            <div
                                className="mx-auto flex w-10 h-10 p-2 -translate-y-12 transform items-center justify-center rounded-full bg-gray-100 shadow-lg shadow-blue-500/40">
                                3
                            </div>  
                            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Alfamidi</h1>      
                        </div>
                    </div>
                
                </TabsContent>
                </Tabs>

        </div>
        
        </>
        
    )
}