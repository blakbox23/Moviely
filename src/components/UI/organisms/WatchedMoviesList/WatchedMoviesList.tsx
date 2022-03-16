import React, { useEffect } from 'react'
import { PageHeader } from '../../molecules/PageHeader/PageHeader'
import './style.css'
import { WatchedMovieItem } from '../../molecules/WatchedMovieItem/WatchedMovieItem'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../store/Reducers/rootReducers'
import { getWatchedMovies } from '../../../../store/Actions/UserActions'

interface WatchedMoviesListProps {}

export const WatchedMoviesList: React.FC<WatchedMoviesListProps> = ({}) => {
  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user.user)

  useEffect(() => {
    dispatch(getWatchedMovies(user!.id))
  }, [dispatch])

  const watchedMovies = useSelector(
    (state: RootState) => state.user.watchedMovies,
  )

  return (
    <div className="watched-movies-list">
      <PageHeader text="My watched movies" />
      {watchedMovies &&
        watchedMovies.map((watchedMovie) => (
          <div key={watchedMovie.id}>
            <WatchedMovieItem
              id={watchedMovie.id}
              genre={watchedMovie.genre}
              title={watchedMovie.title}
              image={watchedMovie.imageUrl}
              // ratings={watchedMovie.ratings}
            />
          </div>
        ))}
    </div>
  )
}
