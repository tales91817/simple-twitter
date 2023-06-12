import React from 'react'
import { ReactComponent as LOGO } from 'assets/icons/LOGO.svg'
import { ReactComponent as HomeIcon } from 'assets/icons/home.svg'
import { ReactComponent as ProfileIcon } from 'assets/icons/profile.svg'
import { ReactComponent as SettingIcon } from 'assets/icons/setting.svg'
import { ReactComponent as LogoutIcon } from 'assets/icons/Logout.svg'
/* eslint-disable */ 

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="btn-wrapper">
            <ul>
                <div className='logo'>
                    <a href="#"><LOGO className='icons'/></a>
                </div>
                <li>
                    <a href="#"><HomeIcon className='icons'/>首頁</a>
                </li>
                <li>
                    <a href="#"><ProfileIcon className='icons'/>個人資料</a>
                </li>
                <li>
                    <a href="#"><SettingIcon className='icons'/>設定</a>
                </li>
                <div className="sidebar_Btn">
                    <a href="#">推文</a>
                </div>
            </ul>
        </div>
        <div className="logout">
            <div className="logoutBtn">
                <LogoutIcon /><div className='logoutText'>登出</div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar