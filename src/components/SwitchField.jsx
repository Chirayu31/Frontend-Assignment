import React from 'react'
import Description from './Description'

const SwitchField = ({ label, fieldProps }) => {
    return (
        <fieldset className='flex m-8'>
            <label className='font-semibold text-white flex'>
                {label}
                {fieldProps.required ? <span className='font-normal ml-1 text-red-400'>*</span> : <></>}
                {fieldProps.description ? <Description data={fieldProps.description} /> : <></>}
            </label>
            <input
                type='checkbox'
                name={fieldProps.name}
                className='ml-2'
                {...fieldProps.register(fieldProps.name, { ...fieldProps, required: false })} />
        </fieldset>
    )
}

export default SwitchField