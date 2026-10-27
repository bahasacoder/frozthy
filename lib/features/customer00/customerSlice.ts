import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 1. Definisikan Interface untuk Data Pelanggan
export interface Customer {
  idCustomer: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  createdAt: string;
}

// 2. Definisikan Interface untuk State Redux
export interface CustomerState {
  customers: Customer[];
  selectedCustomer: Customer | null; // Untuk keperluan detail atau edit data pelanggan
  loading: boolean;
  error: string | null;
}

// 3. Set Initial State
const initialState: CustomerState = {
  customers: [],
  selectedCustomer: null,
  loading: false,
  error: null,
};

// 4. Buat Slice
export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    // Reducer untuk Menambah Pelanggan Baru
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.customers.push(action.payload);
      console.log("add customer", action.payload)
    },
    
    // Reducer untuk Memperbarui Data Pelanggan
    updateCustomer: (state, action: PayloadAction<Customer>) => {
      const index = state.customers.findIndex(c => c.idCustomer === action.payload.idCustomer);
      if (index !== -1) {
        state.customers[index] = action.payload;
      }
      // Ikut perbarui selectedCustomer jika sedang dalam fokus detail
      if (state.selectedCustomer?.idCustomer === action.payload.idCustomer) {
        state.selectedCustomer = action.payload;
      }
    },
    
    // Reducer untuk Menghapus Pelanggan
    removeCustomer: (state, action: PayloadAction<string>) => {
      state.customers = state.customers.filter(c => c.idCustomer !== action.payload);
      if (state.selectedCustomer?.idCustomer === action.payload) {
        state.selectedCustomer = null;
      }
    },
    
    // Reducer untuk Memilih Pelanggan (Detail/Edit View)
    setSelectedCustomer: (state, action: PayloadAction<Customer | null>) => {
      state.selectedCustomer = action.payload;
    },
  },
});

// Export actions untuk dipanggil di komponen menggunakan useDispatch
export const { addCustomer, updateCustomer, removeCustomer, setSelectedCustomer } = customerSlice.actions;

// Export reducer untuk didaftarkan ke store.ts
export default customerSlice.reducer;
