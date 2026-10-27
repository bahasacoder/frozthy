"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import categories from "@/db/categories.json";

// import './styles.css';

// import required modules
import { Autoplay } from 'swiper/modules';
import { Link as LinkIcon } from 'lucide-react';

export default function CategoriesBlock() {
  return (
        <section className="py-8 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            <div className="relative w-full" role="region" aria-roledescription="carousel" data-slot="carousel">
                <div className="overflow-hidden" data-slot="carousel-content">
                    <div className="flex -ml-6" style={{transform: "translate3d(0px, 0px, 0px)"}}>
                    <Swiper
                            slidesPerView={'auto'}
                            spaceBetween={80}
                            centeredSlides={true}
                            loop={true}
                            speed={9000}
                            autoplay={{
                              delay: 1,
                              disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            className="mySwiper flex justify-center items-center"
                          >
                          {categories.map((category) => (
                            <SwiperSlide style={{width:'200px'}}>
                            <div role="group" aria-roledescription="slide" data-slot="carousel-item" className="min-w-0 shrink-0 grow-0 basis-full pl-6 md:basis-1/3 lg:basis-1/6"><a href="#">
                                    <div className="bg-muted mb-6 flex h-32 items-center justify-center rounded-md px-11.25"><img src={category.imgSrc} alt={category.imgAlt} className="h-full object-contain" /></div>
                                    <h2 className="text-center text-lg font-medium capitalize">{category.name}</h2>
                                </a></div>
                            </SwiperSlide>
                            ))}
                    </Swiper>    
                    </div>
                </div>
               
            </div>
        </div>
    </section>
  )
}