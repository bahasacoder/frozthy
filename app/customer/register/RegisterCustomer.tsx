import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { registerCustomer } from '@/lib/features/customer/customerSlice'; // Import action biasa

const RegisterCustomer = () => {
  const dispatch = useAppDispatch();

  // Mengambil data dari Redux store
  const { isRegistered } = useAppSelector((state) => state.customer);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    // OPSI A
    /*
    try {
      // OPSI A: Jika ada API Backend, tembak langsung dari komponen
      const response = await fetch('https://example.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Registrasi gagal, silakan coba lagi.');

      const data = await response.json();
      
      // Kirim data hasil respon API ke Redux Store global
      dispatch(registerCustomer(data)); 
      
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Registrasi gagal, silakan coba lagi.');
    } finally {
      setIsLoading(false);
    }
    */

    // 
    // OPSI B: Jika TANPA API (Hanya simpan data ke state aplikasi lokal)
    dispatch(registerCustomer(formData));
    console.log('registerCustomer', registerCustomer(formData))
    setIsLoading(false);
    //
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {isRegistered && <p className="text-emerald-600">Registrasi berhasil disimpan di Redux!</p>}
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}
      
      <input type="text" name="name" onChange={handleChange} placeholder="Nama" className="border p-2 w-full" />
      <input type="email" name="email" onChange={handleChange} placeholder="Email" className="border p-2 w-full" />
      <input type="password" name="password" onChange={handleChange} placeholder="Password" className="border p-2 w-full" />
      
      <button type="submit" disabled={isLoading} className="bg-blue-600 text-white p-2 w-full rounded">
        {isLoading ? 'Loading...' : 'Daftar'}
      </button>
    </form>
  );
};

export default RegisterCustomer;
