import React from 'react'
import clsx from 'clsx'
import './populars.scss'

/* eslint-disable */ 

const Populars = ({ trendUsers, onTogglefollow }) => {
  
  return (
    <div className='populars'>
      <div className="popularsHeader">
        <h4>推薦跟隨</h4>
      </div>
      <div className="populars-wrapper">
        {trendUsers.map((user) => (
          <div className="wrapper-content">
            <div className="popularCard">
              <div className="popularImg">
                <img src={user.userAvatar} alt="usrAvatar" />
              </div>
              <div className="popularContent">
                <div className="popularName">
                  {user.userName.length > 10 ? `${user.userName.slice(0, 5)}...` : user.userName}
                </div>
                <div className="popularAccount">
                  {user.userAccount}
                </div>
              </div>
            </div>
            <div className={clsx('followBtn', { 'followed': user.isFollowed })} 
              onClick={() => {
                onTogglefollow(user.id, user.isFollowed)
              }}>
              { user.isFollowed ? '正在跟隨' : '跟隨'}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Populars