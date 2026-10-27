"use client";
import { useState } from "react";

export default function ImageBlock() {
    const [mainProductImage, updateMainProductImage] = useState("https://iili.io/nwI8JI4.jpg");

    function setMainProductImage(arg0: string): void {
        updateMainProductImage(arg0);
    }

    return (
        <div className="lg:col-span-6 space-y-4">
                {/*  <!-- Main Image Container --> */}
                <div className="bg-white p-4 rounded-2xl border border-amber-100 shadow-sm overflow-hidden aspect-square flex items-center justify-center group">
                    <img id="mainProductImage" src={mainProductImage} alt="Telur Ayam Kampung Asli Premium" className="object-cover w-full h-full rounded-xl transform transition-transform duration-500 group-hover:scale-105" />
                </div>
                {/* <!-- Thumbnails Grid --> */}
                <div className="grid grid-cols-3 gap-4">
                    <button onClick={() => setMainProductImage("https://iili.io/nwIvykG.jpg")} className="bg-white p-2 rounded-xl border-2 border-amber-800 shadow-sm aspect-square overflow-hidden thumbnail-btn">
                        <img src="https://iili.io/nwIvykG.jpg" alt="Varian 1" className="object-cover w-full h-full rounded-md" />
                    </button>
                    <button onClick={() => setMainProductImage("https://iili.io/nwI8dhl.jpg")} className="bg-white p-2 rounded-xl border border-stone-200 hover:border-amber-800 shadow-sm aspect-square overflow-hidden thumbnail-btn">
                        <img src="https://iili.io/nwI8dhl.jpg" alt="Varian 2" className="object-cover w-full h-full rounded-md" />
                    </button>
                    <button onClick={() => setMainProductImage("https://iili.io/nwI89pf.jpg")} className="bg-white p-2 rounded-xl border border-stone-200 hover:border-amber-800 shadow-sm aspect-square overflow-hidden thumbnail-btn">
                        <img src="https://iili.io/nwI89pf.jpg" alt="Varian 3" className="object-cover w-full h-full rounded-md" />
                    </button>
                </div>
            </div>
    )
}