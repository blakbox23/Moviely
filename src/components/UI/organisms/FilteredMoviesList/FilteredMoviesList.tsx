import React from 'react'
import { MovieItem } from '../../molecules/MovieItem/MovieItem'
import './style.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../store/Reducers/rootReducers'

export const FilteredMoviesList = () => {
  const { searched, pending, searchedMovies, error } = useSelector(
    (state: RootState) => state.movies,
  )

  return (
    <div className="movies-list flex">
      {searchedMovies.length === 0 ? (
        <p> No movies found</p>
      ) : (
        searchedMovies.map((movie) => (
          <div key={movie.id}>
            <MovieItem
              id={movie.id}
              title={movie.title}
              image={movie.imageUrl}
              description={movie.description}
            />
          </div>
        ))
      )}
    </div>
  )
}
