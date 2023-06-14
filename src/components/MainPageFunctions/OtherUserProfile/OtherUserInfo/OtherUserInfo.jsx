import React from 'react'
import './otherUserInfo.scss'
import StateContent from 'components/MainPageFunctions/Profile/StateContent/StateContent'
import { ReactComponent as Msg } from 'assets/icons/msg.svg'
import { ReactComponent as Notify } from 'assets/icons/notify.svg'

const OtherUserInfo = ({ userInfo, postCards }) => {
  return (
    <div className="other-userInfo-wrapper">
      <div className="OtherInfoContent">
        <div className="OtherUserBanner">
          <img src={userInfo.cover} alt='banner' />
        </div>
        <div className="otherUserPhoto">
          <img src={userInfo.avatar} alt='avatar' />
        </div>
      </div>
      <div className="btnCollection">
          <Notify />
          <Msg />
          <div className="followingBtn">
              正在跟隨
          </div>
      </div>
        
      <div className="otherUserTextContent">
        <div className="otherUsername">{userInfo.name}</div>
        <div className="otherUserAccount">@{userInfo.account}</div>
        <div className="otherUserDescription">
            {userInfo.introduction}
        </div>  
        <div className="followingStatus">
          <span className='numbers'>{userInfo.following}個</span><p>跟隨中</p>
          <span className="numbers">{userInfo.follower}位</span><p>跟隨者</p>
        </div>
      </div>
      <StateContent postCards={postCards} />
    </div>
  )
}

export default OtherUserInfo