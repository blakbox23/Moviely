import React from 'react'
import Button from '../../atoms/Button/Button'
import Text from '../../atoms/Text/Text'
import './style.css'

interface WatchedMovieItemProps {}

export const WatchedMovieItem: React.FC<WatchedMovieItemProps> = ({}) => {
  return (
    <div>
      <div className="flex watched-movie-item">
        <div className="watchedmovie-image flex">
          <img src="https://source.unsplash.com/NX1Z62_2w04" alt="" />
        </div>
        <div className="watchedmovie-text flex">
          <div>
            <Text text="Brave(2020)" type="watched-movies" font="" />
          </div>
          <div>
            <Text text=" ratings" type="watched-movies" font="" />
          </div>
          <div>
            <Text text="genre" type="watched-movies" font="" />
          </div>
        </div>
        <div className="delete-watchedmovie flex">
          <Button
            placement="watched-movies"
            buttontext="Delete from list"
            color="#F4242480"
          />
        </div>
      </div>
      <div className="flex watched-movie-item">
        <div className="watchedmovie-image flex">
          <img src="https://source.unsplash.com/NX1Z62_2w04" alt="" />
        </div>
        <div className="watchedmovie-text flex">
          <div>
            <Text text="Brave(2020)" type="watched-movies" font="" />
          </div>
          <div>
            <Text text="ratings" type="watched-movies" font="" />
          </div>
          <div>
            <Text text="genre" type="watched-movies" font="" />
          </div>
        </div>
        <div className="delete-watchedmovie flex">
          <Button
            placement="watched-movies"
            buttontext="Delete from list"
            color="#F4242480"
          />
        </div>
      </div>
    </div>
  )
}
