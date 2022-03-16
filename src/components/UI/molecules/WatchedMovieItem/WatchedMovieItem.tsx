import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteWatchedMovie } from '../../../../store/Actions/UserActions'
import Button from '../../atoms/Button/Button'
import Text from '../../atoms/Text/Text'
import './style.css'

interface WatchedMovieItemProps {
  id: string
  genre: string
  title: string
  image: string
}

export const WatchedMovieItem: React.FC<WatchedMovieItemProps> = ({
  id,
  genre,
  title,
  image,
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
          <div>
            <Text text={title} type="watched-movies" font="" />
          </div>
          <div>
            <Text text=" ratings" type="watched-movies" font="" />
          </div>
          <div>
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
