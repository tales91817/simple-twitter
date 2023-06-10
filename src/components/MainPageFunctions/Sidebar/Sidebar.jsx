import React from 'react'
import { ReactComponent as LOGO } from 'assets/icons/LOGO.svg'
import { ReactComponent as HomeIcon } from 'assets/icons/home.svg'
import { ReactComponent as ProfileIcon } from 'assets/icons/profile.svg'
import { ReactComponent as SettingIcon } from 'assets/icons/setting.svg'
import { ReactComponent as LogoutIcon } from 'assets/icons/Logout.svg'
import { Link } from 'react-router-dom'
import './sidebar.scss'

/* eslint-disable */ 

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="btn-wrapper">
            <ul>
                <div className='logo'>
                    <a href="#"><LOGO className='icons' /></a>
                </div>
                <li>
                    <Link to="/"><HomeIcon className='icons' />首頁</Link>
                </li>
                <li>
                    <Link to="profile"><ProfileIcon className='icons' />個人資料</Link>
                </li>
                <li>
                    <Link to="setting"><SettingIcon className='icons' />設定</Link>
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