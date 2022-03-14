import React, { useEffect } from 'react'
import { MoviesList } from '../MoviesList/MoviesList'
import { FilteredMoviesList } from '../FilteredMoviesList/FilteredMoviesList'
import './style.css'
import Filter from '../../organisms/Filter/Filter'
import { RootState } from '../../../../store/Reducers/rootReducers'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../../../../store/Actions/MoviesAction'
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

interface MyFormValues {
  firstName: string
  lastName: string
  gender: string
}

function UserProfile() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(isLoggedIn())
  }, [dispatch])

  const user = useSelector((state: RootState) => state.user.user)

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

  return (
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
        <div className="delete-btn" onClick={handleDelete}>
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
                <input className="userPage flex" type="submit" value="Submit" />
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  )
}

export default UserProfile
