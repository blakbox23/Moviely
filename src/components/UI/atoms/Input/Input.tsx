import React from 'react'
import './style.css'

interface InputProps {
  placeholder: string
  type: string
  inputplacement?: string
  border?: boolean
  value?: string
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  type,
  inputplacement,
  border = false,
  value,
}) => {
  return (
    <div>
      <input
        className={`input ${inputplacement} ${type} ${border ? 'border' : ''} `}
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
}
