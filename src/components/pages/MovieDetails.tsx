import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { fetchMovieById } from '../../store/Actions/MoviesAction'
import { RootState } from '../../store/Reducers/rootReducers'
import { MoviesDetailsProfile } from '../UI/organisms/MovieDetailsProfile/MoviesDetailsProfile'
import './style.css'

function MovieDetails({}) {
  // interface RouteParams {
  //   id: string
  // }

  const { id } = useParams() as any
  console.log('id')
  console.log(id)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMovieById('cb9c8dc9-c3d0-4517-a3a8-498456e3e4ec'))
  }, [dispatch])

  const { pending, movie, error } = useSelector(
    (state: RootState) => state.movies,
  )
  return (
    <div className="movie-details-page">
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

// function id(id: any): import('../../store/types/types').FetchMovieByID {
//   throw new Error('Function not implemented.')
// }
