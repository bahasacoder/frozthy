import { notFound } from "next/navigation";
import ProductDetailClient from "./ProductDetailClient";

// 1. Definisikan tipe data struktur objek
interface ProductItem {
  idItem: string;
  namaItem: string;
  imageItem: string;
  size: string;
  unit: string;
  netto: string;
  dimensi: string;
  hargaItem: number;
  hargaDiskon: number;
  nilaiDiskon: number;
  stokItem: number;
}

interface Product {
  idProduct: string;
  productName: string;
  productSlug: string;
  productImage: string;
  category: string;
  teaser: string;
  descriptions: string;
  specification: string;
  productItems: ProductItem[];
}

// 2. Database Produk Anda
const allProducts: Product[] = [
  {
    "idProduct": "PROD-d336f8b3-7b58-417f-9cf0-872038daba02",
    "productName": "Telur Ayam Kampung",
    "productSlug": "telur-ayam-kampung",
    "productImage": "telur-ayam-kampung.jpg",
    "category": "daging, meat",
    "teaser": "Dihasilkan langsung dari sistem peternakan berkelanjutan (*free-range*) tanpa kurungan stres. Kaya akan kandungan Omega-3 alami, vitamin esensial, serta memiliki warna kuning telur oranye pekat yang khas. Higienis dan disortir langsung menggunakan tangan demi kualitas masakan terbaik.",
    "descriptions": "Telur berkualitas premium langsung dari peternakan.",
    "specification": "Isi bervariasi, Kemasan aman",
    "productItems": [
      { "idItem": "ITEM-2f6eb901", "namaItem": "1 butir", "imageItem": "running-40.jpg", "size": "1 butir", "unit": "paket", "netto": "1", "dimensi": "5cm x 5cm x 5cm", "hargaItem": 3000, "hargaDiskon": 300, "nilaiDiskon": 10, "stokItem": 15 },
      { "idItem": "ITEM-bf6eb902", "namaItem": "6 butir", "imageItem": "running-40.jpg", "size": "6 butir", "unit": "paket", "netto": "6", "dimensi": "15cm x 15cm x 5cm", "hargaItem": 15000, "hargaDiskon": 1500, "nilaiDiskon": 10, "stokItem": 15 },
      { "idItem": "ITEM-cf6eb903", "namaItem": "12 butir", "imageItem": "running-40.jpg", "size": "12 butir", "unit": "paket", "netto": "12", "dimensi": "20cm x 20cm x 5cm", "hargaItem": 30000, "hargaDiskon": 3000, "nilaiDiskon": 10, "stokItem": 15 },
      { "idItem": "ITEM-df6eb904", "namaItem": "24 butir", "imageItem": "running-40.jpg", "size": "24 butir", "unit": "paket", "netto": "24", "dimensi": "25cm x 25cm x 5cm", "hargaItem": 50000, "hargaDiskon": 5000, "nilaiDiskon": 10, "stokItem": 15 }
    ]
  },
  {
    "idProduct": "PROD-5fd3f354-fa58-4466-b413-a9006c2d5728",
    "productName": "Ayam Kampung Frozen",
    "productSlug": "ayam-kampung-frozen",
    "productImage": "ayam-kampung-frozen.jpg",
    "category": "daging, meat",
    "teaser": "Daging Ayam Kampung Asli yang dipotong segar dari peternakan langsung dan diproses secara cepat kemudian dibekukan sehingga kualitas daging ayam tetap terjaga.",
    "descriptions": "Daging beku segar tanpa bahan pengawet.",
    "specification": "Suhu penyimpanan -18 Derajat Celcius",
    "productItems": [
      { "idItem": "ITEM-fe264eb2", "namaItem": "250 Gram", "imageItem": "running-40.jpg", "size": "250 gr", "unit": "Gram", "netto": "250", "dimensi": "15cm x 15cm x 15cm", "hargaItem": 30000, "hargaDiskon": 0, "nilaiDiskon": 0, "stokItem": 15 },
      { "idItem": "ITEM-beb2df10", "namaItem": "500 Gram", "imageItem": "running-40.jpg", "size": "500 gr", "unit": "Gram", "netto": "500", "dimensi": "15cm x 15cm x 15cm", "hargaItem": 50000, "hargaDiskon": 0, "nilaiDiskon": 0, "stokItem": 15 },
      { "idItem": "ITEM-c24df728", "namaItem": "750 Gram", "imageItem": "running-40.jpg", "size": "750 gr", "unit": "Gram", "netto": "750", "dimensi": "20cm x 20cm x 20cm", "hargaItem": 75000, "hargaDiskon": 15000, "nilaiDiskon": 20, "stokItem": 15 },
      { "idItem": "ITEM-d24df704", "namaItem": "1000 Gram", "imageItem": "running-40.jpg", "size": "1000 gr", "unit": "Gram", "netto": "1000", "dimensi": "20cm x 20cm x 20cm", "hargaItem": 100000, "hargaDiskon": 20000, "nilaiDiskon": 20, "stokItem": 15 }
    ]
  },
  {
    "idProduct": "PROD-13aeebd4-c18d-4817-9fc1-a27e4ffd2da9",
    "productName": "Himel RCBO 1P+N",
    "productSlug": "himel-rcbo-1pn",
    "productImage": "himel-rcbo.jpg",
    "category": "Alat, Listrik",
    "teaser": "Perlindungan optimal untuk instalasi listrik rumah Anda terhadap beban lebih dan kebocoran arus listrik.",
    "descriptions": "Komponen listrik bersertifikasi internasional.",
    "specification": "Tipe: RCBO, Kutub: 1P+N",
    "productItems": [
      { "idItem": "ITEM-7c31100e", "namaItem": "1P+N 6A", "imageItem": "running-40.jpg", "size": "6A", "unit": "item", "netto": "6A", "dimensi": "10cm x 10cm x 10cm", "hargaItem": 150000, "hargaDiskon": 0, "nilaiDiskon": 0, "stokItem": 15 },
      { "idItem": "ITEM-b497421a", "namaItem": "1P+N 10A", "imageItem": "running-40.jpg", "size": "10A", "unit": "item", "netto": "10A", "dimensi": "10cm x 10cm x 10cm", "hargaItem": 160000, "hargaDiskon": 0, "nilaiDiskon": 0, "stokItem": 15 },
      { "idItem": "ITEM-ccf6fb99", "namaItem": "1P+N 32A", "imageItem": "running-40.jpg", "size": "32A", "unit": "item", "netto": "32A", "dimensi": "10cm x 10cm x 10cm", "hargaItem": 170000, "hargaDiskon": 0, "nilaiDiskon": 0, "stokItem": 15 }
    ]
  }
];

// 3. Fungsi SSG untuk membuat route statis saat proses build dijalankan
export async function generateStaticParams() {
  return allProducts.map((product) => ({
    slug: product.productSlug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  
  const product = allProducts.find(
    (p) => p.productSlug === resolvedParams.slug
  );

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
        <ProductDetailClient product={product} />
      </div>
    </div>
  );
}
