import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
export default function CartPageContent(){
    return (
        <div className="h-full w-full">
            <section className="py-8 sm:py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                      {/*---- */}  

                        <div className="space-y-3 px-6 lg:col-span-2">
                            <div className="flex w-full items-center justify-between">
                                <h2 className="text-2xl font-semibold">Your Cart - cartPage</h2>
                                <div className="text-muted-foreground">
                                3
                                Items in cart
                                </div>
                            </div>
                            {/* Cart Items Baris 1 */}
                            <div className="flex gap-6 border-t pt-7 pb-4 max-sm:flex-col sm:items-center">
                                <div className="flex grow items-center gap-4">
                                    

                                    <div className="flex flex-col justify-between gap-4">
                                        <div className="flex flex-col gap-2">
                                            <h3 className="font-medium">Women Solid Sweatshirt</h3>
                                            <p className="text-muted-foreground">
                                                Size:
                                                M
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="remixicon size-5">
                                                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z"></path>
                                            </svg>
                                            <p className="text-muted-foreground text-sm">7 days return Available</p>
                                        </div>
                                    </div>

                                </div>                            
                                <div className="flex items-center gap-12">
                                    <button type="button" tabIndex={-1} id="base-ui-_R_cpinpfiv5ubr9fiv5uj9b_" role="combobox" aria-expanded="false" aria-haspopup="listbox" data-slot="select-trigger" data-size="default" className="cn-select-trigger flex items-center justify-between whitespace-nowrap outline-none disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 w-25 shadow-none">
                                        <span data-slot="select-value" className="cn-select-value">1</span>
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" aria-hidden="true" className="remixicon cn-select-trigger-icon pointer-events-none">
                                        <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                                        </svg>
                                    </button>
                                    {/*
                                    <input style={{" clippath:="" "inset(50%)",="" overflow:="" "hidden",="" whitespace:="" "nowrap",="" border:="" 0,="" padding:="" width:="" "1px",="" height:="" margin:="" "-1px",="" position:="" "fixed",="" top:="" left:="" }}="" tabIndex={-1}" aria-hidden="true" value="1">
                                    */}
                                    <p className="text-lg font-semibold">
                                        $
                                        12.00
                                    </p>
                                    <button type="button" tabIndex={0} data-slot="popover-trigger" data-base-ui-click-trigger="" id="base-ui-_R_3spinpfiv5ubr9fiv5uj9b_" className="cn-button group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 cn-button-variant-ghost cn-button-size-icon cursor-pointer" aria-haspopup="dialog" aria-expanded="false">
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="remixicon size-6">
                                        <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path>
                                        </svg>
                                        <span className="sr-only">Delete Item</span>
                                    </button>
                                </div>
                            </div>
                            {/* Cart Items Baris 2 */}
                            <div className="flex gap-6 border-t pt-7 pb-4 max-sm:flex-col sm:items-center">
                                <div className="flex grow items-center gap-4">
                                    <label data-slot="label" className="cn-label flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed group relative cursor-pointer">
                                        <span data-checked="" role="checkbox" tabIndex={0} id="base-ui-_R_1b9inpfiv5ubr9fiv5uj9b_" aria-checked="true" data-slot="checkbox" className="cn-checkbox peer shrink-0 outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50 absolute top-2 left-2 hidden size-4 group-hover:block hover:border-black data-checked:block **:[svg]:size-3!">
                                        <span data-checked="" data-slot="checkbox-indicator" className="cn-checkbox-indicator grid place-content-center text-current transition-none">
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor">
                                            <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
                                            </svg>
                                        </span>
                                        </span>
                                        {/*
                                        <input style={{" clippath:="" "inset(50%)",="" overflow:="" "hidden",="" whitespace:="" "nowrap",="" border:="" 0,="" padding:="" width:="" "1px",="" height:="" margin:="" "-1px",="" position:="" "fixed",="" top:="" left:="" }}="" tabIndex={-1}" type="checkbox" aria-hidden="true" checked={true}">
                                        */}
                                        <div className="size-25">
                                        <img src="https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/shopping-cart/image-2.png" alt="Women Hooded Sweatshirt" className="rounded-md object-cover" />
                                        </div>
                                    </label>
                                    <div className="flex flex-col justify-between gap-4">
                                        <div className="flex flex-col gap-2">
                                            <h3 className="font-medium">Women Hooded Sweatshirt</h3>
                                            <p className="text-muted-foreground">
                                                Size:
                                                L
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="remixicon size-5">
                                                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z"></path>
                                            </svg>
                                            <p className="text-muted-foreground text-sm">7 days return Available</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-12">
                                    <button type="button" tabIndex={0} id="base-ui-_R_d9inpfiv5ubr9fiv5uj9b_" role="combobox" aria-expanded="false" aria-haspopup="listbox" data-slot="select-trigger" data-size="default" className="cn-select-trigger flex items-center justify-between whitespace-nowrap outline-none disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 w-25 shadow-none">
                                        <span data-slot="select-value" className="cn-select-value">1</span>
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" aria-hidden="true" className="remixicon cn-select-trigger-icon pointer-events-none">
                                        <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                                        </svg>
                                    </button>
                                    {/*
                                    <input style={{" clippath:="" "inset(50%)",="" overflow:="" "hidden",="" whitespace:="" "nowrap",="" border:="" 0,="" padding:="" width:="" "1px",="" height:="" margin:="" "-1px",="" position:="" "fixed",="" top:="" left:="" }}="" tabIndex={-1}" aria-hidden="true" value="1">
                                    */}
                                    <p className="text-lg font-semibold">
                                        $
                                        32.00
                                    </p>
                                    <button type="button" tabIndex={0} data-slot="popover-trigger" data-base-ui-click-trigger="" id="base-ui-_R_3t9inpfiv5ubr9fiv5uj9b_" className="cn-button group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 cn-button-variant-ghost cn-button-size-icon cursor-pointer" aria-haspopup="dialog" aria-expanded="false">
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="remixicon size-6">
                                        <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path>
                                        </svg>
                                        <span className="sr-only">Delete Item</span>
                                    </button>
                                </div>
                            </div>
                            {/* Cart Items Baris 3 */}
                            <div className="flex gap-6 border-t pt-7 pb-4 max-sm:flex-col sm:items-center">
                                <div className="flex grow items-center gap-4">
                                    <label data-slot="label" className="cn-label flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed group relative cursor-pointer">
                                        <span data-checked="" role="checkbox" tabIndex={0} id="base-ui-_R_1bpinpfiv5ubr9fiv5uj9b_" aria-checked="true" data-slot="checkbox" className="cn-checkbox peer shrink-0 outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50 absolute top-2 left-2 hidden size-4 group-hover:block hover:border-black data-checked:block **:[svg]:size-3!">
                                            <span data-checked="" data-slot="checkbox-indicator" className="cn-checkbox-indicator grid place-content-center text-current transition-none">
                                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="remixicon">
                                                <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
                                                </svg>
                                            </span>
                                        </span>
                                        {/*
                                        <input style={{" clippath:="" "inset(50%)",="" overflow:="" "hidden",="" whitespace:="" "nowrap",="" border:="" 0,="" padding:="" width:="" "1px",="" height:="" margin:="" "-1px",="" position:="" "fixed",="" top:="" left:="" }}="" tabIndex={-1}" type="checkbox" aria-hidden="true" checked={false}">
                                        */}
                                        <div className="size-25">
                                            <img src="https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/shopping-cart/image-1.png" alt="Hooded Crop Sweatshirt" className="rounded-md object-cover" />
                                        </div>
                                    </label>
                                    <div className="flex flex-col justify-between gap-4">
                                        <div className="flex flex-col gap-2">
                                            <h3 className="font-medium">Hooded Crop Sweatshirt</h3>
                                            <p className="text-muted-foreground">
                                                Size:
                                                L
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="remixicon size-5">
                                                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z"></path>
                                            </svg>
                                            <p className="text-muted-foreground text-sm">7 days return Available</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-12">
                                    <button type="button" tabIndex={0} id="base-ui-_R_dpinpfiv5ubr9fiv5uj9b_" role="combobox" aria-expanded="false" aria-haspopup="listbox" data-slot="select-trigger" data-size="default" className="cn-select-trigger flex items-center justify-between whitespace-nowrap outline-none disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 w-25 shadow-none">
                                        <span data-slot="select-value" className="cn-select-value">1</span>
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="remixicon cn-select-trigger-icon pointer-events-none">
                                        <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                                        </svg>
                                    </button>
                                    {/*
                                    <input style={{" clippath:="" "inset(50%)",="" overflow:="" "hidden",="" whitespace:="" "nowrap",="" border:="" 0,="" padding:="" width:="" "1px",="" height:="" margin:="" "-1px",="" position:="" "fixed",="" top:="" left:="" }}="" tabIndex={-1}" aria-hidden="true" value="1">
                                    */}
                                    <p className="text-lg font-semibold">
                                        $
                                        15.00
                                    </p>
                                    <button type="button" tabIndex={0} data-slot="popover-trigger" data-base-ui-click-trigger="" id="base-ui-_R_3tpinpfiv5ubr9fiv5uj9b_" className="cn-button group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 cn-button-variant-ghost cn-button-size-icon cursor-pointer" aria-haspopup="dialog" aria-expanded="false">
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="remixicon size-6">
                                        <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path>
                                        </svg>
                                        <span className="sr-only">Delete Item</span>
                                    </button>
                                </div>
                            </div>
                            {/* Cart Items Habis */}
                        </div>
                        {/* Side Kanan */}      
                        <div className="space-y-6">
                        
                            <div
                                data-slot="card"
                                data-size="default"
                                className="cn-card group/card flex flex-col w-full max-w-md shadow-none ring-0"
                            >
                                <div
                                    data-slot="card-header"
                                    className="cn-card-header group/card-header @container/card-header grid auto-rows-min items-start has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] gap-2"
                                >
                                    <div data-slot="card-title" className="cn-card-title cn-font-heading text-xl font-semibold">Apply Coupon</div>
                                    <div data-slot="card-description" className="cn-card-description text-base">Using a Promo Code ?</div>
                                </div>
                                <div data-slot="card-content" className="cn-card-content">
                                    <form>
                                        <div className="flex grow gap-2.5 sm:justify-end">
                                        <input
                                            id="base-ui-_R_36inpfiv5ubr9fiv5uj9b_"
                                            type="text"
                                            data-slot="input"
                                            placeholder="Coupon Code"
                                            className="cn-input file:text-foreground placeholder:text-muted-foreground min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 input-lg w-full"
                                        />
                                        <button
                                            type="submit"
                                            tabIndex={0}
                                            data-slot="button"
                                            className="cn-button group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 cn-button-variant-default cn-button-size-lg"
                                        >
                                            Apply
                                        </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            
                            <div
                                data-slot="card"
                                data-size="default"
                                className="cn-card group/card flex flex-col w-full max-w-md text-base shadow-none ring-0"
                            >
                                <div
                                    data-slot="card-header"
                                    className="cn-card-header group/card-header @container/card-header grid auto-rows-min items-start has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]"
                                    >
                                        <div data-slot="card-title" className="cn-card-title cn-font-heading text-xl font-semibold">
                                            Price Details
                                        </div>
                                </div>
                                    <div data-slot="card-content" className="cn-card-content space-y-5">
                                        <div
                                            data-orientation="horizontal"
                                            role="separator"
                                            aria-orientation="horizontal"
                                            data-slot="separator"
                                            className="bg-border shrink-0 data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch"
                                        ></div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-muted-foreground">Subtotal</span>
                                            <span className="font-medium">
                                            $
                                            59.00
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-muted-foreground">
                                            Tax
                                            <span className="text-muted-foreground ms-0.5 text-xs">
                                                10
                                                %
                                            </span>
                                            </span>
                                            <span className="font-medium">
                                            +$
                                            5.90
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-muted-foreground">Shipping</span>
                                            <span className="font-medium">Free Delivery</span>
                                        </div>
                                        <div
                                            data-orientation="horizontal"
                                            role="separator"
                                            aria-orientation="horizontal"
                                            data-slot="separator"
                                            className="bg-border shrink-0 data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch"
                                        ></div>
                                        <div className="flex items-center justify-between text-lg font-semibold">
                                            <span>Total</span>
                                            <span>
                                            $
                                            64.90
                                            </span>
                                        </div>
                                    </div>
                                    <div data-slot="card-content" className="cn-card-content flex flex-col items-start gap-3.5">
                                        <button
                                            type="submit"
                                            tabIndex={0}
                                            data-slot="button"
                                            className="cn-button group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 cn-button-variant-default cn-button-size-lg w-full"
                                        >
                                            Confirm Payment
                                        </button>
                                        <div className="flex items-center gap-2">
                                            <p>We Accept:</p>
                                            <div className="flex items-center gap-4">
                                                <img src="https://cdn.shadcnstudio.com/ss-assets/brand-logo/visa.png" alt="Visa" className="h-4" />
                                                <img
                                                    src="https://cdn.shadcnstudio.com/ss-assets/brand-logo/paypal-icon.png"
                                                    alt="PayPal"
                                                    className="h-4"
                                                />
                                                <img
                                                    src="https://cdn.shadcnstudio.com/ss-assets/brand-logo/master.png"
                                                    alt="Mastercard"
                                                    className="h-4"
                                                />
                                            </div>
                                        </div>
                                </div>
                            </div>

                        

                        </div>{/* Batas side kanan*/}

                        
                    </div>
                </div>
            </section>
            <section
                    aria-label="Notifications alt+T"
                    tabIndex={-1}
                    aria-live="polite"
                    aria-relevant="additions text"
                    aria-atomic="false"
            ></section>
        </div>

    )
}