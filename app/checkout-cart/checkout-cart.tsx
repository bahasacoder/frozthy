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
  totalHargaJadi?: number;
  quantity?: number;
  [key: string]: unknown;
}

type CheckoutList = CheckoutItem[];

export default function CheckoutCart() {
  const dispatch = useDispatch();

  // 1. Ambil data items dari Redux Store (default ke array kosong jika null/undefined)
    const checkedItems = (useAppSelector((state: RootState) => state.checkout.items) ?? []) as unknown[];
    const getItemsCart = (useAppSelector((state: RootState) => state.cart.items) ?? []) as unknown as CheckoutItem[];
    console.log('checkedItems main', checkedItems)
    console.log(Array.isArray(checkedItems));
    console.log('getItemsCart checkout', getItemsCart)
  
    const checkoutGroups: CheckoutList[] = checkedItems.filter((group): group is CheckoutList => Array.isArray(group));
  
    const checkedItemsStringify: string[] = checkoutGroups.flatMap((group: CheckoutList) =>
      group.map((chites: CheckoutItem): string => JSON.stringify(chites))
    );
  
    console.log('checkedItemsStringify', checkedItemsStringify);
    /* **** */
    const getIdListItemCheck = checkedItemsStringify.map((chisfy, index) => {
      const item: CheckoutItem = JSON.parse(chisfy) as CheckoutItem;
      return (item.idList)

    })
    console.log('getIdListItemCheck from', getIdListItemCheck)
    const getListItemCheckout = getIdListItemCheck.map((gilic) =>
      getItemsCart.find((gisfy) => (gisfy as CheckoutItem).idList === gilic)
    );
    console.log('getListItemCheckout', getListItemCheckout)

  // 2. Hitung total harga otomatis menggunakan reduce
  // (Pastikan objek item Anda memiliki properti 'price' dan 'quantity')
  const totalPrice = checkedItemsStringify.reduce((sum: any, item: any) => {
    const itemPrice = item.price || 0;
    const itemQty = item.quantity || 1; // Default ke 1 jika tidak ada kuantitas
    return sum + (itemPrice * itemQty);
  }, 0);

  // 3. Fungsi untuk menghapus item langsung dari halaman checkout
  const handleRemoveItem = (idList: any) => {
    dispatch(removeListFromCheckout(idList));
  };

  const handleProcessPayment = () => {
    alert('Pesanan Anda berhasil diproses!');
    // Di sini Anda bisa menambahkan aksi lanjutan seperti membersihkan cart/checkout store
  };

  return (
    <>
      <div className="w-full mx-auto ">
          <div className='box mx-auto w-3/4'>
          <h1>Your Cart</h1>
            {
              getListItemCheckout.map((getlic, index) => {

                return(
                  <div key={getlic?.idList || index}>
                    <div className="flex gap-6 border-t pt-7 pb-4 max-sm:flex-col sm:items-center">
                                  <div className="flex grow items-center gap-4">
                                      <label data-slot="label" className="cn-label flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed group relative cursor-pointer">
                                          <span data-checked="" role="checkbox" tabIndex={0} id="base-ui-_R_1b9inpfiv5ubr9fiv5uj9b_" aria-checked="true" data-slot="checkbox" className="cn-checkbox peer shrink-0 outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50 absolute top-2 left-2 hidden size-4 group-hover:block hover:border-black data-checked:block **:[svg]:size-3!">
                                          <span data-checked="" data-slot="checkbox-indicator" className="cn-checkbox-indicator grid place-content-center text-current transition-none">
                                              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor">
                                              <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
                                              </svg>
                                          </span>
                                          </span>
                                          {/*
                                          <input style={{" clippath:="" "inset(50%)",="" overflow:="" "hidden",="" whitespace:="" "nowrap",="" border:="" 0,="" padding:="" width:="" "1px",="" height:="" margin:="" "-1px",="" position:="" "fixed",="" top:="" left:="" }}="" tabIndex={-1}" type="checkbox" aria-hidden="true" checked={true}">
                                          */}
                                          <div className="size-25">
                                          <img src="https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/shopping-cart/image-2.png" alt="Women Hooded Sweatshirt" className="rounded-md object-cover" />
                                          </div>
                                      </label>
                                      <div className="flex flex-col justify-between gap-4">
                                          <div className="flex flex-col gap-2">
                                              <h3 className="font-medium">{getlic?.productName} {getlic?.idList}</h3>
                                              <p className="text-muted-foreground">
                                                  Size:
                                                  L
                                              </p>
                                          </div>
                                          <div className="flex items-center gap-2">
                                              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="remixicon size-5">
                                                  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z"></path>
                                              </svg>
                                              <p className="text-muted-foreground text-sm">7 days return Available</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="flex items-center gap-12">
                                      <div className="cn-select-trigger flex items-center justify-between border-2 border-gray-200 p-2 rounded-md whitespace-nowrap outline-none disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 w-25 shadow-none">
                                          <span data-slot="select-value" className="cn-select-value mx-auto">{getlic?.quantity}</span>
                                      </div>
                                      {/*
                                      <input style={{" clippath:="" "inset(50%)",="" overflow:="" "hidden",="" whitespace:="" "nowrap",="" border:="" 0,="" padding:="" width:="" "1px",="" height:="" margin:="" "-1px",="" position:="" "fixed",="" top:="" left:="" }}="" tabIndex={-1}" aria-hidden="true" value="1">
                                      */}
                                      <p className="text-lg font-semibold">
                                          $
                                          {getlic?.totalHargaJadi}
                                      </p>
                                      
                                </div>
                            </div>
                      </div>

                )
              })        
            }
              
                            


          </div>
      </div>

    </>
  );
};

