import React from 'react'
import { ReactComponent as PostUserAvatar } from 'assets/icons/other-user-avatar.svg'
import { ReactComponent as ReplyIcon } from 'assets/icons/icon_reply.svg'
import { ReactComponent as LikeIcon } from 'assets/icons/icon_like.svg'

const posts = () => {
  return (
    <div className='post-wrapper'>
        <div className="postBorder">
            <div className="postCard">
                <div className="postCardImg">
                    <PostUserAvatar />
                </div>
                <div className="postCardRightSide">
                    <div className="postCardtitle">
                        <div className="postCardName">
                            <strong>Apple</strong>
                        </div>
                        <div className="postUserAccount">
                            @apple・<span>3小時</span>
                        </div>
                    </div>
                    <div className="postCardContent">
                        <div className="postCardMsg">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Optio doloremque culpa vitae quam veniam reiciendis officia, 
                                tenetur voluptate similique a error recusandae voluptates 
                                commodi enim consequuntur sed modi odit sit!
                            </p>
                        </div>
                    </div>
                    <div className="postCardfooter">
                        <div className='postCardIcon'>
                            <ReplyIcon className="icon"/>
                            <p>13</p>
                        </div>
                        <div className='postCardIcon'>
                            <LikeIcon className="icon" />
                            <p>76</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default posts