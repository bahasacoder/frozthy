import createWebStorage from "redux-persist/lib/storage/createWebStorage"
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import cartReducer from './features/cart/cartSlice';
import productReducer from './features/products/productSlice';
import checkoutReducer from './features/checkout/checkoutSlice';
import customerReducer from "./features/customer/customerSlice";
import addressReducer from "./features/customer/addressSlice";
import invoiceReducer from "./features/invoice/invoiceSlice"
// import customerMultiReducer from './features/customer/customerMultiSlice';

// Fungsi untuk membuat storage kosong (noop) saat berjalan di server (SSR)
const createNoopStorage = () => {
  return {
    getItem(_key: string) {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: string) {
      return Promise.resolve();
    },
  };
};

// Gunakan localStorage hanya jika berada di browser (window tersedia)
const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const rootPersistConfig = {
  key: 'root',
  storage,
}
 
const rootReducer = combineReducers({
  cart: cartReducer,
  // keranjang: keranjangReducer
  products: productReducer,
  checkout: checkoutReducer,
  // customerMulti: customerMultiReducer
  customer: customerReducer,
  address: addressReducer,
  invoice: invoiceReducer,
})
const persistedReducer = persistReducer(rootPersistConfig, rootReducer)
  
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppStore = typeof store;

export default storage;