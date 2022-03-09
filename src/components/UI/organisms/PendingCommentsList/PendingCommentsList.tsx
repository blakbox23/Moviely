import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllComments } from '../../../../store/Actions/CommentsActions'
import { RootState } from '../../../../store/Reducers/rootReducers'
import { PageHeader } from '../../molecules/PageHeader/PageHeader'
import { PendingCommentItem } from '../../molecules/PendingCommentItem/PendingCommentItem'
import './style.css'

interface PendingCommentsListProps {}

export const PendingCommentsList: React.FC<PendingCommentsListProps> = ({}) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllComments())
  }, [dispatch])

  const { pending, comments, error } = useSelector(
    (state: RootState) => state.comments,
  )
  const { movies } = useSelector((state: RootState) => state.movies)

  console.log('movies')
  console.log(movies)

  return (
    <div className="pending-comments-list">
      <PageHeader text="Pending comments" />
      {comments &&
        comments.map((comment) => (
          <div key={comment.id}>
            <PendingCommentItem
              id={comment.id}
              email={comment.email}
              content={comment.content}
              movieName={
                movies
                  .filter((movie) => movie.id === comment.movieId)
                  .map((movie) => movie.title)[0]
              }
              approved={comment.approved}
            />
          </div>
        ))}
    </div>
  )
}
