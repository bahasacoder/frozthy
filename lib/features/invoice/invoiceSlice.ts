import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// 1. Pastikan struktur tipe data didefinisikan dengan jelas
interface InvoiceItem {
  id: string;
  idCustomer: string;
  invoiceNumber: string;
  invoiceDate: string;
  expireDate: string;
  items: any[]; // Ganti 'any' dengan tipe data yang sesuai jika ada struktur khusus untuk item
  totalAmount: number;
  // Tambahkan properti lainnya sesuai kebutuhan data Anda
  [key: string]: unknown; // Mengizinkan properti dinamis tambahan
} 

interface InvoiceState {
  invoices: InvoiceItem[];
}

// 2. Terapkan tipe data pada initialState
const initialState: InvoiceState = {
  invoices: [],
};


const invoiceSlice = createSlice({
  name: 'invoice',
  initialState,
  reducers: {
    // ✨ PERBAIKAN PADA REDUCER PUSH:
    addInvoice: (state, action: PayloadAction<InvoiceItem>) => {
      // Pastikan state.invoices selalu berupa array sebelum di-push (safety guard)
      if (Array.isArray(state.invoices)) {
        state.invoices.push(action.payload);
      } else {
        // Jika karena suatu alasan state rusak/berubah menjadi non-array, reset menjadi array baru
        state.invoices = [action.payload];
      }
    },
     // Reducer pelengkap untuk reset/mengisi banyak data sekaligus
    setInvoices: (state, action: PayloadAction<InvoiceItem[]>) => {
      state.invoices = Array.isArray(action.payload) ? action.payload : [];
    },

    postInvoice: (state, action: PayloadAction<InvoiceItem>) => {
      state.invoices.push(action.payload);
    },
    // Fungsi untuk memperbarui atau set ulang seluruh list invoice (misal setelah fetch API)
    setInvoicesxx: (state, action: PayloadAction<InvoiceItem[]>) => {
      state.invoices = action.payload;
    },
    // Fungsi untuk menghapus invoice berdasarkan ID
    deleteInvoice: (state, action: PayloadAction<string>) => {
      state.invoices = state.invoices.filter(item => item.id !== action.payload);
    }
  },
});

// Export action untuk digunakan di komponen (dispatch)
export const { addInvoice, setInvoices, deleteInvoice } = invoiceSlice.actions;

// Export reducer untuk didaftarkan di configureStore
export default invoiceSlice.reducer;
