import React from 'react'
import './userInfo.scss'
import StateContent from 'components/MainPageFunctions/Profile/StateContent/StateContent'
import UserAvatar from 'assets/images/main-user-John-Doe.png'
import { ReactComponent as BannerImg } from 'assets/images/user-info-banner.svg'

const UserInfo = ({ onOpenEditModal, postCards, userInfo }) => {
  return (
    <div className="userInfo-wrapper">
      <div className="infoContent">
        <div className="userBanner">
          <img src={userInfo.cover} alt="banner" />
        </div>
        <div className="userPhoto">
          <img src={userInfo.avatar} alt="avatar" />
        </div>
      </div>
      <div className="editBtn" onClick={() => {
        onOpenEditModal()
      }}>
        編輯個人資料</div>
      <div className="userTextContent">
        <div className="username">{userInfo.name}</div>
        <div className="userAccount">@{userInfo.account}</div>
        <div className="userDescription">
            {userInfo.description}
        </div>  
        <div className="followingStatus">
          <span className='numbers'>{userInfo.following}個</span><p>跟隨中</p>
          <span className="numbers">{userInfo.follower}位</span><p>跟隨者</p>
        </div>
      </div>
      <StateContent postCards={postCards}/>
    </div>
  )
}

export default UserInfo