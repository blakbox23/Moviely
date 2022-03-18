import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteWatchedMovie } from '../../../../store/Actions/UserActions'
import Button from '../../atoms/Button/Button'
import Text from '../../atoms/Text/Text'
import star from '../../../../assets/star.png'
import Vector2 from '../../../../assets/Vector(2).png'

import './style.css'

interface WatchedMovieItemProps {
  id: string
  genre: string
  title: string
  image: string
  rating: number
}

export const WatchedMovieItem: React.FC<WatchedMovieItemProps> = ({
  id,
  genre,
  title,
  image,
  rating,
}) => {
  const dispatch = useDispatch()

  const handleDeleteFromWatched = () => {
    console.log(id)
    dispatch(deleteWatchedMovie(id))
  }

  return (
    <div>
      <div className="flex watched-movie-item">
        <div className="watchedmovie-image flex">
          <img src={image} alt="" />
        </div>
        <div className="watchedmovie-text flex">
          <div className="text-watched-movies flex">
            <Text text={title} type="watched-movies" font="" />
          </div>
          <div className="text-watched-movies flex">
            <img src={star} alt="" />
            <Text text={rating.toString()} type="watched-movies" font="" />
          </div>
          <div className="text-watched-movies flex">
            <img src={Vector2} alt="" />
            <Text text={genre} type="watched-movies" font="" />
          </div>
        </div>
        <div
          className="delete-watchedmovie flex"
          onClick={handleDeleteFromWatched}
        >
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
