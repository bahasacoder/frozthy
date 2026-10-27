import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

type Customer = {
  idCustomer: string;
  name: string;
  email: string;
  createdAt: string;
};
/*
const addCustomer = (customer: Customer) => ({
  type: 'customer/addCustomer',
  payload: customer,
});
*/
//import {addCustomer} from "@/lib/features/customer/customerSlice"
export default function AddCustomerForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("tombol submit di kelik")
    if (!name || !email) return;
    // Buat objek customer baru
    const newCustomer: Customer = {
      idCustomer: crypto.randomUUID(), // Menghasilkan ID unik otomatis di browser modern
      name,
      email,
      createdAt: new Date().toISOString(),
    };

    // Kirim data ke Redux Store
    dispatch(addCustomer(newCustomer));

    // Reset Form
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-xl max-w-md mx-auto space-y-4">
      <div>
        <label className="block text-sm font-medium">Nama Pelanggan</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className="w-full border p-2 rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="w-full border p-2 rounded"
        />
      </div>
      <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
        Simpan Pelanggan
      </button>
    </form>
  );
}
