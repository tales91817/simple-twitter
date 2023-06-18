import React from 'react'
import './otherUserProfile.scss'
import OtherUserInfo from './OtherUserInfo/OtherUserInfo'
import { ReactComponent as BackArrowIcon } from 'assets/icons/back-arrow.svg'

const OtherUserProfile = ({ userInfo, postCards, onOpenModalReply }) => {
  return (
    <div className="profile-wrapper">
        <div className="profileHeader">
            <BackArrowIcon className='arrow'/>
            <div className="backUser">
                <p className="username">
                    {userInfo.name}
                </p>
                <p className="userTweetsNum">
                    {postCards.length} 推文
                </p>
            </div>
        </div>
        <div className="otherUserInfo">
            <OtherUserInfo userInfo={userInfo} postCards={postCards} onOpenModalReply={onOpenModalReply} />
        </div>
    </div>
    )
}

export default OtherUserProfile