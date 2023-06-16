import React from 'react'
import './userInfo.scss'
import StateContent from 'components/MainPageFunctions/Profile/StateContent/StateContent'

const UserInfo = ({ onOpenEditModal, postCards, userInfo, onToggleLike, onOpenModalReply, likes }) => {
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
      <StateContent postCards={postCards} onToggleLike={onToggleLike} onOpenModalReply={onOpenModalReply} likes={likes}/>
    </div>
  )
}

export default UserInfo