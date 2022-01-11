import React from 'react'
import { PageHeader } from '../../molecules/PageHeader/PageHeader'
import './style.css'
import PendingUserItem from '../../molecules/PendingUserItem/PendingUserItem'

interface PendingUsersListProps {}

export const PendingUsersList: React.FC<PendingUsersListProps> = ({}) => {
  return (
    <div className="pending-users-list">
      <PageHeader text="Pending users" />
      <PendingUserItem />
    </div>
  )
}
