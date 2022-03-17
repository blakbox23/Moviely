import React, { useEffect, useState } from 'react'
import './style.css'
import { RootState } from '../../../../store/Reducers/rootReducers'
import { useDispatch, useSelector } from 'react-redux'
import { colors } from '../../../../constants/colors'
import man2 from '../../../../assets/man2.png'
import Button from '../../atoms/Button/Button'
import { PageHeader } from '../../molecules/PageHeader/PageHeader'
import { Input } from '../../atoms/Input/Input'
import { Dropdown } from '../../atoms/Dropdown/Dropdown'
import { Form, Formik } from 'formik'
import { validate } from '../../../../Validation/UserProfileValidation'
import {
  deleteUser,
  isLoggedIn,
  logOut,
  updateUser,
} from '../../../../store/Actions/UserActions'
import { Navigate, useNavigate } from 'react-router-dom'
import Modal from 'react-modal'

Modal.setAppElement('#root')

interface MyFormValues {
  firstName: string
  lastName: string
  gender: string
}

function UserProfile() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // useEffect(() => {
  //   dispatch(isLoggedIn())
  // }, [dispatch])

  const user = useSelector((state: RootState) => state.user.user)

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const handleClose = () => setModalIsOpen(false)
  const handleShow = () => setModalIsOpen(true)

  const handleDelete = () => {
    dispatch(deleteUser(user!.id))
    localStorage.removeItem('user')
    navigate('/')
  }

  const initialValues: MyFormValues = {
    firstName: user!.firstName,
    lastName: user!.lastName,
    gender: user!.sex,
  }

  console.log('initialValues.firstName')
  console.log(user?.firstName)

  return (
    <>
      <div className="user-profile flex">
        <div className="profile-details flex">
          <div className="prof-img">
            {' '}
            <img src={man2} alt="" />
          </div>
          <div className="prof-details">
            <div className="border flex email">
              {' '}
              <p>Email </p> <p>{user!.email}</p>{' '}
            </div>

            <div className="border flex email">
              <p>First name </p> <p>{user!.firstName}</p>{' '}
            </div>

            <div className="border flex email">
              {' '}
              <p>Last name </p> <p>{user!.lastName}</p>{' '}
            </div>
          </div>
          <div className="delete-btn" onClick={handleShow}>
            <Button
              buttontext="Delete profile"
              placement="userPage"
              color="rgba(244, 36, 36, 0.5)"
            />
          </div>
        </div>
        {/* <hr /> */}
        <Formik
          initialValues={initialValues}
          // validationSchema={validate}
          onSubmit={(values: MyFormValues, { resetForm }) => {
            {
              dispatch(updateUser({ ...values, id: user!.id }))
            }
          }}
        >
          {(formik) => (
            <div className="edit-profile-form">
              <PageHeader text="Edit User" />
              <Form className="form-inputs left-border flex">
                <div>
                  <Input
                    styleclass="user-input"
                    type="text"
                    placeholder="First name"
                    name="firstName"
                    border
                  />
                  <Input
                    styleclass="user-input"
                    type="text"
                    placeholder="Second name"
                    name="lastName"
                    border
                  />
                  <Dropdown styleclass="user-drop" name={'gender'} />
                </div>
                <div>
                  <input
                    className="userPage flex"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </Form>
            </div>
          )}
        </Formik>
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
            Delete Account
          </h2>
          <p
            style={{
              color: 'purple',
              fontSize: '1.2rem',
            }}
          >
            Are you sure you want to delete this account?
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

export default UserProfile
