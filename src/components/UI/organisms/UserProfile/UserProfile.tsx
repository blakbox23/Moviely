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
import { deleteUser, logOut } from '../../../../store/Actions/UserActions'
import { Navigate, useNavigate } from 'react-router-dom'

interface MyFormValues {
  firstname: string
  secondname: string
  gender: string
}

function UserProfile() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  //   useEffect(() => {
  //     dispatch(fetchMovies())
  //   }, [dispatch])

  const handleDelete = () => {
    dispatch(deleteUser(user!.id))
    localStorage.removeItem('user')
    navigate('/')
  }

  const user = useSelector((state: RootState) => state.user.user)

  const initialValues: MyFormValues = {
    firstname: user!.firstName,
    secondname: user!.lastName,
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
        validationSchema={validate}
        onSubmit={(values: MyFormValues, { resetForm }) => {
          {
            console.log('submited')
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
                  name="firstname"
                  border
                />
                <Input
                  styleclass="user-input"
                  type="text"
                  placeholder="Second name"
                  name="secondname"
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
