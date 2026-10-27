import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSecondaryAddressField, resetSecondaryAddress } from '@/lib/features/customer/addressSlice'; 

interface SecondaryAddressState {
  idAddressSecondary: string;
  firstNameSecondary: string;
  lastNameSecondary: string;
  emailSecondary: string;
  phoneSecondary: string;
  companyNameSecondary: string;
  addressSecondary: string;
  desaSecondary: string;
  kecamatanSecondary: string;
  kabupatenSecondary: string;
  postCodeSecondary: string;
  regionSecondary: string;
}

interface SecondaryAddressModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SecondaryAddressModal({ isOpen, onClose }: SecondaryAddressModalProps) {
  const dispatch = useDispatch();
  const addressState = useSelector((state: any) => state.address) as SecondaryAddressState;

  // Mengunci scrollbar halaman utama saat modal terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    dispatch(updateSecondaryAddressField({ 
      field: name as keyof SecondaryAddressState, 
      value 
    }));
  };

  const handleReset = () => {
    if (window.confirm('Apakah Anda yakin ingin mengosongkan form?')) {
      dispatch(resetSecondaryAddress());
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Data Alamat Sekunder disimpan:', addressState);
    onClose(); // Tutup modal setelah submit berhasil
  };

  return (
    // Backdrop / Overlay Hitam Transparan
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      
      {/* Container Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col transform transition-all scale-100">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 px-6 py-4 text-white flex justify-between items-center shrink-0">
          <div>
            <h2 className="text-lg font-bold tracking-wide">🏢 Alamat Sekunder</h2>
            <p className="text-xs text-purple-100">Lengkapi informasi alamat alternatif atau tempat kerja Anda.</p>
          </div>
          <div className="flex items-center gap-2">
            <button 
              type="button" 
              onClick={handleReset}
              className="px-2.5 py-1 bg-white/10 hover:bg-white/20 border border-white/20 text-[11px] font-semibold rounded-md transition"
            >
              Reset
            </button>
            <button 
              type="button"
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition text-lg font-bold"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Modal Body (Scrollable jika layar kecil) */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-5">
          
          {/* Identitas Alamat & Perusahaan */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">ID Alamat Sekunder</label>
              <input type="text" name="idAddressSecondary" value={addressState.idAddressSecondary || ''} onChange={handleChange} placeholder="Contoh: ADDR-SEC-01" className="w-full border border-slate-300 rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Nama Perusahaan (Opsional)</label>
              <input type="text" name="companyNameSecondary" value={addressState.companyNameSecondary || ''} onChange={handleChange} placeholder="Nama PT / Kantor" className="w-full border border-slate-300 rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all" />
            </div>
          </div>

          {/* Informasi Penerima */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b pb-1">Informasi Penerima</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Nama Depan</label>
                <input type="text" name="firstNameSecondary" value={addressState.firstNameSecondary || ''} onChange={handleChange} className="w-full border border-slate-300 rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none required" required />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Nama Belakang</label>
                <input type="text" name="lastNameSecondary" value={addressState.lastNameSecondary || ''} onChange={handleChange} className="w-full border border-slate-300 rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none" required />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Email</label>
                <input type="email" name="emailSecondary" value={addressState.emailSecondary || ''} onChange={handleChange} placeholder="nama@email.com" className="w-full border border-slate-300 rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none" required />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Nomor Telepon</label>
                <input type="tel" name="phoneSecondary" value={addressState.phoneSecondary || ''} onChange={handleChange} placeholder="0812xxxx" className="w-full border border-slate-300 rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none" required />
              </div>
            </div>
          </div>

          {/* Detail Lokasi */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b pb-1">Detail Lokasi</h3>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Alamat Lengkap / Jalan</label>
              <textarea name="addressSecondary" value={addressState.addressSecondary || ''} onChange={handleChange} rows={2} placeholder="Nama jalan, gedung, nomor rumah..." className="w-full border border-slate-300 rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none" required />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Desa / Kelurahan</label>
                <input type="text" name="desaSecondary" value={addressState.desaSecondary || ''} onChange={handleChange} className="w-full border border-slate-300 rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none" required />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Kecamatan</label>
                <input type="text" name="kecamatanSecondary" value={addressState.kecamatanSecondary || ''} onChange={handleChange} className="w-full border border-slate-300 rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none" required />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Kabupaten / Kota</label>
                <input type="text" name="kabupatenSecondary" value={addressState.kabupatenSecondary || ''} onChange={handleChange} className="w-full border border-slate-300 rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none" required />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Provinsi</label>
                <input type="text" name="regionSecondary" value={addressState.regionSecondary || ''} onChange={handleChange} className="w-full border border-slate-300 rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none" required />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Kode Pos</label>
                <input type="text" name="postCodeSecondary" value={addressState.postCodeSecondary || ''} onChange={handleChange} className="w-full border border-slate-300 rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none" required />
              </div>
            </div>
          </div>

          {/* Modal Footer (Sticky di bagian bawah modal) */}
          <div className="flex justify-end gap-2 border-t pt-4 shrink-0 bg-white">
            <button 
              type="button" 
              onClick={onClose}
              className="px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 focus:ring-2 focus:ring-purple-500 transition-all"
            >
              Batal
            </button>
            <button 
              type="submit" 
              onClick={handleSubmit}
              className="px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 focus:ring-2 focus:ring-purple-500 transition-all"
            >
                Update
            </button>
        </div>
        </form>
    </div>
    </div>
)}
