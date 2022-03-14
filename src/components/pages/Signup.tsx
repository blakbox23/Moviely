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
import { Login } from '../../store/Actions/UserActions'
import { NavLink } from 'react-router-dom'
import { Dropdown } from '../UI/atoms/Dropdown/Dropdown'

interface SignupProps {}

interface MyFormValues {
  email: string
  password: string
  FirstName: string
  LastName: string
}

export const Signupform: React.FC<SignupProps> = ({}) => {
  const dispatch = useDispatch()

  const initialValues: MyFormValues = {
    email: '',
    password: '',
    FirstName: '',
    LastName: '',
  }

  const padi = '&#xF002;'
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validate}
      onSubmit={(values: MyFormValues, { resetForm }) => {
        // dispatch(Login(values))
        console.log('signupvalues')
        console.log(values)
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
                type="text"
                border
              />

              <Input
                styleclass="authentication"
                type="text"
                placeholder="&#x1F512; Password"
                name="password"
                border
              />
            </div>
            <div className=" input-row flex">
              <Input
                styleclass="authentication"
                placeholder="&#x1F464;   First Name"
                name="FirstName"
                type="text"
                border
              />

              <Input
                styleclass="authentication"
                type="text"
                placeholder="&#x1F464; Last Name"
                name="LastName"
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
