import React, { useState } from 'react'
import './style.css'
import Text from '../../atoms/Text/Text'
import star from '../../../../assets/star.png'
import comment from '../../../../assets/comment.png'
import Button from '../../atoms/Button/Button'
import { images } from '../../../../constants/missingimage'
import { colors } from '../../../../constants/colors'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteMovie } from '../../../../store/Actions/MoviesAction'
import Modal from 'react-bootstrap/Modal'
// import 'bootstrap/dist/css/bootstrap.min.css'

interface MovieItemProps {
  id: string
  image?: string
  title: string
  description: string
}

export const MovieItem: React.FC<MovieItemProps> = ({
  id,
  image = images.missingimage,
  title,
  description,
}) => {
  const page = `/movies/${id}`

  const dispatch = useDispatch()

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

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
                <Text text="29" type="small" />
                <img src={comment} alt="comment" />
                <Text text="4.2" type="small" />
                <img src={star} alt="votes" />
              </div>
            </div>

            <div className="movie-description">
              <Text text={description} type="small" />
            </div>
          </NavLink>
        </div>

        <div className="buttons flex">
          <Button
            buttontext="Edit"
            placement={'movie-card-button'}
            color={colors.PRIMARYBTN}
          />
          <div onClick={handleShow}>
            <Button
              buttontext="Delete"
              placement={'movie-card-button'}
              color={colors.SECONDARYBTN}
            />
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Delete Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this movie?</Modal.Body>
        <Modal.Footer>
          <div>
            <div onClick={handleClose}>
              <Button
                buttontext="Cancel"
                placement={'movie-card-button'}
                color={colors.PRIMARYBTN}
              />
            </div>
            <div onClick={handleDelete}>
              <Button
                buttontext="Delete"
                placement={'movie-card-button'}
                color={colors.SECONDARYBTN}
              />
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  )
}
