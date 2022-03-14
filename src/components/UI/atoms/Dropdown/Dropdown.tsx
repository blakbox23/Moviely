import React from 'react'
import './style.css'
import { ErrorMessage, useField } from 'formik'

export const Dropdown: React.FC<any> = ({ ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
      {props.name === 'genre' ? (
        <div>
          <select
            className={`genre-drop ${props.styleclass}`}
            {...props}
            {...field}
          >
            <option value="">Genre</option>
            <option value="action">Action</option>
            <option value="horror">Horror</option>
            <option value="comedy">Comedy</option>
          </select>
          <ErrorMessage component="div" name={field.name} className="error" />
        </div>
      ) : (
        <div>
          <select
            className={`gender-drop ${props.styleclass}`}
            {...props}
            {...field}
          >
            <option value="">&#x26A5; Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <ErrorMessage component="div" name={field.name} className="error" />
        </div>
      )}
    </>
  )
}
