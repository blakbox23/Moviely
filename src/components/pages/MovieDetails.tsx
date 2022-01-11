import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { fetchMovieById } from '../../store/Actions/MoviesAction'
import { fetchRating } from '../../store/Actions/RatingsActions'
import { RootState } from '../../store/Reducers/rootReducers'
import { MoviesDetailsProfile } from '../UI/organisms/MovieDetailsProfile/MoviesDetailsProfile'
import './style.css'

function MovieDetails({}) {
  const { id } = useParams() as any

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMovieById(id))
  }, [dispatch])

  let gradefetchingobject = {
    email: 'dev@try.com',
    movieId: 'cb9c8dc9-c3d0-4517-a3a8-498456e3e4ec',
  }

  // useEffect(() => {
  //   dispatch(fetchRating(gradefetchingobject))
  // }, [dispatch])

  const { pending, movie, error } = useSelector(
    (state: RootState) => state.movies,
  )
  return (
    <div className="outer-page-container">
      {movie && (
        <MoviesDetailsProfile
          id={movie.id}
          title={movie.title}
          year={movie.year}
          genre={movie.genre}
          runtime={movie.runtime}
          imageUrl={movie.imageUrl}
          country={movie.country}
          description={movie.description}
          comments={movie.comments}
          ratings={movie.ratings}
          movieTrailer={movie.movieTrailer}
        />
      )}
    </div>
  )
}

export default MovieDetails
