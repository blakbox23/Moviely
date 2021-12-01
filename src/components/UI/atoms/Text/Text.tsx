import React from 'react'
import './style.css'

interface Props {
  text: string
  type: string
  font?: string
}

const Text: React.FC<Props> = ({ text, type, font = 'calibri' }) => {
  return (
    <div>
      <p className={`text ${type} `} style={{ fontFamily: font }}>
        {text}
      </p>
    </div>
  )
}

export default Text
