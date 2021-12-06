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
import { IMovie } from '../../../../store/types/types'
// import { FetchMovieByIDPayload } from '../../../../store/types/types'
import { RootState } from '../../../../store/Reducers/rootReducers'
// interface MoviesDetailsProfileProps {}

export const MoviesDetailsProfile: React.FC<IMovie> = ({ ...IMovie }) => {
  let id = '52635p'

  const { pending, movie, error } = useSelector(
    (state: RootState) => state.movie,
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMovieById(id))
  }, [dispatch])

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
                  <p> {movie.country}</p>
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

      <div className="flex border movie-comments">
        <div>
          <PageHeader />
        </div>
        <div className="movie-comments-container">
          <div className="movie-comment">
            <CommentItem />
          </div>
          <div className="movie-comment">
            <CommentItem />
          </div>
        </div>
      </div>
    </div>
  )
}
