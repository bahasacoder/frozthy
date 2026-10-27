import { createSlice } from '@reduxjs/toolkit';

export interface PrimaryAddressState {
    id: string;
    idCustomer: string;
}

const initialState = {
  idCustomer: '',
  currentCustomer: null as Record<string, unknown> | null, // Menampung data profil pelanggan yang aktif
  isRegistered: false,   // Status penanda sukses registrasi
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    // Action untuk menyimpan data pelanggan setelah berhasil register
    registerCustomer: (state, action) => {
      state.currentCustomer = action.payload;
      state.isRegistered = true;
    },
    // Action untuk menghapus data pelanggan (misal saat logout)
    logoutCustomer: (state) => {
      state.currentCustomer = null;
      state.isRegistered = false;
    },
    // Action untuk meriset status registrasi saja
    resetRegisterStatus: (state) => {
      state.isRegistered = false;
    },
    // Tambahkan reducer ini di dalam object reducers pada customerSlice.js Anda
    updateCustomer: (state, action) => {
      state.currentCustomer = {
        ...(state.currentCustomer ?? {}),
        ...action.payload // Menggabungkan data lama dengan data baru yang diubah
      };
    },
  },
});

// Export actions untuk digunakan di komponen
export const { registerCustomer, logoutCustomer, resetRegisterStatus, updateCustomer } = customerSlice.actions;

// Export reducer untuk didaftarkan di store.js
export default customerSlice.reducer;
