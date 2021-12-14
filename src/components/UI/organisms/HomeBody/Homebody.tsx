import React from 'react'
import { MoviesList } from '../MoviesList/MoviesList'
import { FilteredMoviesList } from '../FilteredMoviesList/FilteredMoviesList'
import './style.css'
import Filter from '../../organisms/Filter/Filter'
import { RootState } from '../../../../store/Reducers/rootReducers'
import { useSelector } from 'react-redux'

function Homebody() {
  const { pending, searchedMovies, error } = useSelector(
    (state: RootState) => state.movies,
  )
  const filtered = false
  return (
    <div className="homebody">
      <Filter />

      {searchedMovies.length === 0 ? <MoviesList /> : <FilteredMoviesList />}
    </div>
  )
}

export default Homebody
