import React from 'react'
import { ManageMovie } from '../UI/organisms/ManageMovie/ManageMovie'
import './style.css'

function NewMovie() {
  return (
    <div className="outer-page-container">
      <ManageMovie
        headerText={'New Movie'}
        title={''}
        genre={''}
        year={''}
        runtime={''}
        imageUrl={''}
        country={''}
        trailerUrl={''}
        description={''}
      />
    </div>
  )
}

export default NewMovie
