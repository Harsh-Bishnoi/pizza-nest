import React from 'react'
import Heading from './common/Heading';
import Description from './common/Description';
import pizzaImg from '../assets/images/png/testimonial-pizza-img.png'
import avatarImgOne from '../assets/images/png/avatar-img-1.png'
import avatarImgTwo from '../assets/images/png/avatar-img-2.png'
import avatarImgThree from '../assets/images/png/avatar-img-3.png'
import { TESTIMONIAL_DATA } from '../utils/helper';
import { NextArrow, PrevArrow } from '../utils/Icons';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Testimonial = () => {
  return (
    <>
      <div className="px-4 py-10 sm:pt-17 md:py-25 bg-[url(../src/assets/images/png/bestseller-bg-img.png)] lg:min-h-[786px]">
        <div className="max-w-[1140px] mx-auto">
          <div className="flex items-center gap-1.5 justify-center">
            <div className="h-[1px] w-[60px] triple-border-gradient relative rotate-180"></div>
            <h3 className='gradient-text text-lg font-bold leading-[120%]'>Testimonial</h3>
            <div className="h-[1px] w-[60px] triple-border-gradient relative"></div>
          </div>
          <Heading headingClass="text-center pt-2" headingText="What Our Customers Say" />
          <div className="pt-6 sm:pt-9 md:pt-15 lg:pl-[37px] relative">
            <div className="relative max-w-[523px] w-full max-lg:mx-auto">
              <img className='max-lg:mx-auto w-full' src={pizzaImg} alt="pizza-img" />
              <div className="flex gap-3 sm:gap-4 flex-col top-1/2 -translate-y-1/2 absolute -left-[10px] sm:-left-[30px]">
                <img className='max-[475px]:!size-[35px] max-sm:size-[40px]' src={avatarImgOne} alt="avatar-img-1" />
                <img className='max-[475px]:!size-[35px] max-sm:size-[40px]' src={avatarImgTwo} alt="avatar-img-2" />
                <img className='max-[475px]:!size-[35px] max-sm:size-[40px]' src={avatarImgThree} alt="avatar-img-3" />
              </div>
            </div>
            <div className="lg:absolute bottom-[-76px] right-0 max-lg:mt-4">
              <Swiper
                modules={[Navigation]}
                loop={true}
                navigation={{
                  nextEl: ".nextBtn",
                  prevEl: ".prevBtn",
                }}
                className="shadow-[0px_4px_15.4px_0px_#0000000F] bg-white rounded-xl  lg:max-w-[680px] max-[455px]:min-h-[360px] min-h-[310px] sm:min-h-[298px]">
                {TESTIMONIAL_DATA.map((item, index) => (
                  <SwiperSlide className="p-4 md:p-6" key={index}>
                    <div key={index} >
                      <Description descriptionClass="text-[#545454]" descriptionText={item.description} />
                      <h3 className='text-2xl leading-[140%] font-semibold pt-4'>{item.title}</h3>
                      <Description descriptionClass="text-[#545454] pt-[2px]" descriptionText={item.job} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="flex items-center absolute z-10 bottom-6 left-6 mt-6 gap-1">
                <div className="size-[44px] prevBtn flex justify-center !bg-[#EEEEEE] items-center rounded-sm cursor-pointer group transtion-all duration-200 ease-linear hover:bg-gradient-to-r from-[#EC6112] to-[#FF902E]">
                  <PrevArrow />
                </div>
                <div className="size-[44px] nextBtn flex justify-center !bg-[#EEEEEE] items-center rounded-sm cursor-pointer group transtion-all duration-200 ease-linear hover:bg-gradient-to-r from-[#EC6112] to-[#FF902E]">
                  <NextArrow />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial