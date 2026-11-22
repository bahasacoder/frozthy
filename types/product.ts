export interface ProductItem {
  idItem: string;
  namaItem: string;
  imagesItem: string[];
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
  productImages: string[];
  categories: string[];
  teaser: string;
  descriptions: string;
  specification: string;
  satuan?: string;
  productItems: ProductItem[];
}
