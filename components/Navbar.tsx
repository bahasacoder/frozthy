import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

function Navbar() {
    // const cartItems=useSelector(state=>console.log(state.cart.items))
    return (
        <header>
            <nav>
                <div>
                    <h1>Shopping Cart</h1>
                </div>
                <ul className="flex gap-8">
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/list"}>Shopping</Link></li>
                    <li><Link href={"/fakecart"}>Cart</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar