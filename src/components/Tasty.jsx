import React from 'react'
import Heading from './common/Heading'
import CustomButton from './common/CustomButton'
import tastyPizza from '../assets/images/png/tasty-pizza-img.png';
import redTopic from '../assets/images/png/red-topic-img.png';
import greenTopic from '../assets/images/png/green-topic-img.png';
import greenLeave from '../assets/images/png/green-leave.png';
import tasty from '../assets/images/png/tasty-img.png';

const Tasty = () => {
    return (
        <>
            <div className="bg-[url(src/assets/images/png/tasty-bg-img.png)] bg-cover px-3">
                <div className="max-w-[1194px] mx-auto">
                    <div className="pt-[17px] pb-[33px] flex max-sm:flex-wrap justify-center gap-5 lg:gap-[44px] items-center">
                        <div className="md:max-w-[400px] lg:max-w-[597px]">
                            <p className='gradient-text pb-0.5 font-semibold text-2xl md:text-[28px] leading-[140%] '>Buy 1 Pizza, Get 1 Free!</p>
                            <Heading headingClass="text-white !text-[30px] md:!text-[40px] lg:!text-[56px]" headingText="Medium & Large pizzas" />
                            <p className='gradient-text font-semibold text-2xl md:text-[28px] leading-[140%] pt-1 w-full'>Limited Offer</p>
                            <CustomButton btnClass="px-[32.5px] py-[15px] mt-3" btnText="Order Now" />
                        </div>
                        <div className="relative flex items-center">
                            <img className='max-w-[400px] pointer-events-none lg:max-w-[553px] w-full' src={tastyPizza} alt="pizza-img" />
                            <img className='absolute pointer-events-none max-md:hidden bottom-[40px] max-lg:max-w-[50px] lg:bottom-[75.13px] left-0 lg:left-[2px]' src={redTopic} alt="red-topic" />
                            <img className='absolute pointer-events-none max-md:hidden max-lg:max-w-[60px] left-[64px] bottom-[1px]' src={greenLeave} alt="green-leave" />
                            <img className='absolute pointer-events-none max-md:hidden max-lg:max-w-[40px] bottom-0 lg:bottom-[20px] right-0 xl:right-[-41.73px]' src={greenTopic} alt="green-topic" />
                            <img className='absolute pointer-events-none max-md:hidden top-0 lg:top-[11px] right-0 max-lg:max-w-[100px] lg:right-[27.22px]' src={tasty} alt="tasty" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tasty