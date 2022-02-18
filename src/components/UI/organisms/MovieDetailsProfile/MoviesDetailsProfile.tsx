import React, { useEffect } from 'react'
import './style.css'
import edit from '../../../../assets/edit 1.png'
import remove from '../../../../assets/remove 1.png'
import Vector from '../../../../assets/Vector.png'
import Vector1 from '../../../../assets/Vector(1).png'
import Vector2 from '../../../../assets/Vector(2).png'
import Vector3 from '../../../../assets/Vector(3).png'
import Vector4 from '../../../../assets/Vector(4).png'
import { CommentItem } from '../../molecules/CommentItem/CommentItem'
import { PageHeader } from '../../molecules/PageHeader/PageHeader'
import { IMovie, Irating } from '../../../../store/types/types'
import star from '../../../../assets/star.png'
import { fonts } from '../../../../constants/fonts'
import { RatingComponent } from '../../molecules/RatingComponent/RatingComponent'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../store/Reducers/rootReducers'
import { fetchRating } from '../../../../store/Actions/RatingsActions'

let movie: IMovie

export interface Iuser {
  admin: boolean
  email: string
}

const user = {
  admin: false,
  email: 'dev@try.com',
}

export const MoviesDetailsProfile: React.FC<typeof movie> = ({ ...movie }) => {
  const dispatch = useDispatch()

  let fetchRatingObject = {
    email: user.email,
    movieId: movie.id,
  }

  const { pending, currentGrade, error } = useSelector(
    (state: RootState) => state.ratings,
  )

  // useEffect(() => {
  //   dispatch(fetchRating(fetchRatingObject))
  // }, [dispatch])

  const averageGrade = () => {
    let averagegrade = 0
    let totalGrade = 0

    if (movie.ratings === undefined) {
      return 0
    } else {
      for (let i = 0; i < movie.ratings.length; i++) {
        totalGrade += movie.ratings[i].grade
      }
      averagegrade = totalGrade / movie.ratings.length
      return averagegrade
    }
  }
  const currentMovieGrade = () => {
    if (movie.ratings === undefined) {
      return 0
    } else {
      let userRating = movie.ratings.find(
        (rating: Irating) => rating.email === user.email,
      )
      return userRating ? userRating.grade : 0
    }
  }
  const currentMovieRating = () => {
    if (movie.ratings === undefined) {
      return 'no ratings'
    } else if (!movie.ratings.some((rating) => rating.email === user.email)) {
      return 'no ratings'
    } else {
      let ratings = movie.ratings.find(
        (rating: Irating) => rating.email === user.email,
      )
      return ratings ? ratings.id : 'no ratings'
    }
  }

  console.log('currentMovieRating()')
  console.log(currentMovieRating())

  return (
    <div className="movie-profile" style={{ fontFamily: fonts.FORMFONT }}>
      <div className="centerer flex">
        <div className="movie-profile-container flex">
          <div className=" movie-profile-pic">
            <img src={movie.imageUrl} alt="where" />
          </div>
          <div className=" movie-profile-details">
            <div className="movie-profile-title flex">
              <p className="movie-profile-title-name">{movie.title}</p>
              {user.admin ? (
                <div className="movie-profile-icons">
                  <img src={edit} alt="edit" />
                  <img src={remove} alt="remove" />
                </div>
              ) : (
                <div className="movie-rating ">
                  <RatingComponent
                    movieId={movie.id}
                    user={user}
                    currentGrade={currentMovieGrade()}
                    currentRatingId={currentMovieRating()}
                  />
                </div>
              )}
            </div>

            <div className="flex movie-profile-details-body">
              <div className="movie-profile-list flex">
                <div className="flex movie-profile-listitem">
                  <img src={Vector} alt="" />
                  <p> {movie.runtime}</p>
                </div>
                <div className="flex movie-profile-listitem">
                  <img src={Vector1} alt="" />
                  <p> {movie.country}</p>
                </div>
                <div className="flex movie-profile-listitem">
                  <img src={Vector2} alt="" />
                  <p> {movie.genre}</p>
                </div>
                <div className="flex movie-profile-listitem">
                  <img src={Vector3} alt="" />
                  <p> {movie.year}</p>
                </div>
                <div className="flex movie-profile-listitem">
                  <img src={Vector4} alt="" />
                  <p> {averageGrade()}</p>
                </div>
              </div>
              <div className="movie-profile-description">
                <p>{movie.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {!user.admin && (
        <div className="flex add-watchlist-prompt">
          <p>
            This movies is not in your watched list. Would you like to add it?
          </p>
          <button className="add-watchlist-button">Add to my watch list</button>
        </div>
      )}

      <div className="flex movie-comments">
        <div>
          <PageHeader text="Comments" />
        </div>
        <div className="movie-comments-container">
          <div className="movie-comment">
            {user.admin === false && (
              <div className="comment-item-text flex">
                <CommentItem textbox={true} email="@dummyemail" />
              </div>
            )}
          </div>
          {movie.comments?.map((comment) => (
            <div className="movie-comment" key={comment.id}>
              <CommentItem email={comment.email} comment={comment.content} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
