import React from 'react'
import './style.css'

interface InputProps {
  placeholder: string
  type: string
  inputplacement?: string
  border?: boolean
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  type,
  inputplacement,
  border = false,
}) => {
  return (
    <div>
      <input
        className={`input ${inputplacement} ${type} ${
          border ? 'border' : ''
        } style={{ fontFamily: font }} `}
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
}
