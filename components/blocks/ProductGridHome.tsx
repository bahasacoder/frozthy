"use client";

import React, { useState } from "react";
import { ChevronRight, BadgeCheck } from "lucide-react";

interface ProductCardItem {
  id: string;
  title: string;
  price: number;
  image: string;
  author: string;
  authorAvatar: string;
  category: string;
  verified?: boolean;
}


const PRODUCT_ITEMS: ProductCardItem[] = [
  {
    id: "1",
    title: "Bento Component",
    price: 29,
    image:
      "https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-13.png",
    author: "UI 8",
    authorAvatar:
      "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png",
    category: "Illustration",
    verified: true,
  },
  {
    id: "2",
    title: "CareIQ: Health App UI Kit",
    price: 12,
    image:
      "https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-14.png",
    author: "PixelCove Agency",
    authorAvatar:
      "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png",
    category: "Figma",
    verified: true,
  },
  {
    id: "3",
    title: "Compass - CRM Design Kit",
    price: 48,
    image:
      "https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-15.png",
    author: "Fedir.live",
    authorAvatar:
      "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png",
    category: "Figma",
    verified: true,
  },
  // Added items to complete and expand the responsive 4-column grid
  {
    id: "4",
    title: "Synapz: AI Collaboration Kit",
    price: 36,
    image:
      "https://shadcnstudio.com",
    author: "StudioVibe",
    authorAvatar:
      "https://shadcnstudio.com",
    category: "UI Kit",
    verified: true,
  },
  {
    id: "5",
    title: "Altentico Checkout System",
    price: 24,
    image:
      "https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-13.png",
    author: "CraftLab",
    authorAvatar:
      "https://shadcnstudio.com",
    category: "Framer",
    verified: true,
  },
  {
    id: "6",
    title: "FinPulse Banking Mobile App",
    price: 42,
    image:
      "https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-14.png",
    author: "NordicUI",
    authorAvatar:
      "https://shadcnstudio.com",
    category: "Figma",
    verified: true,
  },
  {
    id: "7",
    title: "MetricFlow Analytics Dashboard",
    price: 39,
    image:
      "https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-15.png",
    author: "UI 8",
    authorAvatar:
      "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png",
    category: "React",
    verified: true,
  },
  {
    id: "8",
    title: "Minimalist 3D Icon Pack",
    price: 19,
    image:
      "https://shadcnstudio.com",
    author: "PixelCove Agency",
    authorAvatar:
      "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png",
    category: "3D Assets",
    verified: false,
  },
];

export default function ProductGridHome() {
      const [isDarkMode, setIsDarkMode] = useState(true);
    
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Responsive Grid: 1 col mobile -> 2 cols tablet -> 3 cols laptop -> 4 cols desktop */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {PRODUCT_ITEMS.map((item) => (
          <article
            key={item.id}
            className={`group flex flex-col rounded-xl border overflow-hidden transition-all duration-300 ${
                isDarkMode
                  ? "border-zinc-800 bg-zinc-900/90 hover:border-zinc-700 hover:shadow-lg hover:shadow-black/40"
                  : "border-zinc-200/80 bg-white shadow-xs hover:shadow-md hover:border-zinc-300"
              }`}     
              >
            {/* Product Thumbnail */}
            <div  className={`relative aspect-[4/3] w-full overflow-hidden ${
                  isDarkMode ? "bg-zinc-800" : "bg-zinc-100"
                }`}>
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Card Content */}
            <div className="flex flex-1 flex-col justify-between gap-4 p-4">
              {/* Title & Price */}
              <div className="flex items-start justify-between gap-2">
                <h4 className={`text-base font-medium line-clamp-1 transition-colors ${
                      isDarkMode
                        ? "text-zinc-100 group-hover:text-indigo-400"
                        : "text-zinc-900 group-hover:text-indigo-600"
                    }`}>
                  <a href={`#product-${item.id}`}>{item.title}</a>
                </h4>
                <span className={`shrink-0 text-base font-semibold ${
                      isDarkMode ? "text-white" : "text-zinc-900"
                    }`}>
                  ${item.price}
                </span>
              </div>

              {/* Author Breadcrumb & Verified Badge */}
              <div 
               className={`flex items-center justify-between pt-2.5 border-t ${
                    isDarkMode ? "border-zinc-800" : "border-zinc-100"
                  }`}
                  >
                <nav aria-label="breadcrumb">
                  <ol className={`flex flex-wrap items-center gap-1.5 text-xs ${
                        isDarkMode ? "text-zinc-400" : "text-zinc-500"
                      }`}>
                    <li className="inline-flex items-center">
                      <a
                        href={`#author-${item.author}`}
                        className={`flex items-center gap-1.5 font-medium transition-colors ${
                            isDarkMode
                              ? "text-zinc-300 hover:text-white"
                              : "text-zinc-700 hover:text-zinc-900"
                          }`}                      >
                        <span  className={`relative flex size-6 shrink-0 overflow-hidden rounded-full border ${
                              isDarkMode ? "border-zinc-700" : "border-zinc-200"
                            }`}>
                          <img
                            src={item.authorAvatar}
                            alt={item.author}
                            className="aspect-square size-full object-cover"
                          />
                        </span>
                        <span className="truncate max-w-[105px]">
                          {item.author}
                        </span>
                      </a>
                    </li>

                    <li aria-hidden="true" className="text-zinc-400">
                      <ChevronRight className="size-3.5" />
                    </li>

                    <li className="inline-flex items-center">
                      <a
                        href={`#category-${item.category}`}
                        className={`hover:text-zinc-900 transition-colors ${
                            isDarkMode
                              ? "text-zinc-300 hover:text-white"
                              : "text-zinc-700 hover:text-zinc-900"
                          }`}
                      >
                        {item.category}
                      </a>
                    </li>
                  </ol>
                </nav>

                {item.verified && (
                  <BadgeCheck
                    aria-label="Verified Creator"
                    className="size-5 shrink-0 fill-green-600 text-white"
                  />
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
