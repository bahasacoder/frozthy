import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { logoutCustomer, updateCustomer } from '@/lib/features/customer/customerSlice';

interface CustomerDetailProps {
  onNavigateToRegister: () => void;
}

type CustomerProfile = {
  id?: string | number;
  name?: string;
  email?: string;
  phone?: string;
};

const CustomerDetail = ({ onNavigateToRegister }: CustomerDetailProps) => {
  const dispatch = useDispatch();

  // Mengambil data dari Redux Store
  const { currentCustomer } = useAppSelector((state) => state.customer);
  const customer = (currentCustomer ?? {
    id: '',
    name: '',
    email: '',
    phone: ''
  }) as Required<CustomerProfile>;

  // State untuk mengontrol mode edit & data form lokal
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    name: '',
    email: '',
    phone: ''
  });

  // Proteksi jika data pelanggan kosong
  if (!currentCustomer) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md text-center bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900">Data Tidak Ditemukan</h3>
          <p className="mt-2 text-sm text-gray-500">Anda belum melakukan registrasi.</p>
          <button onClick={onNavigateToRegister} className="mt-5 w-full bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white rounded-lg shadow-sm hover:bg-emerald-500">
            Pergi ke Halaman Daftar
          </button>
        </div>
      </div>
    );
  }

  // Mengaktifkan Mode Edit & Mengisi Data Awal Form dari Redux
  const handleStartEdit = () => {
    setEditForm({
      name: customer.name || '',
      email: customer.email || '',
      phone: customer.phone || ''
    });
    setIsEditing(true);
  };

  // Menangani Perubahan Input Form
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const field = e.target.name as keyof typeof editForm;

    setEditForm((prevForm) => ({
      ...prevForm,
      [field]: e.target.value
    }));
  };

  // Menyimpan Data Baru ke Redux Store
  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateCustomer(editForm)); // Kirim data baru ke Redux
    setIsEditing(false); // Tutup mode edit
  };

  const handleLogout = () => {
    dispatch(logoutCustomer());
    if (onNavigateToRegister) onNavigateToRegister();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
        
        {/* Form wrapper untuk mempermudah proses submit */}
        <form onSubmit={handleSave}>
          
          {/* HEADER KARTU PROFIL */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-8 text-center text-white relative">
            <div className="mx-auto size-20 rounded-full bg-white/20 border-2 border-white flex items-center justify-center text-3xl font-bold uppercase shadow-sm">
              {isEditing ? editForm.name.charAt(0) || 'C' : customer.name.charAt(0) || 'C'}
            </div>
            
            {isEditing ? (
              <div className="mt-3 max-w-xs mx-auto">
                <input
                  type="text"
                  name="name"
                  required
                  value={editForm.name}
                  onChange={handleInputChange}
                  className="w-full text-center bg-white/10 text-white placeholder-emerald-200 border border-white/30 rounded-lg px-3 py-1.5 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Nama Lengkap"
                />
              </div>
            ) : (
              <>
                <h2 className="mt-3 text-xl font-bold tracking-tight">{customer.name}</h2>
                <p className="text-xs text-emerald-100 mt-1">Pelanggan Produk Tani Organik</p>
              </>
            )}
          </div>

          {/* ISI ISI ISI DETAIL DATA */}
          <div className="px-6 py-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">Informasi Profil</h3>
              {!isEditing && (
                <button
                  type="button"
                  onClick={handleStartEdit}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:text-emerald-700 transition"
                >
                  <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                  </svg>
                  Ubah Data
                </button>
              )}
            </div>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* ID Klien (Read-Only Permanen) */}
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                <span className="block text-xs text-gray-400 font-medium">ID Pelanggan</span>
                <span className="text-sm font-semibold text-gray-500 font-mono select-all">
                  {customer.id || 'N/A'}
                </span>
              </div>

              {/* Baris Email */}
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                <span className="block text-xs text-gray-400 font-medium mb-1">Alamat Email</span>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    required
                    value={editForm.email}
                    onChange={handleInputChange}
                    className="w-full text-sm font-medium bg-white border border-gray-300 rounded px-2 py-1 focus:border-blue-500 focus:outline-none"
                  />
                ) : (
                  <span className="text-sm font-semibold text-gray-800 truncate block">{customer.email}</span>
                )}
              </div>

              {/* Baris Telepon */}
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                <span className="block text-xs text-gray-400 font-medium mb-1">Nomor Telepon / WA</span>
                {isEditing ? (
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={editForm.phone}
                    onChange={handleInputChange}
                    className="w-full text-sm font-medium bg-white border border-gray-300 rounded px-2 py-1 focus:border-blue-500 focus:outline-none"
                  />
                ) : (
                  <span className="text-sm font-semibold text-gray-800">{customer.phone}</span>
                )}
              </div>

              {/* Status Akun */}
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-100 flex flex-col justify-center">
                <span className="block text-xs text-gray-400 font-medium mb-0.5">Status Akun</span>
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 border border-emerald-200">
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                  Aktif
                </span>
              </div>
            </div>
          </div>

          {/* FOOTER TOMBOL AKSI */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex items-center justify-between gap-4">
            {isEditing ? (
              <>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm hover:bg-gray-100 transition duration-200"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 transition duration-200"
                >
                  Simpan Perubahan
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-red-600 shadow-sm hover:bg-red-50 transition duration-200"
                >
                  Keluar Akun
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 transition duration-200"
                >
                  Mulai Berbelanja
                </button>
              </>
            )}
          </div>

        </form>
      </div>
    </div>
  );
};

export default CustomerDetail;
