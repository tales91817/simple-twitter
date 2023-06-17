import React from 'react'
import { ReactComponent as CloseBtn } from 'assets/icons/close-button.svg'
import { ReactComponent as MyAvatar } from 'assets/images/main-user-John-Doe avatar_50x50.svg'

const currentUserImg = localStorage.getItem("avatar")

const TwitterModal = ({ closeModal, onAddTweet, onChange, inputValue, checkWordLength, onSubmit, disabledButton, checkInputIsSpace }) => {
  return (
    <div className="modalBackground">
        <div className="modalContainer">
            <div className="modalHeader">
                <div className="closeBtn"onClick={() => {
                    closeModal()
                }}><CloseBtn /></div>
            </div>
            <div className="myTweet">
            <form onSubmit={onSubmit}>
                <div className="myTweetContainer">
                    <img src={currentUserImg} alt="avatar" />
                    <textarea type="text" className="tweetContent" value={inputValue} placeholder='有什麼新鮮事？' onChange={(e) => {
                    onChange(e.target.value)
                    }}/>
                </div>
            </form>
            <div className="modalFooter">
                {checkWordLength === true ? <div className="alertWords">字數不可超過140字</div> : null}
                {checkInputIsSpace === true ? <div className="alertWords">內容不可為空白</div> : null}
                <button type="submit" className="replyBtn" onClick={() => onAddTweet()} disabled={disabledButton}>
                    <p>推文</p>
                </button>
            </div>

            </div>
        </div>
    </div>
  )
}

export default TwitterModal