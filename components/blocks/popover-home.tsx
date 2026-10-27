import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function PopoverHome() {
  // absolute
  return(
    <div data-popover="popover"
      className="flex font-sans text-sm font-normal break-words whitespace-normal bg-white border rounded-lg shadow-lg w-max border-blue-gray-50 text-blue-gray-500 shadow-blue-gray-500/10 focus:outline-none">
     
       <Dialog defaultOpen>
          <DialogContent className="sm:max-w-md">
            
             <DialogTitle></DialogTitle>
               <h1 className="text-2x text-center">Kami Juga Melayani Pembuatan Website UMKM</h1>
          </DialogContent>
        </Dialog>
      
    </div> 
    
  )
}
