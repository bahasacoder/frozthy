import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 1. Definisikan thunk untuk operasi POST ke API
export const postInvoice = createAsyncThunk(
  'invoice/postInvoice',
  async (invoiceData, { rejectWithValue }) => {
    try {
      const response = await fetch('https://kamu.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${token}` // Buka jika butuh token auth
        },
        body: JSON.stringify(invoiceData),
      });

      if (!response.ok) {
        throw new Error('Gagal membuat invoice di server');
      }

      const data = await response.json();
      return data; // Ini akan menjadi action.payload jika sukses
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : String(error));
    }
  }
);

const initialState = {
  invoices: [] as unknown[],
  loading: false,
  error: null as string | null,
};

const invoiceSlice = createSlice({
  name: 'invoice',
  initialState,
  reducers: {},
  // 2. Tangani siklus hidup (lifecycle) dari request async di extraReducers
  extraReducers: (builder) => {
    builder
      .addCase(postInvoice.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postInvoice.fulfilled, (state, action) => {
        state.loading = false;
        state.invoices.push(action.payload); // Simpan respon sukses backend ke state
      })
      .addCase(postInvoice.rejected, (state, action) => {
        state.loading = false;
        state.error = String(action.payload ?? action.error.message ?? 'Gagal membuat invoice'); // Simpan pesan eror jika gagal
      });
  },
});

export default invoiceSlice.reducer;
