import React from 'react'

interface TextareaProps {}

export const Textarea: React.FC<TextareaProps> = ({}) => {
  return (
    <div>
      <textarea
        className="manage-movie-textarea"
        placeholder="This is some sort of description of movie!"
        name="description"
      ></textarea>
    </div>
  )
}
