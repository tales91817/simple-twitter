/* eslint-disable */ 
import React, { useState } from 'react'
import Sidebar from 'components/MainPageFunctions/Sidebar/Sidebar';
import Twittes from 'components/MainPageFunctions/Twittes';
import Populars from 'components/MainPageFunctions/Populars/Populars';
import Profile from 'components/MainPageFunctions/Profile/Profile';
import OtherUserProfile from 'components/MainPageFunctions/OtherUserProfile/OtehrUserProfile'
import 'components/MainPageFunctions/mainPageStyles.scss'
import { ReactComponent as PostUserAvatar } from 'assets/icons/other-user-avatar.svg'
import { DummyTrenders } from 'components/dummyDocument/DummyTrenders';
import './page.scss'
import ReplyModal from 'components/MainPageFunctions/ReplyModal';
import Setting from 'components/MainPageFunctions/Setting/Setting';
import { Route, Router, Routes } from 'react-router-dom';
import ReplyList from 'components/MainPageFunctions/ReplyList/ReplyList';


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


const HomePage = () => {
  const [ trendUsers, setTrenderUsers ] = useState(DummyTrenders)
  const [ postCards, setPostCards ] = useState(dummyPosts)
  const [ openModalReply, setOpenModalReply ] = useState(false)



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

  const handleOpenModalReply = (id) => {
    setOpenModalReply(true)
  }

  const handleCloseModalReply = () => {
    setOpenModalReply(false)
  }



    return (
        <div className="container">
            <Sidebar />
            <Routes>
              <Route exact path="/" element={<Twittes postCards={postCards} onToggleLike={handleToggleLike} onOpenModalReply={handleOpenModalReply}/>} />
              <Route exact path="/profile" element={<Profile />} />
              <Route exact path="/setting" element={<Setting />} />
              <Route exact path="/other" element={<OtherUserProfile />} />
              <Route exact path="/replyList" element={<ReplyList onOpenModalReply={handleOpenModalReply}/>} />
            </Routes>
            <Populars trendUsers={trendUsers} onTogglefollow={handleToggleFollow}/>
            { openModalReply && <ReplyModal closeModal={handleCloseModalReply}/> }
        </div>
      );
}

export default HomePage