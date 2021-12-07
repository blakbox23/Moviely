import React from 'react'
import './style.css'
import { Input } from '../../atoms/Input/Input'
interface ManageMovieProps {}

export const ManageMovie: React.FC<ManageMovieProps> = ({}) => {
  return (
    <div className="manage-movie">
      <div className="manage-movie-container">
        <div className="manage-movie-half-container">
          <Input type="manage-movie-half" placeholder="my title" border />
          <Input type="manage-movie-half" placeholder="my title" border />
          <Input type="manage-movie-half" placeholder="my title" border />
          <Input type="manage-movie-half" placeholder="my title" border />
          <Input type="manage-movie-half" placeholder="my title" border />
          <Input type="manage-movie-half" placeholder="my title" border />
        </div>
        <div>
          <Input type="manage-movie-full" placeholder="my title" border />
        </div>
        <div>
          <textarea
            className="manage-movie-textarea"
            placeholder="This is some sort of description of movie!"
            name="description"
            // cols={130}
            // rows={10}
          ></textarea>
        </div>
        button
      </div>
    </div>
  )
}
