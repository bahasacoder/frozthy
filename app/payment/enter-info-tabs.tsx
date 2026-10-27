"use client"
import React from "react"
import Link from "next/link"
import YourCart from "./your-cart";
import ShoppingInfo from "./shopping-info";
import CustomerInfo from "./customer-info";

export default function EnterInfoTabs() {
    const [value, setValue] = useState('Enter your text here');
    const handleChange = (event: any) => setValue(event.target.value);

    return (
        <div>
            <h1>DATA PEMBELI</h1>
            <div className="h-full w-full">
                <section className="bg-muted py-8 sm:py-16 lg:py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-5">
                        {/* -- sisi kiri -- */}
                            {/* Your Card Card Info */}
                            <ShoppingInfo />                            
                        
                        {/* --sisi kanan --*/}                        
                            
                            <CustomerInfo />
                        {/* END  */}
                      
                    </div>
                    <button
                                    type="button"
                                    tabIndex={0}
                                    data-slot="button"
                                    className="cn-button group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 cn-button-variant-default cn-button-size-lg 
                                        w-full bg-blue-300 rounded-full p-2"
                                >
                                    Checkput
                                </button>
                    </div>
                </section>
                <section
                    aria-label="Notifications alt+T"
                    tabIndex={-1}
                    aria-live="polite"
                    aria-relevant="additions text"
                    aria-atomic="false"
                >
                    Next
                </section>
                </div> 
            <div>
            </div>       
        </div>
    )
}
function useState(arg0: string): [any, any] {
    return React.useState(arg0);
}

