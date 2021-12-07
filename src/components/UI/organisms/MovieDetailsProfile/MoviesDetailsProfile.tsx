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
import star from '../../../../assets/star.png'
import { fonts } from '../../../../constants/fonts'

var movie: IMovie

const user = {
  admin: false,
}

export const MoviesDetailsProfile: React.FC<typeof movie> = ({ ...IMovie }) => {
  return (
    <div className="movie-profile" style={{ fontFamily: fonts.FORMFONT }}>
      <div className="centerer flex">
        <div className="movie-profile-container flex">
          <div className=" movie-profile-pic">
            <img src={IMovie.imageUrl} alt="where" />
          </div>
          <div className=" movie-profile-details">
            <div className="movie-profile-title flex">
              <p className="movie-profile-title-name">{IMovie.title}</p>
              {user.admin ? (
                <div className="movie-profile-icons">
                  <img src={edit} alt="edit" />
                  <img src={remove} alt="remove" />
                </div>
              ) : (
                <div className="movie-rating ">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
              )}
            </div>

            <div className="flex movie-profile-details-body">
              <div className="movie-profile-list flex">
                <div className="flex movie-profile-listitem">
                  <img src={Vector} alt="" />
                  <p> {IMovie.runtime}</p>
                </div>
                <div className="flex movie-profile-listitem">
                  <img src={Vector1} alt="" />
                  <p> {IMovie.country}</p>
                </div>
                <div className="flex movie-profile-listitem">
                  <img src={Vector2} alt="" />
                  <p> {IMovie.genre}</p>
                </div>
                <div className="flex movie-profile-listitem">
                  <img src={Vector3} alt="" />
                  <p> {IMovie.year}</p>
                </div>
                <div className="flex movie-profile-listitem">
                  <img src={Vector4} alt="" />
                  <p> {IMovie.ratings[0].grade}</p>
                  {console.log(IMovie.ratings)}
                </div>
              </div>
              <div className="movie-profile-description">
                <p>{IMovie.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {!user.admin && (
        <div className="flex add-watchlist-prompt">
          <p>
            This movies is not in your watched list. Would you like to add it?
          </p>
          <button className="add-watchlist-button">Add to my watch list</button>
        </div>
      )}

      <div className="flex movie-comments">
        <div>
          <PageHeader />
        </div>
        <div className="movie-comments-container">
          <div className="movie-comment">
            {user.admin === false && (
              <div className="comment-item-text flex">
                <CommentItem textbox={true} email="@dummyemail" />
              </div>
            )}
          </div>
          {IMovie.comments?.map((comment) => (
            <div className="movie-comment" key={comment.id}>
              <CommentItem email={comment.email} comment={comment.content} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
