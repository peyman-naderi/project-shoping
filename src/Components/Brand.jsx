import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Photo3 from './Photo3';

export default function Brand() {
  return (
    <>
    <div className='hidden lg:block w-[83%] mx-auto mt-20 lg:mt-32 lg:border-t lg:border-r lg:border-b lg:rounded-2xl lg:border-blue-300 lg:border-solid'>

            <h2 className='font-extrabold hidden lg:flex text-2xl leading-[38px] relative right-14 -top-24'>محبوبترین
             <br />بـــــــرند ها</h2>
             <h2 className='font-extrabold flex lg:hidden  text-2xl leading-[38px]'>محبوبترین   بـــــــرند ها</h2>
             <img src="/img/abi.png" alt=""  className='relative hidden lg:flex right-4 -top-28'/>
   
        <div className='items-center w-[82%] mx-auto h-52 gap-x-5'>
        <Swiper
        slidesPerView={5}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='mt-12'>
            <img src="/img/sp.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className='mt-8'>
            <img src="/img/mv.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className='mt-12'>
            <img src="/img/shia.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className='mt-8'>
            <img src="/img/sam.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className=''>
            <img src="/img/prsil.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className=''>
            <img src="/img/be.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className='mt-12'>
            <img src="/img/sp.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className='mt-8'>
            <img src="/img/mv.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className='mt-8'>
            <img src="/img/sam.png" alt="" />
        </SwiperSlide>
      </Swiper>
        </div>
    </div>
    <Photo3 />
    </>
  );
}
