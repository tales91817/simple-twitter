import React from 'react'
import './userInfo.scss'
import clsx from 'clsx'
import StateContent from 'components/MainPageFunctions/Profile/StateContent/StateContent'
import { ReactComponent as Msg } from 'assets/icons/msg.svg'
import { ReactComponent as Notify } from 'assets/icons/notify.svg'

const currentUserId = Number(localStorage.getItem("id"))


const UserInfo = ({ onOpenEditModal, postCards, userInfo, onToggleLike, onOpenModalReply, likes, allReplies, onClickFollow }) => {

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
      {currentUserId === userInfo.id ? 
        <div className="editBtn" onClick={() => {
          onOpenEditModal()
        }}>編輯個人資料</div> : 
        <div className="btnCollection">
          <Notify />
          <Msg />
          <div className={clsx('followBtn', { 'followed': userInfo.isFollowed })} onClick={() => {
            onClickFollow(userInfo.id, userInfo.isFollowed)
          }}>
          { userInfo.isFollowed ? '正在跟隨' : '跟隨'}
          </div>
      </div> }
      <div className="userTextContent">
        <div className="username">{userInfo.name}</div>
        <div className="userAccount">@{userInfo.account}</div>
        <div className="userDescription">
            {userInfo.introduction}
        </div>  
        <div className="followingStatus">
          <span className='numbers'>{userInfo.following}個</span><p>跟隨中</p>
          <span className="numbers">{userInfo.follower}位</span><p>跟隨者</p>
        </div>
      </div>
      <StateContent postCards={postCards} onToggleLike={onToggleLike} onOpenModalReply={onOpenModalReply} likes={likes} allReplies={allReplies}/>
    </div>
  )
}

export default UserInfo