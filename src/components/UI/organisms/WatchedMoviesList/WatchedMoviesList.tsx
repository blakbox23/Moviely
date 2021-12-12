import React from 'react'
import { PageHeader } from '../../molecules/PageHeader/PageHeader'
import './style.css'
import { WatchedMovieItem } from '../../molecules/WatchedMovieItem/WatchedMovieItem'

interface WatchedMoviesListProps {}

export const WatchedMoviesList: React.FC<WatchedMoviesListProps> = ({}) => {
  return (
    <div className="watched-movies-list">
      <PageHeader text="My watched movies" />
      <WatchedMovieItem />
    </div>
  )
}
