import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CheckedItem {
  idItem?: string | number;
  idCheckout: string,
  idList: string,
  productName?: string;
  productImage?: string;
  namaItem?: string;
  hargaItem?: number;
  hargaDiskon?: number;
  totalDiscount?: number;
  nilaiDiskon?: number;
  quantity?: number;
  totalHargaList?: number; // list item
  totalHargaBayar?: number; // totalPayable
  idSeller: string | 'pebe';
  id: string;
  status:string;
} 
interface CheckedItemsState {
  items: CheckedItem[];
  totalItems: number;
  totalPrice: number;
  totalDiscount: number;
  totalDelivery:number;
  totalPayable: number;
  biayaPajak: number;
  biayaLayanan: number;
  biayaPengiriman: number;
  checkoutId: string; // Tambahkan properti untuk menyimpan ID Checkout
}

interface CheckoutTotals {
  totalItems: number;
  totalPrice: number;
  totalDiscount: number;  
}

const initialState: CheckedItemsState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
  totalDiscount: 0,
  totalDelivery: 0,
  totalPayable: 0,
  biayaPajak: 0,
  biayaLayanan: 0,
  biayaPengiriman: 0,
  checkoutId: '',
};


const calculateTotals = (items: CheckedItem[]): CheckoutTotals => {
  const totalItems = items.reduce((sum, item) => sum + (item.quantity ?? 0), 0);
  const totalPrice = parseFloat(
     items
      .reduce((sum, item) => sum + (item.hargaItem ?? 0) * (item.quantity ?? 0), 0)
       .toFixed(2)
   );
  const totalDiscount = items.reduce(
    (sum, item) => sum + (item.totalDiscount ?? 0) * (item.quantity ?? 0),
    0
  );
  return { totalItems, totalPrice, totalDiscount };
};

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    addListToCheckout: (state, action: PayloadAction<{
      idCheckout: string;
      items: any[];
      summary?: { biayaPajak: number; biayaLayanan: number; biayaPengiriman: number; totalItemsChecked?: number }
    }>) => {
      // Menggunakan fallback (?? 0) dan optional chaining (?. ) sebagai pengaman dari nilai undefined
      state.checkoutId = action.payload.idCheckout;
      state.items = action.payload.items;
      state.biayaPajak = action.payload.summary?.biayaPajak ?? 0;
      state.biayaLayanan = action.payload.summary?.biayaLayanan ?? 0;
      state.biayaPengiriman = action.payload.summary?.biayaPengiriman ?? 0;
    },
    removeListFromCheckout: (state: CheckedItemsState, action: PayloadAction<string | number>) => {
      // Payload cukup berupa idList dari item yang ingin dihapus (bisa string atau number)
      const idListToRemove = action.payload; 
      console.log('Removing item from checkout:', idListToRemove);

      if (state.items) {
        // Saring array untuk menyisakan item yang ID-nya TIDAK COCOK dengan idListToRemove
        state.items = state.items.filter((item) => item.idList !== idListToRemove);
      }

      // Otomatis perbarui ID Checkout setiap kali item berkurang
      state.checkoutId = generateSliceCheckoutId(state.items);

      console.log('read checkout', state.items?.map((item) => item.idList) || []);
    },

    clearCheckout: (state) => {
      state.items = [];
      state.checkoutId = ''; // Kosongkan ID saat transaksi selesai
    },

    addListToCheckeds: (state: CheckedItemsState, action: PayloadAction<string>) => {
      console.log(action.payload);
      return state;
    },
    canceListToCheckeds: (state: CheckedItemsState, action: PayloadAction<string>) => {
      console.log(action.payload);
      return state;
    },
  },
});

// Helper fungsi internal di dalam file slice untuk membuat ID secara konsisten
const generateSliceCheckoutId = (items: CheckedItem[]): string => {
  if (!items || items.length === 0) return '';
  const sortedIds = items.map((item) => item.idList).sort();
  const timestamp = Date.now().toString().slice(-4);
  return `CHK-${timestamp}-${sortedIds.join('-')}`;
};

export const { addListToCheckout,  removeListFromCheckout, clearCheckout, addListToCheckeds, canceListToCheckeds } = checkoutSlice.actions;
export default checkoutSlice.reducer;