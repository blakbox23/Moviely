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

interface LoginProps {}

interface MyFormValues {
  email: string
  password: string
}

export const Loginform: React.FC<LoginProps> = ({}) => {
  const dispatch = useDispatch()

  const initialValues: MyFormValues = {
    email: '',
    password: '',
  }

  const padi = '&#xF002;'
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validate}
      onSubmit={(values: MyFormValues, { resetForm }) => {
        // console.log(values)
        dispatch(Login(values))
        // console.log(values)
        resetForm({ values: initialValues })
      }}
    >
      {(formik) => (
        <div className="login">
          <div className="auth-header">Sign in</div>
          <Form>
            <div>
              <div>
                <img className="popcorn" src={popcorn} alt="" />
                <Input
                  styleclass="authentication"
                  placeholder="&#x1F4E7;  Email"
                  name="email"
                  type="text"
                  border
                />
              </div>

              <Input
                styleclass="authentication"
                type="text"
                placeholder="&#x1F512; Password"
                name="password"
                border
              />
            </div>

            {/* <input
                className="form-submit-button flex"
                type="submit"
                value="Submit"
              /> */}

            <input
              className="form-submit-button login-submit"
              type="submit"
              value="Sign in"
            />
          </Form>
        </div>
      )}
    </Formik>
  )
}
