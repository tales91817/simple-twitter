import React from 'react'
import './setting.scss'

const dummyUserInfo = {
    id: 1,
    account: 'wonderwoman',
    name: 'Diana',
    email: 'diana@gmail.com',
    password: '',
    passwordComfirmation: ''
}

const Setting = () => {
  return (
    <div className="settingContainer">
        <div className="settingHeader">帳戶設定</div>
        <div className="settingForm">
            <form>
                <label>
                    帳號
                    <input type="text" defaultValue={dummyUserInfo.account} placeholder="請輸入您的帳號" />
                </label>
                <label>
                    名稱
                    <input type="text" defaultValue={dummyUserInfo.name} placeholder="請輸入您的名稱" />
                </label>
                <label>
                    Email
                    <input type="text" defaultValue={dummyUserInfo.email} placeholder="請輸入您的Email" />
                </label>
                <label>
                    密碼
                    <input type="text" placeholder="請設定密碼" />
                </label>
                <label>
                    密碼再確認
                    <input type="text" placeholder="請再次輸入密碼" />
                </label>
            </form>
        </div>
        <div className="saveBtn">
           <button type="submit">儲存</button>
        </div>
    </div>
  )
}

export default Setting