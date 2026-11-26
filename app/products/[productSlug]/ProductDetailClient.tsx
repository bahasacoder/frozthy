"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Product, ProductItem, ProductVariantItem, ProductData  } from "@/types/product";
// import type { Product, ProductItem } from "./page";import { useDispatch } from "react-redux";
import { addItemToCart } from "@/lib/features/cart/cartSlice"; // Sesuaikan path cartSlice Anda
import { Str_Random, formatRibuan} from "@/actions/generalFunctions";
import { ShoppingBag, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useTheme } from "@/context/ThemeContext"
import { useDispatch } from "react-redux";


interface ProductDetailClientProps {
  product: Product;
}

// function formatRibuan(amount: number): string {
//   return Math.round(amount || 0)
//     .toString()
//     .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
// }

export default function ProductDetailClient({
  product,
}: ProductDetailClientProps) {
  const dispatch = useDispatch();

  const [qty, setQty] = useState<number>(1);
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const [addedIdItem, setAddedIdItem] = useState<string | null>(null);
  const { isDarkMode } = useTheme();
  // Ambil varian pertama dengan indeks [0]
  const firstItem = product.productItems[0];
  
  const [selectedItem, setSelectedItem] = useState<ProductItem>(firstItem);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [quantity, setQuantity] = useState<number>(
    firstItem?.stokItem > 0 ? 1 : 0
  );

  // Kumpulkan semua gambar (gambar utama produk + gambar dari tiap varian)
  const galleryImages = Array.from(
    new Set([
      ...(product.productImages || []),
      ...product.productItems.flatMap((item) => item.imagesItem || []),
    ])
  );

  const [activeImage, setActiveImage] = useState<string>(
    galleryImages[0] ?? ""
  );
// Kalkulasi harga akhir & subtotal berdasarkan varian terpilih (selectedItem)
const hargaAkhir =
  selectedItem.hargaDiskon > 0 && selectedItem.hargaDiskon < selectedItem.hargaItem
    ? selectedItem.hargaItem - selectedItem.hargaDiskon
    : selectedItem.hargaItem;

  const subtotal = hargaAkhir * quantity;
  const resolveProductImage = (product: ProductData): string => {
    const variantRemoteImg = product.productItems
      .flatMap((item) => item.imagesItem)
      .find((img) => img.startsWith("http://") || img.startsWith("https://"));
  
    if (variantRemoteImg) return variantRemoteImg;
  
    const mainImg = product.productImages.find((img) => Boolean(img));
    if (!mainImg) return "/images/placeholder.jpg";
    if (mainImg.startsWith("http") || mainImg.startsWith("/")) return mainImg;
    return `/images/${mainImg}`;
  };
  

  const handleSelectVariant = (item: ProductItem) => {
    setSelectedItem(item);
    setQuantity(item.stokItem > 0 ? 1 : 0);
    if (item.imagesItem?.[0]) {
      setActiveImage(item.imagesItem[0]);
    }
  };
  
    const handleAddToCart = (product: any, activeItem: any) => {
      if (!activeItem || activeItem.stokItem <= 0) return;
  
      const newIdList = Str_Random(4);
      const qty = 1;
      const hargaItemNum = Number(activeItem.hargaItem) || 0;
      const discountAmount = Number(activeItem.hargaDiskon) || 0;
      const finalPrice =
        discountAmount > 0 && discountAmount < hargaItemNum
          ? hargaItemNum - discountAmount
          : hargaItemNum;
  
      const cartPayload = {
        id: newIdList,
        idList: newIdList,
        idProduct: product.idProduct,
        idItem: activeItem.idItem,
        productName: `${product.productName} (${activeItem.namaItem})`,
        productImage: activeItem.imagesItem?.[0] ?? resolveProductImage(product),
        hargaItem: hargaItemNum,
        hargaDiskon: discountAmount,
        nilaiDiskon: activeItem.nilaiDiskon ?? 0,
        quantity: qty,
        totalHargaItem: hargaItemNum * qty,
        hargaList: finalPrice * qty,
      } as unknown as Parameters<typeof addItemToCart>[0];
  
      // Dispatch ke Redux Toolkit store
      dispatch(addItemToCart(cartPayload));
  
      // Picu efek visual pada tombol kartu yang diklik
      setAddedIdItem(activeItem.idItem);
      setTimeout(() => {
        setAddedIdItem((prev) => (prev === activeItem.idItem ? null : prev));
      }, 1500);
    };
  
  const onButtonClick = () => {
    if (selectedItem.stokItem <= 0 || isAdded) return;

    // Jalankan fungsi add to cart Anda yang sudah ada
    handleAddToCart(product, selectedItem);

    // Aktifkan efek sukses sementara
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 160; // Scrolls roughly 2 thumbnails at a time
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  if (galleryImages.length <= 1) return null;
  const [isZoomed, setIsZoomed] = useState(false);
  const [origin, setOrigin] = useState("50% 50%");
  const handleMouseMove = (e: any) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    // Calculate cursor position as a percentage (0% to 100%) inside the container
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setOrigin(`${x}% ${y}%`);
  };
   

  return (
    <div
      className={`min-h-screen overflow-x-hidden font-sans transition-colors duration-500 ${
        isDarkMode ? "bg-[#0b0c10] text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Navbar />

      <div
        className={`max-w-6xl mx-auto rounded-2xl shadow-sm overflow-hidden border transition-colors ${
          isDarkMode
            ? "bg-gray-900/90 border-gray-800"
            : "bg-white border-gray-100"
        }`}
      >
     {/* JSX grid di atas ke dalam sini */}
        <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10 transition-colors duration-500 ${
        isDarkMode ? "bg-[#0b0c10]/90 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      {/* Kolom Kiri: Galeri Gambar */}
      <div className="space-y-4">
        <div
         onMouseEnter={() => setIsZoomed(true)}
      onMouseLeave={() => {
        setIsZoomed(false);
        setOrigin("50% 50%");
      }}
      onMouseMove={handleMouseMove}

          className={`relative aspect-square w-full overflow-hidden rounded-xl border transition-colors ${
            isDarkMode
              ? "bg-gray-800/60 border-gray-800"
              : "bg-gray-50 border-gray-100"
          }`}
        >
          {activeImage && (
            <Image
              src={activeImage}
              alt={product.productName || "Product image"}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              style={{
              transformOrigin: origin,
              transform: isZoomed ? "scale(2)" : "scale(1)",
            }}
        className="object-contain p-2 scale-105 transition-transform duration-500 ease-out group-hover:scale-100"
            />
          )}
        </div>

        {/* Thumbnail */}
        <div className="relative flex items-center gap-1.5">
            {/* Previous Button */}
            <button
              type="button"
              onClick={() => handleScroll("left")}
              aria-label="Previous thumbnails"
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors cursor-pointer ${
                isDarkMode
                  ? "border-gray-700 bg-gray-800 text-gray-200 hover:bg-gray-700"
                  : "border-gray-200 bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Scrollable Thumbnail Strip */}
            <div
              ref={scrollContainerRef}
              className="flex gap-2 overflow-x-auto scroll-smooth py-1 no-scrollbar"
            >
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImage(img)}
                  className={`relative h-16 w-16 shrink-0 rounded-md overflow-hidden border transition-colors cursor-pointer ${
                    activeImage === img
                      ? isDarkMode
                        ? "border-cyan-400 bg-gray-800"
                        : "border-blue-600 bg-gray-50"
                      : isDarkMode
                      ? "border-gray-700 bg-gray-800/40 hover:border-gray-600"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.productName} ${idx + 1}`}
                    fill
                    sizes="64px"
                    className="object-contain p-1"
                  />
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={() => handleScroll("right")}
              aria-label="Next thumbnails"
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors cursor-pointer ${
                isDarkMode
                  ? "border-gray-700 bg-gray-800 text-gray-200 hover:bg-gray-700"
                  : "border-gray-200 bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
              
      
      </div>

      {/* Kolom Kanan: Info & Varian Produk */}
      <div className="flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          {/* Kategori */}
          <div className="flex flex-wrap gap-2">
            {product.categories.map((cat) => (
              <span
                key={cat}
                className={`rounded-full px-3 py-1 text-xs font-medium capitalize transition-colors ${
                  isDarkMode
                    ? "bg-cyan-950/80 text-cyan-400 border border-cyan-800/60"
                    : "bg-blue-50 text-blue-700"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          <h1
            className={`text-2xl sm:text-3xl font-bold transition-colors ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {product.productName}
          </h1>

          {/* Harga */}
          <div className="flex items-baseline gap-3">
            <span
              className={`text-2xl font-bold transition-colors ${
                isDarkMode ? "text-cyan-400" : "text-gray-900"
              }`}
            >
              {formatRibuan(hargaAkhir)}
            </span>
            {selectedItem.hargaDiskon > 0 && (
              <>
                <span
                  className={`text-sm line-through ${
                    isDarkMode ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  {formatRibuan(selectedItem.hargaItem)}
                </span>
                <span
                  className={`rounded px-2 py-0.5 text-xs font-semibold ${
                    isDarkMode
                      ? "bg-red-950/80 text-red-400 border border-red-800/50"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  -{selectedItem.nilaiDiskon}%
                </span>
              </>
            )}
          </div>

          <p
            className={`text-sm leading-relaxed transition-colors ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {product.teaser}
          </p>

          {/* Pilihan Varian (productItems) */}
          <div className="space-y-2 pt-2">
            <p
              className={`text-sm font-semibold ${
                isDarkMode ? "text-gray-200" : "text-gray-800"
              }`}
            >
              Pilih Varian ({product.satuan ?? selectedItem.unit}):
            </p>
            <div className="flex flex-wrap gap-2">
              {product.productItems.map((item) => {
                const isSelected = item.idItem === selectedItem.idItem;
                return (
                  <button
                    key={item.idItem}
                    type="button"
                    onClick={() => handleSelectVariant(item)}
                    className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
                      isSelected
                        ? isDarkMode
                          ? "border-cyan-500 bg-cyan-950/60 text-cyan-300"
                          : "border-blue-600 bg-blue-50 text-blue-700"
                        : isDarkMode
                        ? "border-gray-700 bg-gray-800/50 text-gray-300 hover:border-gray-600"
                        : "border-gray-200 text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {item.namaItem}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Info Stok & Dimensi */}
          <div
            className={`text-xs space-y-1.5 pt-3 border-t transition-colors ${
              isDarkMode
                ? "text-gray-400 border-gray-800"
                : "text-gray-500 border-gray-200"
            }`}
          >
            <p>
              Stok tersedia:{" "}
              <span className={isDarkMode ? "text-gray-200" : "text-gray-700"}>
                {selectedItem.stokItem} {selectedItem.unit}
              </span>
            </p>
            <p>Dimensi kemasan: {selectedItem.dimensi}</p>
            <p>Spesifikasi: {product.specification}</p>
          </div>
        </div>

        {/* Tombol Quantity & Add to Cart */}
        <div
          className={`flex items-center gap-4 pt-4 border-t transition-colors ${
            isDarkMode ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <div
            className={`flex items-center border rounded-lg transition-colors ${
              isDarkMode
                ? "border-gray-700 bg-gray-800/60"
                : "border-gray-300 bg-white"
            }`}
          >
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              disabled={quantity <= 1}
              className={`px-3 py-2 disabled:opacity-40 cursor-pointer transition-colors ${
                isDarkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              −
            </button>
            <span
              className={`px-4 py-2 text-sm font-semibold ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {quantity}
            </span>
            <button
              type="button"
              onClick={() =>
                setQuantity((q) => Math.min(selectedItem.stokItem, q + 1))
              }
              disabled={quantity >= selectedItem.stokItem}
              className={`px-3 py-2 disabled:opacity-40 cursor-pointer transition-colors ${
                isDarkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              +
            </button>
          </div>

          <button
            type="button"
            onClick={onButtonClick}
            disabled={selectedItem.stokItem <= 0}
            className={`flex-1 inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300 cursor-pointer active:scale-[0.96] disabled:cursor-not-allowed ${
              isAdded
                ? isDarkMode
                  ? "bg-gradient-to-r from-emerald-400 to-teal-500 text-black font-bold scale-[1.01] shadow-lg shadow-emerald-500/25"
                  : "bg-emerald-600 text-white scale-[1.01] shadow-lg shadow-emerald-600/25"
                : isDarkMode
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold hover:opacity-90 hover:shadow-md hover:shadow-cyan-500/20 disabled:bg-gray-800 disabled:from-gray-800 disabled:to-gray-800 disabled:text-gray-500"
                : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md hover:shadow-blue-600/20 disabled:bg-gray-300"
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4 stroke-[2.5] animate-bounce" />
                <span>Berhasil Ditambahkan!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>
                  {selectedItem.stokItem <= 0
                    ? "Stok Habis"
                    : `Tambah ke Keranjang (${formatRibuan(subtotal)})`}
                </span>
              </>
            )}
          </button>

        </div>
      </div>
    </div>
    {/* ---- */}
    </div>
    </div>

  );
}

