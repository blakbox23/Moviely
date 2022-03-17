import React, { useState } from 'react'
import './style.css'
import padlock from '../../assets/padlock.png'
import popcorn from '../../assets/popcorn.png'

import { Formik, Form } from 'formik'
import { validate } from '../../../src/Validation/LoginFormValidation'
import { useDispatch, useSelector } from 'react-redux'
import { PageHeader } from '../UI/molecules/PageHeader/PageHeader'
import { Input } from '../UI/atoms/Input/Input'
// import { createMovie } from '../../../../store/Actions/MoviesAction'
import { createUser, Login } from '../../store/Actions/UserActions'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { Dropdown } from '../UI/atoms/Dropdown/Dropdown'
import { RootState } from '../../store/Reducers/rootReducers'

interface SignupProps {}

interface MyFormValues {
  email: string
  password: string
  firstName: string
  lastName: string
  role: string
  gender: string
  approved: boolean
  watchedMovies: [] | null
}

export const Signupform: React.FC<SignupProps> = ({}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const error = useSelector((state: RootState) => state.user.error)

  const initialValues: MyFormValues = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    role: 'USER',
    gender: '',
    approved: true,
    watchedMovies: null,
  }

  const padi = '&#xF002;'
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validate}
      onSubmit={(values: MyFormValues, { resetForm }) => {
        dispatch(createUser(values))
        console.log('signupvalues')
        console.log(values)
        if (error !== null) {
          error && navigate('/')
        }

        resetForm({ values: initialValues })
      }}
    >
      {(formik) => (
        <div className="signup">
          <div className="auth-header">Sign up</div>
          <Form>
            <img className="popcorn" src={popcorn} alt="" />
            <div className=" input-row flex">
              <Input
                styleclass="authentication"
                placeholder="&#x1F4E7;  Email"
                name="email"
                type="email"
                border
              />

              <Input
                styleclass="authentication"
                type="password"
                placeholder="&#x1F512; Password"
                name="password"
                border
              />
            </div>
            <div className=" input-row flex">
              <Input
                styleclass="authentication"
                placeholder="&#x1F464;   First Name"
                name="firstName"
                type="text"
                border
              />

              <Input
                styleclass="authentication"
                type="text"
                placeholder="&#x1F464; Last Name"
                name="lastName"
                border
              />
            </div>
            <div className=" input-row">
              {/* <Input
                styleclass="authentication"
                placeholder="&#x1F4E7;  Username"
                name="email"
                type="text"
                border
              /> */}

              {/* <Input
                styleclass="authentication"
                type="text"
                placeholder=" &#x26A5; Gender"
                name="password"
                border
              /> */}

              <Dropdown styleclass="signup-drop" name={'gender'} />
            </div>

            <input
              className="form-submit-button login-submit"
              type="submit"
              value="Sign up"
            />
          </Form>
          <div className="bottom-prompt">
            <NavLink to="/">Sign in </NavLink>
          </div>
        </div>
      )}
    </Formik>
  )
}
