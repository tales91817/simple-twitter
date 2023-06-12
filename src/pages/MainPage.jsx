/* eslint-disable */ 
import React, { useState } from 'react'
import Sidebar from 'components/MainPageFunctions/Sidebar';
import Twittes from 'components/MainPageFunctions/Twittes';
import Populars from 'components/MainPageFunctions/Populars';
import Profile from 'components/MainPageFunctions/Profile/Profile';
import OtherUserProfile from 'components/MainPageFunctions/OtherUserProfile/OtehrUserProfile'
import 'components/MainPageFunctions/mainPageStyles.scss'
import { ReactComponent as UserAvatar } from 'assets/icons/other-user-avatar.svg'
import { ReactComponent as PostUserAvatar } from 'assets/icons/other-user-avatar.svg'

const dummyTrenders = [
  {
    id: 1,
    avatar: <UserAvatar />,
    name: 'Pizza Hut',
    account: '@pizzahut',
    isFollowed: true,
  },
  {
    id: 2,
    avatar: <UserAvatar />,
    name: 'McDon ...',
    account: '@McDona...',
    isFollowed: false,
  },
  {
    id: 3,
    avatar: <UserAvatar />,
    name: 'Bank of ...',
    account: '@McDona...',
    isFollowed: false,
  },
  {
    id: 4,
    avatar: <UserAvatar />,
    name: 'Bank of ...',
    account: '@McDona...',
    isFollowed: false,
  },
];

const dummyPosts = [
  {
      id: 1,
      avatar: <PostUserAvatar />,
      name: 'Apple',
      account: '@apple',
      postTime: '3小時',
      postMsg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio doloremque culpa vitae quam veniam reiciendis officia, tenetur voluptate similique a error recusandae voluptates commodi enim consequuntur sed modi odit sit!',
      isLiked: true,
  },
  {
      id: 2,
      avatar: <PostUserAvatar />,
      name: 'ASUS',
      account: '@asus',
      postTime: '4小時',
      postMsg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio doloremque culpa vitae quam veniam reiciendis officia, tenetur voluptate similique a error recusandae voluptates commodi enim consequuntur sed modi odit sit!',
      isLiked: false,
  },
  {
      id: 3,
      avatar: <PostUserAvatar />,
      name: 'Dell',
      account: '@dell',
      postTime: '5小時',
      postMsg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio doloremque culpa vitae quam veniam reiciendis officia, tenetur voluptate similique a error recusandae voluptates commodi enim consequuntur sed modi odit sit!',
      isLiked: true,
  },
  {
      id: 4,
      avatar: <PostUserAvatar />,
      name: 'Samsung',
      account: '@samsung',
      postTime: '6小時',
      postMsg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio doloremque culpa vitae quam veniam reiciendis officia, tenetur voluptate similique a error recusandae voluptates commodi enim consequuntur sed modi odit sit!',
      isLiked: false,
  },
]


const MainPage = () => {
  const [ trendUsers, setTrenderUsers ] = useState(dummyTrenders)
  const [ postCards, setPostCards ] = useState(dummyPosts)

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

  const handleToggleLike = (id, isLiked) => {
    setPostCards((prevCards) => {
      return prevCards.map((card) => {
        if (card.id === id) {
          return {
            ...card,
            isLiked: !isLiked,
          }
        }
        return card
      })
    })
  }

    return (
        <div className="twitter">
          <Sidebar />
          <Twittes postCards={postCards} onToggleLike={handleToggleLike}/>
          {/* <Profile /> */}
          {/* <OtherUserProfile /> */}
          <Populars trendUsers={trendUsers} onTogglefollow={handleToggleFollow}/>
        </div>
      );
}

export default MainPage