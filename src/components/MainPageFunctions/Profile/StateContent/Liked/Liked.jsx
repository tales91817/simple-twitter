import React from 'react'
import { ReactComponent as ReplyIcon } from 'assets/icons/icon_reply.svg'
import { ReactComponent as LikedIcon } from 'assets/icons/icon_like_slected.svg'
import './liked.scss'

const Liked = ({ onToggleLike, onOpenModalReply, likes }) => {

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
    <div className='likes-wrapper'>
        {likes.map((like) => (
            <div className="likesPostCard">
            <div className="likesPostCardImg">
                <img src={like.userAvatar} alt="user-avatar" />
            </div>
            <div className="likesPostCardRightSide">
                <div className="likesPostCardtitle">
                    <div className="likesPostCardName">
                        <strong>{like.userName}</strong>
                    </div>
                    <div className="likesPostUserAccount">
                        @{like.userAccount}・<span>{getTimeDifference(like.updatedAt)}</span>
                    </div>
                </div>
                <div className="likesPostCardContent">
                    <p>{like.description}</p>
                </div>
                <div className="likesPostCardfooter">
                    <div className='likesPostCardIcon'>
                        <ReplyIcon className="icon" onClick={() => {
                            onOpenModalReply(like.id)
                        }}/>
                        <div className="text">{like.repliesNum}</div>
                    </div>
                    <div className='likesPostCardIcon'>
                        <div className="icon" >  <LikedIcon />
                        </div>
                        <div className="text">{like.likes}</div>
                    </div>
                </div>
            </div>
        </div>
    ))}
    </div>
  )
}

export default Liked