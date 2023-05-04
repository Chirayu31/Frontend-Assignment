import React from 'react'
import Description from './Description'

const InputField = ({ label, fieldProps }) => {
  return (
    <>
      <fieldset className='flex border-b pb-4 border-gray-700 justify-between	m-8'>

        <label className='font-semibold text-white flex'>
          {label}
          {fieldProps.required ? <span className='font-normal ml-1 text-red-400'>*</span> : <></>}
          {fieldProps.description ? <Description data={fieldProps.description} /> : <></>}
        </label>

        <input type='text'
          className='border-b-2 text-white border-gray-500  outline-0 px-2 bg-transparent w-1/2 h-10'
          disabled={fieldProps.disabled}
          {...fieldProps.register(fieldProps.name, fieldProps)}
          autoComplete='off'
        />

      </fieldset>
    </>
  )
}

export default InputField