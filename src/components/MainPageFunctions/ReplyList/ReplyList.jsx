import React from 'react'
import './replyList.scss'
import { ReactComponent as BackArrowIcon } from 'assets/icons/back-arrow.svg'
import { ReactComponent as ReplyIcon } from 'assets/icons/icon_reply_large.svg'
import { ReactComponent as LikeIcon } from 'assets/icons/icon_like_large.svg'
import Repliers from './Repliers/Repliers'


const ReplyList = ({ onOpenModalReply, allReplies, currentTweet }) => {

  const getTimeDifference = (tweetTimestamp) => {
    const tweetDate = new Date(tweetTimestamp)
    const currentDate = new Date()

    const timeDifference = Math.abs(currentDate - tweetDate) // 獲取兩個日期的毫秒數差距
    const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60)) // 轉換為小時
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)) // 轉換為天數

    if (daysDifference > 0) {
        return `${daysDifference} 天前`;
      } else {
        return `${hoursDifference} 小時前`;
      }
  }

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
              {getTimeDifference(currentTweet.createdAt)}
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