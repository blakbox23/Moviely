import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchMovies } from '../../store/Actions/MoviesAction'
import { RootState } from '../../store/Reducers/rootReducers'
import { ManageMovie } from '../UI/organisms/ManageMovie/ManageMovie'
import './style.css'

function EditMovie() {
  const dispatch = useDispatch()

  const { id } = useParams()

  useEffect(() => {
    dispatch(fetchMovies())
  }, [dispatch])

  const { pending, movies, error } = useSelector(
    (state: RootState) => state.movies,
  )

  const movie: any = movies.find((movie) => movie.id === id)

  let movieId,
    movieTitle,
    movieGenre,
    movieYear,
    movieRuntime,
    movieImageUrl,
    movieContry,
    movieTrailerUrl,
    movieDescription,
    commentscount,
    averagerating

  if (movie) {
    movieId = movie.id
    movieTitle = movie.title
    movieGenre = movie.genre
    movieGenre = movie.genre
    movieYear = movie.year
    movieRuntime = movie.runtime
    movieImageUrl = movie.imageUrl
    movieContry = movie.country
    movieTrailerUrl = movie.trailerUrl
    movieDescription = movie.description
    commentscount = movie.commentscount
    averagerating = movie.averagerating
  }

  return (
    <div className="outer-page-container">
      <ManageMovie
        headerText={'Edit Movie'}
        id={movieId}
        title={movieTitle}
        genre={movieGenre}
        year={movieYear}
        runtime={movieRuntime}
        imageUrl={movieImageUrl}
        country={movieContry}
        trailerUrl={movieTrailerUrl}
        description={movieDescription}
        commentscount={commentscount}
        averagerating={averagerating}
      />
    </div>
  )
}

export default EditMovie
