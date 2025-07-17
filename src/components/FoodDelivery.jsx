import React from 'react'
import Heading from './common/Heading';
import Description from './common/Description';
import { FOOD_DELIVERY_DATA } from '../utils/helper';
import { CheckIcon } from '../utils/Icons';
import CustomButton from './common/CustomButton';
import foodDelivery from '../assets/images/png/food-delivery-img.png'

const FoodDelivery = () => {
  return (
    <>
      <div className="px-4 py-10 sm:py-15 md:py-20 lg:py-25 bg-[url(../src/assets/images/png/about-us-bg-img.png)] overflow-hidden">
        <div className="max-w-[1140px] mx-auto">
          <div className="flex gap-[33px] max-lg:flex-wrap justify-center">
            <div data-aos="fade-left" className="max-w-[495px]">
              <div className="flex items-center gap-1.5">
                <h4 className='gradient-text'>Food Delivery</h4>
                <div className="triple-border-gradient relative w-[60px] h-[1px]"></div>
              </div>
              <Heading headingClass="!text-near-black pt-2 max-sm:w-[330px] max-md:w-[400px]" headingText="Fast, Fresh & Always On Time" />
              <Description descriptionClass="text-dark-gray pt-[15px] pb-1" descriptionText="We deliver your favorite pizzas piping hot, just the way you love them — anywhere in town. From cheese-loaded bites to spicy paneer delights, your cravings are just a click away." />
              <ul>
                {FOOD_DELIVERY_DATA.map((item, index) => (
                  <li className='flex items-center gap-1.5 pt-2 text-dark-gray leading-[160%] ' key={index}> <span><CheckIcon /></span> {item}</li>
                ))}
              </ul>
              <CustomButton btnClass="btn-gradient px-[32.5px] mt-6 py-[15px]" btnText="Order Now" />
            </div>
            <div data-aos="fade-right">
              <img className='max-w-[500px] pointer-events-none xl:max-w-[612px] max-h-[477px]  w-full' src={foodDelivery} alt="food delivery-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FoodDelivery