'use client';

import { CartItem as CartItemType } from '@/lib/features/cart/cartSlice';
import styles from './CartItem.module.css';

interface CartItemProps {
  item: CartItemType;
  onRemove: () => void;
  onUpdateQuantity: (quantity: number) => void;
}

export function CartItem({ item, onRemove, onUpdateQuantity }: CartItemProps) {
  const { product, quantity } = item;

  return (
    <div className={styles.item}>
      <img src={product.image} alt={product.name} className={styles.image} />
      <div className={styles.info}>
        <h4 className={styles.name}>{product.name}</h4>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
      </div>
      <div className={styles.quantity}>
        <button
          onClick={() => onUpdateQuantity(quantity - 1)}
          className={styles.quantityBtn}
          aria-label="Decrease quantity"
        >
          −
        </button>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => onUpdateQuantity(parseInt(e.target.value) || 1)}
          className={styles.quantityInput}
        />
        <button
          onClick={() => onUpdateQuantity(quantity + 1)}
          className={styles.quantityBtn}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
      <div className={styles.total}>${(product.price * quantity).toFixed(2)}</div>
      <button onClick={onRemove} className={styles.removeBtn} aria-label="Remove item">
        ×
      </button>
    </div>
  );
}
