import Image from "next/image";
import Link from "next/link";
import { BreadCrumbContainer } from "@/components/blocks/breadcrumb-container";
import { TitlePage } from "./title-page";

export default function AboutUs() {
  return (
	    <div className='overflow-x-hidden'>

  <div className="w-full flex flex-col">
	<div className="w-full flex items-center justify-center py-12 mx-auto font-bold text-5xl text-slate bg-stone-100"> 
		<div className="mx-auto"><TitlePage title="About Us" textTitle="Dapatkan Produk Halal, Sehat, dan Bergizi." /></div>
	</div>
	
	<BreadCrumbContainer />
	<div className="flex flex-col justify-center items-center text-center">
		<h1 className="text-3xl font-bold pb-2">
		  Kami Menyediakan Aneka Produk Organik / Natural 
		</h1>
		<h3 className="italic text-md/7">Menjual Aneka Makanan dan Minuman halal, sehat, dan bergizi. Untuk Memenuhi Nutrisi Kesehatan Anda.</h3>
	</div>
	<div className="relative w-[100%] min-h-[256px] h-auto lg:h-[512px] flex justify-center items-center my-8 mx-auto py-4 px-6">
		<Image 
			src="/istockphoto-makanan-diet-seimbang.jpg" 
			alt="makanan-natural-seimbang" 
 			fill
			style={{ objectFit: 'cover', borderRadius: '10px', }}
			
		/>
		 
	</div>
	<div className="relative">
		<div className="w-full flex flex-col justify-center md:flex-row md:justify-between px-4">
			<div className="relative h-auto md:w-1/2 mb-6">
				<div className="mt-4">
					<h2 className="text-4xl font-bold mb-8">Menyediakan makanan sehat dan alami</h2>
					<p className="text-sm/7">Kami percaya bahawa makanan terbaik adalah makanan alami, karena itu kami menyediakan ayam kampung asli yang dikembangkan secara alami.
					Kami memprioritaskan proses berkelanjutan dan kelestarian lingkungan, kesehatan hewan, dan kemurinian ayam kampung asli.
					</p>
				</div>
				<div className="mt-4">
					<p className="text-xl font-medium"><Link href="#">Produk Kami</Link></p>
					<p className="text-xl font-medium"><Link href="#">Contak Kami</Link></p>
					<p className="text-xl font-medium"><Link href="#">0812 6805 2229</Link></p>
				</div>
			</div>
			<div className="relative h-auto md:w-1/2 flex justify-center md:justify-end">
				<Image 
					src="/istockphoto-makanan-diet-seimbang.jpg" 
					alt="makanan-natural-seimbang" 
					width={500}
					height={500}
					style={{ objectFit: 'cover', borderRadius: '10px', right:0, }}
				/>
			</div>
		</div>
		<div className="">
			<div className="p-4">
				<div className="text-center mx-0 mt-8 mb-6">
					<h2 className="text-5xl font-bold">Visi dan Misi</h2>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">				
				<div className="lg:w-full block">
					<div className="relative max-w-[350px] h-[350px] mx-auto flex ">
						<Image 
							src="/Fluffy_Chicks_Golden_Straw.png" 
							alt="anak ayam"
							width={350} height={350}
							style={{ objectFit: 'cover', borderRadius: '50%',}}
						/>
					</div>
					<div className="p-4 mt-8">
						Mengembangkan pertanian alami utamanya di sektor peternakan ayam kampung
					</div>
				</div>
				<div className="lg:w-full block">
					<div className="relative max-w-[350px] h-[350px] mx-auto flex">
						<Image 
							src="/Proud_Hen_Farmyard_Morning.png" 
							alt="anak ayam"
							width={350} height={350}
							style={{ objectFit: 'cover', borderRadius: '50%', }}
						/>
					</div>
					<div className="p-4 mt-8 tex-center">
						Mengintegrasikan pemenuhan kebutuhan konsumen dengan kelestarian lingkungan
					</div>
				</div>
				<div className="lg:w-full block">
					<div className="relative max-w-[350px] h-[350px] mx-auto flex">
						<Image 
							src="/Farm_Fresh_Egg_Collection.png" 
							alt="anak ayam"
							width={350} height={350}
							style={{ objectFit: 'cover', borderRadius: '50%', }}
						/>
					</div>
					<div className="p-4 mt-8 text-center">
						Menghadirkan produk makanan yang alami, sehat, bergizi dan berkualitas
					</div>
				</div>
				<div className="lg:w-full block">
					<div className="relative max-w-[350px] h-[350px] mx-auto flex">
						<Image 
							src="/Majestic_Rooster_Sunrise_Portrait.png" 
							alt="anak ayam"
							width={350} height={350}
							style={{ objectFit: 'cover', borderRadius: '50%', }}
						/>
					</div>
					<div className="p-4 mt-8 text-center">
						Mengunakan pakan dan obat-obatan alami dan menghindari penggunaan antibiotik/vaksinasi dan bahan-bahan kimia tambahan
					</div>
				</div>
			</div>
		</div> 
		<div className="w-full flex flex-col md:flex-row gap-6 m-4">
			<div className="w-full md:w-1/2 py-4 my-4">
				<h2 className="w-full bg-zinc-100 text-blue-800 text-xl font-bold p-4 my-4 rounded-md">Komitmen pada kami</h2>
				<div className="relative w-full h-auto mx-auto flex text-center justify-center">
					<Image 
							src="/Native_Chicken_Rustic_Studio_Shot.png" 
							alt="anak ayam"
							width={350} height={350}
							style={{ objectFit: 'cover', borderRadius: '0%', }}
						/>
				</div>
				<p className="mt-8 p-4">Kami berkomitmen pada penyediaan daging ayam kampung yang sehat dan menyehatkan,
				kualitas yang terpercaya (halal, sehat, dan bersih), serta pelestarian lingkungan.</p>
			</div>
			
			<div className="w-full md:w-1/2 py-4 my-4">
				<h2 className="w-full bg-zinc-100 text-blue-800 text-xl font-bold p-4 my-4 rounded-md">Mengapa memilih kami</h2>
				<div className="relative w-full h-auto mx-auto flex text-center justify-center">
					<Image 
							src="/Smoked_Chicken_Masterpiece.png" 
							alt="anak ayam"
							width={350} height={350}
							style={{ objectFit: 'cover', borderRadius: '0%', }}
						/>
				</div>
				<p className="mt-8 p-4">Karena Kami menghasilkan daging ayam kampung berkualitas dan sehat, dibesarkan dengan cara pemeliharaan alami, 
				tanpa menggunakan hormon pertumbuhan, tanpa vaksin(antibiotik), serta tanp obat-obatan tambahan yang tidak diperlukan.</p>
			</div>
		</div>
	</div>
    </div>
{/* overflow-x-hidden */}
	</div> 
  )
}	
