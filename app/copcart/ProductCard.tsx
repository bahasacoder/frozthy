'use client';

import { Product } from '@/lib/features/productSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { addToCart } from '@/lib/features/cartSlice';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const dispatch = useAppDispatch();
  // const cartItems = useAppSelector((state) => state.cart.items);
  const rawCartItems = useAppSelector((state) => state.cart?.items);
  const cartItems = Array.isArray(rawCartItems) ? rawCartItems : [];
  console.log('Cart Items:', cartItems); // Log the cart items to the console
  const itemInCart = cartItems.find((item) => item.product.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.name} className={styles.image} />
        {!product.inStock && <div className={styles.outOfStock}>Out of Stock</div>}
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.category}>{product.category}</p>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.footer}>
          <div className={styles.price}>${product.price.toFixed(2)}</div>
          {itemInCart && <span className={styles.inCart}>✓ {itemInCart.quantity} in cart</span>}
        </div>
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`${styles.addButton} primary`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
