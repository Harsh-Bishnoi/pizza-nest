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
      <div className="px-4 py-25">
        <div className="max-w-[1140px] mx-auto">
          <div className="flex gap-[33px] max-lg:flex-wrap justify-center">
            <div className="lg:max-w-[495px]">
              <div className="flex items-center gap-1.5">
                <h4 className='gradient-text'>Food Delivery</h4>
                <div className="triple-border-gradient relative w-[60px] h-[1px]"></div>
              </div>
              <Heading headingClass="!text-[#010101] pt-2" headingText="Fast, Fresh & Always On Time" />
              <Description descriptionClass="text-[#373737] pt-[15px] pb-1" descriptionText="We deliver your favorite pizzas piping hot, just the way you love them — anywhere in town. From cheese-loaded bites to spicy paneer delights, your cravings are just a click away." />
              <ul>
                {FOOD_DELIVERY_DATA.map((item, index) => (
                  <li className='flex items-center gap-1.5 pt-2 text-[#373737] leading-[160%] ' key={index}> <span><CheckIcon /></span> {item}</li>
                ))}
              </ul>
              <CustomButton btnClass="btn-gradient px-[32.5px] mt-6 py-[15px]" btnText="Order Now" />
            </div>
            <img className='max-w-[500px] pointer-events-none xl:max-w-[612px] w-full' src={foodDelivery} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default FoodDelivery