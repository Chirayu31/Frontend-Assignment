import React from 'react'
import Description from './Description'

const SelectField = ({ label, fieldProps }) => {
    return (
        <>
            <label className='font-semibold text-white flex'>
                {label}
                {fieldProps.required ? <span className='font-normal ml-1 text-red-400'>*</span> : <></>}

                {fieldProps.description ? <Description data={fieldProps.description} /> : <></>}
            </label>

            <select
                disabled={fieldProps.disabled}
                {...fieldProps.register(fieldProps.name, fieldProps)}
                className='border-b-2 text-white border-gray-500  outline-0 px-2 bg-transparent w-1/2 h-10'
            >

                {fieldProps.options.map((opt) => (
                    <option className='text-black' key={opt.value} value={opt.value}>{opt.label}</option>
                ))}

            </select>

        </>
    )
}

export default SelectField