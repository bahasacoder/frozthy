'use client';
import { useState, useEffect } from "react"; 
import Image from "next/image";
import Link from "next/link";
import CheckoutMain from "./checkout-main";
import CheckoutTable from "./checkout-table";
import CheckoutCart from "./checkout-cart";
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { addListToCheckeds, removeListFromCheckout, clearCheckout } from '@/lib/features/checkout/checkoutSlice';
import { RootState } from "@/lib/store";

interface CheckoutItem {
  id?: string | number;
  idList?: string | number;
  idCheckout?: string | number;
  nama?: string;
  [key: string]: unknown;
}

type CheckoutList = CheckoutItem[];

export default function CartCheckoutPage() {
  const dispatch = useAppDispatch();
  const checkedItems = (useAppSelector((state: RootState) => state.checkout.items) ?? []) as unknown[];
  console.log('checkedItems main', checkedItems)
  console.log(Array.isArray(checkedItems));

  const checkoutGroups: CheckoutList[] = checkedItems.filter((group): group is CheckoutList => Array.isArray(group));

  const checkedItemsStringify: string[] = checkoutGroups.flatMap((group: CheckoutList) =>
    group.map((chites: CheckoutItem): string => JSON.stringify(chites))
  );

  console.log('checkedItemsStringify', checkedItemsStringify);
  console.log('true checkedItemsStringify', Array.isArray(checkedItemsStringify));
  console.log('checkedItemsStringify length', checkedItemsStringify.length);

  return (
    <>
    <div className="w-full">
      <h2 className="text-2xl">Checkout Page</h2>
      {checkoutGroups.map((icheck: CheckoutList, index: number) => {
        const jsonIcheck: string = JSON.stringify(icheck);

        return (
          <div key={index}>
            <p>Json : </p>
            <pre>{jsonIcheck}</pre>
          </div>
        );
      })}
    </div>
    <div>
        <CheckoutCart />

    </div>
    
    <div>
      {/* Main */}
      {checkedItemsStringify.map((lichecked) => {
        const item = JSON.parse(lichecked) as CheckoutItem;

        return (
          <div key={item.idList} className="w-full my-6">
            <p>No. Urut : {item.id}</p>
            <p>Nama : {item.nama}</p>
            <p>Kode List : {item.idList}</p>
          </div>
        )


      })}

      <CheckoutMain />

      {/* *** */}
    </div>
     <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {/* Melakukan mapping data ke elemen HTML/JSX */}
        {checkedItemsStringify.map((itmcheck: string, index: number) => {
          const item: CheckoutItem = JSON.parse(itmcheck) as CheckoutItem;

          return (
            <div 
              key={item.idList ? `${item.idList}-${item.idCheckout ?? index}` : index}
            >
              {/* Menampilkan Properti Lainnya */}
              <p style={{ margin: '4px 0', fontSize: '14px', color: '#555' }}>
                <strong>ID List:</strong> {item.idList}
              </p>
            </div>
          );
        })}
      </div>
    </>
  )
}