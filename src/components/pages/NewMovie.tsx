import React from 'react'
import { ManageMovie } from '../UI/organisms/ManageMovie/ManageMovie'
import './style.css'

function NewMovie() {
  return (
    <div className="outer-page-container">
      <ManageMovie
        headerText={'New Movie'}
        id={''}
        title={''}
        genre={''}
        year={''}
        runtime={''}
        imageUrl={''}
        country={''}
        trailerUrl={''}
        description={''}
        commentscount={0}
        averagerating={0}
      />
    </div>
  )
}

export default NewMovie
