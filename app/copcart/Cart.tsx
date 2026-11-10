'use client';

import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { clearCart, removeFromCart, updateQuantity } from '@/lib/features/cartSlice';
import { CartItem as CartItemComponent } from './CartItem';
import styles from './Cart.module.css';

export function Cart() {
  const dispatch = useAppDispatch();
  const { items, totalItems, totalPrice } = useAppSelector((state) => state.cart);

  const handleClearCart = () => {
    if (confirm('Are you sure you want to clear the cart?')) {
      dispatch(clearCart());
    }
  };

  const handleCheckout = () => {
    if (items.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    alert(`Checkout: $${totalPrice.toFixed(2)} (${totalItems} items)`);
  };

  return (
    <div className={styles.cart}>
      <h2 className={styles.title}>Shopping Cart</h2>

      {items.length === 0 ? (
        <div className={styles.empty}>
          <p>Your cart is empty</p>
          <p className={styles.emptySubtext}>Add products to get started</p>
        </div>
      ) : (
        <>
          <div className={styles.items}>
            {items.map((item) => (
              <CartItemComponent
                key={item.product.id}
                item={item}
                onRemove={() => dispatch(removeFromCart(item.product.id))}
                onUpdateQuantity={(quantity) =>
                  dispatch(updateQuantity({ productId: item.product.id, quantity }))
                }
              />
            ))}
          </div>

          <div className={styles.summary}>
            <div className={styles.summaryRow}>
              <span>Subtotal:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Tax:</span>
              <span>${(totalPrice * 0.08).toFixed(2)}</span>
            </div>
            <div className={styles.total}>
              <span>Total:</span>
              <span>${(totalPrice + totalPrice * 0.08).toFixed(2)}</span>
            </div>
          </div>

          <button onClick={handleCheckout} className={`${styles.checkoutBtn} secondary`}>
            Checkout
          </button>
          <button onClick={handleClearCart} className={`${styles.clearBtn} danger`}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}
