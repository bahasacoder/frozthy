"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './styles.css';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function CarouselSwiper() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null as any);

  return (  
      <div className="relative w-full" role="region" aria-roledescription="carousel" data-slot="carousel">                                
                                       <Swiper                  
                                          loop={true}
                                          spaceBetween={10}
                                          navigation={true}
                                          thumbs={{ swiper: thumbsSwiper }}
                                          modules={[FreeMode, Navigation, Thumbs]}
                                          className="mySwiper2"
                                        >
                                          <SwiperSlide className="bg-transparent size-1/2" >                                        
                                                <Image                                                   
                                                  src="https://iili.io/nwI8JI4.jpg" 
                                                  alt="Descriptive text"
                                                  width={100}
                                                  height={100}
                                                  style={{ position: 'relative', objectFit: 'cover', width: "33.75rem", height: "34rem"}}
                                                  />
                                          </SwiperSlide>
                                          <SwiperSlide className="bg-transparent size-1/2">
                                             <Image                                                   
                                                  src="https://raw.githubusercontent.com/bahasacoder/step-cart/refs/heads/main/public/assets/all/frozen-chicken-1.jpg" 
                                                  alt="Descriptive text"                                                
                                                  width={100}
                                                  height={100}
                                                  
                                                  style={{ position: 'relative', objectFit: 'cover', width: "33.75rem", height: "34rem"}}
                                                  />
                                          </SwiperSlide>
                                        </Swiper>
                                         <Swiper
                                      onSwiper={setThumbsSwiper}
                                      loop={true}
                                      spaceBetween={10}
                                      slidesPerView={4}
                                      freeMode={true}
                                      watchSlidesProgress={true}
                                      modules={[FreeMode, Navigation, Thumbs]}
                                      className="mySwiper"
                                    >
                                      <SwiperSlide>
                                        <Image 
                                          src="https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@76d2f18cbbb5d6294cad122fbc5b62baf1d4f5ba/uploads/2026-02-12T07-03-40-599Z-su0xe2suz.png" 
                                          alt="Descriptive thumbnails"
                                          width={100}
                                          height={100}
                                          style={{ width: "7.375rem", height: "4rem"}}
                                          />
                                      </SwiperSlide>
                                      <SwiperSlide>
                                        <Image
                                          src="https://raw.githubusercontent.com/bahasacoder/step-cart/refs/heads/main/public/assets/all/frozen-chicken-1.jpg" 
                                          alt="Descriptive thumbnails"
                                          width={100}
                                          height={100}
                                          style={{ width: "7.375rem", height: "4rem"}}
                                          />
                                      </SwiperSlide>
                                    </Swiper>       
                          </div>
 
  )
}
