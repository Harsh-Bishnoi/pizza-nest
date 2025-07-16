import React, { useState } from 'react';
import Heading from './common/Heading';
import Description from './common/Description';
import pizzaImg from '../assets/images/png/testimonial-pizza-img.png';
import rightComma from '../assets/images/png/right-comma.png'
import leftComma from '../assets/images/png/left-comma.png'
import { AVATAR_IMAGES, TESTIMONIAL_DATA } from '../utils/helper';
import { NextArrow, PrevArrow } from '../utils/Icons';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <>
      <div id='testimonial' className="px-4 py-10 sm:pt-17 md:py-25 bg-[url(../src/assets/images/png/bestseller-bg-img.png)] lg:min-h-[786px]">
        <div className="max-w-[1140px] mx-auto">
          <div className="flex items-center gap-1.5 justify-center">
            <div className="h-[1px] w-[60px] triple-border-gradient relative rotate-180"></div>
            <h3 className='gradient-text text-lg font-bold leading-[120%]'>Testimonial</h3>
            <div className="h-[1px] w-[60px] triple-border-gradient relative"></div>
          </div>
          <Heading headingClass="text-center pt-2" headingText="What Our Customers Say" />
          <div className="pt-6 sm:pt-9 md:pt-15 lg:pl-[37px] relative">
            <div className="relative max-w-[523px] w-full max-lg:mx-auto">
              <img className='max-lg:mx-auto w-full pointer-events-none max-w-[523px] max-h-[362px] object-cover ' src={pizzaImg} alt="pizza-img" />
              <div className="flex gap-3 sm:gap-4 flex-col top-1/2 -translate-y-1/2 absolute -left-[10px] sm:-left-[32px]">
                {AVATAR_IMAGES.map((avatar, index) => (
                  <img key={index} src={avatar} alt="avatar-img"
                    className={`max-[475px]:!size-[35px] pointer-events-none outline-0 max-sm:size-[40px] rounded-full transition duration-200 ease-in-out
                      ${activeIndex === index ? 'ring-[#FADCC7] ring-3 scale-104 transition-all duration-200 ease-linear' : ''}`} />
                ))}
              </div>
            </div>
            <div className="lg:absolute bottom-[-76px] right-0 max-lg:mt-4">
              <Swiper
                modules={[Navigation]}
                loop={true}
                initialSlide={1}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                navigation={{
                  nextEl: ".nextBtn",
                  prevEl: ".prevBtn",
                }}
                className="shadow-[0px_4px_15.4px_0px_#0000000F] bg-white rounded-xl lg:max-w-[680px] max-[455px]:min-h-[360px] min-h-[310px] sm:min-h-[298px]" >
                {TESTIMONIAL_DATA.map((item, index) => (
                  <SwiperSlide className="p-4 md:p-6" key={index}>
                    <img className='absolute max-sm:hidden top-0 left-0 pointer-events-none' src={leftComma} alt="comma-img" />
                    <img className='absolute top-[91px] max-sm:hidden right-[84px] pointer-events-none' src={rightComma} alt="comma-img" />
                    <Description descriptionClass="text-[#545454]" descriptionText={item.description} />
                    <h3 className='text-2xl leading-[140%] font-semibold pt-4'>{item.title}</h3>
                    <Description descriptionClass="text-[#545454] pt-[2px]" descriptionText={item.job} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="flex items-center absolute z-10 bottom-6 left-6 mt-6 gap-1">
                <div className="size-[44px] prevBtn flex justify-center !bg-[#EEEEEE] items-center rounded-sm cursor-pointer group transition-all duration-200 ease-linear hover:bg-gradient-to-r from-[#EC6112] to-[#FF902E]">
                  <PrevArrow />
                </div>
                <div className="size-[44px] nextBtn flex justify-center !bg-[#EEEEEE] items-center rounded-sm cursor-pointer group transition-all duration-200 ease-linear hover:bg-gradient-to-r from-[#EC6112] to-[#FF902E]">
                  <NextArrow />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;