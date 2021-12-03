import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../store/Reducers/rootReducers'
import { MoviesList } from '../MoviesList/MoviesList'
import './style.css'
import Filter from '../../organisms/Filter/Filter'

function Homebody() {
  return (
    <div className="homebody">
      <Filter />
      <MoviesList />
    </div>
  )
}

export default Homebody
