import React from 'react'
import './style.css'
import man from '../../../../assets/man 1.png'
import Button from '../../atoms/Button/Button'

function PendingUserItem() {
  return (
    <div>
      <div className="pending-user-item flex">
        <div className="pendingusers-image flex">
          <div>
            <img src={man} alt="profile picture" />
          </div>
        </div>
        <div className="pendingusers-text">
          <div>Username</div>
          <div>LastName, FirstName</div>
        </div>
        <div className="pendingusers-buttons flex">
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
      <div className="pending-user-item flex">
        <div className="pendingusers-image flex">
          <div>
            <img src={man} alt="profile picture" />
          </div>
        </div>
        <div className="pendingusers-text">
          <div>Username</div>
          <div>LastName, FirstName</div>
        </div>
        <div className="pendingusers-buttons flex">
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

export default PendingUserItem
