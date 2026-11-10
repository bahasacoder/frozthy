import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 1. Async Thunk untuk mengirim seluruh bundle data customer ke server/API
export const saveCompleteCustomerData = createAsyncThunk<unknown, unknown, { rejectValue: string }>(
  'customerMulti/saveAll',
  async (customerData, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/customers/complete-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(customerData),
      });
      if (!response.ok) throw new Error('Gagal menyimpan data lengkap pelanggan');
      return await response.json();
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : String(error));
    }
  }
);

// 2. Initial State yang membagi Profil & Alamat menjadi Main dan Secondary
const initialState = {
  // Profil Utama Akun
  profileMain: {
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
  },
  // Profil Sekunder (Misal: Kontak Darurat / Nama Penerima Alternatif)
  profileSecondary: {
    contact_name: '',
    relationship: '',
    phone_number: '',
  },
  // Alamat Utama Pengiriman (Default)
  addressMain: {
    address_label: 'Rumah (Utama)',
    recipient_name: '',
    recipient_phone: '',
    street_address: '',
    subdistrict: '',
    city: '',
    province: '',
    postal_code: '',
    is_default: true,
  },
  // Alamat Sekunder (Misal: Alamat Kantor / Gudang)
  addressSecondary: {
    address_label: 'Kantor (Sekunder)',
    recipient_name: '',
    recipient_phone: '',
    street_address: '',
    subdistrict: '',
    city: '',
    province: '',
    postal_code: '',
    is_default: false,
  },
  isLoading: false,
  error: null as string | null,
  isSuccess: false,
};

// 3. Pembuatan Slice
const customerMultiSlice = createSlice({
  name: 'customerMulti',
  initialState,
  reducers: {
    // Handler untuk memperbarui data Profil Utama
    updateProfileMain: (state, action) => {
      state.profileMain = { ...state.profileMain, ...action.payload };
    },
    // Handler untuk memperbarui data Profil Sekunder
    updateProfileSecondary: (state, action) => {
      state.profileSecondary = { ...state.profileSecondary, ...action.payload };
    },
    // Handler untuk memperbarui data Alamat Utama
    updateAddressMain: (state, action) => {
      state.addressMain = { ...state.addressMain, ...action.payload };
    },
    // Handler untuk memperbarui data Alamat Sekunder
    updateAddressSecondary: (state, action) => {
      state.addressSecondary = { ...state.addressSecondary, ...action.payload };
    },
    // Reset status sukses atau error form
    resetFormStatus: (state) => {
      state.error = null;
      state.isSuccess = false;
    },
    // Reset seluruh state ke kondisi kosong
    resetAllCustomerData: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveCompleteCustomerData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.isSuccess = false;
      })
      .addCase(saveCompleteCustomerData.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(saveCompleteCustomerData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? action.error.message ?? null;
      });
  },
});

export const {
  updateProfileMain,
  updateProfileSecondary,
  updateAddressMain,
  updateAddressSecondary,
  resetFormStatus,
  resetAllCustomerData,
} = customerMultiSlice.actions;

export default customerMultiSlice.reducer;
