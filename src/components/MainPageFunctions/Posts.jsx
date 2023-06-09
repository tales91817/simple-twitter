import React from 'react'
import { ReactComponent as ReplyIcon } from 'assets/icons/icon_reply.svg'
import { ReactComponent as LikeIcon } from 'assets/icons/icon_like.svg'
import { ReactComponent as LikedIcon } from 'assets/icons/icon_like_slected.svg'



const posts = ({ postCards, onToggleLike }) => {


  return (
    <div className='post-wrapper'>

            {postCards.map((post) => (
                <div className="postCard">
                <div className="postCardImg">
                    {post.avatar}
                </div>
                <div className="postCardRightSide">
                    <div className="postCardtitle">
                        <div className="postCardName">
                            <strong>{post.name}</strong>
                        </div>
                        <div className="postUserAccount">
                            {post.account}・<span>{post.postTime}</span>
                        </div>
                    </div>
                    <div className="postCardContent">
                        <div className="postCardMsg">
                            <p>{post.postMsg}</p>
                        </div>
                    </div>
                    <div className="postCardfooter">
                        <div className='postCardIcon'>
                            <ReplyIcon className="icon"/>
                            <p>13</p>
                        </div>
                        <div className='postCardIcon'>
                            <div className="icon" onClick = {() => {
                                onToggleLike(post.id, post.isLiked)
                            }} > { post.isLiked ? <LikedIcon /> : <LikeIcon /> }
                            </div>
                            <p>76</p>
                        </div>
                    </div>
                </div>
            </div>
            ))}

    </div>
  )
}

export default posts