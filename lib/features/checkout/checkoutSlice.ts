import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 1. Definisikan Interface Berdasarkan Properti yang Anda Berikan
export interface CheckedItem {
  idItem?: string | number;
  idCheckout: string;
  idList: string;
  productName?: string;
  productImage?: string;
  namaItem?: string;
  hargaItem?: number;
  hargaDiskon?: number;
  totalDiscount?: number;
  nilaiDiskon?: number;
  quantity?: number;  
  totalHargaItem?: number; // hargaItem * Quantity
  totalHargaList?: number; // (hargaItem - hargaDiskon) * Quantity
  totalHargaBayar?: number; // totalPayable
  idSeller: string | 'pebe';
  id: string;
  status: string;
}
 
// 2. Definisikan Interface untuk Initial State Redux
interface CheckoutState {
  items: CheckedItem[];
  totalItems: number;
  totalPrice: number;
  summary: {
    grandTotalItem: number;
    grandTotalList: number;
    grandTotalBayar: number;
  };
  totalDiscount: number;
  totalDelivery:number;
  totalPayable: number;
  biayaPajak: number;
  biayaLayanan: number; // admin fee
  biayaPengiriman: number;
  idCheckout: string; 
}

const initialState: CheckoutState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
  summary: {
    grandTotalItem: 0,
    grandTotalList: 0,
    grandTotalBayar: 0,
  },
  totalDiscount: 0,
  totalDelivery: 0,
  totalPayable: 0,
  biayaPajak: 0,
  biayaLayanan: 0,
  biayaPengiriman: 0,
  idCheckout: '',
};

interface CheckoutTotals {
  totalItems: number;
  totalPrice: number;
  totalDiscount: number;  
}

// Fungsi pembantu (helper) untuk menghitung ulang kalkulasi matematika total harga
const recalculateTotals = (item: CheckedItem) => {
  const qty = item.quantity ?? 1;
  const harga = item.hargaItem ?? 0;
  const diskon = item.hargaDiskon ?? 0;

  item.totalHargaItem = harga * qty;
  item.totalHargaList = (harga - diskon) * qty;
  item.totalHargaBayar = item.totalHargaList; // Atur sesuai skema hitungan Anda
};

// 2. ✨ Perbaikan Fungsi updateSummary agar Sinkron dengan Root State Baru Anda
const updateSummary = (state: CheckoutState) => {
  if (!state.summary) {
    state.summary = {
      grandTotalItem: 0,
      grandTotalList: 0,
      grandTotalBayar: 0,
    };
  }

  // A. Hitung akumulasi dari list array items
  state.summary.grandTotalItem = state.items.reduce((sum, item) => sum + (item.totalHargaItem ?? 0), 0);
  state.summary.grandTotalList = state.items.reduce((sum, item) => sum + (item.totalHargaList ?? 0), 0);
  state.summary.grandTotalBayar = state.items.reduce((sum, item) => sum + (item.totalHargaBayar ?? 0), 0);

  // B. Sinkronisasi ID Checkout utama dari item pertama yang dimasukkan
  if (state.items.length > 0) {
    state.idCheckout = state.items[0].idCheckout;
    // Ambil akumulasi diskon produk
    state.totalDiscount = state.items.reduce((sum, item) => sum + ((item.hargaDiskon ?? 0) * (item.quantity ?? 1)), 0);
  } else {
    state.idCheckout = '';
    state.totalDiscount = 0;
  }

  // C. (Opsional) Tentukan nilai default biaya tambahan jika belum diset dari UI
  if (state.items.length > 0) {
    state.biayaLayanan = 2000; // Contoh: Admin fee flat Rp 2.000
    state.biayaPajak = Math.round(state.summary.grandTotalBayar * 0.11); // Contoh: PPN 11%
    // state.biayaPengiriman diatur dinamis nanti lewat action kurir
  } else {
    state.biayaLayanan = 0;
    state.biayaPajak = 0;
    state.biayaPengiriman = 0;
  }

  // D. Hitung TOTAL AKHIR yang harus dibayar (grandTotalBayar + biaya-biaya)
  state.totalPayable = 
    state.summary.grandTotalBayar + 
    state.biayaPajak + 
    state.biayaLayanan + 
    state.biayaPengiriman;
    
  state.totalDelivery = state.biayaPengiriman;
};

// ===

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
  name: 'checkedItems',
  initialState,
  reducers: {
    // Menambahkan item baru ke dalam daftar checkout
   addItemToCheckout: (state, action: PayloadAction<{
        items: CheckedItem[];
        biayaPengiriman: number;
        biayaPajak: number;
        biayaLayanan: number;
        idCheckout: string;
      }>) => {
        const { items, biayaPengiriman, biayaPajak, biayaLayanan, idCheckout } = action.payload;
        
        state.idCheckout = idCheckout;
        state.biayaPengiriman = biayaPengiriman;
        state.biayaPajak = biayaPajak;
        state.biayaLayanan = biayaLayanan;
        
        // Masukkan items dan hitung otomatis total matematikanya
        state.items = items.map((item) => {
          const newItem = { ...item, idCheckout };
          recalculateTotals(newItem); // Memastikan totalHargaItem & totalHargaBayar terhitung
          return newItem;
        });

        // Hitung akumulasi grand total akhir
        updateSummary(state);
    },

    // Aksi tambahan untuk mengubah biaya pengiriman saat user memilih kurir
    updateShippingCost: (state, action: PayloadAction<number>) => {
      state.biayaPengiriman = action.payload;
      updateSummary(state); // Hitung ulang totalPayable otomatis
    },
    // Memperbarui kuantitas (Quantity) item secara dinamis
    updateItemQuantity: (state, action: PayloadAction<{ idList: string; quantity: number }>) => {
      const { idList, quantity } = action.payload;
      const targetItem = state.items.find(item => item.idList === idList);
      
      if (targetItem && quantity > 0) {
        targetItem.quantity = quantity;
        recalculateTotals(targetItem); // Hitung ulang harga item ini
        updateSummary(state);          // Hitung ulang ringkasan belanja keseluruhan
      }
    },

    // Menghapus satu item dari daftar checkout berdasarkan idList
    removeItemFromCheckout: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.idList !== action.payload);
      updateSummary(state);
    },

    // Mengosongkan seluruh isi checkout (Dipanggil setelah buat invoice sukses)
    clearCheckout: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
      state.summary = {
        grandTotalItem: 0,
        grandTotalList: 0,
        grandTotalBayar: 0,
      };
    }
  },
});

// Helper fungsi internal di dalam file slice untuk membuat ID secara konsisten
const generateSliceCheckoutId = (items: CheckedItem[]): string => {
  if (!items || items.length === 0) return '';
  const sortedIds = items.map((item) => item.idList).sort();
  const timestamp = Date.now().toString().slice(-4);
  return `CHK-${timestamp}-${sortedIds.join('-')}`;
};

// 4. Ekspor Actions dan Reducer
export const { 
  addItemToCheckout, 
  updateItemQuantity, 
  removeItemFromCheckout, 
  clearCheckout 
} = checkoutSlice.actions;

export default checkoutSlice.reducer;