import { AirVent } from "lucide-react";
import Image from "next/image";
export default function HotTwoProducts(){
  return(
	  <>
		  <div className="w-full mx-auto mt-24 p-8">
	        <h1 className="w-full text-2xl font-semibold sm:text-3xl lg:text-4xl text-center">New Hot Products</h1>
	      </div>
			 
		    <div className="w-full flex flex-col md:flex-row md-flex-wrap md:justify-between bg-zinc-50">
		      
		        <div className="flex w-full bg-yellow-100">
		            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-6 bg-white">
		            {/* <!-- Image --> */}
		                <div className="w-full h-auto relative bg-gray-100 rounded-2xl p-8 flex items-center justify-center w-48">
		                    <Image 
		                        src="https://raw.githubusercontent.com/bahasacoder/step-cart/refs/heads/main/uploads/2026-07-29T06-46-44-073Z-p2c3zeb2s.png"
		                        alt="Product" 
		                        width={100} height={100}
								style={{ objectFit: 'fill', borderRadius: '10px', objectPosition: 'top', width:'200px', height: '228px'}}
		                    />
		                </div>
		                {/* <!-- Details --> */}
		                <div className="w-full space-y-6">
		                    <h1 className="text-3xl font-bold">Abone Telur Kita</h1>
		                    <p className="text-2xl font-semibold text-gray-700">Rp. 25.000</p>
		                    <p className="text-gray-600">Bahan Telur Ayam</p>
		                    <button className="w-full bg-indigo-600 text-white py-3 rounded-lg">Add to Cart</button>
		                </div>
		            </div>
		        </div>
		        <div className="flex w-full bg-green-100">
		            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-6 bg-white">
		            {/* <!-- Image --> */}
		                <div className="w-full h-auto relative bg-gray-100 rounded-2xl p-8 flex items-center justify-center w-48">
		                    <Image 
		                        src="/images/sambacakalang2.png"
		                        alt="Product" 
		                        width={100} height={100}
								style={{ objectFit: 'fill', borderRadius: '10px', objectPosition: 'top', width:'200px', height: '228px'}}
										
		                    />
		                </div>
		                {/* <!-- Details --> */}
		                <div className="w-full space-y-6">
		                    <h1 className="text-3xl font-bold">Sambal Cakalang</h1>
		                    <p className="text-2xl font-semibold text-gray-700">Rp. 25.000</p>
		                    <p className="text-gray-600">Bahan Ikan Cakalang</p>
		                    <button className="w-full bg-indigo-600 text-white py-3 rounded-lg">Add to Cart</button>
		                </div>
		            </div>
		        </div>
		    </div>
		 </>
  )
}
