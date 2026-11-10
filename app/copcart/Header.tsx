'use client';

import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/lib/hooks';
import Link from 'next/link';
import styles from './Header.module.css';

interface HeaderProps {
  showCheckoutBtn?: boolean;
}

export function Header({ showCheckoutBtn = true }: HeaderProps) {
  const router = useRouter();
  const totalItems = useAppSelector((state) => state.cart.totalItems);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          🛍️ Shopping Cart
        </Link>
        {showCheckoutBtn && totalItems > 0 && (
          <button
            onClick={() => router.push('/checkout')}
            className={`${styles.checkoutBtn} secondary`}
          >
            Checkout ({totalItems}) - ${totalPrice.toFixed(2)}
          </button>
        )}
      </div>
    </header>
  );
}
