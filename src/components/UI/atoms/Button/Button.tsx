import React from 'react'

interface Props {
  placeholder: string
  type: string
  gutterBottom: string
}

const MovieButton: React.FC<Props> = ({ placeholder, type, gutterBottom }) => {
  return (
    <div>
      <button
        className={`button ${type} ${gutterBottom ? 'gutterBottom' : ''}`}
      >
        {placeholder}
      </button>
    </div>
  )
}

export default MovieButton
