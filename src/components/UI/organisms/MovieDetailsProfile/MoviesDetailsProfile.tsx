import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './style.css'
import Text from '../../atoms/Text/Text'
import edit from '../../../../assets/edit 1.png'
import remove from '../../../../assets/remove 1.png'
import Vector from '../../../../assets/Vector.png'
import Vector1 from '../../../../assets/Vector(1).png'
import Vector2 from '../../../../assets/Vector(2).png'
import Vector3 from '../../../../assets/Vector(3).png'
import Vector4 from '../../../../assets/Vector(4).png'
import { CommentItem } from '../../molecules/CommentItem/CommentItem'
import { PageHeader } from '../../molecules/PageHeader/PageHeader'
import { fetchMovieById } from '../../../../store/Actions/MoviesAction'
import { Icomment, IMovie, Irating } from '../../../../store/types/types'
// import { FetchMovieByIDPayload } from '../../../../store/types/types'
import { RootState } from '../../../../store/Reducers/rootReducers'

interface MoviesDetailsProfileProps {
  id: string
  title: string
  genre?: string
  year?: number
  runtime?: number
  imageUrl?: string
  country?: string
  description?: string
  comments?: Icomment[]
  ratings: Irating[]
  movieTrailer?: string
}

export const MoviesDetailsProfile: React.FC<MoviesDetailsProfileProps> = ({
  id,
  title,
  genre,
  year,
  runtime,
  imageUrl,
  country,
  description,
  comments,
  ratings,
  movieTrailer,
}) => {
  return (
    <div className="movie-profile ">
      <div className="centerer flex">
        <div className="movie-profile-container flex">
          <div className=" movie-profile-pic">
            <img src={imageUrl} alt="where" />
          </div>
          <div className=" movie-profile-details">
            <div className="movie-profile-title flex">
              <p className="movie-profile-title-name">{title}</p>
              <div className="movie-profile-icons">
                <img src={edit} alt="edit" />
                <img src={remove} alt="remove" />
              </div>
            </div>

            <div className="flex movie-profile-details-body">
              <div className="movie-profile-list flex">
                <div className="flex movie-profile-listitem">
                  <img src={Vector} alt="" />
                  <p> {runtime}</p>
                </div>
                <div className="flex movie-profile-listitem">
                  <img src={Vector1} alt="" />
                  <p> {country}</p>
                </div>
                <div className="flex movie-profile-listitem">
                  <img src={Vector2} alt="" />
                  <p> {genre}</p>
                </div>
                <div className="flex movie-profile-listitem">
                  <img src={Vector3} alt="" />
                  <p> {year}</p>
                </div>
                <div className="flex movie-profile-listitem">
                  <img src={Vector4} alt="" />
                  <p> {ratings[0].grade}</p>
                </div>
              </div>
              <div className="movie-profile-description border">
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex border movie-comments">
        <div>
          <PageHeader />
        </div>
        <div className="movie-comments-container">
          {comments?.map((comment) => (
            <div className="movie-comment">
              <CommentItem email={comment.email} comment={comment.content} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
