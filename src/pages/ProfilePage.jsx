/* eslint-disable */ 
import React, {useState} from 'react'
import Sidebar from 'components/MainPageFunctions/Sidebar/Sidebar';
import Profile from 'components/MainPageFunctions/Profile/Profile';
import Populars from 'components/MainPageFunctions/Populars/Populars';
import 'components/MainPageFunctions/mainPageStyles.scss'
import { DummyTrenders } from 'components/dummyDocument/DummyTrenders';

const ProfilePage = () => {
  const [ trendUsers, setTrenderUsers ] = useState(DummyTrenders)

  const handleToggleFollow = (id, isFollowed) => {
    setTrenderUsers((prevUsers) => {
      return prevUsers.map((trend) => {
        if (trend.id === id) {
          return {
            ...trend,
            isFollowed: !isFollowed,
          }
        }
        return trend
      })
    })
  }

  return (
    <div>
        <div className="container">
            <Sidebar />
            <Profile />
            <Populars trendUsers={trendUsers} onTogglefollow={handleToggleFollow}/>
        </div>
    </div>
  )
}

export default ProfilePage