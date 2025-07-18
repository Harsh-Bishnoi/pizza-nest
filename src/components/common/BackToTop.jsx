import React, { useEffect, useState } from 'react';
import { TopArrow } from '../../utils/Icons';


const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showButton && (
        <div onClick={scrollToTop} className="fixed bottom-5 bg-gradient-to-r from-[#EC6112] to-[#FF902E] flex justify-center items-center animate-bounce right-5 cursor-pointer z-10 size-10 rounded-full transition-all duration-200 ease-linear" >
          <TopArrow />
        </div>
      )}
    </>
  );
};

export default BackToTop;