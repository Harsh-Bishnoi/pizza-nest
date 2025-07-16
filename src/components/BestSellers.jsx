import React from 'react';
import Heading from './common/Heading';
import Description from './common/Description';
import CustomButton from './common/CustomButton';
import { BESTSELLER_DATA } from '../utils/helper';
import tamatoImg from '../assets/images/png/tamato-img.png'

const BestSellers = () => {
  return (
    <>
      <div id='customize' className="px-4 py-10 sm:py-17 md:py-25 bg-[url(../src/assets/images/png/bestseller-bg-img.png)] relative">
        <img className='absolute max-sm:hidden right-0 pointer-events-none max-md:-top-1/16 max-[1172px]:-top-1/14 min-[1172px]:-top-1/7 max-md:max-h-[170px] max-[1172px]:max-h-[200px]' src={tamatoImg} alt="tamato-img" />
        <div className="max-w-[1140px] mx-auto">
          <div className="flex items-center gap-1.5 justify-center">
            <div className="triple-border-gradient relative rotate-180 w-[60px]"></div>
            <p className='font-bold leading-[120%] text-lg gradient-text'>Best Sellers</p>
            <div className="triple-border-gradient relative w-[60px]"></div>
          </div>
          <Heading headingClass="text-center pt-2" headingText="Pizzas You Can’t Say No To" />
          <Description descriptionClass="text-[#373737] text-center pt-4" descriptionText="Tried, tested, and totally loved. These pizzas are always a crowd favorite." />
          <div className="pt-25 sm:pt-[125px] flex-wrap justify-center flex gap-x-6 gap-y-20">
            {BESTSELLER_DATA.map((item, index) => (
              <div className="max-w-[267px] relative bg-[#FEFEFE] border border-[#0000000F] rounded-bl-xl rounded-tr-xl p-6" key={index}>
                <img className='absolute transform -top-[21%] max-w-[130px] max-h-[130px] object-cover pointer-events-none -translate-x-1/2 left-1/2' src={item.img} alt="pizza-img" />
                <div className="flex justify-center pt-[61px]">
                  <h3 className='gradient-text font-semibold text-[32px] leading-[140%]'>{item.price}</h3>
                </div>
                <p className="font-semibold text-[#010101] text-[28px] pt-[2px] text-center leading-[140%] whitespace-nowrap">{item.title}</p>
                <p className='leading-[160%] text-[#5C5C5C] text-center pt-[2px]'>{item.description}</p>
                <div className="flex justify-center mt-3">
                  <CustomButton btnClass="px-[16.5px] py-[9px] btn-gradient" btnText="Order Now" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default BestSellers