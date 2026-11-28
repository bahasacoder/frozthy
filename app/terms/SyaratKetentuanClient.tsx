"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
// Jika kamu punya ThemeContext / store global, ganti state di bawah dengan hook milikmu, misal:
import { useTheme } from "@/context/ThemeContext";

const WHATSAPP_NUMBER = "6281268052229";

export default function SyaratKetentuanClient() {
  const { isDarkMode } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    // if (savedTheme === "dark") {
    //   setIsDarkMode(true);
    // }
  }, []);

  const clientDarkMode = mounted ? isDarkMode : false;

   const handleChatClick = () => {
    const chatMessage =
      `Halo Admin *Frozthy Frozen Food*! 👋\n` +
      `Saya mau tanya-tanya seputar menu sehat & pengiriman di area Sibulue / Bone.`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      chatMessage
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <main 
      className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-200 mt-18 ${
        clientDarkMode
          ? "bg-[#0b0d13] text-gray-200"
          : "bg-slate-50 text-slate-800"
      }`}
    >
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <header className="text-center space-y-3">
          <span 
            className={`inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase rounded-full ${
              clientDarkMode
                ? "text-emerald-400 bg-emerald-500/15 border border-emerald-500/30"
                : "text-emerald-700 bg-emerald-100"
            }`}
          >
            Kebijakan Layanan
          </span>
          <h1 
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              clientDarkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Syarat & Ketentuan
          </h1>
          <p 
            className={`max-w-2xl mx-auto text-sm sm:text-base ${
              clientDarkMode ? "text-gray-400" : "text-slate-600"
            }`}
          >
            Selamat datang di{" "}
            <strong className={clientDarkMode ? "text-white" : "text-slate-900"}>
              Frozthy Frozen Food
            </strong>
            . Dengan melakukan pemesanan melalui website, WhatsApp, media sosial,
            maupun mitra toko kami, Anda dianggap telah membaca, memahami, dan
            menyetujui seluruh ketentuan di bawah ini.
          </p>
          <p 
             className={`text-xs ${
              clientDarkMode ? "text-gray-500" : "text-slate-400"
            }`}
          >
            Terakhir diperbarui: November 2026 • Berbasis di Kec. Sibulue, Kab. Bone
          </p>
        </header>

        {/* Konten Utama */}
        <div 
          className={`border rounded-2xl p-6 sm:p-10 space-y-8 text-sm sm:text-base leading-relaxed transition-colors ${
            clientDarkMode
              ? "bg-[#12141c] border-gray-800 text-gray-300"
              : "bg-white border-slate-200/90 shadow-xs text-slate-700"
          }`}
        >
          {/* 1. Ketentuan Umum & Produk */}
          <section className="space-y-2.5">
            <h2 
              className={`text-lg sm:text-xl font-bold ${
                clientDarkMode ? "text-white" : "text-slate-900"
              }`}
            >
              1. Ketentuan Umum & Kualitas Produk
            </h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                Seluruh produk{" "}
                <strong className={clientDarkMode ? "text-gray-100" : "text-slate-900"}>
                  Frozthy Frozen Food
                </strong>{" "}
                diproduksi secara higienis menggunakan bahan segar pilihan tanpa
                tambahan bahan pengawet sintetis berbahaya.
              </li>
              <li>
                Foto produk pada katalog website maupun media sosial merupakan
                ilustrasi penyajian; tampilan aktual dapat sedikit berbeda tanpa
                mengurangi takaran, berat bersih, maupun nilai gizi produk.
              </li>
              <li>
                Masa simpan produk bergantung pada suhu penyimpanan di tempat pembeli
                (detail masa kedaluwarsa tertera pada label masing-masing kemasan).
              </li>
            </ul>
          </section>

          {/* 2. Pemesanan & Pembayaran */}
          <section 
            className={`space-y-2.5 pt-6 border-t ${
              clientDarkMode ? "border-gray-800" : "border-slate-100"
            }`}
          >
            <h2 
              className={`text-lg sm:text-xl font-bold ${
                clientDarkMode ? "text-white" : "text-slate-900"
              }`}
            >
              2. Pemesanan & Pembayaran
            </h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                Pemesanan dianggap sah setelah pembeli mengirimkan format order dan
                menerima konfirmasi ketersediaan stok serta total tagihan dari Admin
                Frozthy melalui WhatsApp resmi (
                <strong className={clientDarkMode ? "text-cyan-400" : "text-slate-900"}>
                  0812-6805-2229
                </strong>
                ).
              </li>
              <li>
                Metode pembayaran yang diterima meliputi{" "}
                <strong className={clientDarkMode ? "text-gray-100" : "text-slate-900"}>
                  Transfer Bank, QRIS, dan Bayar di Tempat (COD)
                </strong>{" "}
                yang berlaku khusus untuk area pengantaran Kecamatan Sibulue.
              </li>
              <li>
                Untuk pesanan dalam jumlah besar (paket <em>meal prep</em> mingguan
                atau acara khusus), pembeli wajib melakukan pembayaran penuh atau
                uang muka (DP) minimal 50% sebelum pesanan diproses.
              </li>
            </ul>
          </section>

          {/* 3. Pengiriman & Risiko Suhu Beku */}
          <section 
            className={`space-y-2.5 pt-6 border-t ${
              clientDarkMode ? "border-gray-800" : "border-slate-100"
            }`}
          >
            <h2 
              className={`text-lg sm:text-xl font-bold ${
                clientDarkMode ? "text-white" : "text-slate-900"
              }`}
            >
              3. Pengiriman & Ketentuan Produk Beku
            </h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong className={clientDarkMode ? "text-gray-100" : "text-slate-900"}>
                  Area Sibulue & Watampone (Kab. Bone):
                </strong>{" "}
                Pengiriman dilakukan menggunakan kurir lokal dengan{" "}
                <em>cooler box</em> atau <em>ice gel</em> untuk menjaga suhu tetap
                dingin selama perjalanan.
              </li>
              <li>
                <strong className={clientDarkMode ? "text-gray-100" : "text-slate-900"}>
                  Area Luar Kabupaten Bone (Makassar & sekitarnya):
                </strong>{" "}
                Pengiriman wajib menggunakan layanan ekspedisi cepat (1 hari sampai /
                travel) serta kemasan pelindung tambahan (
                <em>thermal bag + ice gel</em>).
              </li>
              <li>
                Pembeli wajib mencantumkan alamat lengkap, patokan lokasi, dan nomor
                WhatsApp aktif. Keterlambatan penerimaan paket akibat alamat tidak
                jelas atau penerima sulit dihubungi berada di luar tanggung jawab
                Frozthy.
              </li>
              <li>
                Segera masukkan produk ke dalam{" "}
                <strong className={clientDarkMode ? "text-cyan-400" : "text-slate-900"}>
                  freezer (-18°C)
                </strong>{" "}
                begitu paket tiba. Kerusakan kualitas akibat produk dibiarkan terlalu
                lama di suhu ruang setelah diterima tidak termasuk dalam garansi.
              </li>
            </ul>
          </section>

          {/* 4. Kebijakan Pembatalan & Pengembalian (Garansi) */}
          <section 
            className={`space-y-2.5 pt-6 border-t ${
              clientDarkMode ? "border-gray-800" : "border-slate-100"
            }`}
          >
            <h2 
              className={`text-lg sm:text-xl font-bold ${
                clientDarkMode ? "text-white" : "text-slate-900"
              }`}
            >
              4. Pembatalan & Garansi Penggantian Produk
            </h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong className={clientDarkMode ? "text-gray-100" : "text-slate-900"}>
                  Pembatalan Pesanan:
                </strong>{" "}
                Pembatalan hanya dapat dilakukan sebelum pesanan diserahkan kepada
                kurir pengantar. Pesanan yang sudah dalam perjalanan tidak dapat
                dibatalkan.
              </li>
              <li>
                <strong className={clientDarkMode ? "text-gray-100" : "text-slate-900"}>
                  Syarat Klaim Garansi:
                </strong>{" "}
                Kami memberikan garansi penggantian produk baru atau pengembalian dana
                apabila produk diterima dalam kondisi kemasan bocor/rusak parah,
                salah kirim menu, atau tidak layak konsumsi.
              </li>
              <li>
                <strong className={clientDarkMode ? "text-gray-100" : "text-slate-900"}>
                  Wajib Video Unboxing:
                </strong>{" "}
                Pengajuan klaim wajib disertai{" "}
                <strong className={clientDarkMode ? "text-emerald-400" : "text-slate-900"}>
                  video unboxing tanpa jeda
                </strong>{" "}
                (memperlihatkan label pesanan dan kondisi produk) maksimal{" "}
                <strong>3 jam</strong> setelah paket dinyatakan tiba oleh kurir.
              </li>
            </ul>
          </section>

          {/* 5. Perubahan Ketentuan */}
          <section 
            className={`space-y-2.5 pt-6 border-t ${
              clientDarkMode ? "border-gray-800" : "border-slate-100"
            }`}
          >
            <h2 
              className={`text-lg sm:text-xl font-bold ${
                clientDarkMode ? "text-white" : "text-slate-900"
              }`}
            >
              5. Perubahan Syarat & Ketentuan
            </h2>
            <p>
              <strong className={clientDarkMode ? "text-gray-100" : "text-slate-900"}>Frozthy Frozen Food</strong> berhak memperbarui atau mengubah
              isi Syarat & Ketentuan ini sewaktu-waktu tanpa pemberitahuan sebelumnya
              demi peningkatan kualitas layanan. Versi terbaru akan selalu ditampilkan
              di halaman ini.
            </p>
          </section>
        </div>

        {/* Footer Bantuan */}
        <div
          className={`border rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 transition-colors ${
            isDarkMode
              ? "bg-emerald-950/30 border-emerald-800/60"
              : "bg-emerald-50 border-emerald-200"
          }`}
        >
          <div className="text-center sm:text-left">
            <h3
              className={`font-bold text-base ${
                isDarkMode ? "text-emerald-300" : "text-emerald-950"
              }`}
            >
              Punya pertanyaan terkait ketentuan di atas?
            </h3>
            <p
              className={`text-sm mt-0.5 ${
                isDarkMode ? "text-emerald-400/80" : "text-emerald-800"
              }`}
            >
              Silakan hubungi Admin kami atau baca panduan lengkap cara pemesanan.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Link
              href="/how-to-order"
              className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl border transition ${
                isDarkMode
                  ? "text-emerald-300 bg-gray-900 border-emerald-800 hover:bg-gray-800"
                  : "text-emerald-700 bg-white border-emerald-200 hover:bg-emerald-100/60"
              }`}
            >
              Cara Pemesanan
            </Link>
            <a
              href="https://wa.me."
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2.5 text-xs sm:text-sm font-semibold text-white rounded-xl transition shadow-xs ${
                isDarkMode
                  ? "bg-emerald-600 hover:bg-emerald-500"
                  : "bg-emerald-600 hover:bg-emerald-700"
              }`}
            >
              Hubungi Admin
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
