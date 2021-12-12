import React from 'react'
import Button from '../../atoms/Button/Button'
import Text from '../../atoms/Text/Text'
import './style.css'
import comment from '../../../../assets/comment.png'

interface PendingCommentItemProps {}

export const PendingCommentItem: React.FC<PendingCommentItemProps> = ({}) => {
  return (
    <div>
      <div className="pending-comment-item flex">
        <div className="comment-details flex">
          <div>Userasdsdse</div>
          <div>Brave</div>
        </div>
        <div className="pending-comment-textcontainer">
          <img src={comment} alt="" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At odit
            debitis eligendi. Quidem voluptates quos ea qui magni consequatur
            illo quibusdam aliquam nihil! Cum, sed!
          </p>
        </div>
        <div className="pending-comments-buttons flex">
          <div>
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
      <div className="pending-comment-item flex">
        <div className="comment-details flex">
          <div>Userasdsdse</div>
          <div>Brave</div>
        </div>
        <div className="pending-comment-textcontainer">
          <img src={comment} alt="" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At odit
            debitis eligendi. Quidem voluptates quos ea qui magni consequatur
            illo quibusdam aliquam nihil! Cum, sed!
          </p>
        </div>
        <div className="pending-comments-buttons flex">
          <div>
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
