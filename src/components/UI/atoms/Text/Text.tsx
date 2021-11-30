import React from 'react'
import './style.css'

interface Props {
  text: string
  type: string
}

const Text: React.FC<Props> = ({ text, type }) => {
  return (
    <div>
      <p className={`text ${type}`}>{text}</p>
    </div>
  )
}

export default Text
