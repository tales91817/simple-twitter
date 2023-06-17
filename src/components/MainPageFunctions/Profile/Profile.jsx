import React from 'react'
import './profile.scss'
import { ReactComponent as BackArrowIcon } from 'assets/icons/back-arrow.svg'
import UserInfo from './UserInfo.jsx/UserInfo'


const Profile = ({ onOpenEditModal, postCards, userInfo, allReplies, onToggleLike, onOpenModalReply, likes, onClickFollow }) => {
  return (
    <div className="profile-wrapper">
        <div className="profileHeader">
          <BackArrowIcon className='arrow'/>
          <div className="backUser">
            <p className="topUsername">
                {userInfo.name}
            </p>
            <p className="userTweetsNum">
                {postCards.length} 推文
            </p>
          </div>
        </div>
        <div className="userInfo">
          <UserInfo onOpenEditModal={onOpenEditModal} postCards={postCards} userInfo={userInfo} onToggleLike={onToggleLike} onOpenModalReply={onOpenModalReply} likes={likes} allReplies={allReplies} onClickFollow={onClickFollow} />
        </div>
    </div>
  )
}

export default Profile