// CheckedItemList.tsx
import React from 'react';

// 1. Tentukan interface data untuk kejelasan tipe data
interface CheckedItem {
  idList: string;
  productName: string;
  totalHargaList: number | string;
  hargaItem: number;
}

interface CheckedItemListProps {
  itemsChecked: CheckedItem[];
}

const CheckedItemList: React.FC<CheckedItemListProps> = ({ itemsChecked }) => {
  // Jika tidak ada barang yang dicentang/dipilih
  if (itemsChecked.length === 0) {
    return <p style={{ color: '#888', fontStyle: 'italic' }}>Belum ada barang yang dipilih.</p>;
  }

  return (
    <div className="checked-list-container" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {itemsChecked.map((itex, index) => (
        <div 
          key={index} 
          style={{
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            padding: '12px 16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
          }}
        >
          {/* Sisi Kiri: ID dan Nama Produk */}
          <div>
            <span style={{ fontSize: '12px', color: '#888', display: 'block' }}>
              ID: {itex.idList}
            </span>
            <strong style={{ fontSize: '16px', color: '#333' }}>
              {itex.productName} - {itex.hargaItem}
            </strong>
          </div>

          {/* Sisi Kanan: Harga */}
          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#2ecc71' }}>
              Rp {Number(itex.totalHargaList).toLocaleString('id-ID')}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CheckedItemList;
