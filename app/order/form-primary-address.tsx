"use client"
import React, { type ChangeEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { registerCustomer } from '@/lib/features/customer/customerSlice'; // Import action biasa
import { savePrimaryAddress } from '@/lib/features/customer/addressSlice'; 
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { unique } from "next/dist/build/utils";

interface RegionOption {
  code: string
  name: string
}

type PrimaryAddressFieldName =
  | "id"
  | "idAddressPrimary"
  | "uniqueName"
  | "firstNamePrimary"
  | "lastNamePrimary"
  | "emailPrimary"
  | "phonePrimary"
  | "companyNamePrimary"
  | "addressPrimary"
  | "desaPrimary"
  | "kecamatanPrimary"
  | "kabupatenPrimary"
  | "postCodePrimary"
  | "regionPrimary"

  interface RegisterCustomerPrimary {
    onRegisterPrimarySuccess: () => void;
    }
export default function FormPrimaryAddress({ onRegisterPrimarySuccess }: RegisterCustomerPrimary) {
    const dispatch = useAppDispatch();
    
      // Mengambil data dari Redux store
      const { isRegistered, idCustomer } = useAppSelector((state) => state.customer);
      const truePrimaryAddress = useAppSelector((state) => state.address);

   //  const [region, setRegion] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [uniqueId, setUniqueId] = useState('');
    const [id, setId] = useState<string>("")
    const [generatedId, setGeneratedId] = useState('');
    const [idAddressPrimary, setIdAddressPrimary] = useState<string>("")
    const [uniqueName, setUniqueName] = useState<string>("")
    const [firstNamePrimary, setFirstNamePrimary] = useState<string>("")
    const [lastNamePrimary, setLastNamePrimary] = useState<string>("")
    const [emailPrimary, setEmailPrimary] = useState<string>("")
    const [phonePrimary, setPhonePrimary] = useState<string>("")
    const [companyNamePrimary, setCompanyNamePrimary] = useState<string>("")
    const [addressPrimary, setAddressPrimary] = useState<string>("")
    const [desaPrimary, setDesaPrimary] = useState<string>("")
    const [kecamatanPrimary, setKecamatanPrimary] = useState<string>("")
    const [kabupatenPrimary, setKabupatenPrimary] = useState<string>("")
    const [postCodePrimary, setPostCodePrimary] = useState<string>("")

    // FUNGSI INTI: Mengubah nama menjadi ID acak kriptografi
    const convertNameToUniqueId = (name: any, length = 12) => {
        if (!name.trim()) return '';

        // 1. Format nama: hapus spasi/karakter khusus dan ubah ke huruf kecil
        const cleanName = name
        .toLowerCase()
        .replace(/[^a-z0-9]/g, ''); // hanya menyisakan huruf dan angka

        // 2. Buat string acak yang aman secara kriptografi
        const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
        const array = new Uint8Array(length);
        crypto.getRandomValues(array);
        
        let randomStr = '';
        for (let i = 0; i < length; i++) {
        randomStr += chars.charAt(array[i] % chars.length);
        }

        // 3. Gabungkan nama yang sudah bersih dengan string acak
        return `${cleanName}-${randomStr}`;
    };

     // Fungsi pembantu untuk mendapatkan format tanggal saat ini (YYYYMMDD-HHMMSS)
    const getFormattedDate = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        return `${year}${month}${day}-${hours}${minutes}${seconds}`;
    };

    function generateDateUUID(): string {
    return window.crypto.randomUUID(); 
    }

    // 1. State untuk mengontrol nilai wilayah yang dipilih
    const [regionPrimary, setRegionPrimary] = useState<string>("")
    // 2. State untuk mengontrol buka/tutup menu dropdown
    const [isOpen, setIsOpen] = useState<boolean>(false)

    // 3. Daftar Contoh Wilayah (Example Regions)
    const regionsList: RegionOption[] = [
        { code: "US-CA", name: "California, USA" },
        { code: "US-NY", name: "New York, USA" },
        { code: "UK-LDN", name: "Greater London, UK" },
        { code: "ID-JK", name: "DKI Jakarta, Indonesia" },
        { code: "AU-NSW", name: "New South Wales, Australia" },
    ]

    // Fungsi untuk menangani pilihan wilayah
    const handleSelect = (code: string): void => {
        setRegionPrimary(code)
        setIsOpen(false)
    }

    // Mencari nama wilayah aktif untuk ditampilkan di tombol
    const selectedRegionName: string | undefined = regionsList.find(
      (regionOption: RegionOption) => regionOption.code === regionPrimary,
    )?.name ?? "Select a state"

    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
        setRegionPrimary(event.currentTarget.value)
    }
    
    function handleChangePrimaryAddress(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        const { name, value } = event.currentTarget
        const fieldName = name as PrimaryAddressFieldName

        if (fieldName === "uniqueName") setUniqueName(value)
        if (fieldName === "firstNamePrimary") setFirstNamePrimary(value)
        if (fieldName === "lastNamePrimary") setLastNamePrimary(value)
        if (fieldName === "emailPrimary") setEmailPrimary(value)
        if (fieldName === "phonePrimary") setPhonePrimary(value)
        if (fieldName === "companyNamePrimary") setCompanyNamePrimary(value)
        if (fieldName === "addressPrimary") setAddressPrimary(value)
        if (fieldName === "desaPrimary") setDesaPrimary(value)
        if (fieldName === "kecamatanPrimary") setKecamatanPrimary(value)
        if (fieldName === "kabupatenPrimary") setKabupatenPrimary(value)
        if (fieldName === "postCodePrimary") setPostCodePrimary(value)
        if (fieldName === "regionPrimary") setRegionPrimary(value)
    }

    function handleSubmitPrimaryAddress(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    
    const newId = generateDateUUID();
    const uniqueId = convertNameToUniqueId(uniqueName);
        //const subNewId = newId.substring(0,8)
         setGeneratedId(uniqueId);

        // 1. Kumpulkan semua state lokal menjadi satu objek payload
         const addressPayload = {
            id: newId,
            idAddressPrimary: uniqueId, 
            uniqueName,
            firstNamePrimary,
            lastNamePrimary,
            emailPrimary,
            phonePrimary,
            companyNamePrimary,
            addressPrimary,
            desaPrimary, // pastikan mapping variabel lokal Anda benar
            kecamatanPrimary,
            kabupatenPrimary,
            postCodePrimary,
            regionPrimary, // pastikan state regionPrimary sudah diperbaiki pengisiannya
        };

        // 2. Simpan data langsung ke store Redux
        dispatch(savePrimaryAddress(addressPayload));
        
        console.log("Data alamat berhasil disimpan ke Redux!", addressPayload);
    }

    return (

                            <div
                                        data-orientation="vertical"
                                        data-index="0"
                                        data-open=""
                                        id="base-ui-_R_6inpfiv5ubr9fiv5uj9bH1_"
                                        aria-labelledby="base-ui-_R_6inpfiv5ubr9fiv5uj9bH2_"
                                        role="region"
                                        style={
                                            {
                                                ["--accordion-panel-height" as any]: "auto",
                                                ["--accordion-panel-width" as any]: "auto",
                                                animationName: "none",
                                            } as React.CSSProperties
                                        }
                                        data-slot="accordion-content"
                                        className="cn-accordion-content overflow-hidden"
                                    >

                                        <div
                                        className="cn-accordion-content-inner [&amp;_a]:hover:text-foreground h-(--accordion-panel-height) data-ending-style:h-0 data-starting-style:h-0 [&amp;_a]:underline [&amp;_a]:underline-offset-3 [&amp;_p:not(:last-child)]:mb-4 px-5 pb-4"
                                        >
                                        <form onSubmit={handleSubmitPrimaryAddress}>
                                        <div className="flex items-center gap-2 m-4 border border-gray-400 rounded-lg p-6
                                        border-2 hover:border-gray-400 hover:shadow-lg hover:shadow-gray-400/50"
                                        ><h3>Masukkan Name Unik</h3> 
                                            <input 
                                                type="text" name="uniqueName" value={uniqueName} maxLength={16} onChange={handleChangePrimaryAddress}
                                                placeholder={!truePrimaryAddress ? 'Nama Unik Anda' : truePrimaryAddress.uniqueName}
                                                className="p-2 border text-gray-600 p-2 focus:ring-blue-500 focus:border-blue-900 focus:bg-blue-50 sm:text-sm border-gray-300 rounded-md focus:outline-none" 
                                            /> 
                                        </div>

                                            <div className="grid grid-cols-1 gap-x-5 gap-y-6 sm:max-md:grid-cols-2 lg:grid-cols-2">
                                                <Card className="border-2 hover:border-gray-400 hover:shadow-lg hover:shadow-gray-400/50">
                                                    <CardHeader>
                                                        <CardTitle>Profil Info</CardTitle>
                                                    </CardHeader>
                                                    <CardContent>
                                                        <div className="grid grid-cols-1 gap-x-5 gap-y-6 sm:max-md:grid-cols-2 lg:grid-cols-2">
                                                        <div className="space-y-3.5">
                                                            <label
                                                            data-slot="label"
                                                            className="cn-label flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed leading-5"
                                                            htmlFor="firstName"
                                                            >
                                                            First Name
                                                            </label>
                                                            <input
                                                            id="firstName"
                                                            type="text"
                                                            name="firstNamePrimary"
                                                            value={firstNamePrimary}
                                                            onChange={handleChangePrimaryAddress}
                                                            data-slot="input"
                                                            placeholder={!truePrimaryAddress ? 'First Name' : truePrimaryAddress.firstNamePrimary}
                                                            className="border text-gray-600 p-2 focus:ring-blue-500 focus:border-blue-900 focus:bg-blue-50 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none"
                                                            />
                                                        </div>
                                                        <div className="space-y-3.5">
                                                            <label
                                                            data-slot="label"
                                                            className="cn-label flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed leading-5"
                                                            htmlFor="lastName"
                                                            >
                                                            Last Name
                                                            </label>
                                                            <input
                                                            id="lastName"
                                                            type="text"
                                                            name="lastNamePrimary"
                                                            value={lastNamePrimary}
                                                            onChange={handleChangePrimaryAddress}
                                                            data-slot="input"
                                                            placeholder={!truePrimaryAddress ? 'Last Name' : truePrimaryAddress.lastNamePrimary}
                                                            className="border text-gray-600 p-2 focus:ring-blue-500 focus:border-blue-900 focus:bg-blue-50 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none"
                                                            />
                                                        </div>
                                                        <div className="space-y-3.5">
                                                            <label
                                                            data-slot="label"
                                                            className="cn-label flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed leading-5"
                                                            htmlFor="email"
                                                            >
                                                            Email Address
                                                            </label>
                                                            <input
                                                            id="email"
                                                            type="email"
                                                            name="emailPrimary"
                                                            value={emailPrimary}
                                                            onChange={handleChangePrimaryAddress}
                                                            data-slot="input"
                                                            placeholder={!truePrimaryAddress ? 'Email Address' : truePrimaryAddress.emailPrimary}
                                                            className="border text-gray-600 p-2 focus:ring-blue-500 focus:border-blue-900 focus:bg-blue-50 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none"
                                                            />
                                                        </div>
                                                        <div className="space-y-3.5">
                                                            <label
                                                            data-slot="label"
                                                            className="cn-label flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed leading-5"
                                                            htmlFor="phone"
                                                            >
                                                            Phone
                                                            </label>
                                                            <input
                                                            id="phone"
                                                            type="tel"
                                                            name="phonePrimary"
                                                            value={phonePrimary}
                                                            onChange={handleChangePrimaryAddress}
                                                            data-slot="input"
                                                            placeholder={!truePrimaryAddress ? 'Phone' : truePrimaryAddress.phonePrimary}
                                                            className="border text-gray-600 p-2 focus:ring-blue-500 focus:border-blue-900 focus:bg-blue-50 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none"
                                                            />
                                                        </div>
                                                        
                                                        <div className="space-y-3.5">
                                                            <label
                                                            data-slot="label"
                                                            className="cn-label flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed leading-5"
                                                            htmlFor="address"
                                                            >
                                                            Company Name (Optional)
                                                            </label>
                                                            <input
                                                            id="company"
                                                            type="text"
                                                            name="companyNamePrimary"
                                                            value={companyNamePrimary}
                                                            onChange={handleChangePrimaryAddress}
                                                            data-slot="input"
                                                            placeholder={!truePrimaryAddress ? 'Company Name' : truePrimaryAddress.companyNamePrimary}
                                                            className="border text-gray-600 p-2 focus:ring-blue-500 focus:border-blue-900 focus:bg-blue-50 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none"
                                                            />
                                                        </div>                                          
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                                <Card className="border-2 hover:border-gray-400 hover:shadow-lg hover:shadow-gray-400/50">
                                                    <CardHeader>
                                                        <CardTitle>Address Info</CardTitle>
                                                    </CardHeader>
                                                    <CardContent>
                                                        <div className="grid grid-cols-1 gap-x-5 gap-y-6 sm:max-md:grid-cols-2 lg:grid-cols-2">
                                                            {/** -- BEGIN -- **/}
                                                            <div className="space-y-3.5 md:col-span-2">
                                                                <label
                                                                data-slot="label"
                                                                className="cn-label flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed leading-5"
                                                                htmlFor="address"
                                                                >
                                                                Mailing Address
                                                                </label>
                                                                <textarea
                                                                id="address"
                                                                rows={4}
                                                                name="addressPrimary"
                                                                value={addressPrimary}
                                                                onChange={handleChangePrimaryAddress}
                                                                data-slot="input"
                                                                placeholder={!truePrimaryAddress ? 'Alamat' : truePrimaryAddress.addressPrimary}
                                                                className="border text-gray-600 p-2 focus:ring-blue-500 focus:border-blue-900 focus:bg-blue-50 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none"
                                                                />
                                                            </div>
                                                            
                                                            <div className="space-y-3.5">
                                                                <label
                                                                data-slot="label"
                                                                className="cn-label flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed leading-5"
                                                                htmlFor="desa"
                                                                >
                                                                Desa / Kelurahan
                                                                </label>
                                                                <input
                                                                id="desa"
                                                                type="text"
                                                                name="desaPrimary"
                                                                value={desaPrimary}
                                                                onChange={handleChangePrimaryAddress}
                                                                data-slot="input"
                                                                placeholder={!truePrimaryAddress ? 'Desa / Kelurahan' : truePrimaryAddress.desaPrimary}
                                                                className="border text-gray-600 p-2 focus:ring-blue-500 focus:border-blue-900 focus:bg-blue-50 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none"
                                                                />
                                                            </div>
                                                            
                                                            <div className="space-y-3.5">
                                                                <label
                                                                data-slot="label"
                                                                className="cn-label flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed leading-5"
                                                                htmlFor="kecamatan"
                                                                >
                                                                Kecamatan
                                                                </label>
                                                                <input
                                                                id="kecamatan"
                                                                type="text"
                                                                name="kecamatanPrimary"
                                                                value={kecamatanPrimary}
                                                                onChange={handleChangePrimaryAddress}
                                                                data-slot="input"
                                                                placeholder={!truePrimaryAddress ? 'Kecamatan' : truePrimaryAddress.kecamatanPrimary}
                                                                className="border text-gray-600 p-2 focus:ring-blue-500 focus:border-blue-900 focus:bg-blue-50 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none"
                                                                />
                                                            </div>
                                                            <div className="space-y-3.5">
                                                                <label
                                                                data-slot="label"
                                                                className="cn-label flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed leading-5"
                                                                htmlFor="kabupaten"
                                                                >
                                                                Kabupaten
                                                                </label>
                                                                <input
                                                                id="kabupaten"
                                                                type="text"
                                                                name="kabupatenPrimary"
                                                                value={kabupatenPrimary}
                                                                onChange={handleChangePrimaryAddress}
                                                                data-slot="input"
                                                                placeholder={!truePrimaryAddress ? 'Kabupaten' : truePrimaryAddress.kabupatenPrimary}
                                                                className="border text-gray-600 p-2 focus:ring-blue-500 focus:border-blue-900 focus:bg-blue-50 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none"
                                                                />
                                                            </div>
                                                            
                                                            <div className="space-y-3.5">
                                                                <label
                                                                data-slot="label"
                                                                className="cn-label flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed leading-5"
                                                                htmlFor="postCode"
                                                                >
                                                                Post Code
                                                                </label>
                                                                <input
                                                                id="postCode"
                                                                type="text"                                                                
                                                                name="postCodePrimary"
                                                                value={postCodePrimary}
                                                                onChange={handleChangePrimaryAddress}
                                                                data-slot="input"
                                                                placeholder={!truePrimaryAddress ? 'Post Code' : truePrimaryAddress.postCodePrimary}
                                                                className="border text-gray-600 p-2 focus:ring-blue-500 focus:border-blue-900 focus:bg-blue-50 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none"
                                                                />
                                                            </div>
                                                            
                                                            <div className="space-y-3.5">
                                                                <label
                                                                data-slot="label"
                                                                className="cn-label flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed leading-5"
                                                                htmlFor="region"
                                                                >
                                                                Provinsi / Region State
                                                                </label>
                                                                <input
                                                                id=""
                                                                type="text"                                                                
                                                                name="regionPrimary"
                                                                value={regionPrimary}
                                                                onChange={handleChangePrimaryAddress}
                                                                data-slot="input"
                                                                placeholder={!truePrimaryAddress ? 'Region State' : truePrimaryAddress.regionPrimary}
                                                                className="border text-gray-600 p-2 focus:ring-blue-500 focus:border-blue-900 focus:bg-blue-50 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none"
                                                                />
                                                            </div>
                                                            {/* **END ** */}
                                                        </div>
                                                    </CardContent>
                                                </Card>                                            
                                            
                                            </div>
                                            
                                            <div className="flex justify-end mt-4 gap-2">
                                                <button
                                                type="submit"
                                                tabIndex={0}
                                                data-slot="button"
                                                className="cn-button group/button inline-flex shrink-0 items-center justify-center 
                                                    whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none 
                                                    disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 cn-button-variant-default cn-button-size-lg
                                                    bg-gray-800 py-2 px-8 rounded-full text-white font-medium"
                                                >
                                                Save
                                                </button>
                                            </div>
                                        </form>
                                        </div>
                                        
                                        </div>
                                        
    )
}
