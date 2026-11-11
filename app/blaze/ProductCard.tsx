"use client";

import React, { useState } from "react";

export interface BlazerProduct {
  id: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  images: string[];
}

interface ProductCardProps {
  product: BlazerProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      {/* Image Carousel Container */}
      <div
        className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100"
        role="region"
        aria-roledescription="carousel"
        aria-label={`${product.brand} gallery`}
      >
        {/* Slides Track */}
        <div
          className="flex h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {product.images.map((imgSrc, index) => (
            <div
              key={index}
              role="group"
              aria-roledescription="slide"
              className="h-full w-full shrink-0 grow-0 basis-full"
            >
              <img
                src={imgSrc}
                alt={`${product.brand} - ${product.category} view ${index + 1}`}
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Overlay Controls (Dots + Animated Add to Cart) */}
        <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-center gap-3 bg-gradient-to-t from-white/95 via-white/90 to-transparent px-5 pt-8 pb-4 backdrop-blur-[2px] transition-all duration-300 ease-out md:translate-y-full md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
          {/* Carousel Pagination Dots */}
          <div className="flex gap-2" role="tablist" aria-label="Select image">
            {product.images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                aria-selected={activeSlide === idx}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeSlide === idx
                    ? "w-6 bg-slate-900"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          {/* Animated Hover Add to Cart Button */}
          <button
            type="button"
            onClick={handleAddToCart}
            className="group/btn relative inline-flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl border border-slate-900 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:bg-slate-900 hover:text-white hover:shadow-md active:scale-[0.98]"
          >
            <span>{isAdded ? "Added to Cart!" : "Add to Cart"}</span>
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 fill-current transition-transform duration-300 ease-out group-hover/btn:translate-x-1 group-hover/btn:-rotate-6"
              aria-hidden="true"
            >
              <path d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="z-10 flex flex-1 flex-col justify-between gap-1.5 bg-white p-6">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-semibold text-slate-900">
            {product.brand}
          </h3>
          <span className="text-2xl font-bold text-slate-900">
            ${product.price}
          </span>
        </div>

        <div className="flex items-center justify-between gap-2">
          <span className="text-sm text-slate-500">{product.category}</span>
          {product.originalPrice && product.discountPercentage && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-400 line-through">
                ${product.originalPrice}
              </span>
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-600">
                {product.discountPercentage}% Off
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
