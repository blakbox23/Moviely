import React from 'react'
import './style.css'
import manicon from '../../../../assets/man 1.png'

interface CommentItemProps {}

export const CommentItem: React.FC<CommentItemProps> = ({}) => {
  return (
    <div className="comment-item border flex">
      <div className="movie-comment-profile flex">
        <div>
          <img src={manicon} alt="ppic" />
        </div>
        <p>my-username</p>
      </div>
      <div className="comment-item-text flex">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
          dolorem amet consequuntur?
        </p>
      </div>
    </div>
  )
}
