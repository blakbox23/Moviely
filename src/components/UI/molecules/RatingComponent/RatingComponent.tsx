import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Rating } from 'react-simple-star-rating'
import { updateRating } from '../../../../store/Actions/RatingsActions'
import { RootState } from '../../../../store/Reducers/rootReducers'
import { Irating } from '../../../../store/types/types'
import './style.css'

interface RatingComponent {
  movieId: string
  movieRating: Irating[]
}

interface ratingObject {
  email: string
  movieId: string
  grade: number
}

export const RatingComponent: React.FC<RatingComponent> = ({
  movieId,
  movieRating,
}) => {
  const dispatch = useDispatch()

  const averageGrade = (): number => {
    let averagegrade = 0
    let totalGrade = 0

    if (movieRating === undefined) {
      return 0
    } else {
      for (let i = 0; i < movieRating.length; i++) {
        totalGrade += movieRating[i].grade
      }
      averagegrade = totalGrade / movieRating.length
      return averagegrade
    }
  }

  const initialRating: ratingObject = {
    email: 'dev@rate.com',
    movieId: movieId,
    grade: averageGrade(),
  }

  let starRating = initialRating.grade * 20

  console.log('starRating1')
  console.log(starRating)

  const [rating, setRating] = useState(starRating) // initial rating value

  // Catch Rating value
  const handleRating = (rate: number) => {
    let grade = rate / 20

    setRating(grade * 20)

    initialRating.grade = grade
    let newRating = initialRating
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
