import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { QRCodeSVG } from 'qrcode.react'; // Mengimpor SVG engine untuk kualitas cetak tajam

export default function SpecificInvoicePrinterA4() {
  const invoiceRef = useRef(null);

  const invoiceData = {
    invoiceNumber: "INV-2026-0004",
    invoiceDate: "22/11/2026",
    company: {
      name: "Brand Company",
      slogan: "Slogan Company Here",
      logoText: "BC"
    },
    client: {
      name: "Client Corporation Ltd",
      phone: "0000 00000000",
      email: "your.email@address.com",
      address: "123 Business Street, Suite 500"
    },
    items: [
      { sl: "01", description: "Premium UI/UX Design Kit", unitPrice: 450.00, quantity: 2 },
      { sl: "02", description: "ReactJS & TailwindCSS Development", unitPrice: 800.00, quantity: 1 },
      { sl: "03", description: "Cloud Deployment & Setup", unitPrice: 250.00, quantity: 3 }
    ],
    taxRate: 0.10,
    paymentDetails: {
      bankName: "Bank Central Mandiri",
      accountName: "PT Brand Company Internasional",
      accountNumber: "123-4567-890"
    }
  };

  const subtotal = invoiceData.items.reduce((acc, item) => acc + (item.unitPrice * item.quantity), 0);
  const tax = subtotal * invoiceData.taxRate;
  const grandTotal = subtotal + tax;

  // Fungsi utilitas lokalisasi mata uang Rupiah (IDR)
  const formatRupiah = (number: number): string => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number);
  };
  
  // Membuat string data dinamis atau link gateway pembayaran untuk dimasukkan ke dalam QR Code
  const qrPaymentPayload = JSON.stringify({
    invoiceValue: invoiceData.invoiceNumber,
    amount: grandTotal,
    bank: invoiceData.paymentDetails.bankName,
    account: invoiceData.paymentDetails.accountNumber
  });

   // Mendapatkan tanggal hari ini secara dinamis
  const tanggalHariIni = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  
  const handlePrint = useReactToPrint({
    contentRef: invoiceRef,
    documentTitle: `Invoice-${invoiceData.invoiceNumber}`,
  });

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4 font-sans antialiased text-slate-800">
      
      {/* CSS Injection khusus untuk mengatur ukuran kertas A4 dan margin cetak */}
      <style>{`
        @media print {
          @page { 
            size: A4 portrait; 
            margin: 20mm; 
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}</style>
      
      {/* ACTION BAR */}
      <div className="max-w-4xl mx-auto mb-6 flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-200">
        <span className="text-sm font-medium text-slate-500">Ukuran Kertas Default: A4</span>
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl shadow-md shadow-indigo-100 transition-all duration-200 active:scale-95"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Cetak A4 / Save PDF
        </button>
      </div>

      {/* TARGET CETAK */}
      <div 
        ref={invoiceRef} 
        className="max-w-4xl mx-auto bg-white p-8 sm:p-12 shadow-xl border border-slate-100 rounded-2xl print:shadow-none print:border-none print:p-0"
      >
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 pb-8 border-b border-slate-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-indigo-600 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white font-black tracking-wider text-lg sm:text-xl">
                {invoiceData.company.logoText}
              </span>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 uppercase">
                {invoiceData.company.name}
              </h1>
              <p className="text-xs font-medium tracking-wide text-slate-400 mt-0.5">
                {invoiceData.company.slogan}
              </p>
            </div>
          </div>

          <div className="sm:text-right w-full sm:w-auto">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 uppercase mb-3">
              Invoice
            </h2>
            <div className="flex flex-col sm:items-end text-sm text-slate-500 font-medium space-y-1">
              <p><span className="text-slate-400">No:</span> {invoiceData.invoiceNumber}</p>
              <p><span className="text-slate-400">Tanggal:</span> {invoiceData.invoiceDate}</p>
            </div>
          </div>
        </div>

        {/* Customer Info Box */}
        <div className="my-8 max-w-md bg-slate-50 rounded-2xl p-6 border border-slate-100">
          <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-3">
            Invoice To :
          </h3>
          <div className="space-y-2 text-sm font-medium text-slate-600">
            <p className="text-slate-900 font-bold text-base">{invoiceData.client.name}</p>
            <p>Phone: {invoiceData.client.phone}</p>
            <p className="break-all">Email: {invoiceData.client.email}</p>
            <p>Address: {invoiceData.client.address}</p>
          </div>
        </div>

        {/* Status Logistik */}
        <div className="sm:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100/80 mt-2">
          <div>
            <span className="block text-xs text-slate-400 font-semibold uppercase tracking-wider mb-0.5">Tanggal Nota</span>
            <span className="font-bold text-slate-700">{tanggalHariIni}</span>
          </div>
          <div>
            <span className="block text-xs text-slate-400 font-semibold uppercase tracking-wider mb-0.5">Metode</span>
            <span className="font-bold text-slate-700">Instant Payment</span>
          </div>
          <div className="sm:text-right">
            <span className="block text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Status</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">Menunggu Pembayaran</span>
          </div>
        </div>

        {/* Table Items */}
        <div className="mt-8 overflow-hidden rounded-xl border border-slate-100">
          <div className="grid grid-cols-12 bg-slate-900 text-white font-semibold text-xs tracking-wider uppercase py-4 px-6">
            <div className="col-span-1">SL</div>
            <div className="col-span-5">Item Description</div>
            <div className="col-span-2 text-right">Unit Price</div>
            <div className="col-span-2 text-center">Qty</div>
            <div className="col-span-2 text-right">Total</div>
          </div>

          <div className="divide-y divide-slate-100 bg-white">
            {invoiceData.items.map((item, index) => (
              <div key={index} className="grid grid-cols-12 text-sm py-4 px-6 items-center font-medium">
                <div className="col-span-1 text-slate-400">{item.sl}</div>
                <div className="col-span-5 text-slate-800 font-semibold">{item.description}</div>
                <div className="col-span-2 text-right text-slate-600">{formatRupiah(item.unitPrice)}</div>
                <div className="col-span-2 text-center text-slate-600">{item.quantity}</div>
                <div className="col-span-2 text-right text-slate-900 font-bold">{formatRupiah(item.unitPrice * item.quantity)}</div>
              </div>
            ))}
          </div>
        </div>

          {/* Bottom Panel: Pembayaran (Kiri) & Subtotal (Kanan) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-8 items-start">
          
          {/* SISI KIRI: Metode Pembayaran & QR Code Asli */}
          <div className="md:col-span-7 bg-slate-50/50 rounded-2xl p-5 border border-slate-100 flex flex-row items-center gap-5">
            
            {/* Wadah Render Komponen QR Code Asli */}
            <div className="bg-white border border-slate-200 p-2.5 rounded-xl flex-shrink-0 flex items-center justify-center shadow-sm">
              <QRCodeSVG 
                value={qrPaymentPayload} 
                size={88}
                bgColor={"#ffffff"}
                fgColor={"#0f172a"}
                level={"M"}
              />
            </div>

            {/* Keterangan Rekening Bank */}
            <div className="text-xs space-y-1.5 text-slate-600">
              <h4 className="font-bold text-slate-900 text-sm tracking-wide uppercase">Metode Pembayaran</h4>
              <p><span className="font-medium text-slate-400">Bank:</span> {invoiceData.paymentDetails.bankName}</p>
              <p><span className="font-medium text-slate-400">Nama Akun:</span> {invoiceData.paymentDetails.accountName}</p>
              <p className="text-slate-900 font-bold text-sm tracking-wider"><span className="font-medium text-slate-400 text-xs font-normal">No Rek:</span> {invoiceData.paymentDetails.accountNumber}</p>
              <p className="text-[10px] text-slate-400 italic mt-1">*Pindai kode QR untuk menyelesaikan tagihan instan.</p>
            </div>

          </div>
        </div>
          {/* SISI KANAN: Kotak Perhitungan Subtotal */}
        {/* Total Summary */}
        <div className="flex justify-end mt-6">
          <div className="w-full sm:w-80 bg-slate-50 rounded-2xl p-0 border border-slate-100 space-y-3 text-sm">
            <div className="flex justify-between text-slate-500 font-medium w-[90%] mx-auto">
              <span>Subtotal</span>
              <span className="text-slate-900 font-semibold">{formatRupiah(subtotal)}</span>
            </div>
            <div className="flex justify-between text-slate-500 font-medium w-[90%] mx-auto">
              <span>Pajak (10%)</span>
              <span className="text-slate-900 font-semibold">{formatRupiah(tax)}</span>
            </div>
            <div className="border-t border-slate-200 pt-3 pb-3 px-3 w-full flex justify-between items-baseline bg-slate-900 rounded-b-lg">
              <span className="font-bold text-slate-50">Total Tagihan</span>
              <span className="text-xl font-black text-slate-50">
                 {formatRupiah(grandTotal)}
              </span>
            </div>
          </div>
        </div>

         {/* CATATAN FOOTER: Selalu berada di bagian paling bawah halaman */}
        <div className="mt-16 pt-6 border-t border-dashed border-slate-200 text-center">
          <p className="text-sm font-semibold tracking-wide text-slate-800 uppercase">
            Terima kasih telah menggunakan layanan kami
          </p>
          <p className="text-xs text-slate-400 mt-1">
            Jika Anda memiliki pertanyaan mengenai invoice ini, silakan hubungi kontak di atas.
          </p>
        </div>

      </div>
    </div>
  );
}
