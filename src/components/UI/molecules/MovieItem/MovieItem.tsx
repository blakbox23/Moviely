import React, { useState } from 'react'
import './style.css'
import Text from '../../atoms/Text/Text'
import star from '../../../../assets/star.png'
import comment from '../../../../assets/comment.png'
import Button from '../../atoms/Button/Button'
import { images } from '../../../../constants/missingimage'
import { colors } from '../../../../constants/colors'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteMovie } from '../../../../store/Actions/MoviesAction'
import Modal from 'react-modal'
import { RootState } from '../../../../store/Reducers/rootReducers'

Modal.setAppElement('#root')

interface MovieItemProps {
  id: string
  image?: string
  title: string
  description: string
  movieRating: number
  commentscount: number
}

export const MovieItem: React.FC<MovieItemProps> = ({
  id,
  image = images.missingimage,
  title,
  description,
  movieRating,
  commentscount,
}) => {
  const page = `/movies/${id}`

  const editPage = `/edit-movie/${id}`

  const dispatch = useDispatch()

  const user = useSelector((state: RootState) => state.user.user)

  let role
  if (user) {
    role = user.role
  }

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const handleClose = () => setModalIsOpen(false)
  const handleShow = () => setModalIsOpen(true)

  const handleDelete = () => {
    dispatch(deleteMovie(id))
    handleClose()
  }

  return (
    <>
      <div className="movie-card ">
        <div>
          <NavLink to={page}>
            <div
              className={'movie-card-image'}
              style={{
                background: `url(${image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            >
              <div className="grad"></div>
            </div>

            <div className="card-title-div flex">
              <div>
                <Text text={title} type={'movietitle'} />
              </div>

              <div className="flex movie-item-icons">
                <Text
                  text={commentscount ? commentscount.toString() : '0'}
                  type="small"
                />
                <img src={comment} alt="comment" />
                <Text
                  text={movieRating ? movieRating.toString() : '0'}
                  type="small"
                />
                <img src={star} alt="votes" />
              </div>
            </div>

            <div className="movie-description">
              <Text text={description} type="small" />
            </div>
          </NavLink>
        </div>

        {role === 'ADMIN' && (
          <div className="buttons flex">
            <NavLink to={editPage}>
              <Button
                buttontext="Edit"
                placement={'movie-card-button'}
                color={colors.PRIMARYBTN}
              />
            </NavLink>

            <div onClick={handleShow}>
              <Button
                buttontext="Delete"
                placement={'movie-card-button'}
                color={colors.SECONDARYBTN}
              />
            </div>
          </div>
        )}
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
        <div className="flex deleteModal">
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
