import React from 'react';

// 1. Definisikan Interface untuk Tipe Data
interface CheckoutItem {
  idList: string;
  name: string;
  price: number;
  quantity: number;
}

interface ProductTableProps {
  // Array berisi string JSON seperti pada kasus Anda sebelumnya
  checkedItemsStringify: string[]; 
  handleRemoveItem: (id: string) => void;
}

const CheckoutTable: React.FC<ProductTableProps> = ({ checkedItemsStringify, handleRemoveItem }) => {
  return (
    <div style={{ width: '100%', overflowX: 'auto', padding: '20px', background: '#fff' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        
        {/* HEADER TABEL */}
        <thead>
          <tr style={{ borderBottom: '2px solid #eee', color: '#666', fontSize: '14px' }}>
            <th style={{ padding: '12px 8px' }}>Nama Produk</th>
            <th style={{ padding: '12px 8px', textAlign: 'center' }}>Jumlah</th>
            <th style={{ padding: '12px 8px', textAlign: 'right' }}>Harga Satuan</th>
            <th style={{ padding: '12px 8px', textAlign: 'right' }}>Total Harga</th>
            <th style={{ padding: '12px 8px', textAlign: 'center' }}>Aksi</th>
          </tr>
        </thead>

        {/* BODY TABEL (Menggunakan .map) */}
        <tbody>
          {checkedItemsStringify.map((itmcheck: string, index: number) => {
            // Mengubah string JSON menjadi objek
            const item: CheckoutItem = JSON.parse(itmcheck) as CheckoutItem;
            
            const itemPrice = item.price || 0;
            const itemQty = item.quantity || 1;
            const subTotal = itemPrice * itemQty;

            return (
              <tr 
                key={item.idList} 
                style={{ 
                  borderBottom: '1px solid #eee', 
                  fontSize: '15px',
                  backgroundColor: index % 2 === 0 ? '#fff' : '#f9f9f9' // Efek warna selang-seling (zebra)
                }}
              >
                {/* Kolom 1: Nama Produk */}
                <td style={{ padding: '16px 8px', fontWeight: 500 }}>
                  {item.name || `Item #${item.idList}`}
                </td>
                
                {/* Kolom 2: Jumlah */}
                <td style={{ padding: '16px 8px', textAlign: 'center' }}>
                  {itemQty}
                </td>
                
                {/* Kolom 3: Harga Satuan */}
                <td style={{ padding: '16px 8px', textAlign: 'right', color: '#555' }}>
                  Rp {itemPrice.toLocaleString('id-ID')}
                </td>
                
                {/* Kolom 4: Total Harga */}
                <td style={{ padding: '16px 8px', textAlign: 'right', fontWeight: 'bold', color: '#333' }}>
                  Rp {subTotal.toLocaleString('id-ID')}
                </td>
                
                {/* Kolom 5: Tombol Aksi */}
                <td style={{ padding: '16px 8px', textAlign: 'center' }}>
                  <button 
                    onClick={() => handleRemoveItem(item.idList)}
                    style={{ 
                      background: 'none', 
                      border: 'none', 
                      color: '#dc3545', 
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: 500
                    }}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>

      </table>
    </div>
  );
};

export default CheckoutTable;
