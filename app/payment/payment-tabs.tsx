"use client"

import { useState } from "react";

export default function PaymentTabs(){
    
    const [value, setValue] = useState('Enter your text here');
    const handleChange = (event: any) => setValue(event.target.value);

    return(
        <div>
            <div className="h-full w-full">
                <section className="bg-muted px-6 py-8 sm:py-16 lg:py-24">
                    <div className="mx-auto max-w-7xl">
                    <div data-slot="card" data-size="default" className="cn-card group/card flex flex-col border-0 shadow-none">
                        <div
                        data-slot="card-header"
                        className="cn-card-header group/card-header @container/card-header grid auto-rows-min items-start has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]"
                        >
                        <div data-slot="card-title" className="cn-card-title cn-font-heading text-2xl font-semibold">Payment</div>
                        </div>
                        <div data-slot="card-content" className="cn-card-content">
                        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                            <div className="space-y-6 lg:col-span-2">
                            <div role="radiogroup" data-slot="radio-group" className="cn-radio-group w-full">
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div
                                    className="border-input has-data-checked:border-primary/50 relative flex w-full flex-col gap-3 rounded-xl border p-4 outline-none"
                                >
                                    <div className="flex gap-3">
                                    <span
                                        data-checked=""
                                        role="radio"
                                        tabIndex={0}
                                        aria-checked="true"
                                        data-composite-item-active=""
                                        id="base-ui-_r_1_"
                                        data-slot="radio-group-item"
                                        aria-label="plan-radio-basic"
                                        aria-describedby="visa-description"
                                        className="cn-radio-group-item group/radio-group-item peer relative aspect-square shrink-0 border outline-none disabled:cursor-not-allowed disabled:opacity-50 size-5 after:absolute after:inset-0 [&amp;_svg]:size-3"
                                    
                                    >
                                        <span data-checked="" data-slot="radio-group-indicator" className="cn-radio-group-indicator">
                                        <span className="cn-radio-group-indicator-icon"></span>
                                        </span>
                                    </span>
                                    <input
                                        id="visa"
                                        tabIndex={-1}
                                        aria-hidden="true"
                                        type="radio"
                                        value="visa"
                                        checked={true}
                                        style={{
                                        clipPath: "inset(50%)",
                                        overflow: "hidden",
                                        whiteSpace: "nowrap",
                                        border: 0,
                                        padding: 0,
                                        width: 1,
                                        height: 1,
                                        margin: -1,
                                        position: "fixed",
                                        top: 0,
                                        left: 0,
                                        }}
                                        onChange={handleChange}
                                    />
                                    <div className="grid grow gap-1">
                                        <label
                                        data-slot="label"
                                        className="cn-label flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed text-base leading-6 font-semibold after:absolute after:inset-0"
                                        htmlFor="visa"
                                        >
                                        Visa ending in 7658
                                        </label>
                                        <p id="visa-description" className="text-muted-foreground text-sm">Expiry 10/2024</p>
                                    </div>
                                    </div>
                                    <div className="ml-8 flex items-center justify-between">
                                    <div className="text-muted-foreground flex items-center gap-2 text-sm">
                                        <a href="#">Delete</a>
                                        <span className="text-muted-foreground">|</span>
                                        <a href="#">Edit</a>
                                    </div>
                                    <div className="h-6 w-auto">
                                        <img
                                        alt="Visa"
                                        className="h-full w-auto object-contain"
                                        src="https://cdn.shadcnstudio.com/ss-assets/brand-logo/visa.png"
                                        />
                                    </div>
                                    </div>
                                </div>
                                <div
                                    className="border-input has-data-checked:border-primary/50 relative flex w-full flex-col gap-3 rounded-xl border p-4 outline-none"
                                >
                                    <div className="flex gap-3">
                                    <span
                                        data-unchecked=""
                                        role="radio"
                                        tabIndex={-1}
                                        aria-checked="false"
                                        id="base-ui-_r_3_"
                                        data-slot="radio-group-item"
                                        aria-label="plan-radio-basic"
                                        aria-describedby="mastercard-description"
                                        className="cn-radio-group-item group/radio-group-item peer relative aspect-square shrink-0 border outline-none disabled:cursor-not-allowed disabled:opacity-50 size-5 after:absolute after:inset-0 [&amp;_svg]:size-3"
                                    ></span>
                                    <input
                                        id="mastercard"
                                        tabIndex={-1}
                                        aria-hidden="true"
                                        type="radio"
                                        style={{
                                            clipPath: "inset(50%)",
                                            overflow: "hidden",
                                            whiteSpace: "nowrap",
                                            border: 0,
                                            padding: 0,
                                            width: 1,
                                            height: 1,
                                            margin: -1,
                                            position: "fixed",
                                            top: 0,
                                            left: 0,
                                        }}
                                        value={"mastercard"}
                                        onChange={handleChange}


                                    />
                                    <div className="grid grow gap-1">
                                        <label
                                        data-slot="label"
                                        className="cn-label flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed text-base leading-6 font-semibold after:absolute after:inset-0"
                                        htmlFor="mastercard"
                                        >
                                        Mastercard ending in 8489
                                        </label>
                                        <p id="mastercard-description" className="text-muted-foreground text-sm">Expiry 10/2024</p>
                                    </div>
                                    </div>
                                    <div className="ml-8 flex items-center justify-between">
                                    <div className="text-muted-foreground flex items-center gap-2 text-sm">
                                        <a href="#">Delete</a>
                                        <span className="text-muted-foreground">|</span>
                                        <a href="#">Edit</a>
                                    </div>
                                    <div className="h-6 w-auto">
                                        <img
                                        alt="Mastercard"
                                        className="h-full w-auto object-contain"
                                        src="https://cdn.shadcnstudio.com/ss-assets/brand-logo/master.png"
                                        />
                                    </div>
                                    </div>
                                </div>
                                <div
                                    className="border-input has-data-checked:border-primary/50 relative flex w-full flex-col gap-3 rounded-xl border p-4 outline-none"
                                >
                                    <div className="flex gap-3">
                                    <span
                                        data-unchecked=""
                                        role="radio"
                                        tabIndex={-1}
                                        aria-checked="false"
                                        id="base-ui-_r_5_"
                                        data-slot="radio-group-item"
                                        aria-label="plan-radio-basic"
                                        aria-describedby="paypal-description"
                                        className="cn-radio-group-item group/radio-group-item peer relative aspect-square shrink-0 border outline-none disabled:cursor-not-allowed disabled:opacity-50 size-5 after:absolute after:inset-0 [&amp;_svg]:size-3"
                                    ></span>
                                    <input
                                        id="paypal"
                                        tabIndex={-1}
                                        aria-hidden="true"
                                        type="radio"
                                        value="paypal"
                                        style={{
                                            clipPath: "inset(50%)",
                                            overflow: "hidden",
                                            whiteSpace: "nowrap",
                                            border: 0,
                                            padding: 0,
                                            width: 1,
                                            height: 1,
                                            margin: -1,
                                            position: "fixed",
                                            top: 0,
                                            left: 0,
                                        }}
                                    />
                                    <div className="grid grow gap-1">
                                        <label
                                        data-slot="label"
                                        className="cn-label flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed text-base leading-6 font-semibold after:absolute after:inset-0"
                                        htmlFor="paypal"
                                        >
                                        Paypal ending in 8489
                                        </label>
                                        <p id="paypal-description" className="text-muted-foreground text-sm">Expiry 10/2024</p>
                                    </div>
                                    </div>
                                    <div className="ml-8 flex items-center justify-between">
                                    <div className="text-muted-foreground flex items-center gap-2 text-sm">
                                        <a href="#">Delete</a>
                                        <span className="text-muted-foreground">|</span>
                                        <a href="#">Edit</a>
                                    </div>
                                    <div className="h-6 w-auto">
                                        <img
                                        alt="PayPal"
                                        className="h-full w-auto object-contain"
                                        src="https://cdn.shadcnstudio.com/ss-assets/brand-logo/paypal-icon.png"
                                        />
                                    </div>
                                    </div>
                                </div>
                                <div
                                    className="border-input has-data-checked:border-primary/50 relative flex w-full flex-col gap-3 rounded-xl border p-4 outline-none"
                                >
                                    <div className="flex gap-3">
                                    <span
                                        data-unchecked=""
                                        role="radio"
                                        tabIndex={-1}
                                        aria-checked="false"
                                        id="base-ui-_r_7_"
                                        data-slot="radio-group-item"
                                        aria-label="plan-radio-basic"
                                        aria-describedby="amazon-description"
                                        className="cn-radio-group-item group/radio-group-item peer relative aspect-square shrink-0 border outline-none disabled:cursor-not-allowed disabled:opacity-50 size-5 after:absolute after:inset-0 [&amp;_svg]:size-3"
                                    ></span>
                                    <input
                                        id="amazon"
                                        tabIndex={-1}
                                        aria-hidden="true"
                                        type="radio"
                                        value="amazon"
                                        style={{
                                            clipPath: "inset(50%)",
                                            overflow: "hidden",
                                            whiteSpace: "nowrap",
                                            border: 0,
                                            padding: 0,
                                            width: 1,
                                            height: 1,
                                            margin: -1,
                                            position: "fixed",
                                            top: 0,
                                            left: 0,
                                        }}
                                    />
                                    <div className="grid grow gap-1">
                                        <label
                                        data-slot="label"
                                        className="cn-label flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed text-base leading-6 font-semibold after:absolute after:inset-0"
                                        htmlFor="amazon"
                                        >
                                        Amazon Pay
                                        </label>
                                        <p id="amazon-description" className="text-muted-foreground text-sm">Expiry 10/2024</p>
                                    </div>
                                    </div>
                                    <div className="ml-8 flex items-center justify-between">
                                    <div className="text-muted-foreground flex items-center gap-2 text-sm">
                                        <a href="#">Delete</a>
                                        <span className="text-muted-foreground">|</span>
                                        <a href="#">Edit</a>
                                    </div>
                                    <div className="h-6 w-auto">
                                        <img
                                        alt="Amazon Pay"
                                        className="h-full w-auto object-contain"
                                        src="https://cdn.shadcnstudio.com/ss-assets/brand-logo/amazon-pay.png"
                                        />
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="my-6 flex items-center justify-center">
                                <div
                                data-orientation="horizontal"
                                role="separator"
                                aria-orientation="horizontal"
                                data-slot="separator"
                                className="bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch flex-1"
                                ></div>
                                <span className="text-muted-foreground px-6 text-lg">or</span>
                                <div
                                data-orientation="horizontal"
                                role="separator"
                                aria-orientation="horizontal"
                                data-slot="separator"
                                className="bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch flex-1"
                                ></div>
                            </div>
                            <h5 className="text-muted-foreground text-base">Add a new payment method</h5>
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div className="space-y-1.5">
                                <label
                                    data-slot="label"
                                    className="cn-label flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed text-base font-medium"
                                    htmlFor="full-name"
                                >
                                    Full name (as displayed on Card)*
                                </label>
                                <input
                                    id="full-name"
                                    data-slot="input"
                                    placeholder="John Doe"
                                    className="cn-input file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                                    type="text"
                                />
                                </div>
                                <div className="space-y-1.5">
                                <label
                                    data-slot="label"
                                    className="cn-label flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed text-base font-medium"
                                    htmlFor="card-number"
                                >
                                    Card Number*
                                </label>
                                <input
                                    id="card-number"
                                    data-slot="input"
                                    placeholder="xxxx xxxx xxxx xxxx"
                                    className="cn-input file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                                    type="text"
                                />
                                </div>
                                <div className="space-y-1.5">
                                <label
                                    data-slot="label"
                                    className="cn-label flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed text-base font-medium"
                                    htmlFor="card-expiration"
                                >
                                    Card expiration*
                                </label>
                                <input
                                    id="card-expiration"
                                    data-slot="input"
                                    placeholder="MM/YY"
                                    className="cn-input file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                                    type="text"
                                />
                                </div>
                                <div className="space-y-1.5">
                                <label
                                    data-slot="label"
                                    className="cn-label flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed text-base font-medium"
                                    htmlFor="card-cvv"
                                >
                                    CVV*
                                </label>
                                <input
                                    id="card-cvv"
                                    data-slot="input"
                                    placeholder="123"
                                    className="cn-input file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                                    type="number"
                                />
                                </div>
                            </div>
                            <button
                                type="button"
                                tabIndex={0}
                                data-slot="button"
                                className="cn-button group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 cn-button-variant-default cn-button-size-default w-full"
                            >
                                Pay Now
                            </button>
                            <p className="text-muted-foreground text-base">
                                Payment processed by
                                <a href="#" className="text-primary underline">Paddle</a>
                                for
                                <a href="#" className="text-primary underline">ShadcnStudio</a>
                                - United States Of America
                            </p>
                            </div>
                            <div className="flex flex-col gap-6">
                            <div
                                data-slot="card"
                                data-size="default"
                                className="cn-card group/card flex flex-col bg-muted rounded-md ring-0"
                            >
                                <div data-slot="card-content" className="cn-card-content space-y-4">
                                <div className="flex items-center justify-between gap-3">
                                    <span className="text-muted-foreground text-base">Original price</span>
                                    <span className="text-base font-semibold">$6,592.00</span>
                                </div>
                                <div className="flex items-center justify-between gap-3">
                                    <span className="text-muted-foreground text-base">Savings</span>
                                    <span className="text-base font-semibold text-green-600 dark:text-green-400">-$299.00</span>
                                </div>
                                <div className="flex items-center justify-between gap-3">
                                    <span className="text-muted-foreground text-base">Store pickup</span>
                                    <span className="text-base font-semibold">$99</span>
                                </div>
                                <div className="flex items-center justify-between gap-3">
                                    <span className="text-muted-foreground text-base">Tax</span>
                                    <span className="text-base font-semibold">$799</span>
                                </div>
                                </div>
                                <div data-slot="card-content" className="cn-card-content">
                                <div
                                    data-orientation="horizontal"
                                    role="separator"
                                    aria-orientation="horizontal"
                                    data-slot="separator"
                                    className="bg-border shrink-0 data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch"
                                ></div>
                                </div>
                                <div data-slot="card-content" className="cn-card-content flex items-center justify-between gap-3">
                                <span className="text-xl font-semibold">Total</span>
                                <span className="text-xl font-semibold">$1198.00</span>
                                </div>
                            </div>
                            <div className="bg-muted flex gap-2 rounded-lg px-2.5 py-2">
                                <svg
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="remixicon mt-1 size-5 shrink-0"
                                >
                                <path
                                    d="M8.96456 18C8.72194 19.6961 7.26324 21 5.5 21C3.73676 21 2.27806 19.6961 2.03544 18H1V6C1 5.44772 1.44772 5 2 5H16C16.5523 5 17 5.44772 17 6V8H20L23 12.0557V18H20.9646C20.7219 19.6961 19.2632 21 17.5 21C15.7368 21 14.2781 19.6961 14.0354 18H8.96456ZM15 7H3V15.0505C3.63526 14.4022 4.52066 14 5.5 14C6.8962 14 8.10145 14.8175 8.66318 16H14.3368C14.5045 15.647 14.7296 15.3264 15 15.0505V7ZM17 13H21V12.715L18.9917 10H17V13ZM17.5 19C18.1531 19 18.7087 18.5826 18.9146 18C18.9699 17.8436 19 17.6753 19 17.5C19 16.6716 18.3284 16 17.5 16C16.6716 16 16 16.6716 16 17.5C16 17.6753 16.0301 17.8436 16.0854 18C16.2913 18.5826 16.8469 19 17.5 19ZM7 17.5C7 16.6716 6.32843 16 5.5 16C4.67157 16 4 16.6716 4 17.5C4 17.6753 4.03008 17.8436 4.08535 18C4.29127 18.5826 4.84689 19 5.5 19C6.15311 19 6.70873 18.5826 6.91465 18C6.96992 17.8436 7 17.6753 7 17.5Z"
                                ></path>
                                </svg>
                                <div className="space-y-0.5">
                                <h5 className="text-lg font-medium">Free Shipping</h5>
                                <p className="text-primary/80 text-base">
                                    You have 3 months to try free shipping and exclusive Genius offers.
                                </p>
                                </div>
                            </div>
                            <div className="bg-muted flex gap-2 rounded-lg px-2.5 py-2">
                                <svg
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="remixicon mt-1 size-5 shrink-0"
                                >
                                <path
                                    d="M10.0544 2.0941C11.1756 1.13856 12.8248 1.13855 13.9461 2.09411L15.2941 3.24286C15.4542 3.37935 15.6533 3.46182 15.8631 3.47856L17.6286 3.61945C19.0971 3.73663 20.2633 4.9028 20.3805 6.37131L20.5214 8.13679C20.5381 8.34654 20.6205 8.54568 20.757 8.70585L21.9058 10.0539C22.8614 11.1751 22.8614 12.8243 21.9058 13.9456L20.757 15.2935C20.6206 15.4537 20.538 15.6529 20.5213 15.8627L20.3805 17.6281C20.2633 19.0967 19.0971 20.2628 17.6286 20.3799L15.8631 20.5208C15.6533 20.5376 15.4542 20.6201 15.2941 20.7566L13.9461 21.9053C12.8248 22.8609 11.1756 22.8608 10.0543 21.9053L8.70631 20.7566C8.54615 20.6201 8.34705 20.5376 8.1373 20.5209L6.37184 20.3799C4.9033 20.2627 3.73716 19.0966 3.61997 17.6281L3.47906 15.8627C3.46232 15.6529 3.37983 15.4538 3.24336 15.2936L2.0946 13.9455C1.13905 12.8243 1.13904 11.1752 2.09458 10.0539L3.24334 8.70589C3.37983 8.54573 3.46234 8.34654 3.47907 8.13678L3.61996 6.3713C3.73714 4.90278 4.90327 3.73665 6.3718 3.61946L8.13729 3.47857C8.34705 3.46183 8.54619 3.37935 8.70636 3.24286L10.0544 2.0941ZM12.6488 3.61632C12.2751 3.29782 11.7253 3.29781 11.3516 3.61632L10.0036 4.76509C9.5231 5.17456 8.92568 5.42201 8.29637 5.47223L6.5309 5.61312C6.04139 5.65219 5.65268 6.04089 5.61362 6.53041L5.47272 8.29593C5.4225 8.92521 5.17505 9.52259 4.76559 10.0031L3.61683 11.3511C3.29832 11.7248 3.29831 12.2746 3.61683 12.6483L4.76559 13.9963C5.17506 14.4768 5.4225 15.0743 5.47275 15.7035L5.61363 17.469C5.65268 17.9585 6.04139 18.3473 6.53092 18.3863L8.29636 18.5272C8.92563 18.5774 9.5231 18.8249 10.0036 19.2344L11.3516 20.3831C11.7254 20.7016 12.2751 20.7016 12.6488 20.3831L13.9969 19.2343C14.4773 18.8249 15.0747 18.5774 15.704 18.5272L17.4695 18.3863C17.959 18.3472 18.3478 17.9585 18.3868 17.469L18.5277 15.7035C18.5779 15.0742 18.8253 14.4768 19.2349 13.9964L20.3836 12.6483C20.7022 12.2746 20.7021 11.7249 20.3836 11.3511L19.2348 10.0031C18.8253 9.52259 18.5779 8.92519 18.5277 8.2959L18.3868 6.53041C18.3478 6.0409 17.959 5.65219 17.4695 5.61312L15.704 5.47224C15.0748 5.42203 14.4773 5.17455 13.9968 4.76508L12.6488 3.61632ZM14.8284 7.75718L16.2426 9.1714L9.17154 16.2425L7.75733 14.8282L14.8284 7.75718ZM10.2322 10.232C9.64641 10.8178 8.69667 10.8178 8.11088 10.232C7.52509 9.6463 7.52509 8.69652 8.11088 8.11073C8.69667 7.52494 9.64641 7.52494 10.2322 8.11073C10.818 8.69652 10.818 9.6463 10.2322 10.232ZM13.7677 15.8889C14.3535 16.4747 15.3032 16.4747 15.889 15.8889C16.4748 15.3031 16.4748 14.3534 15.889 13.7676C15.3032 13.1818 14.3535 13.1818 13.7677 13.7676C13.1819 14.3534 13.1819 15.3031 13.7677 15.8889Z"
                                ></path>
                                </svg>
                                <div className="space-y-0.5">
                                <h5 className="text-lg font-medium">10% Extra</h5>
                                <p className="text-primary/80 text-base">
                                    You get 10% extra when purchasing this product, for orders of at least $100!
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
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

        </div>


    )
}

