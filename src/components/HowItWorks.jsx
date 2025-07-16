import React from 'react'
import Heading from './common/Heading'
import { HOW_IT_WORKS_DATA } from '../utils/helper'
import Description from './common/Description'
import CustomButton from './common/CustomButton'
import tamatoImg from '../assets/images/png/tamato-img.png'
import { ArrowIcon } from '../utils/Icons'

const HowItWorks = () => {
  return (
    <>
      <div className="px-4 py-10 sm:py-17 md:py-25 relative">
        <img className='absolute rotate-180 max-sm:hidden left-0 pointer-events-none max-md:-top-1/16 max-[1172px]:-top-1/10 min-[1172px]:-top-1/5 max-md:max-h-[170px] max-[1172px]:max-h-[200px]' src={tamatoImg} alt="tamato-img" />
        <div className="max-w-[1140px] mx-auto">
          <div className="flex items-center gap-1.5 justify-center">
            <div className="h-[1px] w-[60px] triple-border-gradient relative rotate-180"></div>
            <h3 className='gradient-text text-lg font-bold leading-[120%]'>How It Works</h3>
            <div className="h-[1px] w-[60px] triple-border-gradient relative"></div>
          </div>
          <Heading headingClass="max-w-[568px] text-center mx-auto pt-2" headingText="Your Perfect Pizza in Just 3 Easy Steps!" />
          <div className="pt-10 relative flex flex-wrap justify-center items-center gap-20 md:gap-5 lg:gap-6 ">
            <div className="absolute max-md:rotate-90 top-[34%] min-[1172px]:left-[279px] md:top-[100px]"><ArrowIcon /></div>
            <div className="absolute max-md:rotate-90 max-md:block max-[1172px]:hidden top-[50%] md:right-[279px] max-md:top-[68%] min-[1172px]:top-[100px]"><ArrowIcon /></div>
            {HOW_IT_WORKS_DATA.map((item, index) => (
              <div className="max-w-[358px] lg:max-w-[364px] w-full p-4 lg:p-6" key={index}>
                <div className="bg-[#FCECE2] size-[70px] rounded-full flex items-center justify-center mx-auto">{<item.icon />}</div>
                <h3 className='leading-[150%] text-2xl font-semibold text-center mt-3'>{item.title}</h3>
                <Description
                  descriptionClass={`text-center !text-[#373737] pt-2 ${index === 1
                    ? "max-w-[290px]" : index === 2 ? "max-w-[300px]" : ""}`}
                  descriptionText={item.description} />
                <div className="flex justify-center">
                  <CustomButton btnClass="btn-gradient py-[9px] mt-3 px-[16.5px]" btnText="View Menu" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default HowItWorks