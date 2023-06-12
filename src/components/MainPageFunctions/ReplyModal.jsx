import React from 'react'
import { ReactComponent as ModalUserAvatar } from 'assets/icons/other-user-avatar.svg'
import { ReactComponent as MyAvatar } from 'assets/images/main-user-John-Doe avatar_50x50.svg'
import { ReactComponent as CloseBtn } from 'assets/icons/close-button.svg'

const ReplyModal = ({ closeModal }) => {
  
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
                    <ModalUserAvatar />
                </div>
                <div className="modalRightSide">
                    <div className="postUserTitle">
                        <div className="modalUsername">Apple</div>
                        <div className="modalAccount">@apple・<span>3小時</span></div>
                    </div>
                    <div className="postMsg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quidem, eaque sint, eligendi perferendis a aperiam laborum unde natus fugiat assumenda. Quisquam voluptate mollitia blanditiis cupiditate corrupti fuga vero nostrum.
                    </div>
                    <div className="replyTo">回覆給<span>@Mitsubishi</span></div>
                </div>
            </div>
            <div className="myReply">
                <div className="myReplyContainer">
                    <MyAvatar />
                    <div className="replyRightSide">
                        <input type="text" className="replyContent" placeholder='推你的回覆'/>
                    </div>
                </div>
            </div>
            <div className="modalFooter">
                <div className="replyBtn">
                    <p>回覆</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReplyModal