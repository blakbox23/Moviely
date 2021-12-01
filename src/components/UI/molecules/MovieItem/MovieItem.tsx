import React from 'react'
import './style.css'
import Text from '../../atoms/Text/Text'
import star from '../../../../assets/star.png'
import comment from '../../../../assets/comment.png'
import Button from '../../atoms/Button/Button'
import { images } from '../../../../constants/missingimage'
import { colors } from '../../../../constants/colors'

interface MovieItemProps {
  image?: string
  title: string
  description: string
}

export const MovieItem: React.FC<MovieItemProps> = ({
  image = images.missingimage,
  title,
  description,
}) => {
  return (
    <div className="movie-card ">
      <div
        className={'movie-card-image'}
        style={{
          background: `url(${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="grad"></div>
      </div>

      <div className="card-title-div flex">
        <div>
          <Text text={title} type={'movietitle'} />
        </div>

        <div className="flex movie-item-icons">
          <Text text="29" type="small" />
          <img src={comment} alt="comment" />
          <Text text="4.2" type="small" />
          <img src={star} alt="votes" />
        </div>
      </div>

      <div className="movie-description">
        <Text text={description} type="small" />
      </div>

      <div className="buttons flex">
        <Button
          buttontext="Edit"
          placement={'movie-card-button'}
          color={colors.PRIMARYBTN}
        />
        <Button
          buttontext="Delete"
          placement={'movie-card-button'}
          color={colors.SECONDARYBTN}
        />
      </div>
    </div>
  )
}
