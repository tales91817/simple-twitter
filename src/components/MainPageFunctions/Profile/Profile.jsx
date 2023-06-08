import React from 'react'
import './profile.scss'
import { ReactComponent as BackArrowIcon } from 'assets/icons/back-arrow.svg'
import UserInfo from './UserInfo.jsx/UserInfo'

const Profile = () => {
  return (
    <div className="profile-wrapper">
        <div className="profileHeader">
          <BackArrowIcon />
          <div className="backUser">
            <p className="username">
                John Doe
            </p>
            <p className="userTweetsNum">
                25 推文
            </p>
            </div>
        </div>
        <div className="userInfo">
          <UserInfo />
        </div>

    </div>
  )
}

export default Profile