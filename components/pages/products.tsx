"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs, Pagination } from 'swiper/modules';


export default function ProductPage() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null as any);

  return (

      <main className="flex flex-col">
        <section className="flex-1">
         
                        <div className="mx-auto max-w-7xl space-y-12 px-4 py-4 sm:space-y-16 sm:px-6 lg:space-y-24 lg:px-8">
                            <div className="space-y-4 text-center">
                                <p className="text-sm font-medium uppercase">Blazers For Men</p>
                                <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">All New Collection</h2>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <div data-slot="card" className="bg-card text-card-foreground flex flex-col rounded-xl border group gap-0 py-0 shadow-none transition-all duration-300">
                                <div className="relative" aria-roledescription="carousel" data-slot="carousel">
                                    <div className="overflow-hidden" data-slot="carousel-content">
                                        <div className="flex -ml-4" >{/*  style="transform: translate3d(0px, 0px, 0px);"*/}
                                            <div aria-roledescription="slide" data-slot="carousel-item" className="flex items-center justify-center min-w-0 shrink-0 grow-0 basis-full pl-4"><img src="https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@5836d3cfdc6d204d154b7992ff888b6df3e6759e/uploads/2026-02-12T05-51-25-172Z-bqpydx82p.png" alt="Men suit" className="h-103.75" /></div>
                                            <div aria-roledescription="slide" data-slot="carousel-item" className="flex items-center justify-center min-w-0 shrink-0 grow-0 basis-full pl-4"><img src="https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@5836d3cfdc6d204d154b7992ff888b6df3e6759e/uploads/2026-02-12T05-51-25-172Z-bqpydx82p.png" alt="Men suit" className="h-103.75" /></div>
                                            <div aria-roledescription="slide" data-slot="carousel-item" className="flex items-center justify-center min-w-0 shrink-0 grow-0 basis-full pl-4"><img src="https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@5836d3cfdc6d204d154b7992ff888b6df3e6759e/uploads/2026-02-12T05-51-25-172Z-bqpydx82p.png" alt="Men suit" className="h-103.75" /></div>
                                        </div>
                                    </div>
                                    <div className="bg-card absolute bottom-0 flex w-full translate-y-full flex-col items-center gap-4 px-6 pt-4 opacity-0 duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                        <div className="flex gap-2"><br /></div><button data-slot="button" className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 border shadow-xs h-10 rounded-md px-6 has-[>svg]:px-4 w-full">Add to Cart<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" className="lucide lucide-shopping-cart" aria-hidden="true">
                                                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                                            </svg></button>
                                    </div>
                                </div>
                                <div data-slot="card-content" className="px-6 z-10 flex flex-col gap-1 py-6">
                                    <div className="flex items-center justify-between font-semibold">
                                        <h3 className="text-lg">DOC Ayam Kampung</h3><span className="text-2xl">Rp. 000</span>
                                    </div>
                                    <div className="flex items-center justify-between"><span className="text-muted-foreground">Ayam</span></div>
                                </div>
                            </div>
                            <div data-slot="card" className="bg-card text-card-foreground flex flex-col rounded-xl border group gap-0 py-0 shadow-none transition-all duration-300">
                                <div className="relative" aria-roledescription="carousel" data-slot="carousel">
                                    <div className="overflow-hidden" data-slot="carousel-content">
                                        <div className="flex -ml-4" >{/*  style="transform: translate3d(0px, 0px, 0px);"*/}
                                            <div aria-roledescription="slide" data-slot="carousel-item" className="flex items-center justify-center min-w-0 shrink-0 grow-0 basis-full pl-4"><img src="https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@e3a8ff34a8d74beae6ace2b9b853d2a50fce3773/uploads/2026-02-12T05-56-39-420Z-e1rah59mc.png" alt="Men suit" className="h-103.75" /></div>
                                            <div aria-roledescription="slide" data-slot="carousel-item" className="flex items-center justify-center min-w-0 shrink-0 grow-0 basis-full pl-4"><img src="https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@e3a8ff34a8d74beae6ace2b9b853d2a50fce3773/uploads/2026-02-12T05-56-39-420Z-e1rah59mc.png" alt="Men suit" className="h-103.75" /></div>
                                            <div aria-roledescription="slide" data-slot="carousel-item" className="flex items-center justify-center min-w-0 shrink-0 grow-0 basis-full pl-4"><img src="https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@e3a8ff34a8d74beae6ace2b9b853d2a50fce3773/uploads/2026-02-12T05-56-39-420Z-e1rah59mc.png" alt="Men suit" className="h-103.75" /></div>
                                        </div>
                                    </div>
                                    <div className="bg-card absolute bottom-0 flex w-full translate-y-full flex-col items-center gap-4 px-6 pt-4 opacity-0 duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                        <div className="flex gap-2"><br /></div><button data-slot="button" className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 border shadow-xs h-10 rounded-md px-6 has-[>svg]:px-4 w-full">Add to Cart<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" className="lucide lucide-shopping-cart" aria-hidden="true">
                                                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                                            </svg></button>
                                    </div>
                                </div>
                                <div data-slot="card-content" className="px-6 z-10 flex flex-col gap-1 py-6">
                                    <div className="flex items-center justify-between font-semibold">
                                        <h3 className="text-lg">Ayam Kampung Betina</h3><span className="text-2xl">Rp. 000</span>
                                    </div>
                                    <div className="flex items-center justify-between"><span className="text-muted-foreground">Ayam</span>
                                        <div className="flex items-center justify-between gap-2"><span className="line-through">Rp .000</span><span className="text-sm text-green-600 dark:text-green-400">---% Off</span></div>
                                    </div>
                                </div>                            
                            </div>                           

                            <div data-slot="card" className="bg-card text-card-foreground flex flex-col rounded-xl border group gap-0 py-0 shadow-none transition-all duration-300">
                                <div className="relative" aria-roledescription="carousel" data-slot="carousel">
                                    <div className="overflow-hidden" data-slot="carousel-content">
                                        <div className="flex -ml-4" > {/** style="transform: translate3d(0px, 0px, 0px);" */}
                                            <div aria-roledescription="slide" data-slot="carousel-item" className="flex items-center justify-center min-w-0 shrink-0 grow-0 basis-full pl-4"><img src="https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@76d2f18cbbb5d6294cad122fbc5b62baf1d4f5ba/uploads/2026-02-12T07-03-40-599Z-su0xe2suz.png" alt="Men suit" className="h-103.75" /></div>
                                            <div aria-roledescription="slide" data-slot="carousel-item" className="flex items-center justify-center min-w-0 shrink-0 grow-0 basis-full pl-4"><img src="https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@76d2f18cbbb5d6294cad122fbc5b62baf1d4f5ba/uploads/2026-02-12T07-03-40-599Z-su0xe2suz.png" alt="Men suit" className="h-103.75" /></div>
                                            <div aria-roledescription="slide" data-slot="carousel-item" className="flex items-center justify-center min-w-0 shrink-0 grow-0 basis-full pl-4"><img src="https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@76d2f18cbbb5d6294cad122fbc5b62baf1d4f5ba/uploads/2026-02-12T07-03-40-599Z-su0xe2suz.png" alt="Men suit" className="h-103.75" /></div>
                                        </div>
                                    </div>
                                    <div className="bg-card absolute bottom-0 flex w-full translate-y-full flex-col items-center gap-4 px-6 pt-4 opacity-0 duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                        <div className="flex gap-2"><br /></div><button data-slot="button" className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 border shadow-xs h-10 rounded-md px-6 has-[>svg]:px-4 w-full">Add to Cart<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" className="lucide lucide-shopping-cart" aria-hidden="true">
                                                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                                            </svg></button>
                                    </div>
                                </div>
                                <div data-slot="card-content" className="px-6 z-10 flex flex-col gap-1 py-6">
                                    <div className="flex items-center justify-between font-semibold">
                                        <h3 className="text-lg">Frozen_Native_Chicken</h3><span className="text-2xl">Rp. 000</span>
                                    </div>
                                    <div className="flex items-center justify-between"><span className="text-muted-foreground">Ayam, Frozen</span></div>
                                </div>
                            </div>
                            <div data-slot="card" className="bg-card text-card-foreground flex flex-col rounded-xl border group gap-0 py-0 shadow-none transition-all duration-300">
                                <div className="relative" aria-roledescription="carousel" data-slot="carousel">
                                    <div className="overflow-hidden" data-slot="carousel-content">
                                        <div className="flex -ml-4" > {/** style="transform: translate3d(0px, 0px, 0px);" */}
                                            <div aria-roledescription="slide" data-slot="carousel-item" className="flex items-center justify-center min-w-0 shrink-0 grow-0 basis-full pl-4"><img src="https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@f23f3bcbe88aa817beefd139e1864048af4bb8a6/uploads/2026-02-12T07-08-35-970Z-689dx58l9.png" alt="Men suit" className="h-103.75" /></div>
                                            <div aria-roledescription="slide" data-slot="carousel-item" className="flex items-center justify-center min-w-0 shrink-0 grow-0 basis-full pl-4"><img src="https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@f23f3bcbe88aa817beefd139e1864048af4bb8a6/uploads/2026-02-12T07-08-35-970Z-689dx58l9.png" alt="Men suit" className="h-103.75" /></div>
                                            <div aria-roledescription="slide" data-slot="carousel-item" className="flex items-center justify-center min-w-0 shrink-0 grow-0 basis-full pl-4"><img src="https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@f23f3bcbe88aa817beefd139e1864048af4bb8a6/uploads/2026-02-12T07-08-35-970Z-689dx58l9.png" alt="Men suit" className="h-103.75" /></div>
                                        </div>
                                    </div>
                                    <div className="bg-card absolute bottom-0 flex w-full translate-y-full flex-col items-center gap-4 px-6 pt-4 opacity-0 duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                        <div className="flex gap-2"><br /></div><button data-slot="button" className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 border shadow-xs h-10 rounded-md px-6 has-[>svg]:px-4 w-full">Add to Cart<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" className="lucide lucide-shopping-cart" aria-hidden="true">
                                                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                                            </svg></button>
                                    </div>
                                </div>
                                <div data-slot="card-content" className="px-6 z-10 flex flex-col gap-1 py-6">
                                    <div className="flex items-center justify-between font-semibold">
                                        <h3 className="text-lg">Telur Ayam Kampung</h3><span className="text-2xl">Rp .000</span>
                                    </div>
                                    <div className="flex items-center justify-between"><span className="text-muted-foreground">Ayam, Daging</span>
                                        <div className="flex items-center justify-between gap-2"><span className="line-through">Rp. 000</span><span className="text-sm text-green-600 dark:text-green-400">--% Off</span></div>
                                    </div>
                                </div>
                            </div>
                            <div data-slot="card" className="bg-card text-card-foreground flex flex-col rounded-xl border group gap-0 py-0 shadow-none transition-all duration-300">
                                <div className="relative" aria-roledescription="carousel" data-slot="carousel">
                                    <div className="overflow-hidden" data-slot="carousel-content">
                                        <div className="flex -ml-4" > {/**style="transform: translate3d(-749px, 0px, 0px);" */}
                                            <div aria-roledescription="slide" data-slot="carousel-item" className="flex items-center justify-center min-w-0 shrink-0 grow-0 basis-full pl-4"><img src="https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@7ede68d3dc1c8a65138b92cc464271bfda006a7d/uploads/2026-02-12T07-14-39-174Z-6o4qguvkp.png" alt="Men suit" className="h-103.75" /></div>
                                            <div aria-roledescription="slide" data-slot="carousel-item" className="flex items-center justify-center min-w-0 shrink-0 grow-0 basis-full pl-4"><img src="https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@7ede68d3dc1c8a65138b92cc464271bfda006a7d/uploads/2026-02-12T07-14-39-174Z-6o4qguvkp.png" alt="Men suit" className="h-103.75" /></div>
                                            <div aria-roledescription="slide" data-slot="carousel-item" className="flex items-center justify-center min-w-0 shrink-0 grow-0 basis-full pl-4"><img src="https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@7ede68d3dc1c8a65138b92cc464271bfda006a7d/uploads/2026-02-12T07-14-39-174Z-6o4qguvkp.png" alt="Men suit" className="h-103.75" /></div>
                                        </div>
                                    </div>
                                    <div className="bg-card absolute bottom-0 flex w-full translate-y-full flex-col items-center gap-4 px-6 pt-4 opacity-0 duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                        <div className="flex gap-2"><br /></div><button data-slot="button" className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 border shadow-xs h-10 rounded-md px-6 has-[>svg]:px-4 w-full">Add to Cart<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" className="lucide lucide-shopping-cart" aria-hidden="true">
                                                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                                            </svg></button>
                                    </div>
                                </div>
                                <div data-slot="card-content" className="px-6 z-10 flex flex-col gap-1 py-6">
                                    <div className="flex items-center justify-between font-semibold">
                                        <h3 className="text-lg">Ayam Kampung Pejantan</h3><span className="text-2xl">Rp. 000</span>
                                    </div>
                                    <div className="flex items-center justify-between"><span className="text-muted-foreground">Ayam</span></div>
                                </div>
                            </div>
                            <div data-slot="card" className="bg-card text-card-foreground flex flex-col rounded-xl border group gap-0 py-0 shadow-none transition-all duration-300">
                                <div className="relative" aria-roledescription="carousel" data-slot="carousel">
                                    <div className="overflow-hidden" data-slot="carousel-content">
                                        <div className="flex -ml-4" > {/** style="transform: translate3d(0px, 0px, 0px);" */}
                                            <div aria-roledescription="slide" data-slot="carousel-item" className="flex items-center justify-center min-w-0 shrink-0 grow-0 basis-full pl-4"><img src="https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@dd26c643cc88c067b5225453d7e1cc5332e37db5/uploads/2026-02-12T07-35-04-532Z-czubo9knp.png" alt="Men suit" className="h-103.75" /></div>
                                            <div aria-roledescription="slide" data-slot="carousel-item" className="flex items-center justify-center min-w-0 shrink-0 grow-0 basis-full pl-4"><img src="https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@dd26c643cc88c067b5225453d7e1cc5332e37db5/uploads/2026-02-12T07-35-04-532Z-czubo9knp.png" alt="Men suit" className="h-103.75" /></div>
                                            <div aria-roledescription="slide" data-slot="carousel-item" className="flex items-center justify-center min-w-0 shrink-0 grow-0 basis-full pl-4"><img src="https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@dd26c643cc88c067b5225453d7e1cc5332e37db5/uploads/2026-02-12T07-35-04-532Z-czubo9knp.png" alt="Men suit" className="h-103.75" /></div>
                                        </div>
                                    </div>
                                    <div className="bg-card absolute bottom-0 flex w-full translate-y-full flex-col items-center gap-4 px-6 pt-4 opacity-0 duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                        <div className="flex gap-2"><br /></div><button data-slot="button" className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 border shadow-xs h-10 rounded-md px-6 has-[>svg]:px-4 w-full">Add to Cart<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" className="lucide lucide-shopping-cart" aria-hidden="true">
                                                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                                            </svg></button>
                                    </div>
                                </div>
                                <div data-slot="card-content" className="px-6 z-10 flex flex-col gap-1 py-6">
                                    <div className="flex items-center justify-between font-semibold">
                                        <h3 className="text-lg">Ayam Kampung Indukan</h3><span className="text-2xl">Rp. 000</span>
                                    </div>
                                    <div className="flex items-center justify-between"><span className="text-muted-foreground">Ayam</span></div>
                                </div>
                            </div>
                          </div>


                                
                          
                        
            <div className="border-primary/10 relative flex border-t border-b"><br /></div>
        </section>
    </main>

  )  
}
