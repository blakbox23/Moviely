import React, { useEffect, useState } from 'react'
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
import { deleteMovie } from '../../../../store/Actions/MoviesAction'
import Button from '../../atoms/Button/Button'
import { colors } from '../../../../constants/colors'
import Modal from 'react-modal'
import { NavLink, useNavigate } from 'react-router-dom'

let movie: IMovie

Modal.setAppElement('#root')

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

  const nuser = useSelector((state: RootState) => state.user.user)

  const navigate = useNavigate()

  const editPage = `/edit-movie/${movie.id}`

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const handleClose = () => setModalIsOpen(false)
  const handleShow = () => setModalIsOpen(true)

  const handleDelete = () => {
    dispatch(deleteMovie(movie.id))
    handleClose()
    navigate('/')
  }

  let role
  let userEmail: any
  if (nuser) {
    role = nuser.role
    userEmail = nuser.email
  }
  // console.log('nuser')
  // console.log(role)
  // console.log(userEmail)

  let fetchRatingObject = {
    email: userEmail,
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
        (rating: Irating) => rating.email === userEmail,
      )
      return userRating ? userRating.grade : 0
    }
  }
  const currentMovieRating = () => {
    if (movie.ratings === undefined) {
      return 'no ratings'
    } else if (!movie.ratings.some((rating) => rating.email === userEmail)) {
      return 'no ratings'
    } else {
      let ratings = movie.ratings.find(
        (rating: Irating) => rating.email === userEmail,
      )
      return ratings ? ratings.id : 'no ratings'
    }
  }

  // console.log('currentMovieRating()')
  // console.log(currentMovieRating())

  return (
    <>
      <div className="movie-profile" style={{ fontFamily: fonts.FORMFONT }}>
        <div className="centerer flex">
          <div className="movie-profile-container flex">
            <div className=" movie-profile-pic">
              <img src={movie.imageUrl} alt="where" />
            </div>
            <div className=" movie-profile-details">
              <div className="movie-profile-title flex">
                <p className="movie-profile-title-name">{movie.title}</p>
                {role === 'ADMIN' ? (
                  <div className="movie-profile-icons">
                    <NavLink to={editPage}>
                      <img src={edit} alt="edit" />
                    </NavLink>

                    <img
                      onClick={handleShow}
                      style={{ cursor: 'pointer' }}
                      src={remove}
                      alt="remove"
                    />
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

        {role !== 'ADMIN' && (
          <div className="flex add-watchlist-prompt">
            <p>
              This movies is not in your watched list. Would you like to add it?
            </p>
            <button className="add-watchlist-button">
              Add to my watch list
            </button>
          </div>
        )}

        <div className="flex movie-comments">
          <div>
            <PageHeader text="Comments" />
          </div>
          <div className="movie-comments-container">
            <div className="movie-comment">
              {role !== 'ADMIN' && (
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

      <Modal
        isOpen={modalIsOpen}
        style={{
          content: {
            width: '300px',
            height: '250px',
            borderRadius: '20px',
            top: '35%',
            left: '40%',
            right: 'auto',
            bottom: 'auto',
            textAlign: 'center',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          },
        }}
      >
        <div className="flex deleteModal border">
          <h2
            style={{
              color: '#87ceeb',
            }}
          >
            Delete Movie
          </h2>
          <p
            style={{
              color: 'purple',
              fontSize: '1.2rem',
            }}
          >
            Are you sure you want to delete this movie?
          </p>
          {/* <Modal.Footer> */}
          <div
            className="flex"
            style={{
              justifyContent: 'space-evenly',
            }}
          >
            <div onClick={handleClose}>
              <Button
                buttontext="Cancel"
                placement={'modal'}
                color={colors.MODALPRIMARY}
              />
            </div>
            <div onClick={handleDelete}>
              <Button
                buttontext="Delete"
                placement={'modal'}
                color={colors.MODALSECONDARY}
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
