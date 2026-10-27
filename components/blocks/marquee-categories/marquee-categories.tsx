"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Image from 'next/image';

// import Swiper styles
import 'swiper/css';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link as LinkIcon } from 'lucide-react';

export default function MarqueeCategries() {
  return (
    <>
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
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper flex justify-center items-center"
      >
        <SwiperSlide style={{width:'auto', height:'200px'}}><Link href="/slide1"><Image src="https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@9d083315f938e6eabd384cc2dabd5c33555505d6/uploads/2026-02-11T14-13-42-800Z-c5n04a1li.png" alt="Ayam" width={200} height={200} /></Link></SwiperSlide>        
        <SwiperSlide style={{width:'auto', height:'200px'}}><Link href="/slide1"><Image src="https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@03df35933b7920efa6337a6c3775627938a37dce/uploads/2026-02-11T14-18-22-934Z-z2r7xcqan.png" alt="Daging" width={200} height={200} /></Link></SwiperSlide>        
        <SwiperSlide style={{width:'auto', height:'200px'}}><Link href="/slide2"><Image src="https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@fc9e77bc8d51f219b0e7b9cca98abc908e8f73fc/uploads/2026-02-11T14-19-03-054Z-tiyxhpjc3.png" alt="Sayuran" width={200} height={200} /></Link></SwiperSlide>
        <SwiperSlide style={{width:'auto', height:'200px'}}><Link href="/slide3"><Image src="https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@796ead94bb9b817760616171544df707c542cd11/uploads/2026-02-11T14-19-36-856Z-66don9pre.png" alt="Buahan" width={200} height={200} /></Link></SwiperSlide>
        <SwiperSlide style={{width:'auto', height:'200px'}}><Link href="/slide4"><Image src="https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@aa8d1d81672b448fcb838c8c99855f9bd3252af8/uploads/2026-02-11T14-20-21-277Z-36ks3b0zj.png" alt="Ikan" width={200} height={200} /></Link></SwiperSlide>
        <SwiperSlide style={{width:'auto', height:'200px'}}><Link href="/slide5"><Image src="https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@6ca15a4efb6997d5fe31874abfcf3756494bb2cb/uploads/2026-02-11T14-20-51-492Z-ptgs1pvf4.png" alt="Minuman" width={200} height={200} /></Link></SwiperSlide>
        <SwiperSlide style={{width:'auto', height:'200px'}}><Link href="/slide6"><Image src="https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@c08e3e6ee91e0c8fd383ba948996f996f2cf56e7/uploads/2026-02-11T14-21-57-766Z-n8tthkppf.png" alt="Rempah" width={200} height={200} /></Link></SwiperSlide>
        <SwiperSlide style={{width:'auto', height:'200px'}}><Link href="/slide7"><Image src="https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@a43a6a8f5a26eb06674ac0937196b0823fe403b7/uploads/2026-02-11T14-11-52-491Z-g1rk9xcg5.png" alt="Suplemen" width={200} height={200} /></Link></SwiperSlide>
        <SwiperSlide style={{width:'auto', height:'200px'}}><Link href="/slide8"><Image src="https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@9a6ac4e0bbaf9412a4056de8bc367f486cfbcd04/uploads/2026-02-11T14-22-41-494Z-va2twml1j.png" alt="Cookies" width={200} height={200} /></Link></SwiperSlide>
        <SwiperSlide style={{width:'auto', height:'200px'}}><Link href="/slide9"><Image src="https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@12d4ff02d7c9a149f9dd705cc6897c6c01bc62f7/uploads/2026-02-11T14-23-21-052Z-acqwn5si0.png" alt="Snack" width={200} height={200} /></Link></SwiperSlide>
        <SwiperSlide style={{width:'auto', height:'200px'}}><Link href="/slide10"><Image src="https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@d1ce77fb694d4419abeff3afdba3d0a1fbfce3c9/uploads/2026-02-11T14-23-51-117Z-c6lsq3psv.png" alt="Bibit" width={200} height={200} /></Link></SwiperSlide>

      </Swiper>
    </>
  );
}
