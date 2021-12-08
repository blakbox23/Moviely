import React from 'react'
import './style.css'
import { Input } from '../../atoms/Input/Input'
import { PageHeader } from '../../molecules/PageHeader/PageHeader'
import { fonts } from '../../../../constants/fonts'
import { Dropdown } from '../../atoms/Dropdown/Dropdown'
import { Textarea } from '../../atoms/Textarea/Textarea'
interface ManageMovieProps {}

export const ManageMovie: React.FC<ManageMovieProps> = ({}) => {
  return (
    <div className="manage-movie" style={{ fontFamily: fonts.FORMFONT }}>
      <PageHeader text="New Movie" />
      <form action="">
        <div className="manage-movie-container">
          <div className="manage-movie-half-container">
            <Input type="manage-movie-half" placeholder="my title" border />
            <Dropdown type="add-form" />
            <Input type="manage-movie-half" placeholder="Year" border />
            <Input type="manage-movie-half" placeholder="Runtime" border />
            <Input type="manage-movie-half" placeholder="Image Url" border />
            <Input type="manage-movie-half" placeholder="Country" border />
          </div>
          <div>
            <Input type="manage-movie-full" placeholder="Trailer Url" border />
            <Textarea />
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
