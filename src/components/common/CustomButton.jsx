import React from 'react'

const CustomButton = ({ btnClass, btnText, onClick }) => {
    return (
        <button onClick={onClick} className={`text-[#FEFEFE] active:scale-90 outline-0 cursor-pointer font-semibold rounded-xl transition duration-300 ease-in-out ${btnClass}`}>{btnText}</button>
    )
}

export default CustomButton