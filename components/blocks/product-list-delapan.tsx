//
export default function ProductListDelapan(){
  return(
       <section className="py-8 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-12 px-4 sm:space-y-16 sm:px-6 lg:space-y-24 lg:px-8">
            <div className="flex items-center justify-between gap-5 max-sm:flex-col">
                <div className="flex items-center gap-5 max-md:flex-col">
                    <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">Deals Of The Day</h2>
                    <span data-slot="badge" data-variant="destructive" className="focus-visible:border-ring aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden border border-transparent whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] [&amp;&gt;svg]:pointer-events-none [&amp;&gt;svg]:size-3 bg-destructive [a&amp;]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 text-white rounded-sm px-4 py-1.25 text-lg font-bold">1D : 10H : 28M : 20S</span>
                </div>
                <a href="#" className="shrink-0 text-lg font-semibold underline">View All Deals</a>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                <div className="flex flex-col gap-5" style={{opacity: 1, transform: "none"}}>
                    <div className="bg-primary/20 relative rounded-md pt-8.5">
                        <span data-slot="badge" data-variant="destructive" className="focus-visible:border-ring aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] [&amp;&gt;svg]:pointer-events-none [&amp;&gt;svg]:size-3 bg-destructive [a&amp;]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 text-white absolute top-6 left-6 rounded-sm">--- --32-- --%</span><a href="#"><img src="https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-36.png" alt="Fitted jacket" className="mx-auto max-h-85" /></a><button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" data-slot="checkbox" className="group focus-visible:ring-ring/50 bg-background data-[state=checked]:bg-primary absolute top-4.75 right-6 rounded-full p-2 outline-none focus-visible:ring-2" aria-label="Add wishlist"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart group-data-[state=checked]:stroke-primary-foreground size-4" aria-hidden="true">
                                <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                            </svg></button>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div aria-valuemax={100} aria-valuemin={0} role="progressbar" data-state="indeterminate" data-max="100" data-slot="progress" className="bg-primary/20 relative w-full overflow-hidden rounded-full h-2.5">
                            <div data-state="indeterminate" data-max="100" data-slot="progress-indicator" className="bg-primary h-full w-full flex-1 transition-all" style={{transform:"translateX(-50%)"}}></div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-muted-foreground font-medium uppercase">Sold : </span><span>20</span>
                            </div>
                            <div>
                                <span className="text-muted-foreground font-medium uppercase">Available : </span><span>30</span>
                            </div>
                        </div>
                        <a href="#">
                            <h3 className="text-xl font-medium">Fitted jacket</h3>
                        </a><a href="#" className="flex items-center gap-2.5"><span className="text-xl font-semibold">$-- --225</span><span className="text-muted-foreground text-lg font-medium line-through">$-- --249</span></a>
                    </div>
                </div>
                <div className="flex flex-col gap-5" style={{opacity: 1, transform: "none"}}>
                    <div className="relative rounded-md pt-8.5 bg-amber-600/20 dark:bg-amber-400/20">
                        <span data-slot="badge" data-variant="destructive" className="focus-visible:border-ring aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] [&amp;&gt;svg]:pointer-events-none [&amp;&gt;svg]:size-3 bg-destructive [a&amp;]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 text-white absolute top-6 left-6 rounded-sm">--- --52-- --%</span><a href="#"><img src="https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-37.png" alt="Patterned resort shirt" className="mx-auto max-h-85" /></a><button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" data-slot="checkbox" className="group focus-visible:ring-ring/50 bg-background data-[state=checked]:bg-primary absolute top-4.75 right-6 rounded-full p-2 outline-none focus-visible:ring-2" aria-label="Add wishlist"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart group-data-[state=checked]:stroke-primary-foreground size-4" aria-hidden="true">
                                <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                            </svg></button>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div aria-valuemax={100} aria-valuemin={0} role="progressbar" data-state="indeterminate" data-max="100" data-slot="progress" className="bg-primary/20 relative w-full overflow-hidden rounded-full h-2.5">
                            <div data-state="indeterminate" data-max="100" data-slot="progress-indicator" className="bg-primary h-full w-full flex-1 transition-all" style={{transform:"translateX(-75%)"}}></div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-muted-foreground font-medium uppercase">Sold : </span><span>10</span>
                            </div>
                            <div>
                                <span className="text-muted-foreground font-medium uppercase">Available : </span><span>19</span>
                            </div>
                        </div>
                        <a href="#">
                            <h3 className="text-xl font-medium">Patterned resort shirt</h3>
                        </a><a href="#" className="flex items-center gap-2.5"><span className="text-xl font-semibold">$-- --135</span><span className="text-muted-foreground text-lg font-medium line-through">$-- --299</span></a>
                    </div>
                </div>
                <div className="flex flex-col gap-5" style={{opacity: 1, transform: "none"}}>
                    <div className="relative rounded-md pt-8.5 bg-green-600/20 dark:bg-green-400/20">
                        <span data-slot="badge" data-variant="destructive" className="focus-visible:border-ring aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] [&amp;&gt;svg]:pointer-events-none [&amp;&gt;svg]:size-3 bg-destructive [a&amp;]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 text-white absolute top-6 left-6 rounded-sm">--- --55-- --%</span><a href="#"><img src="https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-38.png" alt="Flared dress" className="mx-auto max-h-85" /></a><button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" data-slot="checkbox" className="group focus-visible:ring-ring/50 bg-background data-[state=checked]:bg-primary absolute top-4.75 right-6 rounded-full p-2 outline-none focus-visible:ring-2" aria-label="Add wishlist"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart group-data-[state=checked]:stroke-primary-foreground size-4" aria-hidden="true">
                                <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                            </svg></button>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div aria-valuemax={100} aria-valuemin={0} role="progressbar" data-state="indeterminate" data-max="100" data-slot="progress" className="bg-primary/20 relative w-full overflow-hidden rounded-full h-2.5">
                            <div data-state="indeterminate" data-max="100" data-slot="progress-indicator" className="bg-primary h-full w-full flex-1 transition-all" style={{transform:"translateX(-50%)"}}></div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-muted-foreground font-medium uppercase">Sold : </span><span>25</span>
                            </div>
                            <div>
                                <span className="text-muted-foreground font-medium uppercase">Available : </span><span>35</span>
                            </div>
                        </div>
                        <a href="#">
                            <h3 className="text-xl font-medium">Flared dress</h3>
                        </a><a href="#" className="flex items-center gap-2.5"><span className="text-xl font-semibold">$-- --130</span><span className="text-muted-foreground text-lg font-medium line-through">$-- --149</span></a>
                    </div>
                </div>
                <div className="flex flex-col gap-5" style={{opacity: 1, transform: "none"}}>
                    <div className="relative rounded-md pt-8.5 bg-sky-600/20 dark:bg-sky-400/20">
                        <span data-slot="badge" data-variant="destructive" className="focus-visible:border-ring aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] [&amp;&gt;svg]:pointer-events-none [&amp;&gt;svg]:size-3 bg-destructive [a&amp;]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 text-white absolute top-6 left-6 rounded-sm">--- --26-- --%</span><a href="#"><img src="https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-39.png" alt="Black t shirt" className="mx-auto max-h-85" /></a><button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" data-slot="checkbox" className="group focus-visible:ring-ring/50 bg-background data-[state=checked]:bg-primary absolute top-4.75 right-6 rounded-full p-2 outline-none focus-visible:ring-2" aria-label="Add wishlist"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart group-data-[state=checked]:stroke-primary-foreground size-4" aria-hidden="true">
                                <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                            </svg></button>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div aria-valuemax={100} aria-valuemin={0} role="progressbar" data-state="indeterminate" data-max="100" data-slot="progress" className="bg-primary/20 relative w-full overflow-hidden rounded-full h-2.5">
                            <div data-state="indeterminate" data-max="100" data-slot="progress-indicator" className="bg-primary h-full w-full flex-1 transition-all" style={{transform:"translateX(-25%)"}}></div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-muted-foreground font-medium uppercase">Sold : </span><span>23</span>
                            </div>
                            <div>
                                <span className="text-muted-foreground font-medium uppercase">Available : </span><span>12</span>
                            </div>
                        </div>
                        <a href="#">
                            <h3 className="text-xl font-medium">Black t shirt</h3>
                        </a><a href="#" className="flex items-center gap-2.5"><span className="text-xl font-semibold">$-- --210</span><span className="text-muted-foreground text-lg font-medium line-through">$-- --229</span></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
  )
}
