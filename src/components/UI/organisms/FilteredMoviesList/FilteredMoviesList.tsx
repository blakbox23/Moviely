import React from 'react'
import { MovieItem } from '../../molecules/MovieItem/MovieItem'
import './style.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../store/Reducers/rootReducers'

export const FilteredMoviesList = () => {
  const { pending, searchedMovies, error } = useSelector(
    (state: RootState) => state.movies,
  )

  let filtered = searchedMovies[0]

  console.log('searchedMovies')
  console.log(filtered)

  return (
    <div className="movies-list flex">
      {filtered &&
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
