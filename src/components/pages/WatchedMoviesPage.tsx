import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWatchedMovies } from '../../store/Actions/UserActions'
import { RootState } from '../../store/Reducers/rootReducers'
import { WatchedMoviesList } from '../UI/organisms/WatchedMoviesList/WatchedMoviesList'

function WatchedMovies() {
  return (
    <div className="outer-page-container">
      <WatchedMoviesList />
    </div>
  )
}

export default WatchedMovies
