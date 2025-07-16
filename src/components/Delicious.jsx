import React from 'react';
import { DELICIOUS_DATA } from '../utils/helper';
import CustomButton from './common/CustomButton';
import cloudImg from '../assets/images/png/cloud-img.png'

const Delicious = () => {
    return (
        <>
            <div className="px-4 my-10 sm:my-17 md:my-25">
                <div className="max-w-[1140px] mx-auto">
                    <div className="flex max-lg:flex-wrap gap-6 items-center">
                        {DELICIOUS_DATA.map((item, index) => (
                            <div className="max-w-[700px] mx-auto lg:max-w-[558px] relative w-full min-h-[319px] pl-4 sm:pl-8 py-4 sm:py-[63px] rounded-xl bg-[url(../src/assets/images/png/delicious-bg-img.png)]" key={index}>
                                <div className="z-1 relative max-w-max">
                                    <h5 className='text-xl sm:text-[28px] leading-[160%] gradient-text'>Delicious</h5>
                                    <h2 className='text-white text-[28px] sm:text-4xl font-semibold leading-[160%]'>{item.title}</h2>
                                    <p className='sm:text-xl leading-[160%] text-snowbank'>Limited Time</p>
                                    <CustomButton btnClass="py-2.5 btn-gradient px-4 leading-[140%] mt-2 sm:mt-4" btnText="Order Now" />
                                </div>
                                <img className='sm:absolute max-sm:ml-auto right-0 bottom-0 max-sm:max-w-[250px] ' src={item.img} alt="pizza-img" />
                                <div className="">
                                    <img className='absolute top-18 sm:top-[7px] right-8 sm:right-[49px] pointer-events-none' src={cloudImg} alt="cloud-img" />
                                    <div className="absolute top-[95px] right-[65px] sm:top-[33px] sm:right-[80px] lg:top-[33px] lg:right-[81px]">
                                        <p className='text-white text-center leading-[160%]'>{item.text}</p>
                                        <p className='uppercase text-2xl text-center leading-[100%] text-white'>{item.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Delicious