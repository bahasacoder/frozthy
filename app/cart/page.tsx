"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowLeft,
  MessageCircle,
  ShieldCheck,
  Tag,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { useTheme } from "@/context/ThemeContext";
import { formatRibuan } from "@/actions/generalFunctions";
// Sesuaikan nama action reducer dengan isi file cartSlice.ts Anda
import {
  removeListItemFromCart,
  onUpdateQuantity,
  clearCart,
} from "@/lib/features/cart/cartSlice";

interface CartItem {
  id: string;
  idList: string;
  idProduct?: string;
  idItem: string;
  productName: string;
  productImage: string;
  imagesItem: string;
  hargaItem: number;
  hargaDiskon: number;
  nilaiDiskon: number;
  quantity: number;
  totalHargaItem: number;
  hargaList: number;
}

export default function CartPage() {
  const dispatch = useDispatch();
  const { isDarkMode } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Ambil daftar item dari Redux store (sesuaikan key state.cart.items / state.cart.cartItems)
  const cartItems: CartItem[] = useSelector(
    (state: any) => state.cart?.items || state.cart?.cartItems || []
  );

  // Form singkat informasi pembeli untuk checkout WhatsApp
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerNote, setCustomerNote] = useState("");

  // Kalkulasi ringkasan belanja
  const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotalAsli = cartItems.reduce(
    (sum, item) => sum + item.hargaItem * item.quantity,
    0
  );
  const totalDiskon = cartItems.reduce(
    (sum, item) => sum + (item.hargaDiskon || 0) * item.quantity,
    0
  );
  const grandTotal = cartItems.reduce(
    (sum, item) =>
      sum + (item.hargaList ?? (item.hargaItem - (item.hargaDiskon || 0)) * item.quantity),
    0
  );
  
 const clientDarkMode = mounted ? isDarkMode : false;
 const clientTotalQty = mounted ? totalQty : 0;

  // Handler ubah kuantitas
  const handleQuantityChange = (item: CartItem, newQty: number) => {
    if (newQty <= 0) {
      dispatch(removeListItemFromCart(item.idList || item.id));
      return;
    }
    dispatch(
      onUpdateQuantity({
        //id: item.idList || item.id,
        idList: item.idList || item.id,
        quantity: newQty,
      })
    );
  };

  // Handler hapus 1 item
  const handleRemoveItem = (id: string) => {
    dispatch(removeListItemFromCart(id));
  };

  // Handler Checkout ke WhatsApp
  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;

    // Ganti dengan nomor WhatsApp admin PasarBone (format 628...)
    const adminPhone = "6281268052229";

    const itemsText = cartItems
      .map(
        (item, idx) =>
          `${idx + 1}. *${item.productName}*\n   ${item.quantity}x @ Rp ${formatRibuan(
            item.hargaItem - (item.hargaDiskon || 0)
          )} = *Rp ${formatRibuan(item.hargaList)}*`
      )
      .join("\n");

    const message = [
      `Halo *PasarBone*, saya ingin memesan produk berikut:`,
      ``,
      itemsText,
      ``,
      `--------------------------------`,
      `Total Item: *${totalQty} pcs*`,
      totalDiskon > 0 ? `Total Hemat: *Rp ${formatRibuan(totalDiskon)}*` : null,
      `*Total Bayar: Rp ${formatRibuan(grandTotal)}*`,
      `--------------------------------`,
      customerName ? `Nama: ${customerName}` : null,
      customerAddress ? `Alamat Pengiriman: ${customerAddress}` : null,
      customerNote ? `Catatan: ${customerNote}` : null,
      ``,
      `Mohon konfirmasi ketersediaan & ongkos kirimnya. Terima kasih!`,
    ]
      .filter(Boolean)
      .join("\n");

    const waUrl = `https://wa.me{adminPhone}?text=${encodeURIComponent(
      message
    )}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };
  // if (!mounted) { ...
  return (
    <div
      className={`min-h-screen overflow-x-hidden font-sans transition-colors duration-500 pb-20 ${
        isDarkMode ? "bg-[#0b0c10] text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">
        {/* Header Halaman */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <Link
              href="/products"
              className={`inline-flex items-center gap-1.5 text-xs font-medium mb-2 transition-colors ${
                isDarkMode
                  ? "text-cyan-400 hover:text-cyan-300"
                  : "text-blue-600 hover:text-blue-700"
              }`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Lanjut Belanja
            </Link>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight flex items-center gap-3">
              <ShoppingBag
                className={`w-7 h-7 ${
                  clientDarkMode ? "text-cyan-400" : "text-blue-600"
                }`}
              />
              Keranjang Belanja
              {clientTotalQty > 0 && (
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    clientDarkMode
                      ? "bg-cyan-950 text-cyan-400 border border-cyan-800/60"
                      : "bg-blue-50 text-blue-700"
                  }`}
                >
                  {clientTotalQty} Item
                </span>
              )}
            </h1>

          </div>

          {mounted && cartItems.length > 0 && (
            <button
              type="button"
              onClick={() => dispatch(clearCart())}
              className={`self-start sm:self-end inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${
                isDarkMode
                  ? "border-red-900/60 bg-red-950/30 text-red-400 hover:bg-red-950/60"
                  : "border-red-200 bg-red-50 text-red-600 hover:bg-red-100"
              }`}
            >
              <Trash2 className="w-3.5 h-3.5" />
              Kosongkan Keranjang
            </button>
          )}
        </div>

        {/* Kondisi Keranjang Kosong */}
        {cartItems.length === 0 ? (
          <div
            className={`rounded-3xl border p-12 text-center max-w-xl mx-auto my-12 ${
              isDarkMode
                ? "bg-[#12141c] border-gray-800"
                : "bg-white border-zinc-200/80 shadow-xs"
            }`}
          >
            <div
              className={`w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center ${
                isDarkMode
                  ? "bg-gray-800/80 text-cyan-400"
                  : "bg-blue-50 text-blue-600"
              }`}
            >
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold mb-2">
              Keranjang Belanja Anda Kosong
            </h2>
            <p
              className={`text-sm mb-6 leading-relaxed ${
                isDarkMode ? "text-gray-400" : "text-zinc-500"
              }`}
            >
              Belum ada produk lokal pilihan di keranjang Anda. Yuk jelajahi
              aneka produk khas Bone sekarang!
            </p>
            <Link
              href="/products"
              className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                isDarkMode
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold hover:opacity-90"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Lihat Katalog Produk
            </Link>
          </div>
        ) : (
          /* Grid Utama: Daftar Produk (Kiri) + Ringkasan Belanja (Kanan) */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Kolom Kiri: List Item Keranjang */}
            <div className="lg:col-span-8 space-y-4">
              {mounted && cartItems.map((item) => {
                const unitPrice = item.hargaItem - (item.hargaDiskon || 0);
                const itemSubtotal = unitPrice * item.quantity;

                return (
                  <div
                    key={item.idList || item.id}
                    className={`
                      flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 sm:p-5 rounded-2xl 
                      border transition-all ${
                      clientDarkMode 
                        ? "bg-[#12141c] border-gray-800 hover:border-gray-700"
                        : "bg-white border-zinc-200/80 shadow-xs"
                    }`}
                  >
                    {/* Gambar Produk */}
                    <div
                      className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border shrink-0 ${
                        clientDarkMode 
                          ? "bg-gray-900 border-gray-800"
                          : "bg-zinc-50 border-zinc-100"
                      }`}
                    >
                      <img
                        src={
                          item.productImage ||
                          item.imagesItem ||
                          "/images/placeholder.jpg"
                        }
                        alt={item.productName}
                        onError={(e) => {
                          e.currentTarget.src = "/images/placeholder.jpg";
                        }}
                        className="w-full h-full object-contain p-1.5"
                      />
                    </div>

                    {/* Detail Nama & Harga Satuan */}
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold text-base line-clamp-2">
                          {item.productName}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className={`text-sm font-bold ${
                            clientDarkMode  ? "text-cyan-400" : "text-blue-600"
                          }`}
                        >
                          Rp {formatRibuan(unitPrice)}
                        </span>
                        {item.hargaDiskon > 0 && (
                          <>
                            <span
                              className={`text-sm line-through ${
                                clientDarkMode  ? "text-gray-500" : "text-gray-400"
                              }`}
                            >
                              Rp {formatRibuan(item.hargaItem)}
                            </span>
                            <span className="inline-flex items-center gap-0.5 text-[11px] font-semibold px-1.5 py-0.5 rounded bg-rose-500/15 text-rose-500">
                              <Tag className="w-2.5 h-2.5" />-{item.nilaiDiskon}%
                            </span>
                          </>
                        )}
                      </div>
                        <p
                          className={`text-[11px] font-mono ${
                            clientDarkMode ? "text-gray-500" : "text-zinc-400"
                          }`}
                        >
                          Kode: {item.idItem}
                        </p>
                    </div>
                     {/* Penyesuaian Kuantitas (+ / -), Subtotal Item & Hapus Item */}
                <div
                  className={`w-full sm:w-auto flex sm:flex-col items-center sm:items-end justify-between gap-3 pt-3 sm:pt-0 border-t sm:border-t-0 ${
                    clientDarkMode ? "border-gray-800" : "border-zinc-100"
                  }`}
                >
                  <p className="font-bold text-base">
                    Rp {formatRibuan(itemSubtotal)}
                  </p>

                  <div className="flex items-center gap-2">
                    {/* Stepper Kuantitas (+ / -) */}
                    <div
                      className={`inline-flex items-center rounded-lg border ${
                        clientDarkMode
                          ? "border-gray-700 bg-gray-900"
                          : "border-zinc-200 bg-zinc-50"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          handleQuantityChange(item, item.quantity - 1)
                        }
                        aria-label="Kurangi jumlah"
                        className={`p-1.5 transition-colors cursor-pointer ${
                          clientDarkMode
                            ? "text-gray-300 hover:text-white hover:bg-gray-800"
                            : "text-zinc-600 hover:text-black hover:bg-zinc-200/70"
                        }`}
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>

                      <span className="px-3 text-xs font-bold min-w-[32px] text-center">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          handleQuantityChange(item, item.quantity + 1)
                        }
                        aria-label="Tambah jumlah"
                        className={`p-1.5 transition-colors cursor-pointer ${
                          clientDarkMode
                            ? "text-gray-300 hover:text-white hover:bg-gray-800"
                            : "text-zinc-600 hover:text-black hover:bg-zinc-200/70"
                        }`}
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Tombol Hapus Item */}
                    <button
                      type="button"
                      onClick={() => handleRemoveItem(item.idList || item.id)}
                      title="Hapus item"
                      className={`p-2 rounded-lg transition-colors cursor-pointer ${
                        clientDarkMode
                          ? "text-gray-500 hover:text-red-400 hover:bg-red-950/40"
                          : "text-zinc-400 hover:text-red-600 hover:bg-red-50"
                      }`}
                    >
                      Hapus Item
                    </button>
                  </div>
                  </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
