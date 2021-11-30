import React from 'react'
import Text from '../atoms/Text/Text'

interface MovieItemProps {
  image: string
  title: string
  gutterBottom: string
}

export const MovieItem: React.FC<MovieItemProps> = ({ image, title }) => {
  return (
    <div className="movie-card ">
      <div className="movie-card-image">
        <img
          src={
            image
              ? image
              : 'https://uploads.codesandbox.io/uploads/user/7057e602-9a4b-48e2-a956-a6a83661dbe2/lUkO-download.png'
          }
          alt={image}
        />
      </div>
    </div>
  )
}
