import React from 'react'
import Description from './common/Description'
import CustomButton from './common/CustomButton'
import { HeroLine } from '../utils/Icons'
import circleImg from '../assets/images/png/price-circle.png'

const Hero = () => {
  return (
    <>
      <div className="px-4 sm:px-6 md:px-10">
        <div className="max-w-[1360px] mx-auto relative rounded-3xl bg-[url(../src/assets/images/png/hero-bg-img.png)] bg-cover bg-center sm:min-h-[410px] md:min-h-[610px] lg:min-h-[710px]">
          <div className="px-4 sm:px-6 max-sm:pb-8 pt-8 md:pl-[50px] md:pt-[80px] lg:pt-[131px] lg:pl-[110px] z-1">
            <h1 className='font-bold text-3xl sm:text-5xl md:text-[64px] leading-[120%] text-white max-w-[644px]'>Where Every Slice Feels Like Home</h1>
            <Description descriptionClass="text-[#EFEFEF] max-w-[530px] pt-4" descriptionText="At Pizza Nest, we bake more than pizza — we bake comfort. Customize 
            your perfect slice, or choose from our signature favorites"/>
            <div className="flex gap-4 sm:gap-6 mt-5.5 sm:mt-8 flex-wrap">
              <CustomButton btnClass="px-[29px] sm:px-[33px] py-3.5 btn-gradient" btnText="Order Now" />
              <CustomButton btnClass="border border-[#FEFEFE] !bg-transparent px-4.5 sm:px-8 py-3.5 hover:!border-[#FD8B2B]/80 hover:!bg-[#FD8B2B]/80" btnText="View Full Menu" />
            </div>
            <div className="pt-6 flex gap-1 items-center flex-wrap">
              <div className="max-w-[145px] sm:max-w-[155px] w-full text-center">
                <h4 className='text-white font-semibold text-[28px] leading-[120%]'>5,000+</h4>
                <p className='text-[#E1E1E1] leading-[120%] text-semibold '>Pizzas Delivered</p>
              </div>
              <div className="border-1 h-[39px] border-[#D5D5D5]"></div>
              <div className="sm:max-w-[168px] max-w-[145px] w-full text-center">
                <h4 className='text-white font-semibold text-[28px] leading-[120%]'>98%</h4>
                <p className='text-[#E1E1E1] leading-[120%] text-semibold '>Happy Customers</p>
              </div>
            </div>
          </div>
          <div className="absolute right-[200px] xl:right-[394.16px] top-[200px] xl:top-[173.52px] hidden lg:block"><HeroLine /></div>
          <img className='absolute top-[164px] xl:top-[137px] right-[100px] max-lg:hidden xl:right-[283px]' src={circleImg} alt="circle-img" />
          <div className="absolute top-[176px] xl:top-[151px] right-[113px] max-lg:hidden xl:right-[295px] border-[#FFFFFFCC] border-2 size-[88px] rounded-full flex items-center justify-center text-white font-semibold text-[25.3px] leading-[120%]">₹ 299</div>
        </div>
      </div>
    </>
  )
}

export default Hero