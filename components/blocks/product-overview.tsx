import Image from "next/image";
import { ChevronRight } from 'lucide-react';

export default function ProductOverviewBlock() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
       <section className="py-8 sm:py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-8 xl:gap-24">
                    <div className="flex flex-col gap-6">
                        <div>
                            <div className="relative w-full" role="region" aria-roledescription="carousel" data-slot="carousel">
                                <div className="overflow-hidden" data-slot="carousel-content">
                                    <div className="flex -ml-4" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
                                        <div role="group" aria-roledescription="slide" data-slot="carousel-item" className="min-w-0 shrink-0 grow-0 basis-full pl-4" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
                                            <div className="h-142 overflow-hidden rounded-md bg-gray-100"><Image src="https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-overview/image-5.png" alt="image-5" className="h-full w-full object-cover" /></div>
                                        </div>
                                        <div role="group" aria-roledescription="slide" data-slot="carousel-item" className="min-w-0 shrink-0 grow-0 basis-full pl-4">
                                            <div className="h-142 overflow-hidden rounded-md bg-gray-100"><Image src="https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-overview/image-2.png" alt="image-2" className="h-full w-full object-cover" /></div>
                                        </div>
                                        <div role="group" aria-roledescription="slide" data-slot="carousel-item" className="min-w-0 shrink-0 grow-0 basis-full pl-4">
                                            <div className="h-142 overflow-hidden rounded-md bg-gray-100"><Image src="https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-overview/image-3.png" alt="image-3" className="h-full w-full object-cover" /></div>
                                        </div>
                                        <div role="group" aria-roledescription="slide" data-slot="carousel-item" className="min-w-0 shrink-0 grow-0 basis-full pl-4">
                                            <div className="h-142 overflow-hidden rounded-md bg-gray-100">
                                              <Image src="https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-overview/image-1.png" alt="image-1" className="h-full w-full object-cover" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between gap-6">
                            <button type="button" className="cursor-pointer overflow-hidden rounded-md transition-all duration-200">
                              <Image src="https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-overview/image-5.png" alt="image-5" width={100} height={100} />
                            </button>
                          <button type="button" className="cursor-pointer overflow-hidden rounded-md transition-all duration-200">
                            <Image src="https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-overview/image-2.png" alt="image-2" width={100} height={100} />
                          </button>
                          <button type="button" className="cursor-pointer overflow-hidden rounded-md transition-all duration-200">
                            <Image src="https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-overview/image-3.png" alt="image-3"  width={100} height={100} />
                          </button>
                          <button type="button" className="cursor-pointer overflow-hidden rounded-md transition-all duration-200">
                            <Image src="https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-overview/image-1.png" alt="image-1" className="h-31 w-full object-cover"  width={100} height={100}  />
                          </button>
                        </div>
                    </div>
                    <div className="space-y-6 py-5">
                        <nav aria-label="breadcrumb" data-slot="breadcrumb" className="cn-breadcrumb">
                            <ol data-slot="breadcrumb-list" className="cn-breadcrumb-list flex flex-wrap items-center wrap-break-word">
                                <div className="flex items-center gap-2.5">
                                    <li data-slot="breadcrumb-item" className="cn-breadcrumb-item inline-flex items-center"><a data-slot="breadcrumb-link" className="cn-breadcrumb-link" href="#">Fashion</a></li>
                                    <li data-slot="breadcrumb-separator" role="presentation" aria-hidden="true" className="cn-breadcrumb-separator">
                                       <ChevronRight />  
                                      
                                    </li>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <li data-slot="breadcrumb-item" className="cn-breadcrumb-item inline-flex items-center"><a data-slot="breadcrumb-link" className="cn-breadcrumb-link" href="#">Menswear</a></li>
                                    <li data-slot="breadcrumb-separator" role="presentation" aria-hidden="true" className="cn-breadcrumb-separator">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                                    </li>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <li data-slot="breadcrumb-item" className="cn-breadcrumb-item inline-flex items-center"><span data-slot="breadcrumb-page" role="link" aria-disabled="true" aria-current="page" className="cn-breadcrumb-page">Classic leather jacket</span></li>
                                </div>
                            </ol>
                        </nav>
                        <h1 className="text-3xl font-semibold">Classic Leather Jacket</h1>
                        <div className="flex w-fit items-center rounded-sm border px-2.5 py-1.5">
                            <span className="me-2.5 flex items-center gap-1 border-e pe-2.5 text-sm"><span className="text-lg font-medium">4.3</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                            </span><span className="text-muted-foreground">210{/*<!-- -->*/} Reviews</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <p className="text-3xl font-bold">${/*<!-- -->*/}479.20</p>
                            <span className="text-muted-foreground font-medium line-through">MRP ${/*<!-- -->*/}599.00</span><span data-slot="badge" data-variant="default" className="cn-badge group/badge focus-visible:border-ring aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 inline-flex w-fit shrink-0 items-center justify-center overflow-hidden whitespace-nowrap focus-visible:ring-[3px] [&amp;&gt;svg]:pointer-events-none cn-badge-variant-default border-none bg-green-600/10 text-green-600 focus-visible:ring-green-600/20 focus-visible:outline-none dark:bg-green-400/10 dark:text-green-400 dark:focus-visible:ring-green-400/40 [a&amp;]:hover:bg-green-600/5 dark:[a&amp;]:hover:bg-green-400/5">20{/*<!-- -->*/}% Off</span>
                        </div>
                        <p className="text-muted-foreground">Elevate your style with our Classic Leather Jacket! Crafted from premium leather, this timeless piece combines durability with a sleek design, perfect for any occasion.</p>
                        <div data-orientation="horizontal" role="separator" aria-orientation="horizontal" data-slot="separator" className="bg-border shrink-0 data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch"></div>
                        <div className="flex items-center gap-6">
                            <h4 className="text-lg font-semibold text-nowrap">Jacket Color :</h4> 
                            <div role="radiogroup" data-slot="radio-group" className="cn-radio-group w-full flex gap-3!">
                                <label className="has-focus-visible:ring-ring/50 relative size-5 cursor-pointer rounded-full text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50 has-data-checked:outline-solid has-data-checked:outline has-data-checked:outline-offset-2 has-data-checked:outline-black bg-black"><span data-checked="" role="radio" tabIndex={0} aria-checked="true" data-composite-item-active="" id="base-ui-_R_suslubsnpfiv9fiv5uj9b_" data-slot="radio-group-item" aria-label="color-radio-black" className="cn-radio-group-item group/radio-group-item peer aspect-square shrink-0 border outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50 absolute inset-0 opacity-0"><span data-checked="" data-slot="radio-group-indicator" className="cn-radio-group-indicator"><span className="cn-radio-group-indicator-icon"></span></span></span><input type="radio" id="_R_4lubsnpfiv9fiv5uj9b_-black" tabIndex={-1}  style={{clipPath:"inset(50%)", overflow:"hidden", whiteSpace:"nowrap", border:0, padding:0, width:"1px", height:"1px", margin:"-1px", position:"fixed", top:0, left:0}} aria-hidden="true" checked value="black" />
                                </label>
                               <label className="has-focus-visible:ring-ring/50 relative size-5 cursor-pointer rounded-full text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50 has-data-checked:outline-solid has-data-checked:outline has-data-checked:outline-offset-2 has-data-checked:outline-green-600 bg-green-600"><span data-unchecked="" role="radio" tabIndex={-1} aria-checked="false" id="base-ui-_R_1cuslubsnpfiv9fiv5uj9b_" data-slot="radio-group-item" aria-label="color-radio-green" className="cn-radio-group-item group/radio-group-item peer aspect-square shrink-0 border outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50 absolute inset-0 opacity-0"></span><input type="radio" id="_R_4lubsnpfiv9fiv5uj9b_-green" tabIndex={-1} style={{clipPath:"inset(50%)", overflow:"hidden", whiteSpace:"nowrap", border:0, padding:0, width:"1px", height:"1px", margin:"-1px", position:"fixed", top:0, left:0}} aria-hidden="true" value="green" /></label>
                              <label className="has-focus-visible:ring-ring/50 relative size-5 cursor-pointer rounded-full text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50 has-data-checked:outline-solid has-data-checked:outline has-data-checked:outline-offset-2 has-data-checked:outline-amber-600 bg-amber-600"><span data-unchecked="" role="radio" tabIndex={-1} aria-checked="false" id="base-ui-_R_1suslubsnpfiv9fiv5uj9b_" data-slot="radio-group-item" aria-label="color-radio-orange" className="cn-radio-group-item group/radio-group-item peer aspect-square shrink-0 border outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50 absolute inset-0 opacity-0"></span><input type="radio" id="_R_4lubsnpfiv9fiv5uj9b_-orange" tabIndex={-1} style={{clipPath:"inset(50%)", overflow:"hidden", whiteSpace:"nowrap", border:0, padding:0, width:"1px", height:"1px", margin:"-1px", position:"fixed", top:0, left:0}} aria-hidden="true" value="orange" /></label>
                              <label className="has-focus-visible:ring-ring/50 relative size-5 cursor-pointer rounded-full text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50 has-data-checked:outline-solid has-data-checked:outline has-data-checked:outline-offset-2 has-data-checked:outline-gray-200 bg-gray-200"><span data-unchecked="" role="radio" tabIndex={-1} aria-checked="false" id="base-ui-_R_2cuslubsnpfiv9fiv5uj9b_" data-slot="radio-group-item" aria-label="color-radio-gray" className="cn-radio-group-item group/radio-group-item peer aspect-square shrink-0 border outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50 absolute inset-0 opacity-0"></span><input type="radio" id="_R_4lubsnpfiv9fiv5uj9b_-gray" tabIndex={-1} style={{clipPath:"inset(50%)", overflow:"hidden", whiteSpace:"nowrap", border:0, padding:0, width:"1px", height:"1px", margin:"-1px", position:"fixed", top:0, left:0}} aria-hidden="true" value="gray" /></label>
                              <label className="has-focus-visible:ring-ring/50 relative size-5 cursor-pointer rounded-full text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50 has-data-checked:outline-solid has-data-checked:outline has-data-checked:outline-offset-2 has-data-checked:outline-blue-500 bg-blue-500"><span data-unchecked="" role="radio" tabIndex={-1} aria-checked="false" id="base-ui-_R_2suslubsnpfiv9fiv5uj9b_" data-slot="radio-group-item" aria-label="color-radio-blue" className="cn-radio-group-item group/radio-group-item peer aspect-square shrink-0 border outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50 absolute inset-0 opacity-0"></span><input type="radio" id="_R_4lubsnpfiv9fiv5uj9b_-blue" tabIndex={-1} style={{clipPath:"inset(50%)", overflow:"hidden", whiteSpace:"nowrap", border:0, padding:0, width:"1px", height:"1px", margin:"-1px", position:"fixed", top:0, left:0}} aria-hidden="true" value="blue" /></label>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <h4 className="text-lg font-semibold text-nowrap">Jacket Size :</h4>
                            <div role="radiogroup" data-slot="radio-group" className="cn-radio-group w-full flex gap-3!">
                                <label className="border-input group has-data-checked:bg-primary has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex cursor-pointer flex-col items-center gap-3 rounded-md border px-2.5 py-1 text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50"><span data-unchecked="" role="radio" tabIndex={-1} aria-checked="false" id="base-ui-_R_4t2slubsnpfiv9fiv5uj9b_" data-slot="radio-group-item" aria-label="size-radio-XS" className="cn-radio-group-item group/radio-group-item peer aspect-square shrink-0 border outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50 absolute inset-0 opacity-0"></span><input type="radio" id="_R_4lubsnpfiv9fiv5uj9b_-XS" tabIndex={-1}style={{clipPath:"inset(50%)", overflow:"hidden", whiteSpace:"nowrap", border:0, padding:0, width:"1px", height:"1px", margin:"-1px", position:"fixed", top:0, left:0}} aria-hidden="true" value="XS" />
                                    <p className="text-foreground group-has-data-checked:text-primary-foreground pointer-events-none text-sm font-medium">XS</p>
                                </label><label className="border-input group has-data-checked:bg-primary has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex cursor-pointer flex-col items-center gap-3 rounded-md border px-2.5 py-1 text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50"><span data-unchecked="" role="radio" tabIndex={-1} aria-checked="false" id="base-ui-_R_5d2slubsnpfiv9fiv5uj9b_" data-slot="radio-group-item" aria-label="size-radio-S" className="cn-radio-group-item group/radio-group-item peer aspect-square shrink-0 border outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50 absolute inset-0 opacity-0"></span><input type="radio" id="_R_4lubsnpfiv9fiv5uj9b_-S" tabIndex={-1}style={{clipPath:"inset(50%)", overflow:"hidden", whiteSpace:"nowrap", border:0, padding:0, width:"1px", height:"1px", margin:"-1px", position:"fixed", top:0, left:0}} aria-hidden="true" value="S" />
                                    <p className="text-foreground group-has-data-checked:text-primary-foreground pointer-events-none text-sm font-medium">S</p>
                                </label><label className="border-input group has-data-checked:bg-primary has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex cursor-pointer flex-col items-center gap-3 rounded-md border px-2.5 py-1 text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50"><span data-unchecked="" role="radio" tabIndex={-1} aria-checked="false" id="base-ui-_R_5t2slubsnpfiv9fiv5uj9b_" data-slot="radio-group-item" aria-label="size-radio-M" className="cn-radio-group-item group/radio-group-item peer aspect-square shrink-0 border outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50 absolute inset-0 opacity-0"></span><input type="radio" id="_R_4lubsnpfiv9fiv5uj9b_-M" tabIndex={-1}style={{clipPath:"inset(50%)", overflow:"hidden", whiteSpace:"nowrap", border:0, padding:0, width:"1px", height:"1px", margin:"-1px", position:"fixed", top:0, left:0}} aria-hidden="true" value="M" />
                                    <p className="text-foreground group-has-data-checked:text-primary-foreground pointer-events-none text-sm font-medium">M</p>
                                </label><label className="border-input group has-data-checked:bg-primary has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex cursor-pointer flex-col items-center gap-3 rounded-md border px-2.5 py-1 text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50"><span data-checked="" role="radio" tabIndex={0} aria-checked="true" data-composite-item-active="" id="base-ui-_R_6d2slubsnpfiv9fiv5uj9b_" data-slot="radio-group-item" aria-label="size-radio-L" className="cn-radio-group-item group/radio-group-item peer aspect-square shrink-0 border outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50 absolute inset-0 opacity-0"><span data-checked="" data-slot="radio-group-indicator" className="cn-radio-group-indicator"><span className="cn-radio-group-indicator-icon"></span></span></span><input type="radio" id="_R_4lubsnpfiv9fiv5uj9b_-L" tabIndex={-1} style={{clipPath:"inset(50%)", overflow:"hidden", whiteSpace:"nowrap", border:0, padding:0, width:"1px", height:"1px", margin:"-1px", position:"fixed", top:0, left:0}} aria-hidden="true" checked value="L" />
                                    <p className="text-foreground group-has-data-checked:text-primary-foreground pointer-events-none text-sm font-medium">L</p>
                                </label><label className="border-input group has-data-checked:bg-primary has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex cursor-pointer flex-col items-center gap-3 rounded-md border px-2.5 py-1 text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50"><span data-unchecked="" role="radio" tabIndex={-1} aria-checked="false" id="base-ui-_R_6t2slubsnpfiv9fiv5uj9b_" data-slot="radio-group-item" aria-label="size-radio-XL" className="cn-radio-group-item group/radio-group-item peer aspect-square shrink-0 border outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50 absolute inset-0 opacity-0"></span><input type="radio" id="_R_4lubsnpfiv9fiv5uj9b_-XL" tabIndex={-1}  style={{clipPath:"inset(50%)", overflow:"hidden", whiteSpace:"nowrap", border:0, padding:0, width:"1px", height:"1px", margin:"-1px", position:"fixed", top:0, left:0}} aria-hidden="true" value="XL" />
                                    <p className="text-foreground group-has-data-checked:text-primary-foreground pointer-events-none text-sm font-medium">XL</p>
                                </label>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <button type="button" tabIndex={0} data-slot="button" className="cn-button group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 cn-button-variant-default cn-button-size-lg grow">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart"><path d="m2.05 2.05 1.099-.028a1 1 0 0 1 1.008.815l2.69 14.347A1 1 0 0 0 7.83 18H18"/><path d="M4.563 5h16.435a1 1 0 0 1 .981 1.204l-1.026 6.226A2 2 0 0 1 18.962 14H6.25"/><circle cx="18" cy="20" r="2"/><circle cx="8" cy="20" r="2"/></svg>
                              Add to Cart</button><button type="button" tabIndex={0} data-slot="button" className="cn-button group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 cn-button-variant-secondary cn-button-size-lg grow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>
                                Wish List</button>
                        </div>
                        <div className="rounded-md border *:not-last:border-b">
                            <div className="flex items-center gap-6 px-6 py-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-truck"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>
                                <div className="flex flex-col gap-1">
                                    <p className="text-lg font-semibold">Free Delivery</p>
                                    <p className="text-muted-foreground">Enter your postal code for delivery Availability</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 px-6 py-4">
                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-refresh-ccw"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg>
                                <div className="flex flex-col gap-1">
                                    <p className="text-lg font-semibold">Return Delivery</p>
                                    <p><span className="text-muted-foreground">Free 30 Days Delivery Returns.</span> <a href="#" className="underline">Details</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div> 
  );
}
