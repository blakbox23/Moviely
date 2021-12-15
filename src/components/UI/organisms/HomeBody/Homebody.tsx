import React, { useEffect } from 'react'
import { MoviesList } from '../MoviesList/MoviesList'
import { FilteredMoviesList } from '../FilteredMoviesList/FilteredMoviesList'
import './style.css'
import Filter from '../../organisms/Filter/Filter'
import { RootState } from '../../../../store/Reducers/rootReducers'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../../../../store/Actions/MoviesAction'

function Homebody() {
  const dispatch = useDispatch()
  const { searched } = useSelector((state: RootState) => state.movies)

  useEffect(() => {
    dispatch(fetchMovies())
  }, [dispatch])

  const { pending, movies, error } = useSelector(
    (state: RootState) => state.movies,
  )
  const filtered = false
  return (
    <div className="homebody">
      <Filter />

      {searched === false ? <MoviesList /> : <FilteredMoviesList />}
    </div>
  )
}

export default Homebody
