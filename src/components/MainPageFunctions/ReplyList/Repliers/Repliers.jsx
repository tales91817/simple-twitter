import React from 'react'
import './repliers.scss'

const Repliers = ({ allReplies }) => {
  return (
    <div className="replyPost-wrapper">
      {allReplies.map((post) => (
        <div className="repliesCard">
        <div className="replyUserImg">
          <img src={post.avatar} alt="avatar" />
        </div>
        <div className="replyCardRightSide">
          <div className="cardtitle">
            <div className="cardName">
              {post.name}
            </div>
            <div className="postUserAccount">
              {post.tweetAuthorAccount}
            </div>
          </div>
          <div className="cardContent">
            <div className="replyTo">
            回覆給<span>{post.commentAccount}</span>
            </div>
            <div className="description">
              {post.comment}
            </div>
          </div>
        </div>
      </div>
    ))}
    </div>
  )
}

export default Repliers