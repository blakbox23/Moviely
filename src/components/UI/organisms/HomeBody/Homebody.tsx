import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../store/Reducers/rootReducers'
import { MoviesList } from '../MoviesList/MoviesList'
import './style.css'
import Filter from '../../organisms/Filter/Filter'

function Homebody() {
  const { pending, movies, error } = useSelector(
    (state: RootState) => state.movies,
  )

  // console.log(movies)

  return (
    <div className="homebody">
      {pending && error && <div>Loading...</div>}
      {movies.map((movie) => (
        <p>{movie.title}</p>
      ))}

      <Filter />
      <MoviesList />
    </div>
  )
}

export default Homebody
