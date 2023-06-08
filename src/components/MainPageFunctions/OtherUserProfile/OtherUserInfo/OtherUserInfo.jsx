import React from 'react'
import './otherUserInfo.scss'
import StateContent from 'components/MainPageFunctions/Profile/StateContent/StateContent'
import { ReactComponent as BannerImg } from 'assets/images/otheruser-info-banner.svg'
import { ReactComponent as Msg } from 'assets/icons/msg.svg'
import { ReactComponent as Notify } from 'assets/icons/notify.svg'

const OtherUserInfo = () => {
  return (
    <div className="userInfo-wrapper">
        <div className="userBanner">
          <BannerImg className='bannerImg'/>
          
        </div>
        <div className="userPhoto">
        </div>
        <div className="btnCollection">
            <Notify />
            <Msg />
            <div className="followingBtn">
                <p>正在跟隨</p>
            </div>
        </div>
        
        <div className="userTextContent">
          <div className="username">Jane Cathy</div>
          <div className="userAccount">@iamjane1999</div>
          <div className="userDescription">
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