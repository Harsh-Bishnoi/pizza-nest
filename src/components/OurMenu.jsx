import React from 'react'
import Heading from './common/Heading'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { TAB_BTN_DATA, TAB_PANNEL_DATA } from '../utils/helper';
import CustomButton from './common/CustomButton';
import pizzaSlice from '../assets/images/png/our-menu-pizza-slice.png'

const OurMenu = () => {

  const MenuTabPanel = ({ priceKey }) => {
    return (
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
        {TAB_PANNEL_DATA.map((item, i) => (
          <div key={i} className="max-w-[364px] w-full group">
            <img className='border border-transparent object-cover group-hover:border-black/8 rounded-[12px] w-full pointer-events-none max-w-[364px] max-h-[292px]' src={item.img} alt="img" />
            <div className="max-w-[324px] transform -translate-y-[20px] mx-auto rounded-lg border border-black/8 bg-white w-full p-5">
              <div className="flex justify-center">
                <p className='text-2xl leading-[140%] font-semibold gradient-text'>
                  {item[priceKey]}
                </p>
              </div>
              <h3 className='text-2xl font-semibold leading-[140%] text-near-black text-center pt-[2px]'>{item.title}</h3>
              <p
                className={`pt-[2px] text-unmuted-gray leading-[160%] text-center ${i === 2 ? "max-w-[270px]" : ""
                  }`}
              >
                {item.description}
              </p>

              <p className='pt-1 flex justify-center'>{<item.starImg />}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <>
      <div id='menu' className="px-4 py-10 sm:py-15 md:py-20 lg:py-25 relative">
        <img className='absolute max-sm:hidden op-[30px] left-0 max-md:w-[80px]' src={pizzaSlice} alt="pizza-slice" />
        <div className="max-w-[1140px] mx-auto">
          <div className="flex items-center gap-1.5 justify-center">
            <div className="h-[1px] w-[60px] triple-border-gradient relative rotate-180"></div>
            <h3 className='gradient-text text-lg font-bold leading-[100%]'>Our Menu</h3>
            <div className="h-[1px] w-[60px] triple-border-gradient relative"></div>
          </div>
          <Heading headingClass="max-w-[568px] mx-auto text-center pt-2" headingText="Explore Flavours, Pick Your Cravings" />
          <Tabs className="pt-10">
            <TabList className="flex flex-wrap justify-center gap-[14px]">
              {TAB_BTN_DATA.map((btn, index) => (
                <Tab
                  key={index}
                  className="border border-light-gray max-w-[150px] sm:max-w-[170px] w-full cursor-pointer active:scale-95 transition-all duration-100 ease-linear text-center outline-0 px-2 sm:px-5 py-3 text-light-gray font-semibold leading-[100%] rounded-xl"
                  selectedClassName="tab-btn-gradient text-white border-none"
                >
                  {btn}
                </Tab>
              ))}
            </TabList>
            <div className="pt-10">
              <TabPanel>
                <MenuTabPanel priceKey="priceOne" />
              </TabPanel>
              <TabPanel>
                <MenuTabPanel priceKey="priceTwo" />
              </TabPanel>
              <TabPanel>
                <MenuTabPanel priceKey="priceThree" />
              </TabPanel>
              <TabPanel>
                <MenuTabPanel priceKey="priceFour" />
              </TabPanel>
              <TabPanel>
                <MenuTabPanel priceKey="priceFive" />
              </TabPanel>
            </div>
          </Tabs>
          <div className="flex justify-center">
            <CustomButton btnClass="btn-gradient px-[32.5px] mt-2 py-[15px]" btnText="View More" />
          </div>
        </div>
      </div>
    </>
  )
}

export default OurMenu