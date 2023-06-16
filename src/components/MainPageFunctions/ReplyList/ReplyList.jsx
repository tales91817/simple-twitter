import React from 'react'
import './replyList.scss'
import { ReactComponent as BackArrowIcon } from 'assets/icons/back-arrow.svg'
import { ReactComponent as ReplyIcon } from 'assets/icons/icon_reply_large.svg'
import { ReactComponent as LikeIcon } from 'assets/icons/icon_like_large.svg'
import Repliers from './Repliers/Repliers'


const ReplyList = ({ onOpenModalReply, allReplies, currentTweet }) => {
  return (
    <div className='replyList'>
      <div className="replyListHeader">
        <BackArrowIcon className='arrow'/>
        <p className="backText">
          推文
        </p>
      </div>
      <div className="replyPost">
        <div className="replyInfo">
          <div className="infoWrapper">
            <img src={currentTweet.avatar} className="replyer" alt="avatar" />
            <div className="replyTitle">
              <div className="name">{currentTweet.name}</div>
              <div className="account">@{currentTweet.account}</div>
            </div>
          </div>
          <div className="replyContent">
            <p>{currentTweet.description}</p>
            <div className="postDate">
              {currentTweet.createdAt}
            </div>
          </div>
        </div>
        <div className="postStatus">
          <span className='numbers'>{currentTweet.repliedCount}</span><p>回覆</p>
          <span className="numbers">{currentTweet.likedCount}</span><p>喜歡次數</p>
        </div>
        <div className="actionIcon">
          <ReplyIcon className="icon" onClick={() => {
              onOpenModalReply(currentTweet.id, currentTweet.avatar, currentTweet.name, currentTweet.account, currentTweet.createdAt, currentTweet.description)
          }}/>
          <LikeIcon className="icon"/>
        </div>
      </div>
      <div className="repliers">
        <Repliers allReplies={allReplies}/>
      </div>
    </div>
  )
}

export default ReplyList