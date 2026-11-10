'use client';

import { useAppSelector } from '@/lib/hooks';
import { ProductCard } from './ProductCard';
import styles from './ProductList.module.css';

export function ProductList() {
  const products = useAppSelector((state) => state.products.products);

  return (
    <div className={styles.productList}>
      <h1 className={styles.title}>Products</h1>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
