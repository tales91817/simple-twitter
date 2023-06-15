import React from 'react'
import Avatar from 'assets/images/main-user-John-Doe avatar_50x50.png'
import './repliers.scss'

const Repliers = () => {
  return (
    <div className="replyPost-wrapper">
      {/* {allReplies.map((post) => ( */}
        <div className="repliesCard">
        <div className="replyUserImg">
          <img src={Avatar} alt="avatar" />
        </div>
        <div className="replyCardRightSide">
          <div className="cardtitle">
            <div className="cardName">
              Apple
              {/* {post.name} */}
            </div>
            <div className="postUserAccount">
              @Apple
              {/* {post.tweetAuthorAccount} */}
            </div>
          </div>
          <div className="cardContent">
            <div className="replyTo">
            回覆給<span>@apple</span>
              {/* {post.commentAccount} */}
            </div>
            <div className="description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, suscipit earum voluptate distinctio eligendi temporibus rem reiciendis totam ut. Suscipit quam culpa asperiores debitis earum distinctio ab! Nam, eveniet eius.
              {/* {post.comment} */}
            </div>
          </div>
        </div>
        
      </div>
      {/* ))} */}
    </div>
  )
}

export default Repliers