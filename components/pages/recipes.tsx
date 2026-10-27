import Image from "next/image";
import Link from "next/link";
import { BreadCrumbContainer } from "@/components/blocks/breadcrumb-container";
import { TitlePage } from "./title-page";
import items from "@/db/items.json"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Recipes() {
  return (
	<div className='overflow-x-hidden'>

		<div className="w-full flex flex-col p-12">
			<div className="w-full flex items-center justify-center py-12 mx-auto font-bold text-5xl text-slate bg-stone-100"> 
				<div className="mx-auto"><TitlePage title="Recipes" textTitle="Aneka Resep Makanan Sehat dan Alami" /></div>
			</div>
			
			<BreadCrumbContainer />
			<Card className="mx-auto w-full max-w-3xl my-8">
				<CardHeader>
					<CardTitle>Ayam Panggang Renyah dengan Bumbu Rempah</CardTitle>
					<CardDescription>Ayam panggang yang juicy dengan lapisan renyah bumbu rempah, dibumbui dengan bawang putih dan lemon untuk rasa yang menyegarkan.</CardDescription>	

				</CardHeader>
				<CardContent>
					<p>Waktu: 90 menit Porsi: 4 sedang</p>
					<h3 className="text-xl font-medium">Bahan-bahan:</h3>
					<ul className="list-disc list-inside text-left">
						<li>1 ekor ayam kampung utuh (sekitar 1.5 kg)</li>	
						<li>2 sendok makan minyak zaitun</li>
						<li>4 siung bawang putih, cincang halus</li>
						<li>1 sendok makan rosemary segar, cincang</li>
						<li>1 sendok makan thyme segar, cincang</li>
						<li>1 sendok teh paprika bubuk</li>
						<li>1 sendok teh garam</li>
						<li>1/2 sendok teh merica hitam</li>
						<li>1 lemon, iris tipis</li>
					</ul>
					<h3 className="text-xl font-medium">Petunjuk:</h3>
					<ol className="list-decimal list-inside text-left">
						<li>Panaskan oven hingga 220°C. Keluarkan ayam dari kulkas dan biarkan pada suhu ruangan selama 30 menit.</li>
						<li>Dalam mangkuk kecil, campurkan minyak zaitun, bawang putih cincang, rosemary, thyme, paprika, garam, dan merica untuk membuat bumbu.</li>
						<li>Oleskan bumbu secara merata ke seluruh permukaan ayam, pastikan untuk menggosoknya ke bawah kulit untuk rasa yang lebih dalam.</li>
						<li>Letakkan irisan lemon di dalam rongga ayam dan di atasnya untuk menambah aroma dan rasa.</li>
						<li>Tempatkan ayam di rak pemanggang dengan dada menghadap ke atas. Panggang selama 20 menit, lalu turunkan suhu oven menjadi 180°C dan lanjutkan memanggang selama 40-50 menit, atau hingga suhu internal mencapai 75°C dan kulitnya renyah.</li>
						<li>Biarkan ayam istirahat selama 10 menit sebelum dipotong. Sajikan dengan sayuran panggang atau salad segar untuk hidangan yang lezat dan sehat.</li>
					</ol>
				</CardContent>
			</Card>		
		


			<Card className="w-full max-w-sm">
				  <CardHeader>
					<CardTitle>Subscription & Billing</CardTitle>
					<CardDescription>
					  Common questions about your account, plans, payments and
					  cancellations.
					</CardDescription>
				  </CardHeader>
				  <CardContent>
					<Accordion type="single" collapsible defaultValue="plans">
					  {items.map((item) => (
						<AccordionItem key={item.value} value={item.value}>
						  <AccordionTrigger>{item.trigger}</AccordionTrigger>
						  <AccordionContent>{item.content}</AccordionContent>
						</AccordionItem>
					  ))}
					</Accordion>
				  </CardContent>
			</Card>

		</div> 
	</div>
  )
}
		
