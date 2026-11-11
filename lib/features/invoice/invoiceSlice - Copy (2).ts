import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  invoices: [] as unknown[],
};

const invoiceSlice = createSlice({
  name: 'invoice',
  initialState,
  reducers: {
    createInvoice: (state, action: { payload: unknown }) => {
      // action.payload akan berisi objek invoicePayload yang dikirim dari komponen
      state.invoices.push(action.payload);
    },
  },
});

export const { createInvoice } = invoiceSlice.actions;
export default invoiceSlice.reducer;
