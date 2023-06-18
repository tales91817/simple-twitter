import React from 'react'

const Following = ({ followings } ) => {
  return (
    <div className="followStatus">
        {followings.map((following) => (
            <div className="followCard">
                <div className="followCardImg">
                    <img src={following.followingAvatar} alt="user-avatar" />
                </div>
                <div className="followCardRightSide">
                    <div className="cardTitle">
                        <div className="followCardName">
                            <strong>{following.followingName}</strong>
                        </div>
                        <div className="followed">
                        正在跟隨
                        </div>
                    </div>
                    <div className="followCardContent">
                        <p>{following.followingIntroduction}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Following