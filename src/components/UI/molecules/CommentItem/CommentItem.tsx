import React, { useEffect } from 'react'
import './style.css'
import manicon from '../../../../assets/man 1.png'
import {
  addComment,
  fetchMovieById,
} from '../../../../store/Actions/MoviesAction'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../store/Reducers/rootReducers'
import { useParams } from 'react-router-dom'

interface CommentItemProps {
  comment?: string
  email?: string
  textbox?: boolean
  movieId?: string
}

// interface IcommentObject {
//   email: string
//   movieId: string
//   content: string
//   approved: boolean
// }

export const CommentItem: React.FC<CommentItemProps> = ({
  comment,
  email,
  movieId,
  textbox = false,
}) => {
  const { id } = useParams()

  const { pending, movie, error } = useSelector(
    (state: RootState) => state.movies,
  )
  const dispatch = useDispatch()

  let rmovieId: string
  if (id) {
    rmovieId = id
  }

  useEffect(() => {
    dispatch(fetchMovieById(rmovieId))
  }, [dispatch])

  const handleGetComment = (e: any) => {
    e.preventDefault()
    console.log({
      email,
      movieId: rmovieId,
      content: e.target[0].value,
      approved: false,
    })
    dispatch(
      addComment({
        email,
        movieId: rmovieId,
        content: e.target[0].value,
        approved: false,
      }),
    )
    e.target[0].value = ''
  }

  return (
    <div className="comment-item flex">
      <div className="movie-comment-profile flex">
        <div>
          <img src={manicon} alt="ppic" />
        </div>
        <p>{email}</p>
      </div>
      <div className="comment-item-text flex">
        {textbox ? (
          <div>
            <form action="" onSubmit={handleGetComment}>
              <input
                type="text"
                className="comment-textfield"
                placeholder="Leave your comment"
              />
              <input type="submit" className="submit-comment" value="Submit" />
            </form>
          </div>
        ) : (
          <div>
            <p>{comment}</p>
          </div>
        )}
      </div>
    </div>
  )
}
