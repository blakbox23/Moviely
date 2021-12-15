import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Rating } from 'react-simple-star-rating'
import { updateRating } from '../../../../store/Actions/RatingsActions'
import { RootState } from '../../../../store/Reducers/rootReducers'
import { Irating } from '../../../../store/types/types'
import './style.css'

interface RatingComponent {
  movieId: string
  averageRating: number
}

export interface IratingObject {
  email: string
  movieId: string
  grade: number
}

export const RatingComponent: React.FC<RatingComponent> = ({
  movieId,
  averageRating,
}) => {
  const dispatch = useDispatch()

  const initialGrade = averageRating

  let starRating = initialGrade * 20

  console.log('starRating1')
  console.log(starRating)

  const [rating, setRating] = useState(starRating) // initial rating value

  // Catch Rating value
  const handleRating = (rate: number) => {
    let grade = rate / 20

    setRating(grade * 20)

    let newRating = {
      email: 'dev@try.com',
      movieId: movieId,
      grade: grade,
    }
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
