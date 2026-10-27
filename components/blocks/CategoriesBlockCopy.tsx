import Image from "next/image";
export default function CategoriesBlockCopy() {
  return (
        <section className="py-8 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 space-y-4 text-center sm:mb-16 lg:mb-24">
                <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">Shop By Category</h2>
                <p className="text-muted-foreground text-xl">Explore our gallery to learn more about our amazing products and their features.</p>
            </div>
            <div className="relative w-full" role="region" aria-roledescription="carousel" data-slot="carousel">
                <div className="overflow-hidden" data-slot="carousel-content">
                    <div className="flex -ml-6" style={{transform: "translate3d(0px, 0px, 0px)"}}>
                        <div role="group" aria-roledescription="slide" data-slot="carousel-item" className="min-w-0 shrink-0 grow-0 basis-full pl-6 md:basis-1/3 lg:basis-1/6"><a href="#">
                                <div className="bg-muted mb-6 flex h-32 items-center justify-center rounded-md px-11.25"><img src="https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-10.png" alt="Smart Electronics" className="h-22 object-contain" /></div>
                                <h2 className="text-center text-lg font-medium">Smart Electronics</h2>
                            </a></div>
                        <div role="group" aria-roledescription="slide" data-slot="carousel-item" className="min-w-0 shrink-0 grow-0 basis-full pl-6 md:basis-1/3 lg:basis-1/6"><a href="#">
                                <div className="bg-muted mb-6 flex h-32 items-center justify-center rounded-md px-11.25"><img src="https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-11.png" alt="Smart Appliances" className="h-22 object-contain" /></div>
                                <h2 className="text-center text-lg font-medium">Smart Appliances</h2>
                            </a></div>
                        <div role="group" aria-roledescription="slide" data-slot="carousel-item" className="min-w-0 shrink-0 grow-0 basis-full pl-6 md:basis-1/3 lg:basis-1/6"><a href="#">
                                <div className="bg-muted mb-6 flex h-32 items-center justify-center rounded-md px-11.25"><img src="https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-9.png" alt="Smart Lighting" className="h-22 object-contain" /></div>
                                <h2 className="text-center text-lg font-medium">Smart Lighting</h2>
                            </a></div>
                        <div role="group" aria-roledescription="slide" data-slot="carousel-item" className="min-w-0 shrink-0 grow-0 basis-full pl-6 md:basis-1/3 lg:basis-1/6"><a href="#">
                                <div className="bg-muted mb-6 flex h-32 items-center justify-center rounded-md px-11.25"><img src="https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-12.png" alt="Audio Visual" className="h-22 object-contain" /></div>
                                <h2 className="text-center text-lg font-medium">Audio Visual</h2>
                            </a></div>
                        <div role="group" aria-roledescription="slide" data-slot="carousel-item" className="min-w-0 shrink-0 grow-0 basis-full pl-6 md:basis-1/3 lg:basis-1/6"><a href="#">
                                <div className="bg-muted mb-6 flex h-32 items-center justify-center rounded-md px-11.25"><img src="https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-13.png" alt="Smart Hubs" className="h-22 object-contain" /></div>
                                <h2 className="text-center text-lg font-medium">Smart Hubs</h2>
                            </a></div>
                        <div role="group" aria-roledescription="slide" data-slot="carousel-item" className="min-w-0 shrink-0 grow-0 basis-full pl-6 md:basis-1/3 lg:basis-1/6"><a href="#">
                                <div className="bg-muted mb-6 flex h-32 items-center justify-center rounded-md px-11.25"><img src="https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-14.png" alt="Smart Gadget" className="h-22 object-contain" /></div>
                                <h2 className="text-center text-lg font-medium">Smart Gadget</h2>
                            </a></div>
                        <div role="group" aria-roledescription="slide" data-slot="carousel-item" className="min-w-0 shrink-0 grow-0 basis-full pl-6 md:basis-1/3 lg:basis-1/6"><a href="#">
                                <div className="bg-muted mb-6 flex h-32 items-center justify-center rounded-md px-11.25"><img src="https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-15.png" alt="Buds" className="h-22 object-contain" /></div>
                                <h2 className="text-center text-lg font-medium">Buds</h2>
                            </a></div>
                        <div role="group" aria-roledescription="slide" data-slot="carousel-item" className="min-w-0 shrink-0 grow-0 basis-full pl-6 md:basis-1/3 lg:basis-1/6"><a href="#">
                                <div className="bg-muted mb-6 flex h-32 items-center justify-center rounded-md px-11.25"><img src="https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-17.png" alt="Goggles" className="h-22 object-contain" /></div>
                                <h2 className="text-center text-lg font-medium">Goggles</h2>
                            </a></div>
                    </div>
                </div>
                <button data-slot="carousel-previous" data-variant="default" data-size="icon" className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 bg-primary text-primary-foreground hover:bg-primary/90 disabled:bg-secondary disabled:text-primary absolute top-12 -left-3 size-9.5 translate-y-0 cursor-pointer rounded-full disabled:opacity-100" disabled><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left" aria-hidden="true">
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path>
                    </svg><span className="sr-only">Previous slide</span></button><button data-slot="carousel-next" data-variant="default" data-size="icon" className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 bg-primary text-primary-foreground hover:bg-primary/90 disabled:bg-secondary disabled:text-primary absolute top-12 -right-3 size-9.5 translate-y-0 cursor-pointer rounded-full disabled:opacity-100"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                    </svg><span className="sr-only">Next slide</span></button>
            </div>
        </div>
    </section>
  )
}
