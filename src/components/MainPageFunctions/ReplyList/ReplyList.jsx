import React from 'react'
import './replyList.scss'
import { ReactComponent as BackArrowIcon } from 'assets/icons/back-arrow.svg'
import { ReactComponent as ReplyIcon } from 'assets/icons/icon_reply_large.svg'
import { ReactComponent as LikeIcon } from 'assets/icons/icon_like_large.svg'
import { ReactComponent as LikedIcon } from 'assets/icons/icon_like_slected.svg'
import { ReactComponent as Avatar } from 'assets/icons/other-user-avatar.svg'
import Repliers from './Repliers/Repliers'


const ReplyList = ({ onOpenModalReply, allReplies }) => {
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
            <Avatar className="replyer"/>
            <div className="replyTitle">
              <div className="name">Apple</div>
              <div className="account">@apple</div>
            </div>
          </div>
          <div className="replyContent">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptate nihil repellendus hic, reiciendis voluptates fugiat modi impedit quibusdam cum ipsum, debitis aliquam nulla atque, tenetur repellat asperiores suscipit? Ipsa!</p>
            <div className="postDate">
              上午 10:05・2021年11月10日
            </div>
          </div>
        </div>
        <div className="postStatus">
          <span className='numbers'>34</span><p>回覆</p>
          <span className="numbers">808</span><p>喜歡次數</p>
        </div>
        <div className="actionIcon">
          <ReplyIcon className="icon" onClick={() => {
              onOpenModalReply()
          }}/>
          <LikeIcon className="icon"/><LikedIcon className="icon"/>
        </div>
      </div>
      <div className="repliers">
        <Repliers allReplies={allReplies}/>
      </div>
    </div>
  )
}

export default ReplyList