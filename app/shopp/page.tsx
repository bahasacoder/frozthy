'use client';

import { Header } from '@/components/Header';
import { Cart } from '@/components/Cart';
import { ProductList } from '@/components/ProductList';
import styles from './page.module.css';

export default function ShoppPage() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <ProductList />
        </div>
        <aside className={styles.sidebar}>
          {/* Cart */} 
        </aside>
      </div>
    </div>
  );
}
