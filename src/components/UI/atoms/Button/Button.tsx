import React from 'react'
import './style.css'

interface Props {
  buttontext: string
  placement: string
  color?: string
}

const MovieButton: React.FC<Props> = ({
  buttontext,
  placement,
  color = 'red',
}) => {
  return (
    <div>
      <button
        className={`button ${placement} ${buttontext}`}
        style={{ backgroundColor: color }}
      >
        {buttontext}
      </button>
    </div>
  )
}

export default MovieButton
