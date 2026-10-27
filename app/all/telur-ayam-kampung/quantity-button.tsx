"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface QuantityInputProps {
  id?: string;
  label?: string;
  min?: number;
  max?: number;
  step?: number;
  initialValue?: number;
  onQuantityChange: (value: number) => void;
}

export default function QuantityInput({
  id = "quantity",
  label = "Quantity",
  min = 0,
  max = 55, // Infinity,
  step = 1,
  initialValue = 1,
  onQuantityChange,
}: QuantityInputProps) {
    const [value, setValue] = React.useState<number>(initialValue);
    
    function decrement(_event: React.MouseEvent<HTMLButtonElement>): void {
        const nextValue = Math.max(min, value - step);
        setValue(nextValue);
        onQuantityChange(nextValue);
    }

    function increment(_event: React.MouseEvent<HTMLButtonElement>): void {
        const nextValue = Math.min(max, value + step);
        setValue(nextValue);
        onQuantityChange(nextValue);
    }

    function handleQuantityChange(event: React.ChangeEvent<HTMLInputElement>): void {
        const inputValue = event.target.value.trim();
        if (inputValue === "") return;

        const parsedValue = Number(inputValue);
        if (!Number.isFinite(parsedValue)) return;

        const nextValue = Math.min(max, Math.max(min, parsedValue));
        setValue(nextValue);
        onQuantityChange(nextValue);
    }

    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>): void {
        if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;

        event.preventDefault();
        const change = event.key === "ArrowUp" ? step : -step;
        const nextValue = Math.min(max, Math.max(min, value + change));
        setValue(nextValue);
        onQuantityChange(nextValue);
    }

    return (
        <>
        {/* flowbite */}
        <div className="w-full sm:w-auto space-y-2">
                            <label className="text-xs font-semibold uppercase text-stone-500 tracking-wider block">Kuantitas:</label>
                            <div className="relative flex items-center w-full shadow-xs rounded-base">
                                <Button 
                                    type="button" id="decrement-button" data-input-counter-decrement="quantity-input" 
                                    className="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-s-base text-sm px-3 focus:outline-none h-10"
                                    onClick={decrement}
                                    disabled={value <= min}
                                >
                                    <svg className="w-4 h-4 text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14"/></svg>
                                </Button>
                                <input 
                                    type="number" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" 
                                    className="border-x-0 h-10 placeholder:text-heading text-center w-full bg-neutral-secondary-medium border-default-medium py-2.5 placeholder:text-body" placeholder="999" required 
                                    value={value}
                                    onChange={handleQuantityChange}
                                    onKeyDown={handleKeyDown}
                                    min={min}
                                    max={max}
                                    step={step}
                                />
                                <Button 
                                    type="button" id="increment-button" data-input-counter-increment="quantity-input" 
                                    className="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-e-base text-sm px-3 focus:outline-none h-10"
                                    onClick={increment}
                                    disabled={value >= max}
                                >
                                    <svg className="w-4 h-4 text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5"/></svg>
                                </Button>
                            </div>
                            <p id="helper-text-explanation" className="mt-2.5 text-sm text-body shrink-0">Please select a 5 digit number from 0 to 9.</p>
                        </div>
                </>
    )
    
}