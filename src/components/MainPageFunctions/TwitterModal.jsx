import React from 'react'
import { ReactComponent as CloseBtn } from 'assets/icons/close-button.svg'
import { ReactComponent as MyAvatar } from 'assets/images/main-user-John-Doe avatar_50x50.svg'

const TwitterModal = ({ closeModal, onAddTweet, onChange, inputValue }) => {
  return (
    <div className="modalBackground">
        <div className="modalContainer">
            <div className="modalHeader">
                <div className="closeBtn"onClick={() => {
                    closeModal()
                }}><CloseBtn /></div>
            </div>
            <div className="myTweet">
                <div className="myTweetContainer">
                    <MyAvatar />
                    <div className="tweetRightSide">
                        <input type="text" className="tweetContent" value={inputValue} placeholder='有什麼新鮮事？' onChange={(e) => {
                        onChange(e.target.value)
                        }}/>
                    </div>
                </div>
            </div>
            <div className="modalFooter">
                <div className="replyBtn" onClick={() => onAddTweet()} >
                    <p>推文</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TwitterModal