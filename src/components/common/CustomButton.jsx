import React from 'react'

const CustomButton = ({ btnClass, btnText }) => {
    return (
        <button className={`text-[#FEFEFE] cursor-pointer font-semibold rounded-xl transition duration-300 ease-in-out ${btnClass}`}>{btnText}</button>
    )
}

export default CustomButton