'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

import Image from 'next/image';
import Images from '@/constants/Images';
import { Box, IconButton, Typography } from '@mui/material';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/scrollbar';
import SliderIconBox from './SliderIconBox';


const ImagesSlider = [
  { image: Images.banner1, title: 'Dễ dàng đặt chỗ hơn bao giờ hết' },
  { image: Images.banner2, title: 'Tạo ra những nguồn cảm hứng' },
  { image: Images.banner3, title: 'Nơi tổ chức các buổi livestream chuyên nghiệp' },
];
const HomeSlider = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0); // Swiper indexes start from 0

  const handleUpdateActiveSlide = (slideIndex) => {
    setActiveSlide(slideIndex);
    if (swiperInstance) {
      swiperInstance.slideTo(slideIndex); // Change slide when clicking icon
    }
  };

  return (
    <Box flexGrow={1} className='w-screen h-screen max-w-[1920px] bg-[rgba(0,0,0,0.3)]'>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          
        }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        effect={'fade'}
        navigation={false}
        loop={true}
        onSwiper={(swiper) => setSwiperInstance(swiper)} // Store swiper instance
        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)} // Update active slide
        modules={[Pagination, EffectFade, Autoplay]}
        className='w-full h-full'
      >
        {ImagesSlider.map((item, index) => (
          <SwiperSlide key={index} className='w-full h-full'>
            <Box className='w-full h-full'>
              <Image src={item.image} layout='fill' objectFit='cover' alt={`banner${index + 1}`} />
            </Box>
            <Box className='absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.2)] w-full h-full flex justify-center items-center px-5'>
              <Box className='lg:w-[70%] xl:w-[50%] md:w-full flex flex-col justify-center items-center text-center animate__animated animate__fadeInUp animate__delay_1s'>
                <SliderIconBox activeSlide={activeSlide} handleClick={handleUpdateActiveSlide} />
                <h1 className='text-white font-bold mt-3 hover:text-(--accent_green)'>
                  {item.title}
                </h1>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};


export default HomeSlider;
