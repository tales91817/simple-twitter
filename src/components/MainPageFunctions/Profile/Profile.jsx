import React from 'react'
import './profile.scss'
import { ReactComponent as BackArrowIcon } from 'assets/icons/back-arrow.svg'
import UserInfo from './UserInfo.jsx/UserInfo'

const Profile = () => {
  return (
    <div className="profile-wrapper">
        <div className="profileHeader">
          <BackArrowIcon />
        </div>
        <div className="userInfo">
          <UserInfo />
        </div>

    </div>
  )
}

export default Profile