import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
}

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [
    {
      id: 1,
      name: 'Laptop',
      description: 'High-performance laptop for professionals',
      price: 1299.99,
      image: 'https://via.placeholder.com/300x300?text=Laptop',
      category: 'Electronics',
      inStock: true,
    },
    {
      id: 2,
      name: 'Wireless Mouse',
      description: 'Ergonomic wireless mouse',
      price: 49.99,
      image: 'https://via.placeholder.com/300x300?text=Mouse',
      category: 'Accessories',
      inStock: true,
    },
    {
      id: 3,
      name: 'USB-C Cable',
      description: 'Fast charging USB-C cable',
      price: 19.99,
      image: 'https://via.placeholder.com/300x300?text=Cable',
      category: 'Accessories',
      inStock: true,
    },
    {
      id: 4,
      name: 'Monitor',
      description: '4K Ultra HD Monitor',
      price: 599.99,
      image: 'https://via.placeholder.com/300x300?text=Monitor',
      category: 'Electronics',
      inStock: false,
    },
    {
      id: 5,
      name: 'Mechanical Keyboard',
      description: 'RGB Mechanical Gaming Keyboard',
      price: 149.99,
      image: 'https://via.placeholder.com/300x300?text=Keyboard',
      category: 'Accessories',
      inStock: true,
    },
    {
      id: 6,
      name: 'Webcam',
      description: '1080p HD Webcam',
      price: 79.99,
      image: 'https://via.placeholder.com/300x300?text=Webcam',
      category: 'Electronics',
      inStock: true,
    },
  ],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    toggleStockStatus: (state, action: PayloadAction<number>) => {
      const product = state.products.find((p) => p.id === action.payload);
      if (product) {
        product.inStock = !product.inStock;
      }
    },
  },
});

export const { setProducts, toggleStockStatus } = productSlice.actions;
export default productSlice.reducer;
