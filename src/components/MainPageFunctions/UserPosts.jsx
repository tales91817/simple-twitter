import React from 'react'
import { ReactComponent as ReplyIcon } from 'assets/icons/icon_reply.svg'
import { ReactComponent as LikeIcon } from 'assets/icons/icon_like.svg'
import { ReactComponent as LikedIcon } from 'assets/icons/icon_like_slected.svg'
import { Link } from 'react-router-dom'

const UserPosts = ({ postCards, onToggleLike, onOpenModalReply }) => {
    
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
    <div className='post-wrapper'>
        {postCards.map((post) => (
            <div className="postCard">
            <div className="postCardImg">
                <img src={post.userAvatar} alt="user-avatar" />
            </div>
            <div className="postCardRightSide">
                <div className="postCardtitle">
                    <div className="postCardName">
                        <strong>{post.userName}</strong>
                    </div>
                    <div className="postUserAccount">
                        @{post.userAccount}・<span>{getTimeDifference(post.updatedAt)}</span>
                    </div>
                </div>
                <div className="postCardContent">
                    <Link to="/replyList" className="toReply"><p>{post.description}</p></Link>
                </div>
                <div className="postCardfooter">
                    <div className='postCardIcon'>
                        <ReplyIcon className="icon" onClick={() => {
                            onOpenModalReply(post.id)
                        }}/>
                        <div className="text">{post.repliesNum}</div>
                    </div>
                    <div className='postCardIcon'>
                        <div className="icon" onClick = {() => {
                            onToggleLike(post.id, post.isLiked)
                        }} > { post.isLiked ? <LikedIcon /> : <LikeIcon /> }
                        </div>
                        <div className="text">{post.likes}</div>
                    </div>
                </div>
            </div>
        </div>
        ))}
    </div>
  )
}

export default UserPosts