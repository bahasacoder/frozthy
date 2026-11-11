import { createSlice } from '@reduxjs/toolkit';

// State awal disesuaikan dengan variabel data yang ada di komponen UI Anda
const initialState = {
  invoiceNumber: 'INV-2026-001',
  invoiceDate: '27 Oktober 2026',
  client: {
    name: 'John Doe',
    phone: '+62 812-3456-7890',
    email: 'johndoe@example.com',
    address: 'Jl. Jendral Sudirman No. 123, Jakarta',
  },
  items: [
    { sl: 1, description: 'Web Development Services', unitPrice: 5000000, quantity: 1 },
    { sl: 2, description: 'Cloud Hosting (1 Year)', unitPrice: 1500000, quantity: 1 },
  ],
  paymentDetails: {
    bankName: 'Bank Central Asia (BCA)',
    accountName: 'PT. Teknologi Maju Jaya',
    accountNumber: '8001234567',
  },
  qrPaymentPayload: '00020101021226580010ID.CO.QRIS...', // Payload string untuk QRIS
  status: 'Menunggu Pembayaran',
  method: 'Instant Payment',
};

const invoiceSlice = createSlice({
  name: 'invoice',
  initialState,
  reducers: {
    // Aksi untuk memperbarui seluruh data invoice (misal setelah fetch dari API)
    setInvoiceData: (state, action) => {
      return { ...state, ...action.payload };
    },
    // Aksi untuk memperbarui status pembayaran secara spesifik
    updatePaymentStatus: (state, action) => {
      state.status = action.payload;
    },
    // Aksi untuk menambahkan item baru ke dalam tabel
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    // Aksi untuk menghapus item berdasarkan indeks
    removeItem: (state, action) => {
      state.items.splice(action.payload, 1);
    },
    // Aksi untuk memperbarui info client
    updateClientInfo: (state, action) => {
      state.client = { ...state.client, ...action.payload };
    }
  },
});

// Selector pintar untuk menghitung Subtotal, Pajak, dan Grand Total secara otomatis
export const selectInvoiceTotals = (state: { invoice: typeof initialState }) => {
  const subtotal = state.invoice.items.reduce(
    (acc, item) => acc + item.unitPrice * item.quantity, 
    0
  );
  const tax = subtotal * 0.10; // Pajak 10% sesuai UI Anda
  const grandTotal = subtotal + tax;

  return { subtotal, tax, grandTotal };
};

export const { 
  setInvoiceData, 
  updatePaymentStatus, 
  addItem, 
  removeItem, 
  updateClientInfo 
} = invoiceSlice.actions;

export default invoiceSlice.reducer;
