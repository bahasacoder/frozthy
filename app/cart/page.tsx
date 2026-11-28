"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { generateCartCode } from "@/actions/generalFunctions"
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
  // const [generateIdCart] = useState(() => generateCartCode(Date.now()));

  // Kalkulasi ringkasan belanja
  const totalQty = cartItems.reduce((sum, item) => sum + Number(item.quantity || 0), 0);
  const subtotalAsli = cartItems.reduce(
    (sum, item) => sum + Number(item.hargaItem || 0) * Number(item.quantity || 0),
    0
  );
  const totalDiskon = cartItems.reduce(
    (sum, item) => sum + Number(item.hargaDiskon || 0) * Number(item.quantity || 0),
    0
  );

  // Hitung langsung dari harga satuan setelah diskon * quantity (jangan bergantung pada item.hargaList yang statis)
  const grandTotal = cartItems.reduce((sum, item) => {
    const hargaSatuanAkhir =
      Number(item.hargaItem || 0) - Number(item.hargaDiskon || 0);
    return sum + hargaSatuanAkhir * Number(item.quantity || 0);
  }, 0);

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

  const SHIPPING_OPTIONS = [
    { id: "pickup", label: "Ambil di Tempat (Gratis)", cost: 0 },
    { id: "watampone", label: "Kurir Lokal Watampone", cost: 10000 },
    { id: "bone-area", label: "Area Kab. Bone (Sibulue, dll.)", cost: 15000 },
    { id: "ekspedisi", label: "Ekspedisi Luar Kab. Bone", cost: 25000 },
  ] as const;

  const [selectedShippingId, setSelectedShippingId] = useState<string>("pickup");

  const selectedShipping =
    SHIPPING_OPTIONS.find((opt) => opt.id === selectedShippingId) ||
    SHIPPING_OPTIONS[0];

  const ongkir = mounted ? selectedShipping.cost : 0;

  
  // Grand Total sudah termasuk ongkos kirim (dan dikurangi promo jika ada)
  const grandTotalWithShipping = Math.max(
    0,
    grandTotal + ongkir
    //     grandTotal - (typeof promoDiscountAmount === "number" ? promoDiscountAmount : 0) + ongkir

  );


  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;
    

    // Ganti dengan nomor WhatsApp Admin PasarBone (awali dengan 62)
    const adminPhone = "6281268052229";

    // Buat nomor referensi pesanan singkat berdasarkan tanggal & kode acak
    // const orderCode = `FRZ-${new Date().getTime().toString().slice(-6)}`;
    // const orderCode = generateIdCart;
    const orderCode = generateCartCode(Date.now());

    // Format daftar produk yang dibeli
    const itemsList = cartItems
      .map((item, idx) => {
        const unitPrice = item.hargaItem - (item.hargaDiskon || 0);
        const itemSubtotal = unitPrice * item.quantity;
        const discountTag =
          item.nilaiDiskon > 0 ? ` _(Diskon ${item.nilaiDiskon}%)_` : "";

        return [
          `${idx + 1}. *${item.productName}*${discountTag}`,
          `   • Kode: \`${item.idItem}\``,
          `   • Jumlah: ${item.quantity} x Rp ${formatRibuan(unitPrice)} = *Rp ${formatRibuan(itemSubtotal)}*`,
        ].join("\n");
      })
      .join("\n\n");

    // Susun keseluruhan teks pesan WhatsApp
    const messageLines = [
      `🛍️ *PESANAN BARU - PASARBONE*`,
      `No. Order: *#${orderCode}*`,
      `━━━━━━━━━━━━━━━━━━━━`,
      ``,
      `📋 *Rincian Produk:*`,
      itemsList,
      ``,
      `━━━━━━━━━━━━━━━━━━━━`,
      `💰 *Ringkasan Pembayaran:*`,
      `• Total Barang: *${totalQty} item*`,
      `• Subtotal Harga: Rp ${formatRibuan(subtotalAsli)}`,
      totalDiskon > 0
        ? `• Total Hemat Diskon: *- Rp ${formatRibuan(totalDiskon)}*`
        : null,
      selectedShipping
        ? `• Pengiriman (${selectedShipping.label}): *${
            ongkir === 0 ? "Gratis" : `Rp ${formatRibuan(ongkir)}`
          }*`
        : null,
      `• *GRAND TOTAL: Rp ${formatRibuan(grandTotalWithShipping ?? grandTotal)}*`,
      `━━━━━━━━━━━━━━━━━━━━`,
      ``,
      `👤 *Data Pemesan:*`,
      `• Nama: ${customerName.trim() || "-"}`,
      `• Alamat: ${customerAddress.trim() || "-"}`,
      customerNote.trim() ? `• Catatan: _${customerNote.trim()}_` : null,
      ``,
      `Mohon konfirmasi ketersediaan stok dan info pembayaran/rekeningnya. Terima kasih! 🙏`,
    ];

    const finalMessage = messageLines.filter((line) => line !== null).join("\n");
    // Pastikan nomor sudah berawalan 62 (bukan 08 atau +62)
    const formattedPhone = adminPhone.replace(/^0/, "62").replace(/\D/g, "");

    // Tambahkan tanda "/" setelah wa.me dan "$" sebelum {formattedPhone}
    const waUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(finalMessage)}`;

    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  // if (!mounted) { ...
  return (
    <div
      className={`min-h-screen overflow-x-hidden font-sans transition-colors duration-500 pb-20 ${
        isDarkMode ? "bg-[#0b0c10] text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* 1. NAVIGATION BAR */}
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">
        {/* Header Halaman */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <Link
              href="/shop"
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

        {/* Grid Utama: Daftar Produk (Kiri) + Ringkasan Belanja (Kanan) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* =========================================================
              SISI KIRI: LIST ITEM KERANJANG (8 Kolom di Desktop)
            ========================================================= */}
            
        <div className="lg:col-span-8 space-y-3.5 sm:space-y-4">
        {/* Kondisi Keranjang Kosong */}
        {!mounted || cartItems.length === 0 ? (
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
        </div>
        {/* =========================================================
            SISI KANAN: RINGKASAN BELANJA (4 Kolom di Desktop, Sticky)
          ========================================================= */}
        <div className="lg:col-span-4 lg:sticky lg:top-28 w-full">
        {/* Kolom Kanan: Ringkasan Belanja, Grand Total & Checkout WhatsApp */}
            <div
              className={`p-6 rounded-2xl border space-y-5 ${
                clientDarkMode
                  ? "bg-[#12141c] border-gray-800"
                  : "bg-white border-zinc-200/80 shadow-xs"
              }`}
            >
              <h2
                className={`text-lg font-bold border-b pb-3 ${
                  clientDarkMode ? "border-gray-800" : "border-zinc-100"
                }`}
              >
                Ringkasan Belanja
              </h2>

              {/* Rincian Harga & Grand Total */}
              <div className="space-y-2.5 text-sm">
                <div className="flex justify-between">
                  <span className={clientDarkMode ? "text-gray-400" : "text-zinc-500"}>
                    Total Harga ({clientTotalQty} barang)
                  </span>
                  <span className="font-medium">
                    Rp {formatRibuan(mounted ? subtotalAsli : 0)}
                  </span>
                </div>

                {mounted && totalDiskon > 0 && (
                  <div className="flex justify-between text-emerald-500">
                    <span>Total Hemat Diskon</span>
                    <span className="font-medium">
                      - Rp {formatRibuan(totalDiskon)}
                    </span>
                  </div>
                )}

                {/* Pilihan Metode Pengiriman */}
                <div
                  className={`pt-2.5 border-t space-y-1.5 ${
                    clientDarkMode ? "border-gray-800" : "border-zinc-100"
                  }`}
                >
                  <label
                    htmlFor="shipping-method"
                    className={`block text-xs font-medium ${
                      clientDarkMode ? "text-gray-400" : "text-zinc-500"
                    }`}
                  >
                    Metode Pengiriman
                  </label>
                  <select
                    id="shipping-method"
                    value={selectedShippingId}
                    onChange={(e) => setSelectedShippingId(e.target.value)}
                    className={`w-full px-3 py-2 text-xs rounded-xl border outline-none transition-colors cursor-pointer ${
                      clientDarkMode
                        ? "bg-gray-900 border-gray-700 text-gray-100 focus:border-cyan-500"
                        : "bg-zinc-50 border-zinc-200 text-zinc-900 focus:border-blue-500"
                    }`}
                  >
                    {SHIPPING_OPTIONS.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label} —{" "}
                        {option.cost === 0 ? "Gratis" : `Rp ${formatRibuan(option.cost)}`}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Biaya Ongkos Kirim */}
                <div className="flex justify-between">
                  <span className={clientDarkMode ? "text-gray-400" : "text-zinc-500"}>
                    Ongkos Kirim
                  </span>
                  <span className="font-medium">
                    {ongkir === 0 ? (
                      <span className="text-emerald-500 font-semibold">Gratis</span>
                    ) : (
                      `Rp ${formatRibuan(ongkir)}`
                    )}
                  </span>
                </div>

                {/* Grand Total */}
                <div
                  className={`pt-3 border-t flex justify-between items-baseline ${
                    clientDarkMode ? "border-gray-800" : "border-zinc-100"
                  }`}
                >
                  <span className="font-bold text-base">Grand Total</span>
                  <span
                    className={`text-xl font-extrabold ${
                      clientDarkMode ? "text-cyan-400" : "text-blue-600"
                    }`}
                  >
                    Rp {formatRibuan(mounted ? grandTotalWithShipping : 0)}
                  </span>
                </div>
              </div>


              {/* Form Data Pengiriman */}
              <div
                className={`pt-4 border-t space-y-3 ${
                  clientDarkMode ? "border-gray-800" : "border-zinc-100"
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-wider opacity-75">
                  Data Pemesan
                </p>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Nama Lengkap Anda"
                  className={`w-full px-3.5 py-2 text-xs rounded-xl border outline-none transition-colors ${
                    clientDarkMode
                      ? "bg-gray-900 border-gray-700 text-white placeholder-gray-500 focus:border-cyan-500"
                      : "bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:border-blue-500"
                  }`}
                />
                <input
                  type="text"
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  placeholder="Alamat (misal: Tanda Khusus, Jalan, Dusun, dst)"
                  className={`w-full px-3.5 py-2 text-xs rounded-xl border outline-none transition-colors ${
                    clientDarkMode
                      ? "bg-gray-900 border-gray-700 text-white placeholder-gray-500 focus:border-cyan-500"
                      : "bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:border-blue-500"
                  }`}
                />
                <input
                  type="text"
                  value={customerNote}
                  onChange={(e) => setCustomerNote(e.target.value)}
                  placeholder="Catatan pesanan (opsional)"
                  className={`w-full px-3.5 py-2 text-xs rounded-xl border outline-none transition-colors ${
                    clientDarkMode
                      ? "bg-gray-900 border-gray-700 text-white placeholder-gray-500 focus:border-cyan-500"
                      : "bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:border-blue-500"
                  }`}
                />
              </div>

              {/* Tombol Checkout WhatsApp */}
              <button
                type="button"
                onClick={handleWhatsAppCheckout}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl text-sm font-bold bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                Checkout via WhatsApp
              </button>

              <div
                className={`flex items-center justify-center gap-1.5 text-[11px] ${
                  clientDarkMode ? "text-gray-500" : "text-zinc-400"
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Pesanan diteruskan langsung ke admin PasarBone</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
