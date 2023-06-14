import React from 'react'
import './profile.scss'
import { ReactComponent as BackArrowIcon } from 'assets/icons/back-arrow.svg'
import UserInfo from './UserInfo.jsx/UserInfo'

const Profile = ({ onOpenEditModal, postCards, userInfo }) => {
  return (
    <div className="profile-wrapper">
        <div className="profileHeader">
          <BackArrowIcon className='arrow'/>
          <div className="backUser">
            <p className="topUsername">
                John Doe
            </p>
            <p className="userTweetsNum">
                25 推文
            </p>
          </div>
        </div>
        <div className="userInfo">
          <UserInfo onOpenEditModal={onOpenEditModal} postCards={postCards} userInfo={userInfo} />
        </div>

    </div>
  )
}

export default Profile