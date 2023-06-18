import React from 'react'
import { ReactComponent as CloseBtn } from 'assets/icons/close-button.svg'
import { ReactComponent as EditBanner } from 'assets/images/edit-user-info-banner.svg'
import { ReactComponent as Camera } from 'assets/icons/camera.svg'
import { ReactComponent as RemoveBanner } from 'assets/icons/remove-button-banner.svg'
import EditAvatar from 'assets/images/edit-main-user-John-Doe.png'

const currentUserName = localStorage.getItem("name")
const currentUserImg = localStorage.getItem("avatar")
const currentUserCover = localStorage.getItem("cover")
const currentUserSelf = localStorage.getItem("introduction")

const EditProfileModal = ({ closeModal, onSave, onChangeName, onChangeIntro, onChangeImg }) => {
  return (
    <div className="editModalBackground">
        <div className="editModalContainer">
            <div className="editModalHeader">
                <div className="closeBtn" onClick={() => {
                    closeModal()
                }}><CloseBtn />
                <p>編輯個人資料</p>
                </div>
                
                <button type="submit" className="save" onClick={() => {
                    onSave()
                }}>
                    儲存
                </button>
            </div>
            <div className="editUserInfo">
                <div className="editUserBanner">
                        <img src={currentUserCover} alt="cover" />
                        <div className="camera" onChangeImg={() => {
                            onChangeImg()
                        }}>
                        <Camera className="cameraInBanner"/>
                        </div>
                        <RemoveBanner className="removeBtn" />
                    <div className="editUserAvatar">
                        <Camera className="cameraInAvatar"/>
                        <img src={currentUserImg} alt="avatar" />
                    </div>
                </div>
                
                <div className="editTextInfo">
                    <form>
                        <label>
                            名稱
                            <input type="Text" className="nameText" defaultValue={currentUserName} placeholder="請輸入您的名稱" onChange={(e) => {
                                onChangeName(e.target.value)

                            }}/>
                        </label>
                        <label>
                            自我介紹
                            <textarea type="Text" className="introduceText" defaultValue={currentUserSelf} placeholder="請輸入自我介紹內容" onChange={(e) => {
                                onChangeIntro(e.target.value)
                            }}/>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditProfileModal