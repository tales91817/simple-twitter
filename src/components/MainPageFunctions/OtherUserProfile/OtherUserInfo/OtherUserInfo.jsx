import React from 'react'
import './otherUserInfo.scss'
import StateContent from 'components/MainPageFunctions/Profile/StateContent/StateContent'
import OtherUserAvatar from 'assets/images/other-user-Jane-Cathy.png'
import { ReactComponent as OtherUserBanner } from 'assets/images/otheruser-info-banner.svg'
import { ReactComponent as Msg } from 'assets/icons/msg.svg'
import { ReactComponent as Notify } from 'assets/icons/notify.svg'

const OtherUserInfo = () => {
  return (
    <div className="other-userInfo-wrapper">
      <div className="OtherInfoContent">
        <div className="OtherUserBanner">
          <OtherUserBanner className='otherUserBannerImg'/>
        </div>
        <div className="otherUserPhoto">
          <img src={OtherUserAvatar} alt='avatar' />
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
        <div className="otherUsername">Jane Cathy</div>
        <div className="otherUserAccount">@iamjane1999</div>
        <div className="otherUserDescription">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </div>  
        <div className="followingStatus">
          <span className='numbers'>231個</span><p>跟隨中</p>
          <span className="numbers">45位</span><p>跟隨者</p>
        </div>
      </div>
      <StateContent />
    </div>
  )
}

export default OtherUserInfo