"use client"
import React, { useState } from 'react';
import RegisterCustomer from './RegisterCustomer';
import CustomerDetail from './CustomerDetail';

const RegisterCustomerView = RegisterCustomer as unknown as React.ComponentType<{
  onRegisterSuccess: () => void;
}>;

export default function CustomerPage() {
  const [currentPage, setCurrentPage] = useState('register');

  return (
    <div>
      {currentPage === 'register' ? (
        // Dilempar ke detail jika proses di form register selesai sukses
        <RegisterCustomerView onRegisterSuccess={() => setCurrentPage('detail')} />
      ) : (
        <CustomerDetail onNavigateToRegister={() => setCurrentPage('register')} />
      )}
    </div>
  );
}
