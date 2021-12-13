import React from 'react'
import { MoviesList } from '../MoviesList/MoviesList'
import { FilteredMoviesList } from '../FilteredMoviesList/FilteredMoviesList'
import './style.css'
import Filter from '../../organisms/Filter/Filter'

function Homebody() {
  const filtered = false
  return (
    <div className="homebody">
      <Filter />
      <MoviesList />
    </div>
  )
}

export default Homebody
