export const formatRupiah = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);

export function Str_Random(length: number) {
        let result = '';
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        
        // Loop to generate characters for the specified length
        for (let i = 0; i < length; i++) {
            const randomInd = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomInd);
        }
        return result;
}

// export function formatRibuan(amount: number): string {
//   return new Intl.NumberFormat("id-ID", {
//     minimumFractionDigits: 0,
//     maximumFractionDigits: 0,
//   }).format(amount);
// }

// function formatRibuan(amount: number): string {
//   return Math.round(amount || 0)
//     .toString()
//     .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
// }

export function formatRibuan(amount: number | string): string {
  const numericValue = Math.round(Number(amount) || 0);
  return numericValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export const formatIDR = (amount: number) =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(amount)

  
export interface ProductVariantItem {
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
  fitur: string[];
}

export interface ProductData {
  idProduct: string;
  productName: string;
  productSlug: string;
  productImages: string[];
  categories: string[];
  teaser: string;
  descriptions: string;
  specification: string;
  satuan?: string;
  productItems: ProductVariantItem[];
}
