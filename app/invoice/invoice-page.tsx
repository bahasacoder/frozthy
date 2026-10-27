import React from 'react';

export default function ElegantInvoice() {
  const invoiceData = {
    invoiceNumber: "#0123456789",
    invoiceDate: "22/11/2026",
    companyName: "Brand Company",
    slogan: "Your Brand Slogan Here",
    client: {
      phone: "0000 00000000",
      email: "your.email@address.com",
      web: "://yourwebsite.com",
      address: "123 Business Road, Suite 100"
    },
    items: [
      { sl: "01", description: "Premium Web Design Service", unitPrice: 1200.00, quantity: 1, total: 1200.00 },
      { sl: "02", description: "TailwindCSS & React Development", unitPrice: 850.00, quantity: 2, total: 1700.00 }
    ],
    subtotal: 2900.00,
    tax: 145.00,
    grandTotal: 3045.00
  };

  return (
    <div className="min-h-screen bg-slate-50/50 py-12 px-4 sm:px-6 lg:px-8 font-sans antialiased text-slate-800">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl shadow-slate-100 border border-slate-100 overflow-hidden">
        
        {/* Top Decorative Color Bar */}
        <div className="h-2 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600" />

        <div className="p-8 sm:p-12">
          
          {/* Header Row: Brand Identity & Invoice Title */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-8 pb-10 border-b border-slate-100">
            
            {/* Brand Logo & Name */}
            <div className="flex items-center gap-4">
              {/* Elegant Modern Logo Asset */}
              <div className="relative w-14 h-14 bg-gradient-to-br from-sky-400 to-blue-600 rotate-45 flex items-center justify-center rounded-xl shadow-md shadow-sky-200">
                <div className="-rotate-45 flex items-end gap-1 text-white pb-0.5">
                  <div className="w-1 h-5 bg-white/80 rounded-full animate-pulse"></div>
                  <div className="w-1 h-7 bg-white rounded-full"></div>
                  <div className="w-1 h-4 bg-white/60 rounded-full"></div>
                </div>
              </div>
              
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-slate-900 uppercase">
                  {invoiceData.companyName}
                </h1>
                <p className="text-xs font-medium tracking-widest text-sky-500 uppercase mt-0.5">
                  {invoiceData.slogan}
                </p>
              </div>
            </div>

            {/* Large Typography Invoice Label */}
            <div className="sm:text-right">
              <h2 className="text-5xl font-black tracking-tight text-slate-900 uppercase sm:mb-2">
                Invoice
              </h2>
              <div className="inline-flex flex-col sm:items-end text-sm space-y-1 text-slate-500 font-medium">
                <p>Invoice No: <span className="text-slate-900 font-semibold">{invoiceData.invoiceNumber}</span></p>
                <p>Date: <span className="text-slate-900 font-semibold">{invoiceData.invoiceDate}</span></p>
              </div>
            </div>

          </div>

          {/* Info Blocks: Customer Destination Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
            <div className="bg-slate-50/60 rounded-2xl p-6 border border-slate-100/80">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Invoice To
              </h3>
              
              <div className="space-y-3.5 text-sm font-medium text-slate-600">
                {/* Phone Link block */}
                <div className="flex items-center gap-3 group transition-colors hover:text-slate-900">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm border border-slate-100 text-sky-500">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span>Phone: {invoiceData.client.phone}</span>
                </div>

                {/* Email Address Link block */}
                <div className="flex items-center gap-3 group transition-colors hover:text-slate-900">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm border border-slate-100 text-sky-500">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span>{invoiceData.client.email}</span>
                </div>

                {/* Web Domain Link block */}
                <div className="flex items-center gap-3 group transition-colors hover:text-slate-900">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm border border-slate-100 text-sky-500">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <span>{invoiceData.client.web}</span>
                </div>

                {/* Physical Location block */}
                <div className="flex items-center gap-3 group transition-colors hover:text-slate-900">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm border border-slate-100 text-sky-500">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span>{invoiceData.client.address}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Line Items Transaction Table */}
          <div className="w-full overflow-hidden rounded-xl border border-slate-100 mt-8">
            <div className="grid grid-cols-12 bg-slate-900 text-white font-semibold text-xs tracking-wider uppercase py-3.5 px-6">
              <div className="col-span-1">SL</div>
              <div className="col-span-5">Item Description</div>
              <div className="col-span-2 text-right">Unit Price</div>
              <div className="col-span-2 text-center">Qty</div>
              <div className="col-span-2 text-right">Total</div>
            </div>

            <div className="divide-y divide-slate-100">
              {invoiceData.items.map((item, index) => (
                <div key={index} className="grid grid-cols-12 text-sm py-4 px-6 items-center hover:bg-slate-50/50 transition-colors">
                  <div className="col-span-1 text-slate-400 font-medium">{item.sl}</div>
                  <div className="col-span-5 text-slate-800 font-semibold">{item.description}</div>
                  <div className="col-span-2 text-right text-slate-600 font-medium">${item.unitPrice.toFixed(2)}</div>
                  <div className="col-span-2 text-center text-slate-600 font-medium">{item.quantity}</div>
                  <div className="col-span-2 text-right text-slate-900 font-bold">${item.total.toFixed(2)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Calculations Summary Summary */}
          <div className="flex justify-end mt-6">
            <div className="w-full sm:w-72 bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-3 text-sm">
              <div className="flex justify-between text-slate-500 font-medium">
                <span>Subtotal</span>
                <span className="text-slate-800">${invoiceData.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-500 font-medium">
                <span>Tax (5%)</span>
                <span className="text-slate-800">${invoiceData.tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-slate-200/80 my-2 pt-2 flex justify-between items-baseline">
                <span className="font-bold text-slate-900">Total Due</span>
                <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  ${invoiceData.grandTotal.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
