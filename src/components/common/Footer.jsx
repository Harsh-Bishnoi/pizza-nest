import React from 'react'
import Description from './Description'
import { QUICK_LINKS, SOCIAL_ICON, SUPPORT_LINKS } from '../../utils/helper'

const Footer = () => {
  return (
    <>
      <div className="px-4 pt-10 md:pt-20">
        <div className="max-w-[1140px] mx-auto">
          <div className="flex max-md:flex-col justify-between gap-8 md:gap-20">
            <div className="md:max-w-[400px] lg:max-w-[558px]">
              <h2 className="font-medium text-[42px] leading-[150%] gradient-text">Pizza Nest</h2>
              <Description descriptionClass="text-mid-gray pt-3" descriptionText="At Pizza Nest, we believe every slice should bring joy. Whether you're ordering for one or feeding a crowd, our pizzas are baked with care, topped with love, and delivered hot to your doorstep. You just taste the difference." />
              <div className="flex items-center gap-5 mt-4 md:mt-6">
                {SOCIAL_ICON.map((item, index) => (
                  <a
                    key={index}
                    className="size-[40px] md:size-[52px] hover:-translate-y-1 transition-all duration-200 ease-linear bg-gradient-to-r from-[#EC6112] to-[#FF902E] rounded-full flex justify-center items-center"
                    href={item.socialLink} target='_blank'
                  >
                    {<item.icon />}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex max-w-[312px] gap-7 w-full justify-between">
              <ul>
                <li className='text-near-black leading-[160%] mb-1'>Quick Links</li>
                {QUICK_LINKS.map((link, i) => (
                  <li className='mt-2' key={i}> <a className='text-mid-gray leading-[160%] hover:text-light-orange transition-all duration-200 ease-linear' href={link.link}>{link.title}</a></li>
                ))}
              </ul>
              <ul>
                <li className='text-near-black leading-[160%] mb-1'>Support</li>
                {SUPPORT_LINKS.map((link, i) => (
                  <li className='mt-2' key={i}> <a className='text-mid-gray leading-[160%] hover:text-light-orange transition-all duration-200 ease-linear' href="">{link}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-2 border-clouded w-full mt-6 sm:mt-8"></div>
          <Description descriptionClass="text-mid-gray max-sm:text-sm py-4 text-center" descriptionText={`Copyright Pizza Nest © ${new Date().getFullYear()}, All rights reserved`}
          />
        </div>
      </div>
    </>
  )
}

export default Footer