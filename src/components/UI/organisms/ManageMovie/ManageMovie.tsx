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
import {
  createMovie,
  fetchMoviesByTitle,
} from '../../../../store/Actions/MoviesAction'
import { RootState } from '../../../../store/Reducers/rootReducers'
import Toast from 'react-bootstrap/Toast'

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
  // const [show, setShow] = useState<boolean>(false)

  const dispatch = useDispatch()

  const { pending, moviesByTitle, error } = useSelector(
    (state: RootState) => state.movies,
  )

  console.log(moviesByTitle)

  // let movieTitles: string[] = movies.map((movie) => movie.title)

  // const checker = (movieTitles: string[], newMovietitle: string) => {
  //   const found = movies.some(
  //     (movie: { title: string }) => movie.title === newMovietitle,
  //   )
  //   if (found) return true
  // }

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
      validationSchema={validate}
      onSubmit={(values: MyFormValues, { resetForm }) => {
        // if (checker(movieTitles, values.title)) {
        //   return alert(`The movie title ${values.title} already exists.`)
        // } else {
        //   dispatch(createMovie(values))
        //   resetForm({ values: initialValues })
        // }
        console.log(moviesByTitle)

        dispatch(fetchMoviesByTitle(values.title))
        moviesByTitle && moviesByTitle.length < 1
          ? alert('This title is taken')
          : dispatch(createMovie(values))
        resetForm({ values: initialValues })
      }}
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
                <Textarea name="description" />
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

// function getMoviesByTitle(): any {
//   throw new Error('Function not implemented.')
// }
