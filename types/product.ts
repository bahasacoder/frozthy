export interface ProductItem {
  idItem: string;
  namaItem: string;
  imageItem: string[];
  size: string;
  unit: string;
  netto: string;
  dimensi: string;
  hargaItem: number;
  hargaDiskon: number;
  nilaiDiskon: number;
  stokItem: number;
}

export interface Product {
  idProduct: string;
  productName: string;
  productSlug: string;
  productImage: string[];
  category: string[];
  teaser: string;
  descriptions: string;
  specification: string;
  satuan?: string;
  productItems: ProductItem[];
}
