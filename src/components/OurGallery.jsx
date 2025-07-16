import React from 'react'
import Heading from './common/Heading';
import CustomButton from './common/CustomButton';
// import { GALLERY_DATA } from '../utils/helper';
import pizzaSlice from '../assets/images/png/gallery-pizza-slice.png'
const OurGallery = () => {
  return (
    <>
      <div className="px-4 py-10 sm:py-17 md:py-25 relative">
        <img className='absolute right-0 max-sm:hidden max-md:w-[100px] top-[-50px] md:-top-[78px]' src={pizzaSlice} alt="pizza-slice" />
        <div className="max-w-[1140px] mx-auto">
          <div className="flex items-center gap-1.5 justify-center">
            <div className="h-[1px] w-[60px] triple-border-gradient relative rotate-180"></div>
            <h3 className='gradient-text text-lg font-bold leading-[120%]'>Our Gallery</h3>
            <div className="h-[1px] w-[60px] triple-border-gradient relative"></div>
          </div>
          <Heading headingClass="text-center mx-auto max-w-[568px] pt-2" headingText="A Glimpse Into Our Pizza World" />
          {/* <div className="grid grid-cols-3 gap-2.5 md:gap-6 mt-10">
            {GALLERY_DATA.map((item, index) => (
              <div className="" key={index}>
                <img className='rounded-xl' src={item} alt="image" />
              </div>
            ))}
          </div> */}
          <div className="flex justify-center mt-8">
            <CustomButton btnClass="px-[32.5px] btn-gradient py-[15px]" btnText="View More" />
          </div>
        </div>
      </div>
    </>
  )
}

export default OurGallery