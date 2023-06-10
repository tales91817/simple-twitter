import React, {useState} from 'react'
import OtehrUserProfile from 'components/MainPageFunctions/OtherUserProfile/OtehrUserProfile';
import Populars from 'components/MainPageFunctions/Populars/Populars';
import Sidebar from 'components/MainPageFunctions/Sidebar/Sidebar'
import { DummyTrenders } from 'components/dummyDocument/DummyTrenders';

const OtherUserPage = () => {

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
    <div className="container">
        <Sidebar />
        <OtehrUserProfile />
        <Populars trendUsers={trendUsers} onTogglefollow={handleToggleFollow}/>
    </div>
  )
}

export default OtherUserPage