import React from 'react'
import './style.css'
import manicon from '../../../../assets/man 1.png'

interface CommentItemProps {
  comment: string
  email: string
}

export const CommentItem: React.FC<CommentItemProps> = ({ comment, email }) => {
  return (
    <div className="comment-item border flex">
      <div className="movie-comment-profile flex">
        <div>
          <img src={manicon} alt="ppic" />
        </div>
        <p>{email}</p>
      </div>
      <div className="comment-item-text flex">
        <p>{comment}</p>
      </div>
    </div>
  )
}
