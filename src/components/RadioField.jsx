import React from 'react'

const RadioField = ({ label, fieldProps, errors }) => {
    return (
        <>

            <label className='font-semibold text-white flex'>
                {label}
                {fieldProps.required ? <span className='font-normal ml-1 text-red-400'>*</span> : <></>}
                {fieldProps.description ? <Description data={fieldProps.description} /> : <></>}
            </label>
            {fieldProps.options.map((option, idx) => {
                return (
                    <fieldset key={idx}>
                        <input
                            type='radio'
                            value={option.value}
                            name={fieldProps.name}
                            {...fieldProps.register(fieldProps.name, fieldProps)}
                        />
                        <label className='text-white ml-2' htmlFor={option.value}>{option.label}</label>
                    </fieldset>
                )
            }

            )}
        </>
    )
}

export default RadioField