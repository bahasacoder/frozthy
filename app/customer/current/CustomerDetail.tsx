import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutCustomer } from '@/lib/features/customer/customerSlice';

const CustomerDetail = ({ onNavigateToRegister }) => {
  const dispatch = useDispatch();
  
  // Mengambil data pelanggan dari slice 'customer' di store Redux
  const { currentCustomer, isRegistered } = useSelector((state) => state.customer);

  // Jalur Proteksi: Jika data pelanggan kosong / belum register
  if (!currentCustomer) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md text-center bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 text-amber-600 mb-4">
            <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Data Tidak Ditemukan</h3>
          <p className="mt-2 text-sm text-gray-500">
            Anda belum melakukan registrasi atau sesi data Anda telah berakhir.
          </p>
          <button
            onClick={onNavigateToRegister}
            className="mt-5 w-full inline-flex justify-center rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 transition duration-200"
          >
            Pergi ke Halaman Daftar
          </button>
        </div>
      </div>
    );
  }

  // Handle Aksi Keluar / Bersihkan Data
  const handleLogout = () => {
    dispatch(logoutCustomer());
    if (onNavigateToRegister) onNavigateToRegister();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        
        {/* Bagian Header Kartu Profil */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-8 text-center text-white relative">
          <div className="mx-auto size-20 rounded-full bg-white/20 border-2 border-white flex items-center justify-center text-3xl font-bold uppercase shadow-sm">
            {currentCustomer.name ? currentCustomer.name.charAt(0) : 'C'}
          </div>
          <h2 className="mt-3 text-xl font-bold tracking-tight">{currentCustomer.name}</h2>
          <p className="text-xs text-emerald-100 mt-1">Pelanggan Produk Tani Organik</p>
          
          {isRegistered && (
            <span className="absolute top-4 right-4 bg-emerald-500/30 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/20">
              Baru Terdaftar
            </span>
          )}
        </div>

        {/* Bagian Isi Detail Akun */}
        <div className="px-6 py-6 space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">Informasi Profil</h3>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Detail ID */}
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
              <span className="block text-xs text-gray-400 font-medium">ID Pelanggan</span>
              <span className="text-sm font-semibold text-gray-800 font-mono select-all">
                {currentCustomer.id || 'N/A'}
              </span>
            </div>

            {/* Detail Email */}
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
              <span className="block text-xs text-gray-400 font-medium">Alamat Email</span>
              <span className="text-sm font-semibold text-gray-800 truncate block">
                {currentCustomer.email}
              </span>
            </div>

            {/* Detail Telepon */}
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
              <span className="block text-xs text-gray-400 font-medium">Nomor Telepon / WA</span>
              <span className="text-sm font-semibold text-gray-800">
                {currentCustomer.phone}
              </span>
            </div>

            {/* Status Akun */}
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-100 flex flex-col justify-center">
              <span className="block text-xs text-gray-400 font-medium mb-0.5">Status Akun</span>
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 border border-emerald-200">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Aktif
              </span>
            </div>
          </div>
        </div>

        {/* Bagian Footer Tombol Aksi */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex items-center justify-between gap-4">
          <button
            onClick={handleLogout}
            className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-red-600 shadow-sm hover:bg-red-50 hover:text-red-700 transition duration-200"
          >
            Keluar Akun
          </button>
          
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 transition duration-200"
          >
            Mulai Berbelanja
          </button>
        </div>

      </div>
    </div>
  );
};

export default CustomerDetail;
