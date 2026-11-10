'use client';

import { ProductList } from './ProductList';
import { Cart } from './Cart';
import { Header } from './Header';
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
