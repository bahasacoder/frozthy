'use client';
import React from 'react';
import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { addListToCheckout } from '@/lib/features/checkout/checkoutSlice';
import { removeListItemFromCart, removeItemFromCart, onUpdateQuantity, clearCart } from '@/lib/features/cart/cartSlice';
import { useRouter } from 'next/navigation';
import CartListItems from "./cart-list-items";
import CartResumeItems from "./cart-resume-items";
import CartDialogKiri from './CartDialogKiri';
// import CheckedItemList from './CheckedItemList'; // Impor komponen anak

export default function ViewCartPage() {

    const router = useRouter();
    
    const [itemChecked, setItemChecked] = useState<string[]>([]);
    const [itemsChecked, setItemsChecked] = useState<string[]>([]); // State untuk menyimpan daftar ID yang dicentang berada di Parent
    const [newItemsChecked, setNewItemsChecked] = useState<string[]>([]);
    const [idCheckout, setIdCheckout] = useState<string>('');
    const [selectedShippingPrice, setSelectedShippingPrice] = useState<string>("");

  
  const dispatch = useAppDispatch();
  //const { items, totalItems, totalPrice } = useAppSelector((state) => state.cart);

  const handleClearCart = () => {
    if (confirm('Are you sure you want to clear the cart?')) {
      dispatch(clearCart());
    }
  };

  const cartItems = useAppSelector((state) => state.cart.items) || [];
  console.log('Cart Dialog Box Kiri:', cartItems);

  const totalItemsCount = cartItems.reduce((total, item) => total + (item.quantity || 0), 0);
  const totalPriceSum = cartItems.reduce((total, item) => total + ((item.hargaItem || 0) * (item.quantity || 0)), 0);
  const totalHargaDiskon = cartItems.reduce((total, item) => total + (item.hargaDiskon || 0) * (item.quantity || 0), 0);
  const totalPayable = totalPriceSum - totalHargaDiskon;

  // ---

  // Fungsi callback untuk menerima data dari Child
  const handleItemCheck = (item: any, checked: boolean) => {
    if (item.idList === undefined) return;
    const id = item.idList as string;
    
    setItemsChecked((prevChecked) => {
      if (checked) {
        return prevChecked.includes(id) ? prevChecked : [...prevChecked, id];
      } 
      return prevChecked.filter((itemId) => itemId !== id);
    });
  };

  console.log('ID yang dicentang di Parent:', itemsChecked);

  // ---

  const getItemName = (item: any) => {
    const itemWithName = item as { id?: string | number; name?: string; title?: string; product?: { name?: string; title?: string }; productName?: { name?: string; title?: string } };
    return itemWithName.name ?? itemWithName.title ?? itemWithName.product?.name ?? itemWithName.product?.title ?? `Item #${item.id}`;
  };

  const handleMergerItem = () => {
    // Implement the logic to merge items in the cart
    console.log('Merging items in the cart...');
  }
  const arrayIdChecked = Object.values(itemsChecked);
    function findMultipleCheckeds<T extends { idList?: string | number }>(
      cartArray: T[],
      idArray: (string | number)[],
    ): (T & { idList: string })[] {
      return cartArray.filter(
        (item): item is T & { idList: string } =>
          typeof item.idList === 'string' && idArray.includes(item.idList),
      );
    }

    // --- Cara Penggunaan ---
    const resultsChecked = findMultipleCheckeds(cartItems, arrayIdChecked).map((item) => ({
      ...item,
      id: String(item.id),
      hargaItem: item.hargaItem ?? 0,
      productName: item.productName ?? getItemName(item),
      totalHargaList: item.totalHargaList ?? 0,
    }));

  return (
    <div className="w-full">
      
      <div className="h-full w-full">
      <section className="py-8 sm:py-16 lg:py-24">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* Mengirimkan data sebagai props ke komponen anak */}
              <CartListItems 
                items={cartItems}
                totalItems={totalItemsCount}
                subTotal={totalPriceSum}
                totalDiscount={totalHargaDiskon}
                payable={totalPayable}
                onItemCheck ={handleItemCheck}
                onClearSuccess={() => {
                  setSelectedShippingPrice("");
                  localStorage.removeItem('user_shipping_price'); // Hapus juga dari localStorage
                }}
              />
              
          <CartResumeItems itemsChecked={resultsChecked} />

              </div>
           {/* Mengirim data resultsChecked ke komponen anak */}

        </div>
      </section>
       
    </div>
    </div>
  )
}
