import React from 'react'

const Follower = ({ followers }) => {
  return (
    <div className="followStatus">
        {followers.map((follower) => (
            <div className="followCard">
                <div className="followCardImg">
                    <img src={follower.followerAvatar} alt="user-avatar" />
                </div>
                <div className="followCardRightSide">
                    <div className="cardTitle">
                        <div className="followCardName">
                            <strong>{follower.followerName}</strong>
                        </div>
                        <div className="followed">
                        正在跟隨
                        </div>
                    </div>
                    <div className="followCardContent">
                        <p>{follower.followerIntroduction}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Follower