"use client"
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { resetPrimaryAddress } from '@/lib/features/customer/addressSlice'; 
import { User, Mail, Phone, Building, MapPin, Hash, ArrowLeft } from 'lucide-react';
import SecondaryAddressModal from './SecondaryAddressModal';

export default function AddressViewPage() {
  const dispatch = useDispatch();
  // Mengambil data primaryAddress dari slice Redux
  const address = useAppSelector((state) => state.address);
  const { idAddressPrimary } = useAppSelector((state) => state.address);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!address || !idAddressPrimary) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] p-6 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
        <p className="text-gray-500 font-medium mb-2">Belum ada data alamat utama yang disimpan.</p>
        <p className="text-sm text-gray-400">Silakan isi dan submit formulir alamat terlebih dahulu.</p>
      </div>
    );
  }

  function handleUpdateSecondaryAddress(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const getValue = (name: string) => String(formData.get(name) ?? '');
    const addressPayload = {
      firstNameSecondary: getValue('firstNameSecondary'),
      lastNameSecondary: getValue('lastNameSecondary'),
      emailSecondary: getValue('emailSecondary'),
      phoneSecondary: getValue('phoneSecondary'),
      companyNameSecondary: getValue('companyNameSecondary'),
      addressSecondary: getValue('addressSecondary'),
      desaSecondary: getValue('desaSecondary'),
      kecamatanSecondary: getValue('kecamatanSecondary'),
      kabupatenSecondary: getValue('kabupatenSecondary'),
      postCodeSecondary: getValue('postCodeSecondary'),
      regionSecondary: getValue('regionSecondary'),
    };

    dispatch(updateSecondaryAddressField(addressPayload));
    console.log('updateSecondaryAddressField: ', addressPayload);
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-sm rounded-xl border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between pb-6 mb-6 border-b border-gray-100">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Detail Alamat Utama</h1>
          <p className="text-sm text-gray-500">ID Address: <span className="font-mono text-indigo-600 font-semibold">{address.idAddressPrimary}</span></p>
        </div>
        <button 
          onClick={() => dispatch(resetPrimaryAddress())}
          className="px-4 py-2 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors
          border border-red-800"
        >
          Hapus Data
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Kolom Kiri: Informasi Personal & Kontak */}
        <div className="space-y-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Informasi Pelanggan</h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <User className="w-5 h-5 text-gray-400 mt-0.5" />
              <div>
                <p className="text-xs text-gray-400 font-medium">Nama Lengkap & Nama Unik</p>
                <p className="text-sm font-medium text-gray-900">{address.firstNamePrimary} {address.lastNamePrimary}</p>
                <span className="inline-block mt-1 px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded-md font-mono">@{address.uniqueName}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
              <div>
                <p className="text-xs text-gray-400 font-medium">Email</p>
                <p className="text-sm font-medium text-gray-900">{address.emailPrimary}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
              <div>
                <p className="text-xs text-gray-400 font-medium">Nomor Telepon</p>
                <p className="text-sm font-medium text-gray-900">{address.phonePrimary}</p>
              </div>
            </div>

            {address.companyNamePrimary && (
              <div className="flex items-start gap-3">
                <Building className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-400 font-medium">Perusahaan</p>
                  <p className="text-sm font-medium text-gray-900">{address.companyNamePrimary}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Kolom Kanan: Detail Alamat Fisik */}
        <div className="space-y-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Alamat Pengiriman</h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-indigo-500 mt-0.5" />
              <div className="space-y-2">
                <div>
                  <p className="text-xs text-gray-400 font-medium">Alamat Jalan</p>
                  <p className="text-sm font-medium text-gray-900 leading-relaxed">{address.addressPrimary}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-1">
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Desa/Kelurahan</p>
                    <p className="text-sm font-medium text-gray-900">{address.desaPrimary}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Kecamatan</p>
                    <p className="text-sm font-medium text-gray-900">{address.kecamatanPrimary}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-1">
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Kabupaten/Kota</p>
                    <p className="text-sm font-medium text-gray-900">{address.kabupatenPrimary}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Provinsi/Region</p>
                    <p className="text-sm font-medium text-gray-900">{address.regionPrimary}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2 border-t border-gray-50">
              <Hash className="w-5 h-5 text-gray-400 mt-0.5" />
              <div>
                <p className="text-xs text-gray-400 font-medium">Kode Pos</p>
                <p className="text-sm font-mono font-bold text-gray-900">{address.postCodePrimary}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <div className="p-8">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium shadow"
        >
          ✏️ Edit Alamat Sekunder
        </button>

        {/* Panggil Modal di sini */}
        <SecondaryAddressModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </div>

      {/** Secondary Data Address */}
      <>
            {/* <!-- Container Utama (Responsif Maksimal) --> */}
            <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-white rounded-2xl shadow-sm border border-slate-200">
              {/* <!-- Form Element Wrapper --> --> */}
              <form id="secondaryAddressForm" className="space-y-6" onSubmit={handleUpdateSecondaryAddress}>

              {/* <!-- Bagian Header Seksi --> */}
              <div className="mb-6 pb-3 border-b border-slate-100">
                <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                  <span className="p-1.5 bg-purple-50 text-purple-600 rounded-lg text-sm">🏢</span>
                  Alamat Sekunder (Secondary Address)
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">Silakan lengkapi informasi alamat alternatif, kantor, atau tempat kerja Anda.</p>
              </div>

              {/* <!-- Form Layout --> */}
              <div className="space-y-5">
                
                {/* <!-- BARIS 1: Metadata Alamat & Perusahaan (2 Kolom pada Layar Medium ke atas) --> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="idAddressSecondary" className="block text-xs font-semibold text-slate-600 mb-1">ID Alamat Sekunder</label>
                    <input 
                      type="text" 
                      id="idAddressSecondary" 
                      name="idAddressSecondary" 
                      placeholder={address.idAddressSecondary} 
                      className="w-full border border-slate-300 rounded-xl px-3 py-2 text-sm bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="companyNameSecondary" className="block text-xs font-semibold text-slate-600 mb-1">Nama Perusahaan (Opsional)</label>
                    <input 
                      type="text" 
                      id="companyNameSecondary" 
                      name="companyNameSecondary" 
                      placeholder={address.companyNameSecondary}
                      className="w-full border border-slate-300 rounded-xl px-3 py-2 text-sm bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:outline-none transition"
                    />
                  </div>
                </div>

                {/* <!-- BARIS 2: Nama Penerima (2 Kolom dari Layar Kecil/HP Landscape) --> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstNameSecondary" className="block text-xs font-semibold text-slate-600 mb-1">Nama Depan</label>
                    <input 
                      type="text" 
                      id="firstNameSecondary" 
                      name="firstNameSecondary" 
                      placeholder={address.firstNameSecondary}
                      required
                      className="w-full border border-slate-300 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastNameSecondary" className="block text-xs font-semibold text-slate-600 mb-1">Nama Belakang</label>
                    <input 
                      type="text" 
                      id="lastNameSecondary" 
                      name="lastNameSecondary" 
                      placeholder={address.lastNameSecondary}
                      required
                      className="w-full border border-slate-300 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:outline-none transition"
                    />
                  </div>
                </div>

                {/* <!-- BARIS 3: Kontak (2 Kolom dari Layar Kecil/HP Landscape) --> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="emailSecondary" className="block text-xs font-semibold text-slate-600 mb-1">Alamat Email</label>
                    <input 
                      type="email" 
                      id="emailSecondary" 
                      name="emailSecondary" 
                      placeholder={address.emailSecondary}
                      required
                      className="w-full border border-slate-300 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="phoneSecondary" className="block text-xs font-semibold text-slate-600 mb-1">Nomor Telepon</label>
                    <input 
                      type="tel" 
                      id="phoneSecondary" 
                      name="phoneSecondary" 
                      placeholder={address.phoneSecondary}
                      required
                      className="w-full border border-slate-300 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:outline-none transition"
                    />
                  </div>
                </div>

                {/* <!-- BARIS 4: Alamat Jalan (1 Kolom Penuh) --> */}
                <div>
                  <label htmlFor="addressSecondary" className="block text-xs font-semibold text-slate-600 mb-1">Alamat Lengkap / Nama Jalan</label>
                  <textarea 
                    id="addressSecondary" 
                    name="addressSecondary" 
                    rows={3}
                    placeholder={address.addressSecondary}
                    required
                    className="w-full border border-slate-300 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:outline-none transition resize-none"
                  ></textarea>
                </div>

                {/* <!-- BARIS 5: Detail Wilayah Indonesia (Otomatis 2 kolom di HP, 3 kolom di Desktop) --> */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="desaSecondary" className="block text-xs font-semibold text-slate-600 mb-1">Desa / Kelurahan</label>
                    <input 
                      type="text" 
                      id="desaSecondary" 
                      name="desaSecondary" 
                      placeholder={address.desaSecondary}
                      required
                      className="w-full border border-slate-300 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="kecamatanSecondary" className="block text-xs font-semibold text-slate-600 mb-1">Kecamatan</label>
                    <input 
                      type="text" 
                      id="kecamatanSecondary" 
                      name="kecamatanSecondary" 
                      placeholder={address.kecamatanSecondary}
                      required
                      className="w-full border border-slate-300 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="kabupatenSecondary" className="block text-xs font-semibold text-slate-600 mb-1">Kabupaten / Kota</label>
                    <input 
                      type="text" 
                      id="kabupatenSecondary" 
                      name="kabupatenSecondary" 
                      placeholder={address.kabupatenSecondary}
                      required
                      className="w-full border border-slate-300 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="regionSecondary" className="block text-xs font-semibold text-slate-600 mb-1">Provinsi</label>
                    <input 
                      type="text" 
                      id="regionSecondary" 
                      name="regionSecondary" 
                      placeholder={address.regionSecondary}
                      required
                      className="w-full border border-slate-300 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:outline-none transition"
                    />
                  </div>
                  {/* <!-- col-span-2 pada mobile membuat input Kode Pos memanjang jika jumlah kolom ganjil, lalu kembali normal di desktop --> */}
                  <div className="col-span-2 md:col-span-1">
                    <label htmlFor="postCodeSecondary" className="block text-xs font-semibold text-slate-600 mb-1">Kode Pos</label>
                    <input 
                      type="text" 
                      id="postCodeSecondary" 
                      name="postCodeSecondary" 
                      placeholder={address.postCodeSecondary}
                      required
                      className="w-full border border-slate-300 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:outline-none transition"
                    />
                  </div>
                </div>

              </div>
              <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-4 border-t border-slate-100">
                
                <button 
                  type="submit" 
                  className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 active:from-purple-800 text-white rounded-xl text-sm font-semibold shadow-sm hover:shadow focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-none transition text-center"
                >
                  Update Alamat
                </button>
              </div>
              </form>
            </div>

      </>

      {/* Footer metadata */}
      <div className="mt-8 pt-4 border-t border-gray-100 flex justify-between text-xs text-gray-400 font-mono">
        <span>Log ID: {address.id}</span>
      </div>
    </div>
  );
}
function updateSecondaryAddressField(addressPayload: {
  firstNameSecondary: any; lastNameSecondary: any; emailSecondary: any; phoneSecondary: any; companyNameSecondary: any; addressSecondary: any; desaSecondary: any; // pastikan mapping variabel lokal Anda benar
  kecamatanSecondary: any; kabupatenSecondary: any; postCodeSecondary: any; regionSecondary: any;
}) {
  return {
    type: 'address/updateSecondaryAddressField',
    payload: addressPayload,
  };
}

