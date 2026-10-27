"use client"

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface QuantityInputProps {
  id?: string;
  label?: string;
  min?: number;
  max?: number;
  step?: number;
  initialValue?: number;
  onQuantityChange: (value: number) => void;
}

export default function QuantityInput({
  id = "quantity",
  label = "Quantity",
  min = 0,
  max = Infinity,
  step = 1,
  initialValue = 1,
  onQuantityChange,
}: QuantityInputProps) {
  const [value, setValue] = React.useState<number>(initialValue);

  const updateValue = (newValue: number) => {
    const clamped = Math.min(Math.max(newValue, min), max);
    setValue(clamped);
    onQuantityChange?.(clamped);
  };
// Logika kuantitas tombol tambah dan kurang
  const increment = () => updateValue(value + step);
  const decrement = () => updateValue(value - step);

  const handleQuantityValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = Number(e.target.value);
    if (!isNaN(num)) {
      updateValue(num);
    }
    // sendValueToParent(num);
    // onValueChange(num);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      increment();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      decrement();
    }
  };

  return (
    <div className="space-y-3 pt-2">
              <label className="text-xs font-bold text-gray-900 uppercase block">Jumlah Jumlah:</label>
              <div className="flex items-center border border-gray-200 rounded-lg w-32 bg-gray-50 overflow-hidden">
  <button 
    type="button"
    onClick={decrement}
    disabled={value <= min}
    className="w-10 h-10 flex items-center justify-center font-bold text-gray-600 hover:bg-gray-200 disabled:opacity-40 disabled:pointer-events-none transition"
  >
    −
  </button>
  
  {/* FIX: Removed flex-1 from span and placed it directly onto the input for perfect centering */}
  <input 
    type="number" 
    value={value} 
    onChange={handleQuantityValue} 
    className="flex-1 w-full bg-transparent text-center text-sm font-bold text-gray-800 select-none outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
  />

  <button 
    type="button"
    onClick={increment}
    disabled={value >= 55}
    className="w-10 h-10 flex items-center justify-center font-bold text-gray-600 hover:bg-gray-200 disabled:opacity-40 disabled:pointer-events-none transition"
  >
    +
  </button>
</div>

            </div>


  );
}
