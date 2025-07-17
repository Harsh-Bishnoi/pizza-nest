import React, { useState, useEffect } from 'react';
import CustomButton from '../common/CustomButton';
import { HEADER_LINK } from '../../utils/helper';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleNavbar = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle("overflow-hidden", !menuOpen);
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div id='home' className="px-4">
      <nav className='max-w-[1130px] mx-auto'>
        <div className="flex justify-between items-center py-[23px]">
          <a className='font-medium text-[34px] leading-[100%] gradient-text' href="#">Pizza Nest</a>
          <div onClick={toggleNavbar} className="z-50 lg:hidden flex flex-col justify-between w-6 h-5 cursor-pointer">
            <span className={`block h-1 rounded-3xl bg-gradient-to-r from-[#EC6112] to-[#FF902E] transition-transform duration-300 ease-in-out ${menuOpen && 'rotate-45 translate-y-2'}`}></span>
            <span className={`block h-1 rounded-3xl bg-gradient-to-r from-[#EC6112] to-[#FF902E] transition-transform duration-300 ease-in-out ${menuOpen && 'opacity-0'}`}></span>
            <span className={`block h-1 rounded-3xl bg-gradient-to-r from-[#EC6112] to-[#FF902E] transition-transform duration-300 ease-in-out ${menuOpen && '-rotate-45 -translate-y-2'}`}></span>
          </div>
          <ul id='nav-name' className={`list-unstyled flex justify-center items-center nav-link gap-6 mb-0 ${menuOpen ? "show-navbar" : ""}`}>
            {HEADER_LINK.map((item, index) => (
              <li key={index}>
                <a onClick={handleLinkClick} className={`leading-[160%] text-muted-gray hover:text-light-orange transition-all duration-200 ease-linear relative after:absolute after:-bottom-[-0px] after:left-0 after:h-0.5 after:w-0 after:bg-light-orange after:rounded hover:after:w-full after:duration-300 after:ease-linear`} href={item.path}>
                  {item.link}
                </a>
              </li>
            ))}
            <li className='lg:hidden'>
              <CustomButton onClick={handleLinkClick} btnClass="px-8 py-[15px] btn-gradient" btnText="Contact Us" />
            </li>
          </ul>
          <ul className='max-lg:hidden block'>
            <CustomButton btnClass="px-8 py-[15px] btn-gradient" btnText="Contact Us" />
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
