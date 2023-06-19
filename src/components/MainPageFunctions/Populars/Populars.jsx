import React, { Fragment } from 'react'
import clsx from 'clsx'
import './populars.scss'

const currentUserId = localStorage.getItem("id")

const Populars = ({ trendUsers, onChangeFollow }) => {
  
  return (
    <div className="populars">
      <div className="popularsHeader">
        <h4>推薦跟隨</h4>
      </div>
      <div className="populars-wrapper">
        {trendUsers.map((user) => (
          <div className="wrapper-content">
            <div className="popularCard" key={user.userId}>
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
            <div className={clsx('followBtn', { 'followed': user.isFollowed })} onClick={() => onChangeFollow(user.userId, user.isFollowed)}>
              { user.id === currentUserId ? '' : ''}
              { user.isFollowed ? '正在跟隨' : '跟隨'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Populars