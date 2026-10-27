import Image from "next/image";
import Link from "next/link";
import Form from "next/form";
import { BreadCrumbContainer } from "@/components/blocks/breadcrumb-container";
import { TitlePage } from "./title-page";

import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { MapPinHouse } from "lucide-react";
import ResponsiveIframe from "./responsive-iframe";
import SendEmailForm from "./send-email-form";

export default function ContactUs() {
  return (
  <div className="w-full">
	<div className="w-full flex items-center justify-center py-12 mx-auto font-bold text-5xl text-slate bg-stone-100"> 
		<div className="mx-auto"><TitlePage title="Contact Us" textTitle="Hubungi Kami Untuk Informasi Lebih Lanjut." /></div>
	</div>
	
	<BreadCrumbContainer />
	<div className="w-full flex flex-wrap  justify-around mx-auto">
			<div className="w-xs flex flex-col justify-center px-2 py-4 mx-2 my-4 border-3 shadow-xl rounded-md">
				<div className="mx-auto">
					<Mail className="w-18 h-18 text-6xl font-medium text-lime-900" />
				</div>
				<h3 className="mx-auto text-2xl font-bold">
					Email Address
				</h3>
				<div className="mx-auto text-xl italic">officialpasarbone@gmail.com</div>
			</div>
			<div className="w-xs flex flex-col justify-center px-2 py-4 mx-2 my-4 border-3 shadow-xl rounded-md">
				<div className="mx-auto">
					<Phone className="w-18 h-18 text-6xl font-medium text-lime-900" />
				</div>
				<h3 className="mx-auto text-2xl font-bold">
					Contact Number
				</h3>
				<div className="mx-auto text-xl italic"><p>0812 6805 2229</p></div>
			</div>
			<div className="w-xs flex flex-col justify-center px-2 py-4 mx-2 my-4 border-3 shadow-xl rounded-md">
				<div className="mx-auto">
					<MapPinHouse className="w-18 h-18 text-6xl font-medium text-lime-900" />
				</div>
				<h3 className="mx-auto text-2xl font-bold">
					Alamat
				</h3>
				<div className="mx-auto text-xl italic text-center">Desa Pattiro Bajo, Bone</div>
			</div>
		</div>
		<SendEmailForm />
		<div className="w-full mt-8 lg:flex justify-between gap-2">
			<div className="w-full md:w-[50%]">
				<div className="p-4"><h3 className="text-2xl font-bold">Pertanyaan-pertanyaan</h3></div>
				<div className="flex flex-col  my-4 gap-2">
					<div className="text-lg text-lime-900 bg-zinc-100 font-medium py-4 px-2 my-2"><p>Bagaimana Cara Pengembalian Barang</p></div>
					<div className="px-2 "><p>Barang sudah dikirim dapat dikembalikan dengan pengembalian dipotong ongkos kirim dan 5% dari harga barang. Setelah melalui proses pemeriksaan keutuhan barang.</p></div>
				</div>
				<div className="flex flex-col  my-4 gap-2">
					<div className="text-lg text-lime-900 bg-zinc-100 font-medium py-4 px-2 my-2"><p>Berapa lama masa aktif pesanan?</p></div>
					<div className="px-2 "><p>Barang yang sudah di-checkout akan kami tunggu bukti transfernya selama 1x6 jam, jika tidak ada konfirmasi transfer maka pesanan akan dihapus, dan silahkan buat pesanan baru kembali. </p></div>
				</div>
			</div>
			
			<div className="w-full md:w-[50%]">
				<div className="p-4 "><h3 className="text-2xl font-bold">Kirimkan Kami Pesan!</h3></div>
				{/* <ContactWaForm /> */}
			  </div>
		</div>
		
		<div className="w-full mt-8">
			<div className="w-full">
				 <div className="relative mx-auto my-2 w-full h-[100%]">
				  <h1 className="block mx-auto">*) Desa Pattiro Bajo sebelum perbatasan dengan Desa Pakkasalo Kecamatan Sibulue</h1>
				  <div className="relative w-full mx-auto my-2 p-2 border-2 text-center flex flex-col justify-center items-center">
 					  <ResponsiveIframe 
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6687.798316734606!2d120.3739514799087!3d-4.667188210898907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbdc29e66f47ced%3A0xaead4b7c63eeabc!2sPattiro%20Bajo%2C%20Kec.%20Sibulue%2C%20Kabupaten%20Bone%2C%20Sulawesi%20Selatan!5e0!3m2!1sid!2sid!4v1762937584131!5m2!1sid!2sid"
						title="Google Map"
					  />
				  </div>
				  <p><MapPinHouse /></p>
				</div>
				
			</div>
		</div>
    </div>
  )
}	
