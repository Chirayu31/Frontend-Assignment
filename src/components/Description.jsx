import React from 'react'

const Description = ({ data }) => {
    return (
        <>
            <span className="relative ml-2 flex flex-col items-center group">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <div className="absolute bottom-0 flex flex-col items-center hidden mb-10 group-hover:flex w-32">
                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-gray-600 shadow-lg">{data}</span>
                    <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                </div>
            </span>

        </>
    )
}

export default Description