import { useField } from 'formik'
import React from 'react'

export const Textarea: React.FC<any> = ({ ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div>
      <textarea
        className="manage-movie-textarea"
        placeholder="This is some sort of description of movie!"
        {...field}
        {...props}
      ></textarea>
    </div>
  )
}
