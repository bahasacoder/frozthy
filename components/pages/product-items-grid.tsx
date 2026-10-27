import Link from 'next/link';
import Image from 'next/image';
import products from "@/db/products.json";

export default function ProductItemsGrid() {

	return (
		<>
			<div className="relative  w-full max-w-5xl flex flex-wrap mx-auto">
			{products.map((product) => (
 					<div key={product.id} className="overflow-hidden relative w-[14rem] m-2 p-2 bg-zinc-50 rounded-md">						
						<div className="relative w-[211px] h-[385px] flex flex-col justify-center shadow-md rounded-xl duration-500">
							<div className="block z-18 absolute top-0 w-[40%] bg-amber-400 text-white p-1 m-1 rounded-lg">14% Off</div>
							<Link href="#" className="z-8 absolute top-6 flex justify-end w-full h-[228px]">
								<Image  
									src={product.image} alt="" 
									width={100} height={100}
									style={{ objectFit: 'fill', borderRadius: '10px', objectPosition: 'top', width:'200px', height: '228px'}}
								/>
							</Link>
							<div className="absolute -bottom-16 z-18 w-full mx-auto flex flex-col bg-zinc-50/80 p-4 duration-400 translate-y-1 hover:-translate-y-12 hover:scale-103 hover:shadow-xl">
 								<div className="flex justify-between">
									<h3 className="text-xl font-medium capitalize">{product.title}</h3>
									<div className="px-1 text-white rounded-md bg-lime-400 hover:bg-lime-600 text-center flex items-center justify-center">
										<Link href="#"><button className="px-2 py-1">Add</button></Link>
									</div>
								</div>
								<div className="flex justify-between text-zinc-800">
									<p className="text-md font-light text-zinc-600 capitalize">{product.category}</p>
									<p className="text-md font-light text-zinc-600 capitalize">{product.supplier}</p>
								</div>
								<div className="flex justify-between">
									<p className="flex space-x-2 items-end"><span className="text-lg text-red-600">$2.15</span> <span className="text-md text-zinc-600 line-through">$2.65</span></p>
									<p>{product.unit}</p>
								</div>
								<div className="w-[97%] h-1 mx-auto bg-lime-600"> </div>
								<div className="text-zinc-600 flex justify-between mb-3 font-light">
									<p className="">Available: <span>173</span></p>
									<p className="">Sold: <span>4</span></p>
								</div>								
								<div className=" bg-lime-400 py-2 px-4 py-2 text-center rounded-lg">
									<Link href={`product/${product.slug}`} className="text-white font-bold">View Product</Link>
									<div className="w-[97%] h-1 mx-auto bg-lime-400 w-2 hover:bg-lime-600 hover:w-12 duration-400"> </div>
								</div>								
							</div>
						</div>
					</div>
 				))}
			</div>
		</>				
	)
}
