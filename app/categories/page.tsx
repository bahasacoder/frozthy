import Image from "next/image"
export default function Categoriespage() {
  return (
    <>
         <section className="py-8 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex gap-6 max-sm:flex-col sm:mb-16 lg:mb-24">
                <h2 className="grow text-2xl font-semibold md:text-3xl lg:text-4xl">Our Product Category</h2>
                <button data-slot="button" data-variant="default" data-size="lg" className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 has-[&gt;svg]:px-4 w-fit rounded-lg text-base">Explore All Category</button>
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 xl:grid-cols-4">
                <div className="relative w-full rounded-xl p-6 transition-all duration-300 hover:ring-1 bg-destructive/10 hover:ring-destructive">
                    <div className="flex flex-col justify-between gap-6">
                        <div className="space-y-1">
                            <h3 className="text-xl font-semibold">Daging</h3>
                            <p className="text-muted-foreground font-medium">Ayam, Sapi, Telur</p>
                        </div>
                        <a href="#" data-slot="button" data-variant="default" data-size="default" className="focus-visible:border-ring aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 h-9 px-4 py-2 has-[&gt;svg]:px-3 w-fit bg-destructive hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 text-white">Shop Now</a>
                    </div>
                    <img src="https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-32.png" alt="For Women" className="absolute end-0 bottom-0 z-0 h-46.5 w-auto object-contain" />
                </div>
                <div className="relative w-full rounded-xl p-6 transition-all duration-300 hover:ring-1 bg-sky-600/10 hover:ring-sky-600 dark:bg-sky-400/10 dark:hover:ring-sky-400">
                    <div className="flex flex-col justify-between gap-6">
                        <div className="space-y-1">
                            <h3 className="text-xl font-semibold">Rempah</h3>
                            <p className="text-muted-foreground font-medium">Jahe, Kunyit, Sereh, Lengkuas</p>
                        </div>
                        <a href="#" data-slot="button" data-variant="default" data-size="default" className="focus-visible:border-ring aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 h-9 px-4 py-2 has-[&gt;svg]:px-3 w-fit bg-sky-600 text-white hover:bg-sky-600/90 focus-visible:ring-sky-600/20 dark:bg-sky-400/60 dark:hover:bg-sky-400/50 dark:focus-visible:ring-sky-400/40">Shop Now</a>
                    </div>
                    <img src="https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-33.png" alt="For Men" className="absolute end-0 bottom-0 z-0 h-46.5 w-auto object-contain" />
                </div>
                <div className="relative w-full rounded-xl p-6 transition-all duration-300 hover:ring-1 bg-amber-600/10 hover:ring-amber-600 dark:bg-amber-400/10 dark:hover:ring-amber-400">
                    <div className="flex flex-col justify-between gap-6">
                        <div className="space-y-1">
                            <h3 className="text-xl font-semibold">Buah</h3>
                            <p className="text-muted-foreground font-medium">Mangga, Rambutan, Durian, Pepaya</p>
                        </div>
                        <a href="#" data-slot="button" data-variant="default" data-size="default" className="focus-visible:border-ring aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 h-9 px-4 py-2 has-[&gt;svg]:px-3 w-fit bg-amber-600 text-white hover:bg-amber-600/90 focus-visible:ring-amber-600/20 dark:bg-amber-400/60 dark:hover:bg-amber-400/50 dark:focus-visible:ring-amber-400/40">Shop Now</a>
                    </div>
                    <img src="https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-34.png" alt="Sport Shoes" className="absolute end-0 bottom-0 z-0 h-46.5 w-auto object-contain" />
                </div>
                <div className="relative w-full rounded-xl p-6 transition-all duration-300 hover:ring-1 bg-green-600/10 hover:ring-green-600 dark:bg-green-400/10 dark:hover:ring-green-400">
                    <div className="flex flex-col justify-between gap-6">
                        <div className="space-y-1">
                            <h3 className="text-xl font-semibold">Sayuran</h3>
                            <p className="text-muted-foreground font-medium">Tomat, Cabai, Terong</p>
                        </div>
                        <a href="#" data-slot="button" data-variant="default" data-size="default" className="focus-visible:border-ring aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 h-9 px-4 py-2 has-[&gt;svg]:px-3 w-fit bg-green-600 text-white hover:bg-green-600/90 focus-visible:ring-green-600/20 dark:bg-green-400/60 dark:hover:bg-green-400/50 dark:focus-visible:ring-green-400/40">Shop Now</a>
                    </div>
                    <img src="https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-35.png" alt="For Kids" className="absolute end-0 bottom-0 z-0 h-46.5 w-auto object-contain" />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
