"use client"
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { addListToCheckeds, removeListFromCheckout, clearCheckout } from '@/lib/features/checkout/checkoutSlice'; // Sesuaikan dengan jalur file Anda
import { RootState } from "@/lib/store";

interface CheckoutItem {
  idList?: string | number;
  idCheckout?: string | number;
  productName?: string;
  inputHarga?: string | number;
  diskonHarga?: number;
  totalHargaJadi?: number;
  quantity?: number;
  [key: string]: unknown;
}

type CheckoutList = CheckoutItem[];

export default function ShoppingInfo() {

    const dispatch = useDispatch();
    
      // 1. Ambil data items dari Redux Store (default ke array kosong jika null/undefined)
        const checkedItems = (useAppSelector((state: RootState) => state.checkout.items) ?? []) as unknown[];
        const getItemsCart = (useAppSelector((state: RootState) => state.cart.items) ?? []) as unknown as CheckoutItem[];      
        const checkoutGroups: CheckoutList[] = checkedItems.filter((group): group is CheckoutList => Array.isArray(group));
      
        const checkedItemsStringify: string[] = checkoutGroups.flatMap((group: CheckoutList) =>
          group.map((chites: CheckoutItem): string => JSON.stringify(chites))
        );
      
        const getIdListItemCheck = checkedItemsStringify.map((chisfy, index) => {
          const item: CheckoutItem = JSON.parse(chisfy) as CheckoutItem;
          return (item.idList)
    
        })
        const getListItemCheckout: CheckoutItem[] = getIdListItemCheck
          .map((gilic) => getItemsCart.find((gisfy) => (gisfy as CheckoutItem).idList === gilic))
          .filter((item): item is CheckoutItem => Boolean(item));
    
      // 2. Hitung total harga otomatis menggunakan reduce
      // (Pastikan objek item Anda memiliki properti 'price' dan 'quantity')
      const totalPrice = checkedItemsStringify.reduce((sum: any, item: any) => {
        const itemPrice = item.price || 0;
        const itemQty = item.quantity || 1; // Default ke 1 jika tidak ada kuantitas
        return sum + (itemPrice * itemQty);
      }, 0);
    
     // 1. Menghitung total HARGA semua produk
    const totalHarga = getListItemCheckout.reduce((accumulator: number, item: CheckoutItem) => {
      return accumulator + Number(item.totalHargaJadi ?? 0);
    }, 0); // 0 adalah nilai awal (initial value) angka hitungan
    const totalDiskon = getListItemCheckout.reduce((accumulator: number, item: CheckoutItem) => {
      return accumulator + Number(item.diskonHarga ?? 0);
    }, 0);
    // 2. Menghitung total STOK barang yang tersedia
    const totalStok = getListItemCheckout.reduce((acc: number, item: CheckoutItem) => {
      return acc + Number(item.quantity ?? 0);
    }, 0);
    
    const formatIDR = (amount: number): string => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            // Mengatur agar tidak menampilkan angka di belakang koma (,00)
            minimumFractionDigits: 0, 
            maximumFractionDigits: 0,
        }).format(amount);
        };

    return (
        <>
        <div className="space-y-6 md:col-span-2 lg:col-span-2">
                            
                            <div data-slot="card" data-size="default" className="cn-card group/card flex flex-col shadow-none">
                                <div
                                data-slot="card-header"
                                className="cn-card-header group/card-header @container/card-header grid auto-rows-min items-start has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] gap-1.5"
                                >
                                <div data-slot="card-title" className="cn-card-title cn-font-heading text-xl font-semibold">
                                    Your Order
                                </div>
                                <div data-slot="card-description" className="cn-card-description text-base">
                                    You have
                                    3
                                    items in your cart
                                </div>
                                </div>
                            </div>

                                <div
                                data-orientation="horizontal"
                                role="separator"
                                aria-orientation="horizontal"
                                data-slot="separator"
                                className="bg-border shrink-0 data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch"
                                ></div>


            <div data-slot="card-content" className="cn-card-content flex flex-col gap-9">
                { getListItemCheckout.map((getlic, index) => {
                  return(
                                    <div key={getlic?.idList || index} className="flex items-center justify-between gap-4">
                                        <div className="flex h-full items-center gap-4">
                                            <img
                                                src="https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/checkout/image-10.png"
                                                alt="Red cap"
                                                className="size-15.5 rounded-sm object-cover"
                                            />
                                            <div className="flex flex-col gap-1">
                                                <p className="text-base font-medium">{getlic?.productName} {getlic?.idList} : {getlic?.quantity} Pcs</p>
                                                <p className="text-muted-foreground text-base">Paket : {getlic?.inputHarga}</p>
                                                <p className="text-muted-foreground text-base">Diskon : {getlic?.diskonHarga}</p>
                                            </div>
                                        </div>
                                        <div className="sm:text-end">
                                            <span className="text-lg font-semibold">
                                                {getlic?.totalHargaJadi}
                                            </span>
                                        </div>
                                    </div>
                  )})}
                                </div>

                                <div
                                data-orientation="horizontal"
                                role="separator"
                                aria-orientation="horizontal"
                                data-slot="separator"
                                className="bg-border shrink-0 data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch"
                                ></div>

                                <div data-slot="card-content" className="cn-card-content space-y-3.5">
                                <div className="flex items-center justify-between gap-3">
                                    <span className="text-lg">Subtotal</span>
                                    <span className="text-lg font-medium">
                                    {formatIDR(totalHarga)}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between gap-3">
                                    <span className="text-lg">Discount (-)</span>
                                    <span className="text-lg font-medium">
                                    {formatIDR(totalDiskon)}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between gap-3">
                                    <span className="text-lg">Biaya Layanan (+)</span>
                                    <span className="text-lg font-medium">
                                    {formatIDR(0)}
                                    </span>
                                </div>
                                </div>
                                <div
                                data-orientation="horizontal"
                                role="separator"
                                aria-orientation="horizontal"
                                data-slot="separator"
                                className="bg-border shrink-0 data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch"
                                ></div>
                                <div data-slot="card-content" className="cn-card-content space-y-6">
                                <div className="flex items-center justify-between gap-3">
                                    <span className="text-lg font-medium">Total Payable</span>
                                    <span className="text-lg font-semibold">
                                    {formatIDR( totalHarga - totalDiskon)}
                                    </span>
                                </div>
                                <button
                                    type="button"
                                    tabIndex={0}
                                    data-slot="button"
                                    className="cn-button group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 cn-button-variant-default cn-button-size-lg 
                                        w-full bg-blue-300 rounded-full p-2"
                                >
                                    Ubah Belanja
                                </button>
                                <p className="text-muted-foreground text-base">
                                    By placing your order, you agree to our company
                                    <a href="#" className="text-card-foreground font-semibold hover:underline">Privacy Policy</a>
                                    and
                                    <a href="#" className="text-card-foreground font-semibold hover:underline">Conditions of use</a>
                                    .
                                </p>
                                </div>
                    
                    <div data-slot="card" data-size="default" className="cn-card group/card flex flex-col shadow-none">
                                <div
                                data-slot="card-header"
                                className="cn-card-header group/card-header @container/card-header grid auto-rows-min items-start has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] gap-2"
                                >
                                    <div data-slot="card-title" className="cn-card-title cn-font-heading text-xl font-semibold">Coupon Code</div>
                                    <div data-slot="card-description" className="cn-card-description text-base">
                                        Enter code to get discount instantly
                                    </div>
                                </div>
                                <div
                                    data-orientation="horizontal"
                                    role="separator"
                                    aria-orientation="horizontal"
                                    data-slot="separator"
                                    className="bg-border shrink-0 data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch"
                                    ></div>
                                <div data-slot="card-content" className="cn-card-content flex gap-3">
                                    <input
                                        id="base-ui-_R_3linpfiv5ubr9fiv5uj9b_"
                                        type="text"
                                        data-slot="input"
                                        placeholder="Add discount code"
                                        className="cn-input file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 input-lg"
                                    />
                                    <button
                                        type="button"
                                        tabIndex={0}
                                        data-slot="button"
                                        className="cn-button group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 cn-button-variant-default cn-button-size-lg
                                        bg-blue-400 py-2 px-4 rounded-full m-4"
                                    >
                                        Apply
                                    </button>
                                </div>
                            </div>

            </div>
        </>
        
    )
}