import React from 'react'
import Heading from './common/Heading';
import CustomButton from './common/CustomButton';
import { GALLERY_DATA } from '../utils/helper';
import pizzaSlice from '../assets/images/png/gallery-pizza-slice.png'

const OurGallery = () => {
  return (
    <>
      <div id='gallery' className="px-4 py-10 sm:py-17 md:py-25 relative">
        <img className='absolute right-0 max-sm:hidden max-md:w-[100px] top-[-50px] md:-top-[78px]' src={pizzaSlice} alt="pizza-slice" />
        <div className="max-w-[1140px] mx-auto">
          <div className="flex items-center gap-1.5 justify-center">
            <div className="h-[1px] w-[60px] triple-border-gradient relative rotate-180"></div>
            <h3 className='gradient-text text-lg font-bold leading-[120%]'>Our Gallery</h3>
            <div className="h-[1px] w-[60px] triple-border-gradient relative"></div>
          </div>
          <Heading headingClass="text-center mx-auto max-w-[568px] pt-2" headingText="A Glimpse Into Our Pizza World" />
          <div className="flex xl:flex-row flex-col justify-center mx-auto items-center gap-4 w-full pt-10">
            <div className="flex max-sm:flex-col xl:flex-col gap-4 w-full justify-center max-w-[558px] sm:max-w-[279px] xl:max-w-[267px]">
              <img src={GALLERY_DATA[0]} alt="Pizza close-up" className="object-cover rounded-xl max-sm:max-h-[329px] w-full lg:h-[291px]" />
              <img src={GALLERY_DATA[3]} alt="People eating outside" className="object-cover rounded-xl max-sm:max-h-[329px] w-full xl::max-w-[267px] xl:min-h-[248px] min-h-[291px] xl:max-h-[248px]" />
            </div>
            <div className="flex flex-col justify-center mx-auto gap-4 w-full max-w-[558px]">
              <img src={GALLERY_DATA[1]} alt="Chef with pizza" className="object-cover rounded-xl w-full lg:min-w-[558px] mx-auto max-w-[558px] lg:max-h-[329px]" />
              <div className="flex flex-col justify-center sm:flex-row max-sm:max-w-[558px] gap-4">
                <img src={GALLERY_DATA[4]} alt="People eating at table" className="object-cover rounded-xl w-full max-sm:max-h-[329px] max-w-[558px] sm:max-w-[340px] lg:max-h-[210px]" />
                <img src={GALLERY_DATA[5]} alt="Pizza with vegetables" className="object-cover rounded-xl w-full max-sm:max-h-[329px] sm:max-w-[194px] lg:max-h-[235px]" />
              </div>
            </div>
            <div className="flex max-sm:flex-col xl:flex-col gap-4 w-full justify-center max-sm:max-w-[558px] sm:max-w-[279px] lg:max-w-[267px]">
              <img src={GALLERY_DATA[2]} alt="Top view pizza" className="object-cover rounded-xl w-full max-sm:max-h-[329px] lg:max-w-[267px] lg:max-h-[235px]" />
              <img src={GALLERY_DATA[6]} alt="Person with pizza" className="object-cover rounded-xl w-full max-sm:max-h-[329px] sm:max-h-[235px] sm:min-w-[267px] xl:max-w-[267px] xl:max-h-[304px]" />
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <CustomButton btnClass="px-[32.5px] btn-gradient py-[15px]" btnText="View More" />
          </div>
        </div>
      </div>
    </>
  )
}

export default OurGallery