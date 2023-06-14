import React from 'react'
import { ReactComponent as MyAvatar } from 'assets/images/main-user-John-Doe avatar_50x50.svg'
import { ReactComponent as CloseBtn } from 'assets/icons/close-button.svg'
import { ReactComponent as EditBanner } from 'assets/images/edit-user-info-banner.svg'
import { ReactComponent as Camera } from 'assets/icons/camera.svg'
import { ReactComponent as RemoveBanner } from 'assets/icons/remove-button-banner.svg'
import EditAvatar from 'assets/images/edit-main-user-John-Doe.png'

const EditProfileModal = ({ closeModal }) => {
  return (
    <div className="editModalBackground">
        <div className="editModalContainer">
            <div className="editModalHeader">
                <div className="closeBtn" onClick={() => {
                    closeModal()
                }}><CloseBtn />
                </div>
                <p>編輯個人資料</p>
            </div>
            <div className="editUserInfo">
                <div className="editUserBanner">
                        <EditBanner /> 
                        <Camera className="cameraInBanner"/>
                        <RemoveBanner className="removeBtn" />
                    <div className="editUserAvatar">
                        <Camera className="cameraInAvatar"/>
                        <img src={EditAvatar} alt="avatar" />
                    </div>
                </div>
                
                <div className="editTextInfo">
                    <form>
                        <label>
                            名稱
                            <input type="Text" className="nameText" defaultValue="John Doe" placeholder="請輸入您的名稱" />
                        </label>
                        <label>
                            自我介紹
                            <input type="Text" className="introduceText" defaultValue="John Doe" placeholder="請輸入自我介紹內容" />
                        </label>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditProfileModal