import Image from 'next/image'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function DialogBoxHome() {
  // absolute
  return(
    <div data-popover="popover"
      className="flex font-sans text-sm font-normal break-words whitespace-normal bg-white border rounded-lg shadow-lg w-max border-blue-gray-50 text-blue-gray-500 shadow-blue-gray-500/10 focus:outline-none">
     
       <Dialog defaultOpen>
          <DialogContent className="sm:max-w-md">            
             <DialogTitle></DialogTitle>
              <div className="relative flex flex-col gap-4 w-full max-h-[500px] mx-auto my-auto p-4">
                 <h1 className="w-full mx-0 text-center text-lg md:text-4xl font-bold tracking-normal transition-all duration-300 ease-in-out hover:scale-110 hover:text-blue-700 hover:font-bold hover:tracking-wider">Bangun Website Anda, Bersama Kami!</h1>
                  <div className="relative sm:w-full flex justify-center items-center mx-auto my-2 p-2">
                    <Image
                        src="/images/boxdialog906.jpg"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                        style={{ objectFit: 'contain', position: 'relative', textAlign:'center', margin: 'auto' }}
                      />
                  </div>   
                <h2 className="w-full mx-0 text-center text-base md:text-2xl font-bold tracking-normal transition-all duration-300 ease-in-out hover:scale-110 hover:text-blue-700 hover:font-bold hover:tracking-wider">Kami Melayani Pembuatan Website UMKM</h2>
                </div>
          </DialogContent>
        </Dialog>
      
    </div> 
    
  )
}
