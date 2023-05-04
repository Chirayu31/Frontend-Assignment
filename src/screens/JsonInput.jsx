import React, { useRef } from 'react'

const JsonInput = ({ setData }) => {
    const textareaRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        const textareaVal = textareaRef.current.value

        try {

            setData(JSON.parse(textareaVal))
            // console.log("successfull")

        } catch (error) {

            if (error instanceof SyntaxError) {
                alert("There was a syntax error. Please correct it and try again: " + error.message);
            }
            else {
                throw error;
            }
        }

        // console.log(typeof (data))

    }
    return (
        <>
            <form
                className='m-10 flex flex-col justify-center items-center'
                onSubmit={handleSubmit}>

                <textarea
                    className='w-full p-2 border border-gray-800 focus:outline-none focus:border-gray-500  rounded-lg resize-none'
                    rows={25}
                    placeholder="Your JSON data goes here..."
                    ref={textareaRef}
                >
                </textarea>

                <button type='submit'
                    className='mt-8 border-2 text-blue-500 font-bold border-blue-400 hover:border-blue-500 w-36 p-2 rounded' >
                    Render Form
                </button>
            </form>

        </>
    )
}

export default JsonInput