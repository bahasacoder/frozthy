// import { Instagram, Facebook, Twitter, Youtube, Linkedin,  } from 'lucide-react';

import Image from "next/image"  
import PbcLogo from '@/public/assets/pbc_logo.svg'
import NomorHapeKu from './NomorHapeKu'
export default function Footer() {

  return (

    <footer>
    <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-16 md:py-24 lg:grid-cols-5">
        <div className="flex flex-col items-start gap-4 lg:col-span-2">
          <a href="#">
                <div className="flex items-center gap-3">
                  <Image src={PbcLogo} alt="PasarBone Logo" width={34} height={34} />
                        <span className="text-xl font-semibold">PasarBone.com</span>
                </div>
            </a>
            <p className="text-muted-foreground text-balance">
              Komitmen kami untuk menghadirkan makanan halal, sehat, dan bergizi. 
            </p>
            <div className="flex items-center gap-4">
               {/* 
                  <a href="#" target="#">
                   <Instagram className="size-5 text-sky-600 dark:text-sky-400" aria-hidden="true" />
                    </a> 
                  <a href="#" target="#">
                    <Facebook className="size-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                  </a>
                  <a href="#" target="#">
                    <Twitter className="size-5 text-amber-600 dark:text-amber-400" aria-hidden="true" />
                  </a>
                  <a href="#" target="#">
                    <Youtube className="size-5 text-red-600 dark:text-red-400" aria-hidden="true" />
                  </a>  
                  <a href="#" target="#">
                    <Linkedin className="size-5 text-blue-700 dark:text-blue-500" aria-hidden="true" />
                  </a>
                  */}
                </div>
            <div data-orientation="horizontal" data-slot="separator" className="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px !w-35"><br /></div><h4>Desa Pattiro Bajo</h4><h5>Kecamatan Sibulue <br/>Kabupaten Bone</h5>
        </div>
        <div className="flex flex-col gap-5">
            <div className="text-lg font-medium">Resources</div>
            <ul className="text-muted-foreground space-y-3">
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Ayam Kampung Asli</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Sapi Bali Lokal</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Padi / Beras</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Rempah</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Sayuran</a></li>
            </ul>
        </div>
        <div className="flex flex-col gap-5">
            <div className="text-lg font-medium">Help and Support</div>
            <ul className="text-muted-foreground space-y-3">
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Support</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Affiliation Program</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">FAQs</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Discord Community</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">About Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Contact Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Hire Us</a></li>
            </ul>
        </div>
        <div className="flex flex-col gap-5">
            <div className="text-lg font-medium">Legal</div>
            <ul className="text-muted-foreground space-y-3">
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">License</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Privacy policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Terms &amp; Condition</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Brand Guideline</a></li>
            </ul>
        </div>
    </div>
    <div data-orientation="horizontal" data-slot="separator" className="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px"><br /></div>
    <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3 px-4 py-6 max-sm:flex-col sm:items-center sm:px-6">
        <p className="text-lg font-semibold">Developed By :</p>
            <div className="flex w-fit gap-x-5 gap-y-3 max-sm:flex-col"><a href="https://pasarbone.com"><img src="https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@70c3f27ff5a6d467cf2db3331d5744f0431eb500/uploads/2026-02-11T14-57-41-361Z-vizvnobtw.png" alt="Awish Photo logo" className="h-7.5" /></a>
            <div data-orientation="vertical" data-slot="separator" className="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px !h-7 max-sm:hidden"><br /></div><a href="https://pasarbone.com"><img src="https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@12828e0da8faff237ce9dbbc794786dfe2709996/uploads/2026-02-11T14-47-50-945Z-mvcsequv7.png" alt="Github logo" className="h-7.5" /></a>
            <div data-orientation="vertical" data-slot="separator" className="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px !h-7 max-sm:hidden"><br /></div><a href="https://pasarbone.com"><img src="https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@94c96a8f3ffa531e6bf9c6480e28e954132c3e22/uploads/2026-02-11T14-46-16-078Z-ib912vlit.webp" alt="NextJS logo" className="h-7.5" /></a>
        </div>
    </div>
    <div data-orientation="horizontal" data-slot="separator" className="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px"><br /></div>
    <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-6 sm:px-6">
        <p className="font-medium">&copy;2026 <a href="#" className="link-animated">PasarBone.com</a>, Made with ❤️ for better web.</p>
        <div className="flex flex-wrap items-center gap-4">
                <span data-slot="badge" className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border px-2 py-0.5 whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3 text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground text-base font-normal">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" className="lucide lucide-shield-check !size-4.5 text-green-600" aria-hidden="true">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                </svg> 

                   <b>085211190139</b>
                </span>
          </div>
    </div>
</footer>
  )  
}
