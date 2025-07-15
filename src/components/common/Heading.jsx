import React from 'react'

const Heading = ({ headingClass, headingText,spanText }) => {
    return (
        <h2 className={`text-5xl font-semibold leading-[120%] text-black ${headingClass}`}>{headingText} <span className=''>{ spanText}</span></h2>
    )
}

export default Heading