import React, { useState } from 'react'
import { colors } from '../../../../constants/colors'
import Button from '../../atoms/Button/Button'
import './style.css'
import Modal from 'react-modal'

//THIS COMPONENT IS NOT YET DONE. SHOULD BE WORKED ON FROM THE START!

interface ConfirmationModalProps {
  comment?: string
  email?: string
  textbox?: boolean
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  comment,
  email,
  textbox = false,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const handleClose = () => setModalIsOpen(false)
  const handleShow = () => setModalIsOpen(true)

  const handleDelete = () => {
    //   dispatch(deleteMovie(id))
    handleClose()
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      style={{
        content: {
          width: '250px',
          height: '200px',
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
      <h2
        style={{
          color: '#87ceeb',
          marginBottom: '2rem',
        }}
      >
        Delete Movie
      </h2>
      {/* </Modal.Header> */}
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
          marginTop: '2rem',
          justifyContent: 'space-evenly',
        }}
      >
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
    </Modal>
  )
}
