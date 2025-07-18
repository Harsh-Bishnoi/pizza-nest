import React from 'react'
import Heading from './common/Heading';
import Description from './common/Description';
import manImg from '../assets/images/png/about-us-man-img.png'
import { ABOUT_US_CARD_DATA } from '../utils/helper';
import pizzaImg from '../assets/images/png/about-us-pizza-img.png';
const AboutUs = () => {
  return (
    <>
      <div id='aboutUs' className="px-4 bg-[url(../src/assets/images/png/about-us-bg-img.png)] pt-15 md:pt-20 lg:pt-25 pb-[49px] relative">
        <img className='absolute pointer-events-none left-0 bottom-0 max-xl:w-full max-xl:max-w-[130px] max-sm:hidden' src={pizzaImg} alt="pizza-img" />
        <div className="max-w-[1114px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between lg:min-h-[637px]">
            <div className="max-w-[558px]">
              <div className="flex items-center gap-1.5">
                <h5 className='font-bold text-lg leading-[120%] gradient-text'>About Us</h5>
                <div className="small-border-gradient relative w-[60px] h-[1px]"></div>
              </div>
              <Heading headingClass="pt-2" headingText="Welcome to the" spanText="Nest" />
              <ul className='list-disc lg:max-w-[558px] ml-6 pt-4'>
                <li><Description descriptionClass="text-dark-gray" descriptionText="At PizzaNest, we believe that pizza is more than just food — it’s an emotion, a celebration, and comfort all rolled into one delicious slice. Founded with a passion for real ingredients and big flavors, we set out to bring handcrafted, oven-fresh pizzas to every corner of India." /></li>
                <li className='pt-3'><Description descriptionClass="text-dark-gray" descriptionText="Whether you're craving spicy paneer, a creamy cheese burst, or a fully loaded custom pizza made your way, we've got you covered. Each pizza is baked with love, topped with the freshest veggies, premium cheese, and authentic sauces — all delivered hot and fast, right to your doorstep." /></li>
              </ul>
              <div className="flex flex-wrap mt-6 gap-4 sm:gap-6 lg:max-h-[135px] max-lg:justify-center">
                {ABOUT_US_CARD_DATA.map((item, index) => (
                  <div className={`${index === 1 ? "sm:mt-3" : ""}`}>
                    <div key={index} className="bg-off-white border border-dashed border-ornery/50 w-full min-w-[160px] sm:max-w-[170px] sm:min-w-[170px] p-3 sm:p-4.5 transition-all duration-200 ease-linear hover:shadow-[0px_1px_7px_0px_#F67A211F] rounded-xl">
                      <div className="bg-natural-white size-[52px] mx-auto rounded-full flex justify-center items-center">{<item.img />}</div>
                      <p className='leading-[160%] text-center whitespace-nowrap text-black-tie pt-2'>{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <img className='max-sm:h-[350px] h-full max-sm:max-w-[200px] sm:h-[400px] sm:max-w-[250px] lg:h-[597px] object-fit max-lg:pt-[48px] pointer-events-none lg:max-w-[383px] w-full' src={manImg} alt="man-img" />
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs