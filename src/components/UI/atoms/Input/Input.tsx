import React from 'react'
import './style.css'
import { ErrorMessage, useField } from 'formik'

export const Input: React.FC<any> = ({ ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div>
      <input
        className={`input ${props.inputplacement} ${props.styleclass} ${
          props.border ? 'border' : ''
        } `}
        {...field}
        {...props}
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  )
}
