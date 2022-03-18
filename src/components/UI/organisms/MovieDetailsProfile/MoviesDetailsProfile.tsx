import React, { useEffect, useState } from 'react'
import './style.css'
import edit from '../../../../assets/edit 1.png'
import remove from '../../../../assets/remove 1.png'
import Vector from '../../../../assets/Vector.png'
import Vector1 from '../../../../assets/Vector(1).png'
import Vector2 from '../../../../assets/Vector(2).png'
import Vector3 from '../../../../assets/Vector(3).png'
import Vector4 from '../../../../assets/Vector(4).png'
import seen from '../../../../assets/seen1.png'
import { CommentItem } from '../../molecules/CommentItem/CommentItem'
import { PageHeader } from '../../molecules/PageHeader/PageHeader'
import { IMovie, Irating, IwatchedMovie } from '../../../../store/types/types'
import star from '../../../../assets/star.png'
import { fonts } from '../../../../constants/fonts'
import { RatingComponent } from '../../molecules/RatingComponent/RatingComponent'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../store/Reducers/rootReducers'
import { fetchRating } from '../../../../store/Actions/RatingsActions'
import {
  deleteMovie,
  fetchcomments,
} from '../../../../store/Actions/MoviesAction'
import Button from '../../atoms/Button/Button'
import { colors } from '../../../../constants/colors'
import Modal from 'react-modal'
import { NavLink, useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'
import {
  addWatchedMovie,
  getWatchedMovies,
} from '../../../../store/Actions/UserActions'

let movie: IMovie

Modal.setAppElement('#root')

export const MoviesDetailsProfile: React.FC<typeof movie> = ({ ...movie }) => {
  const dispatch = useDispatch()
  const nuser = useSelector((state: RootState) => state.user.user)

  useEffect(() => {
    dispatch(fetchRating(fetchRatingObject))
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchcomments(movie.id))
  }, [dispatch])

  useEffect(() => {
    dispatch(getWatchedMovies(nuser!.id))
  }, [dispatch])

  const comments = useSelector(
    (state: RootState) => state.movies.movie_comments,
  )

  const approvedComments = comments.filter(
    (comment) => comment.approved === true,
  )

  const watchedMovies = useSelector(
    (state: RootState) => state.user.watchedMovies,
  )
  let watched = []

  if (watchedMovies !== undefined) {
    watched = watchedMovies.filter(
      (watchedMovie) => watchedMovie.title === movie.title,
    )
  }

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

  const handleAddWatchedList = () => {
    const watchedListParams = {
      userId: nuser?.id,
      title: movie.title,
      imageUrl: movie.imageUrl,
      genre: movie.genre,
      year: movie.year,
      averagerating: movie.averagerating,
    }
    dispatch(addWatchedMovie(watchedListParams))
  }

  let role
  let userEmail: any
  let userId: any

  if (nuser) {
    role = nuser.role
    userEmail = nuser.email
    userId = nuser.id
  }

  let fetchRatingObject = {
    userId: userId,
    email: userEmail,
    movieId: movie.id,
    movieTitle: movie.title,
  }

  const { pending, currentGrade, error, movieRating } = useSelector(
    (state: RootState) => state.ratings,
  )

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
                      user={nuser}
                      currentGrade={currentGrade}
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
                    <p> {movieRating}</p>
                  </div>
                </div>
                <div className="movie-profile-description">
                  <p>{movie.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {role !== 'ADMIN' && !watched.length ? (
          <div className="flex add-watchlist-prompt">
            <p>
              This movies is not in your watched list. Would you like to add it?
            </p>
            <button
              className="add-watchlist-button"
              onClick={handleAddWatchedList}
            >
              Add to my watch list
            </button>
          </div>
        ) : role !== 'ADMIN' && watched.length ? (
          <div className="watched">
            <img src={seen} alt="" />
            <p>This movie is in your watched list</p>
            <p>
              Leave a comment to share your insights about it and help other
              viewers!
            </p>
          </div>
        ) : (
          <p>.</p>
        )}

        <div className="flex movie-comments">
          <div>
            <PageHeader text="Comments" />
          </div>
          <div className="movie-comments-container">
            <div className="movie-comment">
              {role !== 'ADMIN' && (
                <div className="comment-item-text flex">
                  <CommentItem
                    textbox={true}
                    email={userEmail}
                    movieId={movie.id}
                  />
                </div>
              )}
            </div>
            {approvedComments.map((comment) => (
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
