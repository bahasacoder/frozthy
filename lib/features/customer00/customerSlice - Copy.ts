import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Customer {
  idCustomer: string;
  nama:string;
  nik: number;
  nkk: number;
  status:string;
  alamat: string;
  handphone: string;
  whatsapp: string;
  tiktok: string;
  instagram: string;
  facebook: string;
} 

interface CustomerState {
  customers: Customer[];
}

const initialState: CustomerState = {
  customers: [],
};

const customerSlice = createSlice({
  name: 'customer-000',
  initialState,
  reducers: {
    addCustomer: (state: CustomerState, action: PayloadAction<Customer>) => {
      const newItem = action.payload;
      state.customers.push(newItem);
    },
    removeCustomer(state: CustomerState, action: PayloadAction<string>) {
      console.log('Removing item with id Customer:', action.payload);
      state.customers = state.customers.filter((item) => item.idCustomer !== action.payload);
    },
    onUpdateDataCustomer: (
      state: CustomerState,
      action: PayloadAction<{ idCustomer: string }>,
    ) => {
      // const item = state.customers.find((item) => item.id === action.payload.idCustomer);
    },
  },
});

export const { addCustomer, removeCustomer, onUpdateDataCustomer } = customerSlice.actions;
export default customerSlice.reducer;