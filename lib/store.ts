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
import storage from 'redux-persist/lib/storage';

import cartReducer from './features/cart/cartSlice';
import productReducer from './features/products/productSlice';
import checkoutReducer from './features/checkout/checkoutSlice';
import customerReducer from "./features/customer/customerSlice";
import addressReducer from "./features/customer/addressSlice";
import invoiceReducer from "./features/invoice/invoiceSlice"
// import customerMultiReducer from './features/customer/customerMultiSlice';

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
