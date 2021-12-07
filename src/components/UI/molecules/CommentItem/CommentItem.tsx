import React from 'react'
import './style.css'
import manicon from '../../../../assets/man 1.png'

interface CommentItemProps {
  comment?: string
  email?: string
  textbox?: boolean
}

export const CommentItem: React.FC<CommentItemProps> = ({
  comment,
  email,
  textbox = false,
}) => {
  return (
    <div className="comment-item border flex">
      <div className="movie-comment-profile flex">
        <div>
          <img src={manicon} alt="ppic" />
        </div>
        <p>{email}</p>
      </div>
      <div className="comment-item-text flex">
        {textbox ? (
          <div>
            <form action="">
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
