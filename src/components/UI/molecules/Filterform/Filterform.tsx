import React from 'react'
import { Input } from '../../atoms/Input/Input'
import './style.css'
import { fonts } from '../../../../constants/fonts'
import { Dropdown } from '../../atoms/Dropdown/Dropdown'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../store/Reducers/rootReducers'
import { fetchFilteredMovies } from '../../../../store/Actions/MoviesAction'
import { validate } from '../../../../Validation/FilterFormValidation'

interface FilterFormValues {
  title: string
  genre: string
  year: string
  grade: number
}

function Filterform() {
  const dispatch = useDispatch()

  const { pending, searchedMovies, error } = useSelector(
    (state: RootState) => state.movies,
  )

  console.log('searchedMoviescomponent')
  console.log(searchedMovies)

  const initialValues: FilterFormValues = {
    title: '',
    genre: '',
    year: '',
    grade: 3,
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validate}
      onSubmit={(values: FilterFormValues, { resetForm }) => {
        console.log(values)
        dispatch(fetchFilteredMovies(values))
        // resetForm({ values: initialValues })
      }}
    >
      {(formik) => (
        <div>
          <Form>
            <div className="flex filter-top">
              <Input
                placeholder="Title"
                styleclass="filter"
                name="title"
                type="text"
                border
              />
              <Dropdown styleclass="filter" name="genre" />

              <Input
                placeholder="Year"
                styleclass="filter"
                type="text"
                name="year"
                border
              />
            </div>
            <div className="flex filter-bottom">
              <div>
                <Input
                  placeholder="myplace holder"
                  styleclass="filter"
                  name="grade"
                  type="range"
                  min="0"
                  max="5"
                  border
                />
                <label
                  className="flex grade-label"
                  style={{ fontFamily: fonts.FORMFONT }}
                >
                  <div>0</div>
                  <div>Minimum grade</div>
                  <div>5</div>
                </label>
              </div>
              <input className="submit-input" type="submit" value="" />
            </div>
          </Form>
        </div>
      )}
    </Formik>
  )
}

export default Filterform
