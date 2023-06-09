import React from 'react'
import './userInfo.scss'
import StateContent from 'components/MainPageFunctions/Profile/StateContent/StateContent'
import { ReactComponent as BannerImg } from 'assets/images/user-info-banner.svg'

const UserInfo = () => {
  return (
    <div className="userInfo-wrapper">
        <div className="userBanner">
          <BannerImg className='bannerImg'/>
        </div>
        <div className="userPhoto">
        </div>
        <div className="editBtn">編輯個人資料</div>
        <div className="userTextContent">
          <div className="username">John Doe</div>
          <div className="userAccount">@heyjohn</div>
          <div className="userDescription">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </div>  
          <div className="followingStatus">
            <span className='numbers'>34個</span><p>跟隨中</p>
            <span className="numbers">59位</span><p>跟隨者</p>
          </div>
        </div>
        <StateContent />
    </div>
  )
}

export default UserInfo