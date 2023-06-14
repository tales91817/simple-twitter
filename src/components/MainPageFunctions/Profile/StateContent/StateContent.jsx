/* eslint-disable */ 
import React from 'react'
import Posts from 'components/MainPageFunctions/Posts'
import UserPosts from 'components/MainPageFunctions/UserPosts'
import './stateContent.scss'

const stateContent = ({ postCards }) => {
  return (
    <div className="userStatusCollection">
        <div className="classCollection">
            <div className="class tweet active">推文</div>
            <div className="class replies">回覆</div>
            <div className="class likeed">喜歡的內容</div>
        </div>
        <UserPosts postCards={postCards}/>
    </div>
  )
}

export default stateContent