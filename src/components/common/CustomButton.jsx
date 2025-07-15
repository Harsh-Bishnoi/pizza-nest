import React from 'react'

const CustomButton = ({ btnClass, btnText }) => {
    return (
        <button className={`px-8 py-4 text-[#FEFEFE] bg-red-500 rounded-xl ${btnClass}`}>{btnText}</button>
    )
}

export default CustomButton