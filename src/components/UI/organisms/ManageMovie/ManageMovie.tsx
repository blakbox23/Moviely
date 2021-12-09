import React from 'react'
import './style.css'
import { Input } from '../../atoms/Input/Input'
import { PageHeader } from '../../molecules/PageHeader/PageHeader'
import { fonts } from '../../../../constants/fonts'
import { Dropdown } from '../../atoms/Dropdown/Dropdown'
import { Textarea } from '../../atoms/Textarea/Textarea'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

interface ManageMovieProps {}

interface MyFormValues {
  title: string
  genre: string
  year: string
  runtime: number | string
  imageUrl: string
  country: string
  trailerUrl: string
  description: string
}

export const ManageMovie: React.FC<ManageMovieProps> = ({}) => {
  const validate = Yup.object({
    title: Yup.string()
      .max(5, 'Must be 15 characters or less')
      .required('*Required'),
    genre: Yup.string()
      .max(5, 'Must be 15 characters or less')
      .required('Required'),
    year: Yup.string()
      .max(5, 'Must be 15 characters or less')
      .required('Required'),
    runtime: Yup.string()
      .max(5, 'Must be 15 characters or less')
      .required('Required'),
    imageUrl: Yup.string()
      .max(5, 'Must be 15 characters or less')
      .required('Required'),
    country: Yup.string()
      .max(5, 'Must be 15 characters or less')
      .required('Required'),
    trailerUrl: Yup.string()
      .max(5, 'Must be 15 characters or less')
      .required('Required'),
  })

  const initialValues: MyFormValues = {
    title: '',
    genre: '',
    year: '',
    runtime: '',
    imageUrl: '',
    country: '',
    trailerUrl: '',
    description: '',
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log('submit')
        console.log(values)
        alert(JSON.stringify(values, null, 2))
        actions.setSubmitting(false)
      }}
      validationSchema={validate}
    >
      {(formik) => (
        <div className="manage-movie" style={{ fontFamily: fonts.FORMFONT }}>
          <PageHeader text="New Movie" />
          <Form>
            <div className="manage-movie-container">
              <div className="manage-movie-half-container">
                <Input
                  styleclass="manage-movie-half"
                  placeholder="my title"
                  name="title"
                  type="text"
                  border
                />
                <Dropdown type="add-form" />
                <Input
                  styleclass="manage-movie-half"
                  type="text"
                  placeholder="Year"
                  name="year"
                  border
                />
                <Input
                  styleclass="manage-movie-half"
                  type="text"
                  placeholder="Runtime"
                  name="runtime"
                  border
                />
                <Input
                  styleclass="manage-movie-half"
                  type="text"
                  placeholder="Image Url"
                  name="imageUrl"
                  border
                />
                <Input
                  styleclass="manage-movie-half"
                  type="text"
                  placeholder="Country"
                  name="country"
                  border
                />
              </div>
              <div>
                <Input
                  styleclass="manage-movie-full"
                  type="text"
                  placeholder="Trailer Url"
                  name="trailerUrl"
                  border
                />
                <Textarea />
              </div>

              <input
                type="submit"
                className="form-submit-button flex"
                value="Submit"
              />
              <button type="reset">reset</button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  )
}
