import React from 'react'
import { ReactComponent as AvatarS } from 'assets/images/main-user-John-Doe avatar_50x50.svg'
/* eslint-disable */ 

const CreateTweet = ({ onChange, inputValue, onAddTweet, onSubmit, disabledButton, checkWordLength, checkInputIsSpace }) => {
  
  
  return (
    <div className='create'>
      <div className="create_container">
        <div className="create_img">
          <AvatarS />
        </div>
        <div className="create_input">
          <form onSubmit={onSubmit}>
            <textarea type="text" className="create_control" value={inputValue} placeholder='有什麼新鮮事？' onChange={(e) => {
              onChange(e.target.value)
            }}/>
          </form>
        </div>
      </div>
      <div className="tweetbar">
        {checkWordLength === true ? <div className="alertWords">字數不可超過140字</div> : null}
        {checkInputIsSpace === true ? <div className="alertWords">內容不可為空白</div> : null}
        <button className="tweet_btn" onClick={() => onAddTweet()} disabled={disabledButton} >
          推文
        </button>
      </div>
    </div>
  )
}

export default CreateTweet