import React from 'react'
import './style.css'
import { ErrorMessage, useField } from 'formik'

interface InputProps {
  placeholder: string
  type: string
  inputplacement?: string
  border?: boolean
  styleclass?: string
  name?: string
}

// interface OtherProps {
//   label: string
// }

export const Input: React.FC<InputProps> = (
  props: any,
  { placeholder, styleclass, inputplacement, border = false },
) => {
  const [field, meta] = useField(props)
  return (
    <div>
      <input
        className={`input ${props.inputplacement} ${props.styleclass} ${
          props.border ? 'border' : ''
        } `}
        placeholder={placeholder}
        {...field}
        {...props}
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  )
}
