/* eslint-disable */ 
import React, { useState } from 'react'
import UserPosts from 'components/MainPageFunctions/UserPosts'
import UserReplies from './UserReplies/UserReplies'
import Liked from './Liked/Liked'
import './stateContent.scss'


const stateContent = ({ postCards, onOpenModalReply, allReplies, onToggleLike, likes }) => {
  const [activeTab, setActiveTab] = useState("tweet");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="userStatusCollection">
        <div className="classCollection">
            <div className={activeTab === "tweet" ? "active" : "class"} onClick={() => {
              handleTabChange("tweet")
            }} >推文</div>
            <div className={activeTab === "replies" ? "active" : "class"} onClick={() => {
              handleTabChange("replies")
            }} >回覆</div>
            <div className={activeTab === "liked" ? "active" : "class"} onClick={() => {
              handleTabChange("liked")
            }} >喜歡的內容</div>
        </div>
        {activeTab === "tweet" && <UserPosts postCards={postCards} onOpenModalReply={onOpenModalReply} />}
        {activeTab === "replies" && <UserReplies allReplies={allReplies}/>}
        {activeTab === 'liked' && <Liked onToggleLike={onToggleLike} onOpenModalReply={onOpenModalReply} likes={likes}/> }
    </div>
  )
}

export default stateContent