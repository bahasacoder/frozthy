"use client"
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { addListToCheckeds, removeListFromCheckout, clearCheckout } from '@/lib/features/checkout/checkoutSlice'; // Sesuaikan dengan jalur file Anda
import { RootState } from "@/lib/store";

interface CheckoutItem {
  idList?: string | number;
  idCheckout?: string | number;
  [key: string]: unknown;
}

type CheckoutList = CheckoutItem[];

const CheckoutMain = () => {
  const dispatch = useDispatch();

  // 1. Ambil data items dari Redux Store (default ke array kosong jika null/undefined)
    const checkedItems = (useAppSelector((state: RootState) => state.checkout.items) ?? []) as unknown[];
    const getItemsCart = (useAppSelector((state: RootState) => state.cart.items) ?? []) as unknown[];
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
      <div>

      </div>

      {/* ******* */}
      <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
        <h2>Ringkasan Checkout</h2>
        <p style={{ color: '#666' }}>Periksa kembali daftar item pilihan Anda sebelum melakukan pembayaran.</p>

        {/* Kondisi jika keranjang/checkout kosong */}
        {checkedItemsStringify.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px', border: '1px dashed #ccc', borderRadius: '8px', marginTop: '20px' }}>
            <p style={{ fontSize: '18px', color: '#888' }}>Belum ada item yang dipilih untuk checkout.</p>
            <button style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
              Kembali Belanja
            </button>
          </div>
        ) : (
          <div style={{ marginTop: '20px' }}>
            {/* Daftar Produk */}
            <div style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
            {checkedItemsStringify.map((itmcheck: string, index: number) => {
                const item: CheckoutItem = JSON.parse(itmcheck) as CheckoutItem;
                const itemName =
                  typeof item.nama === 'string' || typeof item.nama === 'number'
                    ? String(item.nama)
                    : `Item #${String(item.idList ?? 'unknown')}`;
                const itemPrice = Number(item.price ?? 0);
                const itemQty = Number(item.quantity ?? 1);

                return (
                  <div 
                    key={item.idList ?? `${item.idCheckout ?? 'checkout'}-${index}`} 
                    style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center', 
                      padding: '15px', 
                      borderBottom: '1px solid #eee',
                      background: '#fff'
                    }}
                  >
                    <div>
                      <h4 style={{ margin: '0 0 5px 0' }}>
                        {itemName} {item.idList}
                      </h4>
                      <span style={{ fontSize: '14px', color: '#666' }}>
                        Rp {itemPrice.toLocaleString('id-ID')} x {itemQty}
                      </span>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                      <strong style={{ color: '#333' }}>
                        Rp {(itemPrice * itemQty).toLocaleString('id-ID')}
                      </strong>
                      {/* Tombol Hapus / Uncheck */}
                      <button 
                        onClick={() => handleRemoveItem(item.idList)}
                        style={{ 
                          background: 'none', 
                          border: 'none', 
                          color: '#dc3545', 
                          cursor: 'pointer',
                          fontSize: '14px'
                        }}
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Rincian Total Pembayaran */}
            <div style={{ 
              marginTop: '20px', 
              padding: '20px', 
              background: '#f8f9fa', 
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <span style={{ fontSize: '16px', color: '#555' }}>Total Pembayaran:</span>
                <h2 style={{ margin: '5px 0 0 0', color: '#28a745' }}>
                  Rp {totalPrice.toLocaleString('id-ID')}
                </h2>
              </div>
              
              <button 
                onClick={handleProcessPayment}
                style={{ 
                  padding: '12px 25px', 
                  backgroundColor: '#28a745', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '5px', 
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Bayar Sekarang
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CheckoutMain;
