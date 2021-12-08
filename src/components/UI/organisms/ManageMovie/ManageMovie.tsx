import React from 'react'
import './style.css'
import { Input } from '../../atoms/Input/Input'
import { PageHeader } from '../../molecules/PageHeader/PageHeader'
interface ManageMovieProps {}

export const ManageMovie: React.FC<ManageMovieProps> = ({}) => {
  return (
    <div className="manage-movie">
      <PageHeader text="New Movie" />
      <form action="">
        <div className="manage-movie-container">
          <div className="manage-movie-half-container">
            <Input type="manage-movie-half" placeholder="my title" border />

            <select className="manage-movie-half genre-drop" name="genres">
              <option value="genre">Genre</option>
              <option value="action">Action</option>
              <option value="horror">Horror</option>
              <option value="comedy">Comedy</option>
            </select>

            <Input type="manage-movie-half" placeholder="Year" border />
            <Input type="manage-movie-half" placeholder="Runtime" border />
            <Input type="manage-movie-half" placeholder="Image Url" border />
            <Input type="manage-movie-half" placeholder="Country" border />
          </div>
          <div>
            <Input type="manage-movie-full" placeholder="Trailer Url" border />
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
          <input
            type="submit"
            className="form-submit-button flex"
            value="Submit"
          />
        </div>
      </form>
    </div>
  )
}
