import React from 'react'
import { ReactComponent as AvatarS } from 'assets/images/main-user-John-Doe avatar_50x50.svg'
/* eslint-disable */ 

const CreateTweet = ({ onChange, inputValue, onAddTweet }) => {
  return (
    <div className='create'>
      <div className="create_container">
        <div className="create_img">
          <AvatarS />
        </div>
        <div className="create_input">
          <input type="text" className="create_control" value={inputValue} placeholder='有什麼新鮮事？' onChange={(e) => {
            onChange(e.target.value)
          }}/>
        </div>
      </div>
      <div className="tweetbar">
        <div className="tweet_btn" onClick={() => onAddTweet()}>
          <a href="#">推文</a>
        </div>
      </div>
    </div>
  )
}

export default CreateTweet