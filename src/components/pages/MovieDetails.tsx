import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovieById } from '../../store/Actions/MoviesAction'
import { RootState } from '../../store/Reducers/rootReducers'
import { MoviesDetailsProfile } from '../UI/organisms/MovieDetailsProfile/MoviesDetailsProfile'

function MovieDetails() {
  const dispatch = useDispatch()

  let id = 'cb9c8dc9-c3d0-4517-a3a8-498456e3e4ec'

  useEffect(() => {
    dispatch(fetchMovieById(id))
  }, [dispatch])

  const { pending, movie, error } = useSelector(
    (state: RootState) => state.movies,
  )
  return (
    <div>
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
