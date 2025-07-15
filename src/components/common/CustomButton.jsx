import React from 'react'

const CustomButton = ({ btnClass, btnText }) => {
    return (
        <button className={`text-[#FEFEFE] cursor-pointer bg-red-500 font-semibold rounded-xl ${btnClass}`}>{btnText}</button>
    )
}

export default CustomButton