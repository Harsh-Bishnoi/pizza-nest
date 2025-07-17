import React from 'react'
import Description from './common/Description'
import CustomButton from './common/CustomButton'
import { HeroLine } from '../utils/Icons'
import circleImg from '../assets/images/png/price-circle.png'

const Hero = () => {
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="max-w-[1360px] mx-auto relative rounded-3xl bg-[url(../src/assets/images/png/hero-bg-img.png)] max-md:bg-[-250px] max-lg:bg-[-200px] bg-no-repeat lg:bg-cover lg:bg-center sm:min-h-[410px] md:min-h-[610px] xl:min-h-[650px] min-[1330px]:!min-h-[710px]">
          <div className="px-4 sm:px-6 max-sm:pb-8 pt-8 md:pl-[50px] md:pt-[80px] lg:pt-[105px] xl:pt-[131px] xl:pl-[110px] z-1 relative">
            <h1 className='font-bold text-3xl sm:text-5xl lg:text-[60px] xl:text-[64px] leading-[120%] text-white max-w-[644px]'>Where Every Slice Feels Like Home</h1>
            <Description descriptionClass="text-on-white max-w-[530px] pt-4" descriptionText="At Pizza Nest, we bake more than pizza — we bake comfort. Customize 
            your perfect slice, or choose from our signature favorites"/>
            <div className="flex gap-4 sm:gap-6 mt-5.5 sm:mt-8 flex-wrap">
              <CustomButton btnClass="px-[29px] sm:px-[33px] py-3.5 btn-gradient" btnText="Order Now" />
              <CustomButton btnClass="border border-off-white black-gradient px-4.5 sm:px-8 py-3.5 hover:!border-instant-orange/80" btnText="View Full Menu" />
            </div>
            <div className="pt-6 flex gap-1 items-center flex-wrap">
              <div className="max-w-[145px] sm:max-w-[155px] w-full text-center">
                <h4 className='text-white font-semibold text-[28px] leading-[120%]'>5,000+</h4>
                <p className='text-lighter-gray leading-[120%] text-semibold '>Pizzas Delivered</p>
              </div>
              <div className="border-1 h-[39px] border-disco-ball"></div>
              <div className="sm:max-w-[168px] max-w-[145px] w-full text-center">
                <h4 className='text-white font-semibold text-[28px] leading-[120%]'>98%</h4>
                <p className='text-lighter-gray leading-[120%] text-semibold '>Happy Customers</p>
              </div>
            </div>
          </div>
          <div className="absolute max-xl:right-[300px] xl:right-[394.16px] max-xl:!top-[150px] max-[1415px]:!top-[120px] min-[1415px]:top-[173.52px] hidden lg:block"><HeroLine /></div>
          <img className='absolute max-xl:top-[200px] max-xl:right-[200px] max-xl:max-w-[90px] max-xl:max-h-[90px] max-[1415px]:top-[123px] min-[1415px]:top-[137px] right-[100px] max-lg:hidden max-[1415px]:right-[250px] min-[1415px]:right-[283px]' src={circleImg} alt="circle-img" />
          <div className="absolute max-xl:top-[210px] max-xl:right-[210px] max-[1415px]:top-[137px] min-[1415px]:top-[151px] right-[113px] max-lg:hidden max-[1415px]:right-[262px] min-[1415px]:right-[295px] border-white/80 border-2 size-[70px] xl:size-[88px] rounded-full flex items-center justify-center text-white font-semibold text-xl xl:text-[25.3px] leading-[120%]">₹ 299</div>
        </div>
      </div>
    </>
  )
}

export default Hero