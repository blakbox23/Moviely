import React from 'react'
import { PageHeader } from '../../molecules/PageHeader/PageHeader'
import { PendingCommentItem } from '../../molecules/PendingCommentItem/PendingCommentItem'
import './style.css'

interface PendingCommentsListProps {}

export const PendingCommentsList: React.FC<PendingCommentsListProps> = ({}) => {
  return (
    <div className="pending-comments-list">
      <PageHeader text="Pending comments" />
      <PendingCommentItem />
    </div>
  )
}
