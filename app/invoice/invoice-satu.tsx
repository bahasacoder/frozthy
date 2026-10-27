"use client"
import React from "react";
import { useAppSelector } from '@/lib/hooks';

export default function BadanInvoicePage() {

  return (
      <div className="max-w-3xl mx-auto bg-white shadow-lg p-8 rounded-lg">
            
            {/* <!-- Header -->  */}
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800">INVOICE</h1>
              <div className="text-right">
                <p className="text-sm text-gray-600">Invoice #: 00123</p>
                <p className="text-sm text-gray-600">Date: 20 Oct 2026</p>
              </div>
            </div>

            {/* <!-- Company & Client Info -->  */}
            <div className="flex justify-between mb-8">
              <div>
                <h2 className="text-lg font-semibold text-gray-700">From:</h2>
                <p className="text-gray-600">Your Company Name</p>
                <p className="text-gray-600">Jl. Example No. 12</p>
                <p className="text-gray-600">Kalibong, South Sulawesi</p>
                <p className="text-gray-600">Email: company@example.com</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-700">Bill To:</h2>
                <p className="text-gray-600">Client Name</p>
                <p className="text-gray-600">Jl. Client Address</p>
                <p className="text-gray-600">South Sulawesi</p>
                <p className="text-gray-600">Email: client@example.com</p>
              </div>
            </div>

            {/* <!-- Items Table -->  */}
            <table className="w-full border-collapse mb-8">
              <thead>
                <tr className="bg-gray-200 text-gray-700">
                  <th className="p-3 text-left">Item</th>
                  <th className="p-3 text-right">Qty</th>
                  <th className="p-3 text-right">Price</th>
                  <th className="p-3 text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Website Design</td>
                  <td className="p-3 text-right">1</td>
                  <td className="p-3 text-right">Rp 2,000,000</td>
                  <td className="p-3 text-right">Rp 2,000,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Hosting (1 Year)</td>
                  <td className="p-3 text-right">1</td>
                  <td className="p-3 text-right">Rp 500,000</td>
                  <td className="p-3 text-right">Rp 500,000</td>
                </tr>
              </tbody>
            </table>

            {/* <!-- Totals -->  */}
            <div className="flex justify-end mb-8">
              <div className="w-1/2">
                <div className="flex justify-between py-2">
                  <span className="text-gray-700 font-semibold">Subtotal:</span>
                  <span className="text-gray-700">Rp 2,500,000</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-700 font-semibold">Tax (10%):</span>
                  <span className="text-gray-700">Rp 250,000</span>
                </div>
                <div className="flex justify-between py-2 border-t mt-2 pt-2">
                  <span className="text-gray-900 font-bold">Total:</span>
                  <span className="text-gray-900 font-bold">Rp 2,750,000</span>
                </div>
              </div>
            </div>

            {/*  <!-- Footer --> */}
            <p className="text-center text-gray-500 text-sm">
              Thank you for your business!
            </p>

          </div>
  );
}