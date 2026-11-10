import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, // Import Redux Persist Action Types
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web


import cartReducer from "@/lib/features/cartSlice";
import productReducer from "@/lib/features/productSlice"; 


const rootPersistConfig = {
  key: 'root',
  storage,
   whitelist: ['cart', 'products'], // Only persist these two slices
  // blacklist: ['cart'], // If we didn't want the cart to persist
  version: 1, // Useful for future migrations
}
const rootReducer = combineReducers({ 
  cart: cartReducer, 
  products: productReducer 
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

export const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});
/*
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppStore = typeof store;
*/