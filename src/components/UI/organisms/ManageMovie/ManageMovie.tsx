import React from 'react'
import './style.css'
import { Input } from '../../atoms/Input/Input'
import { PageHeader } from '../../molecules/PageHeader/PageHeader'
import { fonts } from '../../../../constants/fonts'
import { Dropdown } from '../../atoms/Dropdown/Dropdown'
import { Textarea } from '../../atoms/Textarea/Textarea'
import { Formik, Form } from 'formik'

interface ManageMovieProps {}

interface MyFormValues {
  title: string
  genre: string
  year: string
  runtime: number
  imageUrl: string
  country: string
  trailerUrl: string
  description: string
}

export const ManageMovie: React.FC<ManageMovieProps> = ({}) => {
  const initialValues: MyFormValues = {
    title: '',
    genre: '',
    year: '',
    runtime: 0,
    imageUrl: '',
    country: '',
    trailerUrl: '',
    description: '',
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        // console.log({ values, actions })
        alert(JSON.stringify(values, null, 2))
        actions.setSubmitting(false)
      }}
    >
      {(formik) => (
        <div className="manage-movie" style={{ fontFamily: fonts.FORMFONT }}>
          {console.log('values')}
          {console.log(formik.values)}
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
                  type="text"
                  styleclass="manage-movie-half"
                  placeholder="Image Url"
                  name="imageurl"
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
                  name="trailerurl"
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
