import React, { useEffect } from 'react'
import Button from '../../atoms/Button/Button'
import Text from '../../atoms/Text/Text'
import './style.css'
import comment from '../../../../assets/comment.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../store/Reducers/rootReducers'
import {
  approveComments,
  getAllComments,
} from '../../../../store/Actions/CommentsActions'

interface PendingCommentItemProps {
  id: string
  email: string
  content: string
  movieName: string
  approved: boolean
}

export const PendingCommentItem: React.FC<PendingCommentItemProps> = ({
  id,
  email,
  content,
  movieName,
  approved,
}) => {
  const dispatch = useDispatch()
  // const { pending, movies, error } = useSelector(
  //   (state: RootState) => state.movies,
  // )

  const handleApprove = () => {
    console.log('approved')
    dispatch(approveComments(id))
  }

  return (
    <div>
      <div className="pending-comment-item flex">
        <div className="comment-details flex">
          <div>{email}</div>
          <div>{movieName}</div>
        </div>
        <div className="pending-comment-textcontainer">
          <img src={comment} alt="" />
          <p>{content}</p>
        </div>
        <div className="pending-comments-buttons flex">
          <div onClick={handleApprove}>
            <Button
              placement="watched-movies"
              buttontext="Approve"
              color="#F4242480"
            />
          </div>
          <div>
            <Button
              placement="watched-movies"
              buttontext="Deny"
              color="#2596BE80"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
