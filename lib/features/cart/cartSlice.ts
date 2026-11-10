import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: number;
  name?: string;
  price?: number;
  [key: string]: unknown;
}

export interface CartItem {
  id: string | number;
  item: Product;
  product: Product;
  quantity: number;
  stock: number;
  idPaket?: string | number;
  idList?: string;
  productName?: string;
  productImage?: string;
  hargaItem?: number;
  hargaDiskon?: number;
  nilaiDiskon?: number;
  childValue?: number;
  totalHargaJadi?: number; // (hargaItem-hargaDiskon) * Qty
  totalHargaList?: number; // hargaItem*Qty
}    

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

interface CartTotals {
  totalItems: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const calculateTotals = (items: CartItem[]): CartTotals => {
   const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
   const totalPrice = parseFloat(
     items
      .reduce((sum, item) => sum + (item.hargaItem ?? 0) * item.quantity, 0)
       .toFixed(2)
   );
  return { totalItems, totalPrice };
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state: CartState, action: PayloadAction<Product>) => {
      const newItem = action.payload;
      console.log('Adding item to cart:', newItem);
      if (!state.items) {
        state.items = [];
      }
      const existingItem = state.items.find((item) => item.idPaket === newItem.idPaket);
      if (!existingItem) {
        state.items.push(newItem as unknown as CartItem);
        //      console.log('existingItem', existingItem?.productName);

      }
      else {
         state.items.push( newItem as unknown as CartItem);
      }
     console.log('read addcart', state.items.map((item) => item.idPaket));

      const totals = calculateTotals(state.items);
      // state.totalItems = totals.totalItems;
      // state.totalPrice = totals.totalPrice;
    },
    removeListItemFromCart(state: CartState, action: PayloadAction<string>) {
      console.log('Removing item with idList:', action.payload);
      state.items = state.items.filter((item) => item.idList !== action.payload);
    },

    removeItemFromCart: (state: CartState, action: PayloadAction<string>) => {
      console.log('Removing item with idList:', action.payload);
      state.items = state.items.filter((item) => item.idList !== action.payload);

      // 2. Hitung ulang total harga berdasarkan item yang tersisa
      // state.totalPrice = state.items.reduce(
      //   (total, item) => total + item.price * item.quantity,
      //   0
      // );
      const totals = calculateTotals(state.items);
      state.totalItems = totals.totalItems;
      state.totalPrice = totals.totalPrice;
    },
    onUpdateQuantity: (
      state: CartState,
      action: PayloadAction<{ idList: string; quantity: number }>,
    ) => {
      const item = state.items.find((item) => item.idList === action.payload.idList);
      if (item) {
        if (action.payload.quantity <= 0) {
          state.items = state.items.filter((item) => item.id !== action.payload.idList);
        } else {
          item.quantity = action.payload.quantity;
        }
      }
      const totals = calculateTotals(state.items);
      state.totalItems = totals.totalItems;
      state.totalPrice = totals.totalPrice;
    },    
    decreaseQuantity: (state: CartState, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.idList === action.payload);
      console.log('Decreasing diklik:', action.payload);
      console.log('Decreasing quantity:', item?.quantity);
      // if (item && item.quantity > 1) {
      //   item.quantity -= 1;
      // } else if (item && item.quantity === 1) {
      //   state.items = state.items.filter((item) => item.idList !== action.payload);
      // }
      if (item) {
        if (item.quantity === 1) {
          // Jika kuantitas tersisa 1, hapus item dari keranjang belanja
          state.items = state.items.filter((item) => item.idList !== action.payload);
        } else {
          // Jika kuantitas lebih dari 1, kurangi 1
          item.quantity--;
        }
      }
      const totals = calculateTotals(state.items);
      state.totalItems = totals.totalItems;
      state.totalPrice = totals.totalPrice;
    },
    increaseQuantity: (state: CartState, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.idList === action.payload);
      console.log('Increasing diklik:', action.payload);
       console.log('Increasing quantity:', item?.quantity);
      if (item) {
        item.quantity += 1;
      }
      const totals = calculateTotals(state.items);
      state.totalItems = totals.totalItems;
      state.totalPrice = totals.totalPrice;
    },
    clearCart: (state: CartState) => {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },
  },
});

export const { 
  addItemToCart, removeItemFromCart, 
  removeListItemFromCart, onUpdateQuantity, 
  increaseQuantity, decreaseQuantity,
  clearCart } = cartSlice.actions;
export default cartSlice.reducer;
