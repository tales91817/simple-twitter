import React, { useState } from 'react'
import { ReactComponent as BackArrowIcon } from 'assets/icons/back-arrow.svg'
import './follower.scss'
import Follower from './FollowingInfo/Follower'
import Following from './FollowingInfo/Following'


const FollowInfo = ({ followers, followings }) => {
    const [activeTab, setActiveTab] = useState("follower");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

  return (
    <div className='followContainer'>
      <div className="followListHeader">
        <BackArrowIcon className='arrow'/>
        <p className="backText">
          推文
        </p>
      </div>
      <div className="followPost">
        <div className="followcollection">
            <div className={activeTab === "follower" ? "active" : "class"} onClick={() => {
              handleTabChange("follower")
            }} >追隨者</div>
            <div className={activeTab === "following" ? "active" : "class"} onClick={() => {
              handleTabChange("following")
            }} >正在追隨</div>
        </div>
      </div>
      {activeTab === "follower" && <Follower followers={followers} />}
      {activeTab === "following" && <Following followings={followings} />}
      
    </div>
  )
}

export default FollowInfo