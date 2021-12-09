import React from 'react'
import './style.css'
import { ErrorMessage, useField } from 'formik'

export const Dropdown: React.FC<any> = ({ ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div>
      <select
        className={`genre-drop ${props.styleclass}`}
        {...props}
        {...field}
      >
        <option value="genre">Genre</option>
        <option value="action">Action</option>
        <option value="horror">Horror</option>
        <option value="comedy">Comedy</option>
      </select>
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  )
}
