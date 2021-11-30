import React from 'react'

interface Props {
  text: string
  type: string
  gutterBottom: string
}

const Text: React.FC<Props> = ({ text, type, gutterBottom }) => {
  return (
    <div>
      <p className={`text ${type} ${gutterBottom ? 'gutterBottom' : ''}`}>
        {text}
      </p>
    </div>
  )
}

export default Text
