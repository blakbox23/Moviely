import React, { useState } from 'react'
import './style.css'

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
        <div>
          <PageHeader text="Login" />

          <Form>
            <div className="manage-movie-container">
              <div className="manage-movie-half-container">
                <Input
                  styleclass="manage-movie-half"
                  placeholder="Email"
                  name="email"
                  type="text"
                  border
                />

                <Input
                  styleclass="manage-movie-half"
                  type="text"
                  placeholder="Password"
                  name="password"
                  border
                />
              </div>

              <input
                className="form-submit-button flex"
                type="submit"
                value="Submit"
              />
            </div>
          </Form>
        </div>
      )}
    </Formik>
  )
}
