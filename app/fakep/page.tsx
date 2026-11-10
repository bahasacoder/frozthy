"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { addToCart } from "@/lib/features/cartSlice";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";

export default function FakeProductsList({product}: any) {  
  const [products, setProducts] = useState([]); // Store fetched products
  const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState<string | null>(null);     // Error state

useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Failed to fetch fake products');
      }
      const data = await response.json();
      console.log('Fetched fake products:', data);
      setProducts(data); // Save data to state
    } catch (error) {
      console.error('Error fetching fake products:', error);
      setError(error instanceof Error ? error.message : 'An unknown error occurred'); // Save error message to state
    } finally {
      setLoading(false);
    }
  }
   fetchProducts();
  }, []); // Runs once on component mount

  // Loading state
  if (loading) return <p>Loading products...</p>;
  // Error state
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
      dispatch(addToCart(product));
      console.log(`Added ${product.title} to cart`)
    };

  return (
    <div className="fake-products">
      <h2>Product List</h2>
        <div className="fake-product-list">
          {products.map((product) => (
            <div className="fake-product" key={product.id}>
              <Image src={product.image} alt={product.title} width={200} height={200} />
              <h3>{product.title}</h3>
              <p>${product.price.toFixed(2)}</p>
              <button
                              onClick={handleAddToCart}
                              className="w-full"
                            >
                              <Plus className="mr-2 h-4 w-4" />
                              Add to Cart
                            </button>
                </div>
            
          ))}
        </div> 
      </div>
  );
}


