"use client";

import React, { useState } from "react";
import Link from "next/link"; // Gunakan Link untuk navigasi Next.js
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar({
  onReserveClick,
}: {
  onReserveClick: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-wider text-white">
          RESTAURANT<span className="text-amber-500">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-widest uppercase transition-colors hover:text-amber-500 ${
                pathname === link.href ? "text-amber-500 font-semibold" : "text-gray-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={onReserveClick}
            className="bg-amber-500 hover:bg-amber-600 text-neutral-950 px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all"
          >
            Reservation
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-neutral-950 px-6 py-4 flex flex-col space-y-4 border-b border-white/10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-sm uppercase tracking-wider ${
                pathname === link.href ? "text-amber-500" : "text-gray-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
