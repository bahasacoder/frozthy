import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// 1. Impor langsung file JSON sebagai database lokal Anda
import initialProductsData from '@/lib/data/databases.json';

export interface CheckoutItem {
  idList: string;
  name: string;
  price: number;
  quantity: number;
  inStock?: boolean;
}

export interface ProductState {
  items: CheckoutItem[];
  loading: boolean;
  error: string | null;
}

type JsonProduct = {
  product_id: number;
  name: string;
  price: number;
  stock_quantity?: number;
};

// 2. Map data JSON ke bentuk state yang sesuai
const initialState: ProductState = {
  items: (initialProductsData as JsonProduct[]).map((product) => ({
    idList: String(product.product_id),
    name: product.name,
    price: Number(product.price),
    quantity: Number(product.stock_quantity ?? 0),
    inStock: Number(product.stock_quantity ?? 0) > 0,
  })),
  loading: false,
  error: null,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CheckoutItem>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.idList !== action.payload);
    },


    toggleStockStatus: (state, action: PayloadAction<number>) => {
      const product = state.items.find((p) => p.idList === String(action.payload));
      if (product) {
        product.inStock = !product.inStock;
      }
    },
  },
});

export const { addItem, removeItem, toggleStockStatus  } = productSlice.actions;
export default productSlice.reducer;

