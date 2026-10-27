import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 1. Definisikan tipe data untuk state alamat primary
export interface PrimaryAddressState {
    id: string;
    idAddressPrimary: string;
    uniqueName: string;
    firstNamePrimary: string;
    lastNamePrimary: string;
    emailPrimary: string;
    phonePrimary: string;
    companyNamePrimary: string;
    addressPrimary: string;
    desaPrimary: string;
    kecamatanPrimary: string;
    kabupatenPrimary: string;
    postCodePrimary: string;
    regionPrimary: string;
}

export interface SecondaryAddressState {
    idAddressPrimary: string;
    idAddressSecondary: string;
    firstNameSecondary: string;
    lastNameSecondary: string;
    emailSecondary: string;
    phoneSecondary: string;
    companyNameSecondary: string;
    addressSecondary: string;
    desaSecondary: string;
    kecamatanSecondary: string;
    kabupatenSecondary: string;
    postCodeSecondary: string;
    regionSecondary: string;
}

// 2. Buat Initial State dengan explicit type
const initialPrimaryAddressState: PrimaryAddressState = {
  id: '',
  idAddressPrimary: '',
  uniqueName: '',
  firstNamePrimary: '',
  lastNamePrimary: '',
  emailPrimary: '',
  phonePrimary: '',
  companyNamePrimary: '',
  addressPrimary: '',
  desaPrimary: '',
  kecamatanPrimary: '',
  kabupatenPrimary: '',
  postCodePrimary: '',
  regionPrimary: '',
};

const initialSecondaryAddressState: SecondaryAddressState = {
  idAddressPrimary: '',
  idAddressSecondary: '', 
 firstNameSecondary: '',
 lastNameSecondary: '',
 emailSecondary: '',
 phoneSecondary: '',
 companyNameSecondary: '',
 addressSecondary: '',
 desaSecondary: '',
 kecamatanSecondary: '',
 kabupatenSecondary: '',
 postCodeSecondary: '',
 regionSecondary: '',
}

// 3. Gabungkan kedua objek tersebut
const combinedInitialState = {
  ...initialPrimaryAddressState,
  ...initialSecondaryAddressState,
};

export const addressSlice = createSlice({
    name: 'address',
    initialState: combinedInitialState,
    reducers: {
        // Reducer untuk menyimpan seluruh data alamat dari formulir
        savePrimaryAddress: (state, action: PayloadAction<PrimaryAddressState>) => {
            return { ...state, ...action.payload };
        },
        saveSecondaryAddress: (state, action: PayloadAction<SecondaryAddressState>) => {
            return { ...state, ...action.payload };
        },
        // Reducer opsional jika ingin menghapus data alamat (reset)
        resetPrimaryAddress: () => combinedInitialState,
        updateSecondaryAddressField: (
            state,
            action: PayloadAction<{ field: keyof SecondaryAddressState; value: string }>
        ) => {
            state[action.payload.field] = action.payload.value;
        },
        resetSecondaryAddress: (state) => {
            Object.assign(state, initialSecondaryAddressState);
        },
        
    },
});

// Export aksi dan reducer
export const { savePrimaryAddress, saveSecondaryAddress, resetPrimaryAddress, updateSecondaryAddressField, resetSecondaryAddress } = addressSlice.actions;
export default addressSlice.reducer;
