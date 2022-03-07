import React, { useState } from 'react'
import './style.css'
import { Input } from '../../atoms/Input/Input'
import { PageHeader } from '../../molecules/PageHeader/PageHeader'
import { fonts } from '../../../../constants/fonts'
import { Dropdown } from '../../atoms/Dropdown/Dropdown'
import { Textarea } from '../../atoms/Textarea/Textarea'
import { Formik, Form } from 'formik'
import { validate } from '../../../../Validation/ManageMoviesValidation'
import { useDispatch, useSelector } from 'react-redux'
import { createMovie, editMovie } from '../../../../store/Actions/MoviesAction'
import { RootState } from '../../../../store/Reducers/rootReducers'
import { useNavigate } from 'react-router-dom'

interface ManageMovieProps {
  headerText: string
  id: string
  title: string
  genre: string
  year: string
  runtime: number | string
  imageUrl: string
  country: string
  trailerUrl: string
  description: string
}

interface MyFormValues {
  id: string | null
  title: string
  genre: string
  year: string
  runtime: number | string
  imageUrl: string
  country: string
  trailerUrl: string
  description: string
}

export const ManageMovie: React.FC<ManageMovieProps> = ({
  headerText,
  id,
  title,
  genre,
  year,
  runtime,
  imageUrl,
  country,
  trailerUrl,
  description,
}) => {
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const initialValues: MyFormValues = {
    id: id,
    title: title,
    genre: genre,
    year: year,
    runtime: runtime,
    imageUrl: imageUrl,
    country: country,
    trailerUrl: trailerUrl,
    description: description,
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validate}
      onSubmit={(values: MyFormValues, { resetForm }) => {
        {
          headerText === 'New Movie'
            ? dispatch(createMovie(values))
            : dispatch(editMovie(values))
        }

        // resetForm({ values: initialValues })
        navigate(-1)
      }}
    >
      {(formik) => (
        <div className="manage-movie" style={{ fontFamily: fonts.FORMFONT }}>
          <PageHeader text={headerText} />

          <Form>
            <div className="manage-movie-container">
              <div className="manage-movie-half-container">
                {headerText === 'Edit Movie' ? (
                  <Input
                    styleclass="manage-movie-half disabled"
                    placeholder="My title"
                    name="title"
                    type="text"
                    border
                  />
                ) : (
                  <Input
                    styleclass="manage-movie-half"
                    placeholder="My title"
                    name="title"
                    type="text"
                    border
                  />
                )}
                <Dropdown styleclass="add-form" name="genre" />
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
                <Textarea
                  name="description"
                  placeholder="This is some sort of description of movie!"
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
