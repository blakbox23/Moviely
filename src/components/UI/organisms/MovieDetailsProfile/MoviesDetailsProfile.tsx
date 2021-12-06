import React from 'react'
import './style.css'
import Text from '../../atoms/Text/Text'
import edit from '../../../../assets/edit 1.png'
import remove from '../../../../assets/remove 1.png'
import Vector from '../../../../assets/Vector.png'
import Vector1 from '../../../../assets/Vector(1).png'
import Vector2 from '../../../../assets/Vector(2).png'
import Vector3 from '../../../../assets/Vector(3).png'
import Vector4 from '../../../../assets/Vector(4).png'

interface MoviesDetailsProfileProps {}

export const MoviesDetailsProfile: React.FC<MoviesDetailsProfileProps> = ({}) => {
  return (
    <div className="movie-profile ">
      <div className="centerer flex">
        <div className="movie-profile-container flex">
          <div className=" movie-profile-pic">
            <img src="https://source.unsplash.com/B63UmuDkznY" alt="where" />
          </div>
          <div className=" movie-profile-details">
            <div className="movie-profile-title flex">
              <p className="movie-profile-title-name">Brave</p>
              <div className="movie-profile-icons">
                <img src={edit} alt="edit" />
                <img src={remove} alt="remove" />
              </div>
            </div>

            <div className="flex movie-profile-details-body">
              <div className="movie-profile-list flex">
                <div className="flex movie-profile-listitem">
                  <img src={Vector} alt="" />
                  <p> 120 min</p>
                </div>
                <div className="flex movie-profile-listitem">
                  <img src={Vector1} alt="" />
                  <p> USA</p>
                </div>
                <div className="flex movie-profile-listitem">
                  <img src={Vector2} alt="" />
                  <p> Animation</p>
                </div>
                <div className="flex movie-profile-listitem">
                  <img src={Vector3} alt="" />
                  <p> 2012</p>
                </div>
                <div className="flex movie-profile-listitem">
                  <img src={Vector4} alt="" />
                  <p> 4.7</p>
                </div>
              </div>
              <div className="movie-profile-description border">
                <p>
                  {' '}
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Fugiat molestias voluptas nisi soluta temporibus doloremque
                  aliquid nam aspernatur inventore. Ad?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="centerer flex movie-comments">
        <div className="movie-profile-container flex">
          <div className="border movie-profile-pic"></div>
          <div className="border movie-profile-details">12</div>
        </div>
      </div>
    </div>
  )
}
