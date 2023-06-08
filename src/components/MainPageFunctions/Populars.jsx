import React, { useState } from 'react'
import { ReactComponent as UserAvatar } from 'assets/icons/other-user-avatar.svg'
/* eslint-disable */ 

const Populars = () => {
  const [ trendUser, setTrendUser ] = useState([
      {
        id: 1,
        avatar: <UserAvatar />,
        name: 'Pizza Hut',
        account: '@pizzahut',
        Isfollowed: true,
      },
      {
        id: 2,
        avatar: <UserAvatar />,
        name: 'McDon ...',
        account: '@McDona...',
        Isfollowed: true,
      },
      {
        id: 3,
        avatar: <UserAvatar />,
        name: 'Bank of ...',
        account: '@McDona...',
        Isfollowed: true,
      },
    ])
  return (
    <div className='populars'>
      <div className="popularsHeader">
        <h4>推薦跟隨</h4>
      </div>
      <div className="populars-wrapper">
        {trendUser.map((user) => (
          <div className="wrapper-content">
            <div className="popularCard">
              <div className="popularImg">
                {user.avatar}
              </div>
              <div className="popularContent">
                <div className="popularName">
                  <p>{user.name}</p>
                </div>
                <div className="popularAccount">
                  <p>{user.account}</p>
                </div>
              </div>
            </div>
            <div className="followBtn">
              <p>跟隨</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Populars