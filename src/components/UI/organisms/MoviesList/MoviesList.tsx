import React from 'react'
import { MovieItem } from '../../molecules/MovieItem/MovieItem'
import './style.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../store/Reducers/rootReducers'

export const MoviesList = () => {
  // const movies = [
  //   {
  //     id: 1,
  //     title: 'Braver',
  //     image: 'https://source.unsplash.com/mou0S7ViElQ',
  //     description:
  //       'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id quidem accusantium facere natus molestiae aspernatur ullam dicta rem at consectetur?',
  //   },
  //   {
  //     id: 2,
  //     title: 'Brave',
  //     image: 'https://source.unsplash.com/Xaanw0s0pMk',
  //     description:
  //       'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id quidem accusantium facere natus molestiae aspernatur ullam dicta rem at consectetur?',
  //   },
  //   {
  //     id: 3,
  //     title: 'Brave',
  //     image: 'https://source.unsplash.com/cFbNlpRZKi0',
  //     description:
  //       'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id quidem accusantium facere natus molestiae aspernatur ullam dicta rem at consectetur?',
  //   },
  //   {
  //     id: 4,
  //     title: 'Brave',
  //     image: 'https://source.unsplash.com/cFbNlpRZKi0',
  //     description:
  //       'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id quidem accusantium facere natus molestiae aspernatur ullam dicta rem at consectetur?',
  //   },
  //   {
  //     id: 5,
  //     title: 'Brave',
  //     image: 'https://source.unsplash.com/cFbNlpRZKi0',
  //     description:
  //       'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id quidem accusantium facere natus molestiae aspernatur ullam dicta rem at consectetur?',
  //   },
  //   {
  //     id: 6,
  //     title: 'Brave',
  //     image: 'https://source.unsplash.com/cFbNlpRZKi0',
  //     description:
  //       'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id quidem accusantium facere natus molestiae aspernatur ullam dicta rem at consectetur?',
  //   },
  // ]

  const { pending, movies, error } = useSelector(
    (state: RootState) => state.movies,
  )

  return (
    <div className="movies-list flex">
      {movies.map((movie) => (
        <div key={movie.id}>
          <MovieItem
            title={movie.title}
            image={movie.image}
            description={movie.description}
          />
        </div>
      ))}
    </div>
  )
}
