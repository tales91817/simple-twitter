import React from 'react'
import { ReactComponent as ModalUserAvatar } from 'assets/icons/other-user-avatar.svg'
import { ReactComponent as  MyAvatar } from 'assets/images/main-user-John-Doe avatar_50x50.svg'

const ReplyModal = () => {
  

  return (
    <div className="modalBackground">
        <div className="modalContainer">
            <div className="header">
                <button> X </button>
            </div>
            <div className="postContent">
                <div className="modalUserAvatar">
                    <ModalUserAvatar />
                </div>
                <div className="modalRightSide">
                    <div className="title">
                        <div className="modalUsername">Apple</div>
                        <div className="modalAccount">@apple・<span>3小時</span></div>
                    </div>
                    <div className="postMsg">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quidem, eaque sint, eligendi perferendis a aperiam laborum unde natus fugiat assumenda. Quisquam voluptate mollitia blanditiis cupiditate corrupti fuga vero nostrum.</p>
                    </div>
                    <div className="replyTo">回覆給　<span>@Mitsubishi</span></div>
                </div>
            </div>
            <div className="myReply">
                <div className="myReplyContainer">
                    <MyAvatar />
                    <div className="replyRightSide">
                        <input type="text" className="replyContent" placeholder='推你的回覆？'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReplyModal