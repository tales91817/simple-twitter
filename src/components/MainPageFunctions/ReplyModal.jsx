import React from 'react'
import { ReactComponent as ModalUserAvatar } from 'assets/icons/other-user-avatar.svg'
import { ReactComponent as MyAvatar } from 'assets/images/main-user-John-Doe avatar_50x50.svg'
import { ReactComponent as CloseBtn } from 'assets/icons/close-button.svg'

const currentUserImg = localStorage.getItem("avatar")

const ReplyModal = ({ closeModal, replyPostInfo, onChange, onAddReply, disabledButton }) => {

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
    <div className="modalBackground">
        <div className="modalContainer">
            <div className="modalHeader">
                <div className="closeBtn"onClick={() => {
                    closeModal()
                }}><CloseBtn /></div>
            </div>
            <div className="postContent">
                <div className="modalUserAvatar">
                    <img src={replyPostInfo.avatar} alt="avatar" />
                </div>
                <div className="modalRightSide">
                    <div className="postUserTitle">
                        <div className="modalUsername">{replyPostInfo.name}</div>
                        <div className="modalAccount">@{replyPostInfo.account}・<span>{getTimeDifference(replyPostInfo.createdAt)}</span></div>
                    </div>
                    <div className="postMsg">
                        {replyPostInfo.description}
                    </div>
                    <div className="replyTo">回覆給<span>@{replyPostInfo.account}</span></div>
                </div>
            </div>
            <div className="myReply">
                <div className="myReplyContainer">
                    <img src={currentUserImg} alt="avatar" />
                    <div className="replyRightSide">
                        <form action="submit">
                            <textarea type="text" className="replyContent" placeholder='推你的回覆' onChange={(e) => {
                        onChange(e.target.value)
                        }}/>
                        </form>
                    </div>
                </div>
            </div>
            <div className="modalFooter">
                <button className="replyBtn" onClick={() => onAddReply(replyPostInfo.id)} disabled={disabledButton} >
                    回覆
                </button>
            </div>
        </div>
    </div>
  )
}

export default ReplyModal