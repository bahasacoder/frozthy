"use client"
import { type ChangeEvent, useState } from "react"
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { type RegionOption, regionsList, convertNameToUniqueId, getFormattedDate, generateDateUUID } from "./primaryAddressFunctions" ;
import { saveSecondaryAddress } from '@/lib/features/customer/addressSlice'; 

type SecondaryAddressFieldName =
  | "firstNameSecondary"
  | "lastNameSecondary"
  | "emailSecondary"
  | "phoneSecondary"
  | "companyNameSecondary"
  | "addressSecondary"
  | "desaSecondary"
  | "kecamatanSecondary"
  | "kabupatenSecondary"
  | "postCodeSecondary"
  | "regionSecondary"


export default function FormSecondaryAddress() {
        const dispatch = useAppDispatch();
        const getAddressPrimary = useAppSelector(state => state.address);  
        const trueSecondaryAddress = useAppSelector((state) => state.address);

        const [isLoading, setIsLoading] = useState(false);
        const [errorMessage, setErrorMessage] = useState('');
        // 1. Sumber data lain (misalnya data alamat utama/sebelumnya)
        const [primaryAddress, setPrimaryAddress] = useState([
        {
            id: getAddressPrimary.id,
            idAddressPrimary: getAddressPrimary.idAddressPrimary,
            uniqueName: getAddressPrimary.uniqueName,
            firstNamePrimary: getAddressPrimary.firstNamePrimary,
            lastNamePrimary: getAddressPrimary.lastNamePrimary,
            emailPrimary: getAddressPrimary.emailPrimary,
            phonePrimary: getAddressPrimary.phonePrimary,
            companyNamePrimary: getAddressPrimary.companyNamePrimary,
            addressPrimary: getAddressPrimary.addressPrimary,
            desaPrimary: getAddressPrimary.desaPrimary,
            kecamatanPrimary: getAddressPrimary.kecamatanPrimary,
            kabupatenPrimary: getAddressPrimary.kabupatenPrimary,
            postCodePrimary: getAddressPrimary.postCodePrimary,
            regionPrimary: getAddressPrimary.regionPrimary,
        }]);

        // 2. State untuk form input tujuan (misal: Alamat Pengiriman/Billing)
        const [shippingAddress, setShippingAddress] = useState({
            address: "",
            desa: "",
            kecamatan: "",
            kabupaten: "",
            postCode: "",
            region: ""
        });

        
        const [idAddressPrimary, setIdAddressPrimary] = useState<string>(getAddressPrimary.idAddressPrimary,)
        const [idAddressSecondary, setIdAddressSecondary] = useState<string>("")
        const [firstNameSecondary, setFirstNameSecondary] = useState<string>("")
        const [lastNameSecondary, setLastNameSecondary] = useState<string>("")
        const [emailSecondary, setEmailSecondary] = useState<string>("")
        const [phoneSecondary, setPhoneSecondary] = useState<string>("")
        const [companyNameSecondary, setCompanyNameSecondary] = useState<string>("")
        const [addressSecondary, setAddressSecondary] = useState<string>("")
        const [desaSecondary, setDesaSecondary] = useState<string>("")
        const [kecamatanSecondary, setKecamatanSecondary] = useState<string>("")
        const [kabupatenSecondary, setKabupatenSecondary] = useState<string>("")
        const [postCodeSecondary, setPostCodeSecondary] = useState<string>("")
        // 3. State untuk status checkbox
        const [isSameAddress, setIsSameAddress] = useState(false);
    
        // 1. State untuk mengontrol nilai wilayah yang dipilih
        const [regionSecondary, setRegionSecondary] = useState<string>("")
        // 2. State untuk mengontrol buka/tutup menu dropdown
        const [isOpen, setIsOpen] = useState<boolean>(false)
    
        // Fungsi untuk menangani pilihan wilayah
        const handleSelect = (code: string): void => {
            setRegionSecondary(code)
            setIsOpen(false)
        }
    
        // Mencari nama wilayah aktif untuk ditampilkan di tombol
        const selectedRegionName: string | undefined = regionsList.find(
          (regionOption: RegionOption) => regionOption.code === regionSecondary,
        )?.name ?? "Select a state"
    
        function handleChange(event: ChangeEvent<HTMLInputElement>): void {
            setRegionSecondary(event.currentTarget.value)
        }
    
        function handleChangeSecondaryAddress(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
            const { name, value } = event.currentTarget
            const fieldName = name as SecondaryAddressFieldName
    
            if (fieldName === "firstNameSecondary") setFirstNameSecondary(value)
            if (fieldName === "lastNameSecondary") setLastNameSecondary(value)
            if (fieldName === "emailSecondary") setEmailSecondary(value)
            if (fieldName === "phoneSecondary") setPhoneSecondary(value)
            if (fieldName === "companyNameSecondary") setCompanyNameSecondary(value)
            if (fieldName === "addressSecondary") setAddressSecondary(value)
            if (fieldName === "desaSecondary") setDesaSecondary(value)
            if (fieldName === "kecamatanSecondary") setKecamatanSecondary(value)
            if (fieldName === "kabupatenSecondary") setKabupatenSecondary(value)
            if (fieldName === "postCodeSecondary") setPostCodeSecondary(value)
        }


        function handleSubmitSecondaryAddress(event: React.FormEvent<HTMLFormElement>): void {
            event.preventDefault();        
            const newId = generateDateUUID();
    
            // 1. Kumpulkan semua state lokal menjadi satu objek payload
             const addressPayload = {
                idAddressPrimary: getAddressPrimary.idAddressPrimary, 
                idAddressSecondary: newId, 
                firstNameSecondary,
                lastNameSecondary,
                emailSecondary,
                phoneSecondary,
                companyNameSecondary,
                addressSecondary,
                desaSecondary, // pastikan mapping variabel lokal Anda benar
                kecamatanSecondary,
                kabupatenSecondary,
                postCodeSecondary,
                regionSecondary,
            };
    
            // 2. Simpan data langsung ke store Redux
            dispatch(saveSecondaryAddress(addressPayload));
            
            console.log("Data alamat Secondary berhasil disimpan ke Redux!", addressPayload);
            console.log("id Primary Addres", idAddressPrimary)
        }

        
        // Handler saat checkbox di klik
        const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const checked = event.target.checked;
            setIsSameAddress(checked);

            if (checked) {
            // Jika dicentang, salin data dari source ke state tujuan
            const newId = generateDateUUID();    
            // 1. Kumpulkan semua state lokal menjadi satu objek payload
             const addressPayload = {
                idAddressPrimary: getAddressPrimary.idAddressPrimary, 
                idAddressSecondary: newId, 
                firstNameSecondary: getAddressPrimary.firstNamePrimary,
                lastNameSecondary: getAddressPrimary.lastNamePrimary,
                emailSecondary: getAddressPrimary.emailPrimary,
                phoneSecondary: getAddressPrimary.phonePrimary,
                companyNameSecondary: getAddressPrimary.companyNamePrimary,
                addressSecondary: getAddressPrimary.addressPrimary,
                desaSecondary: getAddressPrimary.desaPrimary,
                kecamatanSecondary: getAddressPrimary.kecamatanPrimary,
                kabupatenSecondary: getAddressPrimary.kabupatenPrimary,
                postCodeSecondary: getAddressPrimary.postCodePrimary,
                regionSecondary: getAddressPrimary.regionPrimary,
            };
    
            // 2. Simpan data langsung ke store Redux
            dispatch(saveSecondaryAddress(addressPayload));
            
            console.log("Data alamat Primary berhasil disalin ke Redux!", addressPayload);
            console.log("id Primary Addres", idAddressPrimary)
            
            } else {
            return false;
            }
        };
    
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
                                        <div className="w-full flex gap-2 m-4">
                                            <input 
                                                type="checkbox" name="matcher" value={'match'} 
                                                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" 
                                                checked={isSameAddress}
                                                onChange={handleCheckboxChange} 
                                            />
                                            <p>Match with the Primary Address</p></div>
                                        
                                        <div
                                        className="cn-accordion-content-inner [&amp;_a]:hover:text-foreground h-(--accordion-panel-height) data-ending-style:h-0 data-starting-style:h-0 [&amp;_a]:underline [&amp;_a]:underline-offset-3 [&amp;_p:not(:last-child)]:mb-4 px-5 pb-4"
                                        >
                                        <form onSubmit={handleSubmitSecondaryAddress}>
                                            <div className="grid grid-cols-1 gap-x-5 gap-y-6 sm:max-md:grid-cols-2 lg:grid-cols-2">
                                                <Card className="border-2 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/50">
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
                                                            name="firstNameSecondary"
                                                            value={firstNameSecondary}
                                                            onChange={handleChangeSecondaryAddress}
                                                            data-slot="input"
                                                            placeholder={!trueSecondaryAddress ? 'First Name' : trueSecondaryAddress.firstNameSecondary}
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
                                                            name="lastNameSecondary"
                                                            value={lastNameSecondary}
                                                            onChange={handleChangeSecondaryAddress}
                                                            data-slot="input"
                                                            placeholder={!trueSecondaryAddress ? 'Last Name' : trueSecondaryAddress.lastNameSecondary}
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
                                                            name="emailSecondary"
                                                            value={emailSecondary}
                                                            onChange={handleChangeSecondaryAddress}
                                                            data-slot="input"
                                                            placeholder={!trueSecondaryAddress ? 'Email Address' : trueSecondaryAddress.emailSecondary}
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
                                                            name="phoneSecondary"
                                                            value={phoneSecondary}
                                                            onChange={handleChangeSecondaryAddress}
                                                            data-slot="input"
                                                            placeholder={!trueSecondaryAddress ? 'Phone' : trueSecondaryAddress.phoneSecondary}
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
                                                            name="companyNameSecondary"
                                                            value={companyNameSecondary}
                                                            onChange={handleChangeSecondaryAddress}
                                                            data-slot="input"
                                                            placeholder={!trueSecondaryAddress ? 'Company Name' : trueSecondaryAddress.companyNameSecondary}
                                                            className="border text-gray-600 p-2 focus:ring-blue-500 focus:border-blue-900 focus:bg-blue-50 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none"
                                                            />
                                                        </div>                                          
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                                <Card className="border-2  hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/50">
                                                    <CardHeader>
                                                        <CardTitle>Address Info</CardTitle>
                                                    </CardHeader>
                                                    <CardContent>
                                                        <div className="grid grid-cols-1 gap-x-5 gap-y-6 sm:max-md:grid-cols-2 lg:grid-cols-2">
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
                                                                name="addressSecondary"
                                                                value={addressSecondary}
                                                                onChange={handleChangeSecondaryAddress}
                                                                data-slot="input"
                                                                placeholder={!trueSecondaryAddress ? 'Alamat' : trueSecondaryAddress.addressSecondary}
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
                                                                name="desaSecondary"
                                                                value={desaSecondary}
                                                                onChange={handleChangeSecondaryAddress}
                                                                data-slot="input"
                                                                placeholder={!trueSecondaryAddress ? 'Desa / Kelurahan' : trueSecondaryAddress.desaSecondary}
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
                                                                name="kecamatanSecondary"
                                                                value={kecamatanSecondary}
                                                                onChange={handleChangeSecondaryAddress}
                                                                data-slot="input"
                                                                placeholder={!trueSecondaryAddress ? 'Kecamatan' : trueSecondaryAddress.kecamatanSecondary}
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
                                                                name="kabupatenSecondary"
                                                                value={kabupatenSecondary}
                                                                onChange={handleChangeSecondaryAddress}
                                                                data-slot="input"
                                                                placeholder={!trueSecondaryAddress ? 'Kabupaten' : trueSecondaryAddress.kabupatenSecondary}
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
                                                                name="postCodeSecondary"
                                                                value={postCodeSecondary}
                                                                onChange={handleChangeSecondaryAddress}
                                                                data-slot="input"
                                                                placeholder={!trueSecondaryAddress ? 'Post Code' : trueSecondaryAddress.postCodeSecondary}
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
                                                                name="regionSecondary"
                                                                value={regionSecondary}
                                                                onChange={handleChangeSecondaryAddress}
                                                                data-slot="input"
                                                                placeholder={!trueSecondaryAddress ? 'Region State' : trueSecondaryAddress.regionSecondary}
                                                                className="border text-gray-600 p-2 focus:ring-blue-500 focus:border-blue-900 focus:bg-blue-50 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none"
                                                                />
                                                            </div>
                                                        </div>
                                                    </CardContent>
                                                </Card>                                            
                                            
                                            </div>
                                            
                                            <div className="flex justify-end mt-4">
                                                <button
                                                type="submit"
                                                tabIndex={0}
                                                data-slot="button"
                                                className="cn-button group/button inline-flex shrink-0 items-center justify-center 
                                                    whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none 
                                                    disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 cn-button-variant-default cn-button-size-lg
                                                    bg-blue-800 py-2 px-8 rounded-full text-white font-medium"
                                                >
                                                Save
                                                </button>
                                            </div>
                                        </form>
                                        </div>
                                        
                                        </div>
                                        
    )
}