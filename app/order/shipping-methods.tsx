"use client"
import React, {useState} from 'react';
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function ShippingMethods() {
 const [shipping, setShipping] = useState("");
 const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!shipping) {
      alert("Pilih opsi pengiriman terlebih dahulu!")
      return
    }
    alert(`Kurir terpilih: ${shipping}`)
  }


    return (
        <>
        <div className='mt-4'>
         <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4 border rounded-md">
            <h3 className="font-medium mb-3 text-gray-900">Opsi Pengiriman</h3>
            
            <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer">
                <input
                    type="radio"
                    name="shipping_method"
                    value="regular"
                    checked={shipping === "regular"}
                    onChange={(e) => setShipping(e.target.value)}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-gray-700">Reguler (3-5 Hari)</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                <input
                    type="radio"
                    name="shipping_method"
                    value="express"
                    checked={shipping === "express"}
                    onChange={(e) => setShipping(e.target.value)}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-gray-700">Ekspres (1-2 Hari)</span>
                </label>
            </div>

            <button type="submit" className="mt-4 w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
                Lanjutkan
            </button>
        </form>
        </div>

        <div className='mt-4'>
             <RadioGroup defaultValue="0" className="w-fit">
                <Field orientation="horizontal">
                    <RadioGroupItem value="0" id="desc-r1" className="active:bg-blue-600" />
                    <FieldContent>
                    <FieldLabel htmlFor="desc-r1">Pengambilan Sendiri</FieldLabel>
                    <FieldDescription>
                        Rp. 0
                    </FieldDescription>
                    </FieldContent>
                </Field>
                <Field orientation="horizontal">
                    <RadioGroupItem value="5000" id="desc-r2" className="active:bg-blue-600" />
                    <FieldContent>
                    <FieldLabel htmlFor="desc-r2">Kurir Mandiri</FieldLabel>
                    <FieldDescription>Rp. 5.000</FieldDescription>
                    </FieldContent>
                </Field>
                <Field orientation="horizontal">
                    <RadioGroupItem value="3000" id="desc-r3" className="active:bg-blue-600" />
                    <FieldContent>
                    <FieldLabel htmlFor="desc-r3">Kurir Lokal</FieldLabel>
                    <FieldDescription>
                        Rp. 3.000 / Km
                    </FieldDescription>
                    </FieldContent>
                </Field>
            </RadioGroup>

        </div>
        
        </>
        
    )
}