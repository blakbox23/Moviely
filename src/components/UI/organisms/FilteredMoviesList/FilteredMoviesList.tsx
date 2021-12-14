import React from 'react'
import { MovieItem } from '../../molecules/MovieItem/MovieItem'
import './style.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../store/Reducers/rootReducers'

export const FilteredMoviesList = () => {
  const { pending, searchedMovies, error } = useSelector(
    (state: RootState) => state.movies,
  )

  return (
    <div className="movies-list flex">
      {searchedMovies &&
        searchedMovies.map((movie) => (
          <div key={movie.id}>
            <MovieItem
              id={movie.id}
              title={movie.title}
              image={movie.imageUrl}
              description={movie.description}
            />
          </div>
        ))}
    </div>
  )
}
