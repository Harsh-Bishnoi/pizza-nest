import React from 'react'

const CustomButton = ({ btnClass, btnText }) => {
    return (
        <button className={`text-[#FEFEFE] cursor-pointer font-semibold bg-red-500 rounded-xl ${btnClass}`}>{btnText}</button>
    )
}

export default CustomButton