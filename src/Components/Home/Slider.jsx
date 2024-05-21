
import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';


import { Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper mt-8 w-full lg:w-[83.7%] justify-center items-center mx-auto"
      >
        <SwiperSlide>
            <img src="/img/Header.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/img/Header.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/img/Header.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/img/Header.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/img/Header.png" alt="" />
        </SwiperSlide>
      </Swiper>
      

    </>
  );
}