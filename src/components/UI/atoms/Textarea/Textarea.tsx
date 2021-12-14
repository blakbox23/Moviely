import { ErrorMessage, useField } from 'formik'
import React from 'react'

export const Textarea: React.FC<any> = ({ ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div>
      <textarea className="manage-movie-textarea" {...field} {...props}>
        {' '}
      </textarea>
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  )
}
