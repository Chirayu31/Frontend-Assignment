import React, { useState } from 'react'
import Description from './Description'

const GroupField = ({ label, subParameters, fieldProps, generateForm }) => {
  const [showOpt, setShowOpt] = useState(false)

  return (
    <fieldset className='flex-col border p-4 border-gray-700 justify-between	m-8'>
      <label className='font-semibold text-white flex'>
        {label}
        {fieldProps.required ? <span className='font-normal ml-1 text-red-400'>*</span> : <></>}

        {fieldProps.description ? <Description data={fieldProps.description} /> : <></>}
      </label>
      {generateForm(subParameters, showOpt, setShowOpt, fieldProps.name)}
    </fieldset>
  )
}

export default GroupField