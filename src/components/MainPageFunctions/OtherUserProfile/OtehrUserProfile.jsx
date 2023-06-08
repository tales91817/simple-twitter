import React from 'react'
import './otherUserProfile.scss'
import OtherUserInfo from './OtherUserInfo/OtherUserInfo'
import { ReactComponent as BackArrowIcon } from 'assets/icons/back-arrow.svg'



const OtehrUserProfile = () => {
  return (
    <div className="profile-wrapper">
        <div className="profileHeader">
            <BackArrowIcon className='arrow'/>
            <div className="backUser">
                <p className="username">
                    Jane Cathy
                </p>
                <p className="userTweetsNum">
                    45 推文
                </p>
            </div>
        </div>
        <div className="otherUserInfo">
            <OtherUserInfo />
        </div>
    </div>
    )
}

export default OtehrUserProfile