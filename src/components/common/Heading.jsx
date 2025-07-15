import React from 'react'

const Heading = ({ headingClass, headingText }) => {
    return (
        <h2 className={`text-5xl font-semibold leading-[120%] text-black ${headingClass}`}>{headingText}</h2>
    )
}

export default Heading