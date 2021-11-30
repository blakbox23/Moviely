import React from 'react'
import './style.css'

interface Props {
  buttontext: string
  placement: string
}

const MovieButton: React.FC<Props> = ({ buttontext, placement }) => {
  return (
    <div>
      <button className={`button ${placement} ${buttontext}`}>
        {buttontext}
      </button>
    </div>
  )
}

export default MovieButton
