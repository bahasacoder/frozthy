"use client";
import Link from 'next/link'
import Form from 'next/form'
import { useDispatch } from 'react-redux';
import { addToCart } from '@/lib/features/cartSlice';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  // Fungsi penanganan ketika tombol "Add to Cart" diklik
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert(`${product.name} berhasil ditambahkan ke keranjang!`);
  };

  return (
	<>
	<section>
		<div className="border p-4 rounded-lg shadow-sm">
		  <h3 className="text-lg font-bold">{product.name}</h3>
		  <p className="text-gray-600">Rp {product.price}</p>
		  
		  <button
			onClick={handleAddToCart}
			className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
		  >
			Add to Cart
		  </button>
		</div>
		</section>
	</>
  );
}