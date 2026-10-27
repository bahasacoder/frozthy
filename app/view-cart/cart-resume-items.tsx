"use client"
import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';;
import type { RootState, AppDispatch } from "@/lib/store";
import { addListToCheckout } from '@/lib/features/checkout/checkoutSlice';
import { removeListItemFromCart, removeItemFromCart, onUpdateQuantity, clearCart } from '@/lib/features/cart/cartSlice';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import CartListItem from "./CartListItem";
import { useRouter } from 'next/navigation';
import { Str_Random } from '../actions/generalFunctions';

interface CheckedItem {
  idList: string;
  productName: string;
  totalHargaList: number | string;
  hargaItem: number;
  hargaDiskon?: number;
  quantity?: number;
}

interface CheckedItemListProps {
  itemsChecked: CheckedItem[];
}

interface CartProduct {
  idList: string;
}

interface CartShop {
  products: CartProduct[];
}

interface DiscountableProduct {
  harga?: number;
  hargaDiskon?: number;
  quantity?: number;
}

export default function CartResumeItems({ itemsChecked: initialItemsChecked }: CheckedItemListProps) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const cartItems = useAppSelector((state: RootState) => state.cart.items);
    const [itemChecked, setItemChecked] = useState<string[]>([]);
    const [idCheckout, setIdCheckout] = useState<string>('');
      const [itemsChecked, setItemsChecked] = useState<string[]>([]);
      const [newItemsChecked, setNewItemsChecked] = useState<string[]>([]);
    // const [itemsChecked, setItemsChecked] = useState<string[]>(() =>
    //   initialItemsChecked.map((item) => item.idList)
    // );
    const [ biayaPajak, setBiayaPajak ] = useState(0);
    const [ biayaLayanan,setBiayaLayanan ] = useState(0);
    const savedShippingPriceFromRedux = useAppSelector(
      (state: RootState) => state.checkout.biayaPengiriman
    );
    const [selectedShippingPrice, setSelectedShippingPrice] = useState<string>(() => {
      if (typeof window !== 'undefined') {
        const localSaved = localStorage.getItem('user_shipping_price');
        if (localSaved !== null) return localSaved;
      }
      return ""; // Default awal jika tidak ada data sama sekali
    });

    // 3. Efek untuk mensinkronisasikan data jika Redux diperbarui dari luar komponen
    useEffect(() => {
      if (savedShippingPriceFromRedux !== undefined && savedShippingPriceFromRedux !== null) {
        const priceStr = String(savedShippingPriceFromRedux);
        setSelectedShippingPrice(priceStr);
        localStorage.setItem('user_shipping_price', priceStr);
      }
    }, [savedShippingPriceFromRedux]);
    // 4. Update handler onChange untuk menyimpan langsung ke localStorage saat dipilih manual
    const handleChangeShippingPrice = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value;
      setSelectedShippingPrice(value);
      localStorage.setItem('user_shipping_price', value); // Menyimpan permanen ke browser
    };
    // const cartItems = useAppSelector((state) => state.cart.items) || [];
    const totalCheckedCount = initialItemsChecked.length;
    // Fungsi A: Menyaring produk berdasarkan array ID target
    const findMultipleProducts = (cartArray: CartShop[], idArray: string[]): CartProduct[] => {
      const idSet = new Set(idArray);
      return cartArray
        .flatMap(shop => shop.products)
        .filter(product => idSet.has(product.idList));
    };

    // Fungsi B: Menghitung total harga bersih setelah dikurangi diskon
    const calculateTotalWithDiscount = (filteredProducts: DiscountableProduct[]): number => {
      return filteredProducts.reduce<number>((total, product) => {
        const price = product.harga || 0;
        const discount = product.hargaDiskon || 0; // Fallback 0 jika produk tidak sedang diskon
        const qty = product.quantity || 1;
        
        // Hitung harga per item setelah dikurangi potongan diskon
        const netUnitPrice = price - discount;
        
        // Akumulasikan ke subtotal belanja
        return total + (netUnitPrice * qty);
      }, 0);
    };
    
    // 1. Ambil produk terpilih
    //const selectedProducts = findMultipleProducts(cartData, targetIds);

  // const totalPricesChecked = cartItems.reduce((total, item) => total + ((item.hargaItem || 0) * (item.quantity || 0)), 0);
  // Menghitung total harga dari semua item yang ada di dalam array initialItemsChecked
  const totalHargaCheckList = initialItemsChecked.reduce((total, item) => {
    return total + ((item.hargaItem || 0) * (item.quantity || 0));
  }, 0);
  const totalDiskonChecked = initialItemsChecked.reduce((total, item) => {
    return total + ((item.hargaDiskon || 0) * (item.quantity || 0));
  }, 0);
  const totalHargaChecked = initialItemsChecked.reduce((total, item) => {
    return total + ((Number(item.totalHargaList) || 0) * (item.quantity || 0));
  }, 0);

  // Hasil akhir yang harus dibayar untuk item yang dicentang
  // const totalPayChecked = totalHargaChecked - totalDiskonChecked;
  const biayaPengiriman = Number(selectedShippingPrice) || 0;
  const totalPayable = totalHargaCheckList - totalDiskonChecked + biayaPajak + biayaLayanan + biayaPengiriman ;
    
  
     const handleProceedToCheckout = (itemsChecked: string[]) => {
      if (itemsChecked.length > 0) {
        // Implement the logic to proceed to checkout
        console.log('Proceeding to checkout...', itemsChecked);
       const selectedItems = itemsChecked.join(', ');
        console.log(Array.isArray(itemsChecked));
  
        alert(`Proceeding to checkout with the following items: ${selectedItems}`);
  
        const newCheckoutId = `CK-${Str_Random(3)}`;
        setIdCheckout(newCheckoutId);
        // cartItems = {items}
        const checkoutItems = cartItems.filter(
          (item) => item.idList !== undefined && itemsChecked.includes(String(item.idList))
        );
        // pecah id checkbox menjadi tersendiri
        const daftarListChecked = [];
        // 1. Ambil nilai biaya dari useState Anda saat ini (pastikan nilainya divalidasi ke Number)
        const biayaPengirimanValue = Number(selectedShippingPrice) || 0; // State biaya pengiriman
        const biayaPajakValue = Number(biayaPajak) || 0;                 // State biaya pajak Anda
        const biayaLayananValue = 0; // Tambahkan jika ada state biaya layanan
        const biayaPengiriman = Number(selectedShippingPrice) || 0;
        // PERBAIKAN: Mengubah <= menjadi < dan menyamakan nama variabel itemChecked
        for (let i = 0; i < itemsChecked.length; i++) {
          // Buat objek baru di setiap putaran
          const listBaru = {
            id: i + 1,
            nama: `List Ke-${i + 1}`, // Diubah ke i + 1 agar nama mulai dari "List Ke-1"
            idList: itemsChecked[i],    // Mengambil nilai dari array ('sddsf', dll)
            idCheckout: newCheckoutId,
            status: "Aktif"
          };
          // Masukkan objek ke dalam array
          daftarListChecked.push(listBaru);
          console.log('daftarListChecked', listBaru )
        }
  
        console.log('daftarList Dialog', daftarListChecked);
  
        // const checkedLists = {} 
        const getItemsChecked = [...itemChecked, ...itemsChecked];
        setNewItemsChecked(getItemsChecked);
        console.log('itemsChecked', itemsChecked, checkoutItems);
        // ✨ FIX UTAMA: BUNGKUS BIAYA KE DALAM PAYLOAD DISPATCH
        // ==========================================
        dispatch(addListToCheckout({
          idCheckout: newCheckoutId,
          items: daftarListChecked,
          summary: {
            biayaPengiriman: biayaPengirimanValue,
            biayaPajak: biayaPajakValue,
            biayaLayanan: biayaLayananValue
          }
        } as any));

        // Navigasi ke halaman checkout
        router.push('/beli-saja');
        
      } else {
        alert('Please select at least one item to proceed to checkout.');
      }
    };

  return (
               <div className="space-y-6 rounded-lg border bg-green-50 p-6 shadow-sm">
                  <div
                                data-slot="card"
                                data-size="default"
                                className="cn-card group/card flex flex-col w-full max-w-md text-base shadow-none ring-0"
                            >
                                <div
                                    data-slot="card-header"
                                    className="cn-card-header group/card-header @container/card-header grid auto-rows-min items-start has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]"
                                    >
                                        <div data-slot="card-title" className="cn-card-title cn-font-heading text-xl font-semibold">
                                            Prices Checked
                                        </div>
                                </div>
                                    <div data-slot="card-content" className="cn-card-content space-y-5">
                                        <div
                                            data-orientation="horizontal"
                                            role="separator"
                                            aria-orientation="horizontal"
                                            data-slot="separator"
                                            className="bg-border shrink-0 data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch"
                                        ></div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-muted-foreground">Total Items : </span>
                                            <span className="font-medium">{totalCheckedCount}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-muted-foreground">Total Amount : </span>
                                            <span className="font-medium">${totalHargaCheckList.toFixed(2)}</span>
                                        </div>
                                        
                                        <div className="flex items-center justify-between">
                                            <span className="text-muted-foreground">Discount : </span>
                                            <span className="font-medium">{totalDiskonChecked.toFixed(2)}</span>
                                        </div>                                        
                                        <div className="flex items-center justify-between">
                                            <span className="text-muted-foreground">Pajak : </span>
                                            <span className="font-medium">{biayaPajak.toFixed(2)}</span>
                                        </div>                                    
                                        <div className="flex items-center justify-between">
                                            <span className="text-muted-foreground">Layanan : </span>
                                            <span className="font-medium">{biayaLayanan.toFixed(2)}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className='relative flex items-center gap-2'>
                                                <span className="text-muted-foreground Shipping">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pinned preview-icon"><path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 01-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0112 0"/><path d="M4.474 15h-.197a1 1 0 00-.969.753l-1.097 4.35a1.5 1.5 0 001.444 1.898L20.344 22a1.5 1.5 0 001.446-1.897l-1.098-4.35a1 1 0 00-.969-.753h-.197"/><circle cx="12" cy="8" r="2"/></svg>
                                                </span>
                                                <span className="inline-block font-medium">
                                                  <select id="biaya_kirim" value={selectedShippingPrice} onChange={handleChangeShippingPrice}
                                                    className="block w-full px-3 py-0 bg-neutral-secondary-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                                                  >
                                                    <option>Pilih Pengiriman</option>
                                                    <option value="0">Ambil Sendiri</option>
                                                    <option value="5000">Kurir</option>                                                    
                                                    <option value="50000">Executive</option>
                                                  </select>
                                                </span>
                                              </div>
                                              <span className="font-medium">{biayaPengiriman}</span> 
                                        </div>
                                        <div
                                            data-orientation="horizontal"
                                            role="separator"
                                            aria-orientation="horizontal"
                                            data-slot="separator"
                                            className="bg-border shrink-0 data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch"
                                        ></div>
                                        <div className="flex items-center justify-between text-lg font-semibold">
                                            <span>Total Bayar</span>
                                            <span>
                                                {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(totalPayable)}
                                            </span>
                                        </div>
                                    </div>
                                    <div data-slot="card-content" className="cn-card-content flex flex-col items-start gap-3.5">
                                        <div className="flex w-full flex-col gap-3.5 mx-auto">
                                              <Button 
                                                variant="default" className="rounded-full"
                                                onClick={() => handleProceedToCheckout(initialItemsChecked.map((item) => item.idList))}
                                              >
                                                Checkout
                                              </Button>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <p>We Accept:</p>
                                            <div className="flex items-center gap-4">
                                                <img src="https://cdn.shadcnstudio.com/ss-assets/brand-logo/visa.png" alt="Visa" className="h-4" />
                                                <img
                                                    src="https://cdn.shadcnstudio.com/ss-assets/brand-logo/paypal-icon.png"
                                                    alt="PayPal"
                                                    className="h-4"
                                                />
                                                <img
                                                    src="https://cdn.shadcnstudio.com/ss-assets/brand-logo/master.png"
                                                    alt="Mastercard"
                                                    className="h-4"
                                                />
                                            </div>
                                        </div>
                                </div>
                            </div>
                </div>
          
  )
}