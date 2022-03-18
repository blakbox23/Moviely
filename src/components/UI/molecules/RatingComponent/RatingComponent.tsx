import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Rating } from 'react-simple-star-rating'
import {
  fetchRating,
  updateRating,
} from '../../../../store/Actions/RatingsActions'
import { RootState } from '../../../../store/Reducers/rootReducers'
import { Irating, IUser } from '../../../../store/types/types'
// import { Iuser } from '../../organisms/MovieDetailsProfile/MoviesDetailsProfile'
import './style.css'

interface RatingComponent {
  movieId: string
  user: any
  currentGrade: number | null
}

export interface IratingObject {
  op: string
  id: string
  email: string
  movieId: string
  path: string
  value: number
}
export interface IfetchRatingObject {
  email: string
  movieId: string
  movieTitle: string
}

export const RatingComponent: React.FC<RatingComponent> = ({
  movieId,
  user,
  currentGrade,
}) => {
  const dispatch = useDispatch()

  let starRating = currentGrade! * 20

  console.log('starRating')
  console.log(starRating)

  const [rating, setRating] = useState(starRating) // initial rating value

  useEffect(() => {
    setRating(starRating)
  }, [starRating])

  // Catch Rating value
  const handleRating = (rate: number) => {
    let grade = rate / 20

    setRating(grade * 20)

    let newRating = [
      {
        email: user.email,
        movieId: movieId,
        grade: grade,
        // id: currentRatingId,
        // path: '/ratings',
        // value: grade,
      },
    ]

    console.log('newRating')
    console.log(newRating)

    // where we do the dispatch
    dispatch(updateRating(newRating))
  }

  return (
    <div>
      <Rating
        onClick={handleRating}
        ratingValue={rating} /* Available Props */
        className="rating-stars"
      />
    </div>
  )
}
