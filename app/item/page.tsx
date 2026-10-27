import Items from "@/db/items.json";
import path from "path";
import fs from "fs/promises";
import DialogBoxHome from "@/components/blocks/dialog-box-home";
export default async function ListItems() {   
    
    return (
        <>
            <DialogBoxHome />
            <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
                <div className="flex flex-col items-center gap-4">
                    <p>Item List Page</p>
                </div>
                <div>
                {
                    Items.map((item) => (
                        <p key={item.id}>{item.value}</p>
                    ))
                }
                </div>
            </div>
        </>
    )
    
}
