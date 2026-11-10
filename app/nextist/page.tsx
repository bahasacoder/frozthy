'use client';

import { ProductList } from '@/components/ProductList';
import { Cart } from '@/components/Cart';
import { Header } from '@/components/Header';
import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <ProductList />
        </div>
        <aside className={styles.sidebar}>
          <Cart />
        </aside>
      </div>
    </div>
  );
}
